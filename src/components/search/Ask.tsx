import { styled } from 'styled-components'

export default function Ask() {
  return (
    <div>
      <AskContainer>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="35"
          viewBox="0 0 54 47"
          fill="none">
          <path
            d="M54 22.0343C54 34.2035 41.9108 44.0686 27 44.0686C24.3258 44.0719 21.6627 43.7481 19.0789 43.1053C17.1079 44.0371 12.582 45.825 4.968 46.9897C4.293 47.0904 3.78 46.4357 4.04663 45.8502C5.24137 43.2187 6.32137 39.7121 6.64537 36.5139C2.511 32.6422 0 27.5743 0 22.0343C0 9.86506 12.0892 0 27 0C41.9108 0 54 9.86506 54 22.0343ZM16.875 22.0343C16.875 21.1994 16.5194 20.3988 15.8865 19.8085C15.2535 19.2182 14.3951 18.8865 13.5 18.8865C12.6049 18.8865 11.7464 19.2182 11.1135 19.8085C10.4806 20.3988 10.125 21.1994 10.125 22.0343C10.125 22.8691 10.4806 23.6698 11.1135 24.2601C11.7464 24.8504 12.6049 25.182 13.5 25.182C14.3951 25.182 15.2535 24.8504 15.8865 24.2601C16.5194 23.6698 16.875 22.8691 16.875 22.0343ZM30.375 22.0343C30.375 21.1994 30.0194 20.3988 29.3865 19.8085C28.7535 19.2182 27.8951 18.8865 27 18.8865C26.1049 18.8865 25.2465 19.2182 24.6135 19.8085C23.9806 20.3988 23.625 21.1994 23.625 22.0343C23.625 22.8691 23.9806 23.6698 24.6135 24.2601C25.2465 24.8504 26.1049 25.182 27 25.182C27.8951 25.182 28.7535 24.8504 29.3865 24.2601C30.0194 23.6698 30.375 22.8691 30.375 22.0343ZM40.5 25.182C41.3951 25.182 42.2535 24.8504 42.8865 24.2601C43.5194 23.6698 43.875 22.8691 43.875 22.0343C43.875 21.1994 43.5194 20.3988 42.8865 19.8085C42.2535 19.2182 41.3951 18.8865 40.5 18.8865C39.6049 18.8865 38.7465 19.2182 38.1135 19.8085C37.4806 20.3988 37.125 21.1994 37.125 22.0343C37.125 22.8691 37.4806 23.6698 38.1135 24.2601C38.7465 24.8504 39.6049 25.182 40.5 25.182Z"
            fill="white"
          />
        </svg>
        <Text>문의하기</Text>
      </AskContainer>
    </div>
  )
}

const AskContainer = styled.button`
  width: 12rem;
  height: 4.5rem;
  border-radius: 2.5rem;
  background: rgba(51, 109, 26, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  bottom: 20px;
  right: 50px;
  z-index: 1000;
`

const Text = styled.h1`
  color: #fff;
  text-align: center;
  font-size: 22px;
  font-style: normal;
  /* font-weight: 400; */
  font-weight: bold;
  line-height: normal;
  margin-left: 22px;
`
