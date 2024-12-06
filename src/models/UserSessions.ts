import { UserSessions as UserSessionsType } from '../types/user'

export class UserSessionsModel {
  private data: UserSessionsType

  constructor(data: UserSessionsType) {
    this.data = data
  }
}
