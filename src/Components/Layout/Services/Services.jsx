import { Button, ButtonGroup, Flex, Heading, Stack } from "@chakra-ui/react";
import React from "react";
import { CenteredTextWithLines } from "../../Common/CenteredTextWithLines/CenteredTextWithLines";
import { AnimatedText } from "../../Common/AnimatedText/AnimatedText";
import Data from "../../../Data/Services.json";
import { ServiceBox } from "../OperationsMaintenanceServices/Components/ServiceBox";
import { Link } from "react-router-dom";
export const Services = () => {
  console.log(Data);
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
            Services
          </Heading>
        </AnimatedText>
      </CenteredTextWithLines>
      <Flex overflow="hidden" justifyContent="center" flexWrap="wrap" gap="5">
        {Data.map((content, index) => {
          return (
            <ServiceBox
              key={index}
              title={content.name}
              description={content.description}
              image={content.image}
            >
              <ButtonGroup>
                <Button
                  as={Link}
                  to={`/Services/${index}`}
                  colorScheme="orange"
                >
                  View More
                </Button>
                <Button variant="outline" colorScheme="orange">
                  Contact Us
                </Button>
              </ButtonGroup>
            </ServiceBox>
          );
        })}
      </Flex>
    </Stack>
  );
};
