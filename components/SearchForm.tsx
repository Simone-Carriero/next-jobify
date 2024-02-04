'use client';

import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { JobStatus } from '@/utils/types';

import { Button } from './ui/button';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const SearchForm = () => {
  const params = useSearchParams();
  const search = params.get('search') || '';
  const jobStatus = params.get('jobStatus') || 'all';
  const router = useRouter();
  const pathname = usePathname();
  console.log(router, pathname);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const search = formData.get('search') as string;
    const jobStatus = formData.get('jobStatus') as string;
    let params = new URLSearchParams();
    params.set('search', search);
    params.set('jobStatus', jobStatus);

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <form
      className='bg-muted mb-16 p-8 grid sm:grid-cols-2 md:grid-cols-3  gap-4 rounded-lg'
      onSubmit={handleSubmit}>
      <Input
        type='text'
        placeholder='Search Jobs'
        name='search'
        defaultValue={search}
      />
      <Select
        defaultValue={jobStatus}
        name='jobStatus'>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {['all', ...Object.values(JobStatus)].map((jobStatus) => {
            return (
              <SelectItem
                key={jobStatus}
                value={jobStatus}>
                {jobStatus}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
      <Button type='submit'>Search</Button>
    </form>
  );
};

export default SearchForm;
