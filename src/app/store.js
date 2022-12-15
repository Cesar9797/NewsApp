import { configureStore } from '@reduxjs/toolkit';
import newsSlice from '../features/news/news.slice';

export const store = configureStore({
  reducer: {
    news: newsSlice
  },
});