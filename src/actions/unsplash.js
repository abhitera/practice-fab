import types from './actionTypes';
import store from '../store';
import {
    getPhotosAPI
} from '../api/unsplash';
import {multiPartData} from '../constants';
import {formTypes} from '../constants';
const {dispatch} = store;


export function getPhotos (payload) {
	dispatch({
		type: types.UNSPLASH_PHOTO_REQUEST
	})

	return new Promise ((response, rej) => getPhotosAPI()
		.then(res => {
			dispatch({
				type: types.UNSPLASH_PHOTO_REQUEST_SUCCESS,
				payload: res
			})
			
			return response(res)
		})
		.catch(err => {
			dispatch({
				type: types.UNSPLASH_PHOTO_REQUEST_FAILURE
			})

			return rej(err)
		})
	)

}
