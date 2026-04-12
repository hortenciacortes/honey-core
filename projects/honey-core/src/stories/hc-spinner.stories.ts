import { argsToTemplate, type Meta, type StoryObj } from '@storybook/angular';
import { HcSpinnerComponent } from '../lib/components/spinner/hc-spinner.component';

const meta: Meta<HcSpinnerComponent> = {
  title: 'Utilities/Spinner',
  component: HcSpinnerComponent,
  tags: ['autodocs'],
  render: (spinnerArgs: { [key: string]: any }) => ({
    props: spinnerArgs,
    template: `
      <div style="display: flex; align-items: center; gap: 1rem; padding: 1rem; background: white;">
        <hc-spinner ${argsToTemplate(spinnerArgs)}></hc-spinner>
      </div>
    `,
  }),
};

export default meta;
type Story = StoryObj<HcSpinnerComponent>;

export const Default: Story = {
  args: {
    tone: 'primary',
    label: 'Carregando dados',
  },
};

export const SecondarySmall: Story = {
  args: {
    tone: 'secondary',
    size: 'sm',
    label: 'Buscando',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    label: 'Processando pagamento',
  },
};

export const IndicatorOnly: Story = {
  args: {
    inline: true,
    label: '',
    tone: 'neutral',
  },
};
