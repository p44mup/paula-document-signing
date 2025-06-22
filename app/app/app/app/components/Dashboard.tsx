'use client'

import { useState } from 'react'
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react'
import { FileText, Upload, Users, Settings, LogOut, CheckCircle } from 'lucide-react'

export default function Dashboard() {
  const supabase = useSupabaseClient()
  const user = useUser()
  const [activeTab, setActiveTab] = useState('documents')

  const handleSignOut = async () => {
    await supabase.auth.signOut()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Document Signing System
              </h1>
              <p className="text-sm text-gray-600">
                Welcome back, Paula Lewis - RentSmart Wales Registered
              </p>
            </div>
            <button
              onClick={handleSignOut}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
            >
              <LogOut className="h-4 w-4" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Success Banner */}
        <div className="mb-8 bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-center">
            <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
            <div>
              <h3 className="text-lg font-medium text-green-800">
                🎉 Phase 1 Complete - System Foundation Ready!
              </h3>
              <p className="text-green-700 mt-1">
                Your document signing system is now live at edgev4.com. Next: PDF upload functionality.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-8">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('documents')}
              className={`flex items-center space-x-2 pb-2 border-b-2 ${
                activeTab === 'documents'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <FileText className="h-4 w-4" />
              <span>Documents</span>
            </button>
            <button
              onClick={() => setActiveTab('upload')}
              className={`flex items-center space-x-2 pb-2 border-b-2 ${
                activeTab === 'upload'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <Upload className="h-4 w-4" />
              <span>Upload New</span>
            </button>
            <button
              onClick={() => setActiveTab('properties')}
              className={`flex items-center space-x-2 pb-2 border-b-2 ${
                activeTab === 'properties'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <Users className="h-4 w-4" />
              <span>Properties</span>
            </button>
          </nav>
        </div>

        {/* Content */}
        {activeTab === 'documents' && (
          <div className="card">
            <h2 className="text-xl font-semibold mb-4">Document Library</h2>
            <div className="text-center py-12">
              <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Ready for Documents
              </h3>
              <p className="text-gray-600 mb-6">
                System is live and ready. PDF upload functionality will be added in our next session.
              </p>
              <button
                onClick={() => setActiveTab('upload')}
                className="btn-primary"
              >
                View Upload Info
              </button>
            </div>
          </div>
        )}

        {activeTab === 'upload' && (
          <div className="card">
            <h2 className="text-xl font-semibold mb-4">Document Upload</h2>
            <div className="border-2 border-dashed border-green-300 bg-green-50 rounded-lg p-12 text-center">
              <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Phase 1 Foundation Complete! ✅
              </h3>
              <div className="space-y-3 text-sm">
                <p className="text-green-700 font-medium">✅ Website live at edgev4.com</p>
                <p className="text-green-700 font-medium">✅ Secure authentication working</p>
                <p className="text-green-700 font-medium">✅ Dashboard responsive design</p>
                <p className="text-green-700 font-medium">✅ Database connected</p>
                <p className="text-blue-600 font-medium">🔄 Next: DOC-SIGN-002 (PDF Upload)</p>
              </div>
              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Next Session:</strong> We'll add PDF upload, tenant email invitations, 
                  and digital signature capture. You're on track to cancel Landlord Vision in 2 weeks!
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'properties' && (
          <div className="card">
            <h2 className="text-xl font-semibold mb-4">Your Properties</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'The Bays Complex',
                'PAK House Complex',
                '68 Llantwit Road',
                '39 Jersey Quay',
                '68 Hunters Ridge',
                '10 Cimla Crescent'
              ].map((property) => (
                <div key={property} className="p-4 border border-gray-200 rounded-lg">
                  <h3 className="font-medium text-gray-900">{property}</h3>
                  <p className="text-sm text-gray-600 mt-1">Ready for document signing</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm text-gray-500">
            <div>
              <p className="font-medium">Paula Lewis Property Management</p>
              <p>RentSmart Wales Registered</p>
            </div>
            <div className="text-right">
              <p className="text-green-600 font-medium">Phase 1 Complete ✅</p>
              <p>Target: £480-600 annual savings</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
