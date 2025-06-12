"use client";

import { ScrollText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "~~/components/shad/ui/card";

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <Card className="bg-primary">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
            <ScrollText className="w-8 h-8" />
          </div>
          <CardTitle className="text-3xl font-bold">MetaCashback Privacy Policy</CardTitle>
        </CardHeader>
      </Card>

      <Card className="bg-secondary">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">1. Data Collection</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm leading-relaxed">
            MetaCashback collects only the necessary user data to facilitate cashback processing and improve platform
            functionality. This data includes transaction history, wallet interactions, and preferences set by users.
          </p>
          <p className="text-sm leading-relaxed">
            By using the service, users acknowledge and consent to the data collection practices outlined here.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-secondary">
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

      <Card className="bg-secondary">
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

      <Card className="bg-secondary">
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

      <Card className="bg-secondary">
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
}
