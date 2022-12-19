// 3f5daa84d6a54f24b8b1d1450be963f5
import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";

export const newsSlice = createSlice({
  name: "news",
  initialState: [],
  reducers: {
    setNews: (state, action) => {
      const news = action.payload;
      news.forEach((n) => {
        n.isFavorite = false;
        n.id = uuidv4();
      });

      if(JSON.parse(localStorage.getItem('news')) === null){
        localStorage.setItem('news',JSON.stringify(news));
      }
      return news;
    },
    updateNews: (state, action) => {

      const id = action.payload;
      const newsInLocalStorage = JSON.parse(localStorage.getItem('news'));
      const indexDataNew = newsInLocalStorage.findIndex(n => n.id === id);
      if(newsInLocalStorage[indexDataNew].isFavorite === false){
        newsInLocalStorage[indexDataNew].isFavorite = true;
      } else if (newsInLocalStorage[indexDataNew].isFavorite !== false) {
        newsInLocalStorage[indexDataNew].isFavorite = false;
      }
      localStorage.setItem('news', JSON.stringify(newsInLocalStorage));
    }
  },
});

export const { setNews, updateNews } = newsSlice.actions;

export const setNewsThunk = () => (dispatch) => {
  axios.get(
    "https://newsapi.org/v2/everything?q=tesla&from=2022-11-19&sortBy=publishedAt&apiKey=3f5daa84d6a54f24b8b1d1450be963f5"
  ).then(res => dispatch(setNews(res.data.articles)));
};

export default newsSlice.reducer;
