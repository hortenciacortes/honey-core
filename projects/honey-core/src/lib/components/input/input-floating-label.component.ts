import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule, UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'hc-input-floating-label',
  templateUrl: './input-floating-label.component.html',
  styleUrls: ['./input-floating-label.component.scss'],
  imports: [ReactiveFormsModule],
  standalone: true,
})
export class InputFloatingLabelComponent {
  @Input() id = 'hc-input';
  @Input() label = 'Label';
  @Input() type = 'text';
  @Input() required = false;
  @Input() control: FormControl = new UntypedFormControl('');
}

