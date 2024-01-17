import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { AlignLeft } from 'lucide-react';
import { Button } from './ui/button';
import links from '@/utils/links';
import Link from 'next/link';

const LinksDropdown = () => (
  <DropdownMenu>
    <DropdownMenuTrigger
      asChild
      className='lg:hidden'>
      <Button
        variant='outline'
        size='icon'>
        <AlignLeft />

        <span className='sr-only'>Toggle links</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent
      sideOffset={25}
      align='start'
      className='w-52 lg:hidden'>
      {links.map((link) => {
        const { href, icon, label } = link;
        return (
          <DropdownMenuItem key={href}>
            <Link
              href={href}
              className='flex items-center gap-x-2'>
              {icon} <span className='capitalize'>{label}</span>
            </Link>
          </DropdownMenuItem>
        );
      })}
    </DropdownMenuContent>
  </DropdownMenu>
);

export default LinksDropdown;
