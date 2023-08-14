import { useNavigate, useLocation } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import "../scss/BookDetail.scss";
import StatBtn from "../components/StatBtn";

export default function SearchDetail() {
  const location = useLocation();
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/my/ing');
  };

  const cover_image_url = location.state.cover_image_url;
  const title = location.state.title;
  const author = location.state.author;
  const publisher = location.state.publisher;
  const id = location.state.id;

  return (
    <div className="frame">
      <ArrowBackIosRoundedIcon onClick={goBack} className="back_arrow" />
      <div className="context_layout">
        <img src={cover_image_url} alt="책 표 지" className="bookimage" />
        <div className="booktitle">{title}</div>
        <div className="bookauthor">작가: {author}</div>
        <div className="bookauthor">출판사: {publisher}</div>
        <StatBtn id={id} />
        <div className="navbar_layout">
          <NavigationBar />
        </div>
      </div>
    </div>
  );
}