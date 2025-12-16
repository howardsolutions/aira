import { ReactNode } from 'react';
import { AuthLayout } from '../modules/auth/ui/layouts/auth-layout';

function Layout({ children }: { children: ReactNode }) {
  return <AuthLayout>{children}</AuthLayout>;
}

export default Layout;
