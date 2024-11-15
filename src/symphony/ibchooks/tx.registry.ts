//@ts-nocheck
import { GeneratedType, Registry } from '@cosmjs/proto-signing';
import { MsgEmitIBCAck } from './tx';
export const registry: ReadonlyArray<[string, GeneratedType]> = [
  ['/symphony.ibchooks.MsgEmitIBCAck', MsgEmitIBCAck],
];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    emitIBCAck(value: MsgEmitIBCAck) {
      return {
        typeUrl: '/symphony.ibchooks.MsgEmitIBCAck',
        value: MsgEmitIBCAck.encode(value).finish(),
      };
    },
  },
  withTypeUrl: {
    emitIBCAck(value: MsgEmitIBCAck) {
      return {
        typeUrl: '/symphony.ibchooks.MsgEmitIBCAck',
        value,
      };
    },
  },
  fromPartial: {
    emitIBCAck(value: MsgEmitIBCAck) {
      return {
        typeUrl: '/symphony.ibchooks.MsgEmitIBCAck',
        value: MsgEmitIBCAck.fromPartial(value),
      };
    },
  },
};
