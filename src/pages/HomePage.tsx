import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MessageSquare, ArrowUpRight, ShieldCheck, CheckCircle2, ChevronRight, Award, Compass, FileCheck } from 'lucide-react';
import { BROKER_INFO, INITIAL_PROPERTIES } from '../data/mockData';
import { Property } from '../types';

export default function HomePage() {
  const [properties, setProperties] = useState<Property[]>(INITIAL_PROPERTIES);
  const [filters, setFilters] = useState({
    type: 'ALL',
    city: 'ALL',
    suites: 'ALL'
  });

  const handleSearch = () => {
    let filtered = INITIAL_PROPERTIES;
    if (filters.type !== 'ALL') filtered = filtered.filter(p => p.category === filters.type);
    if (filters.city !== 'ALL') filtered = filtered.filter(p => p.city === filters.city);
    if (filters.suites !== 'ALL') filtered = filtered.filter(p => p.suites >= Number(filters.suites));
    setProperties(filtered);
    document.getElementById('colecao')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-obsidian text-platinum flex flex-col justify-between">
      {/* HEADER INSTITUCIONAL */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-obsidian/95 backdrop-blur-md border-b border-white/5 h-20">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <Link to="/" className="flex flex-col">
            <span className="cinzel text-xl sm:text-2xl font-bold tracking-widest text-platinum hover:text-champagne transition-colors">
              {BROKER_INFO.name.toUpperCase()}
            </span>
            <span className="text-[9px] tracking-[0.3em] uppercase text-champagne font-medium">
              Engenharia & Negócios Imobiliários
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8 text-xs uppercase tracking-widest text-platinum/70">
            <a href="#sobre" className="hover:text-champagne transition-colors">Tradição & Método</a>
            <a href="#solucoes" className="hover:text-champagne transition-colors">Personalizadas</a>
            <a href="#colecao" className="hover:text-champagne transition-colors">Acervo de Imóveis</a>
            <Link to="/admin" className="text-champagne border border-champagne/40 px-3 py-1.5 rounded hover:bg-champagne hover:text-obsidian transition-all">
              Painel Corretor
            </Link>
          </nav>

          <a
            href={`https://wa.me/${BROKER_INFO.cleanPhone}?text=Ol%C3%A1%20Dalton,%20gostaria%20de%20uma%20consultoria%20imobili%C3%A1ria%20exclusiva.`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-champagne to-champagneHover text-obsidian px-5 py-2.5 rounded font-semibold text-xs tracking-wider uppercase hover:shadow-lg transition-all"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Consultoria VIP</span>
          </a>
        </div>
      </header>

      {/* HERO COM INSPIRAÇÃO DIRETA DO SITE DALTONBUTKE.COM.BR */}
      <section className="relative min-h-[92vh] flex flex-col justify-center items-center pt-28 pb-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          <div className="lg:col-span-7">
            <span className="inline-block text-[11px] tracking-[0.3em] uppercase text-champagne font-semibold mb-4 border-l-2 border-champagne pl-3">
              ALTO PADRÃO • CURADORIA • ENGENHARIA
            </span>
            <h1 className="cinzel text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
              Alto padrão é um <span className="gold-gradient italic">compromisso técnico</span> antes de ser um endereço.
            </h1>
            <p className="text-sm sm:text-base text-platinum/80 font-light max-w-xl mb-8 leading-relaxed">
              {BROKER_INFO.subheadline}
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a href="#colecao" className="bg-champagne text-obsidian px-7 py-3 rounded font-bold text-xs uppercase tracking-widest hover:bg-champagneHover transition-all">
                Ver Coleção Privada
              </a>
              <a href="#sobre" className="border border-white/20 text-platinum hover:border-champagne px-7 py-3 rounded font-semibold text-xs uppercase tracking-widest transition-all">
                Conhecer Método
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-white/10">
              {BROKER_INFO.stats.map((s, idx) => (
                <div key={idx}>
                  <p className="cinzel text-2xl font-bold text-white">{s.value}</p>
                  <p className="text-[10px] uppercase tracking-wider text-champagne">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative rounded-2xl overflow-hidden glass-card p-3 border border-champagne/30 max-w-md">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1000&q=85"
                alt="Dalton Butke"
                className="w-full h-auto rounded-xl object-cover filter contrast-105"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-obsidian/90 backdrop-blur-md p-4 rounded-lg border border-champagne/40">
                <p className="text-xs font-bold text-white uppercase tracking-wider">{BROKER_INFO.name}</p>
                <p className="text-[10px] text-champagne font-mono">CRECI {BROKER_INFO.creci} | Especialista Técnico</p>
              </div>
            </div>
          </div>
        </div>

        {/* SEARCH BAR DE ALTO PADRÃO NO HERO */}
        <div className="max-w-6xl w-full bg-white/95 rounded-xl p-4 sm:p-5 shadow-2xl text-obsidian border border-champagne/40 mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-600 mb-1">Tipo de Imóvel</label>
              <select
                value={filters.type}
                onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                className="w-full bg-neutral-100 border border-neutral-300 rounded p-2.5 text-xs font-medium focus:outline-none"
              >
                <option value="ALL">Todos os Tipos</option>
                <option value="Mansão">Mansões & Casas de Praia</option>
                <option value="Penthouse">Penthouses & Triplex</option>
              </select>
            </div>

            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-600 mb-1">Localização</label>
              <select
                value={filters.city}
                onChange={(e) => setFilters({ ...filters, city: e.target.value })}
                className="w-full bg-neutral-100 border border-neutral-300 rounded p-2.5 text-xs font-medium focus:outline-none"
              >
                <option value="ALL">Todas as Cidades</option>
                <option value="Itajaí">Praia Brava / Itajaí</option>
                <option value="Balneário Camboriú">Balneário Camboriú</option>
                <option value="Governador Celso Ramos">Governador Celso Ramos</option>
              </select>
            </div>

            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-600 mb-1">Dormitórios</label>
              <select
                value={filters.suites}
                onChange={(e) => setFilters({ ...filters, suites: e.target.value })}
                className="w-full bg-neutral-100 border border-neutral-300 rounded p-2.5 text-xs font-medium focus:outline-none"
              >
                <option value="ALL">Qualquer Quantidade</option>
                <option value="4">4+ Suítes</option>
                <option value="5">5+ Suítes</option>
                <option value="6">6+ Suítes</option>
              </select>
            </div>

            <div className="flex items-end">
              <button
                onClick={handleSearch}
                className="w-full bg-[#1A568C] hover:bg-[#13426B] text-white py-2.5 px-4 rounded font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-all"
              >
                <Search className="w-4 h-4" />
                <span>Buscar Imóveis</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO TRADIÇÃO E INOVAÇÃO NA MESMA PLANTA */}
      <section id="sobre" className="py-24 bg-onyx border-y border-white/5 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <span className="text-xs uppercase tracking-[0.25em] text-champagne font-bold">Autoridade & Rigor Técnico</span>
            <h2 className="cinzel text-3xl sm:text-4xl text-white font-bold mt-2 mb-6">Tradição e inovação na mesma planta</h2>
            <p className="text-sm text-platinum/80 leading-relaxed font-light mb-6">
              Com mais de duas décadas de atuação no mercado imobiliário e forte alicerce na engenharia civil, Dalton Butke proporciona um atendimento consultivo onde cada imóvel passa por uma rigorosa diligência prévia técnica e jurídica.
            </p>
            <div className="glass-card p-6 rounded-xl border border-champagne/30 mb-6">
              <p className="text-xs italic text-platinum/90 leading-relaxed">
                "Não negociamos apenas metros quadrados; alinhamos estabilidade patrimonial, inteligência arquitetônica e segurança absoluta para a sua família."
              </p>
              <span className="block text-[10px] uppercase tracking-wider text-champagne font-bold mt-3">— Dalton Butke</span>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {BROKER_INFO.pillars.map((p, idx) => (
              <div key={idx} className="glass-card p-5 rounded-xl border border-white/5">
                <span className="text-champagne font-mono font-bold text-xs">0{idx + 1}</span>
                <h4 className="cinzel text-sm font-bold text-white mt-2 mb-2">{p.title}</h4>
                <p className="text-xs text-platinum/70 leading-relaxed font-light">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATÁLOGO DE IMÓVEIS (COM SLUGS DEDICADOS) */}
      <section id="colecao" className="max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-champagne font-semibold">Portfólio Selecionado</span>
            <h2 className="cinzel text-3xl sm:text-4xl text-platinum font-bold mt-2">Propriedades Extraordinárias</h2>
          </div>
          <p className="text-xs text-platinum/60 max-w-md mt-4 md:mt-0 font-light">
            Cada ativo possui sua própria landing page de alta conversão, plantas arquitetônicas humanizadas e métricas de valorização por metro quadrado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {properties.map((p) => (
            <div key={p.id} className="glass-card rounded-xl overflow-hidden group hover:border-champagne/60 transition-all flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <img src={p.coverImage} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90" />
                <div className="absolute top-4 left-4 bg-obsidian/80 backdrop-blur-md px-3 py-1 rounded text-[10px] tracking-widest uppercase text-champagne font-bold border border-champagne/30">
                  {p.category} • {p.city}
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <span className="text-[11px] text-platinum/50 uppercase tracking-widest">{p.neighborhood}</span>
                  <h3 className="cinzel text-lg text-white font-bold mt-1 group-hover:text-champagne transition-colors">{p.title}</h3>
                  <p className="text-xs text-platinum/70 line-clamp-2 mt-2 font-light">{p.tagline}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[9px] text-platinum/50 uppercase tracking-wider block">Valor Patrimonial</span>
                    <span className="cinzel text-base font-bold text-white">{p.price}</span>
                  </div>
                  <Link
                    to={`/imovel/${p.slug}`}
                    className="bg-champagne/10 hover:bg-champagne hover:text-obsidian text-champagne border border-champagne/40 px-4 py-2 rounded text-xs font-bold uppercase tracking-wider transition-all inline-flex items-center space-x-1.5"
                  >
                    <span>Ver Landing Page</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-onyx border-t border-white/5 text-xs text-platinum/50 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="cinzel text-lg font-bold text-platinum tracking-widest">DALTON BUTKE</span>
            <p className="text-xs text-platinum/60 mt-1">Intermediação de ativos de altíssimo padrão | CRECI 48.912-F</p>
          </div>
          <p className="text-[11px] font-mono text-champagne/80">&copy; 2026 Dalton Butke. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
