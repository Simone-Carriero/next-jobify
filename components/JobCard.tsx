import { JobType } from '@/utils/types';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from './ui/button';
import { MapPin, Briefcase, CalendarDays, RadioTower } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import JobInfo from './JobInfo';
import DeleteJobBtn from './DeleteJobBtn';

const JobCard = ({ job }: { job: JobType }) => {
  const { company, location, mode, position, status, id } = job;
  const date = new Date(job.createdAt).toLocaleDateString();
  return (
    <Card className='bg-muted'>
      <CardHeader>
        <CardTitle>{position}</CardTitle>
        <CardDescription>{company}</CardDescription>
      </CardHeader>
      <Separator />
      <CardContent className='mt-4 grid grid-cols-2 gap-4'>
        <JobInfo
          icon={<Briefcase />}
          text={mode}
        />
        <JobInfo
          icon={<MapPin />}
          text={location}
        />
        <JobInfo
          icon={<CalendarDays />}
          text={date}
        />
        <Badge className='w-32 justify-center'>
          <JobInfo
            icon={<RadioTower className='w-4 h-4' />}
            text={status}
          />
        </Badge>
      </CardContent>
      <CardFooter className='flex gap-4'>
        <Link href={`/jobs/${id}`}>
          <Button
            asChild
            size='sm'>
            edit
          </Button>
        </Link>
        <DeleteJobBtn id={id} />
      </CardFooter>
    </Card>
  );
};

export default JobCard;
