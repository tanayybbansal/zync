import StreamVideoProvider from "@/src/providers/StreamClientProvider";
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "zync",
  description: "Seamless video meetings and real time chat application, redefined.",
  icons: { icon: "/logo.png" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <StreamVideoProvider>
      <main className="min-h-screen bg-neutral-50 text-neutral-900 antialiased">
        {children}
      </main>
    </StreamVideoProvider>
  );
}
