import { async, TestBed } from '@angular/core/testing';
import { Mylib1Module } from './mylib1.module';

describe('Mylib1Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [Mylib1Module]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(Mylib1Module).toBeDefined();
  });
});
