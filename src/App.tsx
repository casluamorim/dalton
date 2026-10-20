import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PropertyLandingPage from './pages/PropertyLandingPage';
import AdminDashboard from './pages/AdminDashboard';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Site Institucional Público Oficial */}
        <Route path="/" element={<HomePage />} />
        
        {/* Landing Pages Individuais dos Imóveis (100% isoladas, sem links de fuga) */}
        <Route path="/imovel/:slug" element={<PropertyLandingPage />} />
        
        {/* Painel Interno Completo (CRM, Criador de LPs, Roteiros, Portais) */}
        <Route path="/admin" element={<AdminDashboard />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
