
import './index.css'

import React, { StrictMode } from 'react'; // <--- Add this if missing
import ReactDOM from 'react-dom/client';
import App from './App';
import 'preline/preline'; // if using Preline

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
