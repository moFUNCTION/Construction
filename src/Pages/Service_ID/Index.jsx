import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { LazyLoadedImage } from "../../Components/Common/LazyLoadedImage/LazyLoadedImage";
import Data from "../../Data/Services.json";
import { useParams } from "react-router-dom";
import { AnimatedText } from "../../Components/Common/AnimatedText/AnimatedText";
import { CenteredTextWithLines } from "../../Components/Common/CenteredTextWithLines/CenteredTextWithLines";
import { Contact } from "../../Components/Layout/Contact/Contact";
import { useTranslator } from "../../Hooks/useTranslator/useTranslator";
export default function Index() {
  const { currentLanguage } = useTranslator();
  const { id } = useParams();
  const Content = Data[id];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Stack gap="20">
        <Stack
          alignItems="center"
          justifyContent="center"
          h="600px"
          pos="relative"
          bgColor="black"
          zIndex="1"
          gap="8"
        >
          <LazyLoadedImage
            pos="absolute"
            inset="0"
            ImageProps={{
              objectFit: "cover",
              opacity: "0.5",
            }}
            zIndex="-1"
            src={Content.image}
          />
          <AnimatedText isCentered spacing="5px">
            <Heading size="2xl" color="white">
              {Content.name[currentLanguage]}
            </Heading>
          </AnimatedText>
          <AnimatedText isCentered spacing="5px">
            <Heading size="md" color="white">
              {Content.description[currentLanguage]}
            </Heading>
          </AnimatedText>
        </Stack>
        {Content.categories?.map((category) => {
          return (
            <Stack
              gap="10"
              key={category.title[currentLanguage]}
              alignItems="center"
              p="4"
            >
              <CenteredTextWithLines w="100%" maxW="1200px">
                <AnimatedText isCentered spacing="10px">
                  <Heading
                    size="xl"
                    color="orange.600"
                    textAlign="center"
                    flexShrink="0"
                    maxW="100%"
                    whiteSpace="wrap"
                  >
                    {category.title[currentLanguage]}
                  </Heading>
                </AnimatedText>
              </CenteredTextWithLines>
              <Flex wrap="wrap" justifyContent="center" gap="8" w="100%">
                {category?.items?.map((item, index) => {
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
                        bgColor: "orange.600",
                        color: "white",
                        ".btn": {
                          bgColor: "white",
                        },
                        boxShadow: "lg",
                      }}
                      transition="0.3s"
                    >
                      <AnimatedText isCentered spacing="4px">
                        <Heading mb="3" size="lg">
                          {item.title && item.title[currentLanguage]}
                        </Heading>
                        <Text size="md">
                          {item.description[currentLanguage]}
                        </Text>
                      </AnimatedText>
                    </Box>
                  );
                })}
              </Flex>
            </Stack>
          );
        })}
      </Stack>
      <Contact />
    </>
  );
}
