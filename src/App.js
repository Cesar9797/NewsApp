import "./App.css";
import MainPage from "./pages/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from "react";
import { setNewsThunk } from './features/news/news.slice';
import NavBar from "./components/NavBar";

function App() {

  const dispatch = useDispatch();

  const news = JSON.parse(localStorage.getItem('news'));


  useEffect(() => {
      dispatch(setNewsThunk());
  }, []);


  return (
    <div className="App container mt-3">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
