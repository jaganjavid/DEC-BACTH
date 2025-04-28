import React, { use } from 'react'
import UserLayout from '../layout/UserLayout'
import avatar from "../../assets/default_avatar.jpg"
import {useSelector} from "react-redux"; 

const Profile = () => {


  const {user} = useSelector((state) => state.auth);



  return (
    <UserLayout>
        <div className='row justify-content-around mt-5 user-info'>
           <div className='col-12 col-md-3'>
             <figure className='avatar avatar-profile'>
               <img src={user?.avatar ? user.avatar.url : avatar} alt="user avatar" className='rounded-circle'/>
             </figure>
           </div> 
           <div className='col-12 col-md-5'>

            <h4>Full Name</h4>
            <p>{user?.name}</p>

            <h4>Email Address</h4>
            <p>{user?.email}</p>
            
           </div>
        </div>
    </UserLayout>
  )
}

export default Profile