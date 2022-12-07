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
  repeatNumber: string = "1";

  isEditMode: boolean = false;
  editId: number = 0;

  constructor(private RollService: DiceRollService) {
    this.rolls$ = this.RollService.getRollList();
  }

  ngOnInit(): void {
  }

  ParseRoll(){
    let roll = this.createAttackRoll();

    if (this.isEditMode){
      roll.id = this.editId;
      this.RollService.updateAttackRoll(roll);
      this.isEditMode = false;
    }
    else{
      this.RollService.addNewRoll(roll);
    }

    this.resetFormControls();
  }

  toggleActiveRoll(rollId: number){
    this.RollService.toggleRollAsActive(rollId);
  }

  deleteRoll(rollId: number){
    this.RollService.deleteRollFromList(rollId);
  }

  setEditMode(editId: number){
    this.isEditMode = true;
    //get roll from store by ID
    this.editId = editId;
    let editRoll = this.RollService.getRollById(editId);
    //Set up controls
    this.rollName = editRoll.name;
    this.rollInput = editRoll.text;
    this.repeatNumber = editRoll.repeat.toString();
  }

  private createAttackRoll(): AttackRoll{
    let splitOnPlus = this.rollInput.split('+');
    let splitOnD = splitOnPlus[0].split('d');

    return {
      name: this.rollName,
      dieCount: Number(splitOnD[0]),
      dieSize: Number(splitOnD[1]),
      modifier: Number(splitOnPlus[1]),
      repeat: Number(this.repeatNumber)
    } as AttackRoll;
  }

  private resetFormControls(){
    this.rollName = "";
    this.rollInput = "";
  }
}
