import {
	QBDraft,
	RBDraft,
	WRDraft,
	TEDraft,
} from "../DataService/data-service";
import { Header } from "./Header";
import { Switch, Route } from "react-router-dom";
import { useState } from "react";
import { PlayerTable } from "./playerTable";
import { IdealPlayerType } from "../Data/types";
import { MUIDataTableOptions } from "mui-datatables";

interface RowsDeleted {
	lookup: { [dataIndex: number]: boolean };
	data: Array<{ index: number; dataIndex: number }>;
}

export interface FF2021Column {
	name: string;
	label?: string;
	options?: {
		customBodyRender: (value: number | string | boolean) => string;
	};
}

export const Main = (): JSX.Element => {
	const [RB, setRB] = useState<IdealPlayerType[]>(RBDraft);
	const [WR, setWR] = useState<IdealPlayerType[]>(WRDraft);
	const [QB, setQB] = useState<IdealPlayerType[]>(QBDraft);
	const [TE, setTE] = useState<IdealPlayerType[]>(TEDraft);

	const columns: FF2021Column[] = [
		{ name: "Overall_Rank", label: "Overall Rank" },
		{ name: "Position_Rank", label: "Position Rank" },
		{ name: "First_Name", label: "First Name" },
		{ name: "Last_Name", label: "Last Name" },
		{ name: "Team" },
		{ name: "Week1Projection", label: "Week 1 Projection" },
		{ name: "POR", label: "P.A.R." },
		{
			name: "JamesVal",
			label: "My Value",
			options: {
				customBodyRender: (value) => {
					return `$${value}`;
				},
			},
		},
		{
			name: "threeHundredValue",
			label: "ESPN 300 Value",
			options: {
				customBodyRender: (value) => {
					return `$${value}`;
				},
			},
		},
		{
			name: "Rookie",
			label: "Rookie",
			options: {
				customBodyRender: (value) => {
					return value ? "Rookie" : "";
				},
			},
		},
	];

	function getOptions(
		players: IdealPlayerType[],
		setFunc: (player: IdealPlayerType[]) => void
	): MUIDataTableOptions {
		function handleOnRowsDelete(rowsDeleted: RowsDeleted): void {
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
	}

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
				options={getOptions(TE, setTE)}
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
