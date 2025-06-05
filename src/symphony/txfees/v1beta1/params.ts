//@ts-nocheck
import { BinaryReader, BinaryWriter } from '../../../binary';
import { GlobalDecoderRegistry } from '../../../registry';
/** Params holds parameters for the txfees module */
export interface Params {
  swapFeesEpochIdentifier: string;
}
export interface ParamsProtoMsg {
  typeUrl: '/symphony.txfees.v1beta1.Params';
  value: Uint8Array;
}
/** Params holds parameters for the txfees module */
export interface ParamsAmino {
  swap_fees_epoch_identifier?: string;
}
export interface ParamsAminoMsg {
  type: '/symphony.txfees.v1beta1.Params';
  value: ParamsAmino;
}
/** Params holds parameters for the txfees module */
export interface ParamsSDKType {
  swap_fees_epoch_identifier: string;
}
function createBaseParams(): Params {
  return {
    swapFeesEpochIdentifier: '',
  };
}
export const Params = {
  typeUrl: '/symphony.txfees.v1beta1.Params',
  is(o: any): o is Params {
    return (
      o &&
      (o.$typeUrl === Params.typeUrl ||
        typeof o.swapFeesEpochIdentifier === 'string')
    );
  },
  isSDK(o: any): o is ParamsSDKType {
    return (
      o &&
      (o.$typeUrl === Params.typeUrl ||
        typeof o.swap_fees_epoch_identifier === 'string')
    );
  },
  isAmino(o: any): o is ParamsAmino {
    return (
      o &&
      (o.$typeUrl === Params.typeUrl ||
        typeof o.swap_fees_epoch_identifier === 'string')
    );
  },
  encode(
    message: Params,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.swapFeesEpochIdentifier !== '') {
      writer.uint32(10).string(message.swapFeesEpochIdentifier);
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
          message.swapFeesEpochIdentifier = reader.string();
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
    message.swapFeesEpochIdentifier = object.swapFeesEpochIdentifier ?? '';
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (
      object.swap_fees_epoch_identifier !== undefined &&
      object.swap_fees_epoch_identifier !== null
    ) {
      message.swapFeesEpochIdentifier = object.swap_fees_epoch_identifier;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.swap_fees_epoch_identifier =
      message.swapFeesEpochIdentifier === ''
        ? undefined
        : message.swapFeesEpochIdentifier;
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
      typeUrl: '/symphony.txfees.v1beta1.Params',
      value: Params.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(Params.typeUrl, Params);
