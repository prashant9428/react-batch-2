import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.jsx'
import AppRouter from './AppRouter.jsx';
import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById('root')).render(
   <BrowserRouter>
     <AppRouter></AppRouter>
   </BrowserRouter>
)
