import React from "react";
import styled from "styled-components";
import theme from "../theme";

const SearchBox = styled.input`
	background: ${theme.palette.background.base};
	color: ${theme.palette.text.primary};
	border: none;
	padding: ${theme.spacing(2)};
	${theme.typography.body};
	margin-bottom: 26px;
	margin-right: 10px;
`;

const Search = ({ placeholder, search }) => {
	let searchVal = "";
	return (
		<SearchBox
			placeholder={placeholder}
			onChange={({ target }) => (searchVal = target.value)}
			onKeyDown={(e) => {
				e.key === "Enter" && search(searchVal);
			}}
		></SearchBox>
	);
};

export default Search;
