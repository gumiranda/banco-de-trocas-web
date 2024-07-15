import { config } from "@/application/config";
import { ImovelCreatePage } from "@/slices/appointments/screens/imovel/create";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `${config.systemName} | Criar Imovel`,
  description: `Página de criação de Imóveis do ${config.systemName}. Aqui você pode criar imovel.`,
};
export default ImovelCreatePage;
