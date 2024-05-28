import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Layout from "./component/Layout";
import Login from "./component/Login";
import Home from "./component/Home";
import ChildService from "./component/ChildService";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ExcelToJsonConverter from "./component/ExcelToJsonConverter";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<Layout />}>
            <Route path="/home" element={<ChildService />} />
          </Route>
          <Route path="/data" element={<ExcelToJsonConverter />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;