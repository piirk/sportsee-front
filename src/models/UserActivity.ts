import { UserActivity as UserActivityType } from '../types/user'

export class UserActivity {
  userId: number
  sessions: Array<{
    day: string
    kilogram: number
    calories: number
  }>

  constructor(data: UserActivityType) {
    this.userId = data.userId
    this.sessions = data.sessions
  }
}
