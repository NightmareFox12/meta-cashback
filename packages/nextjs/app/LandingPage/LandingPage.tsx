"use client";

import { NextPage } from "next";
import { useState } from "react";
import { SwitchTheme } from "../../components/SwitchTheme";
import { RainbowKitCustomConnectButton } from "../../components/scaffold-eth";
import { Button } from "~~/components/shad/ui/button";
import { Card, CardContent } from "~~/components/shad/ui/card";
import { Crown, DollarSign, RefreshCw, Rocket, Shield, TrendingUp, Vault, Sparkles, Zap } from "lucide-react";
import FAQSection from "./_components/FaqSection";
import PrivacySection from "./_components/PrivacySection";
import TermsSection from "./_components/TermsSection";
import Image from "next/image";

const tiers = [
  {
    name: "Explorer",
    icon: Shield,
    cashback: "1%",
    color: "from-green-400 to-emerald-500",
    bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
    borderColor: "border-green-200",
    description: "Start your journey",
    bubbleColor: "from-green-200/20 to-emerald-300/30",
  },
  {
    name: "Pioneer",
    icon: Rocket,
    cashback: "2%",
    color: "from-blue-400 to-cyan-500",
    bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
    borderColor: "border-blue-200",
    description: "Cashback + perks",
    bubbleColor: "from-blue-200/20 to-cyan-300/30",
  },
  {
    name: "Legendary",
    icon: Zap,
    cashback: "3%",
    color: "from-orange-400 to-red-500",
    bgColor: "bg-gradient-to-br from-orange-50 to-red-50",
    borderColor: "border-orange-200",
    description: "Exclusive bonuses",
    bubbleColor: "from-orange-200/20 to-red-300/30",
  },
  {
    name: "Elite",
    icon: Crown,
    cashback: "4%",
    color: "from-purple-400 to-pink-500",
    bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
    borderColor: "border-purple-200",
    description: "Premium advantages",
    bubbleColor: "from-purple-200/20 to-pink-300/30",
  },
]

const features = [
  {
    icon: DollarSign,
    title: "Instant Withdrawal",
    description: "Get your USDC cashback instantly",
    color: "text-green-500",
    bubbleColor: "from-green-200/15 to-emerald-300/25",
  },
  {
    icon: RefreshCw,
    title: "Auto Conversion",
    description: "Seamless conversion with LI.FI",
    color: "text-blue-500",
    bubbleColor: "from-blue-200/15 to-cyan-300/25",
  },
  {
    icon: TrendingUp,
    title: "DeFi Strategies",
    description: "Reinvest in high-yield protocols",
    color: "text-purple-500",
    bubbleColor: "from-purple-200/15 to-violet-300/25",
  },
  {
    icon: Vault,
    title: "Savings Mode",
    description: "Auto-deposit to yield vaults",
    color: "text-orange-500",
    bubbleColor: "from-orange-200/15 to-amber-300/25",
  },
]

const LandingPage: NextPage = () => {
  //states
  const [showConditions, setShowConditions] = useState<boolean>(false);
  const [showPrivacy, setShowPrivacy] = useState<boolean>(false);
  const [showFaq, setShowFaq] = useState<boolean>(false);

  return (
    <>
      <div className="bg-base-200 min-h-screen font-sans">
        {/* Global Sparkle Decorations */}
        <div className="fixed inset-0 pointer-events-none z-10">
          {[
            { left: "10%", top: "20%", delay: "0s" },
            { left: "25%", top: "50%", delay: "0.5s" },
            { left: "40%", top: "30%", delay: "1s" },
            { left: "55%", top: "60%", delay: "1.5s" },
            { left: "70%", top: "40%", delay: "2s" },
            { left: "85%", top: "70%", delay: "2.5s" },
            { left: "15%", top: "80%", delay: "3s" },
            { left: "35%", top: "10%", delay: "3.5s" },
            { left: "50%", top: "50%", delay: "4s" },
            { left: "65%", top: "20%", delay: "4.5s" },
            { left: "80%", top: "60%", delay: "5s" },
            { left: "90%", top: "30%", delay: "5.5s" },
            { left: "20%", top: "45%", delay: "6s" },
            { left: "50%", top: "80%", delay: "6.5s" },
            { left: "75%", top: "10%", delay: "7s" },
          ].map((pos, i) => (
            <Sparkles
              key={i}
              className="absolute text-yellow-400/40 animate-twinkle"
              size={10}
              style={{
                left: pos.left,
                top: pos.top,
                animationDelay: pos.delay,
              }}
            />
          ))}
        </div>

        {showConditions ? (
          <TermsSection setShowConditions={setShowConditions} />
        ) : showPrivacy ? (
          <PrivacySection setShowPrivacy={setShowPrivacy} />
        ) : showFaq ? (
          <FAQSection setShowFaq={setShowFaq} />
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
            <section className="container mx-auto px-6 py-20 text-center relative">
              {/* Hero floating elements */}
              <div className="absolute inset-0 pointer-events-none">
                {[
                  { left: "10%", top: "30%", width: "40px", height: "40px", delay: "0s", duration: "8s" },
                  { left: "25%", top: "50%", width: "50px", height: "50px", delay: "1s", duration: "9s" },
                  { left: "40%", top: "20%", width: "30px", height: "30px", delay: "2s", duration: "7s" },
                  { left: "60%", top: "70%", width: "45px", height: "45px", delay: "1.5s", duration: "8.5s" },
                  { left: "80%", top: "40%", width: "35px", height: "35px", delay: "2.5s", duration: "10s" },
                ].map((bubble, i) => (
                  <div
                    key={i}
                    className="absolute rounded-full bg-gradient-to-r from-yellow-400/10 to-orange-400/20 animate-float"
                    style={{
                      left: bubble.left,
                      top: bubble.top,
                      width: bubble.width,
                      height: bubble.height,
                      animationDelay: bubble.delay,
                      animationDuration: bubble.duration,
                    }}
                  />
                ))}
              </div>

              <div className="max-w-4xl mx-auto relative z-10">
                <div className="relative inline-block mb-6">
                  <Image
                    alt="Meta-cashback-logo"
                    src="/favicon.png"
                    className="mx-auto animate-pulse"
                    width={100}
                    height={100}
                  />
                  <div className="absolute -top-2 -right-2 animate-bounce">
                    <Sparkles className="w-6 h-6 text-yellow-400" />
                  </div>
                </div>
                <h1 className="text-6xl md:text-7xl font-bold mb-6 text-base-content animate-fade-in-up">
                  Spend. Lock. Earn.
                </h1>
                <p className="text-xl md:text-2xl mb-8 leading-relaxed text-base-content animate-fade-in-up animation-delay-200">
                  Get cashback in <span className="text-blue-600 font-semibold">USDC</span> with every purchase using{" "}
                  <span className="text-orange-500 font-semibold">MetaMask Card</span>
                </p>
                <p className="text-lg mb-12 animate-fade-in-up animation-delay-400">
                  Multiply your rewards through staking and DeFi strategies
                </p>
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
                {tiers.map((tier) => {
                  const Icon = tier.icon
                  return (
                    <Card
                      key={tier.name}
                      className={`${tier.bgColor} ${tier.borderColor} border-2 hover:border-opacity-100 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer backdrop-blur-sm bg-opacity-90 relative overflow-hidden group`}
                    >
                      {/* Floating Bubbles inside tier cards */}
                      <div className="absolute inset-0 pointer-events-none z-5">
                        {[
                          { left: "25%", top: "30%", width: "20px", height: "20px", delay: "0s", duration: "6s" },
                          { left: "60%", top: "70%", width: "15px", height: "15px", delay: "1s", duration: "7s" },
                        ].map((bubble, i) => (
                          <div
                            key={i}
                            className={`absolute rounded-full bg-gradient-to-r ${tier.bubbleColor} animate-float`}
                            style={{
                              left: bubble.left,
                              top: bubble.top,
                              width: bubble.width,
                              height: bubble.height,
                              animationDelay: bubble.delay,
                              animationDuration: bubble.duration,
                            }}
                          />
                        ))}
                      </div>

                      {/* Shimmer effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                      <CardContent className="p-6 text-center relative z-10">
                        <div
                          className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${tier.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold">{tier.name}</h3>
                        <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-white">
                          {tier.cashback}
                        </div>
                        <p className="text-sm mb-4">{tier.description}</p>
                      </CardContent>
                    </Card>
                  )
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
                  const Icon = feature.icon
                  return (
                    <Card
                      key={index}
                      className="bg-base-100 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 relative overflow-hidden group"
                    >
                      {/* Floating Bubbles inside feature cards */}
                      <div className="absolute inset-0 pointer-events-none z-5">
                        {[
                          { left: "25%", top: "30%", width: "20px", height: "20px", delay: "0s", duration: "5s" },
                          { left: "60%", top: "70%", width: "15px", height: "15px", delay: "1s", duration: "6s" },
                        ].map((bubble, i) => (
                          <div
                            key={i}
                            className={`absolute rounded-full bg-gradient-to-r ${feature.bubbleColor} animate-float`}
                            style={{
                              left: bubble.left,
                              top: bubble.top,
                              width: bubble.width,
                              height: bubble.height,
                              animationDelay: bubble.delay,
                              animationDuration: bubble.duration,
                            }}
                          />
                        ))}
                      </div>

                      <CardContent className="p-6 text-center relative z-10">
                        <Icon
                          className={`w-12 h-12 mx-auto mb-4 ${feature.color} group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}
                        />
                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                        <p className="text-sm">{feature.description}</p>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </section>

            {/* CTA Section */}
            <section className="container mx-auto px-6 py-6 text-center relative">
              {/* CTA floating elements */}
              {/* Floating Bubbles */}
              <div className="absolute inset-0 pointer-events-none">
                {[
                  { left: "20%", top: "30%", width: "40px", height: "40px", delay: "0s", duration: "8s" },
                  { left: "50%", top: "50%", width: "45px", height: "45px", delay: "1s", duration: "9s" },
                  { left: "75%", top: "20%", width: "35px", height: "35px", delay: "2s", duration: "7s" },
                ].map((bubble, i) => (
                  <div
                    key={i}
                    className="absolute rounded-full bg-gradient-to-r from-purple-400/10 to-pink-400/20 animate-float"
                    style={{
                      left: bubble.left,
                      top: bubble.top,
                      width: bubble.width,
                      height: bubble.height,
                      animationDelay: bubble.delay,
                      animationDuration: bubble.duration,
                    }}
                  />
                ))}
              </div>
              <div className="max-w-3xl mx-auto relative z-10">
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
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            33% { transform: translateY(-15px) rotate(3deg); }
            66% { transform: translateY(-8px) rotate(-3deg); }
          }
          
          @keyframes twinkle {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.2); }
          }
          
          @keyframes fade-in-up {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          
          .animate-twinkle {
            animation: twinkle 2s ease-in-out infinite;
          }
          
          .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out forwards;
          }
          
          .animation-delay-200 {
            animation-delay: 0.2s;
          }
          
          .animation-delay-400 {
            animation-delay: 0.4s;
          }
          
          .animation-delay-600 {
            animation-delay: 0.6s;
          }
        `}</style>
      </div>
    </>
  );
};

export default LandingPage;
