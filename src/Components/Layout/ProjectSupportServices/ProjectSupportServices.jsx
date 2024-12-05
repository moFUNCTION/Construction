import { Box, Flex, Heading, IconButton, Stack } from "@chakra-ui/react";
import React, { useMemo } from "react";
import { motion, transform } from "framer-motion";
import { CenteredTextWithLines } from "../../Common/CenteredTextWithLines/CenteredTextWithLines";
import { AnimatedText } from "../../../Components/Common/AnimatedText/AnimatedText";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { FaHardHat, FaTools, FaWrench, FaProjectDiagram } from "react-icons/fa";
import { BsCalendarCheck, BsShieldCheck } from "react-icons/bs";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import {
  MdOutlinePrecisionManufacturing,
  MdOutlinePlumbing,
} from "react-icons/md";
import { useTranslator } from "../../../Hooks/useTranslator/useTranslator";
import { LazyLoadedImage } from "../../Common/LazyLoadedImage/LazyLoadedImage";
import BackgroundImage from "../../../Assets/ProjectSupportServices/image.jpg";
const icons = [
  {
    icon: FaHardHat,
  },
  {
    icon: FaTools,
  },
  {
    icon: MdOutlinePrecisionManufacturing,
  },
  {
    icon: MdOutlinePlumbing,
  },
  {
    icon: FaProjectDiagram,
  },
  {
    icon: FaProjectDiagram,
  },
  {
    icon: BsCalendarCheck,
  },
  {
    icon: BsCalendarCheck,
  },
  {
    icon: BsShieldCheck,
  },
  {
    icon: AiOutlineSafetyCertificate,
  },
];

export const ProjectSupportServices = () => {
  const { content, currentLanguage } = useTranslator();
  const contentsWithoutIcons = content("projectSupportServices.contents", {
    returnObjects: true,
  });
  const contents = useMemo(() => {
    return contentsWithoutIcons.map((content, index) => {
      return { ...content, icon: icons[index].icon };
    });
  }, [currentLanguage]);
  return (
    <Stack
      w="100%"
      gap="20"
      alignItems="center"
      px={[4, 6, 8]}
      py={[8, 10, 12]}
      pos="relative"
      bgColor="black"
      zIndex="1"
    >
      <LazyLoadedImage
        transition="0.3s"
        src={BackgroundImage}
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
      {/* <LazyLoadedImage src={}  /> */}
      <CenteredTextWithLines w="100%" maxW="1200px">
        <AnimatedText isCentered spacing="10px">
          <Heading
            size={{
              base: "lg",
              lg: "2xl",
            }}
            color="white"
            textAlign="center"
            flexShrink="0"
            maxW="100%"
            whiteSpace="wrap"
          >
            {content("projectSupportServices.sectionTitle")}
          </Heading>
        </AnimatedText>
      </CenteredTextWithLines>
      <Flex justifyContent="center" flexWrap="wrap" gap="5">
        {contents.map((content, index) => {
          const Icon = content.icon;
          return (
            <Box
              w="100%"
              maxW="400px"
              p="4"
              boxShadow="lg"
              borderRadius="lg"
              border="2px"
              borderColor="gray.300"
              key={index}
              color="white"
              _hover={{
                transform: "scale(1.05)",
                bgColor: "white",
                color: "black",
                ".btn": {
                  bgColor: "white",
                },
                boxShadow: "lg",
              }}
              transition="0.3s"
            >
              <IconButton
                ml="auto"
                className="btn"
                colorScheme="white"
                variant="outline"
                mb="4"
              >
                <Icon />
              </IconButton>
              <AnimatedText spacing="4px">
                <Heading size="md">{content.title}</Heading>
              </AnimatedText>
            </Box>
          );
        })}
      </Flex>
    </Stack>
  );
};
