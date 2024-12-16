export class UserActivity {
  userId: number
  sessions: Array<{
    day: string
    kilogram: number
    calories: number
  }>

  constructor(data: {
    userId: number
    sessions: Array<{ day: string; kilogram: number; calories: number }>
  }) {
    this.userId = data.userId
    this.sessions = data.sessions
  }
}
