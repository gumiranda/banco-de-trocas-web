"use client"; import { Box, Head } from "@/shared/ui";
import { ImovelProps } from "@/slices/appointments/entidades/imovel";
import { CreateImovelForm } from "@/slices/appointments/features/imovel/create";

export const ImovelCreatePage = () => {
  return (
    <>
      <Head
        title={"Belezix Admin | Imovels"}
        description="Página de criação de imovels do painel de Admin Belezix"
      />
       <Box flex="1" borderRadius={8} bg="secondary.500" p="8">
        <CreateImovelForm />
      </Box>
    </>
  );
};
