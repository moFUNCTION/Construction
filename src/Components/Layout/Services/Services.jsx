import { Button, ButtonGroup, Flex, Heading, Stack } from "@chakra-ui/react";
import React from "react";
import { CenteredTextWithLines } from "../../Common/CenteredTextWithLines/CenteredTextWithLines";
import { AnimatedText } from "../../Common/AnimatedText/AnimatedText";
import Data from "../../../Data/Services.json";
import { ServiceBox } from "../../Common/ServiceBox/ServiceBox";
import { Link } from "react-router-dom";
import { useTranslator } from "../../../Hooks/useTranslator/useTranslator";
export const Services = () => {
  const { currentLanguage } = useTranslator();
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
            {currentLanguage === "ar" ? "الخدمات" : "Services"}
          </Heading>
        </AnimatedText>
      </CenteredTextWithLines>
      <Flex overflow="hidden" justifyContent="center" flexWrap="wrap" gap="5">
        {Data.map((content, index) => {
          return (
            <ServiceBox
              key={index}
              title={content.name[currentLanguage]}
              description={content.description[currentLanguage]}
              image={content.image}
              hasViewPage={true}
              ViewMoreHref={`/Services/${index}`}
            />
          );
        })}
      </Flex>
    </Stack>
  );
};
