"use client";

import { useEffect } from "react";
import Section from "@/components/Section";
import { goal } from "@/lib/metrics";

export default function PrivacyPage() {
  useEffect(() => {
    goal("view_privacy");
  }, []);

  return (
    <Section>
      <h1 className="text-2xl font-semibold mb-4">Политика конфиденциальности</h1>
      <p className="text-muted mb-6">Сбор и обработка персональных данных регулируются законом 152-ФЗ.</p>
      <p className="text-muted">
        В этом разделе будет опубликована полная версия политики конфиденциальности и уведомление о cookies.
      </p>
    </Section>
  );
}
