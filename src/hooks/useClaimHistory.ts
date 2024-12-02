import { type Grant, useGrants } from '@/context/GrantsContext';
import { useQuery } from '@tanstack/react-query';
import { type ResultOf, graphql } from 'gql.tada';
import { print } from 'graphql';
import { hedgeyGraphqlApiEndpoint } from '../../config/contracts/endpoints';

const query = graphql(`
    query GetClaimsForAddress($input: TokenCampaignEventsResolverInput) {
        TokenCampaignEvents(input: $input) {
            events {
                campaign {
                    id
                    product
                    token {
                    address
                    decimals
                    name
                    ticker
                    }
                    type
                }
                campaignId
                chainId
                info {
                    amountClaimed
                    timestamp
                    transactionHash
                }
                network
                nft {
                    currentHolder
                }
                prices {
                    price
                }
            }
        }
    }
`);

export interface ClaimHistoryEvent {
  date: Date;
  claimedAmount: string;
  milestone: string;
  transactionHash: string;
  campaignId: string;
}

export type ClaimHistory = {
  grant: Grant;
  events: ClaimHistoryEvent[];
};

export const useClaimHistory = (userAddress: string) => {
  const { grants } = useGrants();
  return useQuery({
    queryKey: ['claim-history', userAddress],
    queryFn: async () => {
      const response = await fetch(hedgeyGraphqlApiEndpoint, {
        method: 'POST',
        body: JSON.stringify({
          query: print(query),
          variables: {
            input: {
              includeTestnets: true,
              address: userAddress,
              eventType: 'TokensClaimed',
            },
          },
        }),
      });
      const result = (await response.json()).data as ResultOf<typeof query>;
      const allEvents = result.TokenCampaignEvents?.events
        ?.map((event) => {
          const date = event?.info?.timestamp
            ? new Date(Number(event.info.timestamp) * 1000)
            : undefined;
          const claimedAmount = event?.info?.amountClaimed;
          // TODO: Get the correct milestone
          const milestone = '1';
          const transactionHash = event?.info?.transactionHash;
          const campaignId = event?.campaign?.id;

          if (!date || !claimedAmount || !transactionHash || !campaignId) {
            return null;
          }

          return {
            date,
            claimedAmount,
            milestone,
            transactionHash,
            campaignId,
          } as ClaimHistoryEvent;
        })
        .filter((event) => !!event);

      return grants
        .map((grant) => {
          const campaignId = grant.id;
          const events = (allEvents || []).filter(
            (event) => event.campaignId === campaignId,
          );

          if (events.length === 0) {
            return null;
          }
          return {
            grant,
            events,
          };
        })
        .filter((claim) => !!claim);
    },
  });
};
