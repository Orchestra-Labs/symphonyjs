//@ts-nocheck
import { MsgCreateConcentratedPool } from './tx';
export const AminoConverter = {
  '/symphony.concentratedliquidity.poolmodel.concentrated.v1beta1.MsgCreateConcentratedPool':
    {
      aminoType: 'symphony/create-concentrated-pool',
      toAmino: MsgCreateConcentratedPool.toAmino,
      fromAmino: MsgCreateConcentratedPool.fromAmino,
    },
};
