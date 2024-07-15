import { ImovelProps } from "@/slices/appointments/entidades/imovel";
import { useCreateImovel } from "./createImovel.hook";
import { BoxCreateItem, FormControl, Checkbox, GridForm } from "@/shared/ui";

export const CreateImovelForm = () => {
  const { formState, register, handleSubmit, handleCreateImovel, active, setActive } =
    useCreateImovel();
  return (
    <BoxCreateItem
      onSubmit={handleSubmit(handleCreateImovel)}
      title={"Criar imovel"}
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
  );
};
