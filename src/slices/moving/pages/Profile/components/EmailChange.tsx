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

export const EmailChange = ({ newEmail, setNewEmail, handleEmailChange }) => (
  <Box bg="gray.800" p="6" borderRadius="md" boxShadow="md">
    <FormControl>
      <FormLabel htmlFor="new-email" color="teal.400">
        Change Email
      </FormLabel>
      <Input
        id="new-email"
        placeholder="Enter new email"
        bg="gray.700"
        borderColor="gray.600"
        color="white"
        _placeholder={{ color: "gray.400" }}
        value={newEmail}
        onChange={(e) => setNewEmail(e.target.value)}
      />
      <Button
        mt="4"
        colorScheme="teal"
        bg="teal.600"
        _hover={{ bg: "teal.400" }}
        _active={{ bg: "teal.700" }}
        p="6"
        borderRadius="md"
        onClick={handleEmailChange}
      >
        Update Email
      </Button>
    </FormControl>
  </Box>
);
