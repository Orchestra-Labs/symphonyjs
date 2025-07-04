//@ts-nocheck
import { MsgCreateStableswapPool, MsgStableSwapAdjustScalingFactors } from "./tx";
export const AminoConverter = {
  "/symphony.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPool": {
    aminoType: "symphony/gamm/create-stableswap-pool",
    toAmino: MsgCreateStableswapPool.toAmino,
    fromAmino: MsgCreateStableswapPool.fromAmino
  },
  "/symphony.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactors": {
    aminoType: "symphony/gamm/stableswap-adjust-scaling-factors",
    toAmino: MsgStableSwapAdjustScalingFactors.toAmino,
    fromAmino: MsgStableSwapAdjustScalingFactors.fromAmino
  }
};