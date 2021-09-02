import { Button, Container } from "@material-ui/core";
import React, { Component } from "react";
import { HashLink, NavHashLink } from "react-router-hash-link";

const NavButtons = () => {
	return (
		<div className="m-2 p-2 text-center bg-success">
			<Button className="m-1" variant="contained">
				{/* <HashLink to="/">Home</HashLink> */}
			</Button>
			<Button className="m-1" variant="contained">
				All Players
			</Button>
			<Button className="m-1" variant="contained">
				RB
			</Button>
			<Button className="m-1" variant="contained">
				WR
			</Button>
			<Button className="m-1" variant="contained">
				TE
			</Button>
			<Button className="m-1" variant="contained" href="#contained-buttons">
				QB
			</Button>
		</div>
	);
};
export default NavButtons;
