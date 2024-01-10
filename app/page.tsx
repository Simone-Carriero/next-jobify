import Image from 'next/image';
import LandingImg from '@/assets/main.svg';
import Logo from '@/assets/logo.svg';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='grid grid-rows-[auto,1fr] min-h-screen justify-start lg:justify-center'>
      <header className='py-6 px-4 sm:px-8 max-w-6xl mx-auto w-full'>
        <Image
          src={Logo}
          alt='logo'
        />
      </header>
      <section className='grid lg:gap-x-12 lg:grid-cols-[1fr,400px] items-center  max-w-6xl mx-auto px-4 sm:px-8 h-full'>
        <div className='space-y-4'>
          <h1 className='text-4xl md:text-7xl font-bold capitalize'>
            Job <span className='text-primary'>Tracking</span> App
          </h1>
          <p className='text-balance max-w-md leading-loose'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
            consectetur vel error dolor fuga expedita aliquid quisquam ducimus
            dicta consequuntur! Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Officiis necessitatibus, dolorum suscipit a minima
            et maiores illum culpa blanditiis! Fugiat nisi, omnis itaque
            quisquam nesciunt deserunt necessitatibus soluta illo suscipit?
          </p>
          <Button asChild>
            <Link href='add-job'>Get Started</Link>
          </Button>
        </div>
        <Image
          src={LandingImg}
          alt='main image'
          className='hidden lg:block'
        />
      </section>
    </main>
  );
}
