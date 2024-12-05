import React from "react";
import {
  Stack,
  Box,
  Heading,
  Text,
  VStack,
  filter,
  Flex,
  Button,
  useMediaQuery,
} from "@chakra-ui/react";
import { LazyLoadedImage } from "../../../Components/Common/LazyLoadedImage/LazyLoadedImage";
import HeroImage from "../../../Assets/Hero/image4.jpg";
import { AnimatedText } from "../../../Components/Common/AnimatedText/AnimatedText";
import { useTranslator } from "../../../Hooks/useTranslator/useTranslator";
import { Link } from "react-router-dom";
export const Hero = () => {
  const [isPhoneQuery] = useMediaQuery("(max-width: 1334px)");
  const { content } = useTranslator();
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      w="100%"
      pos="relative"
      overflow="hidden"
      minH="calc(100vh - 95px)"
      flexWrap="wrap-reverse"
      gap="4"
      p="3"
      bgColor="black"
      zIndex="1"
    >
      <LazyLoadedImage
        transition="0.3s"
        src={HeroImage}
        w="100%"
        pos="absolute"
        h="100%"
        inset="0"
        ImageProps={{
          objectFit: "cover",
          filter: "saturate(0.6)",
          opacity: 0.3,
        }}
        zIndex="-1"
      />
      <Stack
        justifyContent="center"
        alignItems="center"
        gap="8"
        w="100%"
        maxW="700px"
      >
        <AnimatedText isCentered spacing="10px">
          <Heading
            textShadow="md"
            color="white"
            size={{
              base: "xl",
              md: "2xl",
            }}
          >
            {content("hero.companyName")}
          </Heading>
        </AnimatedText>
        <AnimatedText isCentered spacing="7px">
          <Heading color="gray.50" size="md">
            {content("hero.slogan")}
          </Heading>
        </AnimatedText>

        <Button
          variant="outline"
          size="lg"
          w="100%"
          maxW="500px"
          borderRadius="lg"
          bgColor="white"
          fontWeight="bold"
          as={Link}
          to="/contact"
        >
          {content("hero.buttonText")}
        </Button>
      </Stack>
    </Flex>
  );
};
