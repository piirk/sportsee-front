import {
  UserData,
  UserActivity,
  UserSessions,
  UserPerformance,
} from '../types/user'
import { UserDataModel } from './UserData'
import { UserActivityModel } from './UserActivity'
import { UserSessionsModel } from './UserSessions'
import { UserPerformanceModel } from './UserPerformance'

export class User {
  private userData: UserDataModel
  private userActivity: UserActivityModel
  private userSessions: UserSessionsModel
  private userPerformance: UserPerformanceModel

  constructor(
    userData: UserData,
    userActivityData: UserActivity,
    userSessionsData: UserSessions,
    userPerformanceData: UserPerformance,
  ) {
    this.userData = new UserDataModel(userData)
    this.userActivity = new UserActivityModel(userActivityData)
    this.userSessions = new UserSessionsModel(userSessionsData)
    this.userPerformance = new UserPerformanceModel(userPerformanceData)
  }

  getFirstName(): string {
    return this.userData.getFirstName()
  }
}
