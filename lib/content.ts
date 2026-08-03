/**
 * Conteúdo da landing page — edite APENAS este arquivo (e as imagens em /public)
 * para replicar o modelo em outro projeto. O layout em app/page.tsx não precisa mudar.
 *
 * Checklist ao clonar o template:
 * 1. Troque `theme.brandColor` (re-tematiza todos os bg-brand/text-brand).
 * 2. Adicione suas imagens em /public e troque ImagePlaceholder por next/image em app/page.tsx.
 * 3. Revise textos, preços e links de checkout (lib/config.ts).
 * 4. Atualize metadata/favicon em app/layout.tsx, app/icon.png e app/opengraph-image.png.
 * 5. Configure pixels/IDs de tracking em app/layout.tsx.
 */

export const theme = {
  /** Cor principal da marca (sobrescreve --color-brand só nesta página). */
  brandColor: "#3a7d44",
};

export const offerBar = {
  text: "OFERTA ESPECIAL DISPONÍVEL APENAS HOJE",
};

export const hero = {
  logo: { src: "/logo-aquarelas-da-natureza2.webp", alt: "Aquarelas da Natureza", width: 200, height: 60 },
  titleHighlight: "Aprenda a pintar aquarelas lindas ",
  title: "mesmo que você nunca tenha segurado um pincel.",
  image: { alt: "Mockup principal do pacote Aquarelas da Natureza", width: 383, height: 383 },
  subtitle:
    "Receba 35 projetos guiados com desenho-base, referência colorida e passo a passo visual para simplesmente imprimir e pintar.",
  ctaLabel: "QUERO PINTAR AGORA",
  note: "Você não precisa saber desenhar. Basta transferir o desenho-base, seguir a referência colorida e pintar passo a passo.",
  checks: [
    "Nunca fique travado sem saber por onde começar.",
    "Copie as cores usando referências prontas.",
    "Siga cada etapa visualmente sem depender de vídeos longos.",
    "Imprima quantas vezes quiser e pratique no seu ritmo.",
  ],
  deliveryNote: "📲 Você recebe tudo na hora, direto no seu e-mail",
  socialProofLabel: "Alunas satisfeitas",
};

export const materials = {
  title: "VEJA O QUE VOCÊ VAI RECEBER JÁ!",
  imageSize: { width: 1080, height: 1350 },
  items: [
    { src: "/beija1.webp",      alt: "Beija-flor em aquarela" },
    { src: "/beija2.webp",      alt: "Beija-flor em aquarela — referência colorida" },
    { src: "/costela1.webp",    alt: "Costela de adão em aquarela" },
    { src: "/costela2.webp",    alt: "Costela de adão em aquarela — referência colorida" },
    { src: "/eucalipto1.webp",  alt: "Eucalipto em aquarela" },
    { src: "/eucalipto2.webp",  alt: "Eucalipto em aquarela — referência colorida" },
    { src: "/girassol1.webp",   alt: "Girassol em aquarela" },
    { src: "/girassol2.webp",   alt: "Girassol em aquarela — referência colorida" },
    { src: "/raposa1.webp",     alt: "Raposa em aquarela" },
    { src: "/raposa2.webp",     alt: "Raposa em aquarela — referência colorida" },
    { src: "/rosa1.webp",       alt: "Rosa em aquarela" },
    { src: "/rosa2.webp",       alt: "Rosa em aquarela — referência colorida" },
  ],
};

export const testimonials = {
  title: "Veja o que nossas alunas estão pintando!",
  imageSize: { width: 1080, height: 1920 },
  items: [
    { src: "/Instagram%20story%20-%201%20%282%29.webp",  alt: "Depoimento de aluna no WhatsApp" },
    { src: "/Instagram%20story%20-%202%20%282%29.webp",  alt: "Depoimento de aluna no WhatsApp" },
    { src: "/Instagram%20story%20-%203%20%282%29.webp",  alt: "Depoimento de aluna no WhatsApp" },
    { src: "/Instagram%20story%20-%204%20%281%29.webp",  alt: "Depoimento de aluna no WhatsApp" },
    { src: "/Instagram%20story%20-%205%20%281%29.webp",  alt: "Depoimento de aluna no WhatsApp" },
    { src: "/Instagram%20story%20-%206%20%281%29.webp",  alt: "Depoimento de aluna no WhatsApp" },
    { src: "/Instagram%20story%20-%207%20%281%29.webp",  alt: "Depoimento de aluna no WhatsApp" },
    { src: "/Instagram%20story%20-%209%20%281%29.webp",  alt: "Depoimento de aluna no WhatsApp" },
    { src: "/Instagram%20story%20-%2010%20%281%29.webp", alt: "Depoimento de aluna no WhatsApp" },
  ],
};

export const whySection = {
  title: "AS AQUARELAS DA NATUREZA POSSUEM:",
  cards: [
    { icon: "🖊️", title: "Desenhos-base prontos", desc: "Para você não se preocupar em desenhar." },
    { icon: "🎨", title: "Referências coloridas", desc: "Escolha as cores com facilidade." },
    { icon: "👣", title: "Sequências visuais", desc: "Siga o passo a passo e finalize sua pintura." },
    { icon: "🖨️", title: "Versões prontas para imprimir", desc: "Comece a pintar imediatamente." },
    { icon: "🌿", title: "Projetos completos", desc: "Cada pintura é um guia para o sucesso." },
  ],
};

export const idealSection = {
  title: "ESTE MATERIAL É IDEAL PARA VOCÊ QUE DESEJA",
  items: [
    { title: "COMEÇAR A PINTAR SEM MEDO", desc: "Siga guias visuais que tornam a pintura simples e divertida, mesmo sem experiência." },
    { title: "TER RESULTADOS BONITOS RAPIDAMENTE", desc: "Finalize aquarelas que você terá orgulho de mostrar a amigos e familiares." },
    { title: "APROVEITAR UM HOBBY CRIATIVO", desc: "Desperte sua criatividade e relaxe enquanto pinta lindas aquarelas." },
    { title: "EVITAR FRUSTRAÇÕES", desc: "Tenha tudo que precisa para começar, sem travas ou inseguranças." },
    { title: "APRENDER A ESCOLHER AS CORES CERTAS", desc: "Use referências visuais que ajudam a combinar cores de forma harmoniosa." },
    { title: "DECORAR SEU ESPAÇO", desc: "Crie obras que podem embelezar sua casa e trazer alegria ao seu ambiente." },
  ],
};

export const offerSection = {
  title: "TUDO O QUE VOCÊ VAI RECEBER",
  pill: "⚡ACESSO IMEDIATO",
  cardTitle: "TUDO FOI ORGANIZADO PARA SER SIMPLES E FÁCIL DE APLICAR.",
  image: { alt: "Mockup do pacote Aquarelas da Natureza", width: 1100, height: 1100 },
  features: [
    "35 Aquarelas da Natureza prontas para pintar.",
    "Desenhos-base prontos para transferência.",
    "Referência colorida para cada pintura.",
    "Sequência visual de aplicação para fácil acompanhamento.",
    "Versões prontas para imprimir e usar.",
    "Acesso a bônus exclusivos para iniciantes.",
    "Suporte para dúvidas durante o uso.",
    "Material didático para facilitar sua experiência.",
    "Acesso imediato após a compra.",
  ],
  moreLabel: "E MUITO MAIS...",
  ctaLabel: "QUERO ACESSAR AGORA E PINTAR HOJE",
  deliveryNote: hero.deliveryNote,
};

export const bonusSection = {
  titleLines: ["E NÃO PARA POR AÍ... TEM MAIS!", "Você também vai receber…"],
  pill: "🎁 5 BÔNUS EXCLUSIVOS",
  exclusiveNote: ["BÔNUS INCLUSO APENAS", "NO PLANO COMPLETO"],
  items: [
    {
      src: "/bonus1.webp",
      title: "10 Primeiras Aquarelas",
      desc: "Dez pinturas menores e mais simples para quem nunca utilizou aquarela. Os projetos possuem poucos elementos, paletas reduzidas e traços fáceis de transferir. Servem como uma porta de entrada antes das pinturas principais.",
      price: "R$27",
    },
    {
      src: "/bonus2.webp",
      title: "15 Mini Aquarelas Botânicas",
      desc: "Quinze pequenos desenhos de flores, folhas, vasos e ramos para pinturas rápidas. Podem ser usados em cartões, marcadores de página, presentes e pequenas molduras. São projetos econômicos em papel e tinta.",
      price: "R$27",
    },
    {
      src: "/bonus3.webp",
      title: "6 Quadros Botânicos Combinados",
      desc: "Três pares de pinturas planejadas para serem emolduradas e usadas lado a lado. Cada conjunto possui cores, proporções e elementos que combinam visualmente. Você receberá uma aplicação pronta para decoração.",
      price: "R$27",
    },
    {
      src: "/bonus4.webp",
      title: "Guia de Impressão e Transferência",
      desc: "Explica visualmente como levar o desenho-base para o papel de aquarela. Inclui opções com grafite, papel carbono, janela, mesa de luz e impressão direta. Evita que você fique travada na primeira etapa.",
      price: "R$27",
    },
    {
      src: "/bonus5.webp",
      title: "Guia Visual de Materiais",
      desc: "Apresenta tintas, pincéis, papéis e acessórios essenciais para começar. Inclui opções básicas e econômicas, sem exigir materiais profissionais. Ajuda a comprar apenas o necessário.",
      price: "R$27",
    },
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
    image: { alt: "Materiais do Plano Básico Aquarelas da Natureza", width: 1104, height: 1104 },
    receiveLabel: "Você recebe:",
    features: [
      "35 Aquarelas da Natureza prontas para pintar.",
      "Desenhos-base prontos para transferência.",
      "Referência colorida para cada pintura.",
      "Sequência visual de aplicação para fácil acompanhamento.",
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
    image: { alt: "Mockup do plano completo Aquarelas da Natureza", width: 1100, height: 1100 },
    pill: "⚡5x MAIS CONTEÚDOS",
    features: [
      "35 Aquarelas da Natureza prontas para pintar.",
      "Desenhos-base prontos para transferência.",
      "Referência colorida para cada pintura.",
      "Sequência visual de aplicação para fácil acompanhamento.",
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
};

export const guarantee = {
  seal: { alt: "Selo de garantia de 7 dias", width: 241, height: 242 },
  title: "Compra 100% Segura e Garantida!",
  intro: "SEU INVESTIMENTO É TOTALMENTE SEGURO",
  lead: "Isso significa que, a qualquer momento, se você achar que:",
  bullets: [
    "o material não faz sentido para sua pintura.",
    "as aquarelas não atendem sua necessidade.",
    "ou simplesmente não quiser continuar.",
  ],
  outro: "Você pode solicitar o reembolso. Sem prazo, sem burocracia.",
  outroStrong: "O risco fica todo do nosso lado.",
  helpLabel: "Precisa de ajuda? Entre em contato conosco:",
};

export const contact = {
  email: "contato@aquarelasdanatureza.com",
};

export const stepsSection = {
  title: "COMO É O ACESSO",
  subtitle: "(SIGA OS PASSOS ABAIXO PARA COMEÇAR A PINTAR.)",
  ctaLabel: "QUERO COMEÇAR A PINTAR",
  steps: [
    {
      icon: "🛒",
      title: "Conclua sua compra",
      desc: "Após o pagamento, seu acesso é liberado automaticamente.",
      items: ["Receba o acesso por e-mail.", "Acesse a área de membros.", "Baixe os arquivos."],
    },
    {
      icon: "🖼️",
      title: "Escolha sua pintura",
      desc: "Navegue pelas aquarelas disponíveis e escolha a que mais gosta.",
      items: ["Veja as referências.", "Escolha seu desenho-base.", "Prepare seus materiais."],
    },
    {
      icon: "🎨",
      title: "Acompanhe a sequência visual",
      desc: "Siga passo a passo as instruções para pintar sua aquarela.",
      items: ["Transfira o desenho-base.", "Pinte seguindo as referências.", "Finalize sua obra."],
    },
    {
      icon: "🌿",
      title: "Compartilhe suas criações",
      desc: "Mostre suas aquarelas para amigos e familiares.",
      items: ["Sinta-se orgulhosa de suas criações.", "Receba feedback positivo.", "Inspire outras pessoas a pintar."],
    },
  ],
};

export const faq: readonly (readonly [string, string])[] = [
  ["Preciso saber desenhar para usar?", "Não! O material já inclui os desenhos-base prontos para transferência. Você não precisa criar o esboço do zero — basta transferir e começar a pintar."],
  ["O acesso é imediato?", "Sim! Assim que o pagamento for confirmado, você recebe o acesso por e-mail e já pode baixar todos os arquivos."],
  ["As aquarelas são para iniciantes?", "Sim, o material foi pensado especialmente para iniciantes. As referências coloridas e as sequências visuais guiam cada etapa, sem exigir conhecimento prévio."],
  ["Posso usar as aquarelas para decorar?", "Com certeza! As pinturas foram desenvolvidas com temática da natureza para ficarem lindas emolduradas e decorar qualquer ambiente da sua casa."],
  ["Qual é a política de reembolso?", "Você tem 7 dias de garantia total. Se não ficar satisfeita, basta entrar em contato e devolvemos 100% do valor pago, sem burocracia."],
  ["Os materiais são caros?", "Não. O Guia Visual de Materiais (incluso no Plano Completo) indica opções básicas e econômicas. Você não precisa de materiais profissionais para começar."],
];

export const footer = {
  legal:
    "Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Após sair do Facebook, a responsabilidade não é deles e sim do nosso site. Fazemos todos os esforços para indicar claramente e mostrar todas as provas do produto e usamos resultados reais. Nós não vendemos o seu e-mail ou qualquer informação para terceiros. Jamais fazemos algum tipo de spam. Se você tiver alguma dúvida, sinta-se à vontade para usar o link de contato e falar conosco em horário comercial de Segunda a Sextas das 09h00 às 18h00. Lemos e respondemos todas as mensagens por ordem de chegada.",
};
