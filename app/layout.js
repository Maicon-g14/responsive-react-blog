import React from 'react'

import '../styles/globals.scss'
import { Inter } from 'next/font/google'
import { Layout } from '../components'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Green Acres Blog',
  description: 'Blog with tips and articles about gardening',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={inter.className}>
          <Layout>{children}</Layout>
        </body>
    </html>
  )
}
