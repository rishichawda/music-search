import React, { Component } from 'react';

const inner_list_block = {
    display: 'inline-block',
    whiteSpace: 'initial'
};


class VideoCard extends Component {

    constructor(props) {
        super(props);
        this.playvideo = this.playvideo.bind(this);
    }
    

    playvideo(){

        console.log(this.props.video);
    }

    render() {
        return (
            <div onClick={this.playvideo} style={inner_list_block} className="card w-25 h-100 mx-2">
                <img className="card-img-top" height="160px" src={this.props.video.snippet.thumbnails.medium.url} alt="Card cap" />
                <div id="videoinfo" className="card-body bg-light">
                    <p className="card-text">{this.props.video.snippet.title}</p>
                </div>
            </div>
        );
    }
}

export default VideoCard;