import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaucetButton, RainbowKitCustomConnectButton } from "./scaffold-eth";
import { Button } from "./shad/ui/button";
import { useSidebar } from "./shad/ui/sidebar";
import { Bug, ClockFading, HandCoins, House, InfoIcon, PanelRight } from "lucide-react";
import { NextPage } from "next";
import { hardhat } from "viem/chains";
import { useTargetNetwork } from "~~/hooks/scaffold-eth";
import { useIsMobile } from "~~/hooks/shad/use-mobile";

type AppHeaderMenuLink = {
  label: string;
  href: string;
  icon?: React.ReactNode;
};

export const menuLinks: AppHeaderMenuLink[] = [
  {
    label: "Home",
    href: "/",
    icon: <House className="h-4 w-4" />,
  },
  {
    label: "Staking",
    href: "/staking",
    icon: <HandCoins className="h-4 w-4" />,
  },
  {
    label: "History",
    href: "/history",
    icon: <ClockFading className="h-4 w-4" />,
  },
  {
    label: "About",
    href: "/about",
    icon: <InfoIcon className="h-4 w-4" />,
  },
  {
    label: "Debug Contracts",
    href: "/debug",
    icon: <Bug className="h-4 w-4" />,
  },
];

const HeaderMenuLinks = () => {
  const pathname = usePathname();

  return (
    <div className="flex gap-2">
      <Link href="/" passHref className="flex items-center gap-2 mr-2 shrink-0">
        <div className="flex relative w-10 h-10">
          <Image alt="MetaCashback logo" className="cursor-pointer" fill src="/favicon.png" />
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            MetaCashback
          </span>
        </div>
      </Link>

      {menuLinks.map(({ label, href, icon }) => {
        const isActive = pathname === href;

        return (
          <Link key={href} href={href}>
            <Button variant={isActive ? "default" : "outline"} className={isActive ? "bg-secondary" : ""}>
              {icon}
              <span>{label}</span>
            </Button>
          </Link>
        );
      })}
    </div>
  );
};

// Site header
const AppHeader: NextPage = () => {
  const { targetNetwork } = useTargetNetwork();
  const isLocalNetwork = targetNetwork.id === hardhat.id;
  const { toggleSidebar } = useSidebar();
  const isMobile = useIsMobile();

  return (
    <header className="border-b p-4 flex justify-between bg-base-100">
      {isMobile ? (
        <Button onClick={toggleSidebar} className="bg-secondary">
          <PanelRight className="h-1/2" />
        </Button>
      ) : (
        <HeaderMenuLinks />
      )}

      <div className="flex justify-center gap-2">
        <RainbowKitCustomConnectButton />
        {isLocalNetwork && <FaucetButton />}
      </div>
    </header>
  );
};

export default AppHeader;
