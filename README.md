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
| Email, CV, LinkedIn/Telegram | `content/i18n.ts` → объект `site` |
| Цвета, шрифты, отступы | `app/globals.css` → блок `:root` |
| Секции страницы | `components/*.tsx`, порядок в `app/page.tsx` |
| Экраны телефона qmeta | `components/PhoneScreens.tsx` |

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
