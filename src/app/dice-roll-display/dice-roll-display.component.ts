import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DiceRollService } from '../dice-roll.service';
import { AttackRoll } from '../models/attack-roll.model';
import { RollResult } from '../models/roll-result.model';

@Component({
  selector: 'app-dice-roll-display',
  templateUrl: './dice-roll-display.component.html',
  styleUrls: ['./dice-roll-display.component.scss']
})
export class DiceRollDisplayComponent implements OnInit {
  results$: Observable<RollResult[]>;

  constructor(private RollService: DiceRollService) {
    this.results$ = this.RollService.getRollResults();
  }

  ngOnInit(): void {
  }

  public Roll(){
    this.RollService.CalculateActiveRolls();
  }

  public getFormattedRoll(roll:AttackRoll): string {
    return `${roll.dieCount}d${roll.dieSize} + ${roll.modifier}`;
  }

  public getFormattedDiceRolls(dice: number[]): string {
    let text: string[] = ["("];
    dice.forEach((die, i, arr) => {
      if(i !== arr.length - 1){
        text.push(die.toString(),"+");
      }
      else{
        text.push(die.toString(),")")
      }
    })
    return text.join("");
  }
}
