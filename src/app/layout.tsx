import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import Image from 'next/image'
import styles from './page.module.css'
import { Container } from '@mui/material'

const inter = Roboto({
  subsets: ['latin'], display: 'swap',
  weight: ['300', '400', '500', '700']
})

export const metadata: Metadata = {
  title: 'Metro Transit Stops',
  description: 'View the Metro Transit bus stops',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className={styles.main}>
          <Image priority className={styles.banner} src={'/home.jpg'} width={2000} height={457} alt='Metro transit light rail at station'/>
          <Container sx={{ maxWidth: '40rem' }} className={styles.selectionContainer}>
            <h1 className={styles.h1}>Bus Route</h1>
            {children}
          </Container>
        </main>
      </body>
    </html>
  )
}
