"use client";

import { useState, useEffect } from "react";
import Section from "@/components/Section";
import { goal } from "@/lib/metrics";

export default function CancelPage() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    goal("view_cancel");
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}?subject=Отмена%20подписки&body=Email:%20${email}`;
    window.location.href = mailto;
  };

  return (
    <Section>
      <h1 className="text-2xl font-semibold mb-4">Отмена подписки</h1>
      <p className="text-muted mb-6">
        Укажите ваш email, чтобы отменить автопродление подписки. Вы также можете отменить её в личном кабинете.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-sm">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Ваш email"
          required
          className="w-full rounded-lg border border-gray-700 bg-gray-900 p-3"
        />
        <button
          type="submit"
          className="w-full bg-accent hover:bg-accent-hover text-white rounded-lg py-2 font-medium"
        >
          Отправить
        </button>
      </form>
    </Section>
  );
}
