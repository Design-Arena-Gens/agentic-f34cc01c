"use client";

import { useMemo, useState } from "react";

type ContextTag = {
  id: string;
  label: string;
  description: string;
};

const CONTEXT_TAGS: ContextTag[] = [
  {
    id: "community",
    label: "Community Space",
    description: "Public resources funded by local community contributions."
  },
  {
    id: "digital",
    label: "Digital Access",
    description: "Open web experiences meant for anyone with the link."
  },
  {
    id: "events",
    label: "Events",
    description: "Sessions that welcome everyone, no badge or ticket needed."
  }
];

const AVAILABILITY_MESSAGE =
  "Yes — everything here is freely accessible. No paywalls, subscriptions, or hidden catches.";

const FOLLOW_UP =
  "If you are planning something special, feel free to share it so we can help you get the most out of this space.";

export default function HomePage() {
  const [selection, setSelection] = useState<string | null>(null);

  const selectedTag = useMemo(
    () => CONTEXT_TAGS.find((tag) => tag.id === selection),
    [selection]
  );

  return (
    <main className="page-container">
      <section className="card">
        <header className="hero">
          <span className="badge">Instant Answer</span>
          <h1>Is it free here?</h1>
          <p className="lede">{AVAILABILITY_MESSAGE}</p>
        </header>

        <section className="context">
          <h2>Where are you coming from?</h2>
          <p className="context-hint">
            Choose the scenario that fits best. We&apos;ll highlight what “free” means for you.
          </p>
          <div className="tag-grid">
            {CONTEXT_TAGS.map((tag) => {
              const isActive = tag.id === selection;
              return (
                <button
                  key={tag.id}
                  className={`tag ${isActive ? "tag-active" : ""}`}
                  type="button"
                  onClick={() => setSelection(isActive ? null : tag.id)}
                >
                  <span className="tag-label">{tag.label}</span>
                  <span className="tag-description">{tag.description}</span>
                </button>
              );
            })}
          </div>
        </section>

        <section className="details">
          <h2 className="details-heading">What you should know</h2>
          <ul className="details-list">
            <li>
              This corner of the internet remains open 24/7. Use it, share it, or build on top of it without
              a price tag.
            </li>
            <li>
              You can explore, test ideas, or invite collaborators. Everyone enjoys the same level of access.
            </li>
            <li>
              Questions, feedback, or requests for enhancements? Reach out—support is free as well.
            </li>
          </ul>
          <p className="follow-up">{FOLLOW_UP}</p>
          {selectedTag ? (
            <aside className="insight">
              <strong>{selectedTag.label} insight:</strong> {selectedTag.description}
            </aside>
          ) : (
            <aside className="insight">
              <strong>Pro tip:</strong> Toggle a scenario above to see tailored guidance.
            </aside>
          )}
        </section>
      </section>
    </main>
  );
}
