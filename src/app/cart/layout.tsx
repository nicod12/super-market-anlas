export const metadata = {
    title: "TIENDA",
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
  