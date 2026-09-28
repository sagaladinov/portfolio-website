"use client";

import { useLang } from "./LangProvider";
import { site } from "@/content/i18n";

export function Footer() {
  const { t } = useLang();
  return (
    <footer>
      <div className="wrap">
        <span>© {new Date().getFullYear()} {site.name}</span>
        <span>{t("f.loc")}</span>
      </div>
    </footer>
  );
}
