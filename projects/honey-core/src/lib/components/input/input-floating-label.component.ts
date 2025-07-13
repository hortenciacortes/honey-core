import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'hc-input-floating-label',
  templateUrl: './input-floating-label.component.html',
  styleUrls: ['./input-floating-label.component.scss'],
  imports: [ReactiveFormsModule],
  standalone: true,
})
export class InputFloatingLabelComponent {
  @Input() id: string = 'hc-input';
  @Input() label: string = 'Label';
  @Input() type: string = 'text';
  @Input() required = false;
  @Input() control!: FormControl;
}

