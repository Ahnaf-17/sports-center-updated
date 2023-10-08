import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layouts/Root';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Reister/Register';
import About from './Pages/About/About';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import ShowTrainers from './Pages/Home/ShowTrainers';
import Events from './Pages/Events/Events';
import Contact from './Pages/Contact/Contact';
import AuthProvider from './Provider/AuthProvider';
import Details from './Pages/Home/Details';
import PrivateRoute from './PrivateRout/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=> fetch('/service.json'),
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/service/:id',
        element: 
          <PrivateRoute><Details></Details></PrivateRoute>
    ,
        loader: ()=> fetch('/service.json')
      },
      {
        path: '/trainer',
        element: <PrivateRoute><ShowTrainers></ShowTrainers></PrivateRoute>,
        loader: ()=> fetch('/trainer.json')
      },
      {
        path: '/events',
        element: <PrivateRoute><Events></Events></PrivateRoute>,
        loader: ()=> fetch('/events.json')
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
