export class UserActivitySession {
  day: string
  kilogram: number
  calories: number

  constructor(data: { day: string; kilogram: number; calories: number }) {
    this.day = data.day
    this.kilogram = data.kilogram
    this.calories = data.calories
  }
}
