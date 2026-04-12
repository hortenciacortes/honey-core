import { argsToTemplate, type Meta, type StoryObj } from '@storybook/angular';
import { HcTooltipComponent } from '../lib/components/tooltip/hc-tooltip.component';

const meta: Meta<HcTooltipComponent> = {
  title: 'Overlay/Tooltip',
  component: HcTooltipComponent,
  tags: ['autodocs'],
  render: (tooltipArgs: { [key: string]: any }) => ({
    props: tooltipArgs,
    template: `
      <div style="display: flex; justify-content: center; align-items: center; min-height: 14rem; padding: 2rem; background: #f7f7f7;">
        <hc-tooltip ${argsToTemplate(tooltipArgs)}>
          <button type="button" style="appearance: none; border: 1px solid #dadada; background: white; border-radius: 999px; padding: .7rem 1rem; cursor: pointer;">Passe o mouse</button>
        </hc-tooltip>
      </div>
    `,
  }),
};

export default meta;
type Story = StoryObj<HcTooltipComponent>;

export const Top: Story = {
  args: {
    text: 'Dica curta para a ação principal.',
    position: 'top',
  },
};

export const Right: Story = {
  args: {
    text: 'Você pode usar esse padrão em ícones, labels e botões.',
    position: 'right',
  },
};

export const Bottom: Story = {
  args: {
    text: 'O conteúdo aceita mensagens um pouco maiores.',
    position: 'bottom',
    maxWidth: '14rem',
  },
};
