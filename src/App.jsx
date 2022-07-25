import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MfeHomePage from "./app-modules/homepage/MfeHomePage";

import "./index.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<MfeHomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));