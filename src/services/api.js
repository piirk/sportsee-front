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

export const getUserData = async (id) => {
  return fetchData(`user/${id}`)
}

export const getUserActivity = async (id) => {
  return fetchData(`user/${id}/activity`)
}

export const getUserAverageSession = async (id) => {
  return fetchData(`user/${id}/average-sessions`)
}

export const getUserPerformance = async (id) => {
  return fetchData(`user/${id}/performance`)
}
