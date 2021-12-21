import { StyleSharp } from "@material-ui/icons";
import { StylesContext } from "@material-ui/styles";
import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import PatchStyles from "patch-styles";

export const Header = (): JSX.Element => {
	return (
		<PatchStyles classNames={styles}>
			<div className={styles.header}>
				<h1 className="text-center">Fantasy Draft 2k21</h1>
				<div className="row d-flex justify-content-center">
					<NavLink className="nav-link col-2 headerLink" to="/WR">
						Wide Receivers
					</NavLink>
					<NavLink className="nav-link col-2 headerLink" to="/RB">
						Running Backs
					</NavLink>
					<NavLink className="nav-link col-2 headerLink" to="/QB">
						Quarter Backs
					</NavLink>
					<NavLink className="nav-link col-2 headerLink" to="/TE">
						Tight Ends
					</NavLink>
				</div>
			</div>
		</PatchStyles>
	);
};
