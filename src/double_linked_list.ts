export class Node<t> {
  item: t
  prevvious: Node<t> | null
  next: Node<t> | null

  constructor(item: t) {
    this.item = item
  }
}

export class DLList<t> {
  first: Node<t> | null = null
  last: Node<t> | null = null

  private constructor() { }

  static Create<t>(items: t[] = []): DLList<t> {
    let list = new DLList<t>()

    if (items.length == 0) return list

    list.first = list.last = new Node(items.shift())

    items.forEach(i => list.AddLast(i))

    return list
  }

  AddLast(item: t) {
    let n = new Node(item)

    if (this.first == undefined) {
      this.first = this.last = n
      return
    }

    n.prevvious = this.last
    this.last.next = n
    this.last = n
  }

  AddFirst(item: t) {
    let n = new Node(item)

    if (this.first == undefined) {
      this.first = this.last = n
      return
    }

    n.next = this.first
    this.first.prevvious = n
    this.first = n
  }

  Find(item: t): Node<t> | null {
    let c = this.first

    while (c != undefined) {
      if (c.item == item)
        return c

      c = c.next
    }
  }

  FindAll(item: t): Node<t>[] | null {
    let c = this.first
    let r: Node<t>[] = []

    while (c != undefined) {
      if (c.item == item)
        r.push(c)

      c = c.next
    }

    return r
  }

  Remove(item: t) {
    let n = this.Find(item)

    if (n == undefined) return

    this.RemoveNode(n)
  }

  RemoveNode(n: Node<t>) {
    if (n == this.first) {
      n.next.prevvious = null
      this.first = n.next
    } else if (n == this.last) {
      n.prevvious.next = null
      this.last = n.prevvious
    } else {
      n.prevvious.next = n.next
      n.next.prevvious = n.prevvious
    }
  }

  Map<u>(f: (_: t) => u): DLList<u> {
    let c = this.first
    let list = DLList.Create<u>()

    while (c != undefined) {
      list.AddLast(f(c.item))
      c = c.next
    }

    return list
  }

  Foreach<u>(f: (_: t) => u) {
    let c = this.first

    while (c != undefined) {
      f(c.item)
      c = c.next
    }
  }

  Count(f: (_: t) => boolean = _ => true): number {
    let r = 0
    let c = this.first

    while (c != undefined) {
      if (f(c.item)) r++
      c = c.next
    }

    return r
  }

  IsEmpty(): boolean {
    return this.first == null
  }

  Any(f: (_: t) => boolean): boolean {
    let c = this.first

    while (c != undefined) {
      if (f(c.item)) return true
      c = c.next
    }

    return false
  }

  All(f: (_: t) => boolean): boolean {
    let c = this.first

    while (c != undefined) {
      if (!f(c.item)) return false
      c = c.next
    }

    return true
  }

  Filter(f: (_: t) => boolean): DLList<t> {
    let c = this.first
    let list = new DLList<t>()

    while (c != undefined) {
      if (f(c.item)) list.AddLast(c.item)
      c = c.next
    }

    return list
  }

  Reduce<u>(f: (v: u, _: t) => u, v: u): u {
    let c = this.first
    let r = v

    while (c != undefined) {
      r = f(r, c.item)
      c = c.next
    }

    return r
  }

  Reverse() {
    let first = this.first
    this.first = this.last
    this.last = first
    
    let c = first

    while (c != undefined) {
      let next = c.next 
      c.next = c.prevvious
      c.prevvious = next
      c = next
    }
  }
}
