import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputFloatingLabelComponent } from './input-floating-label.component';

describe('InputFloatingLabelComponent', () => {
  let component: InputFloatingLabelComponent;
  let fixture: ComponentFixture<InputFloatingLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputFloatingLabelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputFloatingLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
