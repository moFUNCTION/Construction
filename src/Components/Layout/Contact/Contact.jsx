import React, { useState } from "react";
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
  useColorModeValue,
  filter,
} from "@chakra-ui/react";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaClock,
  FaBuilding,
  FaWhatsapp,
} from "react-icons/fa";
import { LazyLoadedImage } from "../../Common/LazyLoadedImage/LazyLoadedImage";
import HeroImage from "../../../Assets/Hero/Image.jpg";
export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log("Form Submitted", formData);
  };

  const contactInfoItems = [
    {
      icon: FaPhoneAlt,
      title: "Phone",
      content: "00966 566 876 524",
      color: "blue.500",
    },
    {
      icon: FaWhatsapp,
      title: "Whatsapp",
      content: "00966 535 114 112",
      color: "green.500",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Address",
      content: "123 Construction Lane, City, State 12345",
      color: "green.500",
    },
    {
      icon: FaEnvelope,
      title: "Email",
      content: "info@kayanomakan.com",
      color: "red.500",
    },
    {
      icon: FaClock,
      title: "Business Hours",
      content: "Mon-Fri: 8am - 6pm\nSat: 9am - 2pm",
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
        src={HeroImage}
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
                Contact Us
              </Heading>
              <Text textAlign="center" color="gray.500" mb={6}>
                Have a project in mind? Reach out to us today!
              </Text>

              <form onSubmit={handleSubmit}>
                <VStack spacing={4}>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                  />
                  <Button colorScheme="orange" type="submit" size="lg" w="full">
                    Send Message
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
                Contact Information
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
                      mr={{ base: 0, md: 4 }}
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
                <Flex direction="column" align="center" color="gray.500">
                  <Icon as={FaBuilding} w={12} h={12} mb={4} />
                  <Text>Location Map Coming Soon</Text>
                </Flex>
              </Box>
            </VStack>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};
