"use client";

import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="py-10 border-t border-border bg-surface">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-text-secondary">
          © {new Date().getFullYear()} Lamine Brahami. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
