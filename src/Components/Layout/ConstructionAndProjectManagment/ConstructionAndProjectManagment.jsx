import { Box, Flex, Heading, IconButton, Stack } from "@chakra-ui/react";
import React from "react";
import { motion, transform } from "framer-motion";
import { CenteredTextWithLines } from "../../Common/CenteredTextWithLines/CenteredTextWithLines";
import { AnimatedText } from "../../../Components/Common/AnimatedText/AnimatedText";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { ServiceBox } from "../../Common/ServiceBox/ServiceBox";
const contents = [
  {
    title: "Trusted in Saudi Arabia for Construction",
    description:
      "Renowned for delivering high-quality construction services across various sectors in Saudi Arabia, focusing on reliability and excellence.",
    image:
      "https://images.pexels.com/photos/15483696/pexels-photo-15483696/free-photo-of-flag-of-saudi-arabia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Timely Project Completion",
    description:
      "Committed to completing projects on time by employing innovative methods and utilizing premium materials for superior outcomes.",
    image:
      "https://images.pexels.com/photos/1216544/pexels-photo-1216544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Expert Design and Maintenance",
    description:
      "Offering expertise in design, execution, and maintenance with a strong emphasis on safety and sustainability to ensure project longevity.",
    image:
      "https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Comprehensive Engineering Services",
    description:
      "Providing comprehensive engineering and construction services tailored to industries such as Oil & Gas, Marine, and infrastructure.",
    image:
      "https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];
export const ConstructionAndProjectManagment = () => {
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
            Project Management
          </Heading>
        </AnimatedText>
      </CenteredTextWithLines>
      <Flex justifyContent="center" flexWrap="wrap" gap="5">
        {contents.map((content, index) => {
          return <ServiceBox {...content} key={index} />;
        })}
      </Flex>
    </Stack>
  );
};
