'use client'

import { useState } from 'react'
import { useTheme } from '@/components/ThemeProvider'

interface FormData {
  eventType: string
  name: string
  date: string
  venue: string
  image: string | null
}

export default function InvitationPage() {
  const { theme } = useTheme()
  const [formData, setFormData] = useState<FormData>({
    eventType: 'Birthday',
    name: '',
    date: '',
    venue: '',
    image: null
  })
  const [showPreview, setShowPreview] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, image: URL.createObjectURL(e.target.files![0]) }))
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
              <h1 className="text-3xl font-bold">Your Invitation</h1>
              <button
                onClick={handleBackToForm}
                className="bg-white/10 hover:bg-white/20 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
              >
                Edit
              </button>
            </div>
            
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-8">
              {formData.image ? (
                <img 
                  src={formData.image} 
                  alt="Invitation preview" 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-700">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                      <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400">
                      No image uploaded
                    </p>
                  </div>
                </div>
              )}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                <h3 className="text-2xl font-bold text-white">{formData.name || 'Your Name'}</h3>
                <p className="text-white/80">{formData.eventType}</p>
                <p className="text-white/80">{formData.date || 'Date'}</p>
                <p className="text-white/80">{formData.venue || 'Venue'}</p>
              </div>
            </div>

            <div className="flex space-x-4">
              <button
                type="button"
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
    <div className="min-h-screen py-12 transition-colors duration-300">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card p-8 backdrop-blur-lg bg-white/10 dark:bg-black/10">
          <h1 className="text-5xl font-bold mb-16 text-center">Create Your Invitation</h1>
          
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
            <div className="grid grid-cols-[140px,1fr] items-center gap-3">
              <label className="text-xl font-normal">
                Event Type
              </label>
              <select 
                name="eventType"
                value={formData.eventType}
                onChange={handleInputChange}
                required
                className="w-full h-11 px-3 rounded bg-white/90 dark:bg-black/20 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 dark:text-gray-200"
              >
                <option>Birthday</option>
                <option>Wedding</option>
                <option>Anniversary</option>
                <option>Graduation</option>
                <option>Baby Shower</option>
                <option>House Warming</option>
              </select>
            </div>

            <div className="grid grid-cols-[140px,1fr] items-center gap-3">
              <label className="text-xl font-normal">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full h-11 px-3 rounded bg-white/90 dark:bg-black/20 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 dark:text-gray-200"
                placeholder="Enter name"
              />
            </div>

            <div className="grid grid-cols-[140px,1fr] items-center gap-3">
              <label className="text-xl font-normal">
                Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                required
                className="w-full h-11 px-3 rounded bg-white/90 dark:bg-black/20 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 dark:text-gray-200"
              />
            </div>

            <div className="grid grid-cols-[140px,1fr] items-center gap-3">
              <label className="text-xl font-normal">
                Venue
              </label>
              <input
                type="text"
                name="venue"
                value={formData.venue}
                onChange={handleInputChange}
                required
                className="w-full h-11 px-3 rounded bg-white/90 dark:bg-black/20 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 dark:text-gray-200"
                placeholder="Enter venue"
              />
            </div>

            <div className="grid grid-cols-[140px,1fr] items-start gap-3 mt-2">
              <label className="text-xl font-normal pt-2">
                Upload Image
              </label>
              <div className="w-full">
                <label className="flex flex-col w-full h-48 border-2 border-dashed rounded cursor-pointer hover:bg-white/5 transition-colors border-gray-300 dark:border-gray-600">
                  <div className="flex flex-col items-center justify-center h-full">
                    <svg className="w-24 h-24 mb-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Click to upload or drag and drop
                    </p>
                  </div>
                  <input 
                    type="file" 
                    className="hidden" 
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                </label>
              </div>
            </div>

            <div className="mt-16">
              <button
                type="submit"
                className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition-colors"
              >
                Create Invitation
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
} 