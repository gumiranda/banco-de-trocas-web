import { getImovels } from "@/slices/appointments/entidades/imovel/imovel.api";
import { parseCookies, getCookies } from "@/shared/libs/utils";
import { ImovelListTablePage } from "@/slices/appointments/screens/imovel/list/table/ImovelListTablePage";
export const revalidate = 3000;
async function getData(pageNumber) {
  const allCookies = getCookies();
  if (!allCookies) return null;
  const res = await getImovels(pageNumber, parseCookies(allCookies), {});
  if (!res) {
    throw new Error("Erro ao buscar dados");
  }
  return res;
}

export default async function Page({ params: { page } }: { params: { page: string } }) {
  const pageNumber = Number(page ?? 1);
  const data = await getData(pageNumber);
  if (!data) {
    return null;
  }
  return <ImovelListTablePage data={data} page={pageNumber} />;
}
