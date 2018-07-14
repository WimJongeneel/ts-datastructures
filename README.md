# ts-datastructures
Datastructures in TypeScript: linked-list, double-linked-list, queue, stack, map

## Linked List

### Create
```ts
<T>Create(items: Array<T> = []) : LinkedList<T>
```
A static method that creates a new List.

**example:**
```ts
let emptyList = LinkedList::Create<User>()

let userList = LinkedList::Create<User>([
  {id: 1, username: 'Dave'},
  {id: 2, username: 'Also Dave'}
])
```

### AddFirst
```ts
AddFirst(item: T) : void
```

Adds an item to the list at the first spot.

**example:**
```ts
let emptyList = LinkedList::Create<User>()

userList.addFirst({id: 3, username: 'Harry'})
```

### AddLast
```ts
AddLast(item: T): void
```

Adds an item to the end of the list.

**example:**
```ts
let emptyList = LinkedList::Create<User>()

userList.AddLast({id: 3, username: 'Harry'})
```

### Find
```ts
Find(item: t): Node<t> | null
```

Find the node for an item. This function uses the default equality operator `==`.
Causes an iteration.

**example:**
```ts
let dave = {id: 1, username: 'Dave'}

let userList = LinkedList::Create<User>([
  dave
])

let node = userList.Find(dave)
```

### Remove
```ts
Remove(n: Node<t>) : void
```

Removes a node from the list.
causes an iteration.

**example:**
```ts
let dave = {id: 1, username: 'Dave'}

let userList = LinkedList::Create<User>([
  dave
])

let node = userList.Find(dave)
userList.Remove(node)
```

### RemoveItem
```ts
RemoveItem(item: t) : void
```

Removes a item from the list.
causes an iteration.

**example:**
```ts
let dave = {id: 1, username: 'Dave'}

let userList = LinkedList::Create<User>([
  dave
])

userList.RemoveItem(dave)
```

### Map
```ts
Map<U>(f: (_: T) => U) : LinkedList<U>
```

Maps a List to another List by using the provided fucntion.
Causes an iteration

**example:**
```ts
let userList = LinkedList::Create<User>([
  {id: 1, username: 'Dave'},
  {id: 2, username: 'Also Dave'}
])

let ids = userList.Map<number>(user => user.id)
```

### ForEach
```ts
Foreach<u>(f: (_: t) => u) : void
```

Executes a side effect for every item in the list.
Causes an iteration

**example:**
```ts
let userList = LinkedList::Create<User>([
  {id: 1, username: 'Dave'},
  {id: 2, username: 'Also Dave'}
])

userList.ForEach(user => console.log(user))
```

## setup

```sh
yarn install
```

## build

```sh
yarn run webpack
```

## run

```sh
node ./dist/bundle.js
```
