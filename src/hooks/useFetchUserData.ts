import { useState, useEffect } from 'react'
import { UserData } from '../models/UserData'
import { UserPerformance } from '../models/UserPerformance'
import { getUserData, getUserPerformance } from '../services/api'

export const useFetchUserData = (userId: string) => {
  const [userData, setUserData] = useState<UserData | null>(null)
  const [userPerformance, setUserPerformance] =
    useState<UserPerformance | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchAllData = async () => {
      setLoading(true)
      try {
        const [userDataResponse, userPerformanceResponse] = await Promise.all([
          getUserData(userId),
          getUserPerformance(userId),
        ])

        setUserData(new UserData(userDataResponse))
        setUserPerformance(new UserPerformance(userPerformanceResponse))
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
    loading,
    error,
  }
}
