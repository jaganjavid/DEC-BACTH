

import {useSelector} from "react-redux";
import { Navigate } from "react-router-dom";
import Loader from "../layout/Loader";

const ProtectedRoute = ({children}) => {

  const {isAuthenticated, loading} = useSelector((state) => state.auth);

  console.log(loading);

  if(loading){
    return <Loader/>
  }

  if(!isAuthenticated){
    return <Navigate to="/login"/>
  }


  return children;
}

export default ProtectedRoute;