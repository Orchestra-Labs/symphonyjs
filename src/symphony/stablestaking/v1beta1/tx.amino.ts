//@ts-nocheck
import { MsgStakeTokens, MsgUnstakeTokens } from "./tx";
export const AminoConverter = {
  "/symphony.stablestaking.v1beta1.MsgStakeTokens": {
    aminoType: "/symphony.stablestaking.v1beta1.MsgStakeTokens",
    toAmino: MsgStakeTokens.toAmino,
    fromAmino: MsgStakeTokens.fromAmino
  },
  "/symphony.stablestaking.v1beta1.MsgUnstakeTokens": {
    aminoType: "/symphony.stablestaking.v1beta1.MsgUnstakeTokens",
    toAmino: MsgUnstakeTokens.toAmino,
    fromAmino: MsgUnstakeTokens.fromAmino
  }
};