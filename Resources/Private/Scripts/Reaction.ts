class ReactionHandler {
	private nodeIdentifier: string
	private dimensions: string
	private reactionContainer: HTMLElement | null
	private currentReaction: string | null

	constructor(nodeIdentifier: string) {
		this.nodeIdentifier = nodeIdentifier
		this.reactionContainer = document.querySelector<HTMLElement>(`[data-reaction-identifier="${nodeIdentifier}"]`)
		this.dimensions = this.reactionContainer?.dataset.reactionDimensions || '{}'

		this.currentReaction = this.getStoredReaction()
		this.init()
	}

	private async addReaction(type: string): Promise<void> {
		try {
			let previousReaction = this.currentReaction

			// Step 1: Remove previous reaction if it exists
			if (previousReaction && previousReaction !== type) {
				await this.removeReaction(previousReaction)
				this.updateLocalCount(previousReaction, -1) // Decrease previous count
			}

			// Step 2: If the same reaction is clicked, remove it (undo reaction)
			if (this.currentReaction === type) {
				await this.removeReaction(type)
				this.currentReaction = null
				this.updateLocalCount(type, -1) // Decrease count
			} else {
				// Step 3: Otherwise, add the new reaction
				await fetch(`/api/reactions/addReaction?nodeIdentifier=${this.nodeIdentifier}&reactionType=${type}&dimensions=${this.dimensions}`, {
					method: 'POST'
				})
				this.currentReaction = type
				this.updateLocalCount(type, 1) // Increase count
			}

			// Step 4: Update local storage and UI
			this.updateLocalStorage()
			this.updateButtonStyles()

			// Step 5: Fetch the latest reaction counts
			await this.updateReactionCount()
		} catch (error) {
			console.error('Error updating reaction:', error)
		}
	}

	private async removeReaction(type: string): Promise<void> {
		await fetch(`/api/reactions/removeReaction?nodeIdentifier=${this.nodeIdentifier}&reactionType=${type}&dimensions=${this.dimensions}`, {
			method: 'POST'
		})
	}

	private async updateReactionCount(): Promise<void> {
		try {
			const response = await fetch(`/api/reactions/countReactions?nodeIdentifier=${this.nodeIdentifier}&dimensions=${this.dimensions}`, {
				method: 'POST'
			})
			const data = await response.json()

			if (this.reactionContainer) {
				this.reactionContainer.dataset.reactionTotal = data.totalCount
			}

			// Update counts for each reaction type
			data.result.forEach(element => {
				this.setReactionCount(element.reactionType, element.count)
			})
		} catch (error) {
			console.error('Error fetching reaction count:', error)
		}
	}

	// Get stored reaction for current dimensions
	private getStoredReaction(): string | null {
		const storageKey = `reaction_${this.nodeIdentifier}`
		const stored = localStorage.getItem(storageKey)

		if (stored) {
			const parsed = JSON.parse(stored)
			const dimensionsKey = this.getDimensionsKey()
			if (parsed[dimensionsKey]) {
				return parsed[dimensionsKey].reaction
			}
		}
		return null
	}

	// Update local storage with reaction, storing all dimensions under one key
	private updateLocalStorage(): void {
		const storageKey = `reaction_${this.nodeIdentifier}`
		const dimensionsKey = this.getDimensionsKey()

		let storedData = localStorage.getItem(storageKey)
		let parsedData = storedData ? JSON.parse(storedData) : {}

		if (this.currentReaction) {
			parsedData[dimensionsKey] = { reaction: this.currentReaction }
		} else {
			delete parsedData[dimensionsKey]
		}

		if (Object.keys(parsedData).length > 0) {
			localStorage.setItem(storageKey, JSON.stringify(parsedData))
		} else {
			localStorage.removeItem(storageKey)
		}
	}

	// Generate a unique key for the current dimensions
	private getDimensionsKey(): string {
		return `dimensions_${btoa(this.dimensions)}` // Base64 encoding to ensure uniqueness
	}

	// Directly updates the displayed count for a reaction type
	private setReactionCount(type: string, count: number): void {
		const countElement = this.reactionContainer?.querySelector<HTMLElement>(`[data-reaction-count="${type}"]`)
		if (countElement) {
			countElement.innerText = count > 0 ? count.toString() : "" // Set to empty string if 0
		}
	}

	// Adjusts the count locally for immediate UI feedback
	private updateLocalCount(type: string, change: number): void {
		const countElement = this.reactionContainer?.querySelector<HTMLElement>(`[data-reaction-count="${type}"]`)
		if (countElement) {
			const currentCount = parseInt(countElement.innerText, 10) || 0
			const newCount = currentCount + change
			countElement.innerText = newCount > 0 ? newCount.toString() : "" // Prevents negative numbers, empty if 0
		}
	}

	private updateButtonStyles(): void {
		if (!this.reactionContainer) return

		this.reactionContainer.querySelectorAll('[data-reaction]').forEach(button => {
			const type = (button as HTMLElement).dataset.reaction
			button.classList.toggle('selected', this.currentReaction === type)
		})
	}

	private init(): void {
		if (!this.reactionContainer) return

		this.updateReactionCount()
		this.updateButtonStyles()

		this.reactionContainer.querySelectorAll('[data-reaction]').forEach(button => {
			button.addEventListener('click', event => {
				const type = (event.currentTarget as HTMLElement).dataset.reaction
				if (type) {
					this.addReaction(type)
				}
			})
		})
	}
}

// Initialize for each reaction component on the page
document.addEventListener('DOMContentLoaded', () => {
	document.querySelectorAll<HTMLElement>('[data-reaction-identifier]').forEach(element => {
		new ReactionHandler(element.dataset.reactionIdentifier!)
	})
})
