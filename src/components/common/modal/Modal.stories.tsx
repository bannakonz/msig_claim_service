import { Text } from "@chakra-ui/react";
import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Modal from "./Modal";

const meta = {
  title: "Components/common/modal/Modal",
  component: Modal,
  argTypes: {},
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof Modal>;

const BaseModalChildren = () => (
  <React.Fragment>
    <Text fontWeight="bold">Modal Element</Text>
    <Text>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's
    </Text>
  </React.Fragment>
);

export const _Modal: Story = {
  render: (args) => (
    <Modal {...args}>
      <BaseModalChildren />
    </Modal>
  ),
};

_Modal.args = {
  isOpen: true,
  onClose: () => {},
};
