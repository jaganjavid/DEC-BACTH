import React from 'react'
import SideMenu from './SideMenu'


const UserLayout = ({children}) => {
  return (
    <div>
        <div className='mt-2 mb-4 py-4'>
            <h2 className='text-center fw-border'>User Settings</h2>
        </div>

        <div className='container'>
            <div className='row justify-around'>
                <div className='col-12 col-lg-3'>
                   <SideMenu/>
                </div>
                <div className='col-12 col-lg-8'>
                    {children}
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserLayout