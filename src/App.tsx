import { Route, Routes } from "react-router-dom";
import { Counter } from "./components/Counter";

import "./index.scss";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import { Link } from "react-router-dom";
import { HomePageAsync } from "./pages/HomePage/HomePage.async";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { Suspense } from "react";


export const App = () => {
    return (
        <div className="app">
            <Link to={'/about'}>about</Link>
            <Link to={'/'}>home</Link>
            <Suspense fallback={<div>loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<HomePageAsync />} />
                    <Route path={'/about'} element={<AboutPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    )
};