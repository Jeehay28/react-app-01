import React from 'react';
import logo from './logo.svg';
import './App.css';
import List1 from './component/List1';
import List2 from './component/List2';
import Layout from './component/Layout';
import Login from './component/Login';
import Home from './component/Home';
import ListElect from './component/ListElec';
import ChildService from './component/ChildService';
import MedicalPlants from './component/MedicalPlants';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}/>

      <Route element={<Layout />}>
        {/* <Route path="/home" element={<Home />}/>
        <Route path="/list1" element={<List1 />} />
        <Route path="/list2" element={<List2 />} />
        <Route path="/list3" element={<ListElect />} /> */}
        <Route path="/home" element={<ChildService />} />
        <Route path="/medicalplants" element={<MedicalPlants />} />
      </Route>
    </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;
