"use client";

import { ImovelNaMao } from "./ImovelNaMao";

export const ImovelSantos = ({ slug }) => <ImovelNaMao properties={[slugs[slug]]} />;
const slugs = {
  santos: {
    id: 1,
    title: "📢 Grande Oportunidade em Santos, SP!",
    description: `
      <p>Estou oferecendo uma área incrível de quase 13.000 m² na Avenida Santista, 365, em Santos. 
      Esta propriedade inclui um prédio de 3 andares com o térreo já pronto, precisando apenas de um 
      investimento final para ser concluída.</p> 
<br/>
      <b>🏢 Detalhes do Imóvel:</b> 
      <ul> 
        Área Total: 13.000 m²</br> 
        Prédio com 3 andares</br> 
        1.200 m² por pavimento</br> 
        Localização espetacular com belos jardins</br> 
      </ul> 
<br/>
      <b>💰 Valor de Venda: R$ 55 milhões</b> <br/>
      <br/>
      <b>🌟 Oportunidades de Uso:</b> 
      <ul> 
        Excelente local para futuros cassinos, com acomodações já disponíveis.</br> 
        Ideal para igrejas, mercados, e outras grandes empresas.</br> 
        Negociável por valor bem abaixo para propostas sérias.</br> 
      </ul> 

      <p>Estou em contato direto com o filho da proprietária, cuja mãe, devido à idade avançada, deseja vender. 
      Aproveite esta chance única!</p> 
<br/>
      <b>📞 Contato:</b> 
      <p>Gilson Aguiar - CRECI 36.924-F<br> 
      (11) 99184-3119</p> 

      <p>Vamos negociar!</p>
    `,
    images: [
      "https://scontent.fudi1-1.fna.fbcdn.net/v/t39.30808-6/451364766_889974599820877_2602056510334573659_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=zHSrNiN9rrcQ7kNvgECnM2q&_nc_ht=scontent.fudi1-1.fna&oh=00_AYCKdrCIopyF5L-mT9Vc-PGnB_0t3d0zh1D-iYezMGBnAQ&oe=6699E3B4",
    ],
  },
  sp: {
    id: 1,
    title:
      "Bom dia a todos e a todas. Atenção proprietários de apartamento em São Paulo de bom padrão!",
    description: `
      Com R$250.000,00 de volta você vai morar na maravilhosa Estância de Atibaia. Chácara à venda em Atibaia, bairro Jundiazinho.
      <br/><br/>
      <b>Condomínio:</b> Recanto dos Palmares<br/>
      <b>Distância do Asfalto:</b> 5 km<br/>
      <b>Metragem:</b> 2.500 m²<br/>
      <b>Área Construída:</b> 250 m²<br/>
      <b>Características:</b> 3 suítes grandes, cozinha, sala de jantar, sala de TV<br/>
      <b>Mobiliada com:</b> TVs, geladeiras, fogão e camas<br/>
      <b>Área Externa:</b> Piscina 6x3, Varanda 70 m², Garagem para 7 carros, Quarto de ferramentas 40 m²<br/>
      <b>Recursos Naturais:</b> Poço artesiano, mata nativa e nascente de água dentro da chácara, 50 pés de bananas<br/>
      <b>Documentação:</b> Escritura regularizada<br/>
      <b>Localização:</b> Chácara em condomínio com muitos aposentados, próximo a mercados, padaria, posto de gasolina, etc. (Bairro do Portão), a 15 minutos da chácara. Vizinhança ótima.<br/>
      <b>Valor:</b> R$ 1.250.000,00<br/><br/>
      <b>Contato:</b> Ligue 11 991843119 - Gilson CRECI 36.924 F
    `,
    images: [
      "https://scontent.fudi1-1.fna.fbcdn.net/v/t39.30808-6/451127768_889644026520601_4453267540459314059_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=RI1xpM0esekQ7kNvgHfMcs0&_nc_ht=scontent.fudi1-1.fna&oh=00_AYBwQTVc3iXCbz58E-axfzZh9F0aa5BrmHQaOVaoFJ8jeA&oe=6699F4C5",
      "https://scontent.fudi1-1.fna.fbcdn.net/v/t39.30808-6/450914626_889644046520599_6103405718086902664_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=gN9_UZRpXwEQ7kNvgHi1U4L&_nc_ht=scontent.fudi1-1.fna&oh=00_AYAtxlfyzDzuRDVOGeH3989q6x1JTCgnEzXyOzlN2VDKZg&oe=6699CD4E",
      "https://scontent.fudi1-1.fna.fbcdn.net/v/t39.30808-6/451012594_889644086520595_7927528525487950360_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=uPQN5r6qqZ8Q7kNvgGMY3OP&_nc_ht=scontent.fudi1-1.fna&oh=00_AYD36UKvdPkipMq24wVG8vNr8MMH4SwiZm7StkAC-MdoLw&oe=6699DA96",
      "https://scontent.fudi1-1.fna.fbcdn.net/v/t39.30808-6/450810523_889644309853906_8370410054306223084_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=bAYr1mae1LgQ7kNvgFATmG1&_nc_ht=scontent.fudi1-1.fna&oh=00_AYA3iTOUEz1n42-PvtDqnS2XVH-sW5Wu2f1lsge7_FWfZQ&oe=6699CF07",
      "https://scontent.fudi1-1.fna.fbcdn.net/v/t39.30808-6/450784743_889644523187218_6342295819997840059_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=p9MnxsLGsYkQ7kNvgFmE0EY&_nc_ht=scontent.fudi1-1.fna&oh=00_AYB8uVpoxWf8Q4nyKuFESFKqCksKGxTogLsfOZPxnAzgtw&oe=6699C4C3",
      "https://scontent.fudi1-2.fna.fbcdn.net/v/t39.30808-6/450938811_889644539853883_999609297052341423_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ETbBBFhKtfYQ7kNvgGZ6tC9&_nc_ht=scontent.fudi1-2.fna&oh=00_AYBmLEKQ27AWNCXrmhLMqbc6GVCGPqqOlcPpzGvgkpO_6Q&oe=6699E896",
    ],
  },
  valeribeira: {
    id: 2,
    title: "Oportunidade no Vale do Ribeira!",
    description: `
      Sempre eu digo às pessoas, terra é o bem mais precioso. O planeta não aumenta e a cada dia 1 alqueire vai valendo mais. Tem pessoas que recebem aluguéis fora do comum de áreas que não valiam nada e hoje rendem fortunas mensais.
      <br/><br/>
      Vamos lá direto ao assunto. R$1.200.000,00 por 10 alqueires com 45 mil pés de palmito pupunha em 6 alqueires. Já foram plantados 80 mil pés. A proprietária, com 82 anos, não tem como cuidar, e os filhos não têm interesse. Esta é sua oportunidade.
      <br/><br/>
      Detalhes do Imóvel:
      <ul>
        <li>Localização: 7 km de estrada cascalhada, 4 km de asfalto até a cidade de Sete Barras, Vale da Ribeira.</li>
        <li>Distância: 200 km de São Paulo e 200 km de Curitiba PR, próximo a Registro SP.</li>
        <li>Atividades Anteriores: Criou búfalos e suínos, chegando a 1.000 porcos da raça branca.</li>
        <li>Documentação: Incra e escritura em Cartório.</li>
        <li>Infraestrutura:</li>
        <ul>
          <li>Casa sede com 3 dormitórios, sendo uma suíte com hidromassagem.</li>
          <li>Salão de festas de 150 m² com 2 banheiros, churrasqueira, fogão à lenha, forno à lenha.</li>
          <li>4 poços manilhados.</li>
          <li>Baias para 3 cavalos.</li>
          <li>Garagem para 2 veículos.</li>
          <li>Garagem para trator e máquinas.</li>
          <li>Barracão para criações com 1.200 m², 27 baias.</li>
          <li>Curral com mangueiro para leiteria.</li>
          <li>Pomar de mexericas.</li>
          <li>3 baias para galinheiro ou coelho.</li>
        </ul>
      </ul>
      <br/>
      Resumo da Operação: R$1.200.000,00 sendo R$500.000,00 em dinheiro e R$700.000,00 em imóveis, inclusive litoral.
      <br/><br/>
      <b>Contato:</b> Ligue 11 991843119 - Gilson Aguiar CRECI 36.924 F
    `,
    images: [
      "https://i.ibb.co/6bMHjCJ/451410237-889516683200002-8276621441195459129-n.jpg",
      "https://i.ibb.co/tMgmLKd/449826868-889516799866657-4441169705592358397-n-1.jpg",
      "https://i.ibb.co/tCZCjhq/449826868-889516799866657-4441169705592358397-n.jpg",
      "https://i.ibb.co/XxMM99T/450954974-889516709866666-6407925238882253460-n.jpg",
      "https://i.ibb.co/RjX1ZgZ/451099062-889516656533338-1754391368274342814-n.jpg",
      "https://i.ibb.co/3dcV7n2/451223812-889516736533330-6128051116196627483-n.jpg",
      "https://i.ibb.co/Sc6PCT9/451430645-889516839866653-1224910720821095992-n.jpg",
    ],
  },
};
