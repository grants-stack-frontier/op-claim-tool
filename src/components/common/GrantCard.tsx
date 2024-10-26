import { Card, CardContent } from '@/components/ui/card';
import type { Grant } from '@/context/GrantsContext';
import { cn } from '@/lib/utils';
import { ArrowUpRight, Hexagon } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { ClaimDialog } from '../dialogs/ClaimDialog';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';

const GrantCard = ({
  grant,
  isClaimDialogOpen = false,
}: {
  grant: Grant;
  isClaimDialogOpen?: boolean;
}) => {
  const [showClaimDialog, setShowClaimDialog] = useState(false);

  const handleClaim = () => {
    setShowClaimDialog(true);
  };

  return (
    <>
      <Card
        className={cn(
          'shadow-none',
          isClaimDialogOpen && 'border border-neutral-300 cursor-pointer',
        )}
      >
        {grant.canClaim && !isClaimDialogOpen && (
          <div className="flex items-center justify-between bg-red-200 px-10 py-2 rounded-t-lg">
            <p className="text-sm">You are eligible to claim this grant</p>
            <Button
              variant="link"
              className="text-red-500 font-semibold hover:no-underline p-0"
              onClick={handleClaim}
            >
              Claim now
            </Button>
          </div>
        )}
        <CardContent className="flex flex-col md:flex-row items-start md:items-center gap-8 py-8 px-10">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 flex-grow">
            <Hexagon className="w-10 h-10" />
            <div className="flex flex-col gap-2 max-w-2xl">
              <p className="font-semibold text-xl">{grant.title}</p>
              <p className="text-sm text-gray-500 line-clamp-3">
                {grant.description}
              </p>
              <div className="flex h-5 items-center space-x-4 text-xs text-gray-500 mt-8">
                <p>
                  Date of award:{' '}
                  <span className="font-semibold text-black">
                    {grant.date.toLocaleDateString()}
                  </span>
                </p>
                <Separator orientation="vertical" />
                <div className="flex items-center gap-2">
                  <p>Delegate to: </p>
                  <Link
                    className="group flex items-center font-semibold text-black"
                    href="/grants"
                  >
                    {grant.delegateTo}{' '}
                    <ArrowUpRight
                      className="ml-1 text-neutral-500 w-4 h-4 opacity-70 transition-transform duration-300 ease-in-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
                <Separator orientation="vertical" />
                <div className="flex items-center gap-2">
                  <p>Latest claim: </p>
                  <Link
                    className="group flex items-center font-semibold text-black"
                    href="/grants"
                  >
                    {grant.latestClaim}{' '}
                    <ArrowUpRight
                      className="ml-1 text-neutral-500 w-4 h-4 opacity-70 transition-transform duration-300 ease-in-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 font-semibold">
            <span className="text-black">{grant.claimed}</span> /
            <span className="text-gray-500">{grant.grantAmount}</span>
          </div>
        </CardContent>
      </Card>
      {!isClaimDialogOpen && (
        <ClaimDialog
          isOpen={showClaimDialog}
          setOpen={setShowClaimDialog}
          grantId={grant.id}
        />
      )}
    </>
  );
};

export default GrantCard;
