import { ImovelSantos } from "@/slices/landing-page/pages/real-state/ImovelSantos";
import type { Metadata } from "next/types";
export const metadata: Metadata = {
  title: `Banco de trocas - Anuncie seu Imóvel`,
  description: `Página inicial do site do corretor de imóveis Gilson Gonçalves de Aguiar. Anuncie seu imóvel com a ajuda de um profissional experiente.`,
};
export default async function Page() {
  return <ImovelSantos slug="sp" />;
}
