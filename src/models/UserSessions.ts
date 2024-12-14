import { UserSessions as UserSessionsType } from '../types/user'

export class UserSessions {
  userId: number
  sessions: Array<{
    day: number
    sessionLength: number
  }>

  constructor(data: UserSessionsType) {
    this.userId = data.userId
    this.sessions = data.sessions
  }
}
