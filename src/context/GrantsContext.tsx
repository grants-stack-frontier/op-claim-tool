import type { Claim } from '@/app/api/claims/route';
import {
  type ClaimHistoryEvent,
  useClaimHistory,
} from '@/hooks/useClaimHistory';
import { useGetCanClaim } from '@/hooks/useGetCanClaim';
import {
  type HedgeyCampaign,
  useGetHedgeyCampaigns,
} from '@/hooks/useGetHedgeyCampaigns';
import { getNextTokenReleaseTimestamp } from '@/lib/getNextTokenRelease';
import { getChainIdByNetworkName } from '@/lib/getPublicClientForChain';
import type React from 'react';
import { createContext, useContext, useState } from 'react';
import { formatUnits } from 'viem';
import { useAccount } from 'wagmi';

export enum FilterOption {
  Highest = 'Highest',
  Lowest = 'Lowest',
  MostClaimed = 'MostClaimed',
  LeastClaimed = 'LeastClaimed',
}

export type Grant = {
  id: string;
  title: string;
  description: string;
  date: Date;
  delegateTo: string;
  latestClaimHash: string;
  claimed: number;
  grantAmount: number;
  chainId: number;
  proof: Claim & { claimed: boolean };
  campaign: HedgeyCampaign;
  currentUserCanClaim: boolean;
  claimEvents: ClaimHistoryEvent[];
  tokenReleasedInDays: number | null;
};

type GrantsContextType = {
  grants: Grant[];
  displayedGrants: Grant[];
  loadMore: () => void;
};

const GrantsContext = createContext<GrantsContextType | undefined>(undefined);

export const useGrants = () => {
  const context = useContext(GrantsContext);
  if (context === undefined) {
    throw new Error('useGrants must be used within a GrantsProvider');
  }
  return context;
};

type GrantsProviderProps = {
  children: React.ReactNode;
};

export const GrantsProvider: React.FC<GrantsProviderProps> = ({ children }) => {
  const grants = [
    {
      id: '1ab278f1-252a-4265-b15f-30765f46babc',
      title: 'Optimism Demo Grant',
      description: 'For the optimism demo',
      delegateTo: '0x123',
    },
    {
      id: '04725f67-1af7-4b4c-9b3e-7f523f5e8cf7',
      title: 'Uniswap Demo Grant',
      description: 'Claim your tokens here',
      delegateTo: '0x01',
    },
    {
      id: 'e23db1a6-3a9b-48bf-8a06-bb39c2298435',
      title: 'Demo Grant',
      description: 'Claim your PLBR here',
      delegateTo: '0x01',
    },
  ];

  const [displayCount, setDisplayCount] = useState(10);

  const { address } = useAccount();
  const campaignIds = grants.map((grant) => grant.id);
  const { data: hedgeyCampaigns } = useGetHedgeyCampaigns(campaignIds);
  const { data: proofs } = useGetCanClaim(hedgeyCampaigns ?? []);
  const { data: claimHistory = {} } = useClaimHistory(address, campaignIds);

  // Map the Hedgey campaigns to the grants, ignore any grants that don't have a corresponding campaign
  const mappedGrants = grants
    .map((grant) => {
      const campaign = hedgeyCampaigns?.find(
        (campaign) => campaign.id === grant.id,
      );
      const proof = proofs?.find((proof) => proof?.uuid === grant.id);

      if (!proof || !campaign) return null;

      const grantAmount = Number(
        formatUnits(
          BigInt(campaign.totalAmount || 0),
          campaign.token?.decimals || 0,
        ),
      );

      const claimed = Number(
        formatUnits(
          BigInt(Number(campaign.totalAmountClaimed) || 0),
          campaign.token?.decimals || 0,
        ),
      );

      const currentUserCanClaim = proof.canClaim && !proof.claimed;
      const date = new Date(campaign.createdAt as string);
      const chainId = getChainIdByNetworkName(campaign.network);
      const claimEvents = claimHistory[grant.id];

      const latestClaimHash = claimEvents?.[0]?.transactionHash;

      const tokenReleasedInDays = getNextTokenReleaseTimestamp(
        campaign.claimLockup,
      )?.daysUntilNextRelease;

      return {
        ...grant,
        proof,
        campaign,
        claimEvents,

        // Calculated fields
        grantAmount,
        claimed,
        currentUserCanClaim,
        date,
        chainId,
        latestClaimHash,
        tokenReleasedInDays,
      };
    })
    .filter((grant) => grant !== null) as Grant[];

  const loadMore = () => {
    setDisplayCount((prevCount) => Math.min(prevCount + 5, grants.length));
  };

  console.log(mappedGrants);

  return (
    <GrantsContext.Provider
      value={{
        grants: mappedGrants,
        displayedGrants: mappedGrants.slice(0, displayCount),
        loadMore,
      }}
    >
      {children}
    </GrantsContext.Provider>
  );
};
