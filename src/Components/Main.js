import React, { Component } from "react";
import { RBData } from "../Data/FinalV1/RBData";
import { WRData } from "../Data/FinalV1/WRData";
import { QBData } from "../Data/FinalV1/QBData";
import { TEData } from "../Data/FinalV1/TEData";
import { Header } from "./Header";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { PlayerTable } from "./playerTable"

const RB = RBData;
const WR = WRData;
const QB = QBData;
const TE = TEData;

const mapValues = (position) => position.map(Object.values);

mapValues(QB);
mapValues(TE);
mapValues(WR);
mapValues(RB);

const slicer = (position) => position.forEach((a) => (a.Last_Name = a.Last_Name.slice(0, -1)));

slicer(RB);
slicer(QB);
slicer(WR);
slicer(TE);

export class Main extends Component {
	constructor(props) {
		super(props);

		this.state = {
			RBData: RBData,
			WRData: WRData,
			QBData: QBData,
			TEData: TEData,
		};
	}
	render() {
		const WRComponent = () => {
			return <PlayerTable data={this.state.WRData} title={"Wide Receivers"} />;
		};

		const RBComponent = () => {
			return <PlayerTable data={this.state.RBData} title={"Running Backs"} />;
		};

		const QBComponent = () => {
			return <PlayerTable data={this.state.QBData} title={"Quarter Backs"} />;
		};

		const TEComponent = () => {
			return <PlayerTable data={this.state.TEData} title={"Tight Ends"} />;
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
	}
}

// export default Main
