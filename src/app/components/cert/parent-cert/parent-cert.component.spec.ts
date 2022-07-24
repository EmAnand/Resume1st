import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentCertComponent } from './parent-cert.component';

describe('ParentCertComponent', () => {
  let component: ParentCertComponent;
  let fixture: ComponentFixture<ParentCertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentCertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentCertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
