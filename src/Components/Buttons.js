import { Button, Container } from "@material-ui/core";
import React, { Component } from "react";
import { HashLink, NavHashLink } from "react-router-hash-link";

const NavOldButtons = () => {
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

const NavButtons = () => {
    return(
    <nav>
    <h3>Go to example page:</h3>
    <ul>
      <li>
        <HashLink to="/">Home</HashLink>
      </li>
      <li>
        <HashLink to="/RBPage">RB</HashLink>
      </li>
      <li>
        {/* <HashLink to="/page#section-three">Section Three</HashLink> */}
      </li>
    </ul>
  </nav>
    )
}
export default NavButtons;
