"use client";

import { useLang } from "./LangProvider";
import { LangToggle } from "./LangToggle";
import { ThemeToggle } from "./ThemeToggle";
import { site } from "@/content/i18n";

/** Левая колонка: фото, имя, био. На десктопе закреплена при скролле. */
export function Profile() {
  const { t } = useLang();
  return (
    <aside className="profile">
      {site.avatar ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img className="avatar" src={site.avatar} alt={t("p.name")} />
      ) : (
        <div className="avatar" aria-hidden="true">{t("p.name")[0]}</div>
      )}
      <h1>
        {t("p.name")}
        <svg className="verified" viewBox="0 0 24 24" role="img" aria-label="Verified">
          {/* Material Symbols "verified" (Google, Apache 2.0) — тот же значок, что на avely.me */}
          <path fill="currentColor" d="M10.95 12.7L9.5 11.275Q9.225 11 8.813 11t-.713.3q-.275.275-.275.7t.275.7l2.15 2.15q.3.3.7.3t.7-.3l4.25-4.25q.3-.3.287-.7t-.287-.7q-.3-.3-.712-.312t-.713.287zm-2.8 9.05L6.7 19.3l-2.75-.6q-.375-.075-.6-.387t-.175-.688L3.45 14.8l-1.875-2.15q-.25-.275-.25-.65t.25-.65L3.45 9.2l-.275-2.825q-.05-.375.175-.688t.6-.387l2.75-.6l1.45-2.45q.2-.325.55-.438t.7.038l2.6 1.1l2.6-1.1q.35-.15.7-.038t.55.438L17.3 4.7l2.75.6q.375.075.6.388t.175.687L20.55 9.2l1.875 2.15q.25.275.25.65t-.25.65L20.55 14.8l.275 2.825q.05.375-.175.688t-.6.387l-2.75.6l-1.45 2.45q-.2.325-.55.438t-.7-.038l-2.6-1.1l-2.6 1.1q-.35.15-.7.038t-.55-.438" />
        </svg>
      </h1>
      <p className="role">{t("p.role")}</p>
      <p className="bio">{t("p.bio")}</p>
      <div className="row"><LangToggle /><ThemeToggle /></div>
    </aside>
  );
}
