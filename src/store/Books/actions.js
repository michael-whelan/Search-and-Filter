import { doPost } from "../API/actions";
import { STORE_BOOKS, FETCH_BOOKS_ERROR } from "./types";

const storeBooks = (data) => ({
	type: STORE_BOOKS,
	data: data,
});

const fetchBooksError = () => ({
	type: FETCH_BOOKS_ERROR,
});

export const loadBooks = ({
	page = 1,
	itemsPerPage = 20,
	filters = [],
}={}) => async (dispatch) => {
	try {
		let response = await doPost({ page, itemsPerPage, filters });
		if (response.status === 200) {
			dispatch(storeBooks(response.data));
		} else {
			dispatch(fetchBooksError());
		}
	} catch (error) {
		dispatch(fetchBooksError());
	}
};
