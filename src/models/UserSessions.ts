import { UserSessions as UserSessionsType } from '../types/user'

export class UserSessions {
  private userId: number
  private sessions: Array<{
    day: number
    sessionLength: number
  }>

  constructor(data: UserSessionsType) {
    this.userId = data.userId
    this.sessions = data.sessions
  }

  getData(): UserSessionsType {
    return {
      userId: this.userId,
      sessions: this.sessions,
    }
  }
}
