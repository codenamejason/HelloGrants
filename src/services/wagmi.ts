"use client";

import { getDefaultWallets } from "@rainbow-me/rainbowkit";
import dotenv from "dotenv";
import { configureChains, createConfig, sepolia } from "wagmi";
import {
  arbitrum,
  arbitrumSepolia,
  base,
  celo,
  celoAlfajores,
  mainnet,
  optimism,
  optimismSepolia,
  polygon,
  scroll,
  scrollSepolia,
} from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { infuraProvider } from "wagmi/providers/infura";
import { publicProvider } from "wagmi/providers/public";

dotenv.config();

// Test Networks
const stagingChains = [
  sepolia,
  arbitrumSepolia,
  optimismSepolia,
  celoAlfajores,
  scrollSepolia,
];

// Main Networks
const productionChains = [
  arbitrum,
  base,
  celo,
  mainnet,
  polygon,
  optimism,
  scroll,
];

const availableChains =
  process.env.NEXT_PUBLIC_ENVIRONMENT === "dev"
    ? stagingChains
    : productionChains;

const { chains, publicClient } = configureChains(
  [...availableChains],
  [
    alchemyProvider({
      apiKey:
        (process.env.ALCHEMY_ID as string) ||
        "ajWJk5YwtfTZ5vCAhMg8I8L61XFhyJpa",
    }),
    infuraProvider({
      apiKey:
        (process.env.INFURA_ID as string) || "ae484befdd004b64bfe2059d3526a138",
    }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "Micro Grants",
  projectId: (process.env.PROJECT_ID as string) || "YOUR_PROJECT_ID",
  chains,
});

export const wagmiConfigData = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

export const chainData = chains;

export const getChain = (chainId: number) => {
  for (const chain of Object.values(chains)) {
    if (chain.id === chainId) {
      return chain;
    }
  }

  throw new Error(`Chain with id ${chainId} not found`);
};
