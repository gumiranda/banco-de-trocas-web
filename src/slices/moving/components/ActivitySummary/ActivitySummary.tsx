import { Box } from "@chakra-ui/react";
import DeliverySummary from "./DeliverySummary";

interface Delivery {
  id: number;
  type: "urgent" | "regular";
  status: "pending" | "completed";
}

const ActivitySummary = () => {
  // Exemplos de dados
  const completedDeliveriesThisWeek = 5;
  const completedDeliveriesLastWeek = 7;
  const averageWeeklyDeliveries = 6;
  const pendingDeliveries = 3;

  const deliveries: Delivery[] = [
    { id: 1, type: "urgent", status: "pending" },
    { id: 2, type: "regular", status: "pending" },
    { id: 3, type: "urgent", status: "completed" },
    { id: 4, type: "regular", status: "completed" },
    { id: 5, type: "regular", status: "pending" },
  ];

  // Estimativa de lucros (dados simulados)
  const profitPerRegularDelivery = 50; // Exemplo de lucro por entrega regular
  const profitPerUrgentDelivery = 100; // Exemplo de lucro por entrega urgente
  const delayedDeliveries = 1;
  const urgentDeliveries = 1;
  const delayThreshold = 24;

  const weeklyProfit = deliveries
    .filter((delivery) => delivery.status === "completed")
    .reduce((total, delivery) => {
      return (
        total +
        (delivery.type === "urgent" ? profitPerUrgentDelivery : profitPerRegularDelivery)
      );
    }, 0);

  return (
    <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
      <DeliverySummary
        completedDeliveriesThisWeek={completedDeliveriesThisWeek}
        completedDeliveriesLastWeek={completedDeliveriesLastWeek}
        averageWeeklyDeliveries={averageWeeklyDeliveries}
        pendingDeliveries={pendingDeliveries}
        weeklyProfit={weeklyProfit}
        delayedDeliveries={delayedDeliveries}
        urgentDeliveries={urgentDeliveries}
        delayThreshold={delayThreshold}
        highPerformanceThreshold={1}
        incentiveMessage={"Boa semana! Continue assim!"}
      />
    </Box>
  );
};

export default ActivitySummary;
