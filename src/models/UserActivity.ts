import { UserActivity as UserActivityType } from '../types/user'

export class UserActivity {
  private data: UserActivityType

  constructor(data: UserActivityType) {
    this.data = data
  }
}
