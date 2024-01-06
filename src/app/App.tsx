import { Route, Routes } from "react-router-dom";

import "./styles/index.scss";

import { Suspense } from "react";

import { Link } from "react-router-dom";
import { HomePage } from "pages/HomePage";
import { AboutPage } from "pages/AboutPage";

import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";

export const App = () => {
    const {theme, toggleTheme} = useTheme();


    return (
        <div className={classNames('app', {}, [theme])}>
            <Link to={'/about'}>about</Link>
            <Link to={'/'}>home</Link>
            <Suspense fallback={<div>loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<HomePage />} />
                    <Route path={'/about'} element={<AboutPage />} />
                </Routes>
            </Suspense>
            <button onClick={toggleTheme}>change theme</button>
        </div>
    )
};