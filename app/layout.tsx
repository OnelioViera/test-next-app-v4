import '@/assets/styles/globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Test Next App v4',
  description: 'This is a test Next.js app v4',
  keywords: 'nextjs, react, typescript',
};


import { ReactNode } from 'react';

const layout = ({ children } : { children: ReactNode }) => {
  return (
    <html lang='en'>
      <body className='flex flex-col min-h-screen'>
      <Navbar />

        <main>
          {children}
        </main>
      </body>
    </html>
  )
};

export default layout;
