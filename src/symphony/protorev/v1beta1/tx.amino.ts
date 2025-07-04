//@ts-nocheck
import { MsgSetHotRoutes, MsgSetDeveloperAccount, MsgSetMaxPoolPointsPerTx, MsgSetMaxPoolPointsPerBlock, MsgSetInfoByPoolType, MsgSetBaseDenoms } from "./tx";
export const AminoConverter = {
  "/symphony.protorev.v1beta1.MsgSetHotRoutes": {
    aminoType: "symphony/MsgSetHotRoutes",
    toAmino: MsgSetHotRoutes.toAmino,
    fromAmino: MsgSetHotRoutes.fromAmino
  },
  "/symphony.protorev.v1beta1.MsgSetDeveloperAccount": {
    aminoType: "symphony/MsgSetDeveloperAccount",
    toAmino: MsgSetDeveloperAccount.toAmino,
    fromAmino: MsgSetDeveloperAccount.fromAmino
  },
  "/symphony.protorev.v1beta1.MsgSetMaxPoolPointsPerTx": {
    aminoType: "symphony/MsgSetMaxPoolPointsPerTx",
    toAmino: MsgSetMaxPoolPointsPerTx.toAmino,
    fromAmino: MsgSetMaxPoolPointsPerTx.fromAmino
  },
  "/symphony.protorev.v1beta1.MsgSetMaxPoolPointsPerBlock": {
    aminoType: "symphony/MsgSetPoolWeights",
    toAmino: MsgSetMaxPoolPointsPerBlock.toAmino,
    fromAmino: MsgSetMaxPoolPointsPerBlock.fromAmino
  },
  "/symphony.protorev.v1beta1.MsgSetInfoByPoolType": {
    aminoType: "symphony/MsgSetInfoByPoolType",
    toAmino: MsgSetInfoByPoolType.toAmino,
    fromAmino: MsgSetInfoByPoolType.fromAmino
  },
  "/symphony.protorev.v1beta1.MsgSetBaseDenoms": {
    aminoType: "symphony/MsgSetBaseDenoms",
    toAmino: MsgSetBaseDenoms.toAmino,
    fromAmino: MsgSetBaseDenoms.fromAmino
  }
};