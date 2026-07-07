"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { dictionaries } from "@/i18n/dictionaries";

type Language = "en" | "fr";

interface LanguageContextType {
  lang: Language;
  t: typeof dictionaries.en;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("en");

  useEffect(() => {
    // Optionally save/load from localStorage
    const savedLang = localStorage.getItem("portfolio_lang") as Language;
    if (savedLang && (savedLang === "en" || savedLang === "fr")) {
      setLang(savedLang);
    }
  }, []);

  const toggleLanguage = () => {
    setLang((prev) => {
      const newLang = prev === "en" ? "fr" : "en";
      localStorage.setItem("portfolio_lang", newLang);
      return newLang;
    });
  };

  const t = dictionaries[lang];

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
