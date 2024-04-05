import '@/styles/globals.css';
import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { Providers } from './providers';
import clsx from 'clsx';
import React from 'react';
import Header from '@/components/layouts/header/Header';
import { IranYekan, IranSans } from '@/config/fonts';

interface Viewport {
  width: string;
  initialScale: number;
  userScalable: boolean | undefined;
}

interface ThemeColorSetting {
  media: string;
  color: string;
}

interface CustomMetadata extends Metadata {
  viewport?: Viewport;
  themeColor?: ThemeColorSetting[];
}

export const metadata: CustomMetadata = {
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
  viewport: {
    width: 'device-width',
    initialScale: 1,
    userScalable: false,
  },
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
    <html lang="en" dir="rtl" suppressHydrationWarning>
      <head>
        {metadata.viewport && (
          <meta
            name="viewport"
            content={`width=${metadata.viewport.width}, initial-scale=${metadata.viewport.initialScale},
             user-scalable=${metadata.viewport.userScalable ? 'yes' : 'no'}`}
          />
        )}
        {metadata.themeColor?.map((colorSetting, index) => (
          <meta
            key={index}
            name="theme-color"
            content={colorSetting.color}
            media={colorSetting.media}
          />
        ))}
      </head>
      <body
        className={clsx(
          'bg-background font-sans antialiased',
          IranSans.variable,
          IranYekan.variable,
        )}
      >
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
