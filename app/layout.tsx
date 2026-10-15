import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { LangProvider } from "@/components/LangProvider";
import "@fontsource-variable/inter";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sultan — Product Manager",
  description:
    "Product Manager: qmeta (FinTech), Ascle (MedTech), Beautobe (Beauty-tech), Avatariya. Открыт к предложениям.",
  openGraph: {
    title: "Sultan — Product Manager",
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <LangProvider>{children}</LangProvider>
        <Analytics />
      </body>
    </html>
  );
}
