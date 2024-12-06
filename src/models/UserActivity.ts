import { UserActivity as UserActivityType } from '../types/user'

export class UserActivityModel {
  private data: UserActivityType

  constructor(data: UserActivityType) {
    this.data = data
  }
}
