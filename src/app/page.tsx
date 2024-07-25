import { getCookies, parseCookies } from "@/shared/libs/utils";
import { getImovels } from "@/slices/appointments/entidades/imovel";
import { RealStatePage } from "@/slices/landing-page/pages/real-state/RealStatePage";
import type { Metadata } from "next";
//import { NextSeo } from "next-seo";
export const metadata: Metadata = {
  title: `Banco de trocas - Anuncie seu Imóvel`,
  description: `Página inicial do site do corretor de imóveis Gilson Gonçalves de Aguiar. Anuncie seu imóvel com a ajuda de um profissional experiente.`,
};
async function getData(pageNumber) {
  const allCookies = getCookies();
  if (!allCookies) return null;
  const res = await getImovels(pageNumber, parseCookies(allCookies), { active: true });
  if (!res) {
    throw new Error("Erro ao buscar dados");
  }
  return res;
}
export default async function Page() {
  const data = await getData(1);

  return (
    <>
      {/* <NextSeo
        title="Gilson Aguiar Corretor - Anuncie seu Imóvel"
        description="Página inicial do site do corretor de imóveis Gilson Gonçalves de Aguiar."
        openGraph={{
          url: "https://www.bancodetrocas.com.br/",
          title: "Gilson Aguiar Corretor - Anuncie seu Imóvel",
          description:
            "Página inicial do site do corretor de imóveis Gilson Gonçalves de Aguiar.",
          images: [
            // {
            //   url: "https://www.bancodetrocas.com.br/og-image-home.jpg",
            //   width: 800,
            //   height: 600,
            //   alt: "Imagem de Gilson Gonçalves de Aguiar na página inicial",
            // },
          ],
          site_name: "Gilson Gonçalves de Aguiar",
        }}
      /> */}
      <RealStatePage data={data} />
    </>
  );
}
