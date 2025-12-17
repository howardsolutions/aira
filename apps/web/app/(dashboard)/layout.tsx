import { ReactNode } from 'react';
import AuthGuard from '../modules/auth/ui/components/auth-guard';
import OrganizationGuard from '../modules/auth/ui/components/organization-guard';

function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <AuthGuard>
      <OrganizationGuard>{children}</OrganizationGuard>
    </AuthGuard>
  );
}

export default DashboardLayout;
