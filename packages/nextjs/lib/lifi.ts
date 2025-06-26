import { getToken, getTokenBalance, revokeTokenApproval, setTokenAllowance } from "@lifi/sdk";
import { getTokenAllowance } from "@lifi/sdk";
import { Client } from "viem";

//constans

const USDCAddress: Record<number, string> = {
  10: "0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85", //OP
  42161: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831", //Arbitrum
  1: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", //mainnet
  59144: "0x176211869cA2b568f2A7D4EE941E073a821EE1ff", //Linea
};

// interface IGetAvailableRoutes {
//   chainID: number;
//   balance: string;
//   address: string;
// }
// export const getAvailableRoutes = async ({ chainID, balance, address }: IGetAvailableRoutes) => {
//   const routesRequest: RoutesRequest = {
//     fromChainId: chainID,
//     toChainId: 10, // Optimism
//     fromTokenAddress: USDCAddress[chainID],
//     toTokenAddress: USDCAddress[10],
//     fromAmount: balance,
//     fromAddress: address,
//     toAddress: address,
//   };

//   const result = await getRoutes(routesRequest);
//   const routes = result.routes;
//   return routes;
// };

// export const executeSelectRoute = async (route: Route) => {
//   const nose = await executeRoute(route, {
//     // Gets called once the route object gets new updates
//     updateRouteHook(route) {
//       console.log(route);
//     },
//   });

//   return nose;
// };

export const getUserBalance = async ({ chainID, user }: { chainID: number; user: string }) => {
  const token = await getToken(chainID, USDCAddress[chainID]);
  const tokenBalance = await getTokenBalance(user, token);
  return tokenBalance;
};

export const aproveAmount = async (walletClient: Client, contractAddress: string, amount: bigint) => {
  const approvalRequest = {
    walletClient: walletClient,
    token: {
      address: USDCAddress[10],
      chainId: 10,
    },
    spenderAddress: contractAddress,
    amount,
  };
  //@ts-ignore
  const txHash = await setTokenAllowance(approvalRequest);
  return txHash;
};

export const revokeAmount = async (walletClient: Client, contractAddress: string) => {
  const revokeRequest = {
    walletClient: walletClient,
    token: {
      address: USDCAddress[10],
      chainId: 10,
    },
    spenderAddress: contractAddress,
  };

  //@ts-ignore
  const txHash = await revokeTokenApproval(revokeRequest);
  return txHash;
};

export const getAllowance = async (userAddress: string, contractAddress: string) => {
  const token = {
    address: USDCAddress[10],
    chainId: 10,
  };

  const allowance = await getTokenAllowance(token, userAddress, contractAddress);
  return allowance;
};
