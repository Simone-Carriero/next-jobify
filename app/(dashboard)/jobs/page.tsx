import JobList from '@/components/JobList';
import SearchForm from '@/components/SearchForm';
import {
  QueryClient,
  HydrationBoundary,
  dehydrate,
} from '@tanstack/react-query';
import { getAllJobsAction } from '@/utils/actions';

const AllJobsPage = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['jobs', '', 'all', 1],
    queryFn: () => getAllJobsAction({}),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <SearchForm />
      <JobList />
    </HydrationBoundary>
  );
};

export default AllJobsPage;
