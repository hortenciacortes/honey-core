import { Component, Input } from '@angular/core';

@Component({
  selector: 'hc-badge',
  templateUrl: './hc-badge.component.html',
  styleUrl: './hc-badge.component.scss',
  imports: [],
  standalone: true,
})
export class HcBadgeComponent {
  @Input()
  tone: 'primary' | 'secondary' | 'neutral' | 'success' | 'warning' = 'primary';

  @Input()
  appearance: 'soft' | 'solid' = 'soft';

  @Input()
  size: 'sm' | 'md' = 'md';

  public get classes(): string[] {
    return [
      'hc-badge',
      `hc-badge--${this.tone}`,
      `hc-badge--${this.appearance}`,
      `hc-badge--${this.size}`,
    ];
  }
}
