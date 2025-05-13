import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { ThemeProvider } from '@/theme-provider';
import Header from '@/app/(components)/layout/header';
import GripBar from './(components)/ui/grip-bar';
import NavigationPane from '@/app/(components)/layout/navigation-pane';
import Footer from '@/app/(components)/layout/footer';
import cx from 'classnames';
import './globals.css';
import { userJobTitle, userName } from '@/config/user.config';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: `${userName} | ${userJobTitle}`,
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme={'dark'}
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col h-full">
            <GripBar />
            <Header />
            <div
              className={cx(
                'flex flex-col h-full overflow-auto',
                'md:flex-row'
              )}
            >
              <div
                className={cx(
                  'order-2 border-solid border-t-[1px] border-[--border]',
                  'md:order-first md:border-t-[0] md:border-r-[1px]'
                )}
              >
                <NavigationPane />
              </div>
              <div
                className={cx(
                  'order-1 w-full h-full overflow-auto',
                  'md:order-2'
                )}
              >
                {children}
              </div>
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
