import type { Metadata } from 'next';
import { GeistSans } from 'geist/font';
import './globals.css';

export const metadata: Metadata = {
  title: 'Next.js Mail',
  description: 'An email client template using the Next.js App Router.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="bg-white dark:bg-gray-950 text-black dark:text-white"
    >      
      <head>
            // eslint-disable-next-line @next/next/no-sync-scripts
            <script
            data-project-id="PLf1fSnB3ptyoNJmCTW5ddBbe0xpWNmimlhiSo8S"
            src="https://snippet.meticulous.ai/v1/meticulous.js"
            />
      </head>
      <body className={GeistSans.className}>{children}</body>
    </html>
  );
}
