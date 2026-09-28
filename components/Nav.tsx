"use client";

import { useLang } from "./LangProvider";
import { site } from "@/content/i18n";

export function Nav() {
  const { lang, setLang, t } = useLang();
  return (
    <nav className="nav" aria-label="Main">
      <div className="wrap">
        <a className="brand" href="#top">{site.name}</a>
        <div className="nav-links">
          <a href="#qmeta">{t("nav.work")}</a>
          <a href="#skills">{t("nav.skills")}</a>
          <a href="#contact">{t("nav.contact")}</a>
        </div>
        <div className="lang" role="group" aria-label="Language">
          {(["ru", "en"] as const).map((l) => (
            <button key={l} type="button" aria-pressed={lang === l} onClick={() => setLang(l)}>
              {l.toUpperCase()}
            </button>
          ))}
        </div>
        <a className="btn small" href={site.cvUrl ?? "#contact"} {...(site.cvUrl ? { target: "_blank", rel: "noopener" } : {})}>
          {t("cta.cv")}
        </a>
      </div>
    </nav>
  );
}
