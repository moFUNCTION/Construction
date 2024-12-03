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

const services = [
  {
    id: 1,
    title: "Project Management",
    description: "Ensuring seamless coordination from start to finish.",
  },
  {
    id: 2,
    title: "Procurement",
    description: "Delivering top-quality materials and equipment.",
  },
  {
    id: 3,
    title: "Fabrication",
    description: "Creating custom solutions to fit your project needs.",
  },
  {
    id: 4,
    title: "Safety Materials",
    description: "Prioritizing the well-being of our workforce and clients.",
  },
];

// Main About Component
export const Vision = () => {
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
            Our Vision And Mission
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
        <ParallaxImage src={VisionImage} maxW="500px" width="100%" />
        <Stack gap="4" maxW="600px">
          <AnimatedText spacing="5px">
            <Heading color="orange.700" size="xl">
              Vision
            </Heading>
          </AnimatedText>
          <AnimatedText>
            <Text color="orange.800">
              To lead globally in providing innovative and sustainable
              industrial solutions through advanced technology and exceptional
              service.
            </Text>
          </AnimatedText>
          <Divider />
          <AnimatedText spacing="5px">
            <Heading color="orange.700" size="xl">
              Mission
            </Heading>
          </AnimatedText>
          <AnimatedText>
            <Text color="orange.800">
              Deliver high-quality, cost-effective, and integrated solutions,
              exceeding client expectations with a commitment to excellence and
              innovation.
            </Text>
          </AnimatedText>
        </Stack>
      </Flex>
    </Stack>
  );
};
