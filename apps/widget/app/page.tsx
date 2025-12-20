'use client';

import WidgetView from '@/modules/widget/ui/views/widget-view';
import { use } from 'react';

interface WidgetPageProps {
  searchParams: Promise<{ organizationId: string }>;
}

export default function WidgetPage({ searchParams }: WidgetPageProps) {
  const { organizationId } = use(searchParams);

  return <WidgetView organizationId={organizationId} />;
}
