
import React from 'react'

import ProtectedRoute from '../auth/ProtectedRoute';
import Dashboard from '../admin/Dashboard';
import { Route } from 'react-router-dom';
import ListProducts from '../admin/ListProducts';


const adminRoutes = () => {
  return (
    <>
     <Route path='admin/dashboard' element={
        <ProtectedRoute admin={true}>
            <Dashboard/>
        </ProtectedRoute>
     }>
     </Route>

     <Route path='admin/products' element={
        <ProtectedRoute admin={true}>
            <ListProducts/>
        </ProtectedRoute>
     }>
     </Route>
    </>
  )
}

export default adminRoutes