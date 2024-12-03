import React, { useRef } from "react";
import {
  Flex,
  Heading,
  Stack,
  Card,
  CardBody,
  CardFooter,
  Divider,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { LazyLoadedImage } from "../../../Common/LazyLoadedImage/LazyLoadedImage";
import { useInView } from "framer-motion";
import { AnimatedText } from "../../../Common/AnimatedText/AnimatedText";
export const ServiceBox = ({
  image,
  title,
  description,
  children = (
    <ButtonGroup spacing="2">
      <Button variant="outline" colorScheme="orange">
        See Our Clients
      </Button>
      <Button variant="solid" colorScheme="orange">
        Contact Us
      </Button>
    </ButtonGroup>
  ),
}) => {
  const ref = useRef();
  const inView = useInView(ref);
  return (
    <Card
      transition="0.3s"
      transform={inView ? "translate(0 , 0)" : "translate(0 , 100px)"}
      maxW="lg"
      opacity={inView ? 1 : 0}
      ref={ref}
    >
      <CardBody>
        <LazyLoadedImage
          src={image}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <AnimatedText spacing="6px">
            <Heading color="orange.700" size="lg">
              {title}
            </Heading>
          </AnimatedText>

          <Heading size="sm" color="orange.800">
            {description}
          </Heading>
        </Stack>
      </CardBody>
      <Divider color="gray.500" />
      <CardFooter>{children}</CardFooter>
    </Card>
  );
};
