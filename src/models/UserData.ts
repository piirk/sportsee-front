import { UserData as UserDataType } from '../types/user'

export class UserData {
  id: number
  userInfos: {
    firstName: string
    lastName: string
    age: number
  }
  keyData: {
    calorieCount: number
    proteinCount: number
    carbohydrateCount: number
    lipidCount: number
  }
  todayScore?: number
  score?: number

  constructor(data: UserDataType) {
    this.id = data.id
    this.userInfos = data.userInfos
    this.keyData = data.keyData
    this.todayScore = data.todayScore ?? undefined
    this.score = data.score ?? undefined
  }

  getFirstName(): string {
    return this.userInfos.firstName
  }

  getDailyScore(): number {
    return this.todayScore ?? this.score ?? 0
  }

  getAllKeyData(): {
    calorieCount: number
    proteinCount: number
    carbohydrateCount: number
    lipidCount: number
  } {
    return this.keyData
  }
}
