import React, { Component } from "react";
import { Main } from "./Components/Main";
import { BrowserRouter } from "react-router-dom";
import styles from "./App.module.css";
import PatchStyles from "patch-styles";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<PatchStyles classNames={styles}>
					<Main />
				</PatchStyles>
			</BrowserRouter>
		);
	}
}

export default App;
