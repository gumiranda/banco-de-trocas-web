"use client"; import { Box, Head } from "@/shared/ui";
import { EditImovelForm } from "@/slices/appointments/features/imovel/edit";
import { ImovelProps } from "@/slices/appointments/entidades/imovel";
type ImovelEditProps = {
  data: ImovelProps;
  id: string;
};
export const ImovelEditPage = ({ data, id }: ImovelEditProps) => {
  const props = { imovel: data };
  return (
    <>
      <Head
        title={"Belezix Admin | Imovels"}
        description="Página de edição de imovels do painel de Admin Belezix"
      />
       <Box flex="1" borderRadius={8} bg="secondary.500" p="8">
        <EditImovelForm {...props} />
      </Box>
    </>
  );
};
