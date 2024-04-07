import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"], weight: "400" });

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <main className={manrope.className}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </main>
    </NextUIProvider>
  );
}
