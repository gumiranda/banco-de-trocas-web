import { Flex, GenericDetailsItem, Text, Button, GalleryHorizontal } from "@/shared/ui";
import { Heading, Icon, Img } from "@chakra-ui/react";
import NextLink from "next/link";
import { RiAddLine } from "react-icons/ri";
import { ImovelProps } from "../imovel.model";
import { useTranslation } from "react-i18next";
import ReactHtmlParser from "react-html-parser";

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
      <GalleryHorizontal
        photos={imovel?.photos?.map?.((item) => ({
          id: item?._id,
          src: item?.url,
          alt: item?.name ?? "imagem do imóvel",
        }))}
      />
      <Text mt={4} color="gray.50" lineHeight="tall" fontSize="xl" ta="left">
        {ReactHtmlParser(imovel.description)}
      </Text>
      <GenericDetailsItem
        item={imovel}
        fields={[
          {
            id: "name",
            label: "Imóvel",
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
    </>
  );
};
