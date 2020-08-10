import React from "react";
import styled from "styled-components";
import theme from "../theme";

const BookPanel = styled.div`
	background: ${theme.palette.background.base};
	color: white;
	padding: ${theme.spacing(2)};
	${theme.typography.body};
`;
const BookHeader = styled.div`
	color: white;
	margin-bottom: 25px;
	${theme.typography.h6};
`;

const Book = ({
	book: {
		id,
		book_title,
		book_publication_year,
		book_publication_country,
		book_publication_city,
		book_pages,
	},
}) => {
	return (
		<BookPanel>
			<BookHeader>{book_title}</BookHeader>
			<div>{`Published: ${book_publication_year}`}</div>
			<div>{`City: ${book_publication_city}`}</div>
			<div>{`Country: ${book_publication_country}`}</div>
			<div>{`Length: ${book_pages} pages`}</div>
		</BookPanel>
	);
};
export default Book;
