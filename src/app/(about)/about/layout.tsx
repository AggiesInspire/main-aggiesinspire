import { PageWrapper } from "@/components/transitions/PageWrapper.jsx";

import "@/styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PageWrapper>
      <section>
        <div>{children}</div>
      </section>
    </PageWrapper>
  );
}
