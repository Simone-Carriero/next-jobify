'use client';

import Image from 'next/image';
import sidebarLogo from '@/assets/logo.svg';
import links from '@/utils/links';
import { Button } from './ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <aside className='py-4 px-8 bg-muted h-full'>
      <Image
        src={sidebarLogo}
        alt='logo'
        className='mx-auto'
      />
      <div className='flex flex-col gap-y-4 mt-20'>
        {links.map((link) => {
          const { href, icon, label } = link;
          return (
            <Button
              asChild
              key={href}
              variant={pathname === href ? 'default' : 'link'}>
              <Link
                href={href}
                className='flex items-center gap-x-2'>
                {icon}
                <span className='capitalize'>{label}</span>
              </Link>
            </Button>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
