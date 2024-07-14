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
export const UserBadge = ({ isActive }) => (
  <Box textAlign="center" mb="8" bg="gray.800" p="6" borderRadius="md" boxShadow="md">
    <Badge colorScheme="green" p="2" borderRadius="md">
      {isActive ? "Active User" : "Inactive User"}
    </Badge>
  </Box>
);
