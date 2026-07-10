export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto w-full max-w-3xl px-6 py-14 sm:py-20">
      {children}
    </section>
  );
}
