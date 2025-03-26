<?php
namespace UpAssist\Neos\Reactions\Domain\Model;

/*
 * This file is part of the UpAssist.Neos.Reactions package.
 */

use Neos\Flow\Annotations as Flow;
use Doctrine\ORM\Mapping as ORM;

/**
 * @Flow\Entity
 */
class Reaction
{

    /**
     * @var string
     */
    protected string $nodeIdentifier;

    /**
     * @var string
     */
    protected string $reactionType;

    /**
     * @var array
     * @ORM\Column(type="json", nullable=false)
     */
    protected array $dimensions = [];

    /**
     * @return string
     */
    public function getNodeIdentifier(): string
    {
        return $this->nodeIdentifier;
    }

    /**
     * @param string $nodeIdentifier
     * @return void
     */
    public function setNodeIdentifier($nodeIdentifier): void
    {
        $this->nodeIdentifier = $nodeIdentifier;
    }
    /**
     * @return string
     */
    public function getReactionType(): string
    {
        return $this->reactionType;
    }

    /**
     * @param string $reactionType
     * @return void
     */
    public function setReactionType($reactionType): void
    {
        $this->reactionType = $reactionType;
    }

    /**
     * @return array
     */
    public function getDimensions(): array
    {
        return $this->dimensions;
    }

    /**
     * @param array $dimensions
     * @return void
     */
    public function setDimensions(array $dimensions): void
    {
        $this->dimensions = $dimensions;
    }

}
