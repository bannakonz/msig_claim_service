import { ModalOTP } from '@/components/modal';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/modal/ModalOTP',
  component: ModalOTP,
  argTypes: {},
} satisfies Meta<typeof ModalOTP>;

export default meta;
type Story = StoryObj<typeof ModalOTP>;

export const _ModalOTP: Story = {
  render: (args) => (
    <ModalOTP
      isOpen={true}
      onClose={function (): void {
        throw new Error('Function not implemented.');
      }}
      phone={'0800000000'}
      reqOrderNo={''}
      onVerifySuccess={function (): void {
        throw new Error('Function not implemented.');
      }}
    />
  ),
};
