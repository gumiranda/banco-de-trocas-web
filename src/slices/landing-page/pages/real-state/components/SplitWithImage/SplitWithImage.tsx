import React from "react";
import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  Button,
  Input,
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IoAnalyticsSharp, IoLogoBitcoin, IoSearchSharp } from "react-icons/io5";
import { Feature } from "@/shared/ui/atoms/Feature";

// Define the schema for validation
const schema = yup.object().shape({
  email: yup.string().email("Email inválido").required("Email é obrigatório"),
});

export const SplitWithImage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const toast = useToast();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to subscribe");
      }

      reset();
      toast({
        title: "Success",
        description: "You have successfully subscribed.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Container maxW={"5xl"} py={6}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Heading>Facilitando a compra e venda de imóveis</Heading>
          <Text color={"gray.400"} fontSize={"lg"}>
            Negociar seu imóvel não precisa ser complicado! O Banco de Trocas Imóveis
            cuida de tudo para você, garantindo negociações ágeis e sem complicações.
            Entre em contato com nosso corretor credenciado Gilson Gonçalves de Aguiar
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider borderColor={useColorModeValue("gray.100", "gray.700")} />
            }
          >
            <Feature
              icon={<Icon as={IoAnalyticsSharp} color={"yellow.500"} w={5} h={5} />}
              iconBg={useColorModeValue("yellow.100", "yellow.900")}
              text={"Compra e venda sem burocracia"}
            />
            <Feature
              icon={<Icon as={IoLogoBitcoin} color={"green.500"} w={5} h={5} />}
              iconBg={useColorModeValue("green.100", "green.900")}
              text={"Sistema de trocas com volta ou recebimento de valores"}
            />
            <Feature
              icon={<Icon as={IoSearchSharp} color={"purple.500"} w={5} h={5} />}
              iconBg={useColorModeValue("purple.100", "purple.900")}
              text={"Análise de mercado com as melhores opções"}
            />
          </Stack>
          <Box as="form" onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={errors.email as any}>
              <FormLabel>Email</FormLabel>
              <Input placeholder="Digite seu e-mail" {...register("email")} mt={2} />
              <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
            </FormControl>
            <Button colorScheme="teal" mt={2} type="submit" isLoading={isSubmitting}>
              Inscrever-se
            </Button>
          </Box>
        </Stack>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={
              "https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            }
            objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
};
