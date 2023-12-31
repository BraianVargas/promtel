import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css';
import App from './App';
import About from './components/about';
import Contacts from './components/contacts';
import Tecnologia from './components/tecnologia';
import Iot from './components/iot';
import Construcciones from './components/construcciones';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/contacts",
    element: <Contacts/>,
  },
  {
    path:"/tecnologia",
    element: <Tecnologia/>
  },
  {
    path:"/iot",
    element: <Iot/>
  },
  {
    path:"/construcciones",
    element: <Construcciones/>
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
