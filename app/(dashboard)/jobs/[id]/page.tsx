import {
  QueryClient,
  HydrationBoundary,
  dehydrate,
} from '@tanstack/react-query';
import { getSingleJobAction } from '@/utils/actions';

const JobDetailPage = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['job', params.id],
    queryFn: () => getSingleJobAction(params.id),
  });
  return <HydrationBoundary state={dehydrate(queryClient)}></HydrationBoundary>;
};

export default JobDetailPage;
