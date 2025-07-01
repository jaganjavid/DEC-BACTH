
import './App.css'

import { BrowserRouter as Router, Routes} from "react-router-dom";

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

import { Toaster } from 'react-hot-toast';
import useUserRoutes from './components/routes/userRoutes';
import useAdminRoute from "./components/routes/adminRoutes"

function App() {

  const userRoutes = useUserRoutes();
  const adminRoutes = useAdminRoute();
  
  return (
    <Router>
      <div className='App'>
      <Toaster/>  
        <Header/>
        <main>
          <div className='container'>
            <Routes>
              {userRoutes}
              {adminRoutes}
            </Routes>
          </div>
        </main>
      </div>
     <Footer/>
    </Router>
  )
}

export default App
