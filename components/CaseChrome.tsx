"use client";

import Link from "next/link";
import { useLang } from "./LangProvider";
import { LangToggle } from "./LangToggle";
import { ThemeToggle } from "./ThemeToggle";

export function CaseTopbar() {
  const { t } = useLang();
  return (
    <nav className="topbar" aria-label="Case">
      <div className="wrap">
        <Link href="/" className="back"><i aria-hidden="true">←</i>{t("case.back")}</Link>
        <div className="ctrls"><LangToggle /><ThemeToggle /></div>
      </div>
    </nav>
  );
}

export function CaseFooter() {
  const { t } = useLang();
  return (
    <div className="next-case wrap">
      <Link href="/" className="btn">← {t("case.more")}</Link>
    </div>
  );
}
