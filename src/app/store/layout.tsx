export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="text-center pt-10">
        <h1>Welcome to Store</h1>
      </div>
      {children}
    </section>
  );
}
