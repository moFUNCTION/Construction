import { Box, Flex, Heading, IconButton, Stack } from "@chakra-ui/react";
import React from "react";
import { motion, transform } from "framer-motion";
import { CenteredTextWithLines } from "../../Common/CenteredTextWithLines/CenteredTextWithLines";
import { AnimatedText } from "../../../Components/Common/AnimatedText/AnimatedText";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { ServiceBox } from "../../Common/ServiceBox/ServiceBox";
import { useTranslator } from "../../../Hooks/useTranslator/useTranslator";
export const ConstructionAndProjectManagment = () => {
  const { content } = useTranslator();
  const contents = content("constructionAndProjectManagement.contents", {
    returnObjects: true,
  });
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
            {content("constructionAndProjectManagement.sectionTitle")}
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
