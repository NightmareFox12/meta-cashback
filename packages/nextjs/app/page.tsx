"use client";

import Image from "next/image";
import PerformanceCalculator from "./_components/PerformanceCalculator";
import { UserChart } from "./_components/UserChart";
import { Crown, Flame, Rocket, Shield, TrendingUp, Wallet } from "lucide-react";
import { NextPage } from "next";
import { formatUnits } from "viem";
import { useAccount } from "wagmi";
import { Button } from "~~/components/shad/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "~~/components/shad/ui/card";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";
import { formatNumber } from "~~/utils/formatNumber";

const Home: NextPage = () => {
  const { address } = useAccount();

  // const { data: userBalance } = useScaffoldReadContract({
  //   contractName: "USDC",
  //   functionName: "balanceOf",
  //   args: [address],
  // });

  const { data: userBalance } = useScaffoldReadContract({
    contractName: "USDCFake",
    functionName: "balanceOf",
    args: [address],
  });

  const currentUserRole = "Elite Level";

  const roles = [
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

  return (
    <main className="flex pt-5 mx-4 flex-col gap-4">
      <div className="flex flex-row gap-4">
        <section className="flex justify-center items-center flex-1 mt-4 px-3">
          <Card className="w-full bg-gradient-to-br from-blue-800 to-blue-400 text-white h-full relative overflow-hidden">
            <CardHeader className="text-center space-y-2">
              <div className="mx-auto w-16 h-16  bg-blue-400/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Wallet className="w-8 h-8" />
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                <div className="absolute inset-0 bg-white rounded-full transform translate-x-16 -translate-y-16"></div>
              </div>
              <CardTitle className="text-2xl font-bold ">My Balance</CardTitle>
            </CardHeader>

            <CardContent className="text-center">
              <div className=" bg-white/20 backdrop-blur-sm rounded-2xl p-2 border border-white/20 flex items-center justify-center space-x-2">
                <Image src={"/usdc.png"} alt="usdc icon" width={20} height={20} />
                <p className="text-4xl font-bold">${formatNumber(formatUnits(userBalance ?? 0n, 6))}</p>
              </div>
            </CardContent>
            <CardFooter className="pt-0">
              <div className="w-full bg-white/20 backdrop-blur-sm rounded-xl p-2 border border-white/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-green-400" />
                    </div>
                    <span className="font-medium">Weekly Earnings</span>
                  </div>
                  <span className="font-bold">15 USDC</span>
                </div>
              </div>
            </CardFooter>
            <div className="px-6 mx-auto">
              <Button className="bg-secondary hover:bg-secondary/50">Withdraw Earnings</Button>
            </div>
          </Card>
        </section>
        {/* Role Card Section */}
        <section className="flex justify-center items-center flex-1 mt-4 px-3">
          {roles.map((role, index) => {
            if (role.name === currentUserRole) {
              const IconComponent = role.icon;
              return (
                <div
                  key={index}
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
                </div>
              );
            }
            return null;
          })}
        </section>

        <section className="flex justify-center items-center flex-1 mt-4 px-3">
          <UserChart />
        </section>
      </div>

      <div className="flex flex-row gap-4 justify-center">
        <section className="flex justify-center items-center flex-1 px-3 max-w-md">
          <Card className="w-full bg-gradient-to-br from-blue-800 to-blue-400 text-white h-full relative overflow-hidden">
            <CardHeader className="text-center space-y-2">
              <div className="mx-auto w-16 h-16  bg-blue-400/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <TrendingUp className="w-8 h-8" />
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                <div className="absolute inset-0 bg-white rounded-full transform translate-x-16 -translate-y-16"></div>
              </div>
              <CardTitle className="text-2xl font-bold">Progress of Level</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-10">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <p className="text-lg font-medium mb-2">Next Level: Pioneer</p>
                <div className="w-full bg-secondary rounded-full h-3 mb-2">
                  <div className="bg-green-300 h-3 rounded-full" style={{ width: "30%" }}></div>
                </div>
                <p className="text-sm opacity-70">You need $100 USDC to level up</p>
              </div>
            </CardContent>
          </Card>
        </section>
        <PerformanceCalculator />
      </div>
    </main>
  );
};

export default Home;
