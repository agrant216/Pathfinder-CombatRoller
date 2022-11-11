import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DiceRollService } from '../dice-roll.service';
import { AttackRoll } from '../models/attack-roll.model';

@Component({
  selector: 'app-attack-roll-list',
  templateUrl: './attack-roll-list.component.html',
  styleUrls: ['./attack-roll-list.component.scss']
})
export class AttackRollListComponent implements OnInit {
  rolls$: Observable<Map<number,AttackRoll>>;
  rollName: string = "";
  rollInput: string = "";

  constructor(private RollService: DiceRollService) {
    this.rolls$ = this.RollService.getRollList();
  }

  ngOnInit(): void {
  }

  ParseRoll(){
    console.log(this.rollInput);
    let splitOnPlus = this.rollInput.split('+');
    let splitOnD = splitOnPlus[0].split('d');
    console.log(splitOnD[0],splitOnD[1],splitOnPlus[1]);
    this.RollService.addNewRoll(this.rollName, Number(splitOnD[0]) || 0,Number(splitOnD[1])||0,Number(splitOnPlus[1])||0);
    this.rollInput = "";
  }

  toggleActiveRoll(rollId: number){
    this.RollService.toggleRollAsActive(rollId);
  }
}
