import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { AttackRoll } from './models/attack-roll.model';

@Injectable({
  providedIn: 'root'
})
export class DiceRollService {
  private currentId: number = 0;
  private rollList = new BehaviorSubject<AttackRoll[]>([]);
  private rollResult = new Subject<string>();

  constructor() { }

  public getRollList(): Observable<AttackRoll[]> {
    return this.rollList.asObservable();
  }

  public addNewRoll(dieCount:number, dieSize:number, modifier:number){
    this.addRoll({id: this.getNextId(), dieCount,dieSize, modifier, isActive: false} as AttackRoll)
    //let ar: AttackRoll = {id: this.getNextId(), dieCount,dieSize,modifier, isActive: false}
  }

  public addRoll(roll: AttackRoll){
    console.log(roll);
    this.rollList.next([...this.rollList.getValue(),roll]);
  }

  public getNextId(): number {
    this.currentId = this.currentId+1;
    return this.currentId;
  }
}
