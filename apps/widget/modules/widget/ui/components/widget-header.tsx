import { cn } from '@workspace/ui/lib/utils';
import { ReactNode } from 'react';

function WidgetHeader({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <header
      className={cn(
        'bg-gradient-to-b from-primary to-[#5b1919] p-4 text-primary-foreground',
        className
      )}
    >
      {children}
    </header>
  );
}

export default WidgetHeader;
