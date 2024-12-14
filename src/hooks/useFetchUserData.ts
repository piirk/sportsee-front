import { useState, useEffect } from 'react'
import { UserData } from '../models/UserData'
import { getUserData } from '../services/api'

export const useFetchUserData = (userId: string) => {
  const [userData, setUserData] = useState<UserData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchAllData = async () => {
      setLoading(true)
      try {
        const [userDataResponse] = await Promise.all([getUserData(userId)])

        setUserData(new UserData(userDataResponse))
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
    loading,
    error,
  }
}
