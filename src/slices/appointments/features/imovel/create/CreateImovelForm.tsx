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
          label="Nome da imovel"
          error={formState.errors.name}
          {...register("name")}
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
