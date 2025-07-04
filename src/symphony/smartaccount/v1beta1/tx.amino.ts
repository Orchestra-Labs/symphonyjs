//@ts-nocheck
import { MsgAddAuthenticator, MsgRemoveAuthenticator, MsgSetActiveState } from "./tx";
export const AminoConverter = {
  "/symphony.smartaccount.v1beta1.MsgAddAuthenticator": {
    aminoType: "symphony/smartaccount/add-authenticator",
    toAmino: MsgAddAuthenticator.toAmino,
    fromAmino: MsgAddAuthenticator.fromAmino
  },
  "/symphony.smartaccount.v1beta1.MsgRemoveAuthenticator": {
    aminoType: "symphony/smartaccount/remove-authenticator",
    toAmino: MsgRemoveAuthenticator.toAmino,
    fromAmino: MsgRemoveAuthenticator.fromAmino
  },
  "/symphony.smartaccount.v1beta1.MsgSetActiveState": {
    aminoType: "symphony/smartaccount/set-active-state",
    toAmino: MsgSetActiveState.toAmino,
    fromAmino: MsgSetActiveState.fromAmino
  }
};