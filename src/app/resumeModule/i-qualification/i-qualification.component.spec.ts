import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IQualificationComponent } from './i-qualification.component';

describe('IQualificationComponent', () => {
  let component: IQualificationComponent;
  let fixture: ComponentFixture<IQualificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IQualificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IQualificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
