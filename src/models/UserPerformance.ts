import { UserPerformance as UserPerformanceType } from '../types/user'

export class UserPerformance {
  userId: number
  kind: { [key: number]: string }
  data: Array<{
    value: number

    kind: number
  }>

  constructor(data: UserPerformanceType) {
    this.userId = data.userId
    this.kind = data.kind
    this.data = data.data
  }

  getData(): UserPerformanceType {
    return {
      userId: this.userId,
      kind: this.kind,
      data: this.data,
    }
  }

  getKindName(key: number): string {
    return this.kind[key]
  }
}
