import { WRData } from "../Data/FinalV2/WR";
import { RBData } from "../Data/FinalV2/RB";
import { QBData } from "../Data/FinalV2/QB";
import { TEData } from "../Data/FinalV2/TE";
import { Header } from "./Header";
import { Switch, Route } from "react-router-dom";
import { useState } from "react";
import { PlayerTable } from "./playerTable";
import { Player } from "../Data/types";
import {  MUIDataTableOptions } from "mui-datatables";

interface RowsDeleted {
	lookup: { [dataIndex: number]: boolean };
	data: Array<{ index: number; dataIndex: number }>;
}

export interface FF2021Column {
	name: string;
	label?: string;
}

export const Main = (): JSX.Element => {
	const [RB, setRB] = useState<Player[]>(RBData);
	const [WR, setWR] = useState<Player[]>(WRData);
	const [QB, setQB] = useState<Player[]>(QBData);
	const [TE, setTE] = useState<Player[]>(TEData);

	const columns: FF2021Column[] = [
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

	function getOptions (
		players: Player[], 
		setFunc: (player: Player[]) => void
	): MUIDataTableOptions {

		function handleOnRowsDelete (rowsDeleted: RowsDeleted): void {
			const dataIndex = rowsDeleted.data.flatMap((a) => a.dataIndex);
			var filteredPlayers = players.filter(
				(el, i) => !dataIndex.some((j) => i === j)
			);
			setFunc(filteredPlayers);
		}

		return {
			selectableRows: "multiple",
			selectableRowsOnClick: true,
			onRowsDelete: handleOnRowsDelete,
		};
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
