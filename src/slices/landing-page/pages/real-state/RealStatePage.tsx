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
  { id: 1, question: "Pergunta 1", answer: "Resposta 1" },
  { id: 2, question: "Pergunta 2", answer: "Resposta 2" },
  // Adicione mais FAQs conforme necessário
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

export const RealStatePage = () => (
  <Box>
    <Header />
    <HeroSection />
    <SplitWithImage />
    <Sobre />
    <About />
    <AboutUs />
    <Services />
    <PropertyList properties={properties} />
    <Testimonials testimonials={testimonials} />
    <ContactForm />
    <NewsletterSubscription />
    <FAQ faqs={faqs} />
    <Gallery images={images} />
    <MapLocation />
    <Team members={members} />
    <Pricing plans={plans} />
    <Blog posts={posts} />
    <SmallWithSocial />
  </Box>
);
