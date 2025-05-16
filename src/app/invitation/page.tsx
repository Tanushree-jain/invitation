'use client'

import { useState } from 'react'
import { useTheme } from '@/components/ThemeProvider'
import { downloadCard } from '@/utils/downloadUtils'
import { Inter } from 'next/font/google'
import { Great_Vibes, Playfair_Display } from 'next/font/google'

interface FormData {
  eventType: string
  name: string
  date: string
  venue: string
  image: string | null
  background: string
}

const greatVibes = Great_Vibes({ subsets: ['latin'], weight: '400' })
const playfair = Playfair_Display({ subsets: ['latin'], weight: '700' })

const BACKGROUND_OPTIONS: Record<string, { label: string; value: string; thumb: string; full: string }[]> = {
  Birthday: [
    {
      label: 'Balloons',
      value: 'birthday-balloons',
      thumb: 'https://img.freepik.com/free-photo/colorful-balloons-floating_23-2147652345.jpg?w=200',
      full: 'https://img.freepik.com/free-photo/colorful-balloons-floating_23-2147652345.jpg?w=900',
    },
    {
      label: 'Confetti',
      value: 'birthday-confetti',
      thumb: 'https://img.freepik.com/free-photo/party-confetti-background_23-2147845712.jpg?w=200',
      full: 'https://img.freepik.com/free-photo/party-confetti-background_23-2147845712.jpg?w=900',
    },
    {
      label: 'Birthday Cake',
      value: 'birthday-cake',
      thumb: 'https://img.freepik.com/free-photo/birthday-cake-with-candles_23-2147845713.jpg?w=200',
      full: 'https://img.freepik.com/free-photo/birthday-cake-with-candles_23-2147845713.jpg?w=900',
    },
  ],
  Wedding: [
    {
      label: 'Rings',
      value: 'wedding-rings',
      thumb: 'https://img.freepik.com/free-photo/wedding-rings_23-2147845714.jpg?w=200',
      full: 'https://img.freepik.com/free-photo/wedding-rings_23-2147845714.jpg?w=900',
    },
    {
      label: 'Flowers',
      value: 'wedding-flowers',
      thumb: 'https://img.freepik.com/free-photo/wedding-flowers_23-2147845715.jpg?w=200',
      full: 'https://img.freepik.com/free-photo/wedding-flowers_23-2147845715.jpg?w=900',
    },
    {
      label: 'Elegant',
      value: 'wedding-elegant',
      thumb: 'https://img.freepik.com/free-photo/elegant-wedding-background_23-2147845716.jpg?w=200',
      full: 'https://img.freepik.com/free-photo/elegant-wedding-background_23-2147845716.jpg?w=900',
    },
  ],
  Anniversary: [
    {
      label: 'Roses',
      value: 'anniversary-roses',
      thumb: 'https://img.freepik.com/free-photo/roses-background_23-2147845717.jpg?w=200',
      full: 'https://img.freepik.com/free-photo/roses-background_23-2147845717.jpg?w=900',
    },
    {
      label: 'Champagne',
      value: 'anniversary-champagne',
      thumb: 'https://img.freepik.com/free-photo/champagne-glasses_23-2147845718.jpg?w=200',
      full: 'https://img.freepik.com/free-photo/champagne-glasses_23-2147845718.jpg?w=900',
    },
  ],
  Graduation: [
    {
      label: 'Caps',
      value: 'graduation-caps',
      thumb: 'https://img.freepik.com/free-photo/graduation-caps_23-2147845719.jpg?w=200',
      full: 'https://img.freepik.com/free-photo/graduation-caps_23-2147845719.jpg?w=900',
    },
    {
      label: 'Diploma',
      value: 'graduation-diploma',
      thumb: 'https://img.freepik.com/free-photo/graduation-diploma_23-2147845720.jpg?w=200',
      full: 'https://img.freepik.com/free-photo/graduation-diploma_23-2147845720.jpg?w=900',
    },
  ],
  'Baby Shower': [
    {
      label: 'Baby Shoes',
      value: 'babyshower-shoes',
      thumb: 'https://img.freepik.com/free-photo/baby-shoes_23-2147845721.jpg?w=200',
      full: 'https://img.freepik.com/free-photo/baby-shoes_23-2147845721.jpg?w=900',
    },
    {
      label: 'Teddy Bear',
      value: 'babyshower-teddy',
      thumb: 'https://img.freepik.com/free-photo/teddy-bear_23-2147845722.jpg?w=200',
      full: 'https://img.freepik.com/free-photo/teddy-bear_23-2147845722.jpg?w=900',
    },
  ],
  'House Warming': [
    {
      label: 'New Home',
      value: 'housewarming-home',
      thumb: 'https://img.freepik.com/free-photo/new-home_23-2147845723.jpg?w=200',
      full: 'https://img.freepik.com/free-photo/new-home_23-2147845723.jpg?w=900',
    },
    {
      label: 'Keys',
      value: 'housewarming-keys',
      thumb: 'https://img.freepik.com/free-photo/house-keys_23-2147845724.jpg?w=200',
      full: 'https://img.freepik.com/free-photo/house-keys_23-2147845724.jpg?w=900',
    },
  ],
}

export default function InvitationPage() {
  const { theme } = useTheme()
  const [formData, setFormData] = useState<FormData>({
    eventType: 'Birthday',
    name: '',
    date: '',
    venue: '',
    image: null,
    background: BACKGROUND_OPTIONS['Birthday'][0].value,
  })
  const [showPreview, setShowPreview] = useState(false)
  const [dragActive, setDragActive] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => {
      if (name === 'eventType') {
        return {
          ...prev,
          [name]: value,
          background: BACKGROUND_OPTIONS[value][0].value,
        }
      }
      return { ...prev, [name]: value }
    })
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

  const selectedBg = BACKGROUND_OPTIONS[formData.eventType].find(bg => bg.value === formData.background)?.full

  if (showPreview) {
    return (
      <div className="min-h-screen py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card p-6">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold">Your Invitation</h1>
              <button
                onClick={handleBackToForm}
                className="bg-white/10 hover:bg-white/20 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
              >
                Edit
              </button>
            </div>
            <div className="flex flex-col items-center">
              <div id="invitation-card"
                className={`relative aspect-[4/3] rounded-xl overflow-hidden mb-4 flex items-center justify-center shadow-2xl border-4 w-full max-w-2xl`}
                style={{
                  minHeight: 350,
                  backgroundImage: `url('${selectedBg}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative',
                }}
              >
                <div className="absolute inset-0 bg-black/40" />
                {formData.image && (
                  <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 z-20 rounded-xl border-4 border-white shadow-lg bg-white/80 p-2" style={{width: 180, height: 180, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <img
                      src={formData.image!}
                      alt="Invitation preview"
                      className="object-cover rounded-lg w-full h-full"
                      style={{maxWidth: '100%', maxHeight: '100%'}}
                    />
                  </div>
                )}
                <div className="relative z-30 flex flex-col items-center justify-center text-center p-8 w-full h-full">
                  <p className="text-lg text-white font-semibold mb-2" style={{letterSpacing: 2}}>You are invited to</p>
                  <h3 className={`text-4xl mb-2 text-gold-400 ${greatVibes.className}`}>{formData.name || 'Your Name'}</h3>
                  <h4 className={`text-3xl mb-4 text-white ${playfair.className}`}>{formData.eventType}</h4>
                  <p className="text-lg text-white mb-2">Join us for a special occasion!</p>
                  <p className="text-base text-white mb-2">Date: <span className="font-semibold">{formData.date || 'Date'}</span></p>
                  <p className="text-base text-white mb-2">Venue: <span className="font-semibold">{formData.venue || 'Venue'}</span></p>
                  <p className="text-base text-white mt-4 italic">We look forward to celebrating with you!</p>
                </div>
              </div>
              <div className="mb-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-center">
                {BACKGROUND_OPTIONS[formData.eventType].map(bg => (
                  <div
                    key={bg.value}
                    className={`cursor-pointer rounded-lg border-4 ${formData.background === bg.value ? 'border-primary ring-2 ring-primary' : 'border-transparent'}`}
                    style={{overflow: 'hidden'}}
                    onClick={() => setFormData(prev => ({ ...prev, background: bg.value }))}
                  >
                    <img src={bg.thumb} alt={bg.label} className="w-full h-24 object-cover" />
                    <div className="text-center py-1 text-sm font-medium bg-white/80">{bg.label}</div>
                  </div>
                ))}
              </div>
              <div className="flex space-x-4 w-full max-w-2xl">
                <button
                  type="button"
                  onClick={() => downloadCard('invitation-card', `invitation-${formData.name || 'event'}`)}
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
                Create Your Invitation
              </h1>
              
              <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '600px' }}>
                {(['eventType', 'name', 'date', 'venue'] as const).map((field) => (
                  <div key={field} className="mb-4 row align-items-center">
                    <label className={`col-sm-3 col-form-label fs-5 ${theme === 'dark' ? 'text-white' : 'text-dark'}`}>
                      {field === 'eventType' ? 'Event Type' : field.charAt(0).toUpperCase() + field.slice(1)}
                    </label>
                    <div className="col-sm-9">
                      {field === 'eventType' ? (
                        <select
                          name={field}
                          value={formData[field]}
                          onChange={handleInputChange}
                          required
                          className={`form-select ${theme === 'dark' ? 'bg-dark text-white' : 'bg-white text-dark'}`}
                        >
                          <option>Birthday</option>
                          <option>Wedding</option>
                          <option>Anniversary</option>
                          <option>Graduation</option>
                          <option>Baby Shower</option>
                          <option>House Warming</option>
                        </select>
                      ) : (
                        <input
                          type={field === 'date' ? 'date' : 'text'}
                          name={field}
                          value={formData[field]}
                          onChange={handleInputChange}
                          required
                          className={`form-control ${theme === 'dark' ? 'bg-dark text-white' : 'bg-white text-dark'}`}
                          placeholder={field === 'date' ? undefined : `Enter ${field}`}
                        />
                      )}
                    </div>
                  </div>
                ))}

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
                    Create Invitation
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