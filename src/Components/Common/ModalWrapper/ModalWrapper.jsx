import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Stack,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const ModalWrapper = ({
  children,
  submitHandler,
  onClose,
  isOpen,
  ModalTitle,
  isCloseAble = true,
  submitButtonTitle = "تأكيد",
  isSubmitLoading,
<<<<<<< HEAD
  withSubmitBtn = true,
=======
>>>>>>> cf2f51c9187da7d28fa3675b03b62b19accd3480
  ...rest
}) => {
  const onSumbit = () => {
    submitHandler();
  };
  return (
    <>
      <Modal
        isCentered
        onClose={isCloseAble && onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
        {...rest}
      >
        <ModalOverlay />
        <ModalContent m="3">
          <ModalHeader>{ModalTitle}</ModalHeader>
          {isCloseAble && <ModalCloseButton />}

          <ModalBody as={Stack}>{children}</ModalBody>
          <ModalFooter>
<<<<<<< HEAD
            {withSubmitBtn && (
              <Button
                isLoading={isSubmitLoading}
                flexGrow="1"
                onClick={onSumbit}
                colorScheme="blue"
              >
                {submitButtonTitle}
              </Button>
            )}

=======
            <Button
              isLoading={isSubmitLoading}
              flexGrow="1"
              onClick={onSumbit}
              colorScheme="blue"
            >
              {submitButtonTitle}
            </Button>
>>>>>>> cf2f51c9187da7d28fa3675b03b62b19accd3480
            {isCloseAble && (
              <Button
                isLoading={isSubmitLoading}
                flexGrow="1"
                colorScheme="red"
                mr={3}
                onClick={onClose}
              >
                غلق
              </Button>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
