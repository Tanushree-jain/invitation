'use client'

import { useState } from 'react'
import { useTheme } from '@/components/ThemeProvider'
import { downloadCard } from '@/utils/downloadUtils'

interface FormData {
  occasionType: string
  recipientName: string
  message: string
  senderName: string
  image: string | null
}

export default function WishesPage() {
  const { theme } = useTheme()
  const [formData, setFormData] = useState<FormData>({
    occasionType: 'Birthday',
    recipientName: '',
    message: '',
    senderName: '',
    image: null
  })
  const [showPreview, setShowPreview] = useState(false)
  const [dragActive, setDragActive] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader()
        reader.onload = (event) => {
          setFormData(prev => ({ ...prev, image: event.target?.result as string }))
        }
        reader.readAsDataURL(file)
      } else {
        alert('Please upload an image file')
      }
    }
  }

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    const file = e.dataTransfer.files?.[0]
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setFormData(prev => ({ ...prev, image: event.target?.result as string }))
      }
      reader.readAsDataURL(file)
    } else {
      alert('Please upload an image file')
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowPreview(true)
  }

  const handleBackToForm = () => {
    setShowPreview(false)
  }

  if (showPreview) {
    return (
      <div className="min-h-screen py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card p-6">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold">Your Greeting Card</h1>
              <button
                onClick={handleBackToForm}
                className="bg-white/10 hover:bg-white/20 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
              >
                Edit
              </button>
            </div>
            
            <div id="wishes-card" className="relative aspect-[4/3] rounded-xl overflow-hidden mb-8 bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center">
              {formData.image && (
                <img 
                  src={formData.image} 
                  alt="Greeting card preview" 
                  className="w-full h-full object-cover opacity-80 absolute inset-0"
                />
              )}
              <div className="relative z-10 flex flex-col items-center justify-center text-center p-8 bg-black/30 rounded-xl w-full h-full">
                <h3 className="text-2xl font-bold text-white mb-4">Dear {formData.recipientName || 'Friend'}</h3>
                <p className="text-lg text-white/90 mb-4" style={{ whiteSpace: 'pre-wrap' }}>{formData.message || 'Your message'}</p>
                <div className="mt-auto">
                  <p className="text-lg text-white/80">From: {formData.senderName || 'Sender'}</p>
                  <p className="text-lg text-white/80">{formData.occasionType} Wishes</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <button
                type="button"
                onClick={() => downloadCard('wishes-card', `wishes-${formData.recipientName || 'greeting'}`)}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Download
              </button>
              <button
                type="button"
                className="flex-1 bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Share
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className={`card shadow ${theme === 'dark' ? 'bg-dark text-white' : 'bg-white'}`}>
            <div className="card-body p-4">
              <h1 className={`text-center display-4 mb-5 ${theme === 'dark' ? 'text-white' : 'text-dark'}`}>
                Create Your Greeting Card
              </h1>
              
              <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '600px' }}>
                <div className="mb-4 row align-items-center">
                  <label className={`col-sm-3 col-form-label fs-5 ${theme === 'dark' ? 'text-white' : 'text-dark'}`}>
                    Occasion
                  </label>
                  <div className="col-sm-9">
                    <select
                      name="occasionType"
                      value={formData.occasionType}
                      onChange={handleInputChange}
                      required
                      className={`form-select ${theme === 'dark' ? 'bg-dark text-white' : 'bg-white text-dark'}`}
                    >
                      <option>Birthday</option>
                      <option>Anniversary</option>
                      <option>Congratulations</option>
                      <option>Get Well Soon</option>
                      <option>Thank You</option>
                      <option>Season's Greetings</option>
                    </select>
                  </div>
                </div>

                <div className="mb-4 row align-items-center">
                  <label className={`col-sm-3 col-form-label fs-5 ${theme === 'dark' ? 'text-white' : 'text-dark'}`}>
                    To
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      name="recipientName"
                      value={formData.recipientName}
                      onChange={handleInputChange}
                      required
                      className={`form-control ${theme === 'dark' ? 'bg-dark text-white' : 'bg-white text-dark'}`}
                      placeholder="Recipient's name"
                    />
                  </div>
                </div>

                <div className="mb-4 row align-items-start">
                  <label className={`col-sm-3 col-form-label fs-5 ${theme === 'dark' ? 'text-white' : 'text-dark'}`}>
                    Message
                  </label>
                  <div className="col-sm-9">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className={`form-control ${theme === 'dark' ? 'bg-dark text-white' : 'bg-white text-dark'}`}
                      placeholder="Write your message here..."
                      rows={4}
                    />
                  </div>
                </div>

                <div className="mb-4 row align-items-center">
                  <label className={`col-sm-3 col-form-label fs-5 ${theme === 'dark' ? 'text-white' : 'text-dark'}`}>
                    From
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      name="senderName"
                      value={formData.senderName}
                      onChange={handleInputChange}
                      required
                      className={`form-control ${theme === 'dark' ? 'bg-dark text-white' : 'bg-white text-dark'}`}
                      placeholder="Your name"
                    />
                  </div>
                </div>

                <div className="mb-4 row align-items-start">
                  <label className={`col-sm-3 col-form-label fs-5 ${theme === 'dark' ? 'text-white' : 'text-dark'}`}>
                    Upload Image
                  </label>
                  <div className="col-sm-9">
                    <div 
                      className={`card ${theme === 'dark' ? 'bg-dark' : 'bg-white'} border-2 ${dragActive ? 'border-primary' : ''}`}
                      onDragEnter={handleDrag}
                      onDragLeave={handleDrag}
                      onDragOver={handleDrag}
                      onDrop={handleDrop}
                    >
                      <label className="card-body text-center py-5" style={{ cursor: 'pointer' }}>
                        <input
                          type="file"
                          className="d-none"
                          accept="image/*"
                          onChange={handleImageUpload}
                        />
                        {formData.image ? (
                          <div className="position-relative">
                            <img 
                              src={formData.image} 
                              alt="Preview" 
                              className="img-fluid mb-2" 
                              style={{ maxHeight: '200px' }}
                            />
                            <p className={`mb-0 mt-2 ${theme === 'dark' ? 'text-white-50' : 'text-muted'}`}>
                              Click or drag to change image
                            </p>
                          </div>
                        ) : (
                          <>
                            <svg 
                              className={`mx-auto mb-3 ${theme === 'dark' ? 'text-white' : 'text-dark'}`}
                              width="50" 
                              height="50" 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth="2" 
                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                              />
                            </svg>
                            <p className={`mb-0 ${theme === 'dark' ? 'text-white-50' : 'text-muted'}`}>
                              Click to upload or drag and drop
                            </p>
                          </>
                        )}
                      </label>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-5">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg px-5"
                  >
                    Create Greeting Card
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 