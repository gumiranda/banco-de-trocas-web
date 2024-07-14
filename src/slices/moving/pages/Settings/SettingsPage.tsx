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

export const SettingsPage = () => (
  <Container maxW="container.md">
    <Box my="4">
      <FormControl display="flex" alignItems="center">
        <FormLabel htmlFor="notifications" mb="0">
          Enable Notifications
        </FormLabel>
        <Switch id="notifications" />
      </FormControl>
      <FormControl mt="4">
        <FormLabel>Preferred Language</FormLabel>
        <Select placeholder="Select language">
          <option>English</option>
          <option>Portuguese</option>
          {/* More languages */}
        </Select>
      </FormControl>
      <Button mt="4" colorScheme="teal">
        Save Settings
      </Button>
    </Box>
  </Container>
);
