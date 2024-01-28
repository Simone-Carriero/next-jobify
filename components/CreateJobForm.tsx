'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';

import {
  createAndEditJobSchema,
  CreateAndEditJobType,
  JobMode,
  JobStatus,
} from '@/utils/types';
import { CustomFormField } from './FormComponents';
import CustomFormSelect from './FormComponents';
import { createJobAction } from '@/utils/actions';
import { toast } from './ui/use-toast';
import { useRouter } from 'next/navigation';

const CreateJobForm = () => {
  // 1. Define your form.
  const form = useForm<CreateAndEditJobType>({
    resolver: zodResolver(createAndEditJobSchema),
    defaultValues: {
      position: '',
      company: '',
      location: '',
      status: JobStatus.Pending,
      mode: JobMode.FullTime,
    },
  });

  const queryClient = useQueryClient();

  const router = useRouter();

  const { mutate, isPending } = useMutation({
    mutationFn: (values: CreateAndEditJobType) => createJobAction(values),
    onSuccess: (data) => {
      if (!data) {
        toast({ description: 'there was an error' });
        return;
      }
      toast({ description: 'job created' });
      queryClient.invalidateQueries({ queryKey: ['jobs'] });
      queryClient.invalidateQueries({ queryKey: ['stats'] });
      queryClient.invalidateQueries({ queryKey: ['charts'] });
      // form.reset()
      router.push('/jobs');
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: CreateAndEditJobType) {
    mutate(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='bg-muted p-8 rounded'>
        <h2 className='capitalize text-4xl font-semibold mb-6'>Add job</h2>
        <div className='grid items-start gap-4 md:grid-cols-2 lg:grid-cols-3'>
          <CustomFormField
            name='position'
            control={form.control}
          />
          <CustomFormField
            name='company'
            control={form.control}
          />
          <CustomFormField
            name='location'
            control={form.control}
          />
          <CustomFormSelect
            name='jobStatus'
            labelText='job status'
            control={form.control}
            items={Object.values(JobStatus)}
          />
          <CustomFormSelect
            name='jobMode'
            labelText='job mode'
            control={form.control}
            items={Object.values(JobMode)}
          />

          <Button
            className='self-end capitalize'
            type='submit'>
            {isPending ? (
              <span className='animate-spin h-5 w-5 border rounded-full border-t-foreground'></span>
            ) : (
              'create job'
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default CreateJobForm;
