import React, { useEffect, useState } from 'react'
import { useLoginMutation } from '../../redux/api/authApi';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';



const Login = () => {


  const navigate = useNavigate();

  
  const [email, setEmail] = useState("");  
  const [password, setPassword] = useState(""); 

  const [login, {isLoding, error, data}] = useLoginMutation();
  const {isAuthenticated} = useSelector((state) => state.auth);

  useEffect(() => {
    if(isAuthenticated){
      navigate("/");
    }
  }, [isAuthenticated, navigate]); 
  

  useEffect(() => {
    if(error){
        toast.error(error?.data?.message);
    }
  }, [error]);
  
  const submitHandler = (e) => {
    e.preventDefault();

    const loginData = {
        email,
        password
    }

    login(loginData);

    

  }


  return (
    <div className='row wrapper'>
       <div className='col-10 col-lg-5'>
        <form className='shadow rounded bg-body' onSubmit={submitHandler}>
            <h2 className='mb-4'>Login</h2>

            <div className='mb-3'>
                <label htmlFor="email" className='form-label'>Email</label>
                <input type="email" id='email_field'
                className='form-control'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <div className='mb-3'>
                <label htmlFor="password" className='form-label'>Password</label>
                <input type="password" id='password_field'
                className='form-control'
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}/>
            </div>

            <a href="/password/forgot" className='float-end mb-4'>Forgot password</a>

            <button id='login_button' type='submit' className='btn w-100 py-2' disabled={isLoding}>
                {isLoding ? "loading" : "LOGIN"}
            </button>

            <div className='my-3'>
                <a href="/register" className='float-end'>New Users?</a>
            </div>
        </form>
        </div>  
    </div>
  )
}

export default Login