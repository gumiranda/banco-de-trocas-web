// components/OrderStatus.tsx
import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Icon,
  Collapse,
  Button,
} from "@chakra-ui/react";
import {
  FaTruck,
  FaClock,
  FaCheckCircle,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { useState } from "react";
import { useTheme } from "@chakra-ui/react";

const OrderStatus = () => {
  const theme = useTheme();
  const [expandedOrder, setExpandedOrder] = useState<number | null>(null);

  const orders = [
    {
      id: 1234,
      status: "Em trânsito",
      icon: FaTruck,
      color: theme.colors.primary[500],
      details: "Localização atual: São Paulo, SP",
      history: [
        {
          date: "01/06/2024",
          time: "12:00",
          location: "São Paulo, SP",
          status: "Pedido Recebido",
        },
        {
          date: "02/06/2024",
          time: "09:00",
          location: "Campinas, SP",
          status: "Em Trânsito",
        },
        {
          date: "03/06/2024",
          time: "15:30",
          location: "São Paulo, SP",
          status: "Chegada ao Centro de Distribuição",
        },
      ],
    },
    {
      id: 1235,
      status: "Aguardando coleta",
      icon: FaClock,
      color: theme.colors.tertiary[500],
      details: "Pronto para coleta no centro de distribuição",
      history: [
        {
          date: "01/06/2024",
          time: "10:00",
          location: "Centro de Distribuição",
          status: "Pronto para Coleta",
        },
      ],
    },
    {
      id: 1236,
      status: "Entregue",
      icon: FaCheckCircle,
      color: theme.colors.secondary[500],
      details: "Entregue em: 01/06/2024 14:35",
      history: [
        {
          date: "30/05/2024",
          time: "08:00",
          location: "São Paulo, SP",
          status: "Pedido Recebido",
        },
        {
          date: "31/05/2024",
          time: "14:00",
          location: "Campinas, SP",
          status: "Em Trânsito",
        },
        {
          date: "01/06/2024",
          time: "10:00",
          location: "São Paulo, SP",
          status: "Em Rota para Entrega",
        },
        {
          date: "01/06/2024",
          time: "14:35",
          location: "São Paulo, SP",
          status: "Entrega Realizada",
        },
      ],
    },
  ];

  const toggleOrderHistory = (id: number) => {
    setExpandedOrder(expandedOrder === id ? null : id);
  };

  return (
    <Box
      p={5}
      shadow={theme.shadows.lg.default}
      borderWidth="1px"
      borderRadius="lg"
      bg={theme.colors["bg.surface"].default}
      color={theme.colors["fg.default"].default}
    >
      <Heading
        as="h3"
        size="lg"
        mb={5}
        textAlign="center"
        color={theme.colors.primary[700]}
      >
        Status dos Pedidos
      </Heading>
      <VStack spacing={4} align="stretch">
        {orders.map((order) => (
          <Box
            key={order.id}
            p={4}
            borderWidth="1px"
            borderRadius="md"
            bg={theme.colors["bg.subtle"].default}
          >
            <HStack spacing={3} align="center">
              <Icon as={order.icon} color={order.color} w={6} h={6} />
              <Text fontWeight="bold">Pedido #{order.id}</Text>
              <Text>{order.status}</Text>
              <Button
                onClick={() => toggleOrderHistory(order.id)}
                size="sm"
                ml="auto"
                rightIcon={
                  expandedOrder === order.id ? <FaChevronUp /> : <FaChevronDown />
                }
                variant="ghost"
              >
                Histórico
              </Button>
            </HStack>
            <Text mt={2} color={theme.colors["fg.muted"].default}>
              {order.details}
            </Text>
            <Collapse in={expandedOrder === order.id} animateOpacity>
              <VStack mt={3} spacing={2} align="stretch">
                {order.history.map((event, index) => (
                  <Box
                    key={index}
                    p={3}
                    borderWidth="1px"
                    borderRadius="md"
                    bg={theme.colors["bg.muted"].default}
                  >
                    <HStack spacing={3} align="center">
                      <Text fontWeight="bold">{event.date}</Text>
                      <Text>{event.time}</Text>
                      <Text>{event.location}</Text>
                      <Text>{event.status}</Text>
                    </HStack>
                  </Box>
                ))}
              </VStack>
            </Collapse>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default OrderStatus;
