import React, { Component } from "react";
import { WRData } from "../Data/FinalV2/WR";
import { RBData } from "../Data/FinalV2/RB";
import { QBData } from "../Data/FinalV2/QB";
import { TEData } from "../Data/FinalV2/TE";
import { Header } from "./Header";
import { Switch, Route } from "react-router-dom";
import { PlayerTable } from "./playerTable"

const [RB, setRB] = useState(RBData);
const [WR, setWR] = useState(WRData);
const [QB, setQB] = useState(QBData);
const [TE, setTE] = useState(TEDataWR);

const mapValues = (position => position.map(Object.values));

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

