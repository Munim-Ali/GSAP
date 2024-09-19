import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import { Poppins } from "next/font/google";
import "../app/app.css";
import Header from "@/components/header";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="overflow-x-hidden bg-yellow-300">
        <Header />
        <main>{children}</main>
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
