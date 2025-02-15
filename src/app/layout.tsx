import type { Metadata } from 'next';
import { Roboto_Flex } from 'next/font/google';
import '@/app/globals.css';
import AppFooter from '@/components/organisms/AppFooter';
import AppHeader from '@/components/organisms/AppHeader';
import SWRProvider from '@/components/organisms/SWRProvider';
import SolanaProvider from '@/components/organisms/SolanaProvider';

const robotoFlex = Roboto_Flex({
  variable: '--font-roboto-flex',
  weight: ['300', '500', '600', '700'],
  subsets: ['latin'],
});


export const metadata: Metadata = {
  title: 'CryptoCHECK - Check prices of cryptocurrencies',
  description: 'Your crypto dashboard',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoFlex.variable} ${robotoFlex.className} antialiased bg-mint-500 flex flex-col min-h-screen`}
      >
        <SolanaProvider>
          <SWRProvider>
            <AppHeader />
            <div className="w-full max-w-7xl mx-auto mt-10 mb-10 flex-1 text-cyan-950">
              {children}
            </div>
            <AppFooter />
          </SWRProvider>
        </SolanaProvider>
      </body>
    </html>
  );
}
