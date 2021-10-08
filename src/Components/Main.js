import React from "react";
import { WRData } from "../Data/FinalV2/WR";
import { RBData } from "../Data/FinalV2/RB";
import { QBData } from "../Data/FinalV2/QB";
import { TEData } from "../Data/FinalV2/TE";
import { Header } from "./Header";
import { Switch, Route } from "react-router-dom";
import { useState } from "react";
import MUIDataTable from "mui-datatables";

const PlayerTable = (props) => {
	return (
		<div>
			<div className="container-fluid">
				<MUIDataTable
					title={props.title}
					data={props.data}
					columns={props.columns}
					options={props.options}
				/>
			</div>
		</div>
	);
};



export const Main = () => {
	const [RB, setRB] = useState(RBData);
	const [WR, setWR] = useState(WRData);
	const [QB, setQB] = useState(QBData);
	const [TE, setTE] = useState(TEData);

	const mapValues = (position) => position.map(Object.values);

	mapValues(QB);
	mapValues(TE);
	mapValues(WR);
	mapValues(RB);

	// const slicer = (position) =>
	// 	position.forEach((a) => (a.Last_Name = a.Last_Name.slice(0, -1)));

	// slicer(RB);
	// slicer(QB);
	// slicer(WR);
	// slicer(TE);

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

	const options = {
		selectableRows: true,
		selectableRowsOnClick: true,
		onRowsDelete: (e) => {
			// console.log(e.data[0].index);
			console.log(e.data);
		},
		selectedRows: {
			delete: "Delete",
			deleteAria: "Delete Selected Rows",
		},
	};

	const WRoptions = {
		selectableRows: "multiple",
		selectableRowsOnClick: true,
		onRowsDelete: (e) => {
			const dataIndex = e.data[0].dataIndex;
			const playerToDelete = WR[dataIndex];
			const playerRank = playerToDelete.Overall_Rank;
	
			const filteredWR = WR.filter((a) => a.Overall_Rank !== playerRank);
	
			setWR(filteredWR);
		},
		selectedRows: {
			delete: "Delete",
			deleteAria: "Delete Selected Rows",
		},
	};

	const RBoptions = {
		selectableRows: "multiple",
		selectableRowsOnClick: true,
		onRowsDelete: (e) => {
			const dataIndex = e.data[0].dataIndex;
			const playerToDelete = RB[dataIndex];
			const playerRank = playerToDelete.Overall_Rank;
	
			const filteredWR = RB.filter((a) => a.Overall_Rank !== playerRank);
	
			setRB(filteredWR);
		},
		selectedRows: {
			delete: "Delete",
			deleteAria: "Delete Selected Rows",
		},
	};

	const TEoptions = {
		selectableRows: "multiple",
		selectableRowsOnClick: true,
		onRowsDelete: (e) => {
			const dataIndex = e.data[0].dataIndex;
			const playerToDelete = TE[dataIndex];
			const playerRank = playerToDelete.Overall_Rank;
	
			const filteredWR = TE.filter((a) => a.Overall_Rank !== playerRank);
	
			setTE(filteredWR);
		},
		selectedRows: {
			delete: "Delete",
			deleteAria: "Delete Selected Rows",
		},
	};

	const QBoptions = {
		selectableRows: "multiple",
		selectableRowsOnClick: true,
		onRowsDelete: (e) => {
			const dataIndex = e.data[0].dataIndex;
			const playerToDelete = QB[dataIndex];
			const playerRank = playerToDelete.Overall_Rank;
	
			const filteredWR = QB.filter((a) => a.Overall_Rank !== playerRank);
	
			setQB(filteredWR);
		},
		selectedRows: {
			delete: "Delete",
			deleteAria: "Delete Selected Rows",
		},
	};

	const WRComponent = () => {
		return (
			<PlayerTable
				options={WRoptions}
				columns={columns}
				onDelete={setWR}
				data={WR}
				title={"Wide Receivers"}
			/>
		);
	};

	const RBComponent = () => {
		return (
			<PlayerTable
				options={RBoptions}
				columns={columns}
				onDelete={setRB}
				data={RB}
				title={"Running Backs"}
			/>
		);
	};

	const QBComponent = () => {
		return (
			<PlayerTable
				options={QBoptions}
				columns={columns}
				onDelete={setQB}
				data={QB}
				title={"Quarter Backs"}
			/>
		);
	};

	const TEComponent = () => {
		return (
			<PlayerTable
				options={TEoptions}
				columns={columns}
				onDelete={setTE}
				data={TE}
				title={"Tight Ends"}
			/>
		);
	};

	return (
		<>
			<Header />
			<Switch>
				<Route path="/WR" component={WRComponent} />
				<Route path="/RB" component={RBComponent} />
				<Route path="/QB" component={QBComponent} />
				<Route path="/TE" component={TEComponent} />
				<Route path="/" component={RBComponent} />
			</Switch>
		</>
	);
};
