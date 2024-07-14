// Install Chakra UI and Next.js first
// npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion next react react-dom

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

const SearchBar = () => <Input placeholder="Search services..." size="lg" />;

const ServiceCard = ({ service }) => (
  <Box borderWidth="1px" borderRadius="lg" overflow="hidden" m="4">
    <Image src={service.image} alt={service.name} />
    <Box p="6">
      <Box d="flex" alignItems="baseline">
        <Text fontSize="xl" fontWeight="bold">
          {service.name}
        </Text>
      </Box>
      <Text mt="2">{service.description}</Text>
      <Text mt="2" color="gray.500">
        Estimated Price: {service.price}
      </Text>
      <Button mt="4" colorScheme="teal">
        See Details
      </Button>
    </Box>
  </Box>
);

const ServiceList = ({ services }) => (
  <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing="8" p="4">
    {services.map((service) => (
      <ServiceCard key={service.id} service={service} />
    ))}
  </SimpleGrid>
);

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

export const SearchPage = () => (
  <Container maxW="container.lg">
    <Box my="4">
      <SearchBar />
    </Box>
    <Text fontSize="2xl" fontWeight="bold" mb="4">
      Search Results
    </Text>
    <ServiceList services={services} />
  </Container>
);
