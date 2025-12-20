import { Button } from '@workspace/ui/components/button';
import { cn } from '@workspace/ui/lib/utils';
import { HomeIcon, InboxIcon } from 'lucide-react';

function WidgetFooter() {
  const screen = 'selection';

  return (
    <footer className='flex items-center justify-between border-t bg-background'>
      <Button
        onClick={() => {}}
        size={'icon'}
        variant={'ghost'}
        className='h-14 flex-1 rounded-none'
      >
        <HomeIcon
          className={cn('size-5', screen === 'selection' && 'text-primary')}
        />
      </Button>

      <Button
        onClick={() => {}}
        size={'icon'}
        variant={'ghost'}
        className='h-14 flex-1 rounded-none'
      >
        <InboxIcon
          className={cn('size-5', screen === 'inbox' && 'text-primary')}
        />
      </Button>
    </footer>
  );
}

export default WidgetFooter;
