import { useNavigate } from "react-router-dom";
import SectionFavorite from "./SectionFavorites";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useState } from 'react';

export default function NavBar({selectedNumPages}) {
  const navigate = useNavigate();


 

  return (
    <Container className="mb-3">
      <Navbar expand="lg" variant="light" bg="light">
        <Navbar.Brand className="px-3" onClick={() => navigate("/")}>
          News Api
        </Navbar.Brand>
        <Nav className="me-auto d-flex justify-content-between" style={{width: "80%"}}>
          <SectionFavorite />
          <div className="options d-flex align-items-center">
            <label className="lbl-pxp">News per page: </label>
            <select name="pxp" onChange={e => selectedNumPages(e.target.value)}>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
            </select>
          </div>
        </Nav>
      </Navbar>
    </Container>
  );
}
