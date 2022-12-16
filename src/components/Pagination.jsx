import { useState } from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Pagination({ totalPosts, numPages, pageSelected }) {
  const numPag = [];
  const ultimatePage = Math.ceil(totalPosts / numPages);
  const [firstPage, setFirstPage] = useState(1);
  const [lastPage, setLastPage] = useState(5);

  for (let i = firstPage; i <= lastPage; i++) {
    numPag.push(i);
  }

  return (
    <>
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
            >
              <i className="fa-2xl fa-solid fa-backward"></i>
            </Button>
          )}

          {numPag.map((numPage, index) => (
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
