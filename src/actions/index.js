import axios from 'axios';
import {key} from './config';

const baseurl = 'https://www.googleapis.com/youtube/v3/search?';

export const vldata = 'video_list';

export function fetch_videos (query=-1) { 
    if(query===-1){
        const url = `${baseurl}part=snippet&maxResults=11&order=viewCount&type=video&videoCategoryId=10&regionCode=US&key=${key}`;
        const request = axios.get(url);
        return {
            type: vldata,
            payload: request
        }
    }
 }