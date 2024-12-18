export class UserPerformanceKind {
  [key: number]: string

  constructor(kind: { [key: number]: string }) {
    Object.assign(this, kind)
  }
}
