import axios from "axios";

const API_BOOKS_URL = "http://nyx.vima.ekt.gr:3000/api/books";



export const doPost = (params) => {
	console.log(params);
	return axios.post(API_BOOKS_URL, params).then((response) => {
		return response;
	});
};
