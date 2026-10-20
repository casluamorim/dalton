-- SUPABASE SCHEMA PARA DALTON BUTKE
CREATE TABLE IF NOT EXISTS properties (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  tagline TEXT NOT NULL,
  category TEXT NOT NULL, -- Mansão, Penthouse, Casa em Condomínio, Terreno
  city TEXT NOT NULL,
  neighborhood TEXT NOT NULL,
  price NUMERIC NOT NULL,
  area NUMERIC NOT NULL,
  suites INTEGER NOT NULL,
  bathrooms INTEGER NOT NULL,
  garages INTEGER NOT NULL,
  appreciation TEXT NOT NULL,
  m2_value NUMERIC NOT NULL,
  description TEXT NOT NULL,
  cover_image TEXT NOT NULL,
  gallery TEXT[] DEFAULT '{}',
  has_tour_360 BOOLEAN DEFAULT false,
  tour_360_url TEXT,
  views_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE IF NOT EXISTS blueprints (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  property_id UUID REFERENCES properties(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  property_id UUID REFERENCES properties(id) ON DELETE SET NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  status TEXT DEFAULT 'NOVO_CONTATO',
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE IF NOT EXISTS visits (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  property_id UUID REFERENCES properties(id) ON DELETE CASCADE,
  client_name TEXT NOT NULL,
  client_phone TEXT NOT NULL,
  scheduled_at TIMESTAMP WITH TIME ZONE NOT NULL,
  address TEXT NOT NULL,
  vip_notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);
