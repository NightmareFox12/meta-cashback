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
      "MetaCashback is a rewards system that allows users to receive cashback in USDC for purchases made with the MetaMask Card. Additionally, users can increase their cashback percentage through staking or locking funds in DeFi protocols.",
  },
  {
    icon: <Users className="h-6 w-6 text-orange-500" />,
    question: "How can I participate in the program?",
    answer: (
      <div className="space-y-2">
        <p>To participate, you must meet the following requirements:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Possess a valid MetaMask Card.</li>
          <li>Have an active MetaMask wallet to receive USDC.</li>
          <li>Comply with applicable local regulations in your jurisdiction.</li>
        </ul>
      </div>
    ),
  },
  {
    icon: <Percent className="h-6 w-6 text-orange-500" />,
    question: "How does cashback work?",
    answer: (
      <div className="space-y-2">
        <p>The cashback percentage users receive depends on their level of participation in DeFi:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Explorer: 1% cashback</li>
          <li>Pioneer: 2% cashback + exclusive benefits</li>
          <li>Legendary: 3% cashback + special bonuses</li>
          <li>Elite: 4% cashback + premium advantages</li>
        </ul>
        <p>Accumulated cashback is automatically transferred to the user&apos;s MetaMask wallet.</p>
      </div>
    ),
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-orange-500" />,
    question: "How can I increase my cashback percentage?",
    answer: (
      <div className="space-y-2">
        <p>Users can boost their cashback by locking funds in MetaCashback:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>1 month: +0.5% cashback</li>
          <li>3 months: +1% cashback</li>
          <li>6 months: +1.5% cashback + exclusive benefits</li>
        </ul>
      </div>
    ),
  },
  {
    icon: <Wallet className="h-6 w-6 text-orange-500" />,
    question: "What options do I have to withdraw or use my cashback?",
    answer: (
      <div className="space-y-2">
        <p>Users can choose from the following options:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>USDC Withdrawal: Direct transfer to their MetaMask wallet.</li>
          <li>Token Conversion: Using LI.FI SDK for automatic cross-chain swaps.</li>
          <li>Reinvestment in DeFi: Direct allocation to yield pools.</li>
          <li>Savings Mode: Option to deposit cashback into a DeFi vault to generate passive interest.</li>
        </ul>
      </div>
    ),
  },
  {
    icon: <AlertTriangle className="h-6 w-6 text-orange-500" />,
    question: "Are there any risks in using MetaCashback?",
    answer:
      "MetaCashback is not responsible for losses resulting from DeFi risks or market fluctuations. Users should manage their funds responsibly and comply with applicable tax regulations.",
  },
  {
    icon: <LogOut className="h-6 w-6 text-orange-500" />,
    question: "Can I cancel my participation in the program?",
    answer:
      "Yes, you can withdraw your funds and stop using MetaCashback at any time. However, funds locked for specific periods must fulfill their lock duration before being released.",
  },
  {
    icon: <LifeBuoy className="h-6 w-6 text-orange-500" />,
    question: "How can I contact the support team?",
    answer:
      "For inquiries or assistance, users can reach the MetaCashback support team through official channels available on the platform.",
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
      <div className="w-full bg-primary rounded-xl shadow-lg p-6">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className={`mb-4 border-b rounded-lg overflow-hidden ${
              openItem === index ? "bg-secondary shadow-md" : "hover:bg-white/50 transition-colors"
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
