import React, { Component } from 'react';
import VideoList from './videolist';
import MusicList from './musiclist';

import image from '../assets/pexels-photo-164879.jpeg';

const list_info_style = {
    height: '7%'
};

const row_style = {
    backgroundImage: 'url('+image+')',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
};

const span_style = {
    backgroundColor: 'rgba(0,0,0,0.5)'
};


const footer_style = {
    height: '7%'
};

const link = {
    textDecoration: 'underline'
};

const Footer = (props) => {
    return (
        <div  style={footer_style} className="container-fluid bg-light w-100">
            <div className="row bg-dark p-2">
                { props.children }
            </div>
        </div>
    );
}


const Intro = (props) => {
    return (
        <div style={row_style} className="row h-75 text-white text-center">
            <span style={span_style} className="w-100 my-auto">
                { props.children }
            </span>
        </div>
    );
}


const MainTab = () => {
    return (
        <div className="p-2">
            <div className="container-fluid h-50 mt-2 p-3">
                <span style={list_info_style} className="row bg-secondary">
                <p className="navbar-brand pl-2 text-white">Suggested Music</p>
                </span>
                <MusicList />
            </div>
            <div className="container-fluid h-50 mt-2 p-3">
                <span style={list_info_style} className="row bg-secondary">
                <p className="navbar-brand pl-2 text-white">Trending Videos</p>
                </span>
                <VideoList />
            </div>
        </div>
    );
}

const StartPage = () => {
    return (
        <div className="container-fluid h-75 bg-white">
            <Intro>
                <h2 className="display-2">Music Hunt</h2>
                <p className="lead">One stop for your music search.</p>
            </Intro>
            <MainTab />
            <Footer>
                <div className="col-sm-4"></div>
                <div className="col-sm-4 text-center text-white">
                    <p>Designed and developed by <a style={link} className="text-white" href="github.com/rishichawda">Rishi Chawda</a></p>
                </div>
                <div className="col-sm-4"></div>
            </Footer>
        </div>
    );
}

export default StartPage;