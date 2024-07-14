// pages/index.tsx
import { Flex, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import ActivitySummary from "../components/ActivitySummary/ActivitySummary";
import OrderStatus from "../components/OrderStatus/OrderStatus";

const Home: NextPage = () => {
  return (
    <Flex direction="column" minH="100vh" p={5}>
      <VStack spacing={5} align="stretch">
        <OrderStatus />
        <ActivitySummary />
      </VStack>
    </Flex>
  );
};

export default Home;
