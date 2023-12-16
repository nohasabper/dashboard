
import React, { } from "react";
import "./App.css";
import { Routes, Route } from 'react-router-dom';

import Header from "./Components/Header";


import SideNav from "./Components/SideNav";
import Forms from "./Components/forms";

// import Forms from './forms';


function App() {
  return (
    <div className="wrapper">
      
      <Header />
      <SideNav />    
       <Routes>
        <Route path='/company-sitting' element={<Forms/>}/>

        </Routes>
        
      {/* 
      <Footer />
      <Home /> */}
     
   
      {/* <Forms/> */}

    </div>
  );
}

export default App;
