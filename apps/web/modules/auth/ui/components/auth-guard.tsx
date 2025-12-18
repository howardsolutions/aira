'use client';

import { Authenticated, AuthLoading, Unauthenticated } from 'convex/react';
import { AuthLayout } from '../layouts/auth-layout';
import { ReactNode } from 'react';
import SignInView from '../views/sign-in-view';

function AuthGuard({ children }: { children: ReactNode }) {
  return (
    <div>
      <AuthLoading>
        <AuthLayout>
          <p>Loading...</p>
        </AuthLayout>
      </AuthLoading>

      <Authenticated>{children}</Authenticated>

      <Unauthenticated>
        <AuthLayout>
          <SignInView />
        </AuthLayout>
      </Unauthenticated>
    </div>
  );
}

export default AuthGuard;
