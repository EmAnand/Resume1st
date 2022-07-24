import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QnasComponent } from './qnas.component';

describe('QnasComponent', () => {
  let component: QnasComponent;
  let fixture: ComponentFixture<QnasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QnasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QnasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
