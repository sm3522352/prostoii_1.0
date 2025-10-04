"use client";

import Section from "@/components/Section";
import Link from "next/link";
import { goal } from "@/lib/metrics";
import { useEffect } from "react";

export default function LegalPage() {
  useEffect(() => {
    goal("view_legal");
  }, []);

  return (
    <Section>
      <h1 className="text-2xl font-semibold mb-6">Юридические документы</h1>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <Link href="/docs/offer" className="text-accent underline">
            Договор оферты
          </Link>
        </li>
        <li>
          <Link href="/docs/privacy" className="text-accent underline">
            Политика конфиденциальности
          </Link>
        </li>
      </ul>
    </Section>
  );
}
