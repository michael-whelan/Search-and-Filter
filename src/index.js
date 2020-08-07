import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import H4 from "./components/H4";
import configureStore from "./store/index";
import { createGlobalStyle } from "styled-components";
import theme from "./theme";
import { loadBooks } from "./store/Books/actions";
import MainAreaContainer from "./containers/MainAreaContainer";

const store = configureStore();
store.dispatch(loadBooks());

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Play';
    background: ${theme.palette.background.body};
    color: ${theme.palette.text.primary};
    ${theme.typography.body};
  }
`;

ReactDOM.render(
	<Provider store={store}>
		<GlobalStyle />
		<H4>My Book Repo</H4>
		<MainAreaContainer />
	</Provider>,
	document.getElementById("root")
);
