import { Loader2 } from 'lucide-react';

export const SpinningLoader = () => (
  <div className="flex justify-center items-center py-8">
    <Loader2 className="h-8 w-8 animate-spin" />
  </div>
);
