import { OrganizationList } from '@clerk/nextjs';
import React from 'react';

function OrgSelectView() {
  return (
    <OrganizationList
      afterCreateOrganizationUrl={'/'}
      afterSelectOrganizationUrl={'/'}
      hidePersonal
      skipInvitationScreen
    />
  );
}

export default OrgSelectView;
