import React, { useEffect, useRef } from "react";
import { Flex, Heading, Stack, Box, Text, Divider } from "@chakra-ui/react";
import { motion } from "framer-motion";

// Component Imports
import { CenteredTextWithLines } from "../../../Components/Common/CenteredTextWithLines/CenteredTextWithLines";
import { AnimatedText } from "../../../Components/Common/AnimatedText/AnimatedText";
import { LazyLoadedImage } from "../../Common/LazyLoadedImage/LazyLoadedImage";
import LogoImage from "../../../Assets/Logo/Logo2.png";
// Asset Imports
import VisionImage from "../../../Assets/Vision/Vision.jpg";
import { ScrollParallaxWrapper } from "../../Common/ParrallexWrapper/ParrellexWrapper";
import { useTranslator } from "../../../Hooks/useTranslator/useTranslator";

// Framer Motion wrappers
const MotionBox = motion(Box);
const MotionImage = motion(LazyLoadedImage);

// Parallax Image Component
const ParallaxImage = ({ src, ...props }) => {
  return (
    <MotionBox
      position="relative"
      overflow="hidden"
      borderRadius="2xl"
      transition={{
        type: "tween",
        ease: "easeOut",
        duration: 0.5,
      }}
      {...props}
    >
      <Box
        className="rotate"
        pos="absolute"
        bottom="3"
        left="3"
        w="100px"
        h="100px"
      >
        <LazyLoadedImage
          w="100%"
          h="100%"
          bgColor="white"
          borderRadius="full"
          _hover={{
            img: {
              transform: "scale(1.1)",
            },
          }}
          ImageProps={{
            transition: "0.3s",
          }}
          p="3"
          src={LogoImage}
        />
      </Box>

      <MotionImage
        src={src}
        ImageProps={{
          objectFit: "cover",
        }}
        w="100%"
        h="100%"
      />
    </MotionBox>
  );
};

// Main About Component
export const Vision = () => {
  const { content } = useTranslator();
  return (
    <Stack gap="20" alignItems="center" px={[4, 6, 8]} py={[8, 10, 12]}>
      {/* Section Title */}
      <CenteredTextWithLines w="100%" maxW="700px">
        <AnimatedText isCentered spacing="10px">
          <Heading
            size={{
              base: "lg",
              lg: "2xl",
            }}
            color="orange.600"
            textAlign="center"
            flexShrink="0"
          >
            {content("vision.sectionTitle")}
          </Heading>
        </AnimatedText>
      </CenteredTextWithLines>

      <Flex
        flexWrap="wrap"
        gap="10"
        w="100%"
        justifyContent="center"
        alignItems="center"
      >
        <ParallaxImage src={VisionImage} maxW="500px" h="670px" width="100%" />
        <Stack gap="4" maxW="600px">
          <AnimatedText spacing="5px">
            <Heading color="orange.700" size="xl">
              {content("vision.visionTitle")}
            </Heading>
          </AnimatedText>
          <AnimatedText>
            <Text color="orange.800">
              {content("vision.visionDescription")}
            </Text>
          </AnimatedText>
          <Divider />
          <AnimatedText spacing="5px">
            <Heading color="orange.700" size="xl">
              {content("vision.missionTitle")}
            </Heading>
          </AnimatedText>
          <AnimatedText>
            <Text color="orange.800">
              {content("vision.missionDescription")}
            </Text>
          </AnimatedText>
        </Stack>
      </Flex>
    </Stack>
  );
};
