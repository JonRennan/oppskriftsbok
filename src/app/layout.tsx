import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { ThemeProvider } from "~/components/theme-provider";

export const metadata: Metadata = {
  title: "Sitronpai",
  description: "Jon's sitronpai",
  // icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nb-NO" className={`${GeistSans.variable}`}>

    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <body>{children}</body>
    </ThemeProvider>
    </html>
  );
}
