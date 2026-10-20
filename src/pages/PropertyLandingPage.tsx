import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MessageCircle, Lock } from 'lucide-react';
import { INITIAL_PROPERTIES, BROKER_INFO } from '../data/mockData';

export default function PropertyLandingPage() {
  const { slug } = useParams<{ slug: string }>();

  const property = INITIAL_PROPERTIES.find(p => p.slug === slug) || INITIAL_PROPERTIES[0];

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Solicitação recebida com sucesso. Dalton Butke entrará em contato em instantes.');
    window.open(`https://wa.me/${BROKER_INFO.cleanPhone}?text=Ol%C3%A1%20Dalton,%20solicitei%20o%20book%20de%20apresenta%C3%A7%C3%A3o%20do%20im%C3%B3vel:%20${encodeURIComponent(property.title)}`, '_blank');
  };

  return (
    <div className="bg-obsidian min-h-screen text-platinum">
      {/* BARRA SUPERIOR TOTALMENTE ISOLADA - SEM LINKS EXTERNOS */}
      <div className="sticky top-0 z-40 bg-obsidian/95 backdrop-blur-md border-b border-white/10 px-6 py-3 flex items-center justify-between">
        <Link to="/" className="text-[10px] tracking-widest text-platinum/60 hover:text-champagne uppercase flex items-center space-x-1.5">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Voltar ao Acervo Geral</span>
        </Link>
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] uppercase tracking-widest text-champagne font-bold">Atendimento Confidencial</span>
        </div>
      </div>

      {/* HERO CINEMATOGRÁFICO DA LANDING PAGE */}
      <div className="relative min-h-[85vh] flex flex-col justify-end p-6 sm:p-16 overflow-hidden">
        <img src={property.coverImage} alt={property.title} className="absolute inset-0 w-full h-full object-cover filter brightness-[0.4] contrast-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" />

        <div className="relative z-10 max-w-4xl">
          <span className="bg-champagne text-obsidian font-bold text-[10px] tracking-widest uppercase px-3 py-1 rounded inline-block mb-3">
            {property.category} Exclusiva • {property.city}
          </span>
          <h1 className="cinzel text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-3 leading-tight">
            {property.title}
          </h1>
          <p className="text-sm sm:text-base text-platinum/80 font-light max-w-2xl mb-8">
            {property.tagline}
          </p>

          <div className="glass-card p-6 rounded-xl border border-champagne/40 inline-flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div>
              <span className="text-[10px] text-platinum/60 uppercase tracking-widest block">Valor de Investimento</span>
              <span className="cinzel text-2xl sm:text-3xl font-bold text-white">{property.price}</span>
              <span className="block text-[11px] text-champagne mt-0.5">{property.m2Value}</span>
            </div>
            <div className="h-10 w-px bg-white/10 hidden sm:block" />
            <a
              href={`https://wa.me/${BROKER_INFO.cleanPhone}?text=Ol%C3%A1%20Dalton,%20gostaria%20de%20agendar%20uma%20visita%20para%20o%20im%C3%B3vel:%20${encodeURIComponent(property.title)}`}
              target="_blank"
              rel="noreferrer"
              className="bg-champagne hover:bg-champagneHover text-obsidian px-6 py-3.5 rounded font-bold text-xs uppercase tracking-wider flex items-center space-x-2 transition-all shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Agendar Apresentação VIP</span>
            </a>
          </div>
        </div>
      </div>

      {/* MÉTRICAS E VALORIZAÇÃO REGIONAL */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          <div className="glass-card p-5 rounded-lg border border-white/5">
            <span className="text-[10px] uppercase text-champagne tracking-widest block mb-1">Área Construída</span>
            <span className="cinzel text-xl font-bold text-white">{property.area}</span>
          </div>
          <div className="glass-card p-5 rounded-lg border border-white/5">
            <span className="text-[10px] uppercase text-champagne tracking-widest block mb-1">Acomodações</span>
            <span className="cinzel text-xl font-bold text-white">{property.suites} Suítes</span>
          </div>
          <div className="glass-card p-5 rounded-lg border border-white/5">
            <span className="text-[10px] uppercase text-champagne tracking-widest block mb-1">Garagens</span>
            <span className="cinzel text-xl font-bold text-white">{property.garages} Vagas</span>
          </div>
          <div className="glass-card p-5 rounded-lg border border-champagne/30 bg-champagne/5">
            <span className="text-[10px] uppercase text-champagne tracking-widest block mb-1">Valorização Regional</span>
            <span className="cinzel text-xl font-bold text-champagne">{property.appreciation}</span>
          </div>
        </div>

        {/* PLANTAS ARQUITETÔNICAS HUMANIZADAS */}
        {property.blueprints && property.blueprints.length > 0 && (
          <div className="mb-20">
            <span className="text-xs uppercase tracking-[0.25em] text-champagne font-bold">Plantas e Layout</span>
            <h2 className="cinzel text-2xl sm:text-3xl text-white font-bold mt-2 mb-6">Distribuição Espacial dos Pavimentos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {property.blueprints.map((bp, i) => (
                <div key={i} className="glass-card p-6 rounded-xl border border-white/10 hover:border-champagne/40 transition-all">
                  <span className="text-xs font-bold text-champagne font-mono">0{i + 1}</span>
                  <h3 className="cinzel text-base font-bold text-white mt-2 mb-2">{bp.title}</h3>
                  <p className="text-xs text-platinum/70 leading-relaxed font-light">{bp.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FORMULÁRIO DE PROPOSTA SIGILOSA */}
        <div className="glass-card max-w-2xl mx-auto p-8 rounded-2xl border border-champagne/40 text-center">
          <Lock className="w-8 h-8 text-champagne mx-auto mb-3" />
          <h3 className="cinzel text-2xl text-white font-bold">Solicitar Book de Apresentação</h3>
          <p className="text-xs text-platinum/70 max-w-md mx-auto mt-2 mb-6">
            Preencha seus dados para receber o memorial descritivo confidencial diretamente no seu WhatsApp.
          </p>

          <form onSubmit={handleLeadSubmit} className="space-y-4 text-left">
            <div>
              <label className="block text-[10px] uppercase tracking-wider text-platinum/60 mb-1">Nome Completo</label>
              <input type="text" required placeholder="Ex.: Dr. Roberto Silveira" className="w-full bg-onyx border border-white/10 rounded px-4 py-2.5 text-xs text-white focus:outline-none focus:border-champagne" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] uppercase tracking-wider text-platinum/60 mb-1">WhatsApp Privado</label>
                <input type="tel" required placeholder="(47) 99999-9999" className="w-full bg-onyx border border-white/10 rounded px-4 py-2.5 text-xs text-white focus:outline-none focus:border-champagne" />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-wider text-platinum/60 mb-1">E-mail</label>
                <input type="email" required placeholder="roberto@adv.com.br" className="w-full bg-onyx border border-white/10 rounded px-4 py-2.5 text-xs text-white focus:outline-none focus:border-champagne" />
              </div>
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-champagne to-champagneHover text-obsidian py-3.5 rounded font-bold text-xs uppercase tracking-widest hover:shadow-lg transition-all mt-4">
              Receber Book Confidencial
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
