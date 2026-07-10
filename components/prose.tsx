import React from "react";

export function Prose({ children }: { children: React.ReactNode }) {
  return <div className="prose">{children}</div>;
}

type CalloutTone = "note" | "fix" | "warn";

const toneStyles: Record<CalloutTone, string> = {
  note: "border-primary/50",
  fix: "border-emerald-500/60",
  warn: "border-amber-500/60",
};

const toneLabel: Record<CalloutTone, string> = {
  note: "Note",
  fix: "If it still fails",
  warn: "Heads up",
};

export function Callout({
  tone = "note",
  label,
  children,
}: {
  tone?: CalloutTone;
  label?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`my-6 rounded-xl border border-default-200 border-l-[3px] ${toneStyles[tone]} bg-default-50/60 px-5 py-4`}
    >
      <span className="mb-1 block font-mono text-[0.68rem] uppercase tracking-[0.14em] text-default-500">
        {label ?? toneLabel[tone]}
      </span>
      <div className="text-default-700 [&>p]:my-1">{children}</div>
    </div>
  );
}

/** A faux-terminal block. Pass lines; prefix with markers for colour. */
export function Terminal({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 overflow-x-auto rounded-xl border border-[#1b2430] bg-[#0a0e13] p-4">
      <pre className="m-0 font-mono text-[0.8rem] leading-relaxed text-[#cdd9e6]">
        {children}
      </pre>
    </div>
  );
}

export const T = {
  c: ({ children }: { children: React.ReactNode }) => (
    <span className="text-[#5f6f82]">{children}</span>
  ),
  p: ({ children }: { children: React.ReactNode }) => (
    <span className="text-[#3fd0dd]">{children}</span>
  ),
  bad: ({ children }: { children: React.ReactNode }) => (
    <span className="text-[#ef6b6b]">{children}</span>
  ),
  good: ({ children }: { children: React.ReactNode }) => (
    <span className="text-[#4cc47e]">{children}</span>
  ),
};
