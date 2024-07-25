import { getCookies, parseCookies } from "@/shared/libs/utils";
import { getImovels } from "@/slices/appointments/entidades/imovel";
import { ImoveisPage } from "@/slices/landing-page/pages/real-state/ImoveisPage";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: `Banco de trocas - Anuncie seu Imóvel`,
  description: `Página inicial do site do corretor de imóveis Gilson Gonçalves de Aguiar. Anuncie seu imóvel com a ajuda de um profissional experiente.`,
};
async function getData(pageNumber) {
  const allCookies = getCookies();
  if (!allCookies) return null;
  const res = await getImovels(pageNumber, parseCookies(allCookies), {
    active: true,
  });
  if (!res) {
    throw new Error("Erro ao buscar dados");
  }
  return res;
}
export default async function Page() {
  const data = await getData(1);
  return (
    <>
      <ImoveisPage data={data} />
    </>
  );
}
