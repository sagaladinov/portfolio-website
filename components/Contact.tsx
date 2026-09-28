"use client";

import { useRef, useState } from "react";
import { useLang } from "./LangProvider";
import { site } from "@/content/i18n";

export function Contact() {
  const { t, lang } = useLang();
  const [copied, setCopied] = useState(false);
  const mailRef = useRef<HTMLSpanElement>(null);

  async function copy() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      const r = document.createRange();
      if (mailRef.current) r.selectNodeContents(mailRef.current);
      const s = getSelection();
      s?.removeAllRanges();
      s?.addRange(r);
    }
  }

  return (
    <section className="contact section" id="contact" aria-labelledby="contact-title">
      <div className="wrap">
        <h2 className="h2" id="contact-title">{t("c.h")}</h2>
        <p className="lede">{t("c.lede")}</p>
        <div className="mail">
          <a href={`mailto:${site.email}`}><span ref={mailRef}>{site.email}</span></a>
          <button className="btn small" type="button" onClick={copy}>
            {copied ? t("c.copied") : t("c.copy")}
          </button>
        </div>
        <div className="cta-row">
          {site.cvUrl ? (
            <a className="btn" href={site.cvUrl} target="_blank" rel="noopener">
              {lang === "ru" ? "Скачать CV (PDF)" : "Download CV (PDF)"}
            </a>
          ) : (
            <span className="btn ghost" aria-disabled="true">{t("c.cv")}</span>
          )}
          {site.links.map((l) => (
            <a key={l.href} className="btn ghost" href={l.href} target="_blank" rel="noopener">{l.label}</a>
          ))}
        </div>
      </div>
    </section>
  );
}
