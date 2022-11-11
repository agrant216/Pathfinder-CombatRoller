import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { AttackRoll } from './models/attack-roll.model';
import { RollResult } from './models/roll-result.model';

@Injectable({
  providedIn: 'root'
})
export class DiceRollService {
  private currentId: number = 0;
  private rollList = new BehaviorSubject<Map<number,AttackRoll>>(new Map<number,AttackRoll>());
  private rollResult = new Subject<RollResult[]>();

  constructor() { }

  public getRollList(): Observable<Map<number,AttackRoll>> {
    return this.rollList.asObservable();
  }
  public getRollResults(): Observable<RollResult[]> {
    return this.rollResult.asObservable();
  }

  public addNewRoll(name:string = "", dieCount:number, dieSize:number, modifier:number){
    this.addRoll({id: this.getNextId(), name, dieCount,dieSize, modifier, isActive: false} as AttackRoll)
  }

  public getRollById(id:number): AttackRoll {
    return this.rollList.getValue().get(id) ?? {} as AttackRoll;
  }

  public updateAttackRoll(updatedRoll: AttackRoll){
    let newRollList = this.rollList.getValue();
    this.rollList.next(newRollList.set(updatedRoll.id,updatedRoll));
  }

  public addRoll(roll: AttackRoll){
    this.rollList.next(this.rollList.getValue().set(roll.id,roll));
  }

  public getNextId(): number {
    this.currentId = this.currentId+1;
    return this.currentId;
  }

  public toggleRollAsActive(id: number){
    let roll = this.getRollById(id);
    roll.isActive = !roll.isActive;
    this.updateAttackRoll(roll);
  }

  public CalculateActiveRolls(){
    let activeRolls = [...this.rollList.getValue().values()].filter(r => r.isActive);
    let results: RollResult[] = [];

    activeRolls.forEach(roll => {
      let rollResult: RollResult = {originalRoll: roll, diceTotal:0} as RollResult;
      rollResult.dieRolls = [];

      for (let i = 0; i < roll.dieCount; i++) {
          let result =  Math.floor(Math.random() * roll.dieSize) + 1;
          rollResult.diceTotal += result;
          rollResult.dieRolls.push(result);
          console.log(result);
      }
      rollResult.modifierTotal = roll.modifier;
      rollResult.resultTotal = rollResult.diceTotal + rollResult.modifierTotal;
      console.log("Result", rollResult);
      results.push(rollResult);
    });
    this.rollResult.next(results);
  }
}
