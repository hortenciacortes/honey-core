import { argsToTemplate, type Meta, type StoryObj } from '@storybook/angular';
import { HcDividerComponent } from '../lib/components/divider/hc-divider.component';

const meta: Meta<HcDividerComponent> = {
  title: 'Utilities/Divider',
  component: HcDividerComponent,
  tags: ['autodocs'],
  render: (dividerArgs: { [key: string]: any }) => ({
    props: dividerArgs,
    template: `
      <div style="padding: 1rem; background: white;">
        <hc-divider ${argsToTemplate(dividerArgs)}></hc-divider>
      </div>
    `,
  }),
};

export default meta;
type Story = StoryObj<HcDividerComponent>;

export const Default: Story = {
  args: {},
};

export const Labeled: Story = {
  args: {
    label: 'Ou continue com',
  },
};

export const Inset: Story = {
  args: {
    inset: true,
    label: 'Detalhes',
  },
};

export const Vertical: Story = {
  render: (dividerArgs: { [key: string]: any }) => ({
    props: dividerArgs,
    template: `
      <div style="display: flex; align-items: center; gap: 1rem; height: 4rem; padding: 1rem; background: white;">
        <span>Item A</span>
        <hc-divider ${argsToTemplate(dividerArgs)}></hc-divider>
        <span>Item B</span>
      </div>
    `,
  }),
  args: {
    orientation: 'vertical',
  },
};
