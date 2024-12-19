import "~/styles/globals.css";
import { type Metadata } from "next";

import { Roboto_Mono } from "next/font/google";
import Footer from "~/components/footer";
import Header from "~/components/header";
import { ThemeProvider } from "~/components/theme-provider";
import { cn } from "~/lib/utils";

export const metadata: Metadata = {
  title: "Sitronpai",
  description: "Jon's sitronpai",
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    { rel: "icon", sizes: "16x16", url: "/favicon-16x16.png" },
    { rel: "icon", sizes: "32x32", url: "/favicon-32x32.png" },
    { rel: "apple-touch-icon", sizes: "180x180", url: "/apple-touch-icon.png" },
    { rel: "manifest", url: "/site.webmanifest" },
  ],
};

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nb-NO" suppressHydrationWarning>
      <body
        className={cn(`${roboto_mono.variable}`, "flex min-h-screen flex-col")}
      >
        <ThemeProvider>
          <Header />
          <div className="mb-auto">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
