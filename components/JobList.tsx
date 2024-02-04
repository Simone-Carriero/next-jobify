'use client';

import { getAllJobsAction } from '@/utils/actions';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import JobCard from './JobCard';

const JobList = () => {
  const params = useSearchParams();
  const search = params.get('search') || '';
  const jobStatus = params.get('jobStatus') || 'all';
  const pageNumber = Number(params.get('page')) || 1;

  const { data, isPending } = useQuery({
    queryKey: [search, jobStatus, pageNumber],
    queryFn: () => getAllJobsAction({ search, jobStatus, page: pageNumber }),
  });

  const jobs = data?.jobs || [];

  if (isPending) {
    return <h2 className='text-xl'>Please Wait...</h2>;
  }
  if (jobs.length < 1) {
    return <h2 className='text-xl'>No Jobs Found...</h2>;
  }
  return (
    <>
      <div className='grid gap-8 md:grid-cols-2'>
        {jobs.map((job) => {
          return (
            <JobCard
              key={job.id}
              job={job}
            />
          );
        })}
      </div>
    </>
  );
};

export default JobList;
