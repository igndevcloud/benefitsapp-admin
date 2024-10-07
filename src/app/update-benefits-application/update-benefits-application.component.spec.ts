import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBenefitsApplicationComponent } from './update-benefits-application.component';

describe('UpdateBenefitsApplicationComponent', () => {
  let component: UpdateBenefitsApplicationComponent;
  let fixture: ComponentFixture<UpdateBenefitsApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateBenefitsApplicationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateBenefitsApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
