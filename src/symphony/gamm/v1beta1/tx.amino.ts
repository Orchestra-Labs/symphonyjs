//@ts-nocheck
import {
  MsgJoinPool,
  MsgExitPool,
  MsgSwapExactAmountIn,
  MsgSwapExactAmountOut,
  MsgJoinSwapExternAmountIn,
  MsgJoinSwapShareAmountOut,
  MsgExitSwapExternAmountOut,
  MsgExitSwapShareAmountIn,
} from './tx';
export const AminoConverter = {
  '/symphony.gamm.v1beta1.MsgJoinPool': {
    aminoType: 'symphony/gamm/join-pool',
    toAmino: MsgJoinPool.toAmino,
    fromAmino: MsgJoinPool.fromAmino,
  },
  '/symphony.gamm.v1beta1.MsgExitPool': {
    aminoType: 'symphony/gamm/exit-pool',
    toAmino: MsgExitPool.toAmino,
    fromAmino: MsgExitPool.fromAmino,
  },
  '/symphony.gamm.v1beta1.MsgSwapExactAmountIn': {
    aminoType: 'symphony/gamm/swap-exact-amount-in',
    toAmino: MsgSwapExactAmountIn.toAmino,
    fromAmino: MsgSwapExactAmountIn.fromAmino,
  },
  '/symphony.gamm.v1beta1.MsgSwapExactAmountOut': {
    aminoType: 'symphony/gamm/swap-exact-amount-out',
    toAmino: MsgSwapExactAmountOut.toAmino,
    fromAmino: MsgSwapExactAmountOut.fromAmino,
  },
  '/symphony.gamm.v1beta1.MsgJoinSwapExternAmountIn': {
    aminoType: 'symphony/gamm/join-swap-extern-amount-in',
    toAmino: MsgJoinSwapExternAmountIn.toAmino,
    fromAmino: MsgJoinSwapExternAmountIn.fromAmino,
  },
  '/symphony.gamm.v1beta1.MsgJoinSwapShareAmountOut': {
    aminoType: 'symphony/gamm/join-swap-share-amount-out',
    toAmino: MsgJoinSwapShareAmountOut.toAmino,
    fromAmino: MsgJoinSwapShareAmountOut.fromAmino,
  },
  '/symphony.gamm.v1beta1.MsgExitSwapExternAmountOut': {
    aminoType: 'symphony/gamm/exit-swap-extern-amount-out',
    toAmino: MsgExitSwapExternAmountOut.toAmino,
    fromAmino: MsgExitSwapExternAmountOut.fromAmino,
  },
  '/symphony.gamm.v1beta1.MsgExitSwapShareAmountIn': {
    aminoType: 'symphony/gamm/exit-swap-share-amount-in',
    toAmino: MsgExitSwapShareAmountIn.toAmino,
    fromAmino: MsgExitSwapShareAmountIn.fromAmino,
  },
};
