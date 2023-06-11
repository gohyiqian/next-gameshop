export default function AdminLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="text-center">
      {/* Include shared UI here e.g. a header or sidebar */}
      <h1>Admin Access Only</h1>
      {children}
    </section>
  );
}
