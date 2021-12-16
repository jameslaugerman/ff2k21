import { WRData } from "../Data/FinalV2/WR";
import { RBData } from "../Data/FinalV2/RB";
import { QBData } from "../Data/FinalV2/QB";
import { TEData } from "../Data/FinalV2/TE";
import { IdealPlayerType, Player } from "../Data/types";

class PlayerClass {
	Position_Rank: number;
	rankIGNORE: number;
	First_Name: string;
	Last_Name: string;
	Team: string;
	ESPN_Value: number;
	Overall_Rank: number;
	Week1Projection: number;
	POR: number;
	JamesVal: number;
	threeHundredValue: number;
	Rookie: boolean

	constructor(
		Position_Rank: number,
		rankIgnore: number,
		FirstName: string,
		LastName: string,
		Team: string,
		ESPN: string,
		OverallRank: number,
		Week1Projection: number,
		POR: number,
		JamesVal: string,
		threeHundredValue: string,
		Rookie: string
	) {
		this.Position_Rank = Position_Rank;
		this.rankIGNORE = rankIgnore;
		this.First_Name = FirstName;
		this.Last_Name = LastName;
		this.Team = Team;
		this.ESPN_Value = +ESPN.substring(1);
		this.Overall_Rank = OverallRank;
		this.Week1Projection = Week1Projection;
		this.POR = POR;
		this.JamesVal = +JamesVal.substring(1);
		this.threeHundredValue = +threeHundredValue.substring(1);
		this.Rookie = Rookie === "\r" ? false : true;
	}
}

function dataConstructor(playerData:Player[], playerArr:IdealPlayerType[]) {
	playerData.forEach(
		({
			Position_Rank,
			rankIGNORE,
			First_Name,
			Last_Name,
			Team,
			ESPN_Value,
			Overall_Rank,
			Week1Projection,
			POR,
			JamesVal,
			"300_Value": threeHundredValue,
			"Rookie\r": Rookie,
		}) => {
			let constructedPlayer = new PlayerClass(
				Position_Rank,
				rankIGNORE,
				First_Name,
				Last_Name,
				Team,
				ESPN_Value,
				Overall_Rank,
				Week1Projection,
				POR,
				JamesVal,
				threeHundredValue,
				Rookie
			);
			playerArr.push(constructedPlayer);
		}
	);
}

export let Quarterbacks:IdealPlayerType[] = [];
export let RunningBacks:IdealPlayerType[] = [];
export let WideReceivers:IdealPlayerType[]= [];
export let TightEnds:IdealPlayerType[] = [];

dataConstructor(QBData, Quarterbacks);
dataConstructor(RBData, RunningBacks);
dataConstructor(WRData, WideReceivers);
dataConstructor(TEData, TightEnds);

export const QBDraft = Quarterbacks;
export const RBDraft = RunningBacks;
export const WRDraft = WideReceivers;
export const TEDraft = TightEnds;

console.log(QBDraft)

