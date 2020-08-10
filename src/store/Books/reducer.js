import { STORE_BOOKS, FETCH_BOOKS_ERROR } from "./types";

const initialState = {
	bookList: [],
};

export default function books(state = initialState, { type, data }) {
	switch (type) {
		case STORE_BOOKS:
			return { bookList: data, error: null };
		case FETCH_BOOKS_ERROR:
			return { ...state, error: "Error Occurred" };
		default:
			return state;
	}
}
