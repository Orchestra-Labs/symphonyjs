//@ts-nocheck
import { MsgCreateGauge, MsgAddToGauge, MsgCreateGroup } from './tx';
export const AminoConverter = {
  '/symphony.incentives.MsgCreateGauge': {
    aminoType: 'symphony/incentives/create-gauge',
    toAmino: MsgCreateGauge.toAmino,
    fromAmino: MsgCreateGauge.fromAmino,
  },
  '/symphony.incentives.MsgAddToGauge': {
    aminoType: 'symphony/incentives/add-to-gauge',
    toAmino: MsgAddToGauge.toAmino,
    fromAmino: MsgAddToGauge.fromAmino,
  },
  '/symphony.incentives.MsgCreateGroup': {
    aminoType: 'symphony/incentives/create-group',
    toAmino: MsgCreateGroup.toAmino,
    fromAmino: MsgCreateGroup.fromAmino,
  },
};
