//@ts-nocheck
import { GeneratedType, Registry } from '@cosmjs/proto-signing';
import {
  MsgLockTokens,
  MsgBeginUnlockingAll,
  MsgBeginUnlocking,
  MsgExtendLockup,
  MsgForceUnlock,
  MsgSetRewardReceiverAddress,
} from './tx';
export const registry: ReadonlyArray<[string, GeneratedType]> = [
  ['/symphony.lockup.MsgLockTokens', MsgLockTokens],
  ['/symphony.lockup.MsgBeginUnlockingAll', MsgBeginUnlockingAll],
  ['/symphony.lockup.MsgBeginUnlocking', MsgBeginUnlocking],
  ['/symphony.lockup.MsgExtendLockup', MsgExtendLockup],
  ['/symphony.lockup.MsgForceUnlock', MsgForceUnlock],
  ['/symphony.lockup.MsgSetRewardReceiverAddress', MsgSetRewardReceiverAddress],
];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    lockTokens(value: MsgLockTokens) {
      return {
        typeUrl: '/symphony.lockup.MsgLockTokens',
        value: MsgLockTokens.encode(value).finish(),
      };
    },
    beginUnlockingAll(value: MsgBeginUnlockingAll) {
      return {
        typeUrl: '/symphony.lockup.MsgBeginUnlockingAll',
        value: MsgBeginUnlockingAll.encode(value).finish(),
      };
    },
    beginUnlocking(value: MsgBeginUnlocking) {
      return {
        typeUrl: '/symphony.lockup.MsgBeginUnlocking',
        value: MsgBeginUnlocking.encode(value).finish(),
      };
    },
    extendLockup(value: MsgExtendLockup) {
      return {
        typeUrl: '/symphony.lockup.MsgExtendLockup',
        value: MsgExtendLockup.encode(value).finish(),
      };
    },
    forceUnlock(value: MsgForceUnlock) {
      return {
        typeUrl: '/symphony.lockup.MsgForceUnlock',
        value: MsgForceUnlock.encode(value).finish(),
      };
    },
    setRewardReceiverAddress(value: MsgSetRewardReceiverAddress) {
      return {
        typeUrl: '/symphony.lockup.MsgSetRewardReceiverAddress',
        value: MsgSetRewardReceiverAddress.encode(value).finish(),
      };
    },
  },
  withTypeUrl: {
    lockTokens(value: MsgLockTokens) {
      return {
        typeUrl: '/symphony.lockup.MsgLockTokens',
        value,
      };
    },
    beginUnlockingAll(value: MsgBeginUnlockingAll) {
      return {
        typeUrl: '/symphony.lockup.MsgBeginUnlockingAll',
        value,
      };
    },
    beginUnlocking(value: MsgBeginUnlocking) {
      return {
        typeUrl: '/symphony.lockup.MsgBeginUnlocking',
        value,
      };
    },
    extendLockup(value: MsgExtendLockup) {
      return {
        typeUrl: '/symphony.lockup.MsgExtendLockup',
        value,
      };
    },
    forceUnlock(value: MsgForceUnlock) {
      return {
        typeUrl: '/symphony.lockup.MsgForceUnlock',
        value,
      };
    },
    setRewardReceiverAddress(value: MsgSetRewardReceiverAddress) {
      return {
        typeUrl: '/symphony.lockup.MsgSetRewardReceiverAddress',
        value,
      };
    },
  },
  fromPartial: {
    lockTokens(value: MsgLockTokens) {
      return {
        typeUrl: '/symphony.lockup.MsgLockTokens',
        value: MsgLockTokens.fromPartial(value),
      };
    },
    beginUnlockingAll(value: MsgBeginUnlockingAll) {
      return {
        typeUrl: '/symphony.lockup.MsgBeginUnlockingAll',
        value: MsgBeginUnlockingAll.fromPartial(value),
      };
    },
    beginUnlocking(value: MsgBeginUnlocking) {
      return {
        typeUrl: '/symphony.lockup.MsgBeginUnlocking',
        value: MsgBeginUnlocking.fromPartial(value),
      };
    },
    extendLockup(value: MsgExtendLockup) {
      return {
        typeUrl: '/symphony.lockup.MsgExtendLockup',
        value: MsgExtendLockup.fromPartial(value),
      };
    },
    forceUnlock(value: MsgForceUnlock) {
      return {
        typeUrl: '/symphony.lockup.MsgForceUnlock',
        value: MsgForceUnlock.fromPartial(value),
      };
    },
    setRewardReceiverAddress(value: MsgSetRewardReceiverAddress) {
      return {
        typeUrl: '/symphony.lockup.MsgSetRewardReceiverAddress',
        value: MsgSetRewardReceiverAddress.fromPartial(value),
      };
    },
  },
};
