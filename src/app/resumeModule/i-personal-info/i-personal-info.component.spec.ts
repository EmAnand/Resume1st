import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IPersonalInfoComponent } from './i-personal-info.component';

describe('IPersonalInfoComponent', () => {
  let component: IPersonalInfoComponent;
  let fixture: ComponentFixture<IPersonalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IPersonalInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IPersonalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
