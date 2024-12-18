import { UserSessionObjective } from './UserSessionObjective'

export class UserSessions {
  userId: number
  sessions: UserSessionObjective[]

  constructor(data: { userId: number; sessions: UserSessionObjective[] }) {
    this.userId = data.userId
    this.sessions = data.sessions
  }
}
