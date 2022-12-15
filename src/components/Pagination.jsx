import { useState } from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Pagination({ totalPosts, postsPerPage, pageSelected }) {
  const numPages = [];
  const ultimatePage = Math.ceil(totalPosts / postsPerPage);
  const [firstPage, setFirstPage] = useState(1);
  const [lastPage, setLastPage] = useState(5);
  console.log(firstPage, lastPage);

  for (let i = firstPage; i <= lastPage; i++) {
    numPages.push(i);
  }

  return (
    <>
      <h1>HOLA MUNDO</h1>
      {
        <ButtonGroup
          className="mb-3"
          style={{ width: "100%", margin: "0 auto" }}
        >
          {firstPage > 5 && (
            <Button
              onClick={() => {
                setLastPage(lastPage - 5);
                setFirstPage(firstPage - 5);
              }}
              style={{ width: "" }}
            >
              <i className="fa-2xl fa-solid fa-backward"></i>
            </Button>
          )}

          {numPages.map((numPage, index) => (
            <Button key={index} onClick={() => pageSelected(numPage)}>
              {numPage}
            </Button>
          ))}
          {lastPage < ultimatePage - 5 && (
            <Button
              onClick={() => {
                setLastPage(lastPage + 5);
                setFirstPage(firstPage + 5);
              }}
            >
              <i className="fa-2xl fa-solid fa-forward"></i>
            </Button>
          )}
        </ButtonGroup>
      }
      {/* <ul>
        {numPages.map((numPage, index) => (
          <li key={index}>
            <button onClick={() => pageSelected(numPage)}>{numPage}</button>
          </li>
        ))}
      </ul> */}
    </>
  );
}
