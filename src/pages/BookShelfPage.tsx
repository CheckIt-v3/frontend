import React, { useEffect, useState } from 'react'
import Shelf from '../components/shelf/Shelf.tsx'
import ChangeShelf from '../components/shelf/ChangeShelf.tsx'
import Header from '../components/Header/ShelfHeader.tsx'
import DetailModal from '../components/shelf/DetailModal.tsx'
import ReviewModal from '../components/shelf/ReviewModal.tsx'
import axios from 'axios'

const BookShelfPage: React.FC = () => {
  // 3개의 책장 구성
  const [selectedShelf, setSelectedShelf] = useState<'shelf1' | 'shelf2' | 'shelf3'>('shelf2') // 초기 책장 선택 상태

  const handleShelfChange = (newShelf: 'shelf1' | 'shelf2' | 'shelf3') => {
    setSelectedShelf(newShelf)
    setCurrentPage(1) // 책장을 변경할 때 페이지를 리셋
  }

  // 페이지네이션
  const [currentPage, setCurrentPage] = useState<number>(1)
  const booksPerPage = 10 // 한 페이지에 보여줄 책의 수
  const startIndex = 1 + (currentPage - 1) * booksPerPage // 현재 페이지의 시작 인덱스

  const handleNextPage = () => {
    // 다음 페이지로 이동
    setCurrentPage((currrentPage) => currrentPage + 1)
  }

  const handlePrevPage = () => {
    // 이전 페이지로 이동
    setCurrentPage((currrentPage) => currrentPage - 1)
  }

  const shelves = {
    shelf1: [{}],
    shelf2: [{}],
    shelf3: [{}],
  }

  // api 요청
  async function bookInfo() {
    try {
      const access = localStorage.getItem('accessToken')

      const response_2 = await axios.get('http://localhost:8080/api/v1/readings?status=READING', {
        headers: { Authorization: `Bearer ${access}` },
      })
      const readingData_2 = response_2.data

      // 읽고 있는 책 서재 배열에 넣어줌
      shelves.shelf2.push(...readingData_2.slice(0, readingData_2.length).map((item: any) => item))
      ///
      ///
      // const response_3 = await axios.get('http://localhost:8080/api/v1/readings?status=READ', {
      //   headers: { Authorization: `Bearer ${access}` },
      // })
      // const readingData_3 = response_3.data

      // console.log('readingData3', readingData_3)
      // // 읽은 책 서재 배열에 넣어줌

      // shelves.shelf3.push(readingData_3[0])
    } catch (error) {
      console.log(error)
    }
  }

  // 컴포넌트가 마운트될 때만 실행되도록 설정
  useEffect(() => {
    bookInfo().then(() => {
      console.log('바뀐 배열2', shelves.shelf2)
      // console.log('바뀐 배열3', shelves.shelf3)
    })
  }, []) // 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행

  // // 책장에 보여줄 책 목록을 상태로 관리
  // const shelves = {
  //   //찜한책
  //   shelf1: [
  //     {
  //       id: 1,
  //       title: '책 제목 1',
  //       status: '찜',
  //       author: '저자 1',
  //       img_url: 'src/assets/images/1.png',
  //       pageCount: 70,
  //     },
  //     {
  //       id: 2,
  //       title: '책 제목 2',
  //       status: '찜',
  //       author: '저자 2',
  //       img_url: 'src/assets/images/2.png',
  //       pageCount: 70,
  //     },
  //     {
  //       id: 3,
  //       title: '책 제목 3',
  //       status: '찜',
  //       author: '저자 3',
  //       img_url: 'src/assets/images/3.png',
  //       pageCount: 70,
  //     },
  //     {
  //       id: 4,
  //       title: '책 제목 4',
  //       status: '찜',
  //       author: '저자 4',
  //       img_url: 'src/assets/images/4.png',
  //     },
  //     {
  //       id: 5,
  //       title: '책 제목 5',
  //       status: '찜',
  //       author: '저자 5',
  //       img_url: 'src/assets/images/5.png',
  //       pageCount: 70,
  //     },
  //     {
  //       id: 6,
  //       title: '책 제목 6',
  //       status: '찜',
  //       author: '저자 6',
  //       img_url: 'src/assets/images/6.png',
  //       pageCount: 70,
  //     },
  //     {
  //       id: 7,
  //       title: '책 제목 7',
  //       status: '찜',
  //       author: '저자 7',
  //       img_url: 'src/assets/images/7.png',
  //       pageCount: 70,
  //     },
  //     {
  //       id: 8,
  //       title: '책 제목 8',
  //       status: '찜',
  //       author: '저자 8',
  //       img_url: 'src/assets/images/8.png',
  //       pageCount: 70,
  //     },
  //     {
  //       id: 9,
  //       title: '책 제목 9',
  //       status: '찜',
  //       author: '저자 9',
  //       img_url: 'src/assets/images/9.png',
  //       pageCount: 70,
  //     },
  //     {
  //       id: 10,
  //       title: '책 제목 10',
  //       status: '찜',
  //       author: '저자 10',
  //       img_url: 'src/assets/images/10.png',
  //       pageCount: 70,
  //     },
  //   ],
  //   //읽고 있는 책
  //   shelf2: [
  //     {
  //       id: 6,
  //       title: '책 제목 6',
  //       status: '읽는 중',
  //       author: '저자 6',
  //       img_url: 'src/assets/images/6.png',
  //       pageCount: 70,
  //     },
  //     {
  //       id: 7,
  //       title: '책 제목 7',
  //       status: '읽는 중',
  //       author: '저자 7',
  //       img_url: 'src/assets/images/7.png',
  //       pageCount: 70,
  //     },
  //     {
  //       id: 8,
  //       title: '책 제목 8',
  //       status: '읽는 중',
  //       author: '저자 8',
  //       img_url: 'src/assets/images/8.png',
  //       pageCount: 70,
  //     },
  //     {
  //       id: 9,
  //       title: '책 제목 9',
  //       status: '읽는 중',
  //       author: '저자 9',
  //       img_url: 'src/assets/images/9.png',
  //       pageCount: 70,
  //     },
  //     {
  //       id: 10,
  //       title: '책 제목 10',
  //       status: '읽는 중',
  //       author: '저자 10',
  //       img_url: 'src/assets/images/10.png',
  //       pageCount: 70,
  //     },
  //     {
  //       id: 1,
  //       title: '책 제목 1',
  //       status: '읽는 중',
  //       author: '저자 1',
  //       img_url: 'src/assets/images/1.png',
  //       pageCount: 70,
  //     },
  //     {
  //       id: 2,
  //       title: '책 제목 2',
  //       status: '읽는 중',
  //       author: '저자 2',
  //       img_url: 'src/assets/images/2.png',
  //       pageCount: 70,
  //     },
  //     {
  //       id: 3,
  //       title: '책 제목 3',
  //       status: '읽는 중',
  //       author: '저자 3',
  //       img_url: 'src/assets/images/3.png',
  //       pageCount: 70,
  //     },
  //     {
  //       id: 4,
  //       title: '책 제목 4',
  //       status: '읽는 중',
  //       author: '저자 4',
  //       img_url: 'src/assets/images/4.png',
  //       pageCount: 70,
  //     },
  //     {
  //       id: 5,
  //       title: '책 제목 5',
  //       status: '읽는 중',
  //       author: '저자 5',
  //       img_url: 'src/assets/images/5.png',
  //       pageCount: 70,
  //     },
  //     {
  //       id: 11,
  //       title: '책 제목 11',
  //       status: '읽는 중',
  //       author: '저자 11',
  //       img_url: 'src/assets/images/3.png',
  //       pageCount: 70,
  //     },
  //     {
  //       id: 12,
  //       title: '책 제목 12',
  //       status: '읽는 중',
  //       author: '저자 12',
  //       img_url: 'src/assets/images/4.png',
  //       pageCount: 70,
  //     },
  //     {
  //       id: 13,
  //       title: '책 제목 13',
  //       status: '읽는 중',
  //       author: '저자 13',
  //       img_url: 'src/assets/images/5.png',
  //       pageCount: 70,
  //     },
  //   ],
  //   //읽은 책
  //   shelf3: [
  //     {
  //       id: 9,
  //       title: '책 제목 9',
  //       status: '읽음',
  //       author: '저자 9',
  //       img_url: 'src/assets/images/9.png',
  //       pageCount: 70,
  //     },
  //     {
  //       id: 10,
  //       title: '책 제목 10',
  //       status: '읽음',
  //       author: '저자 10',
  //       img_url: 'src/assets/images/10.png',
  //       pageCount: 70,
  //     },
  //     {
  //       id: 4,
  //       title: '책 제목 4',
  //       status: '읽음',
  //       author: '저자 4',
  //       img_url: 'src/assets/images/4.png',
  //       pageCount: 70,
  //     },
  //     {
  //       id: 5,
  //       title: '책 제목 5',
  //       status: '읽음',
  //       author: '저자 5',
  //       img_url: 'src/assets/images/5.png',
  //       pageCount: 70,
  //     },
  //     {
  //       id: 6,
  //       title: '책 제목 6',
  //       status: '읽음',
  //       author: '저자 6',
  //       img_url: 'src/assets/images/6.png',
  //       pageCount: 70,
  //     },

  //     {
  //       id: 1,
  //       title: '책 제목 1',
  //       status: '읽음',
  //       author: '저자 1',
  //       img_url: 'src/assets/images/1.png',
  //       pageCount: 70,
  //     },
  //     {
  //       id: 2,
  //       title: '책 제목 2',
  //       status: '읽음',
  //       author: '저자 2',
  //       img_url: 'src/assets/images/2.png',
  //       pageCount: 70,
  //     },
  //     {
  //       id: 3,
  //       title: '책 제목 3',
  //       status: '읽음',
  //       author: '저자 3',
  //       img_url: 'src/assets/images/3.png',
  //       pageCount: 70,
  //     },
  //     {
  //       id: 7,
  //       title: '책 제목 7',
  //       status: '읽음',
  //       author: '저자 7',
  //       img_url: 'src/assets/images/7.png',
  //       pageCount: 70,
  //     },
  //     {
  //       id: 8,
  //       title: '책 제목 8',
  //       status: '읽음',
  //       author: '저자 8',
  //       img_url: 'src/assets/images/8.png',
  //       pageCount: 70,
  //     },
  //   ],
  // }

  // 선택된 책장의 책 목록을 가져옵니다.
  const currentShelfBooks = shelves[selectedShelf]

  // 모달창 상태 관리
  const [isModalOpen, setIsModalOpen] = useState(false)

  // 선택된 책 정보를 관리할 상태
  const [selectedBook, setSelectedBook] = useState<{
    // id: number
    // title: string
    // status: string
    // author: string
    // img_url: string

    author: string
    cover_image_url: string
    height: string
    id: number
    like_status: boolean
    likes: number
    pages: number
    publisher: string
    title: string
    width: number
    status: string
  } | null>(null)

  const openModal = (book: {
    // id: number
    // title: string
    // status: string
    // author: string
    // img_url: string

    author: string
    cover_image_url: string
    height: string
    id: number
    like_status: boolean
    likes: number
    pages: number
    publisher: string
    title: string
    width: number
    status: string
  }) => {
    setSelectedBook(book)
    setIsModalOpen(true)
  }

  return (
    <div>
      <Header />
      <div className="container mx-auto p-4 flex flex-col items-center m-32">
        <ChangeShelf onShelfChange={handleShelfChange} selectedShelf={selectedShelf} />
        <div className="flex flex-row ">
          <img
            src="src/assets/images/prevBtn.svg"
            onClick={handlePrevPage}
            className="w-10 cursor-pointer m-14"
          />
          <Shelf
            startIndex={startIndex}
            endIndex={startIndex + booksPerPage}
            currentPage={currentPage}
            currentShelfBooks={currentShelfBooks}
            setIsModalOpen={setIsModalOpen}
            openModal={openModal}
          />
          <img
            src="src/assets/images/nextBtn.svg"
            onClick={handleNextPage}
            className="w-10 cursor-pointer m-14"
          />
        </div>
      </div>
      {isModalOpen && selectedBook?.status == '읽는 중' && (
        <div className="">
          <DetailModal setIsModalOpen={setIsModalOpen} book={selectedBook} />
        </div>
      )}
      {isModalOpen && selectedBook?.status == '읽음' && (
        <div className="">
          <ReviewModal setIsModalOpen={setIsModalOpen} book={selectedBook} />
        </div>
      )}
    </div>
  )
}

export default BookShelfPage