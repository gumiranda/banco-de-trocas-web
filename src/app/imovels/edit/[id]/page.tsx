import { getImovelById } from "@/slices/appointments/entidades/imovel/imovel.api";
import { getCookies, parseCookies } from "@/shared/libs/utils";
export const revalidate = 3000;

import { config } from "@/application/config";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import { ImovelEditPage } from "@/slices/appointments/screens/imovel/edit";

export const metadata: Metadata = {
  title: `${config.systemName} | Editar Imovel`,
  description: `Página de edição de imovels do ${config.systemName}. Aqui você pode editar imovel.`,
};

async function getData(id) {
  const allCookies = getCookies();
  const parsedCookies = parseCookies(allCookies);
  if (!parsedCookies?.["belezixadmin.token"]) {
    return null;
  }
  const res = await getImovelById(id, parsedCookies);
  if (!res) {
    return null;
  }
  return res;
}
export default async function Page({ params: { id } }: { params: { id: string } }) {
  const data = await getData(id);
  if (!data) {
    redirect("/login");
  }
  return <ImovelEditPage data={data} id={id} />;
}
