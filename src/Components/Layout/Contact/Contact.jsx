import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  Flex,
  Input,
  Textarea,
  Button,
  Grid,
  GridItem,
  Icon,
  useToast,
  AspectRatio,
} from "@chakra-ui/react";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaClock,
  FaWhatsapp,
} from "react-icons/fa";
import { LazyLoadedImage } from "../../Common/LazyLoadedImage/LazyLoadedImage";
import ContactImage from "../../../Assets/Contact/image.jpg";
import { useTranslation } from "react-i18next";
import { useTranslator } from "../../../Hooks/useTranslator/useTranslator";

// Multilingual Zod validation schema generator
const createContactSchema = (language) => {
  const messages = {
    en: {
      name: {
        min: "Name must be at least 2 characters",
        required: "Name is required",
      },
      email: {
        invalid: "Invalid email address",
        required: "Email is required",
      },
      message: {
        min: "Message must be at least 10 characters",
        required: "Message is required",
      },
      phone: {
        min: "please add the phone number",
        required: "phone is required",
      },
    },
    ar: {
      name: {
        min: "يجب أن يكون الاسم 2 أحرف على الأقل",
        required: "الاسم مطلوب",
      },
      email: {
        invalid: "عنوان البريد الإلكتروني غير صالح",
        required: "البريد الإلكتروني مطلوب",
      },
      phone: {
        invalid: "الرجاء ادخال رقم الهاتف",
        required: "رقم الهاتف مطلوب",
      },
      message: {
        min: "يجب أن يكون الرسالة 10 أحرف على الأقل",
        required: "الرسالة مطلوبة",
      },
    },
  };

  return z.object({
    name: z
      .string()
      .min(2, { message: messages[language].name.min })
      .refine((val) => val.trim().length > 0, {
        message: messages[language].name.required,
      }),
    email: z
      .string()
      .email({ message: messages[language].email.invalid })
      .refine((val) => val.trim().length > 0, {
        message: messages[language].email.required,
      }),
    phone: z
      .number({ message: messages[language].phone.min })
      .refine((val) => val > 0, {
        message: messages[language].phone.required,
      }),
    message: z
      .string()
      .min(10, { message: messages[language].message.min })
      .refine((val) => val.trim().length > 0, {
        message: messages[language].message.required,
      }),
  });
};

export const Contact = () => {
  const { currentLanguage } = useTranslator();
  const { t, i18n } = useTranslation();
  const toast = useToast();

  // Dynamically create schema based on current language
  const contactSchema = createContactSchema(
    i18n.language.startsWith("ar") ? "ar" : "en"
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    console.log(data);
    try {
      await emailjs.send(
        "service_dha29zj",
        "template_k9y357j",
        {
          from_name: data.name,
          from_email: data.email,
          phone: data.phone || "Not provided",
          message: data.message,
        },
        "uw0DRt7gxXqxviIuL"
      );

      toast({
        title:
          currentLanguage === "ar"
            ? "تم الارسال بنجاح"
            : "message sent successfully",
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      reset();
    } catch (error) {
      toast({
        title:
          currentLanguage === "ar"
            ? "حدث خطأ في ارسال الرسالة"
            : "error in sending message",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      console.error("Email send error:", error);
    }
  };

  const contactInfoItems = [
    {
      icon: FaPhoneAlt,
      title: t("contact.contactInfo.items.0.title"),
      content: t("contact.contactInfo.items.0.content"),
      color: "blue.500",
    },
    {
      icon: FaWhatsapp,
      title: t("contact.contactInfo.items.1.title"),
      content: t("contact.contactInfo.items.1.content"),
      color: "green.500",
    },
    {
      icon: FaMapMarkerAlt,
      title: t("contact.contactInfo.items.2.title"),
      content: t("contact.contactInfo.items.2.content"),
      color: "green.500",
    },
    {
      icon: FaEnvelope,
      title: t("contact.contactInfo.items.3.title"),
      content: t("contact.contactInfo.items.3.content"),
      color: "red.500",
    },
    {
      icon: FaClock,
      title: t("contact.contactInfo.items.4.title"),
      content: t("contact.contactInfo.items.4.content"),
      color: "purple.500",
    },
  ];

  return (
    <Box zIndex="1" pos="relative" bg="black" py={16}>
      <LazyLoadedImage
        pos="absolute"
        inset="0"
        w="100%"
        h="100%"
        src={ContactImage}
        ImageProps={{
          filter: "saturate(0)",
          opacity: "0.7",
        }}
        zIndex="-1"
      />
      <Container maxW="container.xl" w="100%">
        <Grid
          templateColumns={{
            base: "1fr",
            md: "1fr 1fr",
          }}
          gap={{ base: 8, md: 12 }}
        >
          {/* Contact Form */}
          <GridItem>
            <VStack
              spacing={8}
              align="stretch"
              bg="white"
              p={8}
              borderRadius="xl"
              boxShadow="xl"
            >
              <Heading as="h2" size="xl" textAlign="center" color="gray.700">
                {t("contact.heading")}
              </Heading>
              <Text textAlign="center" color="gray.500" mb={6}>
                {t("contact.subheading")}
              </Text>

              <form onSubmit={handleSubmit(onSubmit)}>
                <VStack spacing={4}>
                  <Input
                    {...register("name")}
                    placeholder={t("contact.form.namePlaceholder")}
                    isInvalid={!!errors.name}
                  />
                  {errors.name && (
                    <Text color="red.500" fontSize="sm" alignSelf="start">
                      {errors.name.message}
                    </Text>
                  )}

                  <Input
                    {...register("email")}
                    type="email"
                    placeholder={t("contact.form.emailPlaceholder")}
                    isInvalid={!!errors.email}
                  />
                  {errors.email && (
                    <Text color="red.500" fontSize="sm" alignSelf="start">
                      {errors.email.message}
                    </Text>
                  )}

                  <Input
                    {...register("phone", {
                      valueAsNumber: true,
                    })}
                    type="number"
                    placeholder={t("contact.form.phonePlaceholder")}
                  />
                  {errors.phone && (
                    <Text color="red.500" fontSize="sm" alignSelf="start">
                      {errors.phone.message}
                    </Text>
                  )}
                  <Textarea
                    {...register("message")}
                    placeholder={t("contact.form.messagePlaceholder")}
                    rows={5}
                    isInvalid={!!errors.message}
                  />
                  {errors.message && (
                    <Text color="red.500" fontSize="sm" alignSelf="start">
                      {errors.message.message}
                    </Text>
                  )}

                  <Button
                    colorScheme="orange"
                    size="lg"
                    w="full"
                    onClick={handleSubmit(onSubmit)}
                    isLoading={isSubmitting}
                  >
                    {t("contact.form.submitButton")}
                  </Button>
                </VStack>
              </form>
            </VStack>
          </GridItem>

          {/* Contact Information */}
          <GridItem>
            <VStack
              spacing={8}
              align="stretch"
              bg="white"
              p={8}
              borderRadius="xl"
              boxShadow="xl"
            >
              <Heading as="h2" size="xl" textAlign="center" color="gray.700">
                {t("contact.contactInfo.heading")}
              </Heading>
              <VStack spacing={6} align="stretch">
                {contactInfoItems.map((item, index) => (
                  <Flex
                    key={index}
                    align="center"
                    bg={`${item.color}:50`}
                    p={4}
                    borderRadius="md"
                    flexDirection={{ base: "column", md: "row" }}
                  >
                    <Icon
                      as={item.icon}
                      color={item.color}
                      w={8}
                      h={8}
                      marginInline={{ base: 0, md: 4 }}
                      mb={{ base: 2, md: 0 }}
                    />
                    <VStack
                      align={{
                        base: "center",
                        md: "start",
                      }}
                      spacing={1}
                    >
                      <Text fontWeight="bold" color="gray.700">
                        {item.title}
                      </Text>
                      <Text
                        textAlign="center"
                        color="gray.600"
                        whiteSpace="pre-line"
                      >
                        {item.content}
                      </Text>
                    </VStack>
                  </Flex>
                ))}
              </VStack>

              {/* Embedded Map Placeholder */}
              <Box
                h="300px"
                bg="gray.100"
                borderRadius="xl"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <AspectRatio w="100%" ratio={16 / 9}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3555.008051148741!2d49.653548784953216!3d26.99829508309089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDU5JzUzLjkiTiA0OcKwMzknMDQuOSJF!5e0!3m2!1sar!2seg!4v1733337284876!5m2!1sar!2seg"
                    loading="lazy"
                  ></iframe>
                </AspectRatio>
              </Box>
            </VStack>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};
