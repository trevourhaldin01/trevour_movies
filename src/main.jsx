import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'




// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
//bootstrap icons css
import "bootstrap-icons/font/bootstrap-icons.css";

//react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//skeleton
import 'react-loading-skeleton/dist/skeleton.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
