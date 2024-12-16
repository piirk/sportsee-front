export class UserSessions {
  userId: number
  sessions: Array<{
    day: number
    sessionLength: number
  }>

  constructor(data: {
    userId: number
    sessions: Array<{ day: number; sessionLength: number }>
  }) {
    this.userId = data.userId
    this.sessions = data.sessions
  }
}
