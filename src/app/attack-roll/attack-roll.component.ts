import { Component, Input, OnInit } from '@angular/core';
import { AttackRoll } from '../models/attack-roll.model';

@Component({
  selector: 'app-attack-roll',
  templateUrl: './attack-roll.component.html',
  styleUrls: ['./attack-roll.component.scss']
})
export class AttackRollComponent implements OnInit {
  @Input() editMode: boolean = false;
  @Input() attackRoll: AttackRoll = {} as AttackRoll;

  constructor() { }

  ngOnInit(): void {
  }

}
