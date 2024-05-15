import { Route, Routes } from "react-router-dom";

import "./styles/index.scss";

import { Suspense } from "react";

import { Link } from "react-router-dom";
import { HomePageAsync } from "./pages/HomePage/HomePage.async";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";

import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";

export const App = () => {
    const {theme, toggleTheme} = useTheme();


    return (
        <div className={classNames('app', {}, [theme])}>
            <Link to={'/about'}>about</Link>
            <Link to={'/'}>home</Link>
            <Suspense fallback={<div>loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<HomePageAsync />} />
                    <Route path={'/about'} element={<AboutPageAsync />} />
                </Routes>
            </Suspense>
            <button onClick={toggleTheme}>change theme</button>
        </div>
    )
};