'use client';

import { OrganizationSwitcher, UserButton } from '@clerk/nextjs';

export default function Page() {
  // const users = useQuery(api.users.getMany);

  return (
    <div>
      <div className='flex flex-col items-center justify-center min-h-svh'>
        <h1 className='text-2xl font-bold max-w-sm w-full mx-auto gap-y-4'>
          Hello from apps/web
        </h1>
        <UserButton />
        <OrganizationSwitcher hidePersonal />
      </div>
    </div>
  );
}
