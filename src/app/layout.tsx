import type { Metadata } from "next";
import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";

// Components
import ClientLayout from "./components/ClientLayout";
import { ThemeProvider } from "@/components/ThemeProvider";
import BootstrapClient from "@/components/BootstrapClient";

// Font configuration
const inter = Inter({ subsets: ["latin"] });

// Metadata configuration
export const metadata: Metadata = {
  title: "InviteMe",
  description: "Create beautiful digital invitations for any occasion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <BootstrapClient />
          <ClientLayout>
            {children}
          </ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
