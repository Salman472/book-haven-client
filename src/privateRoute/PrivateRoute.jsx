import React, { use } from 'react';
import { AuthContext } from '../constext/AuthContext';
import { Navigate, useLocation } from 'react-router';
import DetailsPage from '../pages/loading/DetailsPage';

const PrivateRoute = ({children}) => {
    const {user,loading}=use(AuthContext)
    const location=useLocation()
    console.log(location);
    if(loading){
        return <div className='flex justify-center items-center h-screen'><DetailsPage/></div>
    }
   if(user){
    return children
   }
   else{
    return <Navigate state={location?.pathname} to={'/login'}/>
   }
};

export default PrivateRoute;