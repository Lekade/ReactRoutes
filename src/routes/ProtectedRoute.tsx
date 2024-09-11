import React, {ReactElement} from 'react';
import {Navigate} from "react-router-dom";
import {PATH} from "./router";

type protectedRouteProps = {
    children: ReactElement
}

export const ProtectedRoute = ({children}:protectedRouteProps) => {
    const logged = false
    return logged ? children : <Navigate to={PATH.LOGIN}/>
};