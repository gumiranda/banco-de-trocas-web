import { useAuth, useUi } from "@/shared/libs";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useGetInfiniteImovels } from "./imovel.lib";
import { endOfDay, startOfDay } from "date-fns";
import { queryClientInstance, setupAPIClient } from "@/shared/api";
import { useTranslation } from "react-i18next";

export const useImovelInfiniteList = () => {
  const { t } = useTranslation(["PAGES"]);

  const router = useRouter();
  const queryClient = useQueryClient();
  const { logout = () => {} } = useAuth() || {};
  const { showModal, loading } = useUi();
  const [selectedDate, setSelectedDate] = useState<any>(new Date());
  const [endDate, setEndDate] = useState<any>(new Date());
  const [status, setStatus] = useState<any>(null);

  const query = {
    active: true,
    // initDate: startOfDay(new Date(selectedDate)),
    // endDate: endOfDay(new Date(endDate)),
  };

  const all = useGetInfiniteImovels(
    {
      getNextPageParam: (lastPage: any) => lastPage.next,
      getPreviousPageParam: (lastPage: any) => lastPage.prev,
      initialPageParam: 1, // or provide a suitable initial value
    },
    { ...query }
  );
  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: ["imovelsInfinite", query] });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDate, endDate, status]);
  const { data, error, fetchNextPage, hasNextPage, isFetchingNextPage, isFetching }: any =
    all || {};
  const firstPage = data?.pages?.[0];
  const total = firstPage?.totalCount ?? 0;
  useEffect(() => {
    if ([403, 401, 500].includes(error?.response?.status)) {
      logout?.();
      router.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error?.response?.status]);
  const deleteImovel = useMutation({
    mutationFn: async (imovelsToDelete: any) => {
      try {
        if (imovelsToDelete?.length > 0) {
          return Promise.all(
            imovelsToDelete?.map?.((imovel: any) =>
              setupAPIClient().delete(`/imovel/delete?_id=${imovel._id}`)
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
      router.push("/clients/1");
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
  });
  const deleteSelectedAction = async (item: any) => {
    deleteImovel.mutateAsync([item] as any);
  };
  const imovelList =
    data?.pages
      ?.map?.((page: any) => page?.imovels)
      ?.reduce?.((a: any, b: any) => a.concat(b)) ??
    data ??
    [];
  return {
    deleteSelectedAction,
    isFetching,
    error,
    total,
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    loading,
    selectedDate,
    setSelectedDate,
    imovelList,
    endDate,
    setEndDate,
    status,
    setStatus,
  };
};
