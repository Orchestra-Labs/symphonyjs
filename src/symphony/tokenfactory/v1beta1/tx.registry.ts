//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateDenom, MsgMint, MsgBurn, MsgChangeAdmin, MsgSetDenomMetadata, MsgSetBeforeSendHook, MsgForceTransfer } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/symphony.tokenfactory.v1beta1.MsgCreateDenom", MsgCreateDenom], ["/symphony.tokenfactory.v1beta1.MsgMint", MsgMint], ["/symphony.tokenfactory.v1beta1.MsgBurn", MsgBurn], ["/symphony.tokenfactory.v1beta1.MsgChangeAdmin", MsgChangeAdmin], ["/symphony.tokenfactory.v1beta1.MsgSetDenomMetadata", MsgSetDenomMetadata], ["/symphony.tokenfactory.v1beta1.MsgSetBeforeSendHook", MsgSetBeforeSendHook], ["/symphony.tokenfactory.v1beta1.MsgForceTransfer", MsgForceTransfer]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createDenom(value: MsgCreateDenom) {
      return {
        typeUrl: "/symphony.tokenfactory.v1beta1.MsgCreateDenom",
        value: MsgCreateDenom.encode(value).finish()
      };
    },
    mint(value: MsgMint) {
      return {
        typeUrl: "/symphony.tokenfactory.v1beta1.MsgMint",
        value: MsgMint.encode(value).finish()
      };
    },
    burn(value: MsgBurn) {
      return {
        typeUrl: "/symphony.tokenfactory.v1beta1.MsgBurn",
        value: MsgBurn.encode(value).finish()
      };
    },
    changeAdmin(value: MsgChangeAdmin) {
      return {
        typeUrl: "/symphony.tokenfactory.v1beta1.MsgChangeAdmin",
        value: MsgChangeAdmin.encode(value).finish()
      };
    },
    setDenomMetadata(value: MsgSetDenomMetadata) {
      return {
        typeUrl: "/symphony.tokenfactory.v1beta1.MsgSetDenomMetadata",
        value: MsgSetDenomMetadata.encode(value).finish()
      };
    },
    setBeforeSendHook(value: MsgSetBeforeSendHook) {
      return {
        typeUrl: "/symphony.tokenfactory.v1beta1.MsgSetBeforeSendHook",
        value: MsgSetBeforeSendHook.encode(value).finish()
      };
    },
    forceTransfer(value: MsgForceTransfer) {
      return {
        typeUrl: "/symphony.tokenfactory.v1beta1.MsgForceTransfer",
        value: MsgForceTransfer.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createDenom(value: MsgCreateDenom) {
      return {
        typeUrl: "/symphony.tokenfactory.v1beta1.MsgCreateDenom",
        value
      };
    },
    mint(value: MsgMint) {
      return {
        typeUrl: "/symphony.tokenfactory.v1beta1.MsgMint",
        value
      };
    },
    burn(value: MsgBurn) {
      return {
        typeUrl: "/symphony.tokenfactory.v1beta1.MsgBurn",
        value
      };
    },
    changeAdmin(value: MsgChangeAdmin) {
      return {
        typeUrl: "/symphony.tokenfactory.v1beta1.MsgChangeAdmin",
        value
      };
    },
    setDenomMetadata(value: MsgSetDenomMetadata) {
      return {
        typeUrl: "/symphony.tokenfactory.v1beta1.MsgSetDenomMetadata",
        value
      };
    },
    setBeforeSendHook(value: MsgSetBeforeSendHook) {
      return {
        typeUrl: "/symphony.tokenfactory.v1beta1.MsgSetBeforeSendHook",
        value
      };
    },
    forceTransfer(value: MsgForceTransfer) {
      return {
        typeUrl: "/symphony.tokenfactory.v1beta1.MsgForceTransfer",
        value
      };
    }
  },
  fromPartial: {
    createDenom(value: MsgCreateDenom) {
      return {
        typeUrl: "/symphony.tokenfactory.v1beta1.MsgCreateDenom",
        value: MsgCreateDenom.fromPartial(value)
      };
    },
    mint(value: MsgMint) {
      return {
        typeUrl: "/symphony.tokenfactory.v1beta1.MsgMint",
        value: MsgMint.fromPartial(value)
      };
    },
    burn(value: MsgBurn) {
      return {
        typeUrl: "/symphony.tokenfactory.v1beta1.MsgBurn",
        value: MsgBurn.fromPartial(value)
      };
    },
    changeAdmin(value: MsgChangeAdmin) {
      return {
        typeUrl: "/symphony.tokenfactory.v1beta1.MsgChangeAdmin",
        value: MsgChangeAdmin.fromPartial(value)
      };
    },
    setDenomMetadata(value: MsgSetDenomMetadata) {
      return {
        typeUrl: "/symphony.tokenfactory.v1beta1.MsgSetDenomMetadata",
        value: MsgSetDenomMetadata.fromPartial(value)
      };
    },
    setBeforeSendHook(value: MsgSetBeforeSendHook) {
      return {
        typeUrl: "/symphony.tokenfactory.v1beta1.MsgSetBeforeSendHook",
        value: MsgSetBeforeSendHook.fromPartial(value)
      };
    },
    forceTransfer(value: MsgForceTransfer) {
      return {
        typeUrl: "/symphony.tokenfactory.v1beta1.MsgForceTransfer",
        value: MsgForceTransfer.fromPartial(value)
      };
    }
  }
};