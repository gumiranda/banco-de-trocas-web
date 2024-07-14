import { Container, SimpleGrid } from "@/shared/ui";
import { Divider, useToast } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { ProfileHeader, RatingCard } from "./components";

export const ProfilePage = () => {
  const toast = useToast();

  const [userData, setUserData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    isActive: true,
  });

  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);

  return (
    <Container maxW="container.md" p="4" bg="gray.900" borderRadius="md" boxShadow="lg">
      <ProfileHeader userData={userData} items={items} />
      <Divider borderColor="gray.600" mb="8" />
      <RatingCard
        starsAvg={4.5}
        numberOfRatings={120}
        title="Avaliações"
        providerName="Maria dos Cabelos"
        providerDescription="Especialista em cortes, tinturas e tratamentos capilares."
        providerLocation="São Paulo, SP"
        providerPhoto="https://via.placeholder.com/150"
        services={["Corte", "Tintura", "Tratamento"]}
        contactPhone="(11) 1234-5678"
        contactEmail="maria@exemplo.com"
        reviews={[
          {
            reviewerName: "João",
            reviewerPhoto: "https://via.placeholder.com/50",
            rating: 5,
            text: "Excelente profissional! Adorei o corte.",
          },
          {
            reviewerName: "Ana",
            reviewerPhoto: "https://via.placeholder.com/50",
            rating: 4,
            text: "Muito boa, mas atrasou um pouco.",
          },
        ]}
      />
    </Container>
  );
};
