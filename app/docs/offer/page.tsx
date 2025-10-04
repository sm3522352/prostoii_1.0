"use client";

import { useEffect } from "react";
import Section from "@/components/Section";
import { goal } from "@/lib/metrics";

export default function OfferPage() {
  useEffect(() => {
    goal("view_offer");
  }, []);

  return (
    <Section>
      <h1 className="text-2xl font-semibold mb-4">Договор оферты</h1>
      <p className="text-muted mb-6">Дата вступления в силу: 28.11.2024</p>
      <p className="text-muted">
        Здесь размещён примерный текст пользовательского соглашения. Полная версия будет опубликована позже.
      </p>
    </Section>
  );
}
