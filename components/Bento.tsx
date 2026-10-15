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
const PlaneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 4 3 11l6 2.2L18 7l-6.8 7.4L17.5 20z" /><path d="m11.2 14.4-.2 5.1 2.6-3.3" />
  </svg>
);
const LinkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M10 14a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1" /><path d="M14 10a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1" />
  </svg>
);

/** Сетка плиток. Размер плитки: w1/w2/w4 — ширина в колонках, h1/h2 — высота (h2 = квадрат). */
export function Bento() {
  const { t, list, lang } = useLang();
  const cv = site.cvUrl[lang] ?? site.cvUrl[lang === "ru" ? "en" : "ru"];
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
    <div className="bento-wrap">
      {/* ===== Обо мне ===== */}
      <h2 className="sec">{t("b.about")}</h2>
      <section className="bento" aria-label={t("b.about")}>

      <div className="tile status w2 h2">
        <span className="dot" aria-hidden="true" />
        <h3 className="t">{t("b.st.t")}</h3>
        <p className="s">{t("b.st.s")}</p>
      </div>
      <div className="tile stat w1 h2"><b className="num">4</b><span>{t("b.n1")}</span></div>
      <div className="tile stat w1 h2"><b className="num">3</b><span>{t("b.n2")}</span></div>

      <div className="tile w4 h2">
        <h3 className="t" style={{ fontSize: 18 }}>{t("b.sk")}</h3>
        <div className="skills">{list("b.skl").map((x) => <span key={x}>{x}</span>)}</div>
      </div>

      </section>

      {/* ===== Проекты: одинаковые карточки ===== */}
      <h2 className="sec">{t("b.projects")}</h2>
      <section className="bento" aria-label={t("b.projects")}>

      <Link href="/work/qmeta" className="tile proj qmeta w1 h4">
        <Arrow />
        <p className="tag">qmeta · FinTech</p>
        <h3 className="t">{t("b.q.t")}</h3>
        <p className="s">{t("b.q.s")}</p>
        <div className="pv pv-qmeta" aria-hidden="true">
          <div className="map">
            <div className="road" style={{ left: 0, right: 0, top: "40%", height: 8 }} />
            <div className="road" style={{ top: 0, bottom: 0, left: "62%", width: 8 }} />
            <div className="road" style={{ left: 0, right: "35%", top: "72%", height: 6, transform: "rotate(-8deg)" }} />
            {[[20,25],[48,58],[74,30],[86,70]].map(([l,tp], i) => <div key={i} className="pin" style={{ left: `${l}%`, top: `${tp}%` }} />)}
            {[[34,30],[58,78],[12,66]].map(([l,tp], i) => <div key={i} className="pin dim" style={{ left: `${l}%`, top: `${tp}%` }} />)}
          </div>
        </div>
      </Link>

      <div className="tile proj ascle w1 h4">
        <p className="tag">Ascle · MedTech</p>
        <h3 className="t">{t("b.a.t")}</h3>
        <p className="s">{t("b.a.s")}</p>
        {/* Как на ascle.ai: аудиоанализ → диаризация → готовый отчёт */}
        <div className="pv pv-ascle" aria-hidden="true">
          <div className="flow">
            {[
              [t("b.a.f1"), <path key="m" d="M12 3a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3zM5 11a7 7 0 0 0 14 0M12 18v3" />],
              [t("b.a.f2"), <path key="u" d="M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM2 21v-1a6 6 0 0 1 12 0v1M16 3.5a4 4 0 0 1 0 7.5M22 21v-1a6 6 0 0 0-4-5.6" />],
              [t("b.a.f3"), <path key="d" d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5M9 13h6M9 17h4" />],
            ].map(([label, icon], i) => (
              <div className="fstep" key={i}>
                <span className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{icon}</svg></span>
                <small>{label}</small>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="tile proj beautobe w1 h4">
        <p className="tag">Beautobe · Beauty-tech</p>
        <h3 className="t">{t("b.b.t")}</h3>
        <p className="s">{t("b.b.s")}</p>
        <div className="pv pv-beautobe" aria-hidden="true">
          {[[22,40],[46,62],[70,34],[84,66],[34,74]].map(([l,tp], i) => <i key={i} style={{ left: `${l}%`, top: `${tp}%` }} />)}
        </div>
      </div>

      <div className="tile proj avatariya w1 h4">
        <p className="tag">Avatariya · Entertainment</p>
        <h3 className="t">{t("b.v.t")}</h3>
        <p className="s">{t("b.v.s")}</p>
        <div className="pv pv-avatariya" aria-hidden="true">
          <i style={{ ["--r" as string]: "-8deg" }}>★</i><i style={{ ["--r" as string]: "6deg" }}>✓</i><i style={{ ["--r" as string]: "-3deg" }}>♥</i>
        </div>
      </div>

      </section>

      {/* ===== Стажировки: компактная таймлайн-строка ===== */}
      <h2 className="sec">{t("b.int")}</h2>
      <section className="bento" aria-label={t("b.int")}>
        <ol className="tile timeline w4 h2">
          {[
            { k: "i1", company: "Netmedias Leashares Sdn Bhd.", role: "Frontend Developer Intern", stack: ["Laravel", "Vue.js", "AWS"] },
            { k: "i2", company: "Spassolab Sdn Bhd.", role: "Web Developer Intern", stack: ["Flutter", "PHP", "JavaScript", "MySQL"] },
          ].map((x) => (
            <li className="tl-row" key={x.k}>
              <span className="tl-dot" aria-hidden="true" />
              <span className="tl-main"><b>{x.role}</b><small>{x.company} · {t("b.kl")}</small></span>
              <span className="tl-stack">{x.stack.join(" · ")}</span>
              <span className="tl-when">{t(`${x.k}.when`)}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* ===== Образование ===== */}
      <h2 className="sec">{t("b.edu")}</h2>
      <section className="bento" aria-label={t("b.edu")}>
        <div className="tile edu w2 h2">
          <span className="eico" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10 12 5 2 10l10 5 10-5z" /><path d="M6 12v5c3 2 9 2 12 0v-5M22 10v6" /></svg>
          </span>
          <p className="tag">{t("b.edu.loc")} · 2019 – 2024</p>
          <div className="uni"><h3 className="t">Taylor&apos;s University</h3><span className="gpa">WCGPA 3.26/4.0</span></div>
          <p className="s">{t("b.edu.deg")}</p>
        </div>
        <div className="tile edu w2 h2">
          <span className="eico" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="9" r="6" /><path d="m8.5 13.5-1.5 8 5-3 5 3-1.5-8" /></svg>
          </span>
          <p className="tag">{t("b.cert.k")}</p>
          <ul className="certs">
            <li><b>AWS Certified Cloud Practitioner</b><small>Amazon Web Services</small></li>
            <li><b>Oracle Certified Java</b><small>Oracle</small></li>
          </ul>
        </div>
      </section>

      {/* ===== Контакты ===== */}
      <h2 className="sec">{t("b.contacts")}</h2>
      <section className="bento" aria-label={t("b.contacts")}>

      {/* Контакты — строки как в link-in-bio */}
      <div className="tile rowt w4 h1">
        <span className="ic"><MailIcon /></span>
        <span className="lbl"><b>{t("b.mail")}</b><small>{site.email}</small></span>
        <button type="button" className="pill" onClick={copyMail}>{copied ? t("c.copied") : t("c.copy")}</button>
      </div>

      {site.links.map((l) => (
        <a key={l.href} className="tile rowt w4 h1" href={l.href} target="_blank" rel="noopener">
          {l.label === "Telegram" ? (
            <span className="ic tg"><PlaneIcon /></span>
          ) : (
            <span className="ic"><LinkIcon /></span>
          )}
          <span className="lbl"><b>{l.label === "Telegram" ? t("b.tg") : l.label}</b><small>{l.handle}</small></span>
          <span className="pill">{t("b.msg")}</span>
        </a>
      ))}

      <div className="tile rowt w4 h1">
        <span className="ic"><DocIcon /></span>
        <span className="lbl"><b>{t("b.cv")}</b><small>{t("b.cvs")}</small></span>
        {cv ? (
          <a className="pill" href={cv} target="_blank" rel="noopener">{t("b.cvb")}</a>
        ) : (
          <span className="pill ghost">{t("b.soon")}</span>
        )}
      </div>

      <p className="foot-note">© {new Date().getFullYear()} {t("p.name")} · {t("f.loc")} · <Link href="/terms">{t("f.terms")}</Link></p>
    </section>
    </div>
  );
}
