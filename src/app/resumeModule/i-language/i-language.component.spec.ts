import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ILanguageComponent } from './i-language.component';

describe('ILanguageComponent', () => {
  let component: ILanguageComponent;
  let fixture: ComponentFixture<ILanguageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ILanguageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ILanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
