import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatementQuestionComponent } from './statement-question.component';

describe('StatementQuestionComponent', () => {
  let component: StatementQuestionComponent;
  let fixture: ComponentFixture<StatementQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatementQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatementQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
