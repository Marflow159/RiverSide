import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SkeletonTheme } from 'react-loading-skeleton';
import MainPage from '../pages/MainPage';

import Header from '../header/Header';
import Footer from '../footer/Footer';
import BuyForm from '../BuyForm/BuyForm';
import './App.scss';

function App() {
    return (
        <SkeletonTheme baseColor="#313131" highlightColor="#525252">
            <Router>
                <div className="App">
                    <Header />
                    <Routes>
                        <Route path='/' element={<MainPage />} />
                    </Routes>
                    <Footer />
                    <BuyForm />
                </div>
            </Router>
        </SkeletonTheme >

    );
}

export default App;
