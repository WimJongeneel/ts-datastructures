import { LinkedList } from "./linked_list"

export class Queue<t> {
  private items: LinkedList<t> = LinkedList.Create()

  Put(item: t) {
    this.items.AddLast(item)
  }

  Get(): t {
    let item = this.items.first
    this.items.Remove(this.items.first)
    return item.item
  }

  IsEmpty(): boolean {
    return this.items.IsEmpty()
  }

  Size(): number {
    return this.items.Count()
  }
}