import { ImovelProps } from "@/slices/appointments/entidades/imovel";
import { useEditImovel } from "./editImovel.hook";
import {
  Box,
  BoxCreateItem,
  Checkbox,
  FormControl,
  GenericDetailsItem,
  GridForm,
  Text,
} from "@/shared/ui";
import { useTranslation } from "react-i18next";
import ReactHtmlParser from "react-html-parser";
import { useAuth } from "@/shared/libs";

export interface EditImovelFormProps {
  imovel: ImovelProps;
}
export const EditImovelForm = ({ imovel }: EditImovelFormProps) => {
  const { t } = useTranslation("PAGES");
  const { user = null } = useAuth() || {};
  const { formState, register, handleSubmit, handleEditImovel, active, setActive } =
    useEditImovel({
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
          {
            id: "name",
            label: "Título",
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
      <Box mt={4} color="gray.50" lineHeight="tall" fontSize="xl" ta="left">
        {ReactHtmlParser(imovel.description)}
      </Box>
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
        <FormControl
          label={t("PAGES:FIELDS.price", {
            defaultValue: "Valor do imóvel",
          })}
          error={formState.errors.price}
          {...register("price")}
        />
        <FormControl
          label={t("PAGES:FIELDS.finalPrice", {
            defaultValue: "Preço negociável",
          })}
          error={formState.errors.salePrice}
          {...register("salePrice")}
        />
        {user?.role === "admin" && (
          <Checkbox
            label="Ativo"
            colorScheme="green"
            isChecked={active}
            onChange={(e) => {
              e.preventDefault();
              setActive(e.target.checked);
            }}
          />
        )}
      </GridForm>
    </BoxCreateItem>
  );
};
