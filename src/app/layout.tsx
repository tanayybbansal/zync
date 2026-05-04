import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/src/components/ui/toaster";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import "react-datepicker/dist/react-datepicker.css";

const pk =
  process.env.CLERK_PUBLISHABLE_KEY ||
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "zync",
  description: "Seamless video meetings and real time chat application, redefined.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (!pk) {
    console.error("Missing CLERK_PUBLISHABLE_KEY");
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <ClerkProvider
        publishableKey={pk!}
        signInUrl="/sign-in"
        signUpUrl="/sign-up"
        appearance={{
          layout: {
            logoImageUrl: "/logo.png",
            socialButtonsVariant: "iconButton",
          },
          variables: {
            colorText: "#1a1a1a",
            colorPrimary: "#2563eb",
            colorBackground: "#ffffff",
            colorInputBackground: "#f5f5f5",
            colorInputText: "#1a1a1a",
            borderRadius: "0.5rem",
          },
        }}
      >
        <body
          className={`${inter.className} antialiased min-h-screen bg-neutral-50 text-neutral-900 selection:bg-blue-100 selection:text-blue-800`}
        >
          {children}
          <Toaster />
        </body>
      </ClerkProvider>
    </html>
  );
}
