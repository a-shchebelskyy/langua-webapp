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
    <main className="flex flex-row w-full">
      <Sidebar />
      <section className="flex min-h-screen flex-1 flex-col">
        <Navbar />
        <div className="w-full">{children}</div>
      </section>
    </main>
  );
};

export default RootLayout;
