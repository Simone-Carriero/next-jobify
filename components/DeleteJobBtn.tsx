'use client';

import { deleteJobAction } from '@/utils/actions';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Button } from './ui/button';
import { toast } from './ui/use-toast';

const DeleteJobBtn = ({ id }: { id: string }) => {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (id: string) => deleteJobAction(id),
    onSuccess: (data) => {
      if (!data) {
        toast({ description: 'there was an error' });
        return;
      }
      toast({ description: 'job removed' });
      queryClient.invalidateQueries({ queryKey: ['jobs'] });
      queryClient.invalidateQueries({ queryKey: ['stats'] });
      queryClient.invalidateQueries({ queryKey: ['charts'] });
    },
  });
  return (
    <Button
      asChild
      size='sm'
      onClick={() => mutate(id)}
      disabled={isPending}>
      {isPending ? 'deleting...' : 'delete'}
    </Button>
  );
};

export default DeleteJobBtn;
