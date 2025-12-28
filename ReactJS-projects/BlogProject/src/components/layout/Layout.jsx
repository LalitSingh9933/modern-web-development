import React from 'react'
import NavBar from '../NavBar'

export default function Layout({ children }) {
  return (
    <div>
      <NavBar />

      {/* Page Content */}
      <main className="pt-20 px-4 max-w-7xl mx-auto">
        {children}
      </main>
    </div>
  )
}
