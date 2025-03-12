import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import Page from './pages/Page';
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Layout from "./pages/Layout.jsx";
import NoPage from "./pages/NoPage.jsx";
import Task4 from "./pages/Task4.jsx";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="page" element={<Page />} />
                <Route path="profile" element={<Profile />} />
                <Route path="task4" element={<Task4 />} />
                <Route path="*" element={<NoPage />} />
            </Route>
        </Routes>
    </BrowserRouter>
);