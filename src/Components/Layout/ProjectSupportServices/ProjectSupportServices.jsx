import { Box, Flex, Heading, IconButton, Stack } from "@chakra-ui/react";
import React from "react";
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

const contents = [
  {
    title: "Skilled Manpower for plant services",
    icon: FaHardHat,
  },
  {
    title: "Equipment Maintenance for optimal performance",
    icon: FaTools,
  },
  {
    title: "Bolt Torquing & Tensioning for precision installation",
    icon: MdOutlinePrecisionManufacturing,
  },
  {
    title: "Pipeline Projects for installation and maintenance",
    icon: MdOutlinePlumbing,
  },
  {
    title: "Plant Shutdown Activities for minimal downtime",
    icon: FaProjectDiagram,
  },
  {
    title: "Project Coordination for smooth execution",
    icon: FaProjectDiagram,
  },
  {
    title: "Strategic Planning for successful delivery",
    icon: BsCalendarCheck,
  },
  {
    title: "Timeline Management to ensure on-time completion",
    icon: BsCalendarCheck,
  },
  {
    title: "Quality Assurance for high standards",
    icon: BsShieldCheck,
  },
  {
    title: "Health & Safety Compliance to ensure a safe work environment",
    icon: AiOutlineSafetyCertificate,
  },
];

export const ProjectSupportServices = () => {
  return (
    <Stack
      w="100%"
      gap="20"
      alignItems="center"
      px={[4, 6, 8]}
      py={[8, 10, 12]}
    >
      <CenteredTextWithLines w="100%" maxW="1200px">
        <AnimatedText isCentered spacing="10px">
          <Heading
            size={{
              base: "lg",
              lg: "2xl",
            }}
            color="orange.600"
            textAlign="center"
            flexShrink="0"
            maxW="100%"
            whiteSpace="wrap"
          >
            Project support Service
          </Heading>
        </AnimatedText>
      </CenteredTextWithLines>
      <Flex justifyContent="center" flexWrap="wrap" gap="5">
        {contents.map((content, index) => {
          const Icon = content.icon;
          return (
            <Box
              w="100%"
              maxW="600px"
              p="4"
              boxShadow="lg"
              borderRadius="lg"
              border="2px"
              borderColor="gray.300"
              key={index}
              color="orange.700"
              _hover={{
                transform: "scale(1.05)",
                bgColor: "orange.600",
                color: "white",
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
                colorScheme="orange"
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
