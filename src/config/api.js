import axios from 'axios';
// Set config defaults when creating the instance
export const API = axios.create({
	baseURL: ' https://tapaksuci.herokuapp.com/tapaksuci/v1'
	//baseURL: 'http://localhost:5000/tapaksuci/v1'
});

// Alter defaults after instance has been created
export const setAuthToken = (token) => {
	if (token) {
		API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
	} else {
		delete API.defaults.headers.common['Authorization'];
	}
};