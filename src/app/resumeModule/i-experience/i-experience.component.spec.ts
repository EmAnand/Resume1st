import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IExperienceComponent } from './i-experience.component';

describe('IExperienceComponent', () => {
  let component: IExperienceComponent;
  let fixture: ComponentFixture<IExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IExperienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
