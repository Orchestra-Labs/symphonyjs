//@ts-nocheck
import { BinaryReader, BinaryWriter } from '../../binary';
import { GlobalDecoderRegistry } from '../../registry';
/**
 * @name Params
 * @package symphony.ibchooks
 * @see proto type: symphony.ibchooks.Params
 */
export interface Params {
  allowedAsyncAckContracts: string[];
}
export interface ParamsProtoMsg {
  typeUrl: '/symphony.ibchooks.Params';
  value: Uint8Array;
}
/**
 * @name ParamsAmino
 * @package symphony.ibchooks
 * @see proto type: symphony.ibchooks.Params
 */
export interface ParamsAmino {
  allowed_async_ack_contracts?: string[];
}
export interface ParamsAminoMsg {
  type: '/symphony.ibchooks.Params';
  value: ParamsAmino;
}
/**
 * @name ParamsSDKType
 * @package symphony.ibchooks
 * @see proto type: symphony.ibchooks.Params
 */
export interface ParamsSDKType {
  allowed_async_ack_contracts: string[];
}
function createBaseParams(): Params {
  return {
    allowedAsyncAckContracts: [],
  };
}
/**
 * @name Params
 * @package symphony.ibchooks
 * @see proto type: symphony.ibchooks.Params
 */
export const Params = {
  typeUrl: '/symphony.ibchooks.Params',
  is(o: any): o is Params {
    return (
      o &&
      (o.$typeUrl === Params.typeUrl ||
        (Array.isArray(o.allowedAsyncAckContracts) &&
          (!o.allowedAsyncAckContracts.length ||
            typeof o.allowedAsyncAckContracts[0] === 'string')))
    );
  },
  isSDK(o: any): o is ParamsSDKType {
    return (
      o &&
      (o.$typeUrl === Params.typeUrl ||
        (Array.isArray(o.allowed_async_ack_contracts) &&
          (!o.allowed_async_ack_contracts.length ||
            typeof o.allowed_async_ack_contracts[0] === 'string')))
    );
  },
  isAmino(o: any): o is ParamsAmino {
    return (
      o &&
      (o.$typeUrl === Params.typeUrl ||
        (Array.isArray(o.allowed_async_ack_contracts) &&
          (!o.allowed_async_ack_contracts.length ||
            typeof o.allowed_async_ack_contracts[0] === 'string')))
    );
  },
  encode(
    message: Params,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.allowedAsyncAckContracts) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allowedAsyncAckContracts.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.allowedAsyncAckContracts =
      object.allowedAsyncAckContracts?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    message.allowedAsyncAckContracts =
      object.allowed_async_ack_contracts?.map(e => e) || [];
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    if (message.allowedAsyncAckContracts) {
      obj.allowed_async_ack_contracts = message.allowedAsyncAckContracts.map(
        e => e,
      );
    } else {
      obj.allowed_async_ack_contracts = message.allowedAsyncAckContracts;
    }
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: '/symphony.ibchooks.Params',
      value: Params.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(Params.typeUrl, Params);
