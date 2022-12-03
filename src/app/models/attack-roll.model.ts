export interface AttackRoll extends Roll {
  id: number;
  name: string;
  modifier: number;
  isActive: boolean;
  repeat: number;
  additionalRolls: Roll[];
}

interface Roll {
  dieCount: number;
  dieSize: number;
}
