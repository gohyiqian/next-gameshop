export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="text-center pt-10">
        <h1>Welcome to GameShop</h1>
      </div>
      {children}
    </section>
  );
}
