import {
  Box,
  VStack,
  HStack,
  Text,
  Avatar,
  Image,
  Icon,
  Divider,
  Badge,
  Button,
  Stack,
  Tooltip,
} from "@chakra-ui/react";
import { StarIcon, PhoneIcon, EmailIcon } from "@chakra-ui/icons";

export const RatingCard = ({
  starsAvg,
  numberOfRatings,
  title,
  providerName,
  providerDescription,
  providerLocation,
  providerPhoto,
  services,
  contactPhone,
  contactEmail,
  reviews,
}) => {
  const ratingName = isNaN(Number(starsAvg)) ? 5 : Math.floor(Number(starsAvg));
  const starsFormatted = isNaN(Number(starsAvg)) ? 5 : Number(starsAvg).toFixed(2);

  return (
    <Box
      maxW="lg"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={4}
      boxShadow="lg"
      bg="white"
      mx="auto"
      my={4}
      _hover={{ boxShadow: "xl" }}
      transition="all 0.3s"
    >
      <VStack spacing={4} textAlign="center">
        <Avatar
          size="2xl"
          name={providerName}
          src={providerPhoto}
          mb={4}
          showBorder={true}
          borderColor="teal.500"
        />
        <Text fontSize="2xl" fontWeight="bold" color="teal.500">
          {providerName}
        </Text>
        <Text fontSize="md" color="gray.500">
          {providerLocation}
        </Text>
        <Text fontSize="sm" color="gray.600" px={8}>
          {providerDescription}
        </Text>
        <Divider borderColor="teal.500" />
        <HStack spacing={1} mt={2} justifyContent="center">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < ratingName ? "yellow.500" : "gray.300"}
                boxSize={6}
                transition="color 0.2s"
                _hover={{ color: "yellow.400" }}
              />
            ))}
          <Text fontSize="lg" color="gray.600">
            {starsFormatted ?? "5.0"}
          </Text>
          <Text fontSize="sm" color="gray.500">
            ({numberOfRatings ?? 0} avaliações)
          </Text>
        </HStack>
        <Divider borderColor="teal.500" />
        <VStack spacing={2} align="stretch" w="full">
          <Text fontSize="lg" fontWeight="bold" color="teal.500">
            Serviços oferecidos
          </Text>
          <HStack wrap="wrap" justifyContent="center" spacing={2}>
            {services.map((service, index) => (
              <Badge key={index} colorScheme="teal" variant="subtle" p={2}>
                {service}
              </Badge>
            ))}
          </HStack>
        </VStack>
        <Divider borderColor="teal.500" />
        <VStack spacing={2} align="stretch" w="full">
          <Text fontSize="lg" fontWeight="bold" color="teal.500">
            Contato
          </Text>
          <HStack justifyContent="center">
            <PhoneIcon color="teal.500" />
            <Text fontSize="sm" color="gray.600">
              {contactPhone}
            </Text>
          </HStack>
          <HStack justifyContent="center">
            <EmailIcon color="teal.500" />
            <Text fontSize="sm" color="gray.600">
              {contactEmail}
            </Text>
          </HStack>
        </VStack>
        <Divider borderColor="teal.500" />
        <VStack spacing={4} align="stretch" w="full">
          <Text fontSize="lg" fontWeight="bold" color="teal.500">
            Avaliações detalhadas
          </Text>
          {reviews.map((review, index) => (
            <Box
              key={index}
              p={4}
              borderWidth="1px"
              borderRadius="lg"
              bg="gray.50"
              _hover={{ bg: "gray.100" }}
              transition="background-color 0.3s"
            >
              <HStack spacing={2}>
                <Avatar size="sm" name={review.reviewerName} src={review.reviewerPhoto} />
                <VStack align="start" spacing={1}>
                  <Text fontSize="sm" fontWeight="bold" color="gray.700">
                    {review.reviewerName}
                  </Text>
                  <HStack spacing={1}>
                    {Array(5)
                      .fill("")
                      .map((_, i) => (
                        <StarIcon
                          key={i}
                          color={i < review.rating ? "yellow.500" : "gray.300"}
                          boxSize={4}
                        />
                      ))}
                  </HStack>
                </VStack>
              </HStack>
              <Text fontSize="sm" color="gray.600" mt={2}>
                {review.text}
              </Text>
            </Box>
          ))}
        </VStack>
        <Button colorScheme="teal" mt={4} _hover={{ bg: "teal.600" }}>
          Ver mais avaliações
        </Button>
      </VStack>
    </Box>
  );
};
