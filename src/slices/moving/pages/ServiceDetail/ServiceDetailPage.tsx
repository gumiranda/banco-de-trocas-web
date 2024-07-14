import {
  Box,
  Container,
  Text,
  Image,
  Button,
  SimpleGrid,
  ListItem,
  List,
  Switch,
  Avatar,
} from "@/shared/ui";
import { FormControl, FormLabel, Input, Select } from "@chakra-ui/react";
const imageTest =
  "https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";

export const services = [
  {
    id: 1,
    name: "Local Moving",
    description: "Short distance moving service.",
    price: "$100",
    image: imageTest,
  },
  {
    id: 2,
    name: "Long Distance Moving",
    description: "Long distance moving service.",
    price: "$300",
    image: imageTest,
  },
  // More services...
];

export const ServiceDetailPage = ({ service }) => (
  <Container maxW="container.lg">
    <Box my="4">
      <Image src={service.image} alt={service.name} />
      <Text fontSize="2xl" fontWeight="bold" mt="4">
        {service.name}
      </Text>
      <Text mt="4">{service.description}</Text>
      <Text mt="4" color="gray.500">
        Estimated Price: {service.price}
      </Text>
      <Button mt="4" colorScheme="teal">
        Book Now
      </Button>
    </Box>
  </Container>
);
