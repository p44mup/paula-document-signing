'use client'

import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import Dashboard from './components/Dashboard'

export default function Home() {
  const session = useSession()
  const supabase = useSupabaseClient()

  if (!session) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Paula's Document Signing
            </h1>
            <p className="text-gray-600">
              RentSmart Wales Registered Property Management
            </p>
          </div>
          
          <div className="card">
            <Auth
              supabaseClient={supabase}
              appearance={{ theme: ThemeSupa }}
              providers={[]}
              redirectTo={typeof window !== 'undefined' ? `${window.location.origin}/` : undefined}
            />
          </div>
        </div>
      </div>
    )
  }

  return <Dashboard />
}
