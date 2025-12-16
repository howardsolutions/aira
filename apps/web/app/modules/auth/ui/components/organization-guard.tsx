import { useOrganization } from '@clerk/nextjs';
import { ReactNode } from 'react';

function OrganizationGuard({ children }: { children: ReactNode }) {
  const { organization } = useOrganization();

  if (!organization) {
    return (
      <div>
        <p>Create An Organization</p>
      </div>
    );
  }

  return <div>{children}</div>;
}

export default OrganizationGuard;
