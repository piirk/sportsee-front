import { UserPerformance as UserPerformanceType } from '../types/user'

export class UserPerformanceModel {
  private data: UserPerformanceType

  constructor(data: UserPerformanceType) {
    this.data = data
  }

  getData(): UserPerformanceType {
    return this.data
  }
}
