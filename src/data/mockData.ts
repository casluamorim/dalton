import { Property, Lead, Visit } from '../types';

export const BROKER_INFO = {
  name: "Dalton Butke",
  headline: "Alto padrão é um compromisso técnico antes de ser um endereço.",
  subheadline: "Soluções completas e seguras para investidores e famílias que buscam excelência técnica e discrição no mercado de alto padrão.",
  creci: "48.912-F",
  phone: "+55 (47) 99999-9999",
  cleanPhone: "5547999999999",
  email: "contato@daltonbutke.com.br",
  stats: [
    { label: "Anos de Mercado", value: "20+" },
    { label: "Ativos Negociados", value: "+50" },
    { label: "Satisfação Técnica", value: "100%" },
    { label: "Visão Imersiva", value: "360°" }
  ],
  pillars: [
    { title: "Avaliação Técnica Imobiliária", desc: "Due diligence aprofundada, análise estrutural e validação documental antes de qualquer negociação." },
    { title: "Consultoria Patrimonial", desc: "Estratégias para proteção de capital, diversificação e rentabilidade no mercado catarinense." },
    { title: "Projetos Sob Medida", desc: "Acompanhamento desde a aquisição do lote até o projeto executivo e entrega da residência." },
    { title: "Acesso Off-Market", desc: "Portfólio exclusivo de propriedades confidenciais sem exposição pública na internet." }
  ]
};

export const INITIAL_PROPERTIES: Property[] = [
  {
    id: "prop-1",
    slug: "mansao-aurora-bravissima",
    title: "Mansão Aurora Bravíssima",
    tagline: "Residência Suspensa Frente-Mar com Heliponto Homologado",
    category: "Mansão",
    city: "Itajaí",
    neighborhood: "Praia Brava",
    price: "R$ 48.500.000",
    area: "1.420 m²",
    suites: 6,
    bathrooms: 8,
    garages: 8,
    appreciation: "+42,8% em 24 meses",
    m2Value: "R$ 34.150 / m²",
    description: "Concebida como uma escultura arquitetônica de concreto aparente, vidro laminado duplo e madeira nobre. Adega climatizada para 1.200 garrafas, spa privativo e borda infinita.",
    coverImage: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
    ],
    hasTour360: true,
    viewsCount: 4210,
    blueprints: [
      { title: "Pavimento Térreo", description: "Living 4 ambientes com pé-direito duplo e varanda gourmet oceânica." },
      { title: "Pavimento Superior", description: "Suíte master de 160m² com closet duplo e banheiros senhor e senhora." },
      { title: "Subsolo Técnico & Garagem", description: "Adega climatizada, cinema privativo e 8 vagas com carregador elétrico." }
    ]
  },
  {
    id: "prop-2",
    slug: "penthouse-cielo-balneario",
    title: "Penthouse Cielo Triplex",
    tagline: "O Ponto Mais Elevado da Orla com Piscina em Balanço 360°",
    category: "Penthouse",
    city: "Balneário Camboriú",
    neighborhood: "Barra Sul",
    price: "R$ 36.900.000",
    area: "890 m²",
    suites: 5,
    bathrooms: 7,
    garages: 6,
    appreciation: "+38,4% no último ciclo",
    m2Value: "R$ 41.460 / m²",
    description: "Triplex debruçado sobre a orla mais cobiçada da América Latina. Possui piscina privativa em balanço de vidro no 62º andar e acabamentos italianos.",
    coverImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80"
    ],
    hasTour360: true,
    viewsCount: 6890,
    blueprints: [
      { title: "1º Pavimento - Social", description: "Living imponente com lareira ecológica e cozinha gourmet." },
      { title: "2º Pavimento - Íntimo", description: "5 suítes plenas voltadas para o oceano com hidromassagem panorâmica." },
      { title: "3º Pavimento - Rooftop", description: "Deck molhado, piscina suspensa com fundo de vidro e lareira ao ar livre." }
    ]
  },
  {
    id: "prop-3",
    slug: "villa-san-marino-residence",
    title: "Villa San Marino Golf & Marine",
    tagline: "Privacidade Absoluta em Condomínio Fechado com Marina e Praia Particular",
    category: "Mansão",
    city: "Governador Celso Ramos",
    neighborhood: "Ponta dos Ganchos",
    price: "R$ 29.000.000",
    area: "1.850 m²",
    suites: 5,
    bathrooms: 6,
    garages: 6,
    appreciation: "+31,2% em 18 meses",
    m2Value: "R$ 26.300 / m²",
    description: "Condomínio cinematográfico com praia particular, atracadouro náutico para iates de até 90 pés e campo de golfe executivo.",
    coverImage: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80"
    ],
    hasTour360: true,
    viewsCount: 2310,
    blueprints: [
      { title: "Nível Náutico", description: "Deck com píer privativo e hangar náutico." },
      { title: "Residência Principal", description: "Suítes panorâmicas e living integrado com vista para o mar." }
    ]
  }
];

export const INITIAL_LEADS: Lead[] = [
  { id: "1", name: "Dr. Roberto Silveira", email: "roberto@silveiraadv.com.br", phone: "5547988221144", status: "VISITA_AGENDADA", propertyTitle: "Mansão Aurora Bravíssima", createdAt: "20/10/2026" },
  { id: "2", name: "Dra. Carolina Mendes", email: "carol.mendes@investcap.com", phone: "5511977112233", status: "QUALIFICADO", propertyTitle: "Penthouse Cielo Triplex", createdAt: "19/10/2026" },
  { id: "3", name: "Empresário Klaus Weber", email: "klaus@weberholding.de", phone: "5547991238899", status: "PROPOSTA_ENVIADA", propertyTitle: "Villa San Marino Golf", createdAt: "18/10/2026" }
];

export const INITIAL_VISITS: Visit[] = [
  { id: "1", clientName: "Dr. Roberto Silveira", clientPhone: "5547988221144", scheduledTime: "09:30", propertyTitle: "Mansão Aurora Bravíssima", address: "Rua das Bravíssimas, 420 - Praia Brava", vipNotes: "Cliente chega de helicóptero no heliponto da marina." },
  { id: "2", clientName: "Dra. Carolina Mendes", clientPhone: "5511977112233", scheduledTime: "14:00", propertyTitle: "Penthouse Cielo Triplex", address: "Av. Atlântica, Barra Sul - Balneário Camboriú", vipNotes: "Foco no sistema acústico e adega climatizada." }
];
