"use client";

import React, { useEffect, useState } from 'react'
import { Layout } from '../components'
import '../styles/globals.scss'
import { Inter } from 'next/font/google'

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
