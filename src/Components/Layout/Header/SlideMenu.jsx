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
} from "@chakra-ui/react";
import { Links } from "./Links";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Logo } from "../../Common/Logo/Logo";

export const SlideMenu = ({ isOpen, onClose }) => {
  return (
    <Drawer size="md" isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Menu</DrawerHeader>

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
                  {link.title}
                </Heading>
                <BsArrowRight style={{ fontSize: "20px" }} />
              </Flex>
            );
          })}
        </DrawerBody>

        <DrawerFooter flexWrap="wrap" justifyContent="start" gap="2">
          <Button colorScheme="orange">Contact Us</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
