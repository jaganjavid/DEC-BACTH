
import './App.css'

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './components/Home'
import ProductDetails from './components/ProductDetails';

import { Toaster } from 'react-hot-toast';




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
            </Routes>
          </div>
        </main>
      </div>
     <Footer/>
    </Router>
  )
}

export default App
