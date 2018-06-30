export class Node<t> {
  item: t
  next: Node<t> | null

  constructor(item: t) {
    this.item = item
  }
}

export class LinkedList<t> {
  first: Node<t> | null
  last: Node<t> | null

  AddLast(item: t) {
    let n = new Node(item)

    if (this.first == null) {
      this.first = this.last = n
      return
    }

    this.last.next = n
    this.last = n
  }

  AddFirst(item: t) {
    let n = new Node(item)

    if (this.first == null) {
      this.first = this.last = n
      return
    }

    n.next = this.first
    this.first = n
  }

  private constructor() { }

  static Create<t>(items: t[] = []): LinkedList<t> {
    let list = new LinkedList<t>()

    items.forEach(i => list.AddLast(i))

    return list
  }

  Find(item: t): Node<t> | null {
    let c = this.first

    while (c != undefined) {
      if (c.item == item) return c

      c = c.next
    }
  }

  Remove(n: Node<t>) {
    if (this.first == n) {
      this.first = n.next
    }

    if (this.first == null) {
      this.last = this.first
    }

    let c = this.first
    while (c != null) {
      if (c.next == n) {
        c.next = n.next
        if (c.next == null) {
          this.last = n
        }
        return
      }
      c = c.next
    }
  }

  RemoveItem(item: t) {
    let n = this.Find(item)

    if (item != null) this.Remove(n)
  }

  Map<u>(f: (_: t) => u): LinkedList<u> {
    let c = this.first
    let list = new LinkedList<u>()

    while (c != null) {
      list.AddLast(f(c.item))
      c = c.next
    }

    return list
  }

  Foreach<u>(f: (_: t) => u) {
    let c = this.first

    while (c != null) {
      f(c.item)
      c = c.next
    }
  }

  Filter(f: (_: t) => boolean): LinkedList<t> {
    let c = this.first
    let list = new LinkedList<t>()

    while (c != null) {
      if (f(c.item)) list.AddLast(c.item)
      c = c.next
    }

    return list
  }

  Reduce<r>(f: (r: r, v: t) => r, value: r): r {
    let c = this.first
    let r = value

    while (c != null) {
      r = f(r, c.item)
      c = c.next
    }

    return r
  }

  Any(f: (_: t) => boolean): Boolean {
    let c = this.first

    while (c != null) {
      if (f(c.item)) return true
      c = c.next
    }

    return false
  }

  All(f: (_: t) => boolean): boolean {
    let c = this.first

    while (c != null) {
      if (!f(c.item)) return false
      c = c.next
    }

    return true
  }

  IsEmpty(): boolean {
    return this.first == null
  }

  Count(f: (_: t) => boolean = _ => true): number {
    let c = this.first
    let n = 0

    while (c != null) {
      if (f(c.item)) n++
      c = c.next
    }

    return n
  }
}