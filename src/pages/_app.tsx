import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Plus_Jakarta_Sans } from "next/font/google";
import "../styles/globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="light" enableSystem>
      <NextUIProvider>
        <div className={`${plusJakarta.variable} font-sans bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50 min-h-screen`}>
          <Component {...pageProps} />
        </div>
      </NextUIProvider>
    </NextThemesProvider>
  );
}

export default MyApp;
