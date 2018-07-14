# ts-datastructures

* [Setup](#setup)
* [Build](#build)
* [Run](#run)
* [Linked List](#linked-list)
* [Double Linked List](#double-linked-list)
* [Stack](#stack)
* [Queue](#queue)

## setup

```sh
yarn install
```

## Build

```sh
yarn run webpack
```

## Run

```sh
node ./dist/bundle.js
```

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

### Filter

```ts
Filter(f: (_: t) => boolean) : LinkedList<t>
```
Return a List for the items where `f` returns true.
Causes an iteration.

**example:**
```ts
let userList = LinkedList::Create<User>([
  {id: 1, username: 'Dave'},
  {id: 2, username: 'Also Dave'}
  {id: 3, username: 'Harry'}
])

let daves = userList.Filter<User>(
  user => user.username.contains('Dave')
)
```

### Reduce
```ts
Reduce<R>(f: (value: R, current_item: T) => R, initial_value: R) : R
```
Turns a List into a single value.
Causes an iteration

**example:**
```ts
let numbers = LinkedList::Create<number>([1, 2, 3])

let total = number.Reduce((r,v) => r + v, 0)
```

### Any
```ts
Any(f: (_: T) => boolean): boolean
```
Return `true` if the provided function returns `true` for one of the items in the list.
Causes an iteration.

**example:**
```ts
let numbers = LinkedList::Create<number>([1, 2, 3])

let containsTwo = number.Any(n => n == 2)
```

### Any
```ts
All(f: (_: T) => boolean): boolean
```
Return `true` if the provided function returns `true` for all the items in the list.
Causes an iteration.

**example:**
```ts
let numbers = LinkedList::Create<number>([1, 2, 3])

let noNegativeNumbers = number.All(n => n > 0)
```

### IsEmpty
```ts
IsEmpty() : boolean
```
Returns `true` if the List is empty.

**example:**
```ts
let numbers = LinkedList::Create<number>([1, 2, 3])

let isEmpty = numbers.IsEmpty()
```

### Count
```ts
Count(f: (_: t) => boolean = _ => true): number
```
Counts the items for witch `f` returns `true`. It counts all items if no function is provided.
Causes an iteration
**example:**
```ts
let numbers = LinkedList::Create<number>([1, 2, 3])

let itemsInList = LinkedList.Count()

let positiveNumbers = LinkedList.Count(n => n > 0)
```

## Double Linked List

## Stack

## Queue