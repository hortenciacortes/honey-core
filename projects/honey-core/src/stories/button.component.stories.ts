import { argsToTemplate, type Meta, type StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { ButtonComponent } from '../lib/components/button/button.component';

type ButtonInputsAndCustomArgs = ButtonComponent & { text: string };

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ButtonInputsAndCustomArgs> = {
  title: 'Example/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  args: {
    text: 'Button',
  },
  render: ({ text, ...buttonArgs }) => ({
    props: buttonArgs,
    template: `
        <hc-button ${argsToTemplate(buttonArgs)}>
        ${text}
        </hc-button>
      `,
  }),
};

export default meta;
type Story = StoryObj<ButtonComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};

export const PrimaryDisabled: Story = {
  args: {
    variant: 'primary',
    disabled: true,
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};

export const Large: Story = {
  args: {
    variant: 'primary',
    size: 'large',
  },
};

export const Medium: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
  },
};

export const Small: Story = {
  args: {
    variant: 'primary',
    size: 'small',
  },
};
