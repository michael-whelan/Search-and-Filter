import { doPost } from "../API/actions";
import { STORE_BOOKS, FETCH_BOOKS_ERROR } from "./types";

const storeBooks = (data) => ({
	type: STORE_BOOKS,
	data: data,
});

const fetchBooksError = () => ({
	type: FETCH_BOOKS_ERROR,
});

export const loadBooks = () => async (dispatch) => {
	try {
		let response = await doPost();
		if (response.status === 200) {
			dispatch(storeBooks(response.data));
		} else {
			dispatch(fetchBooksError());
		}
	} catch (error) {
		dispatch(fetchBooksError());
	}
};
