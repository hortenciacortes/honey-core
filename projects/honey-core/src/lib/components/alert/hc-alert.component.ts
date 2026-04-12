import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'hc-alert',
  templateUrl: './hc-alert.component.html',
  styleUrl: './hc-alert.component.scss',
  imports: [],
  standalone: true,
})
export class HcAlertComponent {
  @Input()
  title = '';

  @Input()
  message = '';

  @Input()
  tone: 'info' | 'success' | 'warning' | 'error' = 'info';

  @Input()
  appearance: 'soft' | 'solid' = 'soft';

  @Input()
  layout: 'inline' | 'snackbar' = 'inline';

  @Input()
  snackbarPosition: 'bottom-right' | 'bottom-center' | 'top-right' = 'bottom-right';

  @Input()
  dismissible = false;

  @Input()
  actionLabel = '';

  @Output()
  dismissed = new EventEmitter<void>();

  @Output()
  action = new EventEmitter<void>();

  public get classes(): string[] {
    return [
      'hc-alert',
      `hc-alert--${this.tone}`,
      `hc-alert--${this.appearance}`,
      `hc-alert--${this.layout}`,
      this.layout === 'snackbar' ? `hc-alert--${this.snackbarPosition}` : '',
    ].filter(Boolean);
  }
}
