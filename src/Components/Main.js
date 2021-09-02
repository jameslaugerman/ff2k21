import React, { Component } from "react";
import MUIDataTable from "mui-datatables";
// import { v1 } from "../Data/v1";
import { RBData } from "../Data/FinalV1/RBData";
import { QBData } from "../Data/FinalV1/QBData";
import { TEData } from "../Data/FinalV1/TEData";
import { WRData } from "../Data/FinalV1/WRData";
// import { HashLink } from "react-router-hash-link";
// import { Button } from "@material-ui/core";
import NavButtons from "./Buttons";
import { HashLink, NavHashLink } from "react-router-hash-link";

const columns = [
	"Overall_Rank",
	"Position_Rank",
	"First_Name",
	"Last_Name",
	"Team",
	"Week1Projection",
	"POR",
	"JamesVal",
	"300_Value",
	"Rookie\r",
];

const RB = RBData;
const QB = QBData;
const WR = WRData;
const TE = TEData

const slicer = (position) => position.forEach((a) => (a.Last_Name = a.Last_Name.slice(0, -1)));

slicer(RB);
slicer(QB);
slicer(WR);
slicer(TE);

const mapValues = (position) => position.map(Object.values);

mapValues(QB);
mapValues(TE);
mapValues(WR);
mapValues(RB);

const options = {
	filterType: "checkbox",
	onRowsDelete: (e) => {
		console.log(e);
	},
};

export class Main extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "",
			age: "",
			salary: "",
			hobby: "",
		};
	}

	render() {
		return (
			<div>
				<h1 className="display-1" style={{ textAlign: "center" }}>
					Fantasy Draft 2k21
				</h1>
				<NavButtons />
				<div className="container-fluid">
					<MUIDataTable
						title={"QB"}
						data={QB}
						columns={columns}
						options={options}
					/>
					<NavButtons />
					<MUIDataTable
						title={"RB"}
						data={RB}
						columns={columns}
						options={options}
					/>
					<NavButtons />
					<MUIDataTable
						title={"WR"}
						data={WR}
						columns={columns}
						options={options}
					/>
					<NavButtons />
					<MUIDataTable
						title={"TE"}
						data={TE}
						columns={columns}
						options={options}
					/>
				</div>
			</div>
		);
	}
}

export default Main;
