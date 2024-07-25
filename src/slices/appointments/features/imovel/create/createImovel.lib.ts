import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
export type CreateImovelFormData = {
  name: string;
  description: string;
  city: string;
  uf: string;
  active?: boolean;
  price?: number;
  salePrice?: number;
};

export type SubmitCreateImovelHandler = SubmitHandler<CreateImovelFormData>;

export const createImovelFormSchema = yup.object({
  name: yup.string().required("Título do imóvel é obrigatório"),
  description: yup.string().required("Descrição é obrigatória"),
  city: yup.string().required("Cidade é obrigatória"),
  uf: yup.string().required("Estado é obrigatório"),
  price: yup
    .number()
    .typeError("Digite números decimais utilizando o ponto")
    .notRequired()
    .test("is-decimal", "Valor inválido", (value) => !isNaN(value as number)),
  salePrice: yup
    .number()
    .typeError("Digite números decimais utilizando o ponto")
    .notRequired()
    .test("is-decimal", "Valor inválido", (value) => !isNaN(value as number)),
});
export type YupSchema = yup.InferType<typeof createImovelFormSchema>;

export const useCreateImovelLib = () => {
  const formProps = useForm<YupSchema>({
    resolver: yupResolver(createImovelFormSchema),
    defaultValues: {
      name: "",
      description: "",
      city: "",
      uf: "",
      price: 0,
      salePrice: 0,
    },
  });
  return { ...formProps };
};
