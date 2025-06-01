
import './styles/index.css'

import React, { StrictMode } from 'react'; 
import ReactDOM from 'react-dom/client';
import 'preline/preline'; 
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import route from './routes/router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <RouterProvider router={route}/>
  </StrictMode>
);
