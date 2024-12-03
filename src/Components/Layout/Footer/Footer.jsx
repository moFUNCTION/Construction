import React from "react";
import {
  Box,
  Flex,
  Text,
  VStack,
  HStack,
  Link,
  Container,
  Divider,
} from "@chakra-ui/react";
import { MdEmail, MdGpsFixed, MdPhone } from "react-icons/md";
import { Logo } from "../../Common/Logo/Logo";

export const Footer = () => {
  return (
    <Box
      bg="gray.50"
      color="orange.700"
      borderTop="2px"
      borderColor="orange.500"
    >
      <Container maxW="container.xl" py={8}>
        <Flex
          direction={["column", "row"]}
          justifyContent="space-between"
          alignItems="start"
          gap={6}
        >
          <VStack align="start" spacing={4} flex={1}>
            <Logo />
            <HStack spacing={2}>
              <MdPhone size={20} />
              <Text>00966 566 876 524</Text>
            </HStack>
            <HStack spacing={2}>
              <MdEmail size={20} />
              <Text>info@kayanomakan.com</Text>
            </HStack>
            <HStack spacing={2}>
              <MdGpsFixed size={20} />
              <Text>123 Construction Lane, Building City</Text>
            </HStack>
          </VStack>

          <VStack align="start" spacing={4} flex={1}>
            <Text fontWeight="bold" fontSize="lg">
              Quick Links
            </Text>
            <VStack align="start" spacing={2}>
              <Link href="#">Services</Link>
              <Link href="#">Projects</Link>
              <Link href="#">About Us</Link>
              <Link href="#">Contact</Link>
            </VStack>
          </VStack>

          <VStack align="start" spacing={4} flex={1}>
            <Text fontWeight="bold" fontSize="lg">
              Legal
            </Text>
            <VStack align="start" spacing={2}>
              <Link href="#">Privacy Policy</Link>
              <Link href="#">Terms of Service</Link>
              <Link href="#">Warranty</Link>
            </VStack>
          </VStack>
        </Flex>

        <Divider my={6} borderColor="orange.300" />

        <Text textAlign="center" fontSize="sm">
          © 2024 Kayan And Makan Construction. All Rights Reserved.
        </Text>
      </Container>
    </Box>
  );
};
