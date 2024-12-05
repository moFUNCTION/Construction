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
import { LazyLoadedImage } from "../LazyLoadedImage/LazyLoadedImage";
import { useInView } from "framer-motion";
import { AnimatedText } from "../AnimatedText/AnimatedText";
import { useTranslator } from "../../../Hooks/useTranslator/useTranslator";
import { Link } from "react-router-dom";
export const ServiceBox = ({
  image,
  title,
  ViewMoreHref,
  description,
  hasViewPage,
}) => {
  const ref = useRef();
  const inView = useInView(ref);
  const { currentLanguage } = useTranslator();
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
          h="300px"
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
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button as={Link} to="/contact" variant="solid" colorScheme="orange">
            {currentLanguage === "ar" ? "تواصل معنا" : "Contact Us"}
          </Button>
          {hasViewPage && (
            <Button as={Link} to={ViewMoreHref} colorScheme="orange">
              {currentLanguage === "ar" ? "رؤية المزيد" : "View More"}
            </Button>
          )}
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};
