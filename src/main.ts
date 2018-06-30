import * as DLL from "./double_linked_list"

const ErrorOnFalse = (b: boolean, error: string) => !b && console.error(error)

console.log('Running all the DLL tests')

ErrorOnFalse(
  DLL.DLList.Create().first == null,
  'Frist on empty isnt null'
)

ErrorOnFalse(
  DLL.DLList.Create([1]).first.item == DLL.DLList.Create([1]).last.item,
  'First and last arent equal when lenght is 1'
)

const l = DLL.DLList.Create()
l.AddFirst(1)

ErrorOnFalse(
  l.first.item == DLL.DLList.Create([1]).first.item &&
  l.last.item == DLL.DLList.Create([1]).last.item,
  'Create + addFirst should be the same as Create wih single value'
)

const l1 = DLL.DLList.Create()
l1.AddLast(1)

ErrorOnFalse(
  l1.first.item == DLL.DLList.Create([1]).first.item &&
  l1.last.item == DLL.DLList.Create([1]).last.item,
  'Create + addLast should be the same as Create wih single value'
)

ErrorOnFalse(
  DLL.DLList.Create([1,2,3]).Filter(x => x == 3).first.item == 3,
  'Filter `DLList.Create([1,2,3]).Filter(x => x == 3)` is not returning 3 als first item'
)

const l2 = DLL.DLList.Create([1,2,3])
ErrorOnFalse(
  l2.Find(1).item == 1,
  'Find the first isnt working'
)

ErrorOnFalse(
  l2.Find(4) == null,
  'Find non-existing value is not returning null'
)

ErrorOnFalse(
  l2.Find(3).item == 3,
  'Find the last isnt working'
)

let l3 = DLL.DLList.Create([1,2,3])

ErrorOnFalse(
  l3.first.item == 3,
  'Reverse isnt putting last as first'
)

console.log('Finished running all the DLL tests')

import * as LL from "./linked_list"

console.log('starting the LL tests')

const ll = LL.LinkedList.Create([1])
ll.RemoveItem(1)

ErrorOnFalse(
  ll.first == null,
  'First isnt null when last item is removed'
)

ErrorOnFalse(
  ll.last == null,
  'last isnt null when last item is removed'
)

const ll2 = LL.LinkedList.Create([1])
ll2.AddFirst(0)
ll2.AddLast(2)
ll2.RemoveItem(1)
ll2.RemoveItem(0)
ll2.AddFirst(0)
ll2.AddLast(3)

ErrorOnFalse(
  ll2.first.item == 0,
  'AddFirst doesnt update first'
)