import {
  getUserData,
  getUserActivity,
  getUserSessions,
  getUserPerformance,
} from './api'
import { User } from '../models/User'
import {
  UserData,
  UserActivity,
  UserSessions,
  UserPerformance,
} from '../types/user'

export class UserService {
  private user: User | null = null

  async loadUser(id: string) {
    try {
      const userData: UserData = await getUserData(id)
      const userActivity: UserActivity = await getUserActivity(id)
      const userSessions: UserSessions = await getUserSessions(id)
      const userPerformance: UserPerformance = await getUserPerformance(id)

      this.user = new User(
        userData,
        userActivity,
        userSessions,
        userPerformance,
      )
    } catch (error) {
      console.error('Error loading user data:', error)
    }
  }

  getUser(): User | null {
    return this.user
  }
}
