import {
  Box,
  Container,
  Text,
  Button,
  SimpleGrid,
  ListItem,
  List,
  Switch,
  Avatar,
} from "@/shared/ui";
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Tag,
  Badge,
  Divider,
  Progress,
  Alert,
  AlertIcon,
  useToast,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";

export const ProfileHeader = ({ userData, items }) => (
  <Box
    textAlign="center"
    mb="8"
    bg="gray.800"
    p="6"
    borderRadius="md"
    boxShadow="md"
    border="2px solid teal"
    transition="all 0.3s ease"
    _hover={{ transform: "scale(1.05)", bg: "gray.700" }}
    maxW="sm"
    mx="auto"
  >
    <Avatar size="xl" name={userData.name} bg="teal.500" color="white" />
    <Text fontSize="2xl" fontWeight="bold" mt="4" color="teal.400">
      {userData.name}
    </Text>
    <Text mt="2" color="gray.300">
      {userData.email}
    </Text>
    <Button
      mt="4"
      colorScheme="teal"
      bg="teal.600"
      _hover={{ bg: "teal.400" }}
      _active={{ bg: "teal.700" }}
      p="6"
      borderRadius="md"
      boxShadow="lg"
      width="full"
    >
      Edit Profile
    </Button>
    <Container mt="4" p="4" bg="gray.700" borderRadius="md">
      <SimpleGrid columns={2} spacing={4}>
        <List spacing={2}>
          {items.map((item, index) => (
            <ListItem key={index} color="teal.300">
              {item}
            </ListItem>
          ))}
        </List>
        <Box>
          <Text color="gray.400">Additional Info</Text>
        </Box>
      </SimpleGrid>
    </Container>
  </Box>
);
