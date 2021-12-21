import MUIDataTable, { MUIDataTableOptions } from "mui-datatables";
import PatchStyles from "patch-styles";
import { IdealPlayerType } from "../Data/types";
import { FF2021Column } from "./Main";
import styles from "./playerTable.module.css";

interface Props {
	title: string;
	data: IdealPlayerType[];
	columns: FF2021Column[];
	options: MUIDataTableOptions;
}

export const PlayerTable = (props: Props) => {
	return (
		<PatchStyles classNames={styles}>
			<div className="container-fluid tableText">
				<MUIDataTable
					title={props.title}
					data={props.data}
					columns={props.columns}
					options={props.options}
				/>
			</div>
		</PatchStyles>
	);
};
