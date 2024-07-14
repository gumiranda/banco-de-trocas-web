"use client";
import { useMutation } from "@tanstack/react-query";
import { useUi } from "@/shared/libs";
import { api } from "@/shared/api";
import { queryClientInstance } from "@/shared/api";
import { useRouter } from "next/navigation";
import { useGetInfiniteImovels } from "@/slices/appointments/entidades/imovel/imovel.lib";
import { useTranslation } from "react-i18next";

export const useImovelInfiniteList = () => {
  const { t } = useTranslation(["PAGES"]);

  const router = useRouter();
  const { showModal, loading } = useUi();
  const all = useGetInfiniteImovels({
    getNextPageParam: (lastPage: any) => lastPage.next,
    getPreviousPageParam: (firstPage: any) => firstPage.prev,
  } as any);
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  }: any = all || {};
  const firstPage: any = data?.pages[0];
  const total: any = (firstPage?.totalCount as any) || {};
  const deleteSelectedAction = async (item: any) => {
    deleteImovel.mutateAsync([item] as any);
  };
  const deleteImovel = useMutation({
    mutationFn: async (imovelsToDelete: any = []) => {
      try {
        if (imovelsToDelete?.length > 0) {
          return Promise.all(
            imovelsToDelete?.map?.((imovel: any) =>
              api.delete(`/imovel/delete?_id=${imovel._id}`)
            )
          );
        }
        return null;
      } catch (error) {
        showModal({
          content: t("PAGES:MESSAGES.errorMessage", {
            defaultValue:
              "Ocorreu um erro inesperado no servidor, tente novamente mais tarde",
          }),
          title: t("PAGES:MESSAGES.internalServerError", {
            defaultValue: "Erro no servidor",
          }),
          type: "error",
        });
      }
    },
    onSuccess: () => {
      queryClientInstance.invalidateQueries(["imovelsInfinite", data?.pages ?? 1] as any);
      queryClientInstance.refetchQueries(["imovelsInfinite", data?.pages] as any);
      router.refresh();
    },
    onError: () => {
      showModal({
        content: t("PAGES:MESSAGES.errorMessage", {
          defaultValue:
            "Ocorreu um erro inesperado no servidor, tente novamente mais tarde",
        }),
        title: t("PAGES:MESSAGES.internalServerError", {
          defaultValue: "Erro no servidor",
        }),
        type: "error",
      });
    },
    retry: 3,
  } as any);
  return {
    deleteSelectedAction,
    isFetching,
    error,
    total,
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
    loading,
  };
};
