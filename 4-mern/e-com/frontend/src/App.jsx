
import './App.css'

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './components/Home'
import ProductDetails from './components/ProductDetails';

import { Toaster } from 'react-hot-toast';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Profile from './components/user/Profile';
import UpdateProfile from './components/user/UpdateProfile';
import UploadAvatar from './components/user/UploadAvatar';
import UpdatePassword from './components/user/UpdatePassword';
import ProtectedRoute from './components/auth/ProtectedRoute';
import ForgotPassword from './components/auth/ForgotPassword';
import ResetPassword from './components/auth/ResetPassword';
import Cart from './components/cart/Cart';
import Shipping from './components/cart/Shipping';
import ConfirmOrder from './components/cart/ConfirmOrder';
import PaymentMethod from './components/cart/PaymentMethod';
import Myorders from './components/order/Myorders';
import OrderDetails from './components/order/OrderDetails';
import Invoice from './components/invoice/Invoice';







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
              <Route path='/password/forgot' element={<ForgotPassword/>}/>
              <Route path='/password/reset/:token' element={<ResetPassword/>}/>
              <Route path='/me/profile' element={
                <ProtectedRoute>
                  <Profile/>
                </ProtectedRoute>
              }/>
              <Route path='/me/update_profile' element={
                <ProtectedRoute>
                  <UpdateProfile/>
                </ProtectedRoute>
              }/>
              <Route path='/me/upload_avatar' element={<ProtectedRoute>
                <UploadAvatar/>
              </ProtectedRoute>}/>
              <Route path='/me/update_password' element={
                <ProtectedRoute>
                  <UpdatePassword/>
                </ProtectedRoute>
              }/>
              <Route path='/shipping' element={
                <ProtectedRoute>
                 <Shipping/>
                </ProtectedRoute>
              }/>
              <Route path='/confirm_order' element={
                <ProtectedRoute>
                 <ConfirmOrder/>
                </ProtectedRoute>
              }/>
              <Route path='/payment_method' element={
                <ProtectedRoute>
                 <PaymentMethod/>
                </ProtectedRoute>
              }/>
              <Route path='/me/orders' element={
                <ProtectedRoute>
                 <Myorders/>
                </ProtectedRoute>
              }/>
              <Route path='/orders/:id' element={
                <ProtectedRoute>
                 <OrderDetails/>
                </ProtectedRoute>
              }/>
              <Route path='/invoice/orders/:id' element={
                <ProtectedRoute>
                 <Invoice/>
                </ProtectedRoute>
              }/>
              <Route path='/cart' element={<Cart/>}/>
            </Routes>
          </div>
        </main>
      </div>
     <Footer/>
    </Router>
  )
}

export default App
