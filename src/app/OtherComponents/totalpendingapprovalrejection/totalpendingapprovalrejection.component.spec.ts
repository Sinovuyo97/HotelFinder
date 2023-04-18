import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalpendingapprovalrejectionComponent } from './totalpendingapprovalrejection.component';

describe('TotalpendingapprovalrejectionComponent', () => {
  let component: TotalpendingapprovalrejectionComponent;
  let fixture: ComponentFixture<TotalpendingapprovalrejectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalpendingapprovalrejectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalpendingapprovalrejectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
