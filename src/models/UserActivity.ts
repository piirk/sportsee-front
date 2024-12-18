import { UserActivitySession } from './UserActivitySession'

export class UserActivity {
  userId: number
  sessions: UserActivitySession[]

  constructor(data: { userId: number; sessions: UserActivitySession[] }) {
    this.userId = data.userId
    this.sessions = data.sessions
  }
}
