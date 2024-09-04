import React, {useState} from 'react';
import styles from "./components/Site.module.css";
import {Link, Navigate, NavLink, Route, Routes, Outlet} from "react-router-dom";
import {Adidas} from "./components/pages/Adidas";
import {Puma} from "./components/pages/Puma";
import {Abibas} from "./components/pages/Abibas";
import {Error404} from "./components/pages/Error404";
import {S} from "./components/pages/_styles"
import Model from "./components/pages/Model";
import {Prices} from "./components/pages/Prices";
import {PATH} from "./routes/router";


function App() {


    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <S.NavWrapper><NavLink  to={PATH.ADIDAS}>
                        Adidas
                    </NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink  to={PATH.PUMA}>
                        Puma
                    </NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.ABIBAS}>
                        Abibas
                    </NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PRICES}>
                        Prices
                    </NavLink></S.NavWrapper>

                    {/*<div><NavLink className={({ isActive}) =>*/}
                    {/*    isActive ? styles.activeNavLink : styles.navLink*/}
                    {/*} to={"/page3"}>*/}
                    {/*    Page3*/}
                    {/*</NavLink></div>*/}
                </div>
                <div className={styles.content}>
                    {/*СИНТАКСИС 6.4*/}
                    <Outlet />

                    {/*СИНТАКСИС 6.0 - 6.2*/}

                    {/*<Routes>*/}
                    {/*    <Route path="/" element={<Navigate to={PATH.PAGE1}/>}/>*/}

                    {/*    <Route path={PATH.PAGE1} element={<Adidas/>}/>*/}
                    {/*    <Route path={PATH.PAGE2} element={<Puma/>}/>*/}
                    {/*    <Route path={PATH.PAGE3} element={<Abibas/>}/>*/}
                    {/*    <Route path={PATH.PRICES} element={<Prices/>}/>*/}
                    {/*    <Route path={PATH.MODEL} element={<Model/>}/>*/}

                    {/*    <Route path={PATH.ERROR} element={<Error404/>}/>*/}
                    {/*    /!*<Route path="/*" element={<Navigate to={"/error404"}/>}/>*!/*/}
                    {/*</Routes>*/}
                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
);
}

export default App;
