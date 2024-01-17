import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import { PropsWithChildren } from 'react';

function layout({ children }: PropsWithChildren) {
  return (
    <main className='grid lg:grid-cols-5'>
      <div className='hidden lg:block lg:h-screen lg:col-span-1'>
        <Sidebar />
      </div>
      <div className='lg:col-span-4'>
        <Navbar />
        <div className='py-16 px-4 sm:px-8 lg:px-16'>{children}</div>
      </div>
    </main>
  );
}
export default layout;
