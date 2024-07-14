import { getUserById } from "@/slices/general/entidades/user/user.api";
import { getCookies, parseCookies } from "@/shared/libs/utils";
export const revalidate = 3000;

import { config } from "@/application/config";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import { UserEditPage } from "@/slices/general/screens/user/edit";
import { getServices } from "@/slices/appointments/entidades/service/service.api";
import { getOwners } from "@/slices/appointments/entidades/owner";

export const metadata: Metadata = {
  title: `${config.systemName} | Editar Profissional`,
  description: `Página de edição de profissionals do ${config.systemName}. Aqui você pode editar profissional.`,
};

async function getData(id) {
  const allCookies = getCookies();
  const parsedCookies = parseCookies(allCookies);
  if (!parsedCookies?.["belezixadmin.token"]) {
    return null;
  }
  const [data] = await Promise.all([getUserById(id, parsedCookies)]);
  if (!data) {
    return null;
  }
  return { data };
}
export default async function Page({ params: { id } }: { params: { id: string } }) {
  const { data } = (await getData(id)) || {};
  if (!data) {
    redirect("/login");
  }
  return (
    <UserEditPage
      data={data}
      id={id}
      service={{ services: [], totalCount: 0, next: 0, prev: 0 }}
      owner={{ owners: [], totalCount: 0, next: 0, prev: 0 }}
    />
  );
}
