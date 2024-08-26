import { FC, useState } from 'react'
import logo from '../../../public/logo.png'
import { useLocation, useNavigate } from 'react-router-dom'
import { baseInstance } from '../../api/config'
import SearchBar from '../search/SearchBar'
import axios from 'axios'
import Swal from 'sweetalert2'

const MyHeader: FC<{ onSearch: (query: string) => void }> = ({ onSearch }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [isLogoutClicked, setIsLogoutClicked] = useState(false)
  const [searchQuery, setSearchQuery] = useState<string>('')
  const userName = localStorage.getItem('userName')
  const handleLogout = async () => {
    setIsLogoutClicked(true)

    try {
      const accessToken = localStorage.getItem('accessToken')
      const refreshToken = localStorage.getItem('refreshToken')

      if (accessToken && refreshToken) {
        // 로그아웃 API를 호출하여 서버에서 로그아웃 처리
        const response = await baseInstance.post('/users/logout', {
          accessToken,
          refreshToken,
        })

        if (response.status === 200) {
          // 서버에서 로그아웃이 성공하면 로컬 스토리지에서 토큰을 삭제하고 홈페이지로 이동
          localStorage.removeItem('accessToken')
          localStorage.removeItem('refreshToken')
          navigate('/')
        } else {
          // 서버에서 로그아웃이 실패하면 에러 처리
          console.error('로그아웃 실패')
        }
      } else {
        console.error('로그아웃 실패: 토큰이 유효하지 않습니다.')
      }
    } catch (error) {
      console.error('로그아웃 중 오류 발생:', error)
    }
  }

  const goToWish = () => {
    navigate('/shelf')
  }

  const goToStatistic = () => {
    navigate('/choose')
  }

  const goToMain = () => {
    navigate('/')
  }

  const handleSearch = async () => {
    onSearch(searchQuery)
  }

  const headerStyle = {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
    display: 'flex',
    justifyContent: 'space-between',
  }

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between w-full px-4"
      style={headerStyle}>
      <div className="flex justify-start items-center">
        <img
          src={logo}
          alt="Header Image"
          className="cursor-pointer m-6"
          style={{ width: 'auto', height: '100px' }}
          onClick={goToMain}
        />
        <SearchBar onSearch={handleSearch} onInputChange={setSearchQuery} />
      </div>

      <div
        className="flex items-center justify-end space-x-4"
        style={{ fontFamily: 'Noto Sans KR' }}>
        <p className="text-sm py-2 mb-8 rounded-md">{userName}</p>
        <p className="text-black text-sm px-2 py-2 mb-8 rounded-md">|</p>
        <button className="text-black  text-sm py-2 mb-8 rounded-md" onClick={goToWish}>
          내 서재
        </button>
        <p className="text-black text-sm px-2 py-2 mb-8 rounded-md">|</p>
        <button
          className="text-black text-sm py-2 mb-8 rounded-md"
          style={{
            color:
              location.pathname === '/choose' ||
              location.pathname === '/statistics' ||
              location.pathname === '/stack'
                ? '#BFC66A'
                : 'black',
          }}
          onClick={goToStatistic}>
          독서 통계
        </button>
        <p className="text-black text-sm px-2 py-2 mb-8 rounded-md">|</p>
        <button
          className="text-black text-sm pr-2 py-2 mb-8 rounded-md"
          style={{
            color: isLogoutClicked ? '#BFC66A' : 'black', // 클릭 상태에 따라 색상 변경
          }}
          onClick={handleLogout}>
          로그아웃
        </button>
      </div>
    </div>
  )
}

export default MyHeader
