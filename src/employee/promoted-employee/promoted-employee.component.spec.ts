import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotedEmployeeComponent } from './promoted-employee.component';

describe('PromotedEmployeeComponent', () => {
  let component: PromotedEmployeeComponent;
  let fixture: ComponentFixture<PromotedEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotedEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotedEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
