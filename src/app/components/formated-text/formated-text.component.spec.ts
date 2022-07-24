import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatedTextComponent } from './formated-text.component';

describe('FormatedTextComponent', () => {
  let component: FormatedTextComponent;
  let fixture: ComponentFixture<FormatedTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormatedTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormatedTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
