import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HcInputDropdownComponent } from '../lib/components/input-dropdown/hc-input-dropdown.component';

type Story = StoryObj<HcInputDropdownComponent>;

const meta: Meta<HcInputDropdownComponent> = {
  title: 'Form/Input Dropdown',
  component: HcInputDropdownComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule, ReactiveFormsModule],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    label: { control: { type: 'text' } },
    options: {
      control: {
        type: 'object', // 'array' não é mais permitido diretamente
      },
    },
  },
};

export default meta;

export const Default: Story = {
  args: {
    label: 'Fruta favorita',
    options: ['Banana', 'Maçã', 'Uva', 'Abacaxi'],
    control: new FormControl(''),
  },
};
