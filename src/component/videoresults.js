import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class VideoResults extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        if(!this.props.videodata[0]) {
            return(
                <Redirect to='/' />
            );
        } else {
            return (
                <div>
                    This is video player section
                    { JSON.stringify(this.props.videodata) }
                </div>
            );
        }
    }
}

function mapStateToProps({videodata}) {
    return {videodata};
 }

//  export default connect(mapStateToProps,null)(MusicCard);

 export default connect(mapStateToProps, null)(VideoResults);