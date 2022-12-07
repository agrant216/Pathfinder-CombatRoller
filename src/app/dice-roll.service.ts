import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { AttackRoll, Roll } from './models/attack-roll.model';
import { RollResults, Result } from './models/roll-result.model';

@Injectable({
  providedIn: 'root'
})
export class DiceRollService {
  private currentId: number = 0;
  private rollList = new BehaviorSubject<Map<number,AttackRoll>>(new Map<number,AttackRoll>());
  private rollResults = new Subject<RollResults[]>();

  constructor() { }

  public getRollList(): Observable<Map<number,AttackRoll>> {
    return this.rollList.asObservable();
  }
  public getRollResults(): Observable<RollResults[]> {
    return this.rollResults.asObservable();
  }

  public addNewRoll(roll: AttackRoll){
    roll.id = this.getNextId();
    this.addOrUpdateRoll(roll)
  }

  public getRollById(id:number): AttackRoll {
    return this.rollList.getValue().get(id) ?? {} as AttackRoll;
  }

  public updateAttackRoll(updatedRoll: AttackRoll){
    this.addOrUpdateRoll(updatedRoll);
  }

  public addOrUpdateRoll(roll: AttackRoll){
    this.rollList.next(this.rollList.getValue().set(roll.id,roll));
  }

  public getNextId(): number {
    return this.currentId+1;
  }

  public toggleRollAsActive(id: number){
    let roll = this.getRollById(id);
    roll.isActive = !roll.isActive;
    this.updateAttackRoll(roll);
  }

  public deleteRollFromList(id: number){
    let newList = this.rollList.getValue();
    newList.delete(id);
    this.rollList.next(newList);
  }

  public CalculateActiveRolls(){
    let activeRolls = [...this.rollList.getValue().values()].filter(r => r.isActive);
    let results: RollResults[] = [];

    activeRolls.forEach(roll => {
      let rollResult: RollResults = {originalRoll: roll, results: [] as Result[]} as RollResults;
      for (let i = 0; i < roll.repeat; i++) {
           rollResult.results.push(this.getRandomDiceResult(roll));
      }
      results.push(rollResult);
    });
    this.rollResults.next(results);
  }

  private getRandomDiceResult(roll: AttackRoll): Result{
    let diceResult = {diceTotal: 0, dieRolls: [] as number[]} as Result;
    for (let i = 0; i < roll.dieCount; i++) {
      let result =  Math.floor(Math.random() * roll.dieSize) + 1;
      diceResult.diceTotal += result;
      diceResult.dieRolls.push(result);
    }
  diceResult.modifierTotal = roll.modifier;
  diceResult.resultTotal = diceResult.diceTotal + diceResult.modifierTotal;
  return diceResult;
  }
}
