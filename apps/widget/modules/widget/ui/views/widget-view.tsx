'use client';

import WidgetFooter from '../components/widget-footer';
import WidgetHeader from '../components/widget-header';

interface WidgetViewProps {
  organizationId: string;
}

function WidgetView({ organizationId }: WidgetViewProps) {
  return (
    <>
      <WidgetHeader>
        <div className='font-semibold flex flex-col justify-between gap-y-2 px-2 py-6'>
          <p className='text-3xl'>Hi there! ✋</p>
          <p className='text-lg'>How can we help you today?</p>
        </div>
      </WidgetHeader>
      <main className='min-h-screen min-w-screen flex h-full w-full flex-col overflow-hidden rounded-xl border bg-muted'>
        Widget Views: {organizationId}
      </main>
      <WidgetFooter />
    </>
  );
}

export default WidgetView;
