import React, { Component } from 'react';
import VideoCard from './videocard';
import { fetch_videos } from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const list_style = {
    overflowX: 'scroll',
    overflowY: 'hidden',
    whiteSpace: 'nowrap',
    backgroundColor: 'white',
    maxHeight: '50%',
    padding: '2% 0%'
};


class VideoList extends Component {

    constructor(props) {
        super(props);
        this.get_videos = this.get_videos.bind(this);
    }

    get_videos() { 
        console.log('clicked');
    }
    
    generate_cards(videos) {
        const videolist = videos.map((video,key)=><VideoCard video={video} key={key}/>);
        return videolist
    }
    
    componentWillMount(){
        this.props.fetch_videos();
    }

    render() {
        if (this.props.video_list[0]){
            return (
                <div style={list_style}>
                    {this.generate_cards(this.props.video_list[0].items)}
                </div>
            );
        } else {
            return (
                <div style={list_style}>
                </div>
            );
        }
    }
}

function mapDispatchToProps(dispatch) { 
    return bindActionCreators({fetch_videos},dispatch);
 }

 function mapStateToProps({video_list}){
    return ({video_list});
  }

export default connect(mapStateToProps,mapDispatchToProps)(VideoList);