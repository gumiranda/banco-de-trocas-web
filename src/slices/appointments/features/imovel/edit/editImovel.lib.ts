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
  price?: number;
  salePrice?: number;
};

export type SubmitEditImovelHandler = SubmitHandler<EditImovelFormData>;

export const editImovelFormSchema = yup.object({
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
export type YupSchema = yup.InferType<typeof editImovelFormSchema>;

export const useEditImovelLib = (props: EditImovelFormProps) => {
  const { imovel: currentImovel } = props;
  const formProps = useForm<YupSchema>({
    resolver: yupResolver(editImovelFormSchema),
    defaultValues: {
      name: currentImovel?.name ?? "",
      description: currentImovel?.description ?? "",
      city: currentImovel?.city ?? "",
      uf: currentImovel?.uf ?? "",
      price: currentImovel?.price ?? 0,
      salePrice: currentImovel?.salePrice ?? 0,
    },
  });
  return { ...formProps };
};
