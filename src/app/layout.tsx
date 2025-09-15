import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import { ClerkLoading, ClerkProvider, ClerkLoaded } from '@clerk/nextjs';
import Loader from '@/components/Loader';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next auth',
  description: 'Next auth with Clerck and Mongodb',
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
