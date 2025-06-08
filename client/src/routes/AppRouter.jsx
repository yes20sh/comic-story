// src/routes/AppRouter.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage} from '../Pages/HomePage';
import ChatPage from '../Pages/ChatPage';
import  ComicPage  from '../Pages/ComicPage';
import UserComic from '../Pages/UserComic';


const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
     <Route path="/chat" element={<ChatPage/>} />
      <Route path="/comic" element={<ComicPage/>} /> 
     <Route path="/usercomics" element={<UserComic/>} />
    </Routes>
  );
};

export default AppRouter;
