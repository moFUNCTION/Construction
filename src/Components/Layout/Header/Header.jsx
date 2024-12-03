import {
  Button,
  Flex,
  IconButton,
  Spacer,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Logo } from "../../Common/Logo/Logo";
import { Link } from "react-router-dom";
import { MdFacebook, MdWhatsapp, MdPhone } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { Links } from "./Links";
import { SlideMenu } from "./SlideMenu";
const LinkButton = ({ children, ...rest }) => {
  return (
    <Button
      as={Link}
      size="md"
      colorScheme="blackAlpha"
      variant="ghost"
      pos="relative"
      _after={{
        content: `""`,
        w: "0%",
        height: "1px",
        pos: "absolute",
        bgColor: "black",
        bottom: "0",
        transition: "0.3s",
        right: "0",
      }}
      _before={{
        content: `""`,
        w: "0%",
        height: "1px",
        pos: "absolute",
        bgColor: "black",
        top: "0",
        transition: "0.3s",
        left: "0",
      }}
      _hover={{
        _after: {
          w: "100%",
        },
        _before: {
          w: "100%",
        },
      }}
      textTransform="capitalize"
      {...rest}
    >
      {children}
    </Button>
  );
};

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState(null);

  React.useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    };
  }, [scrollDirection]);

  return scrollDirection;
}
export const Header = () => {
  const scrollDirection = useScrollDirection();
  const { isOpen, onToggle, onClose } = useDisclosure();
  return (
    <>
      <SlideMenu isOpen={isOpen} onClose={onClose} />
      <Flex
        gap="5"
        pos="sticky"
        top="0"
        justifyContent={{
          lg: "space-between",
          md: "space-between",
          sm: "center",
          base: "center",
        }}
        flexWrap="wrap"
        alignItems="center"
        p="4"
        bgColor="white"
        zIndex="10"
        transition="0.3s"
        sx={{
          translate: scrollDirection === "down" ? "0% -100%" : "0% 0%",
        }}
      >
        <Logo w="180px" />
        <Flex
          display={{
            base: "none",
            xl: "flex",
          }}
          gap="4"
        >
          {Links.slice(0, 4).map((link) => {
            return (
              <LinkButton key={link.title} to={link.href} size="lg">
                {link.title}
              </LinkButton>
            );
          })}
        </Flex>
        <Flex alignItems="center" gap="3">
          <IconButton
            colorScheme="orange"
            variant="outline"
            // as="a"
            // href="https://wa.me/00966 535 114 112"
            size={{
              base: "sm",
              lg: "lg",
              md: "md",
              sm: "sm",
            }}
          >
            <MdFacebook />
          </IconButton>
          <IconButton
            colorScheme="orange"
            variant="outline"
            as="a"
            href="https://wa.me/00966535114112"
            size={{
              base: "sm",
              lg: "lg",
              md: "md",
              sm: "sm",
            }}
          >
            <MdWhatsapp />
          </IconButton>
          <IconButton
            colorScheme="orange"
            variant="outline"
            as="a"
            href="tel:00966566876524"
            size={{
              base: "sm",
              lg: "lg",
              md: "md",
              sm: "sm",
            }}
          >
            <MdPhone />
          </IconButton>
          <IconButton
            colorScheme="orange"
            variant="outline"
            size={{
              base: "sm",
              lg: "lg",
              md: "md",
              sm: "sm",
            }}
            onClick={onToggle}
          >
            <RxHamburgerMenu />
          </IconButton>
          <Button
            size={{
              base: "sm",
              lg: "lg",
              md: "md",
              sm: "sm",
            }}
            colorScheme="orange"
          >
            Contact Us
          </Button>
        </Flex>
      </Flex>
    </>
  );
};
