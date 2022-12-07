export interface AttackRoll extends Roll {
  id: number;
  name: string;
  modifier: number;
  isActive: boolean;
  repeat: number;
  text: string;
  additionalRolls: Roll[];
}

export interface Roll {
  dieCount: number;
  dieSize: number;
}
