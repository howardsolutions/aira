"use client"

import { useOrganization } from '@clerk/nextjs';
import { ReactNode } from 'react';
import { AuthLayout } from '../layouts/auth-layout';
import OrgSelectionView from './org-selection-view';

function OrganizationGuard({ children }: { children: ReactNode }) {
  const { organization } = useOrganization();

  if (!organization) {
    return (
      <AuthLayout>
        <OrgSelectionView />
      </AuthLayout>
    );
  }

  return <div>{children}</div>;
}

export default OrganizationGuard;
