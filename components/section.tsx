"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow?: string;
  title: string;
}) {
  return (
    <div className="mb-8">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-default-500">
        {eyebrow}
      </p>
      <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-80px" }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      {children}
    </motion.div>
  );
}
