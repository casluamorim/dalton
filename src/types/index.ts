export interface Blueprint {
  id?: string;
  title: string;
  description: string;
}

export interface Property {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: string;
  city: string;
  neighborhood: string;
  price: number | string;
  area: number | string;
  suites: number;
  bathrooms: number;
  garages: number;
  appreciation: string;
  m2Value: number | string;
  description: string;
  coverImage: string;
  gallery: string[];
  hasTour360: boolean;
  tour360Url?: string;
  viewsCount?: number;
  blueprints?: Blueprint[];
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: 'NOVO_CONTATO' | 'QUALIFICADO' | 'VISITA_AGENDADA' | 'PROPOSTA_ENVIADA' | 'CONCLUIDO';
  propertyTitle?: string;
  createdAt: string;
}

export interface Visit {
  id: string;
  clientName: string;
  clientPhone: string;
  scheduledTime: string;
  propertyTitle: string;
  address: string;
  vipNotes: string;
}
