import { TEData } from "./FinalV2/TE";

/**
 * ----- Ideal Typings Below ------
 */
export type Team = 'CAR' | 'GB';

export interface IdealPlayerType {
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
}

// function getTypesFromDataSource(datasource: 'te' | 'wr' | 'rb' | 'qb'): IdealPlayerType[] {
//     TEData.map((field) => {
//         return {
//             positionRank: field.Position_Rank,
//             ... return all of the types. 
//         }
//     })
// }

/**
 * ------- Ideal Typings Above ------
 */

export interface Player {
    Position_Rank: number,
    rankIGNORE: number,
    First_Name: string,
    Last_Name: string,
    Team: string,
    ESPN_Value: string,
    Overall_Rank: number,
    Week1Projection: number,
    POR: number,
    JamesVal: string,
    "300_Value": string,
    "Rookie\r": "\r" | "Rookie\r" | "Rookie",
}
