"use client";

import { useLang } from "./LangProvider";
import { site } from "@/content/i18n";

export function Hero() {
  const { t } = useLang();
  return (
    <header className="hero wrap">
      <div className="status"><i /><span>{t("hero.status")}</span></div>
      <p className="eyebrow">{site.name} · Product Manager</p>
      <h1><span>{t("hero.h1a")}</span><span>{t("hero.h1b")}</span></h1>
      <p className="lede">{t("hero.lede")}</p>
      <div className="cta-row">
        <a className="btn" href="#qmeta">{t("cta.work")}</a>
        <a className="btn ghost" href={site.cvUrl ?? "#contact"} {...(site.cvUrl ? { target: "_blank", rel: "noopener" } : {})}>
          {t("cta.cv2")}
        </a>
      </div>
    </header>
  );
}
