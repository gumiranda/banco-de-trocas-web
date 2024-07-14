import {
  Box,
  Heading,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  useColorModeValue,
  Container,
  VStack,
  Collapse,
  Button,
  useDisclosure,
  keyframes,
} from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  marginTop?: number;
  tags: any[];
}

export const BlogTags = (props: Props) => {
  const { marginTop = 0, tags } = props;

  return (
    <HStack spacing={2} marginTop={marginTop}>
      {tags.map((tag) => {
        return (
          <Tag size={"md"} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

interface BlogAuthorProps {
  date: Date;
  name: string;
}

const BlogAuthor = (props: BlogAuthorProps) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://iili.io/H6MlvRI.png"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const blogPosts = [
  {
    title: "Uma História de Venda no Guarujá: Onde Sempre Há um Comprador",
    image: "https://media-cdn.tripadvisor.com/media/vr-ha-splice-j/10/2f/c3/ea.jpg",
    tags: ["Finanças", "Imóveis", "Oportunidade"],
    content: `Hoje, 28 de agosto, segunda-feira fria e chuvosa, gostaria de compartilhar
    uma história de venda que aconteceu na década de 80. Naquela época, o Guarujá
    era o lugar perfeito. As pessoas se reuniam no calçadão da praia de
    Pitangueiras, e até altas horas, uma multidão de jovens se divertia de
    maneira saudável. O barulho era constante, mas fazia parte da diversão. O
    zelador do prédio em frente ao barulho, chamado Cláudio, me passou a
    oportunidade de vender um apartamento no 1º andar, de frente para a agitação,
    com direito a uma varanda. À primeira vista, parecia impossível alguém querer
    comprar aquele apartamento, dada a agitação constante. No entanto, como diz o
    ditado, "para cada panela, há uma tampa". E no meu caso, essa "tampa" era um
    italiano, torcedor fanático do Palmeiras, que tinha um desejo muito
    específico: um apartamento no 1º andar e de frente para a movimentação da
    praia. Ele queria ter a visão da sua neta se divertindo no meio daquela
    agitação. Surpreendentemente, eu consegui vender o apartamento para ele. Foi
    uma venda inesperada e emocionante. Em gratidão ao Cláudio, o zelador,
    ofereci-lhe uma gratificação. Esta experiência me ensinou que, por mais
    desafiadora que uma venda possa parecer, sempre haverá alguém que desejará
    exatamente o que você está oferecendo. Se você tem um imóvel no Guarujá e
    está enfrentando dificuldades para vendê-lo, não hesite em me dar um "oi" no
    WhatsApp pelo número (11) 99184-3119. Meu nome é Gilson G. Aguiar, corretor
    de imóveis credenciado com o CRECI 36.924-F. Estou aqui para ajudar a tornar
    a sua venda uma realidade.`,
    date: new Date(2023, 7, 28),
  },
  {
    title: "Uma Lição de Superar Desafios: O Caso do Prédio em Campos do Jordão",
    image: "https://media-cdn.tripadvisor.com/media/vr-splice-j/0f/e8/20/11.jpg",
    tags: ["Finanças", "Imóveis", "Superação"],
    content: `Boa tarde a todos, e um agradecimento especial a cada um de vocês que entraram nesse site. Recentemente, escrevi sobre o "Caminho das Pedras",
    destacando que para cada desafio, existe uma solução. Acreditem, nunca
    desistam. Hoje, gostaria de compartilhar uma história fascinante sobre um
    prédio que vendi em 1987, localizado em Campos do Jordão, SP. Fui procurado
    pelo Sr. Jorge Mathias, irmão do Sr. Alfredo Mathias, o visionário criador do
    Shopping Iguatemi em São Paulo. O Sr. Jorge tinha adquirido um terreno na Av.
    Januário Miraglia, número 1750, no bairro Abernéssia, em Campos do Jordão,
    SP. No acordo, comprometeu-se a construir um prédio com 24 apartamentos e 24
    lojas no térreo. As lojas serviriam para quitar o terreno, enquanto os
    apartamentos seriam seus para comercialização. Ele buscou financiamento na
    Caixa Federal, ergueu o prédio, mas ficou com uma dívida colossal na Caixa
    Federal, que não poderia ser quitada apenas com a venda dos 24 apartamentos.
    A situação parecia sem saída, um verdadeiro beco sem saída. Foi então que o
    Sr. Jorge Mathias me procurou, e eu aceitei esse desafio. Ele me cedeu um
    modesto apartamento, uma cama e um chuveiro que, quando ligado, oscilava
    entre água fria e quente. Quatro cobertores eram insuficientes para afastar o
    frio rigoroso de Campos do Jordão. Os apartamentos eram pequenos, com um
    banheiro que tinha uma janela voltada para o corredor, uma situação pouco
    atrativa para os compradores. Na primeira semana, tive a oportunidade de
    conhecer o Sr. Otto Baumgart, fundador do Shopping Norte, um homem milionário
    e extremamente inteligente (hoje falecido). Conversamos por horas enquanto
    sua esposa gastava dinheiro nas lojas. A princípio, os apartamentos estavam
    sendo vendidos por 2.000 UPCs, com alguns de valor ainda maior. O Sr. Otto
    Baumgart, com sua perspicácia, inicialmente recusou a oferta. No entanto, eu
    não desanimei. Decidi encontrar o "Caminho das Pedras". Sugeri ao Sr. Jorge
    Mathias que fosse até a Caixa Federal e perguntasse se eles estariam
    dispostos a financiar 5.000 UPCs por unidade. Essa seria a única maneira de
    quitar a dívida com a Caixa e resolver o problema. Além disso, solicitei que
    ele contratasse uma decoradora para transformar os apartamentos em
    verdadeiros lares encantadores. A decoradora Malu entrou em cena, e a Caixa
    Federal autorizou o financiamento de 5.000 UPCs por unidade. Minha proposta
    ao Sr. Jorge Mathias foi a seguinte: vender os apartamentos por 5.000 UPCs,
    sem entrada, com 6 prestações pagas pelo comprador, custos de escritura
    zerados e uma taxa de corretagem de U$2.000 para o intermediário (eu mesmo).
    Seguindo essa estratégia, fiz o anúncio e, surpreendentemente, vendi todos os
    apartamentos em apenas 20 dias. Portanto, a lição aqui é clara: não importa
    quão desafiadora a situação possa parecer, sempre há uma solução criativa. Se
    você está se sentindo desanimado e está com dificuldades para vender seu
    apartamento no Guarujá, SP, não hesite em entrar em contato comigo pelo
    WhatsApp no número (11) 99184-3119. Dê um "oi" e informe seu nome. Vamos
    conversar e encontrar uma solução juntos.`,
    date: new Date(2023, 8, 7),
  },
  {
    title: "O Caminho das Pedras no Mercado Imobiliário",
    image: "https://media-cdn.tripadvisor.com/media/vr-splice-j/03/67/09/63.jpg",
    tags: ["Finanças", "Imóveis", "Oportunidade"],
    content: `Meu nome é Gilson Gonçalves de Aguiar, e sou um corretor de imóveis
    credenciado pelo Conselho Regional de Imóveis (CRECI) com o número 36.924-F.
    Trabalho como intermediário de imóveis no litoral Paulista, cobrindo desde
    Peruíbe até Ubatuba. Para entrar em contato comigo, basta utilizar o meu
    WhatsApp: (11) 99184-3119. Se você está interessado na compra ou venda de
    imóveis nessa região, basta enviar um "oi" e seu nome, e eu entrarei em
    contato prontamente. Hoje, gostaria de compartilhar com vocês uma lição
    valiosa que aprendi ao longo da minha carreira: "O Caminho das Pedras".
    Sempre busquei soluções criativas para enfrentar desafios no mercado
    imobiliário, transformando em vendas o que muitos consideravam impossível.
    Nesta semana, decidi voltar meu foco para a venda de imóveis no Guarujá, SP,
    com ênfase em apartamentos nas praias de Pitangueiras, Enseada, Astúrias e
    Praia do Tombo. Se você está interessado em vender ou comprar apartamentos
    nessas quatro belas praias, o "Caminho das Pedras" é a estratégia da troca,
    seja recebendo dinheiro ou oferecendo um imóvel em troca. Vou dar um exemplo:
    imagine que você possui um apartamento de 4 dormitórios na Praia da Enseada
    avaliado em R$1.000.000,00. Podemos encontrar a solução perfeita trocando-o
    por um apartamento no Guarujá avaliado em até R$700.000,00, e você recebe
    R$300.000,00 em dinheiro como parte do negócio. Essa será a minha abordagem a
    partir de agora. Para iniciar essa conversa, estou disponível no WhatsApp:
    (11) 99184-3119. Basta deixar um "oi" e seu nome, que eu retornarei o
    contato. Desejo a todos um ótimo domingo, e vamos aproveitar o verão que está
    quase chegando para realizar nossos sonhos de comprar ou vender imóveis.`,
    date: new Date(2023, 6, 6),
  },
];

export const About = () => {
  const [showIndices, setShowIndices] = useState<number[]>([]);

  const handleToggle = (index: number) => {
    setShowIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <Container maxW={"7xl"} p="12">
      <Heading as="h1" animation={`${fadeIn} 1s`}>
        Compre ou Venda seu Apartamento no Guarujá, SP com Gilson Gonçalves de Aguiar!
      </Heading>
      <Box
        marginTop={{ base: "1", sm: "5" }}
        display="flex"
        flexDirection={{ base: "column", sm: "row" }}
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center"
        >
          <Box
            width={{ base: "100%", sm: "85%" }}
            zIndex="2"
            marginLeft={{ base: "0", sm: "5%" }}
            marginTop="5%"
          >
            <Box textDecoration="none" _hover={{ textDecoration: "none" }}>
              <Image
                borderRadius="lg"
                src={
                  "https://www.verdemarimoveis.com/gdr_uploads/83fe868746229186d640b049604e3187.jpg"
                }
                alt="some good alt text"
                objectFit="contain"
                animation={`${fadeIn} 1s`}
                transition="transform 0.3s ease-in-out"
                _hover={{
                  transform: "scale(1.05)",
                }}
              />
            </Box>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                "radial(orange.600 1px, transparent 1px)",
                "radial(orange.300 1px, transparent 1px)"
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: "3", sm: "0" }}
        >
          <BlogTags tags={["Finanças", "Imóveis", "Oportunidade"]} />
          <Heading marginTop="1">
            <Text textDecoration="none" _hover={{ textDecoration: "none" }}>
              Imóveis no Guarujá
            </Text>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue("gray.100", "gray.200")}
            fontSize="lg"
          >
            Você está pensando em vender ou comprar um apartamento no Guarujá, SP? Não
            perca tempo! Ligue agora para (11) 99184-3119 e envie um oi com seu nome. Eu
            sou Gilson Gonçalves de Aguiar, corretor de imóveis credenciado pelo Creci
            36.924-F, e estou aqui para ajudar a tornar realidade o seu objetivo
            imobiliário. A oferta do dia é um apartamento na praia de Enseada, av. Santa
            Maria, 2 andar, prédio sem elevador, 2 dormitórios sendo 1 suite, 51,62 m2
            úteis, 19,55 m2 estacionamento, condomínio R$532,17, documentação 100%, por
            apenas R$250.000,00.
          </Text>
          <BlogAuthor name="Gilson Aguiar" date={new Date()} />
        </Box>
      </Box>
      <Heading as="h2" marginTop="5">
        Confira mais
      </Heading>
      <Divider marginTop="5" />
      <Wrap spacing="30px" marginTop="5">
        {blogPosts.map((post, index) => (
          <WrapItem key={index} width={{ base: "100%", sm: "45%", md: "45%", lg: "30%" }}>
            <Box w="100%" animation={`${fadeIn} 1s`}>
              <Box borderRadius="lg" overflow="hidden">
                <Box textDecoration="none" _hover={{ textDecoration: "none" }}>
                  <Image
                    transform="scale(1.0)"
                    src={post.image}
                    alt="some text"
                    objectFit="contain"
                    width="100%"
                    transition="transform 0.3s ease-in-out"
                    _hover={{
                      transform: "scale(1.05)",
                    }}
                  />
                </Box>
              </Box>
              <BlogTags tags={post.tags} marginTop={3} />
              <Heading fontSize="xl" marginTop="2">
                <Text textDecoration="none" _hover={{ textDecoration: "none" }}>
                  {post.title}
                </Text>
              </Heading>
              <Collapse startingHeight={85} in={showIndices.includes(index)}>
                <Text as="p" fontSize="md" marginTop="2">
                  {post.content}
                </Text>
              </Collapse>
              <Button
                w={"full"}
                bgColor="orange.500"
                onClick={() => handleToggle(index)}
                mt="1rem"
                alignSelf={"center"}
              >
                Mostrar {showIndices.includes(index) ? "Menos" : "Mais"}
              </Button>
              <BlogAuthor name="Gilson Aguiar" date={post.date} />
            </Box>
          </WrapItem>
        ))}
      </Wrap>
      <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
        <Heading as="h2">Como Posso Ajudar Você:</Heading>
        <Text as="p" fontSize="lg">
          Como corretor de imóveis com 50 anos de experiência no mercado bancário e
          imobiliário, estou aqui para ajudar você a tomar decisões financeiras sábias. Se
          você está pensando em vender seu imóvel, trocar por um de menor valor, ou até
          mesmo investir em propriedades usando seu carro como entrada, não hesite em
          entrar em contato comigo pelo WhatsApp no (11) 99184-3119. Sou Gilson Aguiar,
          CRECI 36.924-F, e estou disposto a ouvir seus objetivos e oferecer a melhor
          solução possível. Lembre-se, o recomeço pode ser o começo de algo incrível.
          Invista no seu futuro hoje mesmo!
        </Text>
        <Heading as="h2">Conheça a minha história:</Heading>
        <Text as="p" fontSize="lg">
          {`Hoje é quarta-feira, 30 de agosto de 2023, e gostaria de compartilhar uma
          reflexão sobre o futuro de nossa Nação. Nasci em 22 de maio de 1954, no dia de
          Santa Rita de Cássia, que tem sido minha protetora ao longo de toda a minha vida.
          Sempre que tenho a oportunidade, vou até a igreja Matriz de Ribeirão Preto para
          agradecer à minha santinha por todas as bênçãos que têm abençoado minha jornada.
          Em 1972, iniciei minha carreira como office boy na empresa Brandani Indústria e
          Comércio de Peças. No ano seguinte, ao completar 18 anos, servi o exército junto
          à 5ª CSM Ribeirão Preto. Após concluir meu serviço militar, mudei-me para São
          Paulo e, ao ir ao Bradesco Vila Mariana para pagar uma conta, deparei-me com uma
          placa que dizia "Precisa-se de rapazes". Perguntei à caixa sobre a oportunidade
          e, em pouco tempo, já estava trabalhando no banco. Menos de 6 anos depois, já
          ocupava o cargo de subgerente. No entanto, em setembro de 1981, algumas decisões
          no banco começaram a preocupar-me. Cortes de despesas estavam sendo
          implementados, e amigos estavam sendo preparados para demissões. As comissões
          sobre vendas estavam sendo reduzidas, e eu não concordei com essas mudanças. Por
          isso, tomei a decisão de pedir demissão, sem nem mesmo receber meus direitos.
          Deixei para trás uma carreira brilhante e tornei-me corretor de imóveis. Santa
          Rita, sempre ao meu lado, continuou a abençoar e a promover milagres nas minhas
          vendas. Clientes apareciam nas horas mais difíceis, e comissões iam parar no meu
          bolso. Hoje, observo que nossos jovens não têm as mesmas oportunidades que tive.
          O emprego é escasso, os custos de vida são elevados, e a sobrevivência tornou-se
          desafiadora. No entanto, a solução existe, e é responsabilidade do governo agir
          rapidamente. Devemos dar aos nossos jovens de 18 anos a oportunidade de servir à
          Pátria com uma remuneração justa. Devemos garantir que nossas crianças tenham
          acesso à educação, pois a criminalidade está ganhando espaço, e isso não é
          benéfico para ninguém. Hoje em dia, é difícil ter uma moto, um celular ou um
          carro sem medo, e isso afeta a qualidade de vida de todos nós.`}
        </Text>
        <Heading as="h2">Um Exemplo Pessoal de Sucesso:</Heading>
        <Text as="p" fontSize="lg">
          Há dois anos, vendi meu carro, um Onix com apenas 23.000 km rodados, ano 2018,
          por R$40.000,00. Se não tivesse tomado essa decisão, quem sabe onde estaria
          hoje? Eu usava o carro apenas para atividades cotidianas como ir à padaria, ao
          shopping e viagens esporádicas. Hoje, optei por táxi, faço pequenas caminhadas e
          economizo significativamente. Com o dinheiro da venda do carro, pude quitar
          dívidas e adquirir um apartamento em construção da Tarjab, o Hit Morumbi. Estou
          pagando R$1.000,00 por mês, e quando as chaves forem entregues em setembro/2025,
          precisarei pagar apenas R$200.000,00 para ter meu próprio lar, com um
          apartamento de 40 m², bem localizado e com estacionamento. Acredito que tenha
          sido um excelente negócio, embora enfrentarei o desafio de conseguir os
          R$200.000,00 em dois anos. Tenho fé que Deus proverá.
        </Text>
      </VStack>
    </Container>
  );
};
