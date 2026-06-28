import type { Metadata } from "next";
import { Instrument_Serif, Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import SmoothScroll from "@/components/SmoothScroll";
import BlobCursor from "@/components/BlobCursor";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Juan Carlos | Desarrollador Full Stack",
  description:
    "Portafolio profesional de Juan Carlos Mendoza Tasayco. Desarrollador Full Stack especializado en aplicaciones web modernas con Next.js, React y Node.js.",
  openGraph: {
    title: "Juan Carlos | Desarrollador Full Stack",
    description:
      "Portafolio profesional de desarrollo de software. Especializado en aplicaciones web modernas y escalables.",
    type: "website",
    locale: "es_PE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Juan Carlos | Desarrollador Full Stack",
    description:
      "Portafolio profesional de desarrollo de software.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${instrumentSerif.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-gold/25 selection:text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <BlobCursor
            fillColor="#C9A84C"
            trailCount={3}
            opacities={[0.3, 0.2, 0.1]}
            sizes={[70, 120, 50]}
            innerColor="rgba(240, 223, 160, 0.6)"
            shadowColor="rgba(201, 168, 76, 0.3)"
            shadowBlur={15}
            fastDuration={0.15}
            slowDuration={0.6}
            zIndex={9999}
          />
          <SmoothScroll>
            <ScrollProgressBar />
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
