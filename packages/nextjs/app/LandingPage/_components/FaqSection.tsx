"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  AlertTriangle,
  ArrowLeft,
  ChevronDown,
  CreditCard,
  LifeBuoy,
  LogOut,
  Percent,
  TrendingUp,
  Users,
  Wallet,
} from "lucide-react";
import { NextPage } from "next";
import { Button } from "~~/components/shad/ui/button";

const faqItems = [
  {
    icon: <CreditCard className="h-6 w-6 text-orange-500" />,
    question: "What is MetaCashback?",
    answer:
      "MetaCashback is a decentralized rewards system that allows users to earn cashback in USDC by interacting with DeFi protocols. It currently works with the MetaMask wallet. In the future, it will also support the MetaMask Card for physical and digital purchases.",
  },
  {
    icon: <Users className="h-6 w-6 text-orange-500" />,
    question: "How do I participate?",
    answer: (
      <div className="space-y-2">
        <p>To start using MetaCashback, you need:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>An active MetaMask wallet</li>
          <li>USDC tokens to interact with DeFi protocols</li>
          <li>Optional: Lock funds to boost your cashback rate</li>
        </ul>
      </div>
    ),
  },
  {
    icon: <Percent className="h-6 w-6 text-orange-500" />,
    question: "How does cashback work?",
    answer: (
      <div className="space-y-2">
        <p>Your cashback rate depends on your DeFi activity level:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Explorer: 1%</li>
          <li>Pioneer: 2%</li>
          <li>Legendary: 3%</li>
          <li>Elite: 4%</li>
        </ul>
        <p>Rewards are automatically sent to your MetaMask wallet in USDC.</p>
      </div>
    ),
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-orange-500" />,
    question: "How can I increase my cashback?",
    answer: (
      <div className="space-y-2">
        <p>You can boost your cashback by locking USDC for a fixed period:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>1 month: +0.5% bonus</li>
          <li>3 months: +1% bonus</li>
          <li>6 months: +1.5% bonus + exclusive perks</li>
        </ul>
        <p>This feature is available through the staking module.</p>
      </div>
    ),
  },
  {
    icon: <Wallet className="h-6 w-6 text-orange-500" />,
    question: "How can I use or withdraw my cashback?",
    answer: (
      <div className="space-y-2">
        <p>You can choose from the following options:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>💸 Direct USDC withdrawal to your MetaMask wallet</li>
          <li>📈 Auto-reinvest into DeFi vaults for passive yield</li>
        </ul>
        <p>Token conversion via LI.FI SDK and cross-chain swaps will be available in future updates.</p>
      </div>
    ),
  },
  {
    icon: <ChevronDown className="h-6 w-6 text-orange-500" />,
    question: "What technologies power MetaCashback?",
    answer: (
      <div className="space-y-2">
        <p>MetaCashback is built using:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>MetaMask SDK + wagmi for wallet connection and contract interaction</li>
          <li>LI.FI SDK for balance reading on Optimism</li>
          <li>DeFiLlama API for real-time APY data</li>
          <li>Hardhat for smart contract development</li>
          <li>Next.js for the frontend interface</li>
        </ul>
      </div>
    ),
  },
  {
    icon: <AlertTriangle className="h-6 w-6 text-orange-500" />,
    question: "Are there any risks?",
    answer:
      "Yes. MetaCashback interacts with third-party DeFi protocols. Users should be aware of smart contract risks, market volatility, and comply with local tax regulations. MetaCashback does not guarantee returns or cover losses.",
  },
  {
    icon: <LogOut className="h-6 w-6 text-orange-500" />,
    question: "Can I stop using MetaCashback?",
    answer:
      "Yes. You can stop using the platform at any time. However, if you’ve locked funds for a specific duration, you must wait until the lock period ends to withdraw them.",
  },
  {
    icon: <LifeBuoy className="h-6 w-6 text-orange-500" />,
    question: "How can I contact support?",
    answer:
      "You can reach the MetaCashback support team through the official channels listed on the website. For technical issues, please open a GitHub issue or use the contact form.",
  },
  {
    icon: <ChevronDown className="h-6 w-6 text-orange-500" />,
    question: "Will MetaCashback support the MetaMask Card?",
    answer:
      "Yes. Full integration with the MetaMask Card is planned. This will allow users to earn cashback on physical and digital purchases made with the card.",
  },
  {
    icon: <ChevronDown className="h-6 w-6 text-orange-500" />,
    question: "Will there be governance features?",
    answer:
      "Yes. A governance system is planned for future releases, allowing users to vote on protocol upgrades, reward structures, and new integrations.",
  },
];


type FAQSectionProps = {
  setShowFaq: Dispatch<SetStateAction<boolean>>;
};

const FAQSection: NextPage<FAQSectionProps> = ({ setShowFaq }) => {
  //states
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  //effects
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto py-12 px-4">
      <Button variant={"outline"} onClick={() => setShowFaq(false)}>
        <ArrowLeft />
      </Button>
      <h2 className="text-3xl font-bold text-center mb-2">Frequently Asked Questions</h2>
      <p className="text-center mb-8">Everything you need to know about MetaCashback</p>
      <div className="w-full bg-gradient-to-br from-blue-700 via-indigo-500 to-cyan-300 text-white rounded-xl shadow-lg p-6">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className={`mb-4 border-b rounded-lg overflow-hidden ${
              openItem === index ? "bg-gradient-to-br from-indigo-900 via-purple-700 to-blue-400 shadow-md" : "hover:bg-white/50 transition-colors"
            }`}
          >
            <button
              onClick={() => toggleItem(index)}
              className="flex items-center justify-between w-full text-left p-4 focus:outline-none focus:ring-2 focus:ring-orange-500/20 rounded-lg"
              aria-expanded={openItem === index}
              aria-controls={`faq-answer-${index}`}
            >
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 bg-gray-100 p-2 rounded-full">{item.icon}</div>
                <span className="text-lg font-medium">{item.question}</span>
              </div>
              <ChevronDown
                className={`h-5 w-5 text-orange-500 transition-transform duration-300 ${
                  openItem === index ? "transform rotate-180" : ""
                }`}
              />
            </button>
            <div
              id={`faq-answer-${index}`}
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openItem === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="p-6 mt-2 pt-0">{item.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
