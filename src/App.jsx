import { useState } from 'react'
 import React from 'react';
import './App.css'
import Navbar from './components/Navbar';
import Weather from './components/Weather';
import Crud from './components/Crud';

 import Contact from './components/Contact';
import {createBrowserRouter , RouterProvider } from 'react-router-dom'
import Work from './components/Work';
 
   
function App() {
     
    const router = createBrowserRouter([
      {
        
        path: "/",
        element:  <> <Navbar/>   <Weather/>  </>
      },
      {  
        path: "/todo",
        element:  <>  <Navbar/>   <Work/>    </>
      },
      {  
        path: "/testimonial",
        element:  <>  <Navbar/>   <Contact/>    </>
      }
 
    ])
     
    
  return (
    <>
     <RouterProvider router={router}/>
    
       
    </>
  )
}

export default App
