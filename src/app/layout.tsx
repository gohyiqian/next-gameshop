import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "../../components/ui/navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GameShop",
  description: "We Sell the Coolest Game",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <main className="flex justify-center">{children}</main>
      </body>
    </html>
  );
}
