const API_BASE_URL = 'http://localhost:3000'

export const fetchUserData = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/user/${id}`)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const result = await response.json()
    return result
  } catch (error) {
    console.error('Failed to fetch user data:', error)
    throw error
  }
}
