import React from "react";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useAppDispatch, useAppSelector } from "../../store/store";
import {  useRefreshUserTokenMutation } from "../../store/api";
import { loginSuccess } from "../../features/auth/auth-slice";

interface ProtectedRouteProps {
  element: React.ReactNode;
}

// const isAuthenticated = (): boolean => {
   
 
//  // return !!localStorage.getItem("userToken"); 
//   return true;
// };


   

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
    const AuthToken = useAppSelector((state) => state.auth.token)
    const refreshAuthToken = useAppSelector((state) => state.auth.refreshUserToken)
    const [ refreshUserToken,{data, isError} ] =   useRefreshUserTokenMutation()
    const dispatch = useAppDispatch()

    const refreshToken = () =>{
        if(refreshAuthToken !== null) {
            refreshUserToken(refreshAuthToken)
            const Data = data?.access
            dispatch(loginSuccess({token:Data!, refreshToken:refreshAuthToken}))
            console.log('data is ', Data)
        }   
        
        return <Navigate to="/signIn" />;
    }

    if(!AuthToken || AuthToken === null) {
        return <Navigate to="/signIn" />;
    }

    const decoded = jwtDecode(AuthToken);
    const tokenExpiration = decoded.exp;
    const now = Date.now() / 1000;
   
    if (tokenExpiration != undefined  && tokenExpiration < now) {        
         refreshToken();
    } 

    if(isError){
        <Navigate to="/signIn" />;
    }
    

 
//     if (!isAuthenticated()) {

//     return <Navigate to="/signIn" />;
//   }

  return <>{element}</>; // Return the protected element if authenticated
};

export default ProtectedRoute;
