"use client";

import { useLang } from "./LangProvider";

const VALUES = ["4", "3", "1", "CS"];

export function Stats() {
  const { t } = useLang();
  return (
    <section className="stats" aria-label="Summary">
      <div className="wrap stats-grid">
        {VALUES.map((v, i) => (
          <div className="stat rv" key={i}>
            <b className={v === "CS" ? undefined : "num"}>{v}</b>
            <span>{t(`st.${i + 1}`)}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
