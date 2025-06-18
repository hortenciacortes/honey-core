import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HcButtonComponent } from './button.component';

describe('HcButtonComponent', () => {
  let component: HcButtonComponent;
  let fixture: ComponentFixture<HcButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HcButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HcButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
