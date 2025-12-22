'use client';

import { useAtomValue } from 'jotai';
import { WidgetAuthScreen } from '@/modules/widget/ui/screens/widget-auth-screen';
import { screenAtom } from '@/modules/widget/atoms/widget-atoms';

import { WidgetLoadingScreen } from '@/modules/widget/ui/screens/widget-loading-screen';
import { WidgetSelectionScreen } from '@/modules/widget/ui/screens/widget-selection-screen';
import { WidgetChatScreen } from '@/modules/widget/ui/screens/widget-chat-screen';
import { WidgetInboxScreen } from '../screens/widget-inbox-screen';
import { WidgetVoiceScreen } from '../screens/widget-voice-screen';
import { WidgetContactScreen } from '../screens/widget-contact-screen';
import { WidgetErrorScreen } from '../screens/widget-error-screen';

interface WidgetViewProps {
  organizationId: string | null;
}

export const WidgetView = ({ organizationId }: WidgetViewProps) => {
  const screen = useAtomValue(screenAtom);

  const screenComponents = {
    loading: <WidgetLoadingScreen organizationId={organizationId} />,
    error: <WidgetErrorScreen />,
    auth: <WidgetAuthScreen />,
    voice: <WidgetVoiceScreen />,
    inbox: <WidgetInboxScreen />,
    selection: <WidgetSelectionScreen />,
    chat: <WidgetChatScreen />,
    contact: <WidgetContactScreen />,
  };

  return (
    <main className='flex h-full w-full flex-col overflow-hidden rounded-xl border bg-muted'>
      {screenComponents[screen]}
    </main>
  );
};
