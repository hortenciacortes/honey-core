import { Component, Input, HostListener } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'hc-input-dropdown',
  templateUrl: './hc-input-dropdown.component.html',
  styleUrls: ['./hc-input-dropdown.component.scss'],
  imports: [ReactiveFormsModule],
  standalone: true
})
export class HcInputDropdownComponent {
  @Input() control = new FormControl('');
  @Input() label = 'Escolha uma opção';
  @Input() id = 'input-dropdown';
  @Input() options: string[] = [];

  filteredOptions: string[] = [];
  showOptions = false;

  ngOnInit() {
    this.filteredOptions = this.options;
  }

  filterOptions() {
    const value = this.control.value?.toLowerCase() || '';
    this.filteredOptions = this.options.filter(option =>
      option.toLowerCase().includes(value)
    );
    this.showOptions = true;
  }

  selectOption(option: string) {
    this.control.setValue(option);
    this.showOptions = false;
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.hc-input-dropdown')) {
      this.showOptions = false;
    }
  }
}
