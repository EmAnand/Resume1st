import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyvalueQuestionComponent } from './keyvalue-question.component';

describe('KeyvalueQuestionComponent', () => {
  let component: KeyvalueQuestionComponent;
  let fixture: ComponentFixture<KeyvalueQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyvalueQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyvalueQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
