"use client";

import { Dispatch, SetStateAction, useEffect } from "react";
import { ArrowLeft, ScrollText } from "lucide-react";
import { NextPage } from "next";
import { Button } from "~~/components/shad/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~~/components/shad/ui/card";

type PrivacySectionProps = {
  setShowPrivacy: Dispatch<SetStateAction<boolean>>;
};

const PrivacySection: NextPage<PrivacySectionProps> = ({ setShowPrivacy }) => {
  //effects
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <Button variant={"outline"} onClick={() => setShowPrivacy(false)}>
        <ArrowLeft />
      </Button>
      <Card className="bg-gradient-to-br from-blue-700 via-indigo-500 to-cyan-300 text-white">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-secondary/40 rounded-full flex items-center justify-center">
            <ScrollText className="w-8 h-8 text-yellow-500" />
          </div>
          <CardTitle className="text-3xl font-bold">MetaCashback Privacy Policy</CardTitle>
        </CardHeader>
      </Card>

      <Card className="bg-gradient-to-br from-blue-700 via-indigo-500 to-cyan-300 text-white">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">1. Data Collection</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm leading-relaxed">
            MetaCashback does not collect user data, as it works directly with the Blockchain to manage refunds and
            improve platform functionality. The processed information is based on on-chain transaction history, wallet
            interactions, and preferences set by users within the system.
          </p>
          <p className="text-sm leading-relaxed">
            By using the service, users acknowledge and consent to the data collection practices outlined here.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-blue-700 via-indigo-500 to-cyan-300 text-white">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">2. Data Usage</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm mb-3">User data is used for:</p>
          <ul className="list-disc list-inside space-y-2 text-sm ml-4">
            {/* <li>Processing cashback rewards.</li> */}
            <li>Enhancing user experience and interface optimization.</li>
            <li>Ensuring compliance with relevant financial regulations.</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-blue-700 via-indigo-500 to-cyan-300 text-white">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">3. Data Sharing and Security</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm">
            MetaCashback does not sell or share personal data with third parties. Secure encryption and privacy measures
            are implemented to ensure data protection.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-blue-700 via-indigo-500 to-cyan-300 text-white">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">4. User Rights and Preferences</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm mb-3">
            Users have control over their data and can modify privacy settings at any time. Requests for data access or
            deletion can be submitted via official support channels.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-blue-700 via-indigo-500 to-cyan-300 text-white">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">5. Policy Updates</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm leading-relaxed">
            MetaCashback reserves the right to update this privacy policy periodically. Users will be informed of any
            significant changes affecting their data handling.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default PrivacySection;
