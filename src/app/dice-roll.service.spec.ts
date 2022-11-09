import { TestBed } from '@angular/core/testing';

import { DiceRollService } from './dice-roll.service';

describe('DiceRollServiceService', () => {
  let service: DiceRollService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiceRollService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
