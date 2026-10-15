# Sultan — Product Manager portfolio

Next.js (App Router) + TypeScript. Без UI-библиотек: весь стиль в `app/globals.css`.

## Запуск

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # проверка перед деплоем
```

## Где что править

| Что | Где |
|---|---|
| Все тексты RU/EN | `content/i18n.ts` → объект `dict` |
| Email, CV, фото, LinkedIn/Telegram | `content/i18n.ts` → объект `site` |
| Цвета, шрифт, радиусы | `app/globals.css` → блок `:root` |
| Левая колонка (фото, имя, био) | `components/Profile.tsx` |
| Плитки главной: порядок и размер | `components/Bento.tsx` |
| Страница кейса qmeta | `app/work/qmeta/page.tsx`, `components/QmetaCase.tsx` |
| Экраны телефона qmeta | `components/PhoneScreens.tsx` |

**Размер плитки** задаётся классами: `w1`/`w2`/`w4` — ширина в колонках (из 4), `h1`/`h2`/`h3`/`h4` — высота (`w2 h2` — стандартная плитка, `w4 h1` — строка как кнопка контакта). Чтобы переставить плитки, просто поменяйте порядок блоков в `Bento.tsx`.

**Фото:** положите `public/avatar.jpg` и поставьте `avatar: "/avatar.jpg"` в `site`.

**CV:** положите файл в `public/cv.pdf` и поставьте `cvUrl: "/cv.pdf"` в `site`.

**Язык:** по умолчанию RU. Ссылка `?lang=en` открывает английскую версию — её удобно отправлять в международные компании.

## Деплой на Vercel

1. Создайте пустой репозиторий на GitHub (без README).
2. В папке проекта:
   ```bash
   git remote add origin https://github.com/<you>/sultan-portfolio.git
   git push -u origin main
   ```
3. vercel.com → **Add New → Project** → выберите репозиторий → **Deploy**. Настройки по умолчанию подходят.
4. В проекте Vercel: **Analytics → Enable**. Скрипт уже подключён в `app/layout.tsx`.
5. Свой домен: **Settings → Domains**.

Каждый `git push` в `main` деплоит сайт автоматически, а каждая другая ветка получает свою превью-ссылку.

## Отслеживание откликов

Отправляйте рекрутерам ссылку с меткой: `https://<домен>/?ref=kaspi`. В Vercel Analytics в разделе **Referrers / UTM** видно, какая компания открывала сайт.
