import axios from 'axios';
import {key, part} from './config';

const baseurl = 'https://www.googleapis.com/youtube/v3/search?';

export const vldata = 'video_list';
export const vurl = 'video_url';

export function fetch_videos (query=-1) { 
    if(query===-1){
        const url = `${baseurl}${part}&key=${key}`;
        const request = axios.get(url);
        return {
            type: vldata,
            payload: request
        }
    }
 }

 export function get_video_from_url (video_url) { 
     return {
         type: vurl,
         payload: video_url
     }
  }