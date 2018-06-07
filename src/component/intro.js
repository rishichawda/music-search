import React, { Component } from 'react';
import image from '../assets/pexels-photo-164879.jpeg';

const row_style = {
    backgroundImage: 'url('+image+')',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
};

const span_style = {
    backgroundColor: 'rgba(0,0,0,0.5)'
};

class Intro extends Component {
    render() {
        return (
            <div style={row_style} className="row h-75 text-white text-center">
                <span style={span_style} className="w-100 my-auto"><h2 className="display-2">Music Hunt</h2>
                <p className="lead">One stop for your music search.</p></span>
            </div>
        );
    }
}

export default Intro;