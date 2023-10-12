import "@/styles/globals.css";
import Script from "next/script";
import Footer from "@/components/sections/footer/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Givebutter donations */}

        <Script
          id="givemebutterdonation"
          strategy="beforeInteractive"
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

      {/* Google analytics with partytown */}

      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        strategy="worker"
      />

      <Script id="google-analytics" strategy="worker">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', "${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}");
        `}
      </Script>

      <body>
        <div>
          <main className="flex flex-col">{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
