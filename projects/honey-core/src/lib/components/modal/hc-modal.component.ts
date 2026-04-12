import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'hc-modal',
  templateUrl: './hc-modal.component.html',
  styleUrl: './hc-modal.component.scss',
  imports: [],
  standalone: true,
})
export class HcModalComponent {
  @Input()
  open = false;

  @Input()
  title = '';

  @Input()
  description = '';

  @Input()
  size: 'sm' | 'md' | 'lg' = 'md';

  @Input()
  dismissible = true;

  @Input()
  closeOnBackdrop = true;

  @Output()
  closed = new EventEmitter<'backdrop' | 'close-button'>();

  public get classes(): string[] {
    return ['hc-modal', `hc-modal--${this.size}`];
  }

  public onBackdropClick(): void {
    if (this.dismissible && this.closeOnBackdrop) {
      this.closed.emit('backdrop');
    }
  }

  public onCloseClick(): void {
    if (this.dismissible) {
      this.closed.emit('close-button');
    }
  }
}
