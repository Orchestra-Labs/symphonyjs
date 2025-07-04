//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgSwapExactAmountIn, MsgSwapExactAmountOut, MsgSplitRouteSwapExactAmountIn, MsgSplitRouteSwapExactAmountOut, MsgSetDenomPairTakerFee, MsgSetTakerFeeShareAgreementForDenom, MsgSetRegisteredAlloyedPool } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/symphony.poolmanager.v1beta1.MsgSwapExactAmountIn", MsgSwapExactAmountIn], ["/symphony.poolmanager.v1beta1.MsgSwapExactAmountOut", MsgSwapExactAmountOut], ["/symphony.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountIn", MsgSplitRouteSwapExactAmountIn], ["/symphony.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountOut", MsgSplitRouteSwapExactAmountOut], ["/symphony.poolmanager.v1beta1.MsgSetDenomPairTakerFee", MsgSetDenomPairTakerFee], ["/symphony.poolmanager.v1beta1.MsgSetTakerFeeShareAgreementForDenom", MsgSetTakerFeeShareAgreementForDenom], ["/symphony.poolmanager.v1beta1.MsgSetRegisteredAlloyedPool", MsgSetRegisteredAlloyedPool]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    swapExactAmountIn(value: MsgSwapExactAmountIn) {
      return {
        typeUrl: "/symphony.poolmanager.v1beta1.MsgSwapExactAmountIn",
        value: MsgSwapExactAmountIn.encode(value).finish()
      };
    },
    swapExactAmountOut(value: MsgSwapExactAmountOut) {
      return {
        typeUrl: "/symphony.poolmanager.v1beta1.MsgSwapExactAmountOut",
        value: MsgSwapExactAmountOut.encode(value).finish()
      };
    },
    splitRouteSwapExactAmountIn(value: MsgSplitRouteSwapExactAmountIn) {
      return {
        typeUrl: "/symphony.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountIn",
        value: MsgSplitRouteSwapExactAmountIn.encode(value).finish()
      };
    },
    splitRouteSwapExactAmountOut(value: MsgSplitRouteSwapExactAmountOut) {
      return {
        typeUrl: "/symphony.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountOut",
        value: MsgSplitRouteSwapExactAmountOut.encode(value).finish()
      };
    },
    setDenomPairTakerFee(value: MsgSetDenomPairTakerFee) {
      return {
        typeUrl: "/symphony.poolmanager.v1beta1.MsgSetDenomPairTakerFee",
        value: MsgSetDenomPairTakerFee.encode(value).finish()
      };
    },
    setTakerFeeShareAgreementForDenom(value: MsgSetTakerFeeShareAgreementForDenom) {
      return {
        typeUrl: "/symphony.poolmanager.v1beta1.MsgSetTakerFeeShareAgreementForDenom",
        value: MsgSetTakerFeeShareAgreementForDenom.encode(value).finish()
      };
    },
    setRegisteredAlloyedPool(value: MsgSetRegisteredAlloyedPool) {
      return {
        typeUrl: "/symphony.poolmanager.v1beta1.MsgSetRegisteredAlloyedPool",
        value: MsgSetRegisteredAlloyedPool.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    swapExactAmountIn(value: MsgSwapExactAmountIn) {
      return {
        typeUrl: "/symphony.poolmanager.v1beta1.MsgSwapExactAmountIn",
        value
      };
    },
    swapExactAmountOut(value: MsgSwapExactAmountOut) {
      return {
        typeUrl: "/symphony.poolmanager.v1beta1.MsgSwapExactAmountOut",
        value
      };
    },
    splitRouteSwapExactAmountIn(value: MsgSplitRouteSwapExactAmountIn) {
      return {
        typeUrl: "/symphony.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountIn",
        value
      };
    },
    splitRouteSwapExactAmountOut(value: MsgSplitRouteSwapExactAmountOut) {
      return {
        typeUrl: "/symphony.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountOut",
        value
      };
    },
    setDenomPairTakerFee(value: MsgSetDenomPairTakerFee) {
      return {
        typeUrl: "/symphony.poolmanager.v1beta1.MsgSetDenomPairTakerFee",
        value
      };
    },
    setTakerFeeShareAgreementForDenom(value: MsgSetTakerFeeShareAgreementForDenom) {
      return {
        typeUrl: "/symphony.poolmanager.v1beta1.MsgSetTakerFeeShareAgreementForDenom",
        value
      };
    },
    setRegisteredAlloyedPool(value: MsgSetRegisteredAlloyedPool) {
      return {
        typeUrl: "/symphony.poolmanager.v1beta1.MsgSetRegisteredAlloyedPool",
        value
      };
    }
  },
  fromPartial: {
    swapExactAmountIn(value: MsgSwapExactAmountIn) {
      return {
        typeUrl: "/symphony.poolmanager.v1beta1.MsgSwapExactAmountIn",
        value: MsgSwapExactAmountIn.fromPartial(value)
      };
    },
    swapExactAmountOut(value: MsgSwapExactAmountOut) {
      return {
        typeUrl: "/symphony.poolmanager.v1beta1.MsgSwapExactAmountOut",
        value: MsgSwapExactAmountOut.fromPartial(value)
      };
    },
    splitRouteSwapExactAmountIn(value: MsgSplitRouteSwapExactAmountIn) {
      return {
        typeUrl: "/symphony.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountIn",
        value: MsgSplitRouteSwapExactAmountIn.fromPartial(value)
      };
    },
    splitRouteSwapExactAmountOut(value: MsgSplitRouteSwapExactAmountOut) {
      return {
        typeUrl: "/symphony.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountOut",
        value: MsgSplitRouteSwapExactAmountOut.fromPartial(value)
      };
    },
    setDenomPairTakerFee(value: MsgSetDenomPairTakerFee) {
      return {
        typeUrl: "/symphony.poolmanager.v1beta1.MsgSetDenomPairTakerFee",
        value: MsgSetDenomPairTakerFee.fromPartial(value)
      };
    },
    setTakerFeeShareAgreementForDenom(value: MsgSetTakerFeeShareAgreementForDenom) {
      return {
        typeUrl: "/symphony.poolmanager.v1beta1.MsgSetTakerFeeShareAgreementForDenom",
        value: MsgSetTakerFeeShareAgreementForDenom.fromPartial(value)
      };
    },
    setRegisteredAlloyedPool(value: MsgSetRegisteredAlloyedPool) {
      return {
        typeUrl: "/symphony.poolmanager.v1beta1.MsgSetRegisteredAlloyedPool",
        value: MsgSetRegisteredAlloyedPool.fromPartial(value)
      };
    }
  }
};