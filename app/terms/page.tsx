import type { Metadata } from "next";
import { CaseTopbar } from "@/components/CaseChrome";
import { Terms } from "@/components/Terms";

export const metadata: Metadata = {
  title: "Terms & Conditions · Sultan Sagaladinov",
  description: "Условия использования сайта sagaladinov.com",
};

export default function TermsPage() {
  return (
    <>
      <CaseTopbar />
      <Terms />
    </>
  );
}
