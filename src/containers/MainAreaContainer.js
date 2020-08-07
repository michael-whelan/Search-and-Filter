import React, { useEffect, useState } from "react";
import BookList from "../components/BookList";
import { useSelector, useDispatch } from "react-redux";
import styled, { css } from "styled-components";
import theme from "../theme";
import { loadBooks } from "../store/Books/actions";
import Search from "../components/Search";

const Message = styled.div`
	display: block;
	text-align: center;
	margin-bottom: 10px;
	${theme.typography.body};
`;

const Button = styled.button`
	display: inline-block;
	padding: 5px;
	border-radius: 5px;
	background: transparent;
	border-style: solid;
	border-width: 1px;
	margin: auto;
	border-color: ${theme.palette.primary.main};
	color: ${theme.palette.primary.main};
	${theme.typography.button};
	${(props) =>
		props.disabled &&
		css`
			color: ${theme.palette.primary.dark};
			border-color: ${theme.palette.primary.dark};
		`}
`;

const Left = styled.div`
	display: block;
	left: 0.5vw;
	position: absolute;
`;

const MainAreaContainer = () => {
	const books = useSelector((state) => state.books.bookList.books);
	const [loading, setLoading] = useState(true);
	const [page, setPage] = useState(1);
	const dispatch = useDispatch();

	const leftArea = () => {
		return (
			<Left>
				<Search
					placeholder={"Search..."}
					search={(val) =>
						dispatch(
							loadBooks({
								filters: [{ type: "all", values: [val] }],
							})
						)
					}
				></Search>
				<Button
					disabled={page === 1}
					onClick={() => {
						setPage(page - 1);
						dispatch(
							loadBooks({
								page: page,
							})
						);
					}}
				>
					Prev
				</Button>
				<Button
					page={page}
					onClick={() => {
						setPage(page + 1);
						dispatch(
							loadBooks({
								page: page,
							})
						);
					}}
				>
					Next
				</Button>
			</Left>
		);
	};
	useEffect(() => {
		books && setLoading(false);
	}, [books]);

	return (
		<>
			{leftArea()}
			{loading ? (
				<Message>Loading Books...</Message>
			) : (
				<BookList books={books}></BookList>
			)}
		</>
	);
};

export default MainAreaContainer;
