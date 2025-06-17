"use client";

import { useState } from "react";
import Image from "next/image";
import { SwitchTheme } from "../../components/SwitchTheme";
import { RainbowKitCustomConnectButton } from "../../components/scaffold-eth";
import FAQSection from "./_components/FaqSection";
import TermsSection from "./_components/TermsSection";
import { ArrowRight, Crown, DollarSign, RefreshCw, Rocket, Shield, TrendingUp, Vault, Zap } from "lucide-react";
import { NextPage } from "next";
import PrivacySection from "~~/app/LandingPage/_components/PrivacySection";
import { Button } from "~~/components/shad/ui/button";
import { Card, CardContent } from "~~/components/shad/ui/card";

const tiers = [
  {
    name: "Explorer",
    icon: Shield,
    cashback: "1%",
    color: "from-green-400 to-emerald-500",
    bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
    borderColor: "border-green-200",
    description: "Start your journey",
  },
  {
    name: "Pioneer",
    icon: Rocket,
    cashback: "2%",
    color: "from-blue-400 to-cyan-500",
    bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
    borderColor: "border-blue-200",
    description: "Cashback + perks",
  },
  {
    name: "Legendary",
    icon: Zap,
    cashback: "3%",
    color: "from-orange-400 to-red-500",
    bgColor: "bg-gradient-to-br from-orange-50 to-red-50",
    borderColor: "border-orange-200",
    description: "Exclusive bonuses",
  },
  {
    name: "Elite",
    icon: Crown,
    cashback: "4%",
    color: "from-purple-400 to-pink-500",
    bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
    borderColor: "border-purple-200",
    description: "Premium advantages",
  },
];

const features = [
  {
    icon: DollarSign,
    title: "Instant Withdrawal",
    description: "Get your USDC cashback instantly",
    color: "text-green-500",
  },
  {
    icon: RefreshCw,
    title: "Auto Conversion",
    description: "Seamless conversion with LI.FI",
    color: "text-blue-500",
  },
  {
    icon: TrendingUp,
    title: "DeFi Strategies",
    description: "Reinvest in high-yield protocols",
    color: "text-purple-500",
  },
  {
    icon: Vault,
    title: "Savings Mode",
    description: "Auto-deposit to yield vaults",
    color: "text-orange-500",
  },
];

const LandingPage: NextPage = () => {
  //states
  const [showConditions, setShowConditions] = useState<boolean>(false);
  const [showPrivacy, setShowPrivacy] = useState<boolean>(false);
  const [showFaq, setShowFaq] = useState<boolean>(false);

  return (
    <>
      <div className="bg-base-200 min-h-screen font-sans">
        {showConditions ? (
          <TermsSection />
        ) : showPrivacy ? (
          <PrivacySection />
        ) : showFaq ? (
          <FAQSection />
        ) : (
          <div className="relative z-10">
            {/* Header */}
            <header className="container mx-auto px-6 py-8">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <div className="flex relative w-10 h-10">
                    <Image alt="Meta-cashback-logo" src="/favicon.png" className="cursor-pointer" fill />
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                    MetaCashback
                  </span>
                </div>
                <RainbowKitCustomConnectButton />
              </div>
            </header>

            {/* Hero Section */}
            <section className="container mx-auto px-6 py-20 text-center">
              <div className="max-w-4xl mx-auto">
                <Image alt="Meta-cashback-logo" src="/favicon.png" className="mx-auto mb-6" width={100} height={100} />
                <h1 className="text-6xl md:text-7xl font-bold mb-6 text-base-content">Spend. Lock. Earn.</h1>
                <p className="text-xl md:text-2xl mb-8 leading-relaxed text-base-content">
                  Get cashback in <span className="text-blue-600 font-semibold">USDC</span> with every purchase using{" "}
                  <span className="text-orange-500 font-semibold">MetaMask Card</span>
                </p>
                <p className="text-lg mb-12">Multiply your rewards through staking and DeFi strategies</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button className="bg-primary hover:bg-primary/70 px-6 py-3 shadow-lg">
                    Learn More <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </div>
            </section>

            {/* Tier System */}
            <section className="container mx-auto px-6 py-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent flex items-center justify-center gap-2">
                  Boost Your Cashback
                </h2>

                <p className="text-xl">Choose your tier and maximize your rewards</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {tiers.map(tier => {
                  const Icon = tier.icon;
                  return (
                    <Card
                      key={tier.name}
                      className={`${tier.bgColor} ${tier.borderColor} border-2 hover:border-opacity-100 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer backdrop-blur-sm bg-opacity-90`}
                    >
                      <CardContent className="p-6 text-center">
                        <div
                          className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${tier.color} flex items-center justify-center shadow-lg`}
                        >
                          <Icon className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold">{tier.name}</h3>
                        <div className="text-4xl font-bold mb-2">{tier.cashback}</div>
                        <p className="text-sm mb-4">{tier.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </section>

            {/* Features Section */}
            <section className="container mx-auto px-6 py-20">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Withdraw or Grow Your Money
                </h2>
                <p className="text-xl">Complete control over your cashback rewards</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <Card
                      key={index}
                      className="bg-base-100 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                    >
                      <CardContent className="p-6 text-center">
                        <Icon className={`w-12 h-12 mx-auto mb-4 ${feature.color}`} />
                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                        <p className=" text-sm">{feature.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </section>

            {/* CTA Section */}
            <section className="container mx-auto px-6 py-6 text-center">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                  The future of cashback is in your hands
                </h2>

                <p className="text-xl text-base-content/50 mb-12">
                  Join thousands of users already earning more with MetaCashback
                </p>

                <div className="space-y-4">
                  <RainbowKitCustomConnectButton />
                  <p className="text-sm text-base-content/50">Connect your MetaMask wallet to get started</p>
                </div>
              </div>
            </section>

            <div className="fixed z-10 bottom-0 p-4 flex w-full justify-end">
              <SwitchTheme />
            </div>
            {/* Footer */}
            <footer className="container mx-auto px-6 py-12 border-t border-white/10">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center space-x-2 mb-4 md:mb-0">
                  <div className="flex relative w-10 h-10">
                    <Image alt="SE2 logo" className="cursor-pointer" fill src="/favicon.png" />
                  </div>
                  <span className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                    MetaCashback
                  </span>
                </div>

                <div className="flex">
                  <Button variant={"link"} onClick={() => setShowConditions(true)} className="text-base-content/50">
                    Terms and Conditions
                  </Button>

                  <Button variant={"link"} onClick={() => setShowPrivacy(true)} className="text-base-content/50">
                    Privacy
                  </Button>

                  <Button variant={"link"} onClick={() => setShowFaq(true)} className="text-base-content/50">
                    FAQ
                  </Button>
                </div>
              </div>

              <div className="text-center mt-8 text-gray-500 text-sm">
                © 2025 MetaCashback. All rights reserved. 🚀
              </div>
            </footer>
          </div>
        )}
      </div>
    </>
  );
};

export default LandingPage;
