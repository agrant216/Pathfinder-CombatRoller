import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttackRollListComponent } from './attack-roll-list.component';

describe('AttackRollListComponent', () => {
  let component: AttackRollListComponent;
  let fixture: ComponentFixture<AttackRollListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttackRollListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttackRollListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
