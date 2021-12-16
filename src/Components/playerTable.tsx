import MUIDataTable, { MUIDataTableOptions } from "mui-datatables";
import { IdealPlayerType } from "../Data/types";
import { FF2021Column } from "./Main";

interface Props {
	title: string;
	data: IdealPlayerType[];
	columns: FF2021Column[];
	options: MUIDataTableOptions;
}

export const PlayerTable = (props: Props) => {
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
