import "@/styles/globals.css";
import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* prevent scroll restoration so every time refresh goes to top of the screen */}
        <Script
          id={"prevent-scroll-restoration"}
          dangerouslySetInnerHTML={{
            __html: `history.scrollRestoration = "manual"`,
          }}
        />

        {/* Givebutter donations */}

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
        </div>
      </body>
    </html>
  );
}
