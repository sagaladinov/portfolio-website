"use client";

import { useLang } from "./LangProvider";

const CREDS = [
  "B.Sc. Computer Science · Taylor's University",
  "AWS Certified Cloud Practitioner",
  "Oracle Certified Java",
];

export function Skills() {
  const { t, skills, lang } = useLang();
  return (
    <section className="section" id="skills" aria-labelledby="skills-title">
      <div className="wrap">
        <div className="rv">
          <p className="kicker">{t("k.k")}</p>
          <h2 className="h2" id="skills-title">{t("k.h")}</h2>
        </div>
        <div className="skills-grid">
          {skills().map(([title, desc, where, href]) => (
            <div className="skill" key={title}>
              <h3>{title}</h3>
              <p>{desc}</p>
              <p className="src">{lang === "ru" ? "Где" : "Where"}: <a href={href}>{where}</a></p>
            </div>
          ))}
        </div>
        <div className="creds rv">{CREDS.map((c) => <span key={c}>{c}</span>)}</div>
      </div>
    </section>
  );
}
