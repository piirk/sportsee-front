import { UserPerformanceData } from './UserPerformanceData'
import { UserPerformanceKind } from './UserPerformanceKind'

export class UserPerformance {
  userId: number
  kind: { [key: number]: string }
  data: UserPerformanceData[]

  constructor(data: {
    userId: number
    kind: { [key: number]: string }
    data: UserPerformanceData[]
  }) {
    this.userId = data.userId
    this.kind = new UserPerformanceKind(data.kind)
    this.data = data.data
  }

  getKindName(key: number): string {
    return this.kind[key]
  }
}
