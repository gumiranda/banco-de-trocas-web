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
export const Performance = ({ performance, handlePerformanceChange }) => (
  <Box mb="8" bg="gray.800" p="6" borderRadius="md" boxShadow="md">
    <Text fontSize="xl" fontWeight="bold" mb="4" color="teal.400">
      Performance
    </Text>
    <Progress
      colorScheme="teal"
      size="lg"
      value={performance}
      borderRadius="md"
      bg="gray.700"
    />
    <Button
      mt="4"
      colorScheme="teal"
      bg="teal.600"
      _hover={{ bg: "teal.400" }}
      _active={{ bg: "teal.700" }}
      p="6"
      borderRadius="md"
      onClick={() => handlePerformanceChange(performance + 10)}
    >
      Increase Performance
    </Button>
  </Box>
);
