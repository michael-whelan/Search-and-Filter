import React, { useEffect, useState } from "react";
import BookList from "../components/BookList";
import { useSelector, useDispatch } from "react-redux";
import styled, { css } from "styled-components";
import theme from "../theme";
import { loadBooks } from "../store/Books/actions";
import Search from "../components/Search";
import { useHistory } from "react-router";
import { withRouter, useRouteMatch } from "react-router-dom";

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
	const bookCount = useSelector((state) => state.books.bookList.count);
	const [loading, setLoading] = useState(true);

	const history = useHistory();
	const dispatch = useDispatch();

	const {
		params: { page, searchVal = "" },
	} = useRouteMatch("/:page/:searchVal?");

	const handlePager = (diff) => {
		const nextPage = parseInt(page) + diff;
		history.push(`/${nextPage}/${searchVal}`);
	};

	useEffect(() => {
		page &&
			dispatch(
				loadBooks({
					page: page,
					filters: [{ type: "all", values: [searchVal] }],
				})
			);
	}, [page, searchVal]);

	useEffect(() => {
		books && setLoading(false);
	}, [books]);

	const leftArea = () => {
		return (
			<Left>
				<Search
					placeholder={"Search..."}
					search={(val) => {
						history.push(`/1/${val}`);
					}}
				></Search>
				<Button
					disabled={parseInt(page) === 1}
					onClick={() => {
						handlePager(-1);
					}}
				>
					Prev
				</Button>
				<Button
					disabled={parseInt(page) === Math.ceil(bookCount / 20)}
					onClick={() => {
						handlePager(1);
					}}
				>
					Next
				</Button>
			</Left>
		);
	};

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

export default withRouter(MainAreaContainer);
