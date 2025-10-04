"use client";

import Link from "next/link";
import { useEffect } from "react";
import { goal } from "@/lib/metrics";
import Section from "@/components/Section";
import { FREE_LIMITS } from "@/config/pricing";

export default function DashboardPage() {
  useEffect(() => {
    goal("view_dashboard");
  }, []);

  return (
    <Section>
      <h1 className="text-2xl font-semibold mb-4">Ваш дашборд</h1>
      <p className="text-muted mb-6">
        Пример каркаса дашборда. Здесь позже появятся ваши лимиты, история запросов и управление подпиской.
      </p>

      <div className="rounded-xl bg-gray-900 p-6">
        <p>🧠 Лимит текста: {FREE_LIMITS.textPerDay.toLocaleString()} символов/день</p>
        <p>🖼️ Лимит изображений: {FREE_LIMITS.imagesPerDay} / день</p>
      </div>

      <div className="mt-6">
        <Link
          href="/cancel"
          className="text-accent underline hover:text-accent-hover"
        >
          Отменить подписку
        </Link>
      </div>
    </Section>
  );
}
