import { ForwardRefExoticComponent, RefAttributes } from "react";
import { Crown, Flame, LucideProps, Rocket, Shield } from "lucide-react";
import { useAccount } from "wagmi";
import { Card } from "~~/components/shad/ui/card";
import { Skeleton } from "~~/components/shad/ui/skeleton";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

interface IRoles {
  name: string;
  range: string;
  cashback: string;
  benefit?: string;
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
  bgColor: string;
  iconBg: string;
  iconColor: string;
}

const roles: IRoles[] = [
  {
    name: "Explorer Level",
    range: "$0 - $100 locked",
    cashback: "1% cashback",
    icon: Shield,
    bgColor: "bg-gradient-to-r from-blue-400 to-blue-600",
    iconBg: "bg-blue-600/20",
    iconColor: "text-blue-300",
  },
  {
    name: "Pioneer Level",
    range: "$100 - $500 locked",
    cashback: "2% cashback",
    benefit: "+ access to perks",
    icon: Rocket,
    bgColor: "bg-gradient-to-r from-green-400 to-green-600",
    iconBg: "bg-green-600/20",
    iconColor: "text-green-300",
  },
  {
    name: "Legendary Level",
    range: "$500 - $1000 locked",
    cashback: "3% cashback",
    benefit: "+ exclusive bonuses",
    icon: Flame,
    bgColor: "bg-gradient-to-r from-orange-400 to-yellow-600",
    iconBg: "bg-orange-600/20",
    iconColor: "text-orange-300",
  },
  {
    name: "Elite Level",
    range: "$1000+ locked",
    cashback: "4% cashback",
    benefit: "+ premium benefits",
    icon: Crown,
    bgColor: "bg-gradient-to-r from-purple-400 to-purple-600",
    iconBg: "bg-purple-600/20",
    iconColor: "text-purple-300",
  },
];

const CardLevel = () => {
  const { address } = useAccount();

  //smart contract
  const { data: currentLevel, isLoading } = useScaffoldReadContract({
    contractName: "MetaCashback",
    functionName: "getLevel",
    account: address,
  });

  const { data: explorerLevel } = useScaffoldReadContract({
    contractName: "MetaCashback",
    functionName: "EXPLORER_LEVEL",
    account: address,
  });

  const { data: pionerLevel } = useScaffoldReadContract({
    contractName: "MetaCashback",
    functionName: "PIONEER_LEVEL",
    account: address,
  });

  const { data: legendaryLevel } = useScaffoldReadContract({
    contractName: "MetaCashback",
    functionName: "LEGENDARY_LEVEL",
    account: address,
  });

  const { data: eliteLevel } = useScaffoldReadContract({
    contractName: "MetaCashback",
    functionName: "ELITE_LEVEL",
    account: address,
  });

  //components
  const CardRole = ({ role }: { role: IRoles }) => {
    const IconComponent = role.icon;

    return (
      <Card
        className={`${role.bgColor} rounded-2xl p-6 text-white relative overflow-hidden h-full w-full max-w-sm flex flex-col justify-center items-center`}
      >
        {/* Background Icon */}
        <div className="absolute top-4 right-4 opacity-20">
          <IconComponent className="w-16 h-16" />
        </div>
        <div className="absolute top-0 right-0 w-40 h-40 opacity-10">
          <div className="absolute inset-0 bg-white rounded-full transform translate-x-12 -translate-y-12"></div>
        </div>
        {/* Content */}
        <div className="relative z-10 space-y-6 flex flex-col justify-center items-center text-center">
          <div className={`w-12 h-12 ${role.iconBg} rounded-full flex items-center justify-center mx-auto`}>
            <IconComponent className={`w-6 h-6 ${role.iconColor}`} />
          </div>
          <h3 className="font-bold text-2xl">{role.name}</h3>
          <p className="text-lg opacity-90">{role.range}</p>
          <p className="text-lg font-semibold">{role.cashback}</p>
          {role.benefit && <p className="text-sm opacity-80">{role.benefit}</p>}
        </div>
      </Card>
    );
  };

  return (
    <section className="flex justify-center items-center flex-1 mt-4 px-3">
      {isLoading ? (
        <Skeleton className="w-full h-full" />
      ) : currentLevel !== undefined ? (
        <>
          {currentLevel === explorerLevel && <CardRole key={roles[0].name} role={roles[0]} />}
          {currentLevel === pionerLevel && <CardRole key={roles[1].name} role={roles[1]} />}
          {currentLevel === legendaryLevel && <CardRole key={roles[2].name} role={roles[2]} />}
          {currentLevel === eliteLevel && <CardRole key={roles[3].name} role={roles[3]} />}
        </>
      ) : (
        <Skeleton className="w-full h-full" />
      )}
    </section>
  );
};
export default CardLevel;
