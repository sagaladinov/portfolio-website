import type { Metadata, Viewport } from "next";
import { cookies } from "next/headers";
import { Analytics } from "@vercel/analytics/next";
import { LangProvider } from "@/components/LangProvider";
import "@fontsource-variable/inter";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sultan Sagaladinov — Project Manager",
  description:
    "Project Manager: qmeta (FinTech), Ascle (MedTech), Beautobe (Beauty-tech), Avatariya. Открыт к предложениям.",
  openGraph: {
    title: "Sultan Sagaladinov — Project Manager",
    description: "Четыре продукта. Три индустрии.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#ffffff",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // Тема берётся из cookie на сервере — страница сразу приходит в нужной теме, без вспышки
  const theme = (await cookies()).get("theme")?.value === "dark" ? "dark" : "light";
  return (
    <html lang="ru" data-theme={theme} suppressHydrationWarning>
      <body>
        <LangProvider>{children}</LangProvider>
        <Analytics />
      </body>
    </html>
  );
}
