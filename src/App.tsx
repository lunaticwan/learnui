import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CommandPalette } from './components/CommandPalette';
import { HomeView } from './views/HomeView';
import { EntryDetailView } from './views/EntryDetailView';
import { StylesHubView } from './views/StylesHubView';
import { StyleDetailView } from './views/StyleDetailView';
import { StyleVsView } from './views/StyleVsView';
import { TranslateTableView } from './views/TranslateTableView';
import { QuizView } from './views/QuizView';

export const App: React.FC = () => {
  const [cmdPaletteOpen, setCmdPaletteOpen] = useState(false);

  return (
    <LanguageProvider>
      <BrowserRouter>
        <Header onOpenCmdPalette={() => setCmdPaletteOpen(true)} />
        <CommandPalette open={cmdPaletteOpen} onOpenChange={setCmdPaletteOpen} />

        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/styles" element={<StylesHubView />} />
          <Route path="/styles/vs/:pair" element={<StyleVsView />} />
          <Route path="/styles/:slug" element={<StyleDetailView />} />
          <Route path="/translate" element={<TranslateTableView />} />
          <Route path="/guides/translate" element={<TranslateTableView />} />
          <Route path="/quiz" element={<QuizView />} />
          <Route path="/:platform/:slug" element={<EntryDetailView />} />
          <Route path="*" element={<HomeView />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </LanguageProvider>
  );
};
