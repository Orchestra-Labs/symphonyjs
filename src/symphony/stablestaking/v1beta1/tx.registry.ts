//@ts-nocheck
import { GeneratedType, Registry } from '@cosmjs/proto-signing';
import { MsgStakeTokens, MsgUnstakeTokens } from './tx';
export const registry: ReadonlyArray<[string, GeneratedType]> = [
  ['/symphony.stablestaking.v1beta1.MsgStakeTokens', MsgStakeTokens],
  ['/symphony.stablestaking.v1beta1.MsgUnstakeTokens', MsgUnstakeTokens],
];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    stakeTokens(value: MsgStakeTokens) {
      return {
        typeUrl: '/symphony.stablestaking.v1beta1.MsgStakeTokens',
        value: MsgStakeTokens.encode(value).finish(),
      };
    },
    unstakeTokens(value: MsgUnstakeTokens) {
      return {
        typeUrl: '/symphony.stablestaking.v1beta1.MsgUnstakeTokens',
        value: MsgUnstakeTokens.encode(value).finish(),
      };
    },
  },
  withTypeUrl: {
    stakeTokens(value: MsgStakeTokens) {
      return {
        typeUrl: '/symphony.stablestaking.v1beta1.MsgStakeTokens',
        value,
      };
    },
    unstakeTokens(value: MsgUnstakeTokens) {
      return {
        typeUrl: '/symphony.stablestaking.v1beta1.MsgUnstakeTokens',
        value,
      };
    },
  },
  fromPartial: {
    stakeTokens(value: MsgStakeTokens) {
      return {
        typeUrl: '/symphony.stablestaking.v1beta1.MsgStakeTokens',
        value: MsgStakeTokens.fromPartial(value),
      };
    },
    unstakeTokens(value: MsgUnstakeTokens) {
      return {
        typeUrl: '/symphony.stablestaking.v1beta1.MsgUnstakeTokens',
        value: MsgUnstakeTokens.fromPartial(value),
      };
    },
  },
};
