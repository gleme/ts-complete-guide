import { NumbersCollection } from './NumbersCollection';
import { LinkedList } from './LinkedList';
import { CharactersCollection } from './CharactersCollection';

const numCol = new NumbersCollection([1 ,-1, 0]);
const charCol = new CharactersCollection('bca');
const ll = new LinkedList();
ll
  .add(1)
  .add(-1)
  .add(0);

numCol.sort();
charCol.sort();
ll.sort();

console.log(`Numbers Collection: ${numCol.data}`);
console.log(`Characters Collection: ${charCol.data}`)
console.log(`Linked List: ${ll.toString()}`);