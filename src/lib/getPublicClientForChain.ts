import { http, type Chain, createPublicClient } from 'viem';
import { mainnet, optimism, optimismSepolia, sepolia } from 'viem/chains';

const getChainForChainId = (chainId: number) => {
  switch (chainId) {
    case mainnet.id:
      return mainnet;
    case sepolia.id:
      return sepolia;
    case optimism.id:
      return optimism;
    case optimismSepolia.id:
      return optimismSepolia;
    default:
      throw new Error(`Unsupported chain: ${chainId}`);
  }
};

const getRpcUrlForChain = (chainId: number) => {
  switch (chainId) {
    case mainnet.id:
      return 'https://eth.drpc.org';
    case sepolia.id:
      return 'https://ethereum-sepolia-rpc.publicnode.com';
    case optimism.id:
      return 'https://mainnet.optimism.io';
    case optimismSepolia.id:
      return 'https://sepolia.optimism.io';
    default:
      throw new Error(`Unsupported chain: ${chainId}`);
  }
};

export const generateBlockExplorerUrl = (chainId: number, hash: string) => {
  const chain = getChainForChainId(chainId);
  return `${chain.blockExplorers.default.url}/tx/${hash}`;
};

export const getPublicClientForChain = (chainId: number) => {
  const chain = getChainForChainId(chainId);
  const rpcUrl = getRpcUrlForChain(chainId);

  return createPublicClient({
    transport: http(rpcUrl),
    chain,
  });
};
