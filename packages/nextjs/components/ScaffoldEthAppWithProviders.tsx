"use client";

import { useEffect, useState } from "react";
import LandingPage from "../app/LandingPage/LandingPage";
import AppHeader from "./AppHeader";
import AppSidebar from "./AppSideBar";
import { SidebarInset, SidebarProvider } from "./shad/ui/sidebar";
import { EVM, createConfig } from "@lifi/sdk";
import { RainbowKitProvider, darkTheme, lightTheme } from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { getWalletClient } from "@wagmi/core";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { useTheme } from "next-themes";
import { Toaster } from "react-hot-toast";
import { Client } from "viem";
import { WagmiProvider, useAccount, useWalletClient } from "wagmi";
import { Footer } from "~~/components/Footer";
import { BlockieAvatar } from "~~/components/scaffold-eth";
import { useInitializeNativeCurrencyPrice } from "~~/hooks/scaffold-eth";
import { wagmiConfig } from "~~/services/web3/wagmiConfig";

const ScaffoldEthApp = ({ children }: { children: React.ReactNode }) => {
  useInitializeNativeCurrencyPrice();
  const { data: wagmiClient } = useWalletClient();
  const { isConnected } = useAccount();

  useEffect(() => {
    if (!wagmiClient) return;
    liFiConnection();
  }, [wagmiClient]);

  const liFiConnection = async () => {
    const wagmiClient: Client = await getWalletClient(wagmiConfig);

    createConfig({
      integrator: "metacashback",
      providers: [
        EVM({
          getWalletClient: async () => wagmiClient,
        }),
      ],
      preloadChains: true,
    });
  };

  return (
    <>
      {isConnected ? (
        <SidebarProvider defaultOpen={false}>
          <AppSidebar />
          <SidebarInset>
            <AppHeader />
            <main className="flex-1 flex flex-col min-h-screen">{children}</main>
            <Footer />
            <Toaster />
          </SidebarInset>
        </SidebarProvider>
      ) : (
        <LandingPage />
      )}
    </>
  );
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export const ScaffoldEthAppWithProviders = ({ children }: { children: React.ReactNode }) => {
  const { resolvedTheme } = useTheme();
  const isDarkMode = resolvedTheme === "dark";
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <ProgressBar height="3px" color="#2299dd" />
        <RainbowKitProvider
          avatar={BlockieAvatar}
          theme={mounted ? (isDarkMode ? darkTheme() : lightTheme()) : lightTheme()}
          modalSize="compact"
        >
          <ScaffoldEthApp>{children}</ScaffoldEthApp>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
