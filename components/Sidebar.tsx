'use client';
// import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <section className={`fixed left-0 top-[80px] flex h-screen min-w-[192px] flex-col justify-between z-1 bg-slate-100 dark:bg-slate-900`}>
      <div className="flex flex-1 flex-col p-4 text-slate-950 dark:text-white">
        {sidebarLinks.map((item, i) => {
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
          
          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn(
                'flex flex-row gap-3 items-center px-4 py-3 rounded-lg justify-start items-center',
                {
                  'bg-blue-200 dark:bg-blue-800': isActive,
                }
              )}
            >
              {/* <div 
                className={`flex p-1 rounded-full bg-slate-50`}
              >
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  width={16}
                  height={16}
                />
              </div> */}
              <p className="text-sm font-semibold max-lg:hidden">
                {item.label}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
