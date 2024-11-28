import type { Metadata } from 'next';
import { Inter, Roboto, Poppins, Merriweather } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar/Navbar';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const roboto = Roboto({
  weight: ['400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
});

const poppins = Poppins({
  weight: ['400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});
const merrieweather = Merriweather({
  weight: ['300', '400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-merriewather',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Titan Ramadhan - Portofolio',
  description: 'Generated by Ruuma',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${roboto.variable} ${poppins.variable} ${merrieweather.variable}`}
      suppressHydrationWarning
    >
      <body className="overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main> {children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
