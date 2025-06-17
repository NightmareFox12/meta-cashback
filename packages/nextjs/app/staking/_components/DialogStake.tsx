import { NextPage } from "next";
import { Button } from "~~/components/shad/ui/button";
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "~~/components/shad/ui/dialog";

type DialogStakeProps = {
  handleBrigeUSDC: () => Promise<void>;
};
const DialogStake: NextPage<DialogStakeProps> = ({ handleBrigeUSDC }) => {
  
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Are you absolutely sure?</DialogTitle>
        <DialogDescription>
          <Button>Bridge USDC to Optimis</Button>
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  );
};

export default DialogStake;
