import { setupAPIClient } from "@/shared/api";
import { ImovelProps, imovelModel } from "./imovel.model";
export type GetImovelsResponse = {
  imovels: ImovelProps[];
  totalCount: number;
  next?: number;
  prev?: number;
};
const registerByPage = 10;
export const getImovels = async (
  page: number,
  ctx: any,
  params: any = {}
): Promise<GetImovelsResponse> => {
  const { data } = await setupAPIClient(ctx).get("/publicimovel/loadByPage", {
    params: { page, sortBy: "createdAt", typeSort: "desc", ...params },
  });
  const { imovels, total } = data || {};
  const totalCount = Number(total ?? 0);
  const lastPage = Number.isInteger(totalCount / registerByPage)
    ? totalCount / registerByPage
    : Math.floor(totalCount / registerByPage) + 1;
  const response = {
    imovels: imovels?.map?.((props: ImovelProps) => imovelModel(props).format()),
    totalCount,
  };
  if (lastPage > page) {
    Object.assign(response, { next: page + 1 });
  }
  if (page > 1) {
    Object.assign(response, { prev: page - 1 });
  }
  return response;
};
type InfiniteProps = {
  pageParam: number;
  ctx: any;
};
export const getInfiniteImovels = async (
  page,
  params: any
): Promise<GetImovelsResponse> => {
  return getImovels(page, null, params);
};
export const getImovelById = async (
  id: string,
  ctx: any
): Promise<ImovelProps | null> => {
  try {
    const { data } = await setupAPIClient(ctx).get("/publicimovel/load", {
      params: { _id: id },
    });
    if (!data) {
      return null;
    }
    return imovelModel(data).format();
  } catch (error) {
    return null;
  }
};
