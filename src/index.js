import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import H4 from "./components/H4";
import configureStore from "./store/index";
import { createGlobalStyle } from "styled-components";
import theme from "./theme";
import { loadBooks } from './store/Books/actions';


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

const App = () => {
	return <H4>My Book Repo</H4>;
};

ReactDOM.render(
	<Provider store={store}>
		<GlobalStyle />
		<App />
	</Provider>,
	document.getElementById("root")
);
