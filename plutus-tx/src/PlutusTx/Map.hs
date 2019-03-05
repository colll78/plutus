module PlutusTx.Map (Map, module Tree) where

import PlutusTx.RBTree as Tree

-- | A map, implemented as a binary search tree. Unlike @Data.Map@ from @containers@,
-- this does not require an 'Ord' instance for keys, but rather the comparison function
-- must be passed on each usage, with the user required to ensure consistency.
type Map = RBTree
