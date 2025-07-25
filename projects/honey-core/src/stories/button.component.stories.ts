import { argsToTemplate, type Meta, type StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { HcButtonComponent } from '../lib/components/button/button.component';

type ButtonInputsAndCustomArgs = HcButtonComponent & { text: string };

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ButtonInputsAndCustomArgs> = {
  title: 'Example/Button',
  component: HcButtonComponent,
  tags: ['autodocs'],
  args: {
    text: 'Button',
  },
  render: ({ text, ...buttonArgs }: { text: string; [key: string]: any }) => ({
    props: buttonArgs,
    template: `
        <hc-button ${argsToTemplate(buttonArgs)}>
        ${text}
        </hc-button>
      `,
  }),
};

export default meta;
type Story = StoryObj<HcButtonComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    style: 's-solid',
  },
};

export const PrimaryDisabled: Story = {
  args: {
    ...Primary.args,
    disabled: true,
  },
};

export const SecondarySolid: Story = {
  args: {
    style: 's-solid',
    color: 'c-secondary',
  },
};

export const Hollow: Story = {
  args: {
    style: 's-hollow',
  },
};

export const Plain: Story = {
  args: {
    style: 's-plain',
  },
};

export const Small: Story = {
  args: {
    ...Primary.args,
    size: 'h-small',
  },
};

export const Stretch: Story = {
  args: {
    ...Primary.args,
    size: 'w-stretch',
  },
};
