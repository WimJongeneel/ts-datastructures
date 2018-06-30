import { LinkedList } from "./linked_list"

export class Stack<t> {
  private items: LinkedList<t> = LinkedList.Create()

  Push(item: t) {
    this.items.AddFirst(item)
  }

  Pop(): t {
    let item = this.items.first
    this.items.Remove(this.items.first)
    return item.item
  }

  Peek(): t | null {
    if (this.items.first != null)
      return this.items.first.item
    else
      return null
  }

  IsEmpty(): boolean {
    return this.items.IsEmpty()
  }

  Size(): number {
    return this.items.Count()
  }
}