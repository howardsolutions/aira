import { ReactNode } from 'react';
import AuthGuard from '../modules/auth/ui/components/auth-guard';

function DashboardLayout({ children }: { children: ReactNode }) {
  return <AuthGuard>{children}</AuthGuard>;
}

export default DashboardLayout;
