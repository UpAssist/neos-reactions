<?php
declare(strict_types=1);

namespace UpAssist\Neos\Reactions\Domain\Repository;

use Neos\Flow\Persistence\Repository;
use Neos\Flow\Annotations as Flow;
use UpAssist\Neos\Reactions\Domain\Model\Reaction;

/**
 * @Flow\Scope("singleton")
 */
class ReactionRepository extends Repository
{
    // Customized methods can go here
    public function findOneByNodeIdentifierAndReactionType(string $nodeIdentifier, string $reactionType, array $dimensions): ?Reaction
    {
        $query = $this->createQuery();
        $reactions = $query->matching($query->logicalAnd(
            $query->equals('nodeIdentifier', $nodeIdentifier),
            $query->equals('reactionType', $reactionType),
            $query->equals('dimensions', json_encode($dimensions))
        ))->execute();
        if ($reactions->count()) {
            return $reactions->getFirst();
        }
        return null;
    }
}
