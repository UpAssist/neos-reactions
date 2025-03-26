<?php

namespace UpAssist\Neos\Reactions\Controller;

use JetBrains\PhpStorm\NoReturn;
use Neos\Flow\Mvc\Controller\ActionController;
use Neos\Flow\Annotations as Flow;
use Neos\Flow\Persistence\Exception\IllegalObjectTypeException;
use UpAssist\Neos\Reactions\Domain\Model\Reaction;
use UpAssist\Neos\Reactions\Domain\Repository\ReactionRepository;
use Neos\Flow\Mvc\View\JsonView;

/**
 *
 */
class ReactionController extends ActionController
{
    /**
     * @Flow\Inject
     * @var ReactionRepository
     */
    protected ReactionRepository $reactionRepository;

    /**
     * @var string
     */
    protected $defaultViewObjectName = JsonView::class;

    /**
     * @param string $nodeIdentifier
     * @param string $reactionType
     * @return void
     * @throws \Neos\Flow\Persistence\Exception\IllegalObjectTypeException
     */
    public function addReactionAction(string $nodeIdentifier, string $reactionType, array $dimensions): void
    {
        $reaction = new Reaction();
        $reaction->setNodeIdentifier($nodeIdentifier);
        $reaction->setReactionType($reactionType);
        $reaction->setDimensions($dimensions);
        $this->reactionRepository->add($reaction);
        $this->persistenceManager->persistAll();

        $this->view->assign('value', ['success' => true]);
    }

    /**
     * @param string $nodeIdentifier
     * @param string $reactionType
     * @return void
     * @throws IllegalObjectTypeException
     */
    public function removeReactionAction(string $nodeIdentifier, string $reactionType, array $dimensions): void {
        $reaction = $this->reactionRepository->findOneByNodeIdentifierAndReactionType($nodeIdentifier, $reactionType, $dimensions);

        if ($reaction) {
            $this->reactionRepository->remove($reaction);
            $this->persistenceManager->persistAll();
        }

        $this->view->assign('value', ['success' => true]);
    }

    /**
     * @param string $nodeIdentifier
     * @return void
     */
    public function countReactionsAction(string $nodeIdentifier, array $dimensions): void
    {
        $query = $this->reactionRepository->createQuery();
        $result = $query->matching(
            $query->logicalAnd(
                $query->equals('nodeIdentifier', $nodeIdentifier),
                $query->equals('dimensions', json_encode($dimensions))
            ))->execute();
        $count = $result->count();
        $groupedReactions = [];
        foreach ($result as $reaction) {
            $type = $reaction->getReactionType();
            if (!isset($groupedReactions[$type])) {
                $groupedReactions[$type] = 0;
            }
            $groupedReactions[$type]++;
        }

        $data = [
            "totalCount" => $count,
            "result" => array_map(fn($type, $count) => ["reactionType" => $type, "count" => $count], array_keys($groupedReactions), $groupedReactions)
        ];
        $this->view->assign('value', $data);
    }
}
