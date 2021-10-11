import React from "react";
import { WRData } from "../Data/FinalV2/WR";
import { RBData } from "../Data/FinalV2/RB";
import { QBData } from "../Data/FinalV2/QB";
import { TEData } from "../Data/FinalV2/TE";
import { Header } from "./Header";
import { Switch, Route } from "react-router-dom";
import { useState } from "react";
import { PlayerTable } from "./playerTable";

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

	const getOptions = (position, setFunc) => {
		const options = {
			selectableRows: "multiple",
			selectableRowsOnClick: true,
			onRowsDelete: (e) => {
				const dataIndex = e.data.flatMap((a) => a.dataIndex);
				var filteredPlayers = position.filter(
					(el, i) => !dataIndex.some((j) => i === j)
				);
				setFunc(filteredPlayers);
			},
			selectedRows: {
				delete: "Delete",
				deleteAria: "Delete Selected Rows",
			},
		};
		return options;
	};

	const WRComponent = () => {
		return (
			<PlayerTable
				options={getOptions(WR, setWR)}
				columns={columns}
				data={WR}
				title={"Wide Receivers"}
			/>
		);
	};

	const RBComponent = () => {
		return (
			<PlayerTable
				options={getOptions(RB, setRB)}
				columns={columns}
				data={RB}
				title={"Running Backs"}
			/>
		);
	};

	const QBComponent = () => {
		return (
			<PlayerTable
				options={getOptions(QB, setQB)}
				columns={columns}
				data={QB}
				title={"Quarter Backs"}
			/>
		);
	};

	const TEComponent = () => {
		return (
			<PlayerTable
				options={getOptions(TE,setTE)}
				columns={columns}
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
