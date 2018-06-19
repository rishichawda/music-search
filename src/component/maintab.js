import React, { Component } from 'react';
import VideoList from './videolist';
import MusicList from './musiclist';

const list_info_style = {
    height: '7%'
};

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

export default MainTab;