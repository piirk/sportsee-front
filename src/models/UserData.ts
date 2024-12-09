import { UserData as UserDataType } from '../types/user'

export class UserData {
  private id: number
  private userInfos: {
    firstName: string
    lastName: string
    age: number
  }
  private keyData: {
    calorieCount: number
    proteinCount: number
    carbohydrateCount: number
    lipidCount: number
  }
  private todayScore?: number
  private score?: number

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
