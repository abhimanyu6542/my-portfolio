import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  title: 'Abhimanyu Debata | Software Developer',
  description: 'Software Developer specializing in .NET, React, and AWS technologies with 3+ years of professional experience.',
  keywords: 'software developer, NodeJs developer, JavaScript Developer, React developer, AWS Lambda, portfolio, web developer',
  authors: [{ name: 'Abhimanyu Debata' }],
  openGraph: {
    title: 'Abhimanyu Debata | Software Developer',
    description: 'Portfolio showcasing projects and experience in NextJs, Vite, NestJs, NodeJs, React, and AWS lambda',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 antialiased">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}