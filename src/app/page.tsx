'use client'

import Link from 'next/link'
import { useTheme } from './components/ThemeContext'

export default function Home() {
  const { isDarkMode } = useTheme()

  return (
    <div>
      {/* Hero Section with Background Image */}
      <div className="hero-section">
        <div className="container py-5">
          <div className="text-center hero-content">
            <h1 className="display-3 fw-bold mb-4 text-white">
              Create Beautiful Digital Invitations & Wishes
            </h1>
            <p className="lead mb-4 mx-auto text-white-50" style={{ maxWidth: '800px' }}>
              Design stunning digital invitations and heartfelt wishes for any occasion. 
              Share your special moments with friends and family in a beautiful way.
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 shadow-sm feature-card">
              <div className="card-body text-center">
                <div className="feature-icon mb-3">
                  <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="h5 mb-3 text-primary">Beautiful Designs</h3>
                <p className="card-text">
                  Choose from our collection of stunning templates or create your own unique design
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow-sm feature-card">
              <div className="card-body text-center">
                <div className="feature-icon mb-3">
                  <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                </div>
                <h3 className="h5 mb-3 text-primary">Easy Sharing</h3>
                <p className="card-text">
                  Share your creations instantly via social media, email, or download for printing
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow-sm feature-card">
              <div className="card-body text-center">
                <div className="feature-icon mb-3">
                  <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="h5 mb-3 text-primary">Instant Preview</h3>
                <p className="card-text">
                  See your changes in real-time and make adjustments until it's perfect
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works Section - Horizontal Path */}
        <div className="py-5 mt-5">
          <h2 className="display-6 text-center mb-5">How It Works</h2>
          <div className="position-relative">
            {/* Connection Line */}
            <div className="how-it-works-line"></div>
            
            <div className="row">
              <div className="col-md-3 how-it-works-step">
                <div className="step-circle">1</div>
                <h5 className="mt-3">Choose Template</h5>
                <p className="text-muted">Select from our beautiful collection</p>
              </div>
              <div className="col-md-3 how-it-works-step">
                <div className="step-circle">2</div>
                <h5 className="mt-3">Customize Design</h5>
                <p className="text-muted">Make it uniquely yours</p>
              </div>
              <div className="col-md-3 how-it-works-step">
                <div className="step-circle">3</div>
                <h5 className="mt-3">Add Details</h5>
                <p className="text-muted">Fill in your event information</p>
              </div>
              <div className="col-md-3 how-it-works-step">
                <div className="step-circle">4</div>
                <h5 className="mt-3">Share</h5>
                <p className="text-muted">Send to friends and family</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center py-5">
          <h2 className="display-6 mb-3">Ready to Create Something Beautiful?</h2>
          <p className="lead mb-4">
            Start creating your perfect invitation or wish card now
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Link 
              href="/invitation" 
              className="btn btn-primary btn-lg px-4 hover-effect"
            >
              Create Invitation
            </Link>
            <Link 
              href="/wishes" 
              className="btn btn-secondary btn-lg px-4 hover-effect"
            >
              Send Wishes
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
