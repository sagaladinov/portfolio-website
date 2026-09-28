"use client";

import { useLang } from "./LangProvider";

const CASES = [
  { key: "a", cls: "ascle", name: "Ascle", vert: "MedTech · AI" },
  { key: "b", cls: "beautobe", name: "Beautobe", vert: "Beauty-tech · Marketplace" },
  { key: "v", cls: "avatariya", name: "Avatariya", vert: "Entertainment · Mobile" },
];

export function Cases() {
  const { t, list } = useLang();
  return (
    <section className="cases section" id="work" aria-labelledby="work-title">
      <div className="wrap">
        <div className="head rv">
          <div>
            <p className="kicker">{t("w.k")}</p>
            <h2 className="h2" id="work-title">{t("w.h")}</h2>
          </div>
        </div>
        <div className="case-grid">
          {CASES.map((c) => (
            <article key={c.key} className={`case ${c.cls} rv`}>
              <div className="glyph" />
              <p className="vert">{c.vert}</p>
              <h3>{c.name}</h3>
              <p className="what">{t(`${c.key}.what`)}</p>
              <ul>{list(`${c.key}.l`).map((x, i) => <li key={i}>{x}</li>)}</ul>
              <p className="soon">{t("soon")}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
