import { Component, Input } from '@angular/core';

@Component({
  selector: 'hc-divider',
  templateUrl: './hc-divider.component.html',
  styleUrl: './hc-divider.component.scss',
  imports: [],
  standalone: true,
})
export class HcDividerComponent {
  @Input()
  label = '';

  @Input()
  inset = false;

  @Input()
  orientation: 'horizontal' | 'vertical' = 'horizontal';

  public get classes(): string[] {
    return [
      'hc-divider',
      `hc-divider--${this.orientation}`,
      this.inset ? 'hc-divider--inset' : '',
      this.label ? 'hc-divider--with-label' : '',
    ].filter(Boolean);
  }
}
