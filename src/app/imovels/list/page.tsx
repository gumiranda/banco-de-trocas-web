import { config } from "@/application/config";
import { ImovelGridPage } from "@/slices/appointments/screens/imovel/list/grid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${config.systemName} | Imóveis`,
  description: `Página de listagem de Imóveis do ${config.systemName}. Aqui você pode ver as Imóveis em lista infinita.`,
};
export default ImovelGridPage;
