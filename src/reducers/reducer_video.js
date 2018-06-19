import { vurl } from '../actions';

export default function ( state = [], action ) { 
    switch (action.type) {
        case vurl: 
            return [ action.payload, ...state ]
        default: {}
    }
    return state;
 }