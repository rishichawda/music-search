import { combineReducers } from 'redux';
import videolist from './reducer_vlist';
import videodata from './reducer_video';

const rootReducer = combineReducers({
    videolist,
    videodata
})

export default rootReducer;