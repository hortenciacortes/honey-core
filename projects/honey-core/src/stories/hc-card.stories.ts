import { argsToTemplate, type Meta, type StoryObj } from '@storybook/angular';
import { HcCardComponent } from '../lib/components/card/hc-card.component';

type CardInputsAndCustomArgs = HcCardComponent & { body: string; footerText: string };

const meta: Meta<CardInputsAndCustomArgs> = {
  title: 'Surfaces/Card',
  component: HcCardComponent,
  tags: ['autodocs'],
  args: {
    title: 'Resumo da conta',
    subtitle: 'Atualizado há 2 minutos',
    body: 'Use o card para agrupar informações e pequenas ações sem depender de um layout específico.',
    footerText: 'Ver detalhes',
  },
  render: ({ body, footerText, ...cardArgs }: { body: string; footerText: string; [key: string]: any }) => ({
    props: cardArgs,
    template: `
      <div style="max-width: 24rem; padding: 1rem; background: #f7f7f7;">
        <hc-card ${argsToTemplate(cardArgs)}>
          <span>${body}</span>
          <span card-footer style="font-weight: 700; color: var(--hc-primary-500);">${footerText}</span>
        </hc-card>
      </div>
    `,
  }),
};

export default meta;
type Story = StoryObj<CardInputsAndCustomArgs>;

export const Default: Story = {
  args: {},
};

export const MutedOutlined: Story = {
  args: {
    surface: 'muted',
    outlined: true,
  },
};

export const InteractiveAccent: Story = {
  args: {
    surface: 'accent',
    interactive: true,
    padding: 'lg',
    title: 'Plano Pro',
    subtitle: 'Para equipes pequenas',
    body: 'Combina bem com áreas promocionais, resumo de planos e listas de benefícios.',
    footerText: 'Assinar agora',
  },
};
