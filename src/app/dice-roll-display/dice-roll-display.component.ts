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

  Roll(){
    this.RollService.CalculateActiveRolls();
  }

  public getFormatedRoll(roll:AttackRoll): string{
    return `${roll.dieCount}d${roll.dieSize} + ${roll.modifier}`;
  }
}
