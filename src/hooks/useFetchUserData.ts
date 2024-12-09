import { useState, useEffect } from 'react'
import { UserData } from '../models/UserData'
import { UserPerformance } from '../models/UserPerformance'
import { UserActivity } from '../models/UserActivity'
import { UserSessions } from '../models/UserSessions'
import {
  getUserData,
  getUserPerformance,
  getUserActivity,
  getUserSessions,
} from '../services/api'

export const useFetchUserData = (userId: string) => {
  const [userData, setUserData] = useState<UserData | null>(null)
  const [userPerformance, setUserPerformance] =
    useState<UserPerformance | null>(null)
  const [userActivity, setUserActivity] = useState<UserActivity | null>(null)
  const [userSessions, setUserSessions] = useState<UserSessions | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchAllData = async () => {
      setLoading(true)
      try {
        const [
          userDataResponse,
          userPerformanceResponse,
          userActivityResponse,
          userSessionsResponse,
        ] = await Promise.all([
          getUserData(userId),
          getUserPerformance(userId),
          getUserActivity(userId),
          getUserSessions(userId),
        ])

        setUserData(new UserData(userDataResponse))
        setUserPerformance(new UserPerformance(userPerformanceResponse))
        setUserActivity(new UserActivity(userActivityResponse))
        setUserSessions(new UserSessions(userSessionsResponse))
      } catch (error) {
        setError((error as Error).message)
        console.error('Error loading user data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchAllData()
  }, [userId])

  return {
    userData,
    userPerformance,
    userActivity,
    userSessions,
    loading,
    error,
  }
}
