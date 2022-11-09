import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttackRollComponent } from './attack-roll.component';

describe('AttackRollComponent', () => {
  let component: AttackRollComponent;
  let fixture: ComponentFixture<AttackRollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttackRollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttackRollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
