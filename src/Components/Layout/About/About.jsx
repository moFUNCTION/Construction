import React, { useEffect, useRef } from "react";
import { Flex, Heading, Stack, Box, Text, Divider } from "@chakra-ui/react";
import { motion } from "framer-motion";

// Component Imports
import { CenteredTextWithLines } from "../../../Components/Common/CenteredTextWithLines/CenteredTextWithLines";
import { AnimatedText } from "../../../Components/Common/AnimatedText/AnimatedText";
import { LazyLoadedImage } from "../../Common/LazyLoadedImage/LazyLoadedImage";
import LogoImage from "../../../Assets/Logo/Logo2.png";
// Asset Imports
import AboutImage from "../../../Assets/About/About.jpg";
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
export const About = () => {
  return (
    <Stack gap="20" alignItems="center" px={[4, 6, 8]} py={[8, 10, 12]}>
      {/* Section Title */}
      <CenteredTextWithLines w="100%" maxW="700px">
        <AnimatedText isCentered spacing="10px">
          <Heading
            size="2xl"
            flexShrink="0"
            color="orange.600"
            textAlign="center"
          >
            About Us
          </Heading>
        </AnimatedText>
      </CenteredTextWithLines>

      <Flex
        flexWrap="wrap-reverse"
        gap="10"
        w="100%"
        justifyContent="center"
        alignItems="center"
      >
        <Stack gap="4" maxW="600px">
          <AnimatedText spacing="5px">
            <Heading color="orange.800" size="md">
              At Kayan & Makan Contracting Company, we specialize in providing
              innovative and high-quality industrial services tailored to meet
              the needs of various industries. Established in Jubail, Saudi
              Arabia, we have built a reputation for excellence in plant
              construction, maintenance, and delivering superior equipment with
              professional dedication.
            </Heading>
          </AnimatedText>

          <Divider />
          <AnimatedText spacing="5px">
            <Heading color="orange.700" size="md">
              Our range of services includes:
            </Heading>
          </AnimatedText>

          {services.map((service) => {
            return (
              <>
                <Flex
                  color="orange.700"
                  gap="4"
                  alignItems="center"
                  key={service.id}
                  flexWrap="wrap"
                >
                  <AnimatedText>
                    <Heading flexShrink="0" size="md">
                      {service.title}
                    </Heading>
                  </AnimatedText>

                  <Text>{service.description}</Text>
                </Flex>
                <Divider />
              </>
            );
          })}
        </Stack>

        <ParallaxImage src={AboutImage} maxW="500px" width="100%" />
      </Flex>
    </Stack>
  );
};
