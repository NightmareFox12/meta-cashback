import { EVM, RoutesRequest, createConfig, getToken, getTokenBalance } from "@lifi/sdk";
import { getRoutes } from "@lifi/sdk";
import { wagmiConfig } from "~~/services/web3/wagmiConfig";

createConfig({
  integrator: "metacashback",
  providers: [
    EVM({
      getWalletClient: async () => {
        if (!wagmiConfig) return;
        return wagmiConfig as any;
      },
    }),
  ],
  preloadChains: true,
});

const USDCAddress: Record<number, string> = {
  10: "0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85", //OP
  42161: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831", //Arbitrum
  1: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", //mainnet
  59144: "0x176211869cA2b568f2A7D4EE941E073a821EE1ff", //Linea
};

export const changeToken = async ({ chainID, balance }: { chainID: number; balance: string }) => {
  const routesRequest: RoutesRequest = {
    fromChainId: chainID,
    toChainId: 10, // Optimism
    fromTokenAddress: USDCAddress[chainID],
    toTokenAddress: USDCAddress[10],
    fromAmount: balance,
  };

  const result = await getRoutes(routesRequest);
  const routes = result.routes;
  return routes;
};

export const getUserBalance = async ({ chainID, user }: { chainID: number; user: string }) => {
  try {
    const token = await getToken(chainID, USDCAddress[chainID]);
    const tokenBalance = await getTokenBalance(user, token);
    return tokenBalance;
  } catch (err) {
    console.log(err);
  }
};
