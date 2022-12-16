import "./App.css";
import MainPage from "./pages/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useDispatch } from 'react-redux';
import { useEffect } from "react";
import { setNewsThunk } from './features/news/news.slice';

function App() {

  const dispatch = useDispatch();

  const news = JSON.parse(localStorage.getItem('news'));

  useEffect(() => {
      dispatch(setNewsThunk());
  }, [news]);


  return (
    <div className="App container mt-3">

      <BrowserRouter>
        <Routes>
          {
            news && <Route path='/' element={<MainPage />}/>
          }
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
