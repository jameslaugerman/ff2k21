import MUIDataTable from "mui-datatables";

export const PlayerTable = (props) => {
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