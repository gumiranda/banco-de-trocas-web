"use client";
import { GetImovelsResponse } from "@/slices/appointments/entidades/imovel/imovel.api";
import { useState, useEffect } from "react";
import { useUi } from "@/shared/libs";
import { api, queryClientInstance } from "@/shared/api";
import { useMutation } from "@tanstack/react-query";
import { ImovelProps } from "@/slices/appointments/entidades/imovel";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
type ImovelListHook = {
  initialData: GetImovelsResponse;
  page: number;
};
export const useImovelList = (data: ImovelListHook) => {
  const { t } = useTranslation(["PAGES"]);

  const router = useRouter();
  const { showModal } = useUi();
  const [page, setPage] = useState(data.page);
  const [imovels, setImovels] = useState(data?.initialData?.imovels ?? []);
  const handlePrefetchImovel = async ({ _id: imovelId }: any) => {
    // await queryClientInstance.prefetchQuery(
    //   ["imovel", imovelId],
    //   async () => {
    //     const { data = null } =
    //       (await api.get(`/imovel/load?_id=${imovelId}`)) || {};
    //     return data;
    //   },
    //   { staleTime: 1000 * 60 * 10 },
    // );
  };
  const deleteImovel = useMutation({
    onSuccess: () => {
      queryClientInstance.invalidateQueries(["imovels", data.page] as any);
      queryClientInstance.refetchQueries(["imovels", data.page] as any);
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
    mutationFn: (async (imovelsToDelete: any = []) => {
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
    }) as any,
  });
  const deleteSelectedAction = async () => {
    deleteImovel.mutateAsync(
      imovels.filter((imovel: ImovelProps) => imovel.value) as any
    );
  };
  const changePage = (newpage: number) => {
    router.replace(`/imovels/${newpage}`);
  };
  useEffect(() => {
    setImovels(data?.initialData?.imovels ?? []);
  }, [data?.initialData?.imovels]);
  return {
    imovels,
    setImovels,
    handlePrefetchImovel,
    deleteSelectedAction,
    page,
    setPage: changePage,
    total: data?.initialData?.totalCount,
  };
};
