import { theme } from "@/application/theme";
import {
  Box,
  Heading,
  Text,
  Stack,
  Divider,
  Badge,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Alert,
  AlertIcon,
  useToast,
} from "@chakra-ui/react";
import { useEffect } from "react";

interface DeliverySummaryProps {
  completedDeliveriesThisWeek: number;
  completedDeliveriesLastWeek: number;
  averageWeeklyDeliveries: number;
  pendingDeliveries: number;
  weeklyProfit: number;
  delayedDeliveries: number;
  urgentDeliveries: number;
  delayThreshold: number; // Threshold in hours
  highPerformanceThreshold: number; // Threshold for high performance
  incentiveMessage: string; // Incentive message for high performers
}

const DeliverySummary = ({
  completedDeliveriesThisWeek = 0,
  completedDeliveriesLastWeek = 0,
  averageWeeklyDeliveries = 0,
  pendingDeliveries = 0,
  weeklyProfit = 0,
  delayedDeliveries = 0,
  urgentDeliveries = 0,
  delayThreshold = 24,
  highPerformanceThreshold = 50,
  incentiveMessage = "Parabéns! Você ganhou um bônus por seu excelente desempenho.",
}: DeliverySummaryProps) => {
  const toast = useToast();
  const performanceChange = completedDeliveriesThisWeek - completedDeliveriesLastWeek;
  const performanceText =
    performanceChange > 0
      ? `Você teve um aumento de ${performanceChange} entregas em relação à semana passada.`
      : `Você teve uma redução de ${Math.abs(performanceChange)} entregas em relação à semana passada.`;
  const performanceColor =
    performanceChange > 0 ? theme.colors.success.default : theme.colors.error.default;

  useEffect(() => {
    if (delayedDeliveries > 0 && !toast.isActive("delayedDeliveries")) {
      toast({
        id: "delayedDeliveries",
        title: "Entregas Atrasadas",
        description: `Atenção: Você tem ${delayedDeliveries} entregas atrasadas além do limite de ${delayThreshold} horas.`,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
    if (urgentDeliveries > 0 && !toast.isActive("urgentDeliveries")) {
      toast({
        id: "urgentDeliveries",
        title: "Entregas Urgentes",
        description: `Atenção: Você tem ${urgentDeliveries} entregas urgentes a serem priorizadas.`,
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
    }
    if (
      completedDeliveriesThisWeek >= highPerformanceThreshold &&
      !toast.isActive("highPerformance")
    ) {
      toast({
        id: "highPerformance",
        title: "Incentivo de Desempenho",
        description: incentiveMessage,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }
  }, [
    delayedDeliveries,
    urgentDeliveries,
    completedDeliveriesThisWeek,
    delayThreshold,
    highPerformanceThreshold,
    incentiveMessage,
    toast,
  ]);

  return (
    <Box
      p={6}
      boxShadow={theme.shadows.md.default}
      borderRadius="md"
      bg={theme.colors["bg.surface"].default}
      color={theme.colors["fg.default"].default}
      w={{ base: "100%", md: "80%", lg: "60%" }}
      mx="auto"
    >
      <Heading
        as="h3"
        size="lg"
        mb={4}
        textAlign="center"
        color={theme.colors.primary[500]}
      >
        Resumo das Atividades
      </Heading>
      <Stack spacing={4}>
        <Stat>
          <StatLabel>Entregas esta semana</StatLabel>
          <StatNumber>{completedDeliveriesThisWeek}</StatNumber>
          <StatHelpText>Média semanal: {averageWeeklyDeliveries}</StatHelpText>
        </Stat>
        <Divider />
        <Text color={performanceColor}>{performanceText}</Text>
        <Divider />
        <Stat>
          <StatLabel>Entregas pendentes</StatLabel>
          <StatNumber>{pendingDeliveries}</StatNumber>
        </Stat>
        <Divider />
        <Stat>
          <StatLabel>Lucro estimado</StatLabel>
          <StatNumber>R$ {weeklyProfit}</StatNumber>
        </Stat>
        {delayedDeliveries > 0 && (
          <Alert status="error" mt={4}>
            <AlertIcon />
            Atenção: Você tem {delayedDeliveries} entregas atrasadas além do limite de{" "}
            {delayThreshold} horas.
          </Alert>
        )}
        {urgentDeliveries > 0 && (
          <Alert status="warning" mt={4}>
            <AlertIcon />
            Atenção: Você tem {urgentDeliveries} entregas urgentes a serem priorizadas.
          </Alert>
        )}
        {completedDeliveriesThisWeek >= highPerformanceThreshold && (
          <Alert status="success" mt={4}>
            <AlertIcon />
            {incentiveMessage}
          </Alert>
        )}
        <Badge colorScheme={performanceChange > 0 ? "green" : "red"} mt={4}>
          {performanceChange > 0 ? "Performance Melhorada" : "Performance Reduzida"}
        </Badge>
      </Stack>
    </Box>
  );
};

export default DeliverySummary;
