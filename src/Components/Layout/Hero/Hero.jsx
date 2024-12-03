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
import HeroImage from "../../../Assets/Hero/Image.jpg";
import HeroImage2 from "../../../Assets/Hero/Image2.jpg";
import HeroImage3 from "../../../Assets/Hero/Image3.jpg";
import { AnimatedText } from "../../../Components/Common/AnimatedText/AnimatedText";
export const Hero = () => {
  const [isPhoneQuery] = useMediaQuery("(max-width: 1334px)");
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      w="100%"
      pos="relative"
      overflow="hidden"
      minH="calc(100vh - 100px)"
      flexWrap="wrap-reverse"
      gap={{
        base: "0",
        lg: "4",
      }}
      p="3"
    >
      <Stack
        alignItems={isPhoneQuery ? "center" : "start"}
        gap="8"
        w="100%"
        maxW="700px"
      >
        <AnimatedText isCentered={isPhoneQuery} spacing="10px">
          <Heading
            textShadow="md"
            color="orange.600"
            size={{
              base: "xl",
              md: "2xl",
            }}
          >
            Kayan & Makan Contracting Company
          </Heading>
        </AnimatedText>
        <AnimatedText isCentered={isPhoneQuery} spacing="7px">
          <Heading color="orange.700" size="md">
            Innovative and Reliable Industrial Solutions
          </Heading>
        </AnimatedText>

        <Button
          variant="outline"
          bgColor="orange.600"
          color="white"
          colorScheme="orange"
          size="lg"
          _hover={{
            color: "orange.600",
            bgColor: "white",
          }}
          w="100%"
          maxW="500px"
          borderRadius="lg"
        >
          Conatct Us
        </Button>
      </Stack>
      <Stack gap="4" w="100%" maxW="600px" h="500px">
        <LazyLoadedImage
          ImageProps={{
            objectFit: "cover",
          }}
          w="100%"
          borderRadius="2xl"
          src={HeroImage3}
          _hover={{
            transform: "scale(1.05)",
          }}
          transition="0.3s"
        />
        <Flex gap="4">
          <LazyLoadedImage
            _hover={{
              transform: "scale(1.05)",
            }}
            transition="0.3s"
            borderRadius="2xl"
            src={HeroImage}
          />
          <LazyLoadedImage
            _hover={{
              transform: "scale(1.05)",
            }}
            transition="0.3s"
            borderRadius="2xl"
            src={HeroImage2}
          />
        </Flex>
      </Stack>
    </Flex>
  );
};
