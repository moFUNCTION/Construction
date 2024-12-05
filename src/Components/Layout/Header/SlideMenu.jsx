import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Heading,
  Stack,
  Flex,
  IconButton,
} from "@chakra-ui/react";
import { Links } from "./Links";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Logo } from "../../Common/Logo/Logo";
import { useTranslator } from "../../../Hooks/useTranslator/useTranslator";
import { CgClose } from "react-icons/cg";
export const SlideMenu = ({ isOpen, onClose }) => {
  const { currentLanguage } = useTranslator();
  return (
    <Drawer
      size="md"
      isOpen={isOpen}
      placement={currentLanguage === "ar" ? "right" : "left"}
      onClose={onClose}
    >
      <DrawerOverlay />
      <DrawerContent>
        <IconButton
          onClick={onClose}
          size="sm"
          variant="ghost"
          pos="absolute"
          top="2"
          left={currentLanguage === "ar" && "2"}
          right={currentLanguage === "en" && "2"}
        >
          <CgClose />
        </IconButton>
        <DrawerHeader>
          {currentLanguage === "ar" ? "القائمة" : "menu"}
        </DrawerHeader>

        <DrawerBody overflow="auto" as={Stack} justifyContent="center" gap="3">
          {Links.map((link, index) => {
            return (
              <Flex
                key={index}
                alignItems="center"
                justifyContent="space-between"
                borderBottom="2px"
                color="orange.600"
                as={Link}
                to={link.href}
                onClick={onClose}
                _hover={{
                  h3: {
                    mr: "15px",
                  },
                }}
              >
                <Heading
                  textTransform="capitalize"
                  transition="0.3s"
                  as="h3"
                  size="lg"
                  p="2"
                >
                  {currentLanguage === "ar" ? link.title.ar : link.title.en}
                </Heading>
                {currentLanguage === "ar" ? (
                  <BsArrowLeft style={{ fontSize: "20px" }} />
                ) : (
                  <BsArrowRight style={{ fontSize: "20px" }} />
                )}
              </Flex>
            );
          })}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
