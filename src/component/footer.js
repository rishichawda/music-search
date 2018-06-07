import React, { Component } from 'react';

const footer_style = {
    height: '7%'
};

const link = {
    textDecoration: 'underline'
};

class Footer extends Component {
    render() {
        return (
            <div  style={footer_style} className="container-fluid bg-light w-100">
                <div className="row bg-dark p-2">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-4 text-center text-white">
                        <p>Designed and developed by <a style={link} className="text-white" href="github.com/rishichawda">Rishi Chawda</a></p>
                    </div>
                    <div className="col-sm-4"></div>
                </div>
            </div>
        );
    }
}

export default Footer;