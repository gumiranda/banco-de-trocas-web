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

export const NotificationsPage = () => (
  <Container maxW="container.lg">
    <Box my="4">
      <Text fontSize="2xl" fontWeight="bold" mb="4">
        Notifications
      </Text>
      <List spacing="4">
        <ListItem>
          <Text>Notification 1 - Service Update</Text>
        </ListItem>
        <ListItem>
          <Text>Notification 2 - Payment Received</Text>
        </ListItem>
        {/* More notifications */}
      </List>
      <Button mt="4" colorScheme="teal">
        Mark All as Read
      </Button>
    </Box>
  </Container>
);
