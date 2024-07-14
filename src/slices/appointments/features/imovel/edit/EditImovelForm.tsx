import { ImovelProps } from "@/slices/appointments/entidades/imovel";
import { useEditImovel } from "./editImovel.hook";
import { BoxCreateItem, FormControl, GenericDetailsItem, GridForm } from "@/shared/ui";
import { useTranslation } from "react-i18next";

export interface EditImovelFormProps {
  imovel: ImovelProps;
}
export const EditImovelForm = ({ imovel }: EditImovelFormProps) => {
  const { t } = useTranslation("PAGES");

  const { formState, register, handleSubmit, handleEditImovel } = useEditImovel({
    imovel,
  });
  return (
    <BoxCreateItem
      onSubmit={handleSubmit(handleEditImovel)}
      title={"Editar imovel"}
      isLoadingSaveButton={formState.isSubmitting}
      cancelRoute={"/imovels/1"}
    >
      <GenericDetailsItem
        item={imovel}
        fields={[
          { id: "_id", label: "Id" },
          {
            id: "name",
            label: t("PAGES:FIELDS.name", {
              defaultValue: "Nome",
            }),
          },
          { id: "createdById", label: "Id do criador" },
          {
            id: "createdAt",
            label: t("PAGES:FIELDS.createdAt", {
              defaultValue: "Data de criação",
            }),
          },
        ]}
      />
      <GridForm>
        <FormControl
          label="Nome da imovel"
          error={formState.errors.name}
          {...register("name")}
        />
      </GridForm>
    </BoxCreateItem>
  );
};
