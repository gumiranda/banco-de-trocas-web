import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { EditImovelFormProps } from "./EditImovelForm";
export type EditImovelFormData = {
  name: string;
};

export type SubmitEditImovelHandler = SubmitHandler<EditImovelFormData>;

export const editImovelFormSchema = yup.object({
  name: yup.string().required("Nome é obrigatório"),
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
