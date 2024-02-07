'use client';

import { getStatsAction } from '@/utils/actions';
import { useQuery } from '@tanstack/react-query';
import StatsCard from './StatsCard';

const StatsContainer = () => {
  const { data } = useQuery({
    queryKey: ['stats'],
    queryFn: () => getStatsAction(),
  });

  return (
    <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
      <StatsCard
        title='Pending jobs'
        value={data?.pending || 0}
      />
      <StatsCard
        title='Interviews set'
        value={data?.interview || 0}
      />
      <StatsCard
        title='Jobs declined'
        value={data?.declined || 0}
      />
    </div>
  );
};

export default StatsContainer;
