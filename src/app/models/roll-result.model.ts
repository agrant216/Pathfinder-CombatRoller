import { AttackRoll } from "./attack-roll.model";

export interface RollResult {
  originalRoll: AttackRoll;
  dieRolls: number[];
  diceTotal: number;
  modifierTotal: number;
  resultTotal: number;
}
