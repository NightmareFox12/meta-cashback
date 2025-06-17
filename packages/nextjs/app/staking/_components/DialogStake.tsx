import { useState } from "react";
import { Route } from "@lifi/sdk";
import { LoaderCircle } from "lucide-react";
import { NextPage } from "next";
import { Button } from "~~/components/shad/ui/button";
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "~~/components/shad/ui/dialog";

type DialogStakeProps = {
  chainID: number | undefined;
  loadRoutes: boolean;
  handleBrigeUSDC: () => Promise<Route[] | undefined>;
};
const DialogStake: NextPage<DialogStakeProps> = ({ chainID, loadRoutes, handleBrigeUSDC }) => {
  //states
  const [routes, setRoutes] = useState<Route[]>();

  //functions
  const handleSearchRoutes = async () => {
    const res = await handleBrigeUSDC();

    console.log(res);
  };
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Are you absolutely sure?</DialogTitle>
        <DialogDescription>
          {chainID !== 10 ? (
            <>
              <p className="px-5 text-sm">
                This process will move your <span className="text-blue-500">USDC</span> from the current network to
                <span className="text-red-400"> Optimism</span> securely and quickly using LI.FI technology.
              </p>
              <div className="w-full flex justify-center my-2">
                <Button onClick={handleSearchRoutes} disabled={loadRoutes}>
                  {loadRoutes ? (
                    <>
                      <LoaderCircle className="animate-spin" />
                      Searching...
                    </>
                  ) : (
                    "Search routes"
                  )}
                </Button>
              </div>
            </>
          ) : (
            <></>
          )}
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  );
};

export default DialogStake;
