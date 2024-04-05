import '@/styles/globals.css';
import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { Providers } from './providers';
import clsx from 'clsx';
import React from 'react';
import Header from '@/components/layouts/header/Header';
import { IranSans } from '@/config/fonts';
import { Footer } from '@/components/layouts/footer/Footer';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};
export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html dir="rtl" lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="viewport"
          content={`width=device-width, initial-scale=1, ${viewport.themeColor.map((color) => (color.media ? `${color.media} and ` : `${color.color},`)).join('')}`}
        />
      </head>
      <body
        className={clsx(
          'font-iransans min-h-screen bg-primary-50 shadow-xl antialiased',
          IranSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
          <div className="relative flex flex-col h-full">
            <Header />
            <main className="container mx-auto pt-16 px-6 flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
