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
      title={"Editar imóvel"}
      isLoadingSaveButton={formState.isSubmitting}
      cancelRoute={"/imovels/1"}
    >
      <GenericDetailsItem
        item={imovel}
        fields={[
          { id: "_id", label: "Id" },
          {
            id: "name",
            label: "Título",
          },
          {
            id: "description",
            label: "Descrição",
          },
          {
            id: "cityLabel",
            label: "Localização",
          },
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
          label="Título do imovel"
          error={formState.errors.name}
          {...register("name")}
        />
        <FormControl
          label="Descrição do imovel"
          textarea
          error={formState.errors.description}
          {...register("description")}
        />
        <FormControl
          label="Cidade do imovel"
          error={formState.errors.city}
          {...register("city")}
        />
        <FormControl
          label="Estado do imovel"
          error={formState.errors.uf}
          {...register("uf")}
        />
      </GridForm>
    </BoxCreateItem>
  );
};
