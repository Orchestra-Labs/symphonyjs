//@ts-nocheck
import {
  MsgLockTokens,
  MsgBeginUnlockingAll,
  MsgBeginUnlocking,
  MsgExtendLockup,
  MsgForceUnlock,
  MsgSetRewardReceiverAddress,
} from './tx';
export const AminoConverter = {
  '/symphony.lockup.MsgLockTokens': {
    aminoType: 'symphony/lockup/lock-tokens',
    toAmino: MsgLockTokens.toAmino,
    fromAmino: MsgLockTokens.fromAmino,
  },
  '/symphony.lockup.MsgBeginUnlockingAll': {
    aminoType: 'symphony/lockup/begin-unlock-tokens',
    toAmino: MsgBeginUnlockingAll.toAmino,
    fromAmino: MsgBeginUnlockingAll.fromAmino,
  },
  '/symphony.lockup.MsgBeginUnlocking': {
    aminoType: 'symphony/lockup/begin-unlock-period-lock',
    toAmino: MsgBeginUnlocking.toAmino,
    fromAmino: MsgBeginUnlocking.fromAmino,
  },
  '/symphony.lockup.MsgExtendLockup': {
    aminoType: 'symphony/lockup/extend-lockup',
    toAmino: MsgExtendLockup.toAmino,
    fromAmino: MsgExtendLockup.fromAmino,
  },
  '/symphony.lockup.MsgForceUnlock': {
    aminoType: 'symphony/lockup/force-unlock-tokens',
    toAmino: MsgForceUnlock.toAmino,
    fromAmino: MsgForceUnlock.fromAmino,
  },
  '/symphony.lockup.MsgSetRewardReceiverAddress': {
    aminoType: 'symphony/lockup/set-reward-receiver-address',
    toAmino: MsgSetRewardReceiverAddress.toAmino,
    fromAmino: MsgSetRewardReceiverAddress.fromAmino,
  },
};
