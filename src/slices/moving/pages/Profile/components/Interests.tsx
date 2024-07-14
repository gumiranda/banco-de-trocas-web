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
export const Interests = ({ interests }) => (
  <Box mb="8" bg="gray.800" p="6" borderRadius="md" boxShadow="md">
    <Text fontSize="xl" fontWeight="bold" mb="4" color="teal.400">
      Interests
    </Text>
    <Box display="flex" flexWrap="wrap">
      {interests.map((interest) => (
        <Tag
          key={interest}
          colorScheme="teal"
          m="1"
          bg="teal.600"
          _hover={{ bg: "teal.400" }}
          _active={{ bg: "teal.700" }}
          p="2"
          borderRadius="md"
        >
          {interest}
        </Tag>
      ))}
    </Box>
  </Box>
);
