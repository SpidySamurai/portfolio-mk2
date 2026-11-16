import { Manrope, Inter } from 'next/font/google';
import { headers } from 'next/headers';

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const headersList = await headers();
  const locale = headersList.get('x-locale') ?? 'en';
  // Dark-only site — theme is forced dark (next-themes forcedTheme), so the
  // server html must always render dark too, regardless of any stale cookie.

  return (
    <html lang={locale} data-theme="dark" data-scroll-behavior="smooth">
      <body
        className={`${manrope.variable} ${inter.variable} antialiased`}
        style={{ margin: 0, padding: 0 }}
      >
        {children}
      </body>
    </html>
  );
}
