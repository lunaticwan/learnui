import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { LanguageProvider } from './context/LanguageContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CommandPalette } from './components/CommandPalette';
import { ScrollToTop } from './components/ScrollToTop';
import { HomeView } from './views/HomeView';
import { EntryDetailView } from './views/EntryDetailView';
import { StylesHubView } from './views/StylesHubView';
import { StyleDetailView } from './views/StyleDetailView';
import { StyleVsView } from './views/StyleVsView';
import { TranslateTableView } from './views/TranslateTableView';

export const App: React.FC = () => {
  const [cmdPaletteOpen, setCmdPaletteOpen] = useState(false);

  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Toaster position="bottom-right" richColors closeButton />
        <Header onOpenCmdPalette={() => setCmdPaletteOpen(true)} />
        <CommandPalette open={cmdPaletteOpen} onOpenChange={setCmdPaletteOpen} />

        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/styles" element={<StylesHubView />} />
          <Route path="/styles/vs/:pair" element={<StyleVsView />} />
          <Route path="/styles/:slug" element={<StyleDetailView />} />
          <Route path="/translate" element={<TranslateTableView />} />
          <Route path="/guides/translate" element={<TranslateTableView />} />
          <Route path="/:platform/:slug" element={<EntryDetailView />} />
          <Route path="*" element={<HomeView />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </LanguageProvider>
  );
};
