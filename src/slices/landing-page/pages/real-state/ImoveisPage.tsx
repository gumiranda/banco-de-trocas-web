"use client";
import { Box } from "@chakra-ui/react";
import { Header } from "./components/landing2/Header";
import { HeroSection } from "./components/landing2/HeroSection";
import { AboutUs } from "./components/landing2/AboutUs";
import { Services } from "./components/landing2/Services";
import { PropertyList } from "./components/landing2/PropertyList";
import { Testimonials } from "./components/landing2/Testimonials";
import { ContactForm } from "./components/landing2/ContactForm";
import { NewsletterSubscription } from "./components/landing2/NewsletterSubscription";
import { FAQ } from "./components/landing2/FAQ";
import { Gallery } from "./components/landing2/Gallery";
import { MapLocation } from "./components/landing2/MapLocation";
import { Team } from "./components/landing2/Team";
import { Pricing } from "./components/landing2/Pricing";
import { Blog } from "./components/landing2/Blog";
import { SplitWithImage } from "./components/SplitWithImage";
import { Sobre } from "./components/Sobre";
import { About } from "./components/About";
import { SmallWithSocial } from "./components/SmallWithSocial";
import { GridWithAddToCartButton } from "../../components/organisms/GridWithAddToCartButton";
const imageTest =
  "https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";

const properties = [
  { id: 1, title: "Residência 1", description: "Descrição da Residência 1" },
  { id: 2, title: "Residência 2", description: "Descrição da Residência 2" },
  // Adicione mais propriedades conforme necessário
];

const testimonials = [
  { id: 1, name: "Cliente 1", text: "Depoimento do Cliente 1" },
  { id: 2, name: "Cliente 2", text: "Depoimento do Cliente 2" },
  // Adicione mais depoimentos conforme necessário
];

const faqs = [
  {
    id: 1,
    question: "Quem é Gilson Gonçalves de Aguiar?",
    answer:
      "Gilson Gonçalves de Aguiar, CRECI 36.924-F, é um corretor de imóveis com experiência desde 1981, especializado em imóveis na Capital de São Paulo, Litoral Sul e Norte do Estado de São Paulo, e Interior Paulista.",
  },
  {
    id: 2,
    question: "Quais serviços Gilson Gonçalves de Aguiar oferece?",
    answer:
      "Gilson oferece serviços de compra e venda de imóveis, utilizando um sistema de trocas com volta ou recebimento de valores para facilitar as transações imobiliárias.",
  },
  {
    id: 3,
    question: "Como posso entrar em contato com Gilson Gonçalves de Aguiar?",
    answer:
      "Você pode entrar em contato com Gilson pelo telefone (11) 99184-3119 ou enviar uma mensagem pelo WhatsApp para fazer negócio agora mesmo.",
  },
  {
    id: 4,
    question: "Qual a área de atuação de Gilson Gonçalves de Aguiar?",
    answer:
      "Gilson atua em São Paulo Capital, Litoral Sul e Norte do Estado de São Paulo, e Interior Paulista. Além de muitas outras cidades do Brasil",
  },
  {
    id: 5,
    question: "Gilson Gonçalves de Aguiar trabalha com imóveis no litoral?",
    answer:
      "Sim, Gilson é especialista na compra e venda de imóveis no Litoral Sul e Norte do Estado de São Paulo.",
  },
  {
    id: 6,
    question: "O que é o sistema de trocas com volta ou recebimento de valores?",
    answer:
      "É um sistema utilizado por Gilson para facilitar as transações imobiliárias, permitindo a troca de imóveis com possível retorno financeiro ou complementação de valores.",
  },
  {
    id: 7,
    question: "Como posso agendar uma visita a um imóvel?",
    answer:
      "Entre em contato pelo telefone ou WhatsApp para agendar uma visita a um imóvel de interesse.",
  },
  {
    id: 8,
    question: "Quais são os documentos necessários para a compra de um imóvel?",
    answer:
      "Os documentos geralmente incluem RG, CPF, comprovante de residência, certidão de casamento (se aplicável) e comprovante de renda.",
  },
  {
    id: 9,
    question: "Gilson Gonçalves de Aguiar oferece assessoria jurídica?",
    answer:
      "Gilson pode orientar seus clientes sobre a documentação necessária e o processo de compra e venda, mas recomenda buscar assessoria jurídica especializada para transações mais complexas.",
  },
  {
    id: 10,
    question:
      "Qual é o primeiro passo para vender meu imóvel com Gilson Gonçalves de Aguiar?",
    answer:
      "Entre em contato com Gilson para discutir os detalhes do seu imóvel e iniciar o processo de venda.",
  },
  {
    id: 11,
    question: "Quanto tempo leva para vender um imóvel?",
    answer:
      "O tempo para vender um imóvel pode variar conforme o mercado e a atratividade do imóvel. Gilson trabalha para encontrar compradores o mais rápido possível.",
  },
  {
    id: 12,
    question: "Gilson Gonçalves de Aguiar trabalha com imóveis comerciais?",
    answer:
      "A principal área de atuação de Gilson é a compra e venda de imóveis residenciais.",
  },
  {
    id: 13,
    question: "Como posso anunciar meu imóvel com Gilson Gonçalves de Aguiar?",
    answer:
      "Entre em contato por telefone ou WhatsApp para fornecer detalhes sobre seu imóvel e iniciar o processo de anúncio.",
  },
  {
    id: 14,
    question: "Quais são as taxas e comissões envolvidas na venda de um imóvel?",
    answer:
      "As taxas e comissões são acordadas previamente e variam conforme o tipo de imóvel e a negociação.",
  },
  {
    id: 15,
    question: "Gilson Gonçalves de Aguiar oferece financiamento imobiliário?",
    answer:
      "Gilson pode orientar sobre opções de financiamento disponíveis, mas não oferece financiamento diretamente.",
  },
  {
    id: 16,
    question:
      "Quais são as garantias ao comprar um imóvel com Gilson Gonçalves de Aguiar?",
    answer:
      "Gilson garante um processo transparente e seguro, com toda a documentação necessária para a transação imobiliária.",
  },
  {
    id: 17,
    question: "Gilson Gonçalves de Aguiar trabalha com imóveis novos e usados?",
    answer:
      "Sim, Gilson trabalha com uma ampla variedade de imóveis, tanto novos quanto usados.",
  },
  {
    id: 18,
    question: "Como posso acompanhar o andamento da venda do meu imóvel?",
    answer:
      "Gilson mantém seus clientes informados sobre o andamento do processo de venda através de relatórios e contato direto.",
  },
  {
    id: 19,
    question: "Gilson Gonçalves de Aguiar trabalha com permutas de imóveis?",
    answer:
      "Sim, Gilson utiliza o sistema de trocas com volta ou recebimento de valores para facilitar as transações de permuta.",
  },
  {
    id: 20,
    question: "Gilson Gonçalves de Aguiar oferece serviços de avaliação de imóveis?",
    answer:
      "Gilson oferece orientação para a avaliação de imóveis baseada em seu amplo conhecimento do mercado imobiliário.",
  },
];

const images = [
  { id: 1, src: imageTest, alt: "Imagem 1" },
  { id: 2, src: imageTest, alt: "Imagem 2" },
  // Adicione mais imagens conforme necessário
];

const members = [
  { id: 1, name: "Membro 1", role: "Função 1" },
  { id: 2, name: "Membro 2", role: "Função 2" },
  // Adicione mais membros conforme necessário
];

const plans = [
  { id: 1, title: "Plano 1", price: "R$100", features: ["Feature 1", "Feature 2"] },
  { id: 2, title: "Plano 2", price: "R$200", features: ["Feature 1", "Feature 2"] },
  // Adicione mais planos conforme necessário
];

const posts = [
  { id: 1, title: "Post 1", excerpt: "Resumo do Post 1" },
  { id: 2, title: "Post 2", excerpt: "Resumo do Post 2" },
  // Adicione mais posts conforme necessário
];

export const ImoveisPage = ({ data }) => (
  <Box>
    <Header />

    <GridWithAddToCartButton data={data} />
    <Sobre />
    <FAQ faqs={faqs} />
    <SmallWithSocial />
  </Box>
);
