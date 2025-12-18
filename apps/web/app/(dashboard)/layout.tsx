import { DashboardLayout } from '@/modules/dashboard/ui/layout/dashboard-layout';
import { ReactNode } from 'react';

function Layout({ children }: { children: ReactNode }) {
  return <DashboardLayout>{children}</DashboardLayout>;
}

export default Layout;
