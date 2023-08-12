import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '../components/header';
import Footer from '../components/footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mynecraft',
  description: 'あいうえお',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Header/>
        <main className='min-h-screen'>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}
