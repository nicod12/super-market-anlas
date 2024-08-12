export const metadata = {
  title: "Contact",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main suppressHydrationWarning={true}>
      <section className="container mx-auto">{children}</section>
    </main>
  );
}
