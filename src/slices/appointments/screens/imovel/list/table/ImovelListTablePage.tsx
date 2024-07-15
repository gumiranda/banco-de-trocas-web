"use client";
import { Box, GenericTable, Head, Pagination } from "@/shared/ui";
import { GetImovelsResponse } from "@/slices/appointments/entidades/imovel/imovel.api";
import { useImovelList } from "../imovelList.hook";
import { useTranslation } from "react-i18next";

type ImovelListTablePageProps = {
  data: GetImovelsResponse;
  page: number;
};
const Text = ({ id, ...data }: any) => {
  return <h1 data-testid={"h1TestId" + id}>{data[id]}</h1>;
};
export const ImovelListTablePage = ({ page = 0, data }: ImovelListTablePageProps) => {
  const { t } = useTranslation(["PAGES"]);
  const {
    imovels,
    setImovels,
    handlePrefetchImovel,
    deleteSelectedAction,
    total,
    setPage,
  } = useImovelList({
    page,
    initialData: data,
  });
  return (
    <>
      <Head
        title={"Belezix Admin | Imóveis"}
        description="Página de listagem de Imóveis do painel de Admin Belezix"
      />
      <Box borderRadius={8} bg="secondary.500" p="4" flexGrow="1">
        <GenericTable
          deleteSelectedAction={deleteSelectedAction}
          isLoading={false}
          items={imovels}
          fields={[
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
              displayKeyText: false,
              children: <Text />,
            },
          ]}
          setItems={setImovels}
          linkOnMouseEnter={handlePrefetchImovel}
          error={undefined}
          route={"/imovels"}
          routeDetails={"/imovels/details"}
          routeCreate={"/imovels/create"}
          routeList={"/imovels/list"}
          title={"Imóveis"}
        />
        <Pagination
          onPageChange={setPage}
          currentPage={page}
          totalCountOfRegisters={total}
        />
      </Box>
    </>
  );
};
