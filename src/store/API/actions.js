import axios from "axios";

const API_BOOKS_URL = "http://nyx.vima.ekt.gr:3000/api/books";

export const doPost = () => {
	return axios.post(API_BOOKS_URL).then((response) => {
		return response;
	});
};
