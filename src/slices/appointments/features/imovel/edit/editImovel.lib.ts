import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { EditImovelFormProps } from "./EditImovelForm";
export type EditImovelFormData = {
  name: string;
  description: string;
  city: string;
  uf: string;
  active?: boolean;
};

export type SubmitEditImovelHandler = SubmitHandler<EditImovelFormData>;

export const editImovelFormSchema = yup.object({
  name: yup.string().required("Título do imóvel é obrigatório"),
  description: yup.string().required("Descrição é obrigatória"),
  city: yup.string().required("Cidade é obrigatória"),
  uf: yup.string().required("Estado é obrigatório"),
});
export type YupSchema = yup.InferType<typeof editImovelFormSchema>;

export const useEditImovelLib = (props: EditImovelFormProps) => {
  const { imovel: currentImovel } = props;
  const formProps = useForm<YupSchema>({
    resolver: yupResolver(editImovelFormSchema),
    defaultValues: {
      name: currentImovel?.name ?? "",
    },
  });
  return { ...formProps };
};
