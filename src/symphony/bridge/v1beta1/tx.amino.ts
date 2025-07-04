//@ts-nocheck
import { MsgInboundTransfer, MsgOutboundTransfer, MsgUpdateParams, MsgChangeAssetStatus } from "./tx";
export const AminoConverter = {
  "/symphony.bridge.v1beta1.MsgInboundTransfer": {
    aminoType: "symphony/bridge/inbound-transfer",
    toAmino: MsgInboundTransfer.toAmino,
    fromAmino: MsgInboundTransfer.fromAmino
  },
  "/symphony.bridge.v1beta1.MsgOutboundTransfer": {
    aminoType: "symphony/bridge/outbound-transfer",
    toAmino: MsgOutboundTransfer.toAmino,
    fromAmino: MsgOutboundTransfer.fromAmino
  },
  "/symphony.bridge.v1beta1.MsgUpdateParams": {
    aminoType: "symphony/bridge/update-params",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/symphony.bridge.v1beta1.MsgChangeAssetStatus": {
    aminoType: "symphony/bridge/change-asset-status",
    toAmino: MsgChangeAssetStatus.toAmino,
    fromAmino: MsgChangeAssetStatus.fromAmino
  }
};