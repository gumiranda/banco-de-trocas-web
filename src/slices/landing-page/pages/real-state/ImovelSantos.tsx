"use client";

import { ImovelNaMao } from "./ImovelNaMao";

const properties = [
  { id: 1, title: "Residência 1", description: "Descrição da Residência 1", images: [] },
];

export const ImovelSantos = () => <ImovelNaMao properties={properties} />;
