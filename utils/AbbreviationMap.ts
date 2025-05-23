export class AbbreviationMap<T extends Record<string, string>> {
  private readonly map: T

  constructor(map: T) {
    this.map = map
  }

  getLabelForCode(code: keyof T): T[keyof T] | undefined {
    return this.map[code]
  }

  getCodeForLabel(label: string): keyof T | undefined {
    return Object.entries(this.map).find(([, v]) => v === label)?.[0] as keyof T | undefined
  }

  entries(): [keyof T, T[keyof T]][] {
    return Object.entries(this.map) as [keyof T, T[keyof T]][]
  }

  keys(): (keyof T)[] {
    return Object.keys(this.map) as (keyof T)[]
  }

  values(): T[keyof T][] {
    return Object.values(this.map) as T[keyof T][]
  }
}
