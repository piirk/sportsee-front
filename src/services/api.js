const API_BASE_URL = 'http://localhost:3000'

const fetchData = async (url) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${url}`)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const result = await response.json()
    return result
  } catch (error) {
    console.error('Failed to fetch data:', error)
    throw error
  }
}

export const fetchUserData = async (id) => {
  return fetchData(`user/${id}`)
}

export const fetchUserActivity = async (id) => {
  return fetchData(`user/${id}/activity`)
}

export const fetchUserAverageSession = async (id) => {
  return fetchData(`user/${id}/average-sessions`)
}

export const fetchUserPerformance = async (id) => {
  return fetchData(`user/${id}/performance`)
}
