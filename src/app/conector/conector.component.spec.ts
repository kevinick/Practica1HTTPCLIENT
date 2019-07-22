import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConectorComponent } from './conector.component';

describe('ConectorComponent', () => {
  let component: ConectorComponent;
  let fixture: ComponentFixture<ConectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
