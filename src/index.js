import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../public/dist'
// import '/dist/css/AdminLTE.min.css';
// import 'admin-lte/dist/css/skins/skin-blue.min.css';
// import 'admin-lte/plugins/fontawesome-free/css/all.min.css';
// import 'admin-lte/plugins/jQuery/jquery.min.js';
// import 'admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js';
// import 'admin-lte/dist/js/adminlte.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'admin-lte/dist/css/adminlte.min.css';
import 'admin-lte/dist/js/adminlte'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'admin-lte/plugins/fontawesome-free/css/all.min.css';
import { BrowserRouter  } from 'react-router-dom';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.js';
// import'src/index.css' 
// import 'admin-lte/dist/js/adminlte';
// import 'admin-lte/plugins/jquery/jquery.min';
// import 'admin-lte/plugins/jquery-ui/jquery-ui.min';
// import 'admin-lte/plugins/fontawesome-free/js/all.min';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
  <BrowserRouter>

    <App />
</BrowserRouter>
 </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
