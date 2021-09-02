import React, { Component } from "react";
import MUIDataTable from "mui-datatables";

const columns = [
	{ name: "Overall_Rank", label: "Overall Rank" },
	{ name: "Position_Rank", label: "Position Rank" },
	{ name: "First_Name", label: "First Name" },
	{ name: "Last_Name", label: "Last Name" },
	{ name: "Team" },
	{ name: "Week1Projection", label: "Projected" },
	{ name: "POR", label: "P.A.R." },
	{ name: "JamesVal", label: "My Value" },
	{ name: "300_Value", label: "ESPN Value" },
	{ name: "Rookie\r", label: "Rookie" },
];

export class PlayerTable extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: this.props.data,
		};
	}

	render() {
		const options = {
			selectableRows: true,
			selectableRowsOnClick: true,
			onRowsDelete: (e) => {
				console.log(e.data[0].index);

				this.state.data.shift(e.data[0].index)
				console.log(this.state.data)
			},
			selectedRows: {
				delete: "Delete",
				deleteAria: "Delete Selected Rows",
			},
		};
		return (
			<div>
				<div className="container-fluid">
					<MUIDataTable
						title={this.props.title}
						data={this.state.data}
						columns={columns}
						options={options}
					/>
				</div>
			</div>
		);
	}
}

export default PlayerTable;
