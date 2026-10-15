"use client";

import Link from "next/link";
import { useState } from "react";
import { useLang } from "./LangProvider";
import { site } from "@/content/i18n";

const Arrow = () => <span className="arrow" aria-hidden="true">↗</span>;

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="3" /><path d="m4 7 8 6 8-6" />
  </svg>
);
const DocIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" /><path d="M14 3v5h5M9 13h6M9 17h4" />
  </svg>
);
const LinkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M10 14a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1" /><path d="M14 10a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1" />
  </svg>
);

/** Сетка плиток. Размер плитки: w1/w2/w4 — ширина в колонках, h1/h2 — высота (h2 = квадрат). */
export function Bento() {
  const { t, list } = useLang();
  const [copied, setCopied] = useState(false);

  async function copyMail() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      location.href = `mailto:${site.email}`;
    }
  }

  return (
    <section className="bento" aria-label="Projects">
      {/* qmeta — главный кейс, крупная плитка */}
      <Link href="/work/qmeta" className="tile case qmeta w2 h4">
        <Arrow />
        <p className="tag">qmeta · FinTech</p>
        <h2 className="t">{t("b.q.t")}</h2>
        <p className="s">{t("b.q.s")}</p>
        <div className="vis v-qmeta" aria-hidden="true">
          <div className="scr2">
            <div className="map">
              <div className="road" style={{ left: 0, right: 0, top: "38%", height: 9 }} />
              <div className="road" style={{ top: 0, bottom: 0, left: "58%", width: 9 }} />
              <div className="road" style={{ left: 0, right: "30%", top: "66%", height: 6, transform: "rotate(-12deg)" }} />
              {[[30,30],[66,48],[44,58],[22,72]].map(([l,tp], i) => <div key={i} className="pin" style={{ left: `${l}%`, top: `${tp}%` }} />)}
              {[[18,52],[76,26],[36,44]].map(([l,tp], i) => <div key={i} className="pin dim" style={{ left: `${l}%`, top: `${tp}%` }} />)}
            </div>
          </div>
        </div>
      </Link>

      {/* Статус */}
      <div className="tile status w2 h2">
        <span className="dot" aria-hidden="true" />
        <h2 className="t">{t("b.st.t")}</h2>
        <p className="s">{t("b.st.s")}</p>
      </div>

      {/* Цифры */}
      <div className="tile stat w1 h2"><b className="num">4</b><span>{t("b.n1")}</span></div>
      <div className="tile stat w1 h2"><b className="num">3</b><span>{t("b.n2")}</span></div>

      {/* Другие продукты */}
      <div className="tile case ascle w2 h2">
        <p className="tag">Ascle · MedTech</p>
        <p className="s" style={{ color: "var(--ink)", fontWeight: 500 }}>{t("b.a.s")}</p>
        <div className="vis v-ascle" aria-hidden="true">
          {[30,55,80,45,95,60,35,70,100,50,25,65,85,40,75,55,30,60].map((h, i) => <i key={i} style={{ height: `${h}%` }} />)}
        </div>
      </div>
      <div className="tile case beautobe w2 h2">
        <p className="tag">Beautobe · Beauty-tech</p>
        <p className="s" style={{ color: "var(--ink)", fontWeight: 500 }}>{t("b.b.s")}</p>
        <div className="vis v-beautobe" aria-hidden="true">
          {[0,1,2,3].map((i) => <i key={i} />)}
        </div>
      </div>
      <div className="tile case avatariya w2 h3">
        <p className="tag">Avatariya · Entertainment</p>
        <p className="s" style={{ color: "var(--ink)", fontWeight: 500 }}>{t("b.v.s")}</p>
        <div className="vis v-avatariya" aria-hidden="true">
          <i style={{ ["--r" as string]: "-8deg" }}>★</i><i style={{ ["--r" as string]: "6deg" }}>✓</i><i style={{ ["--r" as string]: "-3deg" }}>♥</i>
        </div>
      </div>

      {/* Навыки */}
      <div className="tile w2 h3">
        <h2 className="t" style={{ fontSize: 18 }}>{t("b.sk")}</h2>
        <div className="skills">{list("b.skl").map((s) => <span key={s}>{s}</span>)}</div>
      </div>

      {/* Контакты — строки как в link-in-bio */}
      <div className="tile rowt w4 h1">
        <span className="ic"><MailIcon /></span>
        <span className="lbl"><b>{t("b.mail")}</b><small>{site.email}</small></span>
        <button type="button" className="pill" onClick={copyMail}>{copied ? t("c.copied") : t("c.copy")}</button>
      </div>

      <div className="tile rowt w4 h1">
        <span className="ic"><DocIcon /></span>
        <span className="lbl"><b>{t("b.cv")}</b><small>{t("b.cvs")}</small></span>
        {site.cvUrl ? (
          <a className="pill" href={site.cvUrl} target="_blank" rel="noopener">{t("b.cvb")}</a>
        ) : (
          <span className="pill ghost">{t("b.soon")}</span>
        )}
      </div>

      {site.links.map((l) => (
        <a key={l.href} className="tile rowt w4 h1" href={l.href} target="_blank" rel="noopener">
          <span className="ic"><LinkIcon /></span>
          <span className="lbl"><b>{l.label}</b><small>{l.handle}</small></span>
          <span className="pill">↗</span>
        </a>
      ))}

      <p className="foot-note">© {new Date().getFullYear()} {site.name} · {t("f.loc")}</p>
    </section>
  );
}
