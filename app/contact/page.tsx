"use client";

import { useEffect } from "react";
import Section from "@/components/Section";
import { goal } from "@/lib/metrics";

export default function ContactPage() {
  useEffect(() => {
    goal("view_contact");
  }, []);

  return (
    <Section>
      <h1 className="text-2xl font-semibold mb-4">Связаться с нами</h1>
      <p className="text-muted mb-2">
        По вопросам и поддержке пишите нам на{" "}
        <a
          href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
          className="text-accent underline"
        >
          {process.env.NEXT_PUBLIC_CONTACT_EMAIL}
        </a>
      </p>
      <p className="text-muted">Ответим в течение 24 часов.</p>
    </Section>
  );
}
