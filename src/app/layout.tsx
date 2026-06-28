import type { Metadata } from "next";
import { Instrument_Serif, Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import SmoothScroll from "@/components/SmoothScroll";
import Grainient from "@/components/Grainient";
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
        <div className="fixed inset-0 pointer-events-none z-0">
          <Grainient
            color1="#0A0A0A"
            color2="#1A1A1A"
            color3="#C9A84C"
            grainAmount={0.08}
            grainScale={1.5}
            grainAnimated={true}
            timeSpeed={0.1}
            warpStrength={0.3}
            warpFrequency={3}
            blendSoftness={0.1}
            contrast={1.2}
            saturation={0.5}
            zoom={0.95}
            colorBalance={-0.3}
          />
        </div>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
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
