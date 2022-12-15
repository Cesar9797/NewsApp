import { useDispatch } from "react-redux";
import { useState } from "react";
import { Card } from "react-bootstrap";
import Pagination from "../components/Pagination";
import { updateNews } from "../features/news/news.slice";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const FavoriteButton = styled.button`
  background-color: gray;
  position: absolute;
  top: 10px;
  left: 850px;
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 0;
  border-radius: 10%;
`;

const NotFavoriteButton = styled.button`
  background-color: gray;
  position: absolute;
  top: 10px;
  left: 850px;
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 0;
  border-radius: 10%;
`;

export default function MainPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const news = JSON.parse(localStorage.getItem("news"));
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);
  const lastIndex = currentPage * postsPerPage;
  const firstIndex = lastIndex - postsPerPage;
  const currentNews = news.slice(firstIndex, lastIndex);
  const totalPosts = news.length;

  const pageSelected = (page) => {
    setCurrentPage(page);
  };

  const funcUpdateNews = (id) => {
    dispatch(updateNews(id));
    navigate("/");
  };

  return (
    <div className="container">
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
                <FavoriteButton onClick={() => funcUpdateNews(n.id)}>
                  <i className="fa-2xl fa-solid fa-heart"></i>
                </FavoriteButton>
              ) : (
                <NotFavoriteButton onClick={() => funcUpdateNews(n.id)}>
                  <i className="fa-2xl fa-regular fa-heart"></i>
                </NotFavoriteButton>
              )}
            </div>
            <Card.Body>
              <Card.Title>
                <strong>{n.title}</strong>
              </Card.Title>
              <Card.Text className="my-3">{n.description}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
      <Pagination
        totalPosts={totalPosts}
        postsPerPage={postsPerPage}
        pageSelected={pageSelected}
      />
    </div>
  );
}
