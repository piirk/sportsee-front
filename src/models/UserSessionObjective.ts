export class UserSessionObjective {
  day: number
  sessionLength: number

  constructor(data: { day: number; sessionLength: number }) {
    this.day = data.day
    this.sessionLength = data.sessionLength
  }
}
