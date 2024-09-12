import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import LoginSignup from './pages/LoginSignup.jsx'
import CampaignManager from './pages/CampaignManager.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/LoginSignup",
    element: <LoginSignup />,
  },
  {
    path: "/CampaignManager",
    element: <CampaignManager />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
