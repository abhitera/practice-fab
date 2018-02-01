//File Name: auth.js
//Path: src/reducers/
//Description: This file contains auth reducer and initial structure of user.
import types from '../actions/actionTypes';
import {saveUser, getUser} from '../utils'

let initState = {
	fetching:false,
    data: []
}

export default function(state = initState, action){

	switch (action.type) {
        case types.UNSPLASH_PHOTO_REQUEST : 
            return  {...state, fetching: true }

		case types.UNSPLASH_PHOTO_REQUEST_SUCCESS :
			return {...state,fetching: false, data : action.payload}

		case types.UNSPLASH_PHOTO_REQUEST_FAILURE :
            return {...state, fetching: false}
            
		default :
			return {...state}
	}

}