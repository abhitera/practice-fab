import { apiPost, apiGet, apiReq, apiPut, randomString } from '../utils';
import qs from 'query-string';
import {formTypes, authApiUrl, apiUrl} from '../constants';

const headers = {
	'Content-Type': formTypes.urlencoded,
	'X-Parse-Revocable-Session' : 1,
	'X-Parse-Application-Id' : formTypes.appId
}

//Function Name: loginAPI
//Parameters: user
//Description: This function is used hit login API.
export function getPhotosAPI () {
	return apiGet();
} 


