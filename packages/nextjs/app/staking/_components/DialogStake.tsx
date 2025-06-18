import { useState } from "react";
import { Route } from "@lifi/sdk";
import { LoaderCircle } from "lucide-react";
import { NextPage } from "next";
import { Badge } from "~~/components/shad/ui/badge";
import { Button } from "~~/components/shad/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "~~/components/shad/ui/card";
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "~~/components/shad/ui/dialog";
import { ScrollArea } from "~~/components/shad/ui/scroll-area";

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
    setRoutes(res);
  };

  return (
    <DialogContent className="bg-base-200">
      <DialogHeader>
        <DialogTitle>Are you absolutely sure?</DialogTitle>
        <DialogDescription>
          {chainID !== 10 ? (
            <div>
              <p className="px-5">
                This process will move your <span className="text-blue-500 font-semibold">USDC</span> from the current
                network to
                <span className="text-red-400 font-semibold"> Optimism</span> securely and quickly using LI.FI
                technology.
              </p>
              <div className="w-full flex justify-center my-2">
                {routes && routes?.length > 0 ? (
                  <ScrollArea className="h-[250px] w-full p-2">
                    {routes.map((v, k) => (
                      <Card className="m-2 bg-primary rounded-sm" key={k}>
                        <CardHeader>
                          <CardTitle>
                            {v.fromChainId}
                            {v.toChainId}
                          </CardTitle>
                        </CardHeader>
                        <CardContent></CardContent>

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
            </div>
          ) : (
            <></>
          )}
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  );
};

export default DialogStake;
