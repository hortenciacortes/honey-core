import { Component, Input } from '@angular/core';

@Component({
  selector: 'hc-spinner',
  templateUrl: './hc-spinner.component.html',
  styleUrl: './hc-spinner.component.scss',
  imports: [],
  standalone: true,
})
export class HcSpinnerComponent {
  @Input()
  size: 'sm' | 'md' | 'lg' = 'md';

  @Input()
  tone: 'primary' | 'secondary' | 'neutral' = 'primary';

  @Input()
  label = 'Carregando';

  @Input()
  inline = false;

  public get wrapperClasses(): string[] {
    return [
      'hc-spinner',
      `hc-spinner--${this.size}`,
      `hc-spinner--${this.tone}`,
      this.inline ? 'hc-spinner--inline' : '',
    ].filter(Boolean);
  }
}
