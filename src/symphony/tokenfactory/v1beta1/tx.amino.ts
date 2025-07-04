//@ts-nocheck
import { MsgCreateDenom, MsgMint, MsgBurn, MsgChangeAdmin, MsgSetDenomMetadata, MsgSetBeforeSendHook, MsgForceTransfer } from "./tx";
export const AminoConverter = {
  "/symphony.tokenfactory.v1beta1.MsgCreateDenom": {
    aminoType: "symphony/tokenfactory/create-denom",
    toAmino: MsgCreateDenom.toAmino,
    fromAmino: MsgCreateDenom.fromAmino
  },
  "/symphony.tokenfactory.v1beta1.MsgMint": {
    aminoType: "symphony/tokenfactory/mint",
    toAmino: MsgMint.toAmino,
    fromAmino: MsgMint.fromAmino
  },
  "/symphony.tokenfactory.v1beta1.MsgBurn": {
    aminoType: "symphony/tokenfactory/burn",
    toAmino: MsgBurn.toAmino,
    fromAmino: MsgBurn.fromAmino
  },
  "/symphony.tokenfactory.v1beta1.MsgChangeAdmin": {
    aminoType: "symphony/tokenfactory/change-admin",
    toAmino: MsgChangeAdmin.toAmino,
    fromAmino: MsgChangeAdmin.fromAmino
  },
  "/symphony.tokenfactory.v1beta1.MsgSetDenomMetadata": {
    aminoType: "symphony/tokenfactory/set-denom-metadata",
    toAmino: MsgSetDenomMetadata.toAmino,
    fromAmino: MsgSetDenomMetadata.fromAmino
  },
  "/symphony.tokenfactory.v1beta1.MsgSetBeforeSendHook": {
    aminoType: "symphony/tokenfactory/set-bef-send-hook",
    toAmino: MsgSetBeforeSendHook.toAmino,
    fromAmino: MsgSetBeforeSendHook.fromAmino
  },
  "/symphony.tokenfactory.v1beta1.MsgForceTransfer": {
    aminoType: "symphony/tokenfactory/force-transfer",
    toAmino: MsgForceTransfer.toAmino,
    fromAmino: MsgForceTransfer.fromAmino
  }
};