import React, { Component } from "react";
import MUIDataTable from "mui-datatables";
import { v1 } from "../Data/v1";

const columns = [
	"Overall Rank",
	"Position Rank",
	"First Name",
	"Last Name",
	"Team",
	"ESPN 300 Value",
];

const data = v1;
data.forEach((a => a.ESPN_Value = a.ESPN_Value * 1.5))
data.forEach(a => a.Position_Rank = a.Position_Rank.slice(1, -1))
data.forEach(a => a.Last_Name = a.Last_Name.slice(0,-1))

const backs = "RB"
const receivers = "WR"
const ends = "TE"
const quarter = "QB"

const rback = data.filter(a => a.Position_Rank.indexOf(backs) === 0)
const wide = data.filter(a => a.Position_Rank.indexOf(receivers) === 0)
const quarterbacks = data.filter(a => a.Position_Rank.indexOf(quarter) === 0)
const tends = data.filter(a => a.Position_Rank.indexOf(ends) === 0)

const allPlayers = data.map( Object.values );
const RB = rback.map(Object.values);
const WR = wide.map(Object.values)
const QB = quarterbacks.map(Object.values)
const TE = tends.map(Object.values)

const options = {
	filterType: "checkbox",
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
				<h1 style={{textAlign: "center"}}>Fantasy Draft 2k21</h1>
				<div>
					<MUIDataTable
						title={"All Players"}
						data={allPlayers}
						columns={columns}
						options={options}
					/>
					<MUIDataTable
						title={"RB"}
						data={RB}
						columns={columns}
						options={options}
					/>
					<MUIDataTable
						title={"WR"}
						data={WR}
						columns={columns}
						options={options}
					/>
				</div>
			</div>
		);
	}
}

export default Main;
