//@ts-nocheck
import { MsgCreateBalancerPool } from './tx';
export const AminoConverter = {
  '/symphony.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool': {
    aminoType: 'symphony/gamm/create-balancer-pool',
    toAmino: MsgCreateBalancerPool.toAmino,
    fromAmino: MsgCreateBalancerPool.fromAmino,
  },
};
