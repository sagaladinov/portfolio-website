"use client";

import { useLang } from "./LangProvider";

export function LangToggle() {
  const { lang, setLang } = useLang();
  return (
    <div className="lang" role="group" aria-label="Language">
      {(["ru", "en"] as const).map((l) => (
        <button key={l} type="button" aria-pressed={lang === l} onClick={() => setLang(l)}>
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
