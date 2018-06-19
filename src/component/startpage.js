import React, { Component } from 'react';
import Intro from './intro';
import MainTab from './maintab';
import Footer from './footer';

const StartPage = () => {
    return (
        <div className="container-fluid h-75 bg-white">
            <Intro />
            <MainTab />
            <Footer />
        </div>
    );
}

export default StartPage;