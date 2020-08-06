import React from "react";
import Book from "./Book";
import styled from "styled-components";

const BookHolder = styled.div`
	display: grid;
	grid-column-gap: 24px;
	grid-row-gap: 24px;
	grid-template-columns: repeat(3, 1fr);
	margin-top:25vh;
`;

const BookList = ({ books }) => {
	return (
		<BookHolder>
			{books.length > 0 &&
				books.map((b, index) => <Book key={index} book={b}></Book>)}
		</BookHolder>
	);
};
export default BookList;
