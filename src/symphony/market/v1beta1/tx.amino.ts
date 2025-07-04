//@ts-nocheck
import { MsgSwap, MsgSwapSend } from "./tx";
export const AminoConverter = {
  "/symphony.market.v1beta1.MsgSwap": {
    aminoType: "/symphony.market.v1beta1.MsgSwap",
    toAmino: MsgSwap.toAmino,
    fromAmino: MsgSwap.fromAmino
  },
  "/symphony.market.v1beta1.MsgSwapSend": {
    aminoType: "/symphony.market.v1beta1.MsgSwapSend",
    toAmino: MsgSwapSend.toAmino,
    fromAmino: MsgSwapSend.fromAmino
  }
};