'use client'

import Link from "next/link";
import Image from "next/image";
import BootstrapClient from './BootstrapClient';
import { ThemeProvider, useTheme } from './ThemeContext';


function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <button 
      onClick={toggleTheme}
      className="btn btn-link nav-link d-flex align-items-center gap-2"
      aria-label="Toggle theme"
    >
      {isDarkMode ? (
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
        </svg>
      ) : (
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
        </svg>
      )}
    </button>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-vh-100 d-flex flex-column ${isDarkMode ? 'dark-theme' : ''}`}>
      <BootstrapClient />
      {/* Sticky Header */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
        <div className="container">
          <Link href="/" className="navbar-brand text-primary fw-bold fs-4 d-flex align-items-center gap-2">
            <Image src="/images/logo.png" alt="InviteMe Logo" width={40} height={40} />
            <span>InviteMe</span>
          </Link>
          <div className="navbar-nav ms-auto d-flex flex-row align-items-center gap-3">
            <Link href="/invitation" className="nav-link hover-effect">
              Invitation
            </Link>
            <Link href="/wishes" className="nav-link hover-effect">
              Wishes
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Main Content with padding-top to account for fixed header */}
      <main className="flex-grow-1 pt-5 mt-4">
        {children}
      </main>

      {/* Footer */}
      <footer className="py-4 mt-auto footer-transition">
        <div className="container text-center">
          <p className="mb-0">
            Handcrafted by Tanushree with{' '}
            <span className="animate-pulse text-danger">❤️</span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <Layout>{children}</Layout>
    </ThemeProvider>
  );
} 