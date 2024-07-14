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
export const NotificationSettings = ({
  notificationsEnabled,
  handleNotificationToggle,
  preferredLanguage,
  setPreferredLanguage,
}) => (
  <Box bg="gray.800" p="6" borderRadius="md" boxShadow="md">
    <FormControl display="flex" alignItems="center" mb="4">
      <FormLabel htmlFor="notifications" mb="0" color="teal.400">
        Enable Notifications
      </FormLabel>
      <Switch
        id="notifications"
        colorScheme="teal"
        isChecked={notificationsEnabled}
        onChange={handleNotificationToggle}
      />
    </FormControl>
    <FormControl>
      <FormLabel color="teal.400">Preferred Language</FormLabel>
      <Select
        placeholder="Select language"
        bg="gray.700"
        borderColor="gray.600"
        color="white"
        value={preferredLanguage}
        onChange={(e) => setPreferredLanguage(e.target.value)}
      >
        <option value="english" style={{ backgroundColor: "#212121", color: "white" }}>
          English
        </option>
        <option value="portuguese" style={{ backgroundColor: "#212121", color: "white" }}>
          Portuguese
        </option>
      </Select>
    </FormControl>
  </Box>
);
