import { UserData } from '../models/UserData'
import { UserActivity } from '../models/UserActivity'
import { UserSessions } from '../models/UserSessions'
import { UserPerformance } from '../models/UserPerformance'

const API_BASE_URL = 'http://localhost:3001'

type ApiResponse = UserData | UserActivity | UserPerformance | UserSessions

const fetchData = async <T extends ApiResponse>(uri: string): Promise<T> => {
  try {
    const response = await fetch(`${API_BASE_URL}/${uri}`)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const result = await response.json()
    return result.data as T
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Failed to fetch data:', error.message)
    } else {
      console.error('Failed to fetch data: Unknown error')
    }
    throw error
  }
}

export const getUserData = async (id: string): Promise<UserData> => {
  return fetchData<UserData>(`user/${id}`)
}

export const getUserActivity = async (id: string): Promise<UserActivity> => {
  return fetchData<UserActivity>(`user/${id}/activity`)
}

export const getUserSessions = async (id: string): Promise<UserSessions> => {
  return fetchData<UserSessions>(`user/${id}/average-sessions`)
}

export const getUserPerformance = async (
  id: string,
): Promise<UserPerformance> => {
  return fetchData<UserPerformance>(`user/${id}/performance`)
}
