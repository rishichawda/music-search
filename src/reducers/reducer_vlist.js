import {vldata} from '../actions';

export default function ( state = [], action ) { 
    switch (action.type) {
        case vldata:
            return [action.payload.data, ...state];
        default: {}
    }
    return state;
 }