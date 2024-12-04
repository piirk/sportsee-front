// User data
export type UserData = {
  id: string
  userInfos: UserInfo
  keyData: KeyData
  todayScore?: number
  score?: number
}

export type UserInfo = {
  firstName: string
  lastName: string
}

export type KeyData = {
  calorieCount: number
  proteinCount: number
  carbohydrateCount: number
  lipidCount: number
}

// User activity
export type UserActivities = {
  userId: number
  activities: Activity[]
}

export type Activity = {
  day: string
  kilogram: number
  calories: number
}

// User average session
export type UserSessions = {
  userId: number
  sessions: Session[]
}

export type Session = {
  day: number
  length: number
}
