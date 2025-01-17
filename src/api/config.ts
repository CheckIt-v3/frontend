import axios from 'axios'

const BASE_URL = import.meta.env.VITE_REACT_APP_API_KEY

export const baseInstance = axios.create({
  withCredentials: true,
  baseURL: BASE_URL, // 기본 URL 설정
})

const token = localStorage.getItem('accessToken')
if (token) {
  baseInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

// Accept 헤더를 기본 헤더에 추가
baseInstance.defaults.headers.common['Accept'] = '*/*'

export const updateToken = (token: string) => {
  baseInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`
}
