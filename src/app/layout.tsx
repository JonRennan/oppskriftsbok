import "~/styles/globals.css";

import { Roboto_Mono } from 'next/font/google'
import { type Metadata } from "next";
import { ModeToggle } from "~/components/mode-toggle";
import { ThemeProvider } from "~/components/theme-provider";

export const metadata: Metadata = {
  title: "Sitronpai",
  description: "Jon's sitronpai",
  // icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nb-NO" suppressHydrationWarning>
      <body className={`${roboto_mono.variable}`}>
        <ThemeProvider>
          <div className="absolute top-4 right-4">
            <ModeToggle />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
