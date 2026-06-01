import { createContext, useContext, useState } from 'react';
import fr from '../translations/fr.json';
import en from '../translations/en.json';

const translations = { fr, en };

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('fr');

  const t = translations[lang];

  const toggleLang = () => setLang(l => (l === 'fr' ? 'en' : 'fr'));

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
