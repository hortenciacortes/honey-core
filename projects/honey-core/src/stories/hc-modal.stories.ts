import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { HcModalComponent } from '../lib/components/modal/hc-modal.component';
import { HcButtonComponent } from '../lib/components/button/button.component';

type ModalStoryArgs = HcModalComponent & { triggerLabel: string };
type ModalRenderArgs = Omit<ModalStoryArgs, 'closed'> & {
  closed?: (reason: 'backdrop' | 'close-button') => void;
};

const meta: Meta<ModalStoryArgs> = {
  title: 'Overlay/Modal',
  component: HcModalComponent,
  decorators: [
    moduleMetadata({
      imports: [HcButtonComponent],
    }),
  ],
  tags: ['autodocs'],
  args: {
    title: 'Confirmar publicação',
    description: 'Revise as informações antes de enviar a nova versão da biblioteca.',
    triggerLabel: 'Abrir modal',
    closed: fn(),
  },
  render: (args) => {
    const { triggerLabel, closed, ...modalArgs } = args as ModalRenderArgs;

    const props = {
      ...modalArgs,
      isOpen: true,
      triggerLabel,
      handleOpen: () => {
        props.isOpen = true;
      },
      handleClose: (reason: 'backdrop' | 'close-button') => {
        props.isOpen = false;
        if (typeof closed === 'function') {
          closed(reason);
        }
      },
    };

    return {
      props,
      template: `
        <div style="min-height: 24rem; padding: 1rem; background: #f7f7f7;">
          <hc-button (onClick)="handleOpen()">{{ triggerLabel }}</hc-button>

          <hc-modal
            [open]="isOpen"
            [title]="title"
            [description]="description"
            [size]="size"
            [dismissible]="dismissible"
            [closeOnBackdrop]="closeOnBackdrop"
            (closed)="handleClose($event)"
          >
            <p style="margin: 0;">Esse modal foi pensado como primitive de overlay para confirmações, formulários curtos e flows de revisão.</p>
            <p style="margin: 0;">O conteúdo interno continua livre para você projetar com os componentes do DS.</p>

            <div modal-actions style="display: flex; gap: .75rem; width: 100%; justify-content: flex-end;">
              <hc-button style="s-plain" color="c-secondary" (onClick)="handleClose('close-button')">Cancelar</hc-button>
              <hc-button (onClick)="handleClose('close-button')">Confirmar</hc-button>
            </div>
          </hc-modal>
        </div>
      `,
    };
  },
};

export default meta;
type Story = StoryObj<ModalStoryArgs>;

export const Default: Story = {
  args: {
    size: 'md',
    dismissible: true,
    closeOnBackdrop: true,
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    title: 'Editar configurações do workspace',
    description: 'Ideal para fluxos um pouco mais densos, mas ainda focados.',
    dismissible: true,
    closeOnBackdrop: true,
  },
};

export const NonDismissible: Story = {
  args: {
    title: 'Processando envio',
    description: 'Bloqueie o fechamento quando o fluxo não puder ser interrompido.',
    dismissible: false,
    closeOnBackdrop: false,
  },
};
