export type User = {
  userData: UserData
  userActivity: UserActivity
  userSessions: UserSessions
  userPerformance: UserPerformance
}

// User data
export type UserData = {
  id: number
  userInfos: UserInfo
  keyData: KeyData
  todayScore?: number
  score?: number
}

export type UserInfo = {
  firstName: string
  lastName: string
  age: number
}

export type KeyData = {
  calorieCount: number
  proteinCount: number
  carbohydrateCount: number
  lipidCount: number
}

// User activity
export type UserActivity = {
  userId: number
  sessions: Activity[]
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
  sessionLength: number
}

// User performance
export type UserPerformance = {
  userId: number
  kind: { [key: number]: string }

  data: Array<{
    value: number

    kind: number
  }>
}

export type Performance = {
  kind: number
  value: number
}
