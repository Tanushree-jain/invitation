'use client'

import Link from "next/link";
import BootstrapClient from './BootstrapClient';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <BootstrapClient />
      {/* Header */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link href="/" className="navbar-brand text-primary fw-bold fs-4">
            InviteMe
          </Link>
          <div className="navbar-nav ms-auto">
            <Link href="/invitation" className="nav-link">
              Invitation
            </Link>
            <Link href="/wishes" className="nav-link">
              Wishes
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-light py-4 mt-auto">
        <div className="container text-center text-muted">
          Handcrafted by Tanushree with ❤️
        </div>
      </footer>
    </div>
  );
} 