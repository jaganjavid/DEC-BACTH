// import { useAuthState } from "react-firebase-hooks/auth";
// import { Navigate } from "react-router-dom";
// import { auth } from "../firebase";


// const PrivateRoute = ({children}) => {

//     const [user, loading, error] = useAuthState(auth);

//     if(loading){
//         return(
//             <p>Loading...</p>
//         )
//     }


//     return user ? children : <Navigate to="/signin"/>


// }

// export default PrivateRoute;


import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../firebase";

const PrivateRoute = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return user ? children : <Navigate to="/signin" />;
};

export default PrivateRoute;

