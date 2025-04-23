import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoneyCoreComponent } from './honey-core.component';

describe('HoneyCoreComponent', () => {
  let component: HoneyCoreComponent;
  let fixture: ComponentFixture<HoneyCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoneyCoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoneyCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
