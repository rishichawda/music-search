import React, { Component } from 'react';
import inputbarimage from '../assets/searchtransparent.png';

const searchbarstyle = {
        backgroundImage: 'url('+inputbarimage+')',
        backgroundColor: 'rgba(255,255,255,0.25)',
        backgroundPosition: '4.3%',
        backgroundSize: '11%',
        backgroundRepeat: 'no-repeat',
        borderRadius: '25px',
        padding: '2.5% 2.5% 2.5% 20%',
        outline: 'none',
        color: 'grey',
        border: '0px'
    };

const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-warning">
            <a className="navbar-brand" href="">Music Hunt</a>
            <form onSubmit={this.handleSubmit} style={{width: '16%'}} className="form-inline">
                <input className="w-100" type="text" placeholder="Type your query here!" style={searchbarstyle}/>
            </form>
        </nav>
    );
}

export default Navbar;