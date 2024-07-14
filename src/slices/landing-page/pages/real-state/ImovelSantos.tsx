"use client";

import { ImovelNaMao } from "./ImovelNaMao";

const properties = [
  {
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
];

export const ImovelSantos = () => <ImovelNaMao properties={properties} />;
