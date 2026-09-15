import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Default to Arabic or user's stored preference
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('portfolio_lang');
    if (saved === 'en' || saved === 'ar') return saved;
    return 'ar'; // Default to Arabic as requested by user
  });

  const isRTL = language === 'ar';

  useEffect(() => {
    localStorage.setItem('portfolio_lang', language);
    document.documentElement.lang = language;
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';

    if (isRTL) {
      document.documentElement.classList.add('rtl');
      document.body.classList.add('font-arabic');
    } else {
      document.documentElement.classList.remove('rtl');
      document.body.classList.remove('font-arabic');
    }
  }, [language, isRTL]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, toggleLanguage, isRTL }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
