//@ts-nocheck
import { MsgEmitIBCAck } from './tx';
export const AminoConverter = {
  '/symphony.ibchooks.MsgEmitIBCAck': {
    aminoType: 'symphony/MsgEmitIBCAck',
    toAmino: MsgEmitIBCAck.toAmino,
    fromAmino: MsgEmitIBCAck.fromAmino,
  },
};
