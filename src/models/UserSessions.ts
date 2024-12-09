import { UserSessions as UserSessionsType } from '../types/user'

export class UserSessions {
  private data: UserSessionsType

  constructor(data: UserSessionsType) {
    this.data = data
  }
}
