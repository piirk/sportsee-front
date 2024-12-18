export class UserPerformanceData {
  value: number
  kind: number

  constructor(data: { value: number; kind: number }) {
    this.value = data.value
    this.kind = data.kind
  }
}
