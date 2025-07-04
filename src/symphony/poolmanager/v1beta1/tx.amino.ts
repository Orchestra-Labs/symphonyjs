//@ts-nocheck
import {
  MsgSwapExactAmountIn,
  MsgSwapExactAmountOut,
  MsgSplitRouteSwapExactAmountIn,
  MsgSplitRouteSwapExactAmountOut,
  MsgSetDenomPairTakerFee,
  MsgSetTakerFeeShareAgreementForDenom,
  MsgSetRegisteredAlloyedPool,
} from './tx';
export const AminoConverter = {
  '/symphony.poolmanager.v1beta1.MsgSwapExactAmountIn': {
    aminoType: 'symphony/poolmanager/swap-exact-amount-in',
    toAmino: MsgSwapExactAmountIn.toAmino,
    fromAmino: MsgSwapExactAmountIn.fromAmino,
  },
  '/symphony.poolmanager.v1beta1.MsgSwapExactAmountOut': {
    aminoType: 'symphony/poolmanager/swap-exact-amount-out',
    toAmino: MsgSwapExactAmountOut.toAmino,
    fromAmino: MsgSwapExactAmountOut.fromAmino,
  },
  '/symphony.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountIn': {
    aminoType: 'symphony/poolmanager/split-amount-in',
    toAmino: MsgSplitRouteSwapExactAmountIn.toAmino,
    fromAmino: MsgSplitRouteSwapExactAmountIn.fromAmino,
  },
  '/symphony.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountOut': {
    aminoType: 'symphony/poolmanager/split-amount-out',
    toAmino: MsgSplitRouteSwapExactAmountOut.toAmino,
    fromAmino: MsgSplitRouteSwapExactAmountOut.fromAmino,
  },
  '/symphony.poolmanager.v1beta1.MsgSetDenomPairTakerFee': {
    aminoType: 'symphony/poolmanager/set-denom-pair-taker-fee',
    toAmino: MsgSetDenomPairTakerFee.toAmino,
    fromAmino: MsgSetDenomPairTakerFee.fromAmino,
  },
  '/symphony.poolmanager.v1beta1.MsgSetTakerFeeShareAgreementForDenom': {
    aminoType: 'symphony/poolmanager/set-taker-fee-share-agreement-for-denom',
    toAmino: MsgSetTakerFeeShareAgreementForDenom.toAmino,
    fromAmino: MsgSetTakerFeeShareAgreementForDenom.fromAmino,
  },
  '/symphony.poolmanager.v1beta1.MsgSetRegisteredAlloyedPool': {
    aminoType: 'symphony/poolmanager/set-registered-alloyed-pool',
    toAmino: MsgSetRegisteredAlloyedPool.toAmino,
    fromAmino: MsgSetRegisteredAlloyedPool.fromAmino,
  },
};
