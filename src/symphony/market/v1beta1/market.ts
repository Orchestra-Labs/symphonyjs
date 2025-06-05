//@ts-nocheck
import { BinaryReader, BinaryWriter } from '../../../binary';
import { bytesFromBase64, base64FromBytes } from '../../../helpers';
import { GlobalDecoderRegistry } from '../../../registry';
/** Params defines the parameters for the market module. */
export interface Params {
  exchangePool: Uint8Array;
  minStabilitySpread: Uint8Array;
}
export interface ParamsProtoMsg {
  typeUrl: '/symphony.market.v1beta1.Params';
  value: Uint8Array;
}
/** Params defines the parameters for the market module. */
export interface ParamsAmino {
  exchange_pool?: string;
  min_stability_spread?: string;
}
export interface ParamsAminoMsg {
  type: '/symphony.market.v1beta1.Params';
  value: ParamsAmino;
}
/** Params defines the parameters for the market module. */
export interface ParamsSDKType {
  exchange_pool: Uint8Array;
  min_stability_spread: Uint8Array;
}
function createBaseParams(): Params {
  return {
    exchangePool: new Uint8Array(),
    minStabilitySpread: new Uint8Array(),
  };
}
export const Params = {
  typeUrl: '/symphony.market.v1beta1.Params',
  is(o: any): o is Params {
    return (
      o &&
      (o.$typeUrl === Params.typeUrl ||
        ((o.exchangePool instanceof Uint8Array ||
          typeof o.exchangePool === 'string') &&
          (o.minStabilitySpread instanceof Uint8Array ||
            typeof o.minStabilitySpread === 'string')))
    );
  },
  isSDK(o: any): o is ParamsSDKType {
    return (
      o &&
      (o.$typeUrl === Params.typeUrl ||
        ((o.exchange_pool instanceof Uint8Array ||
          typeof o.exchange_pool === 'string') &&
          (o.min_stability_spread instanceof Uint8Array ||
            typeof o.min_stability_spread === 'string')))
    );
  },
  isAmino(o: any): o is ParamsAmino {
    return (
      o &&
      (o.$typeUrl === Params.typeUrl ||
        ((o.exchange_pool instanceof Uint8Array ||
          typeof o.exchange_pool === 'string') &&
          (o.min_stability_spread instanceof Uint8Array ||
            typeof o.min_stability_spread === 'string')))
    );
  },
  encode(
    message: Params,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.exchangePool.length !== 0) {
      writer.uint32(10).bytes(message.exchangePool);
    }
    if (message.minStabilitySpread.length !== 0) {
      writer.uint32(18).bytes(message.minStabilitySpread);
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
          message.exchangePool = reader.bytes();
          break;
        case 2:
          message.minStabilitySpread = reader.bytes();
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
    message.exchangePool = object.exchangePool ?? new Uint8Array();
    message.minStabilitySpread = object.minStabilitySpread ?? new Uint8Array();
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.exchange_pool !== undefined && object.exchange_pool !== null) {
      message.exchangePool = bytesFromBase64(object.exchange_pool);
    }
    if (
      object.min_stability_spread !== undefined &&
      object.min_stability_spread !== null
    ) {
      message.minStabilitySpread = bytesFromBase64(object.min_stability_spread);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.exchange_pool = message.exchangePool
      ? base64FromBytes(message.exchangePool)
      : undefined;
    obj.min_stability_spread = message.minStabilitySpread
      ? base64FromBytes(message.minStabilitySpread)
      : undefined;
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
      typeUrl: '/symphony.market.v1beta1.Params',
      value: Params.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(Params.typeUrl, Params);
