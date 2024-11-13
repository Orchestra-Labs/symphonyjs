//@ts-nocheck
import { MsgSetFeeTokens } from './tx';
export const AminoConverter = {
  '/symphony.txfees.v1beta1.MsgSetFeeTokens': {
    aminoType: 'symphony/set-fee-tokens',
    toAmino: MsgSetFeeTokens.toAmino,
    fromAmino: MsgSetFeeTokens.fromAmino,
  },
};
