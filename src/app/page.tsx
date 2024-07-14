import { RealStatePage } from "@/slices/landing-page/pages/real-state/RealStatePage";
//import { NextSeo } from "next-seo";

export default async function Page() {
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
      <RealStatePage />
    </>
  );
}
