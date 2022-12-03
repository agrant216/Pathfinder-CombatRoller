import { AttackRoll } from "./attack-roll.model";

export interface RollResults extends Result {
  originalRoll: AttackRoll;
  results: Result[];
}

export interface Result {
  dieRolls: number[];
  diceTotal: number;
  modifierTotal: number;
  resultTotal: number;
}
