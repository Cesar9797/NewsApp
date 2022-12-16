import { useDispatch } from "react-redux";
import { useState } from "react";
import { Card } from "react-bootstrap";
import Pagination from "../components/Pagination";
import { updateNews } from "../features/news/news.slice";
import { useNavigate } from "react-router-dom";
import '../App.css'
import '../assets/responsive.css'
import NavBar from "../components/NavBar";




export default function MainPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const news = JSON.parse(localStorage.getItem("news"));


  const [currentPage, setCurrentPage] = useState(1);
  const [numPages, setNumPages] = useState(10);


  const lastIndex = currentPage * numPages;
  const firstIndex = lastIndex - numPages;
  const currentNews = news.slice(firstIndex, lastIndex);
  const totalPosts = news.length; 

  const selectedNumPages = (numPages) => {
    setNumPages(numPages)
  }

  const pageSelected = (page) => {
    setCurrentPage(page);
  };

  const funcUpdateNews = (id) => {
    dispatch(updateNews(id));
    navigate("/");

  };

  return (
    <div className="container">
            <NavBar selectedNumPages={selectedNumPages}/>
      <div className="container-main">
        {currentNews.map((n, index) => (
          <Card key={index} style={{position: "relative"}}>
            <div className="container-img">
              <Card.Img
                variant="top"
                src={n.urlToImage}
                style={{ objectFit: "contain", width: "100%" }}
              />
              {n.isFavorite ? (
                <button onClick={() => funcUpdateNews(n.id)} className="fav_btn">
                  <i className="fa-2xl fa-solid fa-heart"></i>
                </button>
              ) : (
                <button onClick={() => funcUpdateNews(n.id)} className="nfav_btn">
                  <i className="fa-2xl fa-regular fa-heart"></i>
                </button>
              )}
            </div>
            <Card.Body>
              <Card.Title className="title">
                <strong>{n.title}</strong>
              </Card.Title>
              <Card.Text className="my-3">{n.description}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
      <Pagination
        totalPosts={totalPosts}
        numPages={numPages}
        pageSelected={pageSelected}
      />
    </div>
  );
}
