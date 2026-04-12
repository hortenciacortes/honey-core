import { Component, Input } from '@angular/core';

@Component({
  selector: 'hc-card',
  templateUrl: './hc-card.component.html',
  styleUrl: './hc-card.component.scss',
  imports: [],
  standalone: true,
})
export class HcCardComponent {
  @Input()
  title = '';

  @Input()
  subtitle = '';

  @Input()
  padding: 'sm' | 'md' | 'lg' = 'md';

  @Input()
  surface: 'default' | 'muted' | 'accent' = 'default';

  @Input()
  outlined = false;

  @Input()
  interactive = false;

  public get classes(): string[] {
    return [
      'hc-card',
      `hc-card--${this.padding}`,
      `hc-card--${this.surface}`,
      this.outlined ? 'hc-card--outlined' : '',
      this.interactive ? 'hc-card--interactive' : '',
    ].filter(Boolean);
  }
}
