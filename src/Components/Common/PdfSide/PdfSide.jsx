import {
  Button,
  Drawer,
  useDisclosure,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Input,
  DrawerFooter,
  IconButton,
  AspectRatio,
} from "@chakra-ui/react";
import React from "react";
import { FaFileDownload } from "react-icons/fa";
import { MdClose } from "react-icons/md";

export const PdfSide = ({ pdf, isOpen, onClose }) => {
  const btnRef = React.useRef();
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="md"
      >
        <DrawerOverlay />
        <DrawerContent>
          <IconButton
            onClick={onClose}
            colorScheme="red"
            pos="absolute"
            top="10px"
            right="10px"
          >
            <MdClose />
          </IconButton>
          <DrawerHeader textAlign="left">Pdf Viwer</DrawerHeader>

          <DrawerBody>
            <AspectRatio ratio={16 / 15}>
              <iframe src={pdf} loading="lazy" />
            </AspectRatio>
            <Button w="100%" colorScheme="orange" mt="10px">
              <a
                target="_blank"
                rel="noreferrer"
                href={pdf}
                download
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                تحميل
                <FaFileDownload />
              </a>
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
