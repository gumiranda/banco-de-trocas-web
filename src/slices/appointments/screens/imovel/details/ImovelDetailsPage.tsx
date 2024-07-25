"use client";
import { Box, Head } from "@/shared/ui";
import { ImovelDetails } from "@/slices/appointments/entidades/imovel/details";
import { ImovelProps } from "@/slices/appointments/entidades/imovel";
import { Header } from "@/slices/landing-page/pages/real-state/components/landing2/Header";
type ImovelDetailsProps = {
  data: ImovelProps;
  id: string;
};
export const ImovelDetailsPage = ({ data }: ImovelDetailsProps) => {
  const props = { imovel: data };
  return (
    <>
      <Header />
      <Head
        title={"Belezix Admin | Imovels"}
        description="Página de detalhes de imovels do painel de Admin Belezix"
      />
      <Box flex="1" borderRadius={8} bg="secondary.500" p="8">
        <ImovelDetails {...props} />
      </Box>
    </>
  );
};
