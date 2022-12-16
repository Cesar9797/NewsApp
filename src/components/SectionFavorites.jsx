import { Offcanvas, Button, ListGroup, Card } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { updateNews } from "../features/news/news.slice";

export default function SectionFavorite() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const news = JSON.parse(localStorage.getItem("news"));
  const newsFavorite = news.filter((n) => n.isFavorite === true);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const quitFavorite = (id) => {
    dispatch(updateNews(id));
    navigate('/')
  }
  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        Favorites
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement={"end"}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>News Favorite</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup>
            {newsFavorite.map((n) => (
              <ListGroup.Item key={n.id}>
                <Card style={{ width: "100%" }}>
                  <Card.Img variant="top" src={n.urlToImage} />
                  <Card.Body>
                    <Card.Title>{n.title}</Card.Title>
                    <Card.Text>
                      {
                        n.description
                      }
                    </Card.Text>
                    <Button variant="primary" onClick={() => quitFavorite(n.id)}>Quit</Button>
                  </Card.Body>
                </Card>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
