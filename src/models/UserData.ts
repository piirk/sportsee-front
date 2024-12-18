import { KeyData } from './KeyData'
import { UserInfos } from './UserInfos'

export class UserData {
  id: number
  userInfos: UserInfos
  keyData: KeyData
  todayScore?: number
  score?: number

  constructor(data: {
    id: number
    userInfos: UserInfos
    keyData: KeyData
    todayScore?: number
    score?: number
  }) {
    this.id = data.id
    this.userInfos = data.userInfos
    this.keyData = data.keyData
    this.todayScore = data.todayScore ?? undefined
    this.score = data.score ?? undefined
  }

  getDailyScore(): number {
    return this.todayScore ?? this.score ?? 0
  }
}
