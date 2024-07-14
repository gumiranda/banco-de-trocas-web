import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
export type CreateImovelFormData = {
  name: string;
  active?: boolean;
};

export type SubmitCreateImovelHandler = SubmitHandler<CreateImovelFormData>;

export const createImovelFormSchema = yup.object({
  name: yup.string().required("Nome é obrigatório"),
});
export type YupSchema = yup.InferType<typeof createImovelFormSchema>;

export const useCreateImovelLib = () => {
  const formProps = useForm<YupSchema>({
    resolver: yupResolver(createImovelFormSchema),
    defaultValues: {
      name: "",
    },
  });
  return { ...formProps };
};
