"use client"

import { Card, CardContent, CardHeader, CardTitle } from "~~/components/shad/ui/card"
import { ScrollText } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <Card className="bg-gradient-to-br from-blue-800 to-blue-400 text-white">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-secondary/40 rounded-full flex items-center justify-center">
            <ScrollText className="w-8 h-8 text-yellow-400" />
          </div>
          <CardTitle className="text-3xl font-bold">MetaCashback Terms and Conditions</CardTitle>
        </CardHeader>
      </Card>

      <Card className="bg-gradient-to-br from-blue-800 to-blue-400 text-white">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">1. General Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm leading-relaxed">
            MetaCashback is a rewards system that allows users to receive USDC cashback for their purchases made with
            the MetaMask Card, with the option to increase the cashback percentage through staking or locking funds in
            DeFi protocols.
          </p>
          <p className="text-sm leading-relaxed">
            By using the service, users accept the terms and conditions outlined here. MetaCashback reserves the right
            to modify these terms at any time without prior notice.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-blue-800 to-blue-400 text-white">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">2. Eligibility</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm mb-3">To participate in the program, users must:</p>
          <ul className="list-disc list-inside space-y-2 text-sm ml-4">
            <li>Hold a valid MetaMask Card.</li>
            <li>Have an active MetaMask wallet for receiving USDC.</li>
            <li>Comply with applicable local regulations in their jurisdiction.</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-blue-800 to-blue-400 text-white">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">3. Cashback and Reward Levels</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm">
            The cashback percentage depends on the user's level of participation in DeFi, as shown in the following
            table:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-primary rounded-lg">
              <thead>
                <tr className="bg-primary/50">
                  <th className="border border-primary p-3 text-center font-semibold">Level</th>
                  <th className="border border-primary p-3 text-center font-semibold">Locked Funds</th>
                  <th className="border border-primary p-3 text-center font-semibold">Base Cashback</th>
                  <th className="border border-primary p-3 text-center font-semibold">Additional Benefits</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-primary p-3 font-medium text-center">Explorer</td>
                  <td className="border border-primary p-3 text-center">$0 - $100</td>
                  <td className="border border-primary p-3 text-green-400 font-semibold text-center">1%</td>
                  <td className="border border-primary p-3 text-center">—</td>
                </tr>
                <tr>
                  <td className="border border-primary p-3 font-medium text-center">Pioneer</td>
                  <td className="border border-primary p-3 text-center">$100 - $500</td>
                  <td className="border border-primary p-3 text-green-400 font-semibold text-center">2%</td>
                  <td className="border border-primary p-3 text-center">Access to exclusive perks</td>
                </tr>
                <tr>
                  <td className="border border-primary p-3 font-medium text-center">Legendary</td>
                  <td className="border border-primary p-3 text-center">$500 - $1000</td>
                  <td className="border border-primary p-3 text-green-400 font-semibold text-center">3%</td>
                  <td className="border border-primary p-3 text-center">Special bonuses</td>
                </tr>
                <tr>
                  <td className="border border-primary p-3 font-medium text-center">Elite</td>
                  <td className="border border-primary p-3 text-center">$1000+</td>
                  <td className="border border-primary p-3 text-green-400 font-semibold text-center">4%</td>
                  <td className="border border-primary p-3 text-center">Premium advantages</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm">Cashback will be automatically transferred to the user's MetaMask wallet.</p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-blue-800 to-blue-400 text-white">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">4. Bonus for Locked Funds</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm mb-3">
            Users who choose to lock their funds for specific periods will receive additional cashback bonuses:
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm ml-4">
            <li>
              <span className="font-semibold">1-month lock:</span> +0.5% cashback
            </li>
            <li>
              <span className="font-semibold">3-month lock:</span> +1% cashback
            </li>
            <li>
              <span className="font-semibold">6-month lock:</span> +1.5% cashback and access to exclusive benefits
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-blue-800 to-blue-400 text-white">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">5. Cashback Withdrawal and Usage Options</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm mb-3">Users can choose from the following options:</p>
          <ul className="list-disc list-inside space-y-2 text-sm ml-4">
            <li>
              <span className="font-semibold">USDC Withdrawal:</span> Direct transfer to their MetaMask wallet.
            </li>
            <li>
              <span className="font-semibold">Token Conversion:</span> Utilizing the LI.FI SDK for automatic cross-chain
              swaps.
            </li>
            <li>
              <span className="font-semibold">Reinvestment in DeFi:</span> Direct application to yield pools.
            </li>
            <li>
              <span className="font-semibold">Savings Mode:</span> Option to allocate cashback to a DeFi vault for
              passive interest generation.
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-blue-800 to-blue-400 text-white">
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

      <Card className="bg-gradient-to-br from-blue-800 to-blue-400 text-white">
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

      <Card className="bg-gradient-to-br from-blue-800 to-blue-400 text-white">
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
  )
}
