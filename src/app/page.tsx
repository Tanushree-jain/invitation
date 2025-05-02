'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="position-relative overflow-hidden bg-light py-5">
        <div className="container py-5">
          <div className="text-center">
            <h1 className="display-3 fw-bold mb-4">
              Create Beautiful Digital Invitations & Wishes
            </h1>
            <p className="lead mb-4 mx-auto" style={{ maxWidth: '800px' }}>
              Design stunning digital invitations and heartfelt wishes for any occasion. 
              Share your special moments with friends and family in a beautiful way.
            </p>
            <div className="d-flex justify-content-center gap-3">
              <Link 
                href="/invitation" 
                className="btn btn-primary btn-lg px-4"
              >
                Create Invitation
              </Link>
              <Link 
                href="/wishes" 
                className="btn btn-secondary btn-lg px-4"
              >
                Send Wishes
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex p-3 mb-3">
                  <svg className="text-primary" width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="h5 mb-3">Beautiful Designs</h3>
                <p className="text-muted mb-0">
                  Choose from our collection of stunning templates or create your own unique design
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <div className="bg-secondary bg-opacity-10 rounded-circle d-inline-flex p-3 mb-3">
                  <svg className="text-secondary" width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                </div>
                <h3 className="h5 mb-3">Easy Sharing</h3>
                <p className="text-muted mb-0">
                  Share your creations instantly via social media, email, or download for printing
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <div className="bg-success bg-opacity-10 rounded-circle d-inline-flex p-3 mb-3">
                  <svg className="text-success" width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="h5 mb-3">Instant Preview</h3>
                <p className="text-muted mb-0">
                  See your changes in real-time and make adjustments until it's perfect
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="text-center py-5 mt-5">
          <h2 className="display-6 mb-5">How It Works</h2>
          <div className="row g-4">
            <div className="col-md-3">
              <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex p-3 mb-3">
                <span className="h5 text-primary mb-0">1</span>
              </div>
              <p className="text-muted">Choose a template</p>
            </div>
            <div className="col-md-3">
              <div className="bg-secondary bg-opacity-10 rounded-circle d-inline-flex p-3 mb-3">
                <span className="h5 text-secondary mb-0">2</span>
              </div>
              <p className="text-muted">Customize your design</p>
            </div>
            <div className="col-md-3">
              <div className="bg-success bg-opacity-10 rounded-circle d-inline-flex p-3 mb-3">
                <span className="h5 text-success mb-0">3</span>
              </div>
              <p className="text-muted">Add your details</p>
            </div>
            <div className="col-md-3">
              <div className="bg-warning bg-opacity-10 rounded-circle d-inline-flex p-3 mb-3">
                <span className="h5 text-warning mb-0">4</span>
              </div>
              <p className="text-muted">Share with friends</p>
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
              className="btn btn-primary btn-lg px-4"
            >
              Create Invitation
            </Link>
            <Link 
              href="/wishes" 
              className="btn btn-secondary btn-lg px-4"
            >
              Send Wishes
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
