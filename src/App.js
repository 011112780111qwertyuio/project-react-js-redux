import React from 'react';
import './Styleapp.css';
import {
    createBrowserRouter,
    RouterProvider,
   /*Route,*/
   
   
 }from "react-router-dom";
/* pages */
import Home from './pages/home';
import HTML from './pages/Html';
import Css from './pages/Css';
import Javascript from './pages/Javascript';
import Singin from './pages/Singin';
import Singup from './pages/Singup';
import Profile from './pages/Profile';
import Edittask from './pages/compawnds/Edittask';
const router = createBrowserRouter([
    {path:"/",
    element:<Singin />,
    errorElement:<h1>هناك مشكلة فى العناون</h1>
    },
    
    {
      path:"/home",
      element:<Home />,
    },
    
    {
        path:"/html",
        element:<HTML />,
    },
    {
        path:"/css",
        element:<Css />,
    },
    {
        path:"/java",
        element:<Javascript />
    },
    {
      path:"/singin",
      element:<Singin />
    },
    {
      path:"/singup",
      element:<Singup />,
    },
    {
      path:"/profile",
      element:<Profile />,
    },
    {
      path:"/edittask/:stringid",
      element:<Edittask />,
    }
  
  
  ]);

function App()
{   
    
    return ( 
        
        <div className={`App`}>
           
        </div>
        );   
}
export default App;