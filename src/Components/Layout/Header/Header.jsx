import {
  Button,
  Flex,
  IconButton,
  Spacer,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Logo } from "../../Common/Logo/Logo";
import { Link } from "react-router-dom";
import { MdFacebook, MdWhatsapp, MdPhone } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { Links } from "./Links";
import { SlideMenu } from "./SlideMenu";
import { useTranslator } from "../../../Hooks/useTranslator/useTranslator";
import { LazyLoadedImage } from "../../Common/LazyLoadedImage/LazyLoadedImage";
import ArabicIcon from "../../../Assets/Icons/arabic.png";
import EnglishIcon from "../../../Assets/Icons/english.png";

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
  const { changeLanguage, content, currentLanguage } = useTranslator();
  const [isPhoneQuery] = useMediaQuery("(max-width: 900px)");
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
          direction: "ltr !important",
          "*": {
            direction: "ltr !important",
          },
        }}
      >
        <Logo w="180px" />
        <Flex
          display={{
            base: "none",
            xl: "flex",
          }}
          gap="4"
          flexDir={currentLanguage === "ar" ? "row-reverse" : "row"}
        >
          {Links.slice(0, 3).map((link) => {
            return (
              <LinkButton key={link.title} to={link.href} size="lg">
                {currentLanguage === "ar" ? link.title.ar : link.title.en}
              </LinkButton>
            );
          })}
        </Flex>
        <Flex justify="center" wrap="wrap" alignItems="center" gap="3">
          <Button
            size={{
              base: "sm",
              lg: "lg",
              md: "md",
              sm: "sm",
            }}
            colorScheme="orange"
          >
            {content("header.contactUs")}
          </Button>
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

          {currentLanguage === "ar" ? (
            <Button
              size={{
                base: "sm",
                lg: "lg",
                md: "md",
                sm: "sm",
              }}
              onClick={() => changeLanguage("en")}
              gap="3"
              paddingBlock="3"
            >
              الانجليزية
              <LazyLoadedImage
                sx={
                  isPhoneQuery
                    ? {
                        w: "20px",
                        h: "20px",
                      }
                    : {
                        w: "25px",
                        h: "25px",
                      }
                }
                src={EnglishIcon}
              />
            </Button>
          ) : (
            <Button
              size={{
                base: "sm",
                lg: "lg",
                md: "md",
                sm: "sm",
              }}
              onClick={() => changeLanguage("ar")}
              gap="3"
              paddingBlock="3"
            >
              Arabic
              <LazyLoadedImage
                sx={
                  isPhoneQuery
                    ? {
                        w: "20px",
                        h: "20px",
                      }
                    : {
                        w: "25px",
                        h: "25px",
                      }
                }
                src={ArabicIcon}
              />
            </Button>
          )}
        </Flex>
      </Flex>
    </>
  );
};
