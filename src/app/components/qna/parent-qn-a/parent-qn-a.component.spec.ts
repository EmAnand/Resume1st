import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentQnAComponent } from './parent-qn-a.component';

describe('ParentQnAComponent', () => {
  let component: ParentQnAComponent;
  let fixture: ComponentFixture<ParentQnAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentQnAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentQnAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
