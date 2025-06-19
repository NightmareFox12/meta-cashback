import { useEffect, useState } from "react";
import { Route } from "@lifi/sdk";
import { LoaderCircle } from "lucide-react";
import { NextPage } from "next";
import { formatUnits } from "viem";
import { Badge } from "~~/components/shad/ui/badge";
import { Button } from "~~/components/shad/ui/button";
import { Card, CardContent, CardFooter } from "~~/components/shad/ui/card";
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "~~/components/shad/ui/dialog";
import { ScrollArea } from "~~/components/shad/ui/scroll-area";
import { executeSelectRoute } from "~~/lib/lifi";

type DialogStakeProps = {
  chainID: number | undefined;
  loadRoutes: boolean;
  stakeAmount: string;
  handleBrigeUSDC: () => Promise<Route[] | undefined>;
};

const DialogStake: NextPage<DialogStakeProps> = ({ chainID, loadRoutes, stakeAmount, handleBrigeUSDC }) => {
  //states
  const [routes, setRoutes] = useState<Route[]>();

  //functions
  const handleSearchRoutes = async () => {
    const res = await handleBrigeUSDC();
    setRoutes(res);
  };

  const handleExecuteRoute = async (route: Route) => {
    try {
      const res = await executeSelectRoute(route);
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  };

  //effects
  useEffect(() => {
    setRoutes([]);
  }, [stakeAmount]);

  return (
    <DialogContent className="bg-base-200">
      <DialogHeader>
        <DialogTitle>Are you absolutely sure?</DialogTitle>
        <DialogDescription></DialogDescription>
        {chainID !== 10 ? (
          <>
            <p className="px-5">
              This process will move your <span className="text-blue-500 font-semibold">USDC</span> from the current
              network to
              <span className="text-red-400 font-semibold"> Optimism</span> securely and quickly using LI.FI technology.
            </p>
            <div className="w-full flex justify-center my-2">
              {routes && routes?.length > 0 ? (
                <ScrollArea className="h-[250px] w-full p-2">
                  {routes.map((v, k) => (
                    <Card
                      key={k}
                      className="m-2 bg-primary rounded-sm cursor-pointer hover:bg-primary/60 transition ease-in-out hover:scale-[1.02]"
                      onClick={() => handleExecuteRoute(v)}
                    >
                      <CardContent className="text-sm">Total: {formatUnits(BigInt(v.toAmount), 6)} USDC</CardContent>

                      <CardFooter className="flex justify-between items-center">
                        <p className="text-[12px]">
                          Gast Cost: <span className=" font-semibold">{v.gasCostUSD}</span>
                        </p>

                        {v.tags && v.tags.length > 0 && (
                          <div className="flex gap-1">
                            {v.tags.map((tag, key) => (
                              <Badge key={key} variant="secondary" className="text-[10px]">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </CardFooter>
                    </Card>
                  ))}
                </ScrollArea>
              ) : (
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
              )}
            </div>
          </>
        ) : (
          <></>
        )}
      </DialogHeader>
    </DialogContent>
  );
};

export default DialogStake;
