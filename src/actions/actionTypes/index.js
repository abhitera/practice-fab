//File Name: index.js
//Path: src/actions/actionTypes/
//Description: All actionTypes are imported and are exported as filename from here.
import * as auth from './auth';
import * as unsplash from './unsplash';

export default {
	...auth,
	...unsplash
}