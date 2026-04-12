import { argsToTemplate, type Meta, type StoryObj } from '@storybook/angular';
import { HcBadgeComponent } from '../lib/components/badge/hc-badge.component';

type BadgeInputsAndCustomArgs = HcBadgeComponent & { text: string };

const meta: Meta<BadgeInputsAndCustomArgs> = {
  title: 'Utilities/Badge',
  component: HcBadgeComponent,
  tags: ['autodocs'],
  args: {
    text: 'Novo',
  },
  render: ({ text, ...badgeArgs }: { text: string; [key: string]: any }) => ({
    props: badgeArgs,
    template: `
      <hc-badge ${argsToTemplate(badgeArgs)}>
        ${text}
      </hc-badge>
    `,
  }),
};

export default meta;
type Story = StoryObj<BadgeInputsAndCustomArgs>;

export const Primary: Story = {
  args: {
    tone: 'primary',
    appearance: 'soft',
  },
};

export const Solid: Story = {
  args: {
    tone: 'primary',
    appearance: 'solid',
    text: 'Beta',
  },
};

export const Secondary: Story = {
  args: {
    tone: 'secondary',
    text: 'Em análise',
  },
};

export const Success: Story = {
  args: {
    tone: 'success',
    text: 'Aprovado',
  },
};

export const WarningSmall: Story = {
  args: {
    tone: 'warning',
    size: 'sm',
    text: 'Atenção',
  },
};
