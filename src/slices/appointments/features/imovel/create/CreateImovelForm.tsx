import { ImovelProps } from "@/slices/appointments/entidades/imovel";
import { useCreateImovel } from "./createImovel.hook";
import { BoxCreateItem, FormControl, Checkbox, GridForm } from "@/shared/ui";
import { PhotoUpload } from "../PhotoUpload";
import { Heading } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export const CreateImovelForm = () => {
  const { t } = useTranslation(["PAGES"]);

  const {
    formState,
    register,
    handleSubmit,
    handleCreateImovel,
    active,
    setActive,
    setPhotos,
    photos,
  } = useCreateImovel();
  return (
    <>
      {photos?.length === 0 && (
        <>
          <Heading size="lg" mb="4">
            Adicione as fotos do imóvel aqui
          </Heading>
          <PhotoUpload setPhotos={setPhotos} />
        </>
      )}
      {photos?.length > 0 && (
        <BoxCreateItem
          onSubmit={handleSubmit(handleCreateImovel)}
          title={"Cadastrar imóvel"}
          isLoadingSaveButton={formState.isSubmitting}
          cancelRoute={"/imovels/1"}
        >
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
            <Checkbox
              label="Ativo"
              colorScheme="green"
              isChecked={active}
              onChange={(e) => {
                e.preventDefault();
                setActive(e.target.checked);
              }}
            />
          </GridForm>
        </BoxCreateItem>
      )}
    </>
  );
};
