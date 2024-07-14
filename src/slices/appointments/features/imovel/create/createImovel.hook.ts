"use client";
import { useUi } from "@/shared/libs";
import {
  CreateImovelFormData,
  SubmitCreateImovelHandler,
  useCreateImovelLib,
} from "./createImovel.lib";
import { useRouter } from "next/navigation";
import { api } from "@/shared/api";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export const useCreateImovel = () => {
  const { t } = useTranslation(["PAGES"]);
  const { showModal } = useUi();
  const router = useRouter();
  const [active, setActive] = useState(false);
  const createImovel = useMutation({
    mutationFn: async (imovel: CreateImovelFormData) => {
      try {
        const { data } = await api.post("/imovel/add", {
          ...imovel,
        });
        if (!data) {
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
          return;
        }
        showModal({
          content: t("PAGES:MESSAGES.successMessage", {
            domain: t("PAGES:HOME_PAGE.imovel", {
              defaultValue: "Categoria",
            }),
            operation: t("PAGES:MESSAGES.create", {
              defaultValue: "criada",
            }),
            defaultValue:
              "Categoria criada com sucesso, você será redirecionado para a lista de categorias",
          }),
          title: t("PAGES:MESSAGES.success", {
            defaultValue: "Sucesso",
          }),
          type: "success",
        });
        router.push("/imovels/1");
        return data;
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
  });
  const { register, handleSubmit, formState } = useCreateImovelLib();
  const handleCreateImovel: SubmitCreateImovelHandler = async (
    values: CreateImovelFormData
  ) => {
    await createImovel.mutateAsync({ ...values, active });
  };
  return {
    formState,
    register,
    handleSubmit,
    handleCreateImovel,
    active,
    setActive,
  };
};
