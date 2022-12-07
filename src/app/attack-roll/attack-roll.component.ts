import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AttackRoll } from '../models/attack-roll.model';

@Component({
  selector: 'app-attack-roll',
  templateUrl: './attack-roll.component.html',
  styleUrls: ['./attack-roll.component.scss']
})
export class AttackRollComponent implements OnInit {
  @Input() attackRoll: AttackRoll = {} as AttackRoll;
  @Output() editRoll = new EventEmitter<number>();
  @Output() deleteRoll = new EventEmitter<number>();
  @Output() activateRoll = new EventEmitter<number>();

  public editing: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  setRollEdit(id: number){
    this.editRoll.emit(id);
    this.editing = true;
  }

  setRollDelete(id: number){
    this.deleteRoll.emit(id);
  }

  setRollActive(id: number){
    this.activateRoll.emit(id);
  }
}
