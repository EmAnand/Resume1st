import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionalQuestionComponent } from './optional-question.component';

describe('OptionalQuestionComponent', () => {
  let component: OptionalQuestionComponent;
  let fixture: ComponentFixture<OptionalQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionalQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionalQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
