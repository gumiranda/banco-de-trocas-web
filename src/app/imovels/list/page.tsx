import { config } from "@/application/config";
import { ImovelGridPage } from "@/slices/appointments/screens/imovel/list/grid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${config.systemName} | Imovels`,
  description: `Página de listagem de imovels do ${config.systemName}. Aqui você pode ver as imovels em lista infinita.`,
};
export default ImovelGridPage;
