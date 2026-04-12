import { argsToTemplate, type Meta, type StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { HcAlertComponent } from '../lib/components/alert/hc-alert.component';

const meta: Meta<HcAlertComponent> = {
  title: 'Feedback/Alert',
  component: HcAlertComponent,
  tags: ['autodocs'],
  args: {
    dismissed: fn(),
    action: fn(),
  },
  render: (alertArgs: { [key: string]: any }) => ({
    props: alertArgs,
    template: `
      <div style="min-height: 10rem; padding: 1rem; background: #f7f7f7; position: relative;">
        <hc-alert ${argsToTemplate(alertArgs)}></hc-alert>
      </div>
    `,
  }),
};

export default meta;
type Story = StoryObj<HcAlertComponent>;

export const Info: Story = {
  args: {
    title: 'Atualização disponível',
    message: 'Há uma nova versão pronta para publicação.',
    tone: 'info',
  },
};

export const SuccessWithAction: Story = {
  args: {
    title: 'Pagamento aprovado',
    message: 'O recibo já foi enviado por e-mail.',
    tone: 'success',
    actionLabel: 'Ver recibo',
    dismissible: true,
  },
};

export const WarningSnackbar: Story = {
  args: {
    title: 'Conexão instável',
    message: 'Algumas informações podem demorar para sincronizar.',
    tone: 'warning',
    layout: 'snackbar',
    snackbarPosition: 'bottom-right',
    dismissible: true,
  },
};

export const ErrorSolid: Story = {
  args: {
    title: 'Falha ao salvar',
    message: 'Tente novamente em alguns segundos.',
    tone: 'error',
    appearance: 'solid',
    dismissible: true,
  },
};
