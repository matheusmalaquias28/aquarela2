import {
  materials as materialsBase,
  testimonials as testimonialsBase,
  bonusSection as bonusSectionBase,
  guarantee,
  contact,
  stepsSection,
  footer,
} from "./content";

export {
  guarantee,
  contact,
  stepsSection,
  footer,
};

export const testimonials = {
  ...testimonialsBase,
  imageSize: { width: 1080, height: 1350 },
  items: [45, 46, 47, 48, 49, 50, 51].map((n) => ({
    src: `/entregaveis-v2/instagram-post-${n}-500.webp`,
    alt: "Depoimento de aluna no Instagram",
  })),
};

export const bonusSection = {
  ...bonusSectionBase,
  items: bonusSectionBase.items.map((item, i) => {
    const order = [2, 1, 3, 4, 5];
    return {
      ...item,
      src: `/entregaveis-v2/bonus-${order[i]}-640.webp`,
    };
  }),
};

export const materials = {
  ...materialsBase,
  imageSize: { width: 3, height: 4 },
  items: Array.from({ length: 14 }, (_, i) => {
    const n = String(i + 1).padStart(2, "0");
    return {
      src: `/entregaveis-v2/entregaveis-${n}-520.webp`,
      alt: `Material do pacote Aquarelas da Natureza ${i + 1}`,
    };
  }),
};

export const theme = {
  brandColor: "#3a7d44",
};

export const offerBar = {
  text: "OFERTA ESPECIAL DISPONÍVEL APENAS HOJE",
};

export const hero = {
  logo: { src: "/logo-aquarelas-da-natureza2.webp", alt: "Aquarelas da Natureza", width: 200, height: 60 },
  titleHighlight: "Aquarelas da Natureza",
  title: "escolha uma referência e siga o passo a passo para transformá-la em aquarela.",
  image: { alt: "Timelapse de pintura em aquarela", width: 383, height: 383 },
  video: { src: "/entregaveis-v2/hero-timelapse.mp4" },
  poster: { src: "/entregaveis-v2/hero-poster-383.webp" },
  subtitle:
    "Você recebe mais de 35 referências de flores, folhas, animais e paisagens, cada uma acompanhada do seu próprio guia visual de pintura passo a passo.",
  ctaLabel: "QUERO PINTAR AGORA",
  note: "Você não precisa saber desenhar. Basta transferir o desenho-base, seguir a referência colorida e pintar passo a passo.",
  checks: [
    "Nunca fique travada sem saber por onde começar.",
    "Copie as cores usando referências prontas.",
    "Siga cada etapa visualmente sem depender de vídeos longos.",
    "Imprima quantas vezes quiser e pratique no seu ritmo.",
  ],
  deliveryNote: "📲 Você recebe tudo na hora, direto no seu e-mail",
  deliveryNoteLines: ["📲 Você recebe tudo na hora,", "direto no seu e-mail"],
  socialProofLabel: "+840 Aluno(a)s satisfeitas",
};

export const whySection = {
  title: "AS AQUARELAS DA NATUREZA POSSUEM:",
  cards: [
    {
      icon: "📚",
      title: "Biblioteca de referências",
      desc: "Escolha quais elementos da natureza deseja transformar em aquarela.",
    },
    {
      icon: "🎨",
      title: "Referência de cores",
      desc: "Veja as principais cores usadas em cada pintura sem precisar descobrir tudo sozinha.",
    },
    {
      icon: "👣",
      title: "Sequência visual",
      desc: "Acompanhe como aquela referência é construída em aquarela, etapa por etapa.",
    },
  ],
};

export const idealSection = {
  title: "ESTE MATERIAL É IDEAL PARA VOCÊ QUE DESEJA",
  items: [
    { title: "COMEÇAR A PINTAR SEM MEDO", desc: "Siga guias visuais que tornam a pintura simples e divertida, mesmo sem experiência." },
    { title: "TER RESULTADOS BONITOS RAPIDAMENTE", desc: "Finalize aquarelas que você terá orgulho de mostrar a amigos e familiares." },
    { title: "APROVEITAR UM HOBBY CRIATIVO", desc: "Desperte sua criatividade e relaxe enquanto pinta lindas aquarelas." },
    { title: "NÃO FICAR TRAVADA DIANTE DA FOLHA EM BRANCO", desc: "Escolha uma referência e acompanhe o guia correspondente sem precisar descobrir sozinha o que desenhar, quais cores usar ou por onde começar." },
    { title: "APRENDER A ESCOLHER AS CORES CERTAS", desc: "Use referências visuais que ajudam a combinar cores de forma harmoniosa." },
    { title: "DECORAR SEU ESPAÇO", desc: "Crie obras que podem embelezar sua casa e trazer alegria ao seu ambiente." },
  ],
};

export const offerSection = {
  title: "TUDO FOI ORGANIZADO PARA SER SIMPLES E FÁCIL DE APLICAR",
  pill: "⚡ACESSO IMEDIATO",
  cardTitle: "Você escolhe a pintura e já pode começar na mesma hora.",
  featuresTitle: "35 Referências da Natureza",
  guidesTitle: "35 Guias de pintura para cada referência",
  image: {
    src: "/entregaveis-v2/plano-completo-v2-640.webp",
    alt: "Mockup do pacote Aquarelas da Natureza",
    width: 640,
    height: 640,
  },
  features: [
    "Flores",
    "Folhas e plantas",
    "Pássaros e borboletas",
    "Animais da natureza",
    "Paisagens",
    "Frutas e elementos naturais",
  ],
  guideFeatures: [
    "Girassol, Margarida, Tulipa...",
    "Costela-de-adão, Samambaia...",
    "Beija-flor, Passarinho, Coruja...",
    "Raposa, Cervo, Elefante...",
    "Montanhas, Pôr do sol...",
    "Limões, Morangos...",
  ],
};

export const bonusFeatures = [
  "🎁 BÔNUS - 10 Primeiras Aquarelas",
  "🎁 BÔNUS - 15 Mini Aquarelas Botânicas",
  "🎁 BÔNUS - 6 Quadros Botânicos Combinados",
  "🎁 BÔNUS - Guia de Impressão e Transferência",
  "🎁 BÔNUS - Guia Visual de Materiais",
];

export const plansSection = {
  pill: "⏰ OFERTA VÁLIDA POR TEMPO LIMITADO",
  title: "ESCOLHA A MELHOR OPÇÃO PARA VOCÊ",
  basic: {
    name: "Plano Básico",
    image: {
      src: "/entregaveis-v2/plano-basico-v2-640.webp",
      alt: "Materiais do Plano Básico Aquarelas da Natureza",
      width: 640,
      height: 640,
    },
    receiveLabel: "Você recebe:",
    features: [
      "35 Referências da Natureza",
      "35 Guias Visuais correspondentes",
      "Referência de cores de cada pintura",
      "Sequência visual de aplicação para fácil acompanhamento",
    ],
    oldPrice: "R$37,90",
    price: "R$27,90",
    installments: "ou 4x de R$7,00 no cartão",
    savings: "🟢 você economiza R$10,00",
    ctaLabel: "QUERO O PLANO BÁSICO",
  },
  complete: {
    badge: "🔥 ÚLTIMA CHANCE — OFERTA TERMINA HOJE",
    name: "PLANO COMPLETO",
    allBonusesLabel: "TODOS OS BÔNUS INCLUSOS",
    image: {
      src: "/entregaveis-v2/plano-completo-v2-640.webp",
      alt: "Mockup do plano completo Aquarelas da Natureza",
      width: 640,
      height: 640,
    },
    pill: "⚡5x MAIS CONTEÚDOS",
    features: [
      "35 Referências da Natureza",
      "35 Guias Visuais de Pintura — um para cada referência",
      "Referência de cores de cada pintura",
      "Sequência visual de aplicação",
      "🎁 BÔNUS - 10 Primeiras Aquarelas",
      "🎁 BÔNUS - 15 Mini Aquarelas Botânicas",
      "🎁 BÔNUS - 6 Quadros Botânicos Combinados",
      "🎁 BÔNUS - Guia de Impressão e Transferência",
      "🎁 BÔNUS - Guia Visual de Materiais",
    ],
    oldPrice: "R$67,90",
    price: "R$37,90",
    installments: "ou 6x de R$7,00 no cartão",
    savings: "🟢 você economiza R$30,00",
    ctaLabel: "QUERO O PLANO COMPLETO",
  },
  upsellNote: {
    alert: "AINDA DÁ TEMPO DE LEVAR A MELHOR OPÇÃO!",
    body: "Leve mais e pague menos, 97% escolhem a nossa",
    highlight: "SUPER OFERTA!",
  },
  paybackBadge: {
    title: "UMA ÚNICA OBRA EMOLDURADA JÁ VALE MAIS DO QUE O VALOR DO PACOTE.",
    subtitle: "Todo o resto vira puro prazer.",
  },
  securePurchaseBadge: {
    src: "/entregaveis-v2/compra-segura-hotmart-640.webp",
    alt: "Compra 100% segura — Hotmart",
    width: 640,
    height: 192,
  },
};

export const faq: readonly (readonly [string, string])[] = [
  ["Preciso saber desenhar para usar?", "Não! O material já inclui os desenhos-base prontos para transferência. Você não precisa criar o esboço do zero — basta transferir e começar a pintar."],
  ["O acesso é imediato?", "Sim! Assim que o pagamento for confirmado, você recebe o acesso por e-mail e já pode baixar todos os arquivos."],
  ["As aquarelas são para iniciantes?", "Sim! As guias visuais são feitas para facilitar o aprendizado e a prática."],
  ["Posso usar as aquarelas para decorar?", "Claro! As aquarelas podem ser emolduradas e usadas como decoração."],
  ["Qual é a política de reembolso?", "Você tem 7 dias para solicitar o reembolso, sem burocracia."],
  ["Os materiais são caros?", "Não. O Guia Visual de Materiais (incluso no Plano Completo) indica opções básicas e econômicas. Você não precisa de materiais profissionais para começar."],
];
