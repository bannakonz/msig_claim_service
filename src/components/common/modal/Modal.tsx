import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  ModalProps,
  SpaceProps,
} from "@chakra-ui/react";
import { ReactNode } from "react";

export interface IModal extends ModalProps {
  children: ReactNode;
  bgCloseIcon?: string;
  colorCloseIcon?: string;
  borderRadius?: string;
  minHeight?: number | string;
  header?: ReactNode;
  marginTop?: SpaceProps;
}

const BaseModal = ({
  children,
  bgCloseIcon,
  colorCloseIcon,
  borderRadius = "16px",
  minHeight,
  header,
  marginTop,
  ...props
}: IModal) => {
  return (
    <Modal isCentered {...props}>
      <ModalOverlay backgroundColor="modal_overlay" opacity="0.6!important" />
      <ModalContent
        maxW={{ sm: "calc(100% - 48px)", md: "563px" }}
        margin={15}
        borderRadius={borderRadius}
        maxHeight="90%"
        minHeight={minHeight}
      >
        <ModalCloseButton
          position="absolute"
          ml="auto"
          mr="32px"
          justifyContent="flex-end"
          flexDirection="column-reverse"
          top={6}
          right={0}
          zIndex={900}
          padding={0}
          borderRadius="1rem"
          color={colorCloseIcon}
          _focusVisible={{ boxShadow: "none" }}
          _hover={{ backgroundColor: "none" }}
        />
        {header && header}

        <ModalBody padding={0} borderRadius="1rem" overflow="auto">
          {children}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default BaseModal;
