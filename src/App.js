import React from "react";
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Main from "/Main.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
