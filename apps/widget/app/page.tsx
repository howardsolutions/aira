import { api } from '@workspace/backend/_generated/api';
import { useQuery } from 'convex/react';

export default function Page() {
  const users = useQuery(api.users.getMany);
  return (
    <div className='flex flex-col items-center justify-center min-h-svh'>
      <h1 className='text-2xl font-bold max-w-sm w-full mx-auto gap-y-4'>
        Hello from apps/widget
      </h1>
      {JSON.stringify(users)}
    </div>
  );
}
