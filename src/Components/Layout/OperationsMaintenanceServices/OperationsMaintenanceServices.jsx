import { Flex, Heading, Stack } from "@chakra-ui/react";
import { CenteredTextWithLines } from "../../Common/CenteredTextWithLines/CenteredTextWithLines";
import { AnimatedText } from "../../../Components/Common/AnimatedText/AnimatedText";
import { ServiceBox } from "../../Common/ServiceBox/ServiceBox";
import { useTranslator } from "../../../Hooks/useTranslator/useTranslator";
export const OpertationsAndMaintainceServices = () => {
  const { content } = useTranslator();
  const contents = content("operationsAndMaintenanceServices.services", {
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
              base: "sm",
              lg: "2xl",
            }}
            color="orange.600"
            textAlign="center"
            flexShrink="0"
            maxW="100%"
            whiteSpace="wrap"
          >
            {content("operationsAndMaintenanceServices.heading")}
          </Heading>
        </AnimatedText>
      </CenteredTextWithLines>
      <Flex overflow="hidden" justifyContent="center" flexWrap="wrap" gap="5">
        {contents.map((content, index) => {
          return <ServiceBox key={index} {...content} />;
        })}
      </Flex>
    </Stack>
  );
};
