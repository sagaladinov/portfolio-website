"use client";

import { useLang } from "./LangProvider";
import { site } from "@/content/i18n";

// Текст условий. Правьте здесь. Дата обновления — в UPDATED.
const UPDATED = { ru: "16 октября 2026", en: "October 16, 2026" };

const RU = [
  ["О сайте", [`sagaladinov.com — личный сайт-портфолио Султана Сагаладинова. Он рассказывает о профессиональном опыте и проектах владельца. Пользуясь сайтом, вы соглашаетесь с этими условиями.`]],
  ["Содержание", ["Описания проектов приведены для ознакомления и отражают личную роль владельца в них. Названия продуктов и компаний принадлежат их правообладателям. Упоминание продукта не означает, что сайт говорит от имени компании.", "Информация может меняться и не является публичной офертой."]],
  ["Интеллектуальная собственность", ["Тексты, фотографии и оформление сайта принадлежат владельцу. Копирование и использование материалов без письменного разрешения запрещено, кроме цитирования со ссылкой на сайт."]],
  ["Персональные данные и аналитика", ["Сайт не собирает формы, не требует регистрации и не использует рекламные cookie. Для подсчёта посещений используется Vercel Analytics в анонимном виде: без cookie и без идентификации посетителей.", "Если вы пишете на почту, ваш адрес и письмо используются только для ответа и не передаются третьим лицам."]],
  ["Внешние ссылки", ["Сайт может содержать ссылки на сторонние ресурсы. Владелец не отвечает за их содержание и политику конфиденциальности."]],
  ["Ответственность", ["Сайт предоставляется «как есть». Владелец не несёт ответственности за решения, принятые на основе информации с сайта."]],
  ["Изменения", ["Условия могут обновляться. Актуальная версия всегда находится на этой странице."]],
] as const;

const EN = [
  ["About this site", [`sagaladinov.com is the personal portfolio of ${site.name}. It describes the owner's professional experience and projects. By using the site, you agree to these terms.`]],
  ["Content", ["Project descriptions are provided for information and reflect the owner's personal role in them. Product and company names belong to their respective owners. Mentioning a product does not mean the site speaks on behalf of that company.", "Information may change and does not constitute a public offer."]],
  ["Intellectual property", ["The texts, photos and design of this site belong to the owner. Copying or reusing materials without written permission is not allowed, except for quoting with a link to the site."]],
  ["Personal data and analytics", ["The site has no forms, requires no sign-up and uses no advertising cookies. Visits are counted anonymously with Vercel Analytics, without cookies and without identifying visitors.", "If you send an email, your address and message are used only to reply and are not shared with third parties."]],
  ["External links", ["The site may link to third-party resources. The owner is not responsible for their content or privacy practices."]],
  ["Liability", ["The site is provided \"as is\". The owner is not liable for decisions made based on information from the site."]],
  ["Changes", ["These terms may be updated. The current version is always on this page."]],
] as const;

export function Terms() {
  const { lang } = useLang();
  const blocks = lang === "ru" ? RU : EN;
  return (
    <main className="legal">
      <h1>{lang === "ru" ? "Условия использования" : "Terms & Conditions"}</h1>
      <p className="upd">{lang === "ru" ? "Обновлено" : "Last updated"}: {UPDATED[lang]}</p>
      {blocks.map(([h, ps]) => (
        <section key={h}>
          <h2>{h}</h2>
          {ps.map((p) => <p key={p}>{p}</p>)}
        </section>
      ))}
      <h2>{lang === "ru" ? "Контакты" : "Contact"}</h2>
      <p>{lang === "ru" ? "Вопросы по условиям: " : "Questions about these terms: "}<a href={`mailto:${site.email}`}>{site.email}</a></p>
    </main>
  );
}
