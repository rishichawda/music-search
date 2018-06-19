import React, { Component } from 'react';
import MusicCard from './musiccard';

const list_style = {
    overflowX: 'scroll',
    overflowY: 'hidden',
    whiteSpace: 'nowrap',
    backgroundColor: 'white',
    height: '50%',
    padding: '2% 0%'
};


const MusicList = () => {
    return (
        <div style={list_style}>
                    <MusicCard />
                    <MusicCard />
                    <MusicCard />
                    <MusicCard />
                    <MusicCard />
                    <MusicCard />
                    <MusicCard />
        </div>
    );
}

export default MusicList;