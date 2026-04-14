import { Metadata } from 'next';
import { ReactNode } from 'react';

import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';

export const metadata: Metadata = {
  title: 'Langua',
  description: 'An online language learning platform, powered by Stream Chat and Clerk.',
};

const RootLayout = ({ children }: Readonly<{children: ReactNode}>) => {
  return (
    <main className="flex flex-col min-h-screen">
      <div className='fixed w-full z-10'>
        <Navbar />
      </div>
      <section className="flex flex-1 flex-row">
        <Sidebar />
        <div className="w-full ml-[192px] mt-[80px]">{children}</div>
      </section>
    </main>
  );
};

export default RootLayout;
