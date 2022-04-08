export interface NestedShape {
  keyA: string,
  keyB: string,
}

export interface ExternalShape {
  name: string,
  value: number,
  nested: NestedShape,
}
