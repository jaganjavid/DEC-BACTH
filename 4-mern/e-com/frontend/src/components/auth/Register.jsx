import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useRegisterMutation } from '../../redux/api/authApi';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';



const Register = () => {

   const navigate = useNavigate();


    const [register, {isLoading, error, data}] = useRegisterMutation();
    const {isAuthenticated} = useSelector((state) => state.auth)
    

    const [user, setUser] = useState({
        name:"",
        email:"",
        password:""
    })

  const {name, email, password} = user;

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

    const signUpData = {
        name, 
        email,
        password
    }

    // console.log(signUpData);

    register(signUpData);

  }

  const onChange = (e) => {

    setUser({...user, [e.target.name]: e.target.value});
    
  }



  return (
    <div className='row wrapper'>
       <div className='col-10 col-lg-5'>
        <form className='shadow rounded bg-body' onSubmit={submitHandler}>
            <h2 className='mb-4'>Register</h2>

            <div className='mb-3'>
                <label htmlFor="name" className='form-label'>Name</label>
                <input type="text" id='text_field'
                className='form-control'
                name='name'
                value={name}
                onChange={onChange}
                />
            </div>

            <div className='mb-3'>
                <label htmlFor="email" className='form-label'>Email</label>
                <input type="email" id='email_field'
                className='form-control'
                name='email'
                value={email}
                onChange={onChange}
                />
            </div>

            <div className='mb-3'>
                <label htmlFor="password" className='form-label'>Password</label>
                <input type="password" id='password_field'
                className='form-control'
                name='password'
                value={password}
                onChange={onChange}
                />
            </div>

            <button id='login_button' type='submit' className='btn w-100 py-2' disabled={isLoading}>
                {isLoading ? "Creating" : "Register"}
            </button>

        </form>
        </div>  
    </div>
  )
}

export default Register