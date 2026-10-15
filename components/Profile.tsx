"use client";

import { useLang } from "./LangProvider";
import { LangToggle } from "./LangToggle";
import { site } from "@/content/i18n";

const CREDS = ["B.Sc. Computer Science", "AWS Cloud Practitioner", "Oracle Java"];

/** Левая колонка: фото, имя, био. На десктопе закреплена при скролле. */
export function Profile() {
  const { t } = useLang();
  return (
    <aside className="profile">
      {site.avatar ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img className="avatar" src={site.avatar} alt={site.name} />
      ) : (
        <div className="avatar" aria-hidden="true">{site.name[0]}</div>
      )}
      <h1>{site.name}</h1>
      <p className="role">{t("p.role")}</p>
      <p className="bio">{t("p.bio")}</p>
      <div className="row">{CREDS.map((c) => <span className="chip" key={c}>{c}</span>)}</div>
      <div className="row"><LangToggle /></div>
    </aside>
  );
}
