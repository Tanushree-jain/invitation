import type { Metadata } from "next";
import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";

// Components
import ClientLayout from "./components/ClientLayout";
import { ThemeProvider } from "@/components/ThemeProvider";

// Font configuration
const inter = Inter({ subsets: ["latin"] });

// Metadata configuration
export const metadata: Metadata = {
  title: "Digital Invitation Creator",
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
          <ClientLayout>
            {children}
          </ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
