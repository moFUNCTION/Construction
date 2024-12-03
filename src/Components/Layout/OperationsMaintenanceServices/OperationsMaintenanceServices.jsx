import {
  Flex,
  Heading,
  Stack,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Text,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { CenteredTextWithLines } from "../../Common/CenteredTextWithLines/CenteredTextWithLines";
import { AnimatedText } from "../../../Components/Common/AnimatedText/AnimatedText";
import { FaHardHat, FaTools, FaWrench, FaProjectDiagram } from "react-icons/fa";
import { MdOutlinePrecisionManufacturing } from "react-icons/md";
import { LazyLoadedImage } from "../../Common/LazyLoadedImage/LazyLoadedImage";
import { ServiceBox } from "./Components/ServiceBox";
const contents = [
  {
    title: "Comprehensive Expertise",
    description: `Delivering a wide
    range of O&M
    solutions with proven
    expertise.`,
    icon: FaHardHat,
    image:
      "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Enhanced Efficiency",
    description: `Extending the life,
    functionality, and
    performance of
    structures and
    equipment.`,
    icon: FaTools,
    image:
      "https://images.pexels.com/photos/271667/pexels-photo-271667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Advanced Techniques",
    description: `
        Employing the latest
    methods to ensure
    optimal operational
    outcomes.
        `,
    icon: MdOutlinePrecisionManufacturing,
    image:
      "https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

export const OpertationsAndMaintainceServices = () => {
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
            Operations & Maintenance Services
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
