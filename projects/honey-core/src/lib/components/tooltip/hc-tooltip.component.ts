import { Component, Input } from '@angular/core';

@Component({
  selector: 'hc-tooltip',
  templateUrl: './hc-tooltip.component.html',
  styleUrl: './hc-tooltip.component.scss',
  imports: [],
  standalone: true,
})
export class HcTooltipComponent {
  @Input()
  text = '';

  @Input()
  position: 'top' | 'right' | 'bottom' | 'left' = 'top';

  @Input()
  maxWidth = '16rem';

  @Input()
  tabIndex = 0;

  public get classes(): string[] {
    return ['hc-tooltip', `hc-tooltip--${this.position}`];
  }
}
