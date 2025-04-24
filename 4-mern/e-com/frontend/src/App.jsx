
import './App.css'

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './components/Home'
import ProductDetails from './components/ProductDetails';

import { Toaster } from 'react-hot-toast';
import Login from './components/auth/Login';
import Register from './components/auth/Register';





function App() {
  
  return (
    <Router>
      <div className='App'>
      <Toaster/>  
        <Header/>
        <main>
          <div className='container'>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/product/:id' element={<ProductDetails/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/register' element={<Register/>}/>
              <Route path='/me/profile' element={<Register/>}/>
            </Routes>
          </div>
        </main>
      </div>
     <Footer/>
    </Router>
  )
}

export default App
