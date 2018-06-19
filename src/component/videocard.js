import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { get_video_from_url } from '../actions';

const inner_list_block = {
    display: 'inline-block',
    whiteSpace: 'initial'
};


class VideoCard extends Component {

    constructor(props) {
        super(props);
        this.playvideo = this.playvideo.bind(this);
        this.state = false;
    }
    
    playvideo(){
        this.props.get_video_from_url(this.props.video);
        this.setState({
            selected: true
        });
    }
    
    render() {
        if(this.state.selected){
            return (
                <Redirect to='/video'/>
            );
        }
        else{
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
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({get_video_from_url},dispatch);
}


export default connect(null, mapDispatchToProps)(VideoCard);