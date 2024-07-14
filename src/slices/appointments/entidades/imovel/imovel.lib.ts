import { getImovels, getInfiniteImovels } from "./imovel.api";
import {
  useQuery,
  UseQueryOptions,
  useInfiniteQuery,
  UseInfiniteQueryOptions,
} from "@tanstack/react-query";
export const useGetImovels = (
  page: number,
  options?: UseQueryOptions,
  ctx?: any
): any => {
  return useQuery({
    queryKey: ["Imovels", page],
    queryFn: () => getImovels(page, ctx),
    staleTime: 1000 * 5,
    ...options,
  } as any);
};
export const useGetInfiniteImovels = (
  options: Omit<UseInfiniteQueryOptions, "queryKey">
) => {
  return useInfiniteQuery({
    queryKey: ["imovelsInfinite"],
    queryFn: ({ pageParam = 1 }: any) => getInfiniteImovels(pageParam),
    ...options,
  });
};
