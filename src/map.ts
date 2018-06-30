export class KeyValue<t, u> {
  key: t
  item: u
}

export class Map<key extends number | string | boolean, value> {
  private values: KeyValue<key, value>[] = []

  constructor(values: KeyValue<key, value>[] = []) {
    this.values = values
  }

  Has(key: key): boolean {
    return this.values.find(x => x.key == key) != undefined
  }

  Get(key: key): value | null {
    let n = this.values.find(x => x.key == key)

    if (n == null) return null
    return n.item
  }

  Set(key: key, item: value) {
    let n = this.values.find(x => x.key == key)

    if (n == null) {
      this.values.push({ key, item })
    } else {
      n.item = item
    }
  }

  Map<u>(f: (key: key, item: value) => u): Map<key, u> {
    let vs = this.values.map(
      v => ({ key: v.key, item: f(v.key, v.item) })
    )

    return new Map(vs)
  }

  Foreach<u>(f: (key: key, item: value) => u) {
    this.values.forEach(
      v => f(v.key, v.item)
    )
  }

  Count(): number {
    return this.values.length
  }

  IsEmpty(): boolean {
    return this.values.length == 0
  }

  Any(f: (key: key, item: value) => boolean): boolean {
    return this.values.some(
      v => f(v.key, v.item)
    )
  }

  All(f: (key: key, item: value) => boolean): boolean {
    return this.values.every(
      v => f(v.key, v.item)
    )
  }

  Filter(f: (key: key, item: value) => boolean): Map<key, value> {
    return new Map(this.values.filter(
      v => f(v.key, v.item)
    ))
  }

  Find(item: value): KeyValue<key, value> {
    return this.values.find(
      v => v.item == item
    )
  }

  FindAll(item: value): KeyValue<key, value>[] {
    return this.values.filter(
      v => v.item == item
    )
  }

  Remove(key: key) {
    this.values = this.values.filter(
      v => v.key != key
    )
  }

  RemoveItem(item: value) {
    this.values = this.values.filter(
      v => v.item != item
    )
  }

  RemoveNode(node: KeyValue<key, value>) {
    this.Remove(node.key)
  }

  Clone(): Map<key, value> {
    return new Map([...this.values])
  }

  Clear() {
    this.values = []
  }

  Values(): value[] {
    return this.values.map(
      v => v.item
    )
  }

  Keys(): key[] {
    return this.values.map(
      v => v.key
    )
  }

  Reduce<u>(f: (result: u, value: KeyValue<key, value>) => u, value: u): u {
    return this.values.reduce(
      f, value
    )
  }
}
