import { UserData } from '../types/user'

const API_BASE_URL = 'http://localhost:3001'

const fetchData = async <T>(uri: string): Promise<T> => {
  try {
    const response = await fetch(`${API_BASE_URL}/${uri}`)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const result = await response.json()
    return result.data as T
  } catch (error) {
    console.error('Failed to fetch data:', error)
    throw error
  }
}

export const getUserData = async (id: string): Promise<UserData> => {
  return fetchData(`user/${id}`)
}

export const getUserActivity = async (id: string): Promise<any> => {
  return fetchData(`user/${id}/activity`)
}

export const getUserAverageSession = async (id: string): Promise<any> => {
  return fetchData(`user/${id}/average-sessions`)
}

export const getUserPerformance = async (id: string): Promise<any> => {
  return fetchData(`user/${id}/performance`)
}
