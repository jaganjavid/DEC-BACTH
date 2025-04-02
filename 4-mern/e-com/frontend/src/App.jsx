
import './App.css'

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './components/Home'



function App() {
  
  return (
    <Router>
     <Header/>
     <main>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<h1>Login</h1>}/>
        </Routes>
      </div>
     </main>
     <Footer/>
    </Router>
  )
}

export default App
