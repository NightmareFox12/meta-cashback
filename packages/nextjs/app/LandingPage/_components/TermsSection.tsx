"use client";

import { Dispatch, SetStateAction, useEffect } from "react";
import { ArrowLeft, ScrollText, Sparkles } from "lucide-react";
import { NextPage } from "next";
import { Button } from "~~/components/shad/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~~/components/shad/ui/card";

type TermsSectionProps = {
  setShowConditions: Dispatch<SetStateAction<boolean>>;
};

const TermsSection: NextPage<TermsSectionProps> = ({ setShowConditions }) => {
  //effects
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <Button variant={"outline"} onClick={() => setShowConditions(false)}>
        <ArrowLeft />
      </Button>
      <Card className="bg-gradient-to-br from-blue-700 via-indigo-500 to-cyan-300 text-white">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-secondary/40 rounded-full flex items-center justify-center">
            <ScrollText className="w-8 h-8 text-yellow-400" />
          </div>
          <CardTitle className="text-3xl font-bold">MetaCashback Terms and Conditions</CardTitle>
        </CardHeader>
      </Card>

      <Card className="bg-gradient-to-br from-blue-700 via-indigo-500 to-cyan-300 text-white">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">1. General Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm leading-relaxed">
            MetaCashback is a decentralized rewards system that allows users to earn USDC cashback by interacting with DeFi protocols using their MetaMask wallet.
          </p>
          <p className="text-sm leading-relaxed">
            By using the platform, users agree to the terms outlined here. MetaCashback reserves the right to update these terms at any time without prior notice.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-blue-700 via-indigo-500 to-cyan-300 text-white">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">2. Eligibility</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm mb-3">To participate in the program, users must:</p>
          <ul className="list-disc list-inside space-y-2 text-sm ml-4">
            <li>Have an active MetaMask wallet</li>
            <li>Hold USDC tokens to interact with DeFi protocols</li>
            <li>Comply with applicable local laws and tax regulations</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-blue-700 via-indigo-500 to-cyan-300 text-white">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">3. Cashback and Reward Levels</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm">
            The cashback percentage depends on the user&apos;s level of participation in DeFi, as shown in the following
            table:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-primary rounded-lg">
              <thead>
                <tr className="bg-primary/50">
                  <th className="border border-primary p-3 text-center font-semibold">Level</th>
                  <th className="border border-primary p-3 text-center font-semibold">Locked Funds</th>
                  <th className="border border-primary p-3 text-center font-semibold">Base Cashback</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-primary p-3 font-medium text-center">Explorer</td>
                  <td className="border border-primary p-3 text-center">$0 - $100</td>
                  <td className="border border-primary p-3 font-semibold text-center">1%</td>
                </tr>
                <tr>
                  <td className="border border-primary p-3 font-medium text-center">Pioneer</td>
                  <td className="border border-primary p-3 text-center">$100 - $500</td>
                  <td className="border border-primary p-3 font-semibold text-center">2%</td>
                </tr>
                <tr>
                  <td className="border border-primary p-3 font-medium text-center">Legendary</td>
                  <td className="border border-primary p-3 text-center">$500 - $1000</td>
                  <td className="border border-primary p-3 font-semibold text-center">3%</td>
                </tr>
                <tr>
                  <td className="border border-primary p-3 font-medium text-center">Elite</td>
                  <td className="border border-primary p-3 text-center">$1000+</td>
                  <td className="border border-primary p-3 font-semibold text-center">4%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm">Cashback will be automatically transferred to the user&apos;s MetaMask wallet.</p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-blue-700 via-indigo-500 to-cyan-300 text-white">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">4. Cashback Withdrawal and Usage Options</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm mb-3">Users can choose from the following options:</p>
          <ul className="list-disc list-inside space-y-2 text-sm ml-4">
            <li><span className="font-semibold">USDC Withdrawal:</span> Direct transfer to your MetaMask wallet</li>
            <li><span className="font-semibold">Auto-Reinvest:</span> Allocate cashback to DeFi vaults for passive yield</li>
          </ul>
          <p className="text-sm mt-3">
            🔜 Token conversion via LI.FI SDK and cross-chain swaps will be available in future updates.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-blue-700 via-indigo-500 to-cyan-300 text-white">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">6. User Responsibilities</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm leading-relaxed">
            Users are responsible for managing their funds, complying with tax regulations, and ensuring the proper use
            of the platform. MetaCashback is not liable for losses due to DeFi risks or market fluctuations.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-blue-700 via-indigo-500 to-cyan-300 text-white">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">7. Program Modifications and Termination</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm leading-relaxed">
            MetaCashback may modify the program conditions, suspend, or terminate it without prior notice. Users are
            encouraged to periodically review the terms and conditions.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-blue-700 via-indigo-500 to-cyan-300 text-white">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">8. Contact and Support</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm leading-relaxed">
            For inquiries or assistance, users can reach the MetaCashback support team through official channels.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default TermsSection;
