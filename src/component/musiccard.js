import React, { Component } from 'react';
import { connect } from 'react-redux';
import music from '../assets/music.png';

const inner_list_block = {
    display: 'inline-block',
    whiteSpace: 'initial'
};

const MusicCard = () => {
    return (
        <div className="card w-25 mx-2" style={inner_list_block}>
            <img className="card-img-top" height="160px" width="auto" src={music} alt="Card cap" />
            <div className="card-body bg-light">
                <p className="card-text">Song name<br/>Artist name<br/>Album name</p>
            </div>
        </div>
    );
}

export default MusicCard;