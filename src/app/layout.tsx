import "@/styles/globals.css";
import Footer from "@/components/ui/sections/Footer";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          id="givemebutterdonation"
          dangerouslySetInnerHTML={{
            __html: `window.Givebutter =
              window.Givebutter ||
              function () {
                (Givebutter.q = Givebutter.q || []).push(arguments);
              };
            Givebutter.l = +new Date();
            window.Givebutter("setOptions", {
              accountId: "${process.env.GIVEBUTTER_ACCOUNT_ID}",
            });`,
          }}
        />
        <Script async src="https://js.givebutter.com/elements/latest.js" />
        <link rel="icon" href="/aggiesInspire.ico" />
        <title>Aggies Inspire | Home</title>
      </head>
      <body>
        <div>
          <main className="flex flex-col">
            {children}

            <Analytics />
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
