'use client';

import { SignInButton, UserButton } from '@clerk/nextjs';
import { Authenticated, Unauthenticated } from 'convex/react';

export default function Page() {
  // const users = useQuery(api.users.getMany);

  return (
    <div>
      <Authenticated>
        <div className='flex flex-col items-center justify-center min-h-svh'>
          <h1 className='text-2xl font-bold max-w-sm w-full mx-auto gap-y-4'>
            Hello from apps/web
          </h1>
          <UserButton />
        </div>
      </Authenticated>

      <Unauthenticated>
        <p>Must be signed in</p>
        <SignInButton>Sign In!</SignInButton>
      </Unauthenticated>
    </div>
  );
}
