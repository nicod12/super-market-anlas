export const metadata = {
  title: "CONTACTO",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main suppressHydrationWarning={true}>
      <section className="w-full relative">
      <img
                src="/assets/images/foto-contacto.webp"
                alt="background"
                className="absolute inset-0 w-full h-full cover"
            />
        {children}
        
      </section>
    </main>
  );
}
