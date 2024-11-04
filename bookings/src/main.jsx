import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider,createBrowserRouter} from 'react-router-dom';
import About from './components/About.jsx';
import Updates from './components/Updates.jsx';
import Contact from './components/Contact.jsx';



const router= createBrowserRouter([
  {path:"/" , element:<App/>},
  {path:"/about", element:<About/>},
  {path:"/updates", element:<Updates/>},
  {path:"/contact", element:<Contact/>},

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)