import React from 'react'
import SideMenu from './SideMenu';

const AdminLayout = ({children}) => {

    const menuItems = [
            {
                name:"Dashboard",
                url:"/admin/dashboard",
                icon:"fas fa-tachometer-alt"
            },
            {
                name:"New Product",
                url:"/admin/product/new",
                icon:"fas fa-user"
            },
            {
                name:"Products",
                url:"/admin/products",
                icon:"fab fa-product-hunt"
            },
            {
                name:"Order",
                url:"/me/orders",
                icon:"fas fa-receipt"
            },
            {
                name:"Users",
                url:"/admin/users",
                icon:"fas fa-user"
            },
            {
                name:"Reviews",
                url:"/admin/reviews",
                icon:"fas fa-star"
            }
    ];    


  return (
    <div>
    <div className='mt-2 mb-4 py-4'>
        <h2 className='text-center fw-border'>Admin Dashboard</h2>
    </div>

    <div className='container'>
        <div className='row justify-around'>
            <div className='col-12 col-lg-3'>
               <SideMenu menuItems={menuItems}/>
            </div>
            <div className='col-12 col-lg-8'>
                {children}
            </div>
        </div>
    </div>
</div>
  )
}

export default AdminLayout