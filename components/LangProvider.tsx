"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { T, type Lang, type Skill } from "@/content/i18n";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
  list: (key: string) => string[];
  skills: () => Skill[];
};

const LangContext = createContext<Ctx | null>(null);

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ru");

  // Язык из ?lang=en, #en или сохранённого выбора
  useEffect(() => {
    let next: Lang | null = null;
    const q = new URLSearchParams(location.search).get("lang");
    if (q === "en" || q === "ru") next = q;
    else if (location.hash === "#en") next = "en";
    else {
      try {
        const s = localStorage.getItem("lang");
        if (s === "en" || s === "ru") next = s;
      } catch {}
    }
    if (next) setLangState(next);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("lang", l);
    } catch {}
  }, []);

  const t = useCallback((k: string) => String(T[lang][k] ?? k), [lang]);
  const list = useCallback((k: string) => (T[lang][k] as string[]) ?? [], [lang]);
  const skills = useCallback(() => T[lang].sk as Skill[], [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang, t, list, skills }}>{children}</LangContext.Provider>
  );
}

export function useLang() {
  const c = useContext(LangContext);
  if (!c) throw new Error("useLang must be used inside LangProvider");
  return c;
}

/** Вывод строки, в которой может быть <strong>/<em> */
export function Html({ as: Tag = "span", html, ...rest }: { as?: React.ElementType; html: string } & Record<string, unknown>) {
  return <Tag {...rest} dangerouslySetInnerHTML={{ __html: html }} />;
}
