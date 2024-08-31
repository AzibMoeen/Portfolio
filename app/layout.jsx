import { IBM_Plex_Mono } from 'next/font/google';
import { cn } from '@/lib/utils';
import './globals.css';

const fontHeading = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Specify the weights you want to include
  display: 'swap',
  variable: '--font-heading',
});

const fontBody = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Specify the weights you want to include
  display: 'swap',
  variable: '--font-body',
});

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body 
        className={cn(
          'antialiased',
          fontHeading.variable,
          fontBody.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
