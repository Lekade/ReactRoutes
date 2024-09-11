import * as React from "react";
import {createRoot} from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link, Navigate, Outlet,
} from "react-router-dom";
import App from "../App";
import {Error404} from "../components/pages/Error404";
import {Adidas} from "../components/pages/Adidas";
import {Puma} from "../components/pages/Puma";
import {Abibas} from "../components/pages/Abibas";
import {Prices} from "../components/pages/Prices";
import Model from "../components/pages/Model";
import {ProtectedPage} from "../components/pages/ProtectedPage";
import {Login} from "../components/pages/Login";

export const PATH = {
    ADIDAS: "/adidas",
    PUMA: "/puma",
    ABIBAS: "/abibas",
    PRICES: "/prices",
    MODEL: "/:name/:id",
    PROTECTED: "/protectedPage",
    LOGIN: "/login",
    ERROR: "/error"
} as const



const publicRouts = [
    {
        index: true,
        element: <Adidas/>,
    },
    {
        path: PATH.ADIDAS,
        element: <Adidas/>,
    },
    {
        path: PATH.PUMA,
        element: <Puma/>
    },
    {
        path: PATH.ABIBAS,
        element: <Abibas/>
    },
    {
        path: PATH.PRICES,
        element: <Prices/>
    },
    {
        path: PATH.MODEL,
        element: <Model/>,
    },
    {
        path: PATH.ERROR,
        element: <Error404/>,
    },
    {
        path: PATH.LOGIN,
        element: <Login/>,
    }
]

const privateRouts = [
    {
        path: PATH.PROTECTED,
        element: <ProtectedPage/>
    },
]

const ProtectedRoute = () => {
    const isAuth = false
    return isAuth ? <Outlet/> : <Navigate to={PATH.LOGIN}/>
};

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <Navigate to={PATH.ERROR}/>,
        children: [
            {

                element: <ProtectedRoute/>,
                children: privateRouts
            },
            ...publicRouts

        ]
    }
]);







//----------------------------------------------------------------------------




//
// import * as React from "react";
// import {createRoot} from "react-dom/client";
// import {
//     createBrowserRouter,
//     RouterProvider,
//     Route,
//     Link, Navigate,
// } from "react-router-dom";
// import App from "../App";
// import {Error404} from "../components/pages/Error404";
// import {Adidas} from "../components/pages/Adidas";
// import {Puma} from "../components/pages/Puma";
// import {Abibas} from "../components/pages/Abibas";
// import {Prices} from "../components/pages/Prices";
// import Model from "../components/pages/Model";
// import {ProtectedPage} from "../components/pages/ProtectedPage";
// import ProtectedRoute from "./ProtectedRoute";
// import {Login} from "../components/pages/Login";
//
// export const PATH = {
//     ADIDAS: "/adidas",
//     PUMA: "/puma",
//     ABIBAS: "/abibas",
//     PRICES: "/prices",
//     MODEL: "/:name/:id",
//     PROTECTED: "/protectedPage",
//     LOGIN: "/login",
//     ERROR: "/error"
// } as const
//
//
//
// export const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <App/>,
//         errorElement: <Navigate to={PATH.ERROR}/>,
//         children: [
//             {
//                 index: true,
//                 element: <Adidas/>,
//             },
//             {
//                 path: PATH.ADIDAS,
//                 element: <Adidas/>,
//             },
//             {
//                 path: PATH.PUMA,
//                 element: <Puma/>
//             },
//             {
//                 path: PATH.ABIBAS,
//                 element: <Abibas/>
//             },
//             {
//                 path: PATH.PRICES,
//                 element: <Prices/>
//             },
//             {
//                 path: PATH.MODEL,
//                 element: <Model/>,
//             },
//             {
//                 path: PATH.PROTECTED,
//                 element: <ProtectedRoute><ProtectedPage/></ProtectedRoute>,
//             },
//             {
//                 path: PATH.ERROR,
//                 element: <Error404/>,
//             },
//             {
//                 path: PATH.LOGIN,
//                 element: <Login/>,
//             }
//
//         ]
//     }
// ]);