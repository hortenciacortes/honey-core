import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'hc-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  imports: [],
  standalone: true,
})
export class ButtonComponent {
  /** Is this the principal call to action on the page? */
  @Input()
  variant: 'primary' | 'secondary'  = 'primary';

  /** What background color to use */
  @Input()
  backgroundColor?: string;

  /** How large should the button be? */
  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = 'Button';

  /**
   * Disabled state of the button
   */
  @Input()
  disabled = false;

  /** Optional click handler */
  @Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    return ['hc-button', `hc-${this.size}`, `hc-${this.variant}`];
  }
}
