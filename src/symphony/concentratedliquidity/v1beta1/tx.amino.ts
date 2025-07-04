//@ts-nocheck
import { MsgCreatePosition, MsgWithdrawPosition, MsgAddToPosition, MsgCollectSpreadRewards, MsgCollectIncentives, MsgTransferPositions } from "./tx";
export const AminoConverter = {
  "/symphony.concentratedliquidity.v1beta1.MsgCreatePosition": {
    aminoType: "symphony/cl-create-position",
    toAmino: MsgCreatePosition.toAmino,
    fromAmino: MsgCreatePosition.fromAmino
  },
  "/symphony.concentratedliquidity.v1beta1.MsgWithdrawPosition": {
    aminoType: "symphony/cl-withdraw-position",
    toAmino: MsgWithdrawPosition.toAmino,
    fromAmino: MsgWithdrawPosition.fromAmino
  },
  "/symphony.concentratedliquidity.v1beta1.MsgAddToPosition": {
    aminoType: "symphony/cl-add-to-position",
    toAmino: MsgAddToPosition.toAmino,
    fromAmino: MsgAddToPosition.fromAmino
  },
  "/symphony.concentratedliquidity.v1beta1.MsgCollectSpreadRewards": {
    aminoType: "symphony/cl-col-sp-rewards",
    toAmino: MsgCollectSpreadRewards.toAmino,
    fromAmino: MsgCollectSpreadRewards.fromAmino
  },
  "/symphony.concentratedliquidity.v1beta1.MsgCollectIncentives": {
    aminoType: "symphony/cl-collect-incentives",
    toAmino: MsgCollectIncentives.toAmino,
    fromAmino: MsgCollectIncentives.fromAmino
  },
  "/symphony.concentratedliquidity.v1beta1.MsgTransferPositions": {
    aminoType: "symphony/cl-transfer-positions",
    toAmino: MsgTransferPositions.toAmino,
    fromAmino: MsgTransferPositions.fromAmino
  }
};