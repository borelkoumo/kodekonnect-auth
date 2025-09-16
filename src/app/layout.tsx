import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import { ClerkLoading, ClerkProvider, ClerkLoaded } from '@clerk/nextjs';
import Loader from '@/components/Loader';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | Kodekonnect',
    default: 'Kodekonnect | Learn by connecting to professionals',
  },
  referrer: 'strict-origin-when-cross-origin',
  keywords: [
    'Kodekonnect',
    'Borel KOUMO',
    'Clerk',
    'Next.js',
    'React',
    'JavaScript',
  ],
  authors: [{ name: 'Borel Koumo' }],
  creator: 'Borel KOUMO',
  publisher: 'Borel KOUMO',
  description:
    'Apprenez, connectez, évoluez avec Kode Konnect. The app is built with Next.js Clerck and Mongodb',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
          <ClerkLoading>
            <Loader />
          </ClerkLoading>
          <ClerkLoaded>
            <Header />
            {children}
          </ClerkLoaded>
        </body>
      </html>
    </ClerkProvider>
  );
}
