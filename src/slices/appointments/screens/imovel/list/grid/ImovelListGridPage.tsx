"use client";
import { InfiniteList, GenericGrid, Head } from "@/shared/ui";
import { useImovelInfiniteList } from "../imovelInfiniteList.hook";
import { useImovelUi } from "@/slices/appointments/entidades/imovel/imovel.ui";
import { useTranslation } from "react-i18next";

export const ImovelGridPage = () => {
  const { t } = useTranslation("PAGES");

  const {
    isFetching,
    error,
    data: fetchData,
    fetchNextPage,
    hasNextPage,
    deleteSelectedAction,
    loading,
  } = useImovelInfiniteList();
  const imovelGridProps = {
    imovels:
      fetchData?.pages
        ?.map?.((page: any) => page?.imovels)
        ?.reduce?.((a: any, b: any) => a.concat(b)) ??
      fetchData ??
      [],
    isLoading: loading,
    error,
    isFetching,
    deleteSelectedAction,
    fields: [
      {
        id: "name",
        label: t("PAGES:FIELDS.name", {
          defaultValue: "Nome",
        }),
        displayKeyText: true,
      },
      {
        id: "createdAt",
        label: t("PAGES:FIELDS.createdAt", {
          defaultValue: "Data de criação",
        }),
        displayKeyText: true,
      },
    ],
  };
  const items =
    imovelGridProps?.imovels?.map?.((item: any) => ({
      item,
      fields: imovelGridProps.fields,
      mainField: "name",
    })) ?? [];
  const { renderItem } = useImovelUi({ deleteSelectedAction });
  return (
    <>
      <Head
        title={"Belezix Admin | Imovels"}
        description="Página de listagem de imovels do painel de Admin Belezix"
      />
      <InfiniteList
        hasNextPage={hasNextPage as any}
        fetchNextPage={fetchNextPage}
        entityName="imovels"
      >
        <GenericGrid
          items={items}
          renderItem={renderItem}
          route={"/imovels/list"}
          routeList={"/imovels/1"}
          routeCreate={"/imovels/create"}
          entityDisplayName={"Imovel"}
          title={"Imóveis"}
          {...imovelGridProps}
        />
      </InfiniteList>
    </>
  );
};
