"use client";
import { useUi } from "@/shared/libs";
import { EditImovelFormProps } from "./EditImovelForm";
import {
  EditImovelFormData,
  SubmitEditImovelHandler,
  useEditImovelLib,
} from "./editImovel.lib";
import { useRouter } from "next/navigation";
import { api } from "@/shared/api";
import { useMutation } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export const useEditImovel = (props: EditImovelFormProps) => {
  const { t } = useTranslation(["PAGES"]);
  const { showModal } = useUi();
  const { imovel: currentImovel } = props;
  const [active, setActive] = useState(false);

  const router = useRouter();
  const editImovel = useMutation({
    mutationFn: async (imovel: EditImovelFormData) => {
      try {
        const { data } = await api.patch(`/imovel/update?_id=${currentImovel._id}`, {
          ...imovel,
          updatedAt: new Date(),
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
            operation: t("PAGES:MESSAGES.edit", {
              defaultValue: "editada",
            }),
            defaultValue:
              "Categoria editada com sucesso, você será redirecionado para a lista de categorias",
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
  const { register, handleSubmit, formState } = useEditImovelLib(props);
  const handleEditImovel: SubmitEditImovelHandler = async (
    values: EditImovelFormData
  ) => {
    await editImovel.mutateAsync({ ...values, active });
  };
  return { formState, register, handleSubmit, handleEditImovel, active, setActive };
};
