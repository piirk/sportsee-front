import { UserData as UserDataType } from '../types/user'

export class UserDataModel {
  private data: UserDataType

  constructor(data: UserDataType) {
    this.data = data
  }

  getFirstName(): string {
    return this.data.userInfos.firstName
  }

  getDailyScore(): number {
    return this.data.todayScore ?? this.data.score ?? 0
  }
}
