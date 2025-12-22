'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@workspace/ui/components/button';
import { useAtomValue, useSetAtom } from 'jotai';
import { ArrowLeftIcon, MenuIcon } from 'lucide-react';

import {
  contactSessionIdAtomFamily,
  conversationIdAtom,
  organizationIdAtom,
  screenAtom,
  widgetSettingsAtom,
} from '../../atoms/widget-atoms';

import WidgetHeader from '../components/widget-header';

const formSchema = z.object({
  message: z.string().min(1, 'Message is required'),
});

export const WidgetChatScreen = () => {
  const setScreen = useSetAtom(screenAtom);
  const setConversationId = useSetAtom(conversationIdAtom);

  const widgetSettings = useAtomValue(widgetSettingsAtom);
  const conversationId = useAtomValue(conversationIdAtom);
  const organizationId = useAtomValue(organizationIdAtom);
  const contactSessionId = useAtomValue(
    contactSessionIdAtomFamily(organizationId || '')
  );

  const onBack = () => {
    setConversationId(null);
    setScreen('selection');
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: '',
    },
  });

  return (
    <>
      <WidgetHeader className='flex items-center justify-between'>
        <div className='flex items-center gap-x-2'>
          <Button onClick={onBack} size='icon' variant='transparent'>
            <ArrowLeftIcon />
          </Button>
          <p>Chat</p>
        </div>
        <Button size='icon' variant='transparent'>
          <MenuIcon />
        </Button>
      </WidgetHeader>
    </>
  );
};
