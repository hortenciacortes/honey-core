import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'hc-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  imports: [],
  standalone: true,
})
export class HcButtonComponent {
  /** Style of the button */
  @Input()
  style: 's-solid' | 's-hollow' | 's-plain'  = 's-solid';

  /** What color to use for the button */
  @Input()
  color?: string = 'c-primary';

  /** Size of the button */
  @Input()
  size?: 'h-small' | 'w-stretch' | null = null;

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
    return ['hc-button', `${this.size}`, `${this.style}`, `${this.color}`];
  }
}
