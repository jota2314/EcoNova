'use client';
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Language, useTranslation } from '@/lib/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: ReturnType<typeof useTranslation>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Always start with default language to avoid hydration mismatch
  const [language, setLanguage] = useState<Language>('en');
  const [isHydrated, setIsHydrated] = useState(false);
  
  // Load saved language after hydration
  useEffect(() => {
    const saved = localStorage.getItem('language') as Language;
    if (saved && ['en', 'es', 'pt'].includes(saved)) {
      setLanguage(saved);
    }
    setIsHydrated(true);
  }, []);
  
  const t = useTranslation(language);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    if (isHydrated) {
      localStorage.setItem('language', lang);
      // Force page reload to ensure all translations update
      setTimeout(() => window.location.reload(), 50);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}