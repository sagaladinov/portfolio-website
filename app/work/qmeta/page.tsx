import type { Metadata } from "next";
import { CaseTopbar, CaseFooter } from "@/components/CaseChrome";
import { QmetaCase } from "@/components/QmetaCase";

export const metadata: Metadata = {
  title: "qmeta — кейс · Sultan",
  description: "Необанк на базе Halyk BaaS: карта мерчантов, QR-оплата и геймификация транзакций.",
};

export default function QmetaPage() {
  return (
    <>
      <CaseTopbar />
      <main>
        <QmetaCase />
        <CaseFooter />
      </main>
    </>
  );
}
