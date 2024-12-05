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
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

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
              <Text>{t("footer.contact.phone")}</Text>
            </HStack>
            <HStack spacing={2}>
              <MdEmail size={20} />
              <Text>{t("footer.contact.email")}</Text>
            </HStack>
            <HStack spacing={2}>
              <MdGpsFixed size={20} />
              <Text>{t("footer.contact.address")}</Text>
            </HStack>
          </VStack>

          <VStack align="start" spacing={4} flex={1}>
            <Text fontWeight="bold" fontSize="lg">
              {t("footer.quickLinks.title")}
            </Text>
            <VStack align="start" spacing={2}>
              <Link href="#">{t("footer.quickLinks.services")}</Link>
              <Link href="#">{t("footer.quickLinks.projects")}</Link>
              <Link href="#">{t("footer.quickLinks.aboutUs")}</Link>
              <Link href="#">{t("footer.quickLinks.contact")}</Link>
            </VStack>
          </VStack>

          <VStack align="start" spacing={4} flex={1}>
            <Text fontWeight="bold" fontSize="lg">
              {t("footer.legal.title")}
            </Text>
            <VStack align="start" spacing={2}>
              <Link href="#">{t("footer.legal.privacyPolicy")}</Link>
              <Link href="#">{t("footer.legal.termsOfService")}</Link>
              <Link href="#">{t("footer.legal.warranty")}</Link>
            </VStack>
          </VStack>
        </Flex>

        <Divider my={6} borderColor="orange.300" />

        <Text textAlign="center" fontSize="sm">
          {t("footer.copyright")}
        </Text>
      </Container>
    </Box>
  );
};
