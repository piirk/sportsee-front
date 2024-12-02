export type UserInfos = {
  firstName: string
  lastName: string
}

export type KeyData = {
  calorieCount: number
  proteinCount: number
  carbohydrateCount: number
  lipidCount: number
}

export type UserData = {
  data: {
    userInfos: UserInfos
    keyData: KeyData
  }
}

type Session = {
  day: string //type Date?
  kilogram: number
  calories: number
}

export type UserActivity = {
  userId: number
  sessions: Session[]
}
