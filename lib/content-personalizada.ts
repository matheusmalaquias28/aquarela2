import {
  materials as materialsBase,
  contact,
  footer,
} from "./content";

export { contact, footer };

export const testimonials = {
  title: "Veja quem comprou e já fez seu quadro em Aquarela!",
  items: [
    { src: "/personalizada/depoimento-01.png", alt: "Depoimento de Marina no WhatsApp", width: 553, height: 1024 },
    { src: "/personalizada/depoimento-02.png", alt: "Depoimento de Roberta no WhatsApp", width: 553, height: 1024 },
    { src: "/personalizada/depoimento-03.png", alt: "Depoimento de cliente no WhatsApp", width: 553, height: 1024 },
    { src: "/personalizada/depoimento-04.png", alt: "Depoimento de Rosangela no WhatsApp", width: 553, height: 1024 },
  ],
};

export const materials = {
  ...materialsBase,
  title: "VEJA O QUE PODE VIRAR UMA AQUARELA PERSONALIZADA",
  imageSize: { width: 3, height: 4 },
  items: [
    { src: "/personalizada/produto-01.png", alt: "Casal de noivos transformado em aquarela" },
    { src: "/personalizada/produto-02.png", alt: "Mãos de adulto e criança transformadas em aquarela" },
    { src: "/personalizada/produto-03.png", alt: "Pet transformado em aquarela" },
    { src: "/personalizada/produto-04.png", alt: "Chá revelação transformado em aquarela" },
    { src: "/personalizada/produto-05.png", alt: "Amigas transformadas em aquarela" },
  ],
};

export const theme = {
  brandColor: "#3a7d44",
};

export const offerBar = {
  text: "⚡ OFERTA ESPECIAL DISPONÍVEL APENAS HOJE",
};

export const hero = {
  logo: { src: "/logo-aquarelas-da-natureza2.webp", alt: "Aquarelas Personalizadas", width: 200, height: 60 },
  secureSeal: "🔒Compra 100% Segura e Protegida",
  titleHighlight: "ENVIE UMA FOTO E RECEBA O MOLDE DE DESENHO",
  title: "+ O GUIA PASSO A PASSO PARA PINTÁ-LA EM AQUARELA",
  image: { alt: "Processo de pintura em aquarela personalizada de um pet", width: 1024, height: 1024 },
  poster: { src: "/personalizada/hero.png" },
  subtitle:
    "Transforme o sorriso do seu filho, seu pet, uma viagem especial ou qualquer foto que você ama em uma aquarela pintada pelas suas próprias mãos.",
  ctaLabel: "QUERO MINHA AQUARELA",
  deliveryNoteLines: [] as string[],
  socialProofLabel: "",
};

export const whySection = {
  title: "COM UMA FOTO, VOCÊ RECEBE:",
  cards: [
    {
      icon: "🖊️",
      title: "Molde personalizado da sua foto",
      desc: "Transformamos a referência que você enviar em um desenho em linhas, pronto para imprimir e pintar.",
    },
    {
      icon: "👣",
      title: "Guias detalhados",
      desc: "Passo a passo para cada obra.",
    },
    {
      icon: "💬",
      title: "Suporte para dúvidas",
      desc: "Estamos aqui para ajudar.",
    },
    {
      icon: "🎨",
      title: "Personalização total",
      desc: "Você envia as referências.",
    },
    {
      icon: "⚡",
      title: "Resultados rápidos",
      desc: "Comece a pintar imediatamente.",
    },
  ],
};

export const idealSection = {
  title: "ESTE MATERIAL É IDEAL PARA VOCÊ QUE DESEJA",
  items: [
    {
      title: "DEIXAR SUAS LEMBRANÇAS VIVAS",
      desc: "Pinte momentos especiais, como o sorriso do seu filho ou uma viagem inesquecível.",
    },
    {
      title: "APRENDER A PINTAR SEM ESTRESSE",
      desc: "Receba tudo pronto e fácil, sem precisar criar do zero.",
    },
    {
      title: "PINTAR ALGO QUE TEM SIGNIFICADO PARA VOCÊ",
      desc: "Em vez de copiar referências aleatórias da internet, escolha justamente aquela foto que você gostaria de transformar em arte.",
    },
    {
      title: "CRIAR PRESENTES PERSONALIZADOS",
      desc: "Surpreenda amigos e familiares com aquarelas feitas a partir de suas fotos.",
    },
    {
      title: "DESENVOLVER SUAS HABILIDADES ARTÍSTICAS",
      desc: "Pratique e melhore sua técnica de pintura com guias e dicas.",
    },
    {
      title: "PINTAR SEM SABER DESENHAR DO ZERO",
      desc: "Você recebe o molde da sua própria foto e pode focar na pintura, sem ter que acertar proporções e traços sozinho.",
    },
  ],
};

export const offerSection = {
  title: "VEJA COMO FUNCIONA AS AQUARELAS PERSONALIZADAS:",
  pill: "⚡ACESSO IMEDIATO",
  cardTitle: "TUDO FOI ORGANIZADO PARA SER SIMPLES E FÁCIL DE APLICAR.",
  image: {
    src: "/personalizada/como-funciona.png",
    alt: "Guias de aquarela personalizada: paletas, misturas, texturas, esboço e pintura final",
    width: 640,
    height: 640,
  },
  howItWorks: [
    {
      title: "1. VOCÊ ENVIA SUA FOTO",
      desc: "Escolha a lembrança, pessoa, animal, paisagem ou imagem que gostaria de transformar em aquarela.",
    },
    {
      title: "2. NÓS CRIAMOS SEU MOLDE",
      desc: "Transformamos sua referência em um desenho em linhas, pronto para você imprimir e usar como base.",
    },
    {
      title: "3. PREPARAMOS SEU GUIA DE PINTURA",
      desc: "Você recebe uma orientação personalizada mostrando cores, misturas e etapas para pintar aquela referência.",
    },
    {
      title: "4. VOCÊ PINTA SUA AQUARELA",
      desc: "Imprima o molde, acompanhe o guia e dê vida àquela imagem especial com suas próprias mãos.",
    },
  ],
};

export const bonusSection = {
  titleLines: ["", ""],
  pill: "",
  exclusiveNote: ["", ""],
  items: [] as { src: string; title: string; desc: string; price: string }[],
};

export const bonusFeatures = [] as string[];

export const plansSection = {
  pill: "🔥 ÚLTIMA CHANCE — OFERTA TERMINA HOJE",
  title: "Adquira seus moldes e guias de pintura agora mesmo!",
  basic: {
    name: "Aquarelas Personalizadas",
    image: {
      src: "/personalizada/guia-moldes.png",
      alt: "Guia de pintura em aquarela com molde, esboço e pintura final de Golden Retriever",
      width: 640,
      height: 640,
    },
    receiveLabel: "Você recebe:",
    features: [
      "Molde de desenho personalizado a partir da sua foto",
      "Guia passo a passo de pintura feito para sua referência",
      "Suporte para dúvidas durante o processo",
    ],
    oldPrice: "R$67,90",
    price: "R$27,90",
    installments: "ou 12x de R$2,33",
    savings: "🟢 você economiza R$40,00",
    ctaLabel: "QUERO MINHA AQUARELA",
  },
  complete: {
    badge: "🔥 ÚLTIMA CHANCE — OFERTA TERMINA HOJE",
    name: "PLANO COMPLETO",
    allBonusesLabel: "",
    image: {
      src: "/personalizada/plano-completo.png",
      alt: "Materiais do plano completo: guias de paletas, misturas, texturas e pintura passo a passo",
      width: 640,
      height: 640,
    },
    pill: "⚡MAIS CONTEÚDOS",
    features: [
      "Molde de desenho personalizado",
      "Guia de pintura em aquarela",
      "100 Paletas Prontas para Aquarela",
      "Guia Visual de Misturas para Aquarela",
      "Guia Visual de Texturas para Aquarela",
      "E muito mais…",
    ],
    oldPrice: "R$97,90",
    price: "R$37,90",
    installments: "ou 12x de R$3,92",
    savings: "🟢 você economiza R$60,00",
    ctaLabel: "QUERO MINHA AQUARELA",
  },
  upsellNote: {
    alert: "92% das pessoas aproveitam o plano abaixo 👇",
    body: "",
    highlight: "",
  },
  securePurchaseBadge: {
    src: "/entregaveis-v2/compra-segura-hotmart-640.webp",
    alt: "Compra 100% segura — Hotmart",
    width: 640,
    height: 192,
  },
};

export const guarantee = {
  seal: { alt: "Selo de garantia de 7 dias", width: 241, height: 242 },
  title: "GARANTIA DE 7 DIAS",
  intro: "🔒 Compra 100% segura e garantida.",
  lead: "Isso significa que, a qualquer momento, se você achar que:",
  bullets: [
    "o material não faz sentido para você;",
    "os desenhos não atendem sua necessidade;",
    "ou simplesmente não quiser continuar.",
  ],
  outro: "Você pode solicitar o reembolso. Sem prazo, sem burocracia.",
  outroStrong: "O risco fica todo do nosso lado.",
  helpLabel: "Precisa de ajuda? Entre em contato conosco:",
};

export const stepsSection = {
  title: "COMO É O ACESSO",
  subtitle: "",
  ctaLabel: "QUERO MINHA AQUARELA",
  steps: [
    {
      icon: "🛒",
      title: "CONCLUA SUA COMPRA",
      desc: "",
      items: [] as string[],
    },
    {
      icon: "📸",
      title: "ENVIE SUA FOTO",
      desc: "",
      items: [] as string[],
    },
    {
      icon: "🎨",
      title: "NÓS PREPARAMOS SEU MATERIAL",
      desc: "",
      items: [] as string[],
    },
    {
      icon: "📩",
      title: "RECEBA SEUS ARQUIVOS",
      desc: "",
      items: [] as string[],
    },
  ],
};

export const faq: readonly (readonly [string, string])[] = [
  [
    "Preciso saber desenhar para usar as Aquarelas Personalizadas?",
    "Não. Justamente para você não precisar começar o desenho do zero, nós transformamos a foto que você enviar em um molde de desenho personalizado, com as linhas da sua referência prontas para você usar como base.",
  ],
  [
    "Preciso ter experiência com aquarela?",
    "Não. Você também recebe um guia de pintura personalizado, com orientações de cores, misturas e etapas para ajudar na pintura da sua referência. A proposta é tornar o processo mais simples mesmo para quem ainda está desenvolvendo suas habilidades.",
  ],
  [
    "Posso enviar qualquer foto?",
    "Você pode enviar referências de pessoas, filhos, família, pets, paisagens, viagens, lugares e outras imagens que gostaria de pintar. Para conseguirmos preparar um material melhor, recomendamos escolher uma foto nítida e com boa visualização dos elementos principais.",
  ],
  [
    "O que exatamente vou receber?",
    "A partir da foto que você enviar, preparamos para você: um Molde de Desenho Personalizado, criado a partir da sua referência; um Guia de Pintura Personalizado, com orientações para pintar aquela imagem em aquarela; suporte para dúvidas durante o processo.",
  ],
  [
    "Como envio minha foto depois da compra?",
    "Após concluir sua compra, você receberá as instruções para enviar a referência que deseja transformar em aquarela. Depois do envio, iniciamos a preparação do seu molde e do seu guia personalizado.",
  ],
  [
    "Qual é o prazo para receber meu material personalizado?",
    "Depois que você enviar sua foto, o molde de desenho e o guia de pintura serão preparados especialmente para a sua referência.",
  ],
  [
    "Como recebo o molde e o guia quando estiverem prontos?",
    "Assim que o seu material personalizado estiver finalizado, você receberá as orientações para acessar os arquivos e poderá utilizá-los para começar sua pintura.",
  ],
  [
    "Preciso imprimir o molde?",
    "O molde foi pensado para servir como base para a sua pintura e pode ser impresso para facilitar o processo. Assim, você não precisa desenhar sua referência do zero e pode concentrar sua atenção na aquarela.",
  ],
  [
    "Posso transformar uma foto especial em presente?",
    "Sim. Você pode enviar uma foto que tenha significado para você ou para alguém especial — como um filho, casal, pet, viagem ou lembrança — e utilizar o molde e o guia para criar uma aquarela feita pelas suas próprias mãos.",
  ],
  [
    "Quais são as formas de pagamento?",
    "As formas de pagamento disponíveis serão apresentadas no momento da compra. Basta clicar em QUERO MINHA AQUARELA para conferir as opções disponíveis no checkout.",
  ],
];
