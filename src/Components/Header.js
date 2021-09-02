import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
	return (
		<div>
			<h1 className="display-2 text-center m-3">Fantasy Draft 2k21</h1>
            <div className="row d-flex justify-content-center">
				<NavLink className="nav-link col-2" to="/WR">
					Wide Receivers
				</NavLink>
                <NavLink className="nav-link col-2" to="/RB">
					Running Backs
				</NavLink>
                <NavLink className="nav-link col-2" to="/QB" >
					Quarter Backs
				</NavLink>
                <NavLink className="nav-link col-2" to="/TE">
					Tight Ends
				</NavLink>
            </div>
		</div>
	);
};
