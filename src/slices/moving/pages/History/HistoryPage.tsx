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

export const HistoryPage = () => (
  <Container maxW="container.lg">
    <Box my="4">
      <Text fontSize="2xl" fontWeight="bold" mb="4">
        Activity History
      </Text>
      <List spacing="4">
        <ListItem>
          <Text>Service 1 - Completed</Text>
        </ListItem>
        <ListItem>
          <Text>Service 2 - In Progress</Text>
        </ListItem>
        {/* More services */}
      </List>
    </Box>
  </Container>
);
