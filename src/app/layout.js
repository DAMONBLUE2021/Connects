import ArticleModal from "@/components/ArticleModal";
import Masthead from "@/components/Masthead";
import MobileNav from "@/components/MobileNav";
import { ArticleProvider } from "@/context/ArticleContext";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata = {
  title: "CIT Connects | The Campus Chronicle",
  description: "The official editorial voice of Chennai Institute of Technology.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-mode="paper">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased bg-[var(--paper)] text-[var(--ink)] transition-colors duration-700`}
      >
        <ArticleProvider>
          <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.05] mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

          <Masthead />

          <main className="min-h-screen flex flex-col relative z-0">
            {children}
          </main>

          <MobileNav />
          <ArticleModal />
        </ArticleProvider>
      </body>
    </html>
  );
}
