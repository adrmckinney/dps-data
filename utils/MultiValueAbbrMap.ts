type SchoolEntry = {
  name: string
  abbr: string
  otherNames: string[]
}

type ValueMap = Record<string, SchoolEntry>

export class MultiValueAbbrMap<T extends ValueMap> {
  private map: T

  constructor(map: T) {
    this.map = map
  }

  // Get the primary name for a given abbreviation key
  getLabel(code: keyof T): string {
    return this.map[code].name
  }

  // Get the key from a provided label, searching name, abbr, and otherNames
  getCode(label: string): keyof T | undefined {
    for (const [key, value] of Object.entries(this.map)) {
      const { name, abbr, otherNames } = value
      if (label === name || label === abbr || otherNames.includes(label)) {
        return key as keyof T
      }
    }
    return undefined
  }

  // Get all keys
  keys(): (keyof T)[] {
    return Object.keys(this.map) as (keyof T)[]
  }

  // Get all primary names
  values(): string[] {
    return Object.values(this.map).map((entry) => entry.name)
  }

  // Get all known labels for a given key
  getAllValues(code: keyof T): readonly string[] {
    const { name, abbr, otherNames } = this.map[code]
    const unique = new Set([name, abbr, ...otherNames])
    return Array.from(unique)
  }

  // Get full map
  getRawMap(): T {
    return this.map
  }
}
