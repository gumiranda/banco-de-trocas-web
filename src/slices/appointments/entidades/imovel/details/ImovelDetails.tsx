import {
  Flex,
  GenericDetailsItem,
  Text,
  Button,
  GalleryHorizontal,
  Box,
  Container,
} from "@/shared/ui";
import { Heading, Icon, Img, keyframes } from "@chakra-ui/react";
import NextLink from "next/link";
import { RiAddLine } from "react-icons/ri";
import { ImovelProps } from "../imovel.model";
import { useTranslation } from "react-i18next";
import ReactHtmlParser from "react-html-parser";
import { useAuth } from "@/shared/libs";
import { getWhatsappLink } from "@/slices/landing-page/utils";
import { fonts } from "@/app/fonts";
import { Link } from "@chakra-ui/next-js";

type ImovelDetailsProps = {
  imovel: ImovelProps;
};
const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-30px); }
  60% { transform: translateY(-15px); }
`;
export const ImovelDetails = ({ imovel }: ImovelDetailsProps) => {
  const { t } = useTranslation("PAGES");
  const { user = null } = useAuth() || {};

  return (
    <>
      <Flex mb="8" justify="space-between" align="center">
        <Heading size="lg" fontWeight={"normal"}>
          Imóvel {imovel?.name}
        </Heading>
        {(user?.role === "admin" || user?._id === imovel?.createdById) && (
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
        )}
      </Flex>
      <GalleryHorizontal
        photos={imovel?.photos?.map?.((item) => ({
          id: item?._id,
          src: item?.url,
          alt: item?.name ?? "imagem do imóvel",
        }))}
      />
      <Box mt={4} color="gray.50" lineHeight="tall" fontSize="xl" ta="left">
        {ReactHtmlParser(imovel.description)}
      </Box>
      <Container mt={5} mb={20}>
        <Link
          size="lg"
          w={"100%"}
          fontFamily={fonts.inter.style.fontFamily}
          href={getWhatsappLink(`Olá, tenho interesse no imóvel ${imovel?.name}.`)}
        >
          <Button
            size="lg"
            bgColor="primary.700"
            color="white"
            px="0"
            _hover={{ bgColor: "primary.600" }}
            fontWeight={"bold"}
            fontSize="md"
            animation={`${bounce} 2s infinite`}
            transition="background-color 0.3s ease"
            w={"100%"}
          >
            Tenho interesse
          </Button>
        </Link>
      </Container>

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
