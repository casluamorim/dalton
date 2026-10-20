import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  LayoutDashboard,
  Globe,
  MapPin,
  Share2,
  PlusCircle,
  ExternalLink,
  MessageCircle
} from 'lucide-react';
import { INITIAL_PROPERTIES, INITIAL_LEADS, INITIAL_VISITS } from '../data/mockData';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'crm' | 'lps' | 'visits' | 'portals'>('crm');

  return (
    <div className="min-h-screen bg-obsidian text-platinum flex flex-col">
      {/* TOP BAR */}
      <header className="bg-onyx border-b border-white/10 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Link to="/" className="cinzel text-lg font-bold text-white hover:text-champagne transition-colors">
            DALTON BUTKE
          </Link>
          <span className="text-[10px] uppercase tracking-widest text-champagne bg-champagne/10 px-2.5 py-1 rounded border border-champagne/30">
            Advisory Hub (Admin)
          </span>
        </div>
        <Link to="/" className="text-xs text-platinum/70 hover:text-white flex items-center space-x-1">
          <span>Ver Site Público</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </Link>
      </header>

      {/* ABAS DO PAINEL */}
      <div className="bg-surface/60 border-b border-white/5 px-6 flex space-x-6 overflow-x-auto">
        <button
          onClick={() => setActiveTab('crm')}
          className={`py-4 text-xs uppercase tracking-wider font-semibold border-b-2 transition-all flex items-center space-x-2 ${
            activeTab === 'crm' ? 'border-champagne text-champagne' : 'border-transparent text-platinum/50 hover:text-white'
          }`}
        >
          <LayoutDashboard className="w-4 h-4" />
          <span>CRM de Leads</span>
        </button>
        <button
          onClick={() => setActiveTab('lps')}
          className={`py-4 text-xs uppercase tracking-wider font-semibold border-b-2 transition-all flex items-center space-x-2 ${
            activeTab === 'lps' ? 'border-champagne text-champagne' : 'border-transparent text-platinum/50 hover:text-white'
          }`}
        >
          <Globe className="w-4 h-4" />
          <span>Gestor de Landing Pages</span>
        </button>
        <button
          onClick={() => setActiveTab('visits')}
          className={`py-4 text-xs uppercase tracking-wider font-semibold border-b-2 transition-all flex items-center space-x-2 ${
            activeTab === 'visits' ? 'border-champagne text-champagne' : 'border-transparent text-platinum/50 hover:text-white'
          }`}
        >
          <MapPin className="w-4 h-4" />
          <span>Roteiro de Visitas</span>
        </button>
        <button
          onClick={() => setActiveTab('portals')}
          className={`py-4 text-xs uppercase tracking-wider font-semibold border-b-2 transition-all flex items-center space-x-2 ${
            activeTab === 'portals' ? 'border-champagne text-champagne' : 'border-transparent text-platinum/50 hover:text-white'
          }`}
        >
          <Share2 className="w-4 h-4" />
          <span>Portais (ZAP / VivaReal)</span>
        </button>
      </div>

      {/* CONTEÚDO PRINCIPAL DO ADMIN */}
      <main className="max-w-7xl mx-auto px-6 py-8 w-full flex-grow">
        {activeTab === 'crm' && (
          <div className="space-y-6">
            <h2 className="cinzel text-xl font-bold text-white">Funil Comercial & CRM VIP</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {INITIAL_LEADS.map((l) => (
                <div key={l.id} className="glass-card p-4 rounded-xl border border-white/10 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-champagne font-bold">{l.status}</span>
                    <h4 className="text-sm font-bold text-white mt-1">{l.name}</h4>
                    <p className="text-xs text-platinum/60 mt-1">{l.propertyTitle}</p>
                  </div>
                  <a
                    href={`https://wa.me/${l.phone}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 bg-champagne/10 hover:bg-champagne hover:text-obsidian text-champagne py-2 rounded text-center text-xs font-bold uppercase transition-all flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'lps' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="cinzel text-xl font-bold text-white">Landing Pages Cadastradas</h2>
              <button
                onClick={() => alert('Para cadastrar novos imóveis, utilize a integração com o Supabase!')}
                className="bg-champagne text-obsidian px-4 py-2 rounded text-xs font-bold uppercase tracking-wider flex items-center space-x-2"
              >
                <PlusCircle className="w-4 h-4" />
                <span>Nova Landing Page</span>
              </button>
            </div>
            <div className="overflow-x-auto glass-card rounded-xl border border-white/10">
              <table className="w-full text-left text-xs">
                <thead className="text-[10px] uppercase text-champagne bg-white/5 border-b border-white/10">
                  <tr>
                    <th className="p-4">Imóvel</th>
                    <th className="p-4">Slug Dedicado</th>
                    <th className="p-4">Views</th>
                    <th className="p-4 text-right">Ação</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {INITIAL_PROPERTIES.map((lp, i) => (
                    <tr key={i} className="hover:bg-white/5">
                      <td className="p-4 font-semibold text-white">{lp.title}</td>
                      <td className="p-4 font-mono text-champagne/80">/imovel/{lp.slug}</td>
                      <td className="p-4">{lp.viewsCount || 0}</td>
                      <td className="p-4 text-right">
                        <Link to={`/imovel/${lp.slug}`} className="text-champagne hover:underline inline-flex items-center space-x-1">
                          <span>Abrir LP</span>
                          <ExternalLink className="w-3 h-3" />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'visits' && (
          <div className="space-y-6">
            <h2 className="cinzel text-xl font-bold text-white">Roteiro de Visitas Agendadas</h2>
            <div className="glass-card p-6 rounded-xl border border-white/10 space-y-4">
              {INITIAL_VISITS.map((v) => (
                <div key={v.id} className="p-4 rounded-lg bg-onyx border border-white/5 flex items-start space-x-4">
                  <div className="text-champagne font-mono font-bold text-sm">{v.scheduledTime}</div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{v.clientName} • {v.propertyTitle}</h4>
                    <p className="text-xs text-platinum/60 mt-1">{v.address}</p>
                    <p className="text-xs text-champagne mt-1 italic">{v.vipNotes}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'portals' && (
          <div className="space-y-6">
            <h2 className="cinzel text-xl font-bold text-white">Integração com Portais Imobiliários</h2>
            <div className="glass-card p-6 rounded-xl border border-white/10 max-w-xl">
              <h4 className="text-sm font-bold text-white mb-2">Feed XML Padrão VRSync (ZAP / VivaReal)</h4>
              <p className="text-xs text-platinum/60 mb-4">
                Estrutura pronta para sincronização com banco de dados Supabase e exportação direta para portais parceiros.
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
