import { Flex, GenericDetailsItem, Text, Button } from "@/shared/ui";
import { Heading, Icon, Img } from "@chakra-ui/react";
import NextLink from "next/link";
import { RiAddLine } from "react-icons/ri";
import { ImovelProps } from "../imovel.model";
import { useTranslation } from "react-i18next";

type ImovelDetailsProps = {
  imovel: ImovelProps;
};

export const ImovelDetails = ({ imovel }: ImovelDetailsProps) => {
  const { t } = useTranslation("PAGES");
  return (
    <>
      <Flex mb="8" justify="space-between" align="center">
        <Heading size="lg" fontWeight={"normal"}>
          Imóvel {imovel?.name}
        </Heading>
        <NextLink passHref href={`/imovels/edit/${imovel?._id}`}>
          <Button
            size="sm"
            fontSize={"sm"}
            colorScheme="green"
            leftIcon={<Icon fontSize="20" as={RiAddLine} />}
          >
            Editar
          </Button>
        </NextLink>
      </Flex>
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
          {
            id: "description",
            label: "Descrição",
          },
        ]}
      />
      {imovel?.photos?.map?.((image, ix) => (
        <Img key={ix} src={image?.url} alt="Imagem do Imóvel" borderRadius="md" mt={4} />
      ))}
    </>
  );
};
