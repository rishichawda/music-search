import { combineReducers } from 'redux';
import reducer_vlist from './reducer_vlist';

const rootReducer = combineReducers({
    video_list: reducer_vlist
})

export default rootReducer;