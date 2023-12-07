
import React, { } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from "./Components/Header";


import SideNav from "./Components/SideNav";
import Forms from "./Components/forms";
// import Forms from './forms';


function App() {
  return (
    <div className="wrapper">
      <Header />
      <Router>
       <Routes>
        <Route path='/company-sitting/' element={<Forms/>}/>

        </Routes></Router>
      {/* 
      <Footer />
      <Home /> */}
      <SideNav />    
   
      {/* <Forms/> */}

    </div>
  );
}

export default App;
