import { Meta, StoryObj } from '@storybook/angular';
import { InputFloatingLabelComponent } from '../lib/components/input/input-floating-label.component';

const meta: Meta<InputFloatingLabelComponent> = {
  title: 'Form/Input Floating Label',
  component: InputFloatingLabelComponent,
  tags: ['autodocs'],
  render: (args: InputFloatingLabelComponent) => ({
    props: args,
  }),
};

export default meta;

type Story = StoryObj<InputFloatingLabelComponent>;

export const Default: Story = {
  args: {
    label: 'Nome completo',
    id: 'nome',
    required: true,
  },
};
