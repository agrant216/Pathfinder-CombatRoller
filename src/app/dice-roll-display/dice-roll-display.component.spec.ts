import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiceRollDisplayComponent } from './dice-roll-display.component';

describe('DiceRollDisplayComponent', () => {
  let component: DiceRollDisplayComponent;
  let fixture: ComponentFixture<DiceRollDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiceRollDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiceRollDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
