import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App';
import Layout from './Layout'
import MovieDetails from './Movie-details';


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<App />} />
        <Route path="movie-details/:id" element={<MovieDetails />} /> 
      </Route>
    </Routes>
  </BrowserRouter>
);

