//@ts-nocheck
import { Timestamp } from '../../../google/protobuf/timestamp';
import { Params, ParamsAmino, ParamsSDKType } from './genesis';
import { BinaryReader, BinaryWriter } from '../../../binary';
import { toTimestamp, fromTimestamp } from '../../../helpers';
import { GlobalDecoderRegistry } from '../../../registry';
import { Decimal } from '@cosmjs/math';
export interface ArithmeticTwapRequest {
  poolId: bigint;
  baseAsset: string;
  quoteAsset: string;
  startTime: Date;
  endTime?: Date;
}
export interface ArithmeticTwapRequestProtoMsg {
  typeUrl: '/symphony.twap.v1beta1.ArithmeticTwapRequest';
  value: Uint8Array;
}
export interface ArithmeticTwapRequestAmino {
  pool_id?: string;
  base_asset?: string;
  quote_asset?: string;
  start_time?: string;
  end_time?: string;
}
export interface ArithmeticTwapRequestAminoMsg {
  type: '/symphony.twap.v1beta1.ArithmeticTwapRequest';
  value: ArithmeticTwapRequestAmino;
}
export interface ArithmeticTwapRequestSDKType {
  pool_id: bigint;
  base_asset: string;
  quote_asset: string;
  start_time: Date;
  end_time?: Date;
}
export interface ArithmeticTwapResponse {
  arithmeticTwap: string;
}
export interface ArithmeticTwapResponseProtoMsg {
  typeUrl: '/symphony.twap.v1beta1.ArithmeticTwapResponse';
  value: Uint8Array;
}
export interface ArithmeticTwapResponseAmino {
  arithmetic_twap?: string;
}
export interface ArithmeticTwapResponseAminoMsg {
  type: '/symphony.twap.v1beta1.ArithmeticTwapResponse';
  value: ArithmeticTwapResponseAmino;
}
export interface ArithmeticTwapResponseSDKType {
  arithmetic_twap: string;
}
export interface ArithmeticTwapToNowRequest {
  poolId: bigint;
  baseAsset: string;
  quoteAsset: string;
  startTime: Date;
}
export interface ArithmeticTwapToNowRequestProtoMsg {
  typeUrl: '/symphony.twap.v1beta1.ArithmeticTwapToNowRequest';
  value: Uint8Array;
}
export interface ArithmeticTwapToNowRequestAmino {
  pool_id?: string;
  base_asset?: string;
  quote_asset?: string;
  start_time?: string;
}
export interface ArithmeticTwapToNowRequestAminoMsg {
  type: '/symphony.twap.v1beta1.ArithmeticTwapToNowRequest';
  value: ArithmeticTwapToNowRequestAmino;
}
export interface ArithmeticTwapToNowRequestSDKType {
  pool_id: bigint;
  base_asset: string;
  quote_asset: string;
  start_time: Date;
}
export interface ArithmeticTwapToNowResponse {
  arithmeticTwap: string;
}
export interface ArithmeticTwapToNowResponseProtoMsg {
  typeUrl: '/symphony.twap.v1beta1.ArithmeticTwapToNowResponse';
  value: Uint8Array;
}
export interface ArithmeticTwapToNowResponseAmino {
  arithmetic_twap?: string;
}
export interface ArithmeticTwapToNowResponseAminoMsg {
  type: '/symphony.twap.v1beta1.ArithmeticTwapToNowResponse';
  value: ArithmeticTwapToNowResponseAmino;
}
export interface ArithmeticTwapToNowResponseSDKType {
  arithmetic_twap: string;
}
export interface GeometricTwapRequest {
  poolId: bigint;
  baseAsset: string;
  quoteAsset: string;
  startTime: Date;
  endTime?: Date;
}
export interface GeometricTwapRequestProtoMsg {
  typeUrl: '/symphony.twap.v1beta1.GeometricTwapRequest';
  value: Uint8Array;
}
export interface GeometricTwapRequestAmino {
  pool_id?: string;
  base_asset?: string;
  quote_asset?: string;
  start_time?: string;
  end_time?: string;
}
export interface GeometricTwapRequestAminoMsg {
  type: '/symphony.twap.v1beta1.GeometricTwapRequest';
  value: GeometricTwapRequestAmino;
}
export interface GeometricTwapRequestSDKType {
  pool_id: bigint;
  base_asset: string;
  quote_asset: string;
  start_time: Date;
  end_time?: Date;
}
export interface GeometricTwapResponse {
  geometricTwap: string;
}
export interface GeometricTwapResponseProtoMsg {
  typeUrl: '/symphony.twap.v1beta1.GeometricTwapResponse';
  value: Uint8Array;
}
export interface GeometricTwapResponseAmino {
  geometric_twap?: string;
}
export interface GeometricTwapResponseAminoMsg {
  type: '/symphony.twap.v1beta1.GeometricTwapResponse';
  value: GeometricTwapResponseAmino;
}
export interface GeometricTwapResponseSDKType {
  geometric_twap: string;
}
export interface GeometricTwapToNowRequest {
  poolId: bigint;
  baseAsset: string;
  quoteAsset: string;
  startTime: Date;
}
export interface GeometricTwapToNowRequestProtoMsg {
  typeUrl: '/symphony.twap.v1beta1.GeometricTwapToNowRequest';
  value: Uint8Array;
}
export interface GeometricTwapToNowRequestAmino {
  pool_id?: string;
  base_asset?: string;
  quote_asset?: string;
  start_time?: string;
}
export interface GeometricTwapToNowRequestAminoMsg {
  type: '/symphony.twap.v1beta1.GeometricTwapToNowRequest';
  value: GeometricTwapToNowRequestAmino;
}
export interface GeometricTwapToNowRequestSDKType {
  pool_id: bigint;
  base_asset: string;
  quote_asset: string;
  start_time: Date;
}
export interface GeometricTwapToNowResponse {
  geometricTwap: string;
}
export interface GeometricTwapToNowResponseProtoMsg {
  typeUrl: '/symphony.twap.v1beta1.GeometricTwapToNowResponse';
  value: Uint8Array;
}
export interface GeometricTwapToNowResponseAmino {
  geometric_twap?: string;
}
export interface GeometricTwapToNowResponseAminoMsg {
  type: '/symphony.twap.v1beta1.GeometricTwapToNowResponse';
  value: GeometricTwapToNowResponseAmino;
}
export interface GeometricTwapToNowResponseSDKType {
  geometric_twap: string;
}
export interface ParamsRequest {}
export interface ParamsRequestProtoMsg {
  typeUrl: '/symphony.twap.v1beta1.ParamsRequest';
  value: Uint8Array;
}
export interface ParamsRequestAmino {}
export interface ParamsRequestAminoMsg {
  type: '/symphony.twap.v1beta1.ParamsRequest';
  value: ParamsRequestAmino;
}
export interface ParamsRequestSDKType {}
export interface ParamsResponse {
  params: Params;
}
export interface ParamsResponseProtoMsg {
  typeUrl: '/symphony.twap.v1beta1.ParamsResponse';
  value: Uint8Array;
}
export interface ParamsResponseAmino {
  params?: ParamsAmino;
}
export interface ParamsResponseAminoMsg {
  type: '/symphony.twap.v1beta1.ParamsResponse';
  value: ParamsResponseAmino;
}
export interface ParamsResponseSDKType {
  params: ParamsSDKType;
}
function createBaseArithmeticTwapRequest(): ArithmeticTwapRequest {
  return {
    poolId: BigInt(0),
    baseAsset: '',
    quoteAsset: '',
    startTime: new Date(),
    endTime: undefined,
  };
}
export const ArithmeticTwapRequest = {
  typeUrl: '/symphony.twap.v1beta1.ArithmeticTwapRequest',
  is(o: any): o is ArithmeticTwapRequest {
    return (
      o &&
      (o.$typeUrl === ArithmeticTwapRequest.typeUrl ||
        (typeof o.poolId === 'bigint' &&
          typeof o.baseAsset === 'string' &&
          typeof o.quoteAsset === 'string' &&
          Timestamp.is(o.startTime)))
    );
  },
  isSDK(o: any): o is ArithmeticTwapRequestSDKType {
    return (
      o &&
      (o.$typeUrl === ArithmeticTwapRequest.typeUrl ||
        (typeof o.pool_id === 'bigint' &&
          typeof o.base_asset === 'string' &&
          typeof o.quote_asset === 'string' &&
          Timestamp.isSDK(o.start_time)))
    );
  },
  isAmino(o: any): o is ArithmeticTwapRequestAmino {
    return (
      o &&
      (o.$typeUrl === ArithmeticTwapRequest.typeUrl ||
        (typeof o.pool_id === 'bigint' &&
          typeof o.base_asset === 'string' &&
          typeof o.quote_asset === 'string' &&
          Timestamp.isAmino(o.start_time)))
    );
  },
  encode(
    message: ArithmeticTwapRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.baseAsset !== '') {
      writer.uint32(18).string(message.baseAsset);
    }
    if (message.quoteAsset !== '') {
      writer.uint32(26).string(message.quoteAsset);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.startTime),
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.endTime),
        writer.uint32(42).fork(),
      ).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): ArithmeticTwapRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArithmeticTwapRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.baseAsset = reader.string();
          break;
        case 3:
          message.quoteAsset = reader.string();
          break;
        case 4:
          message.startTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32()),
          );
          break;
        case 5:
          message.endTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ArithmeticTwapRequest>): ArithmeticTwapRequest {
    const message = createBaseArithmeticTwapRequest();
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? BigInt(object.poolId.toString())
        : BigInt(0);
    message.baseAsset = object.baseAsset ?? '';
    message.quoteAsset = object.quoteAsset ?? '';
    message.startTime = object.startTime ?? undefined;
    message.endTime = object.endTime ?? undefined;
    return message;
  },
  fromAmino(object: ArithmeticTwapRequestAmino): ArithmeticTwapRequest {
    const message = createBaseArithmeticTwapRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.base_asset !== undefined && object.base_asset !== null) {
      message.baseAsset = object.base_asset;
    }
    if (object.quote_asset !== undefined && object.quote_asset !== null) {
      message.quoteAsset = object.quote_asset;
    }
    if (object.start_time !== undefined && object.start_time !== null) {
      message.startTime = fromTimestamp(Timestamp.fromAmino(object.start_time));
    }
    if (object.end_time !== undefined && object.end_time !== null) {
      message.endTime = fromTimestamp(Timestamp.fromAmino(object.end_time));
    }
    return message;
  },
  toAmino(message: ArithmeticTwapRequest): ArithmeticTwapRequestAmino {
    const obj: any = {};
    obj.pool_id =
      message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
    obj.base_asset = message.baseAsset === '' ? undefined : message.baseAsset;
    obj.quote_asset =
      message.quoteAsset === '' ? undefined : message.quoteAsset;
    obj.start_time = message.startTime
      ? Timestamp.toAmino(toTimestamp(message.startTime))
      : undefined;
    obj.end_time = message.endTime
      ? Timestamp.toAmino(toTimestamp(message.endTime))
      : undefined;
    return obj;
  },
  fromAminoMsg(object: ArithmeticTwapRequestAminoMsg): ArithmeticTwapRequest {
    return ArithmeticTwapRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: ArithmeticTwapRequestProtoMsg): ArithmeticTwapRequest {
    return ArithmeticTwapRequest.decode(message.value);
  },
  toProto(message: ArithmeticTwapRequest): Uint8Array {
    return ArithmeticTwapRequest.encode(message).finish();
  },
  toProtoMsg(message: ArithmeticTwapRequest): ArithmeticTwapRequestProtoMsg {
    return {
      typeUrl: '/symphony.twap.v1beta1.ArithmeticTwapRequest',
      value: ArithmeticTwapRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  ArithmeticTwapRequest.typeUrl,
  ArithmeticTwapRequest,
);
function createBaseArithmeticTwapResponse(): ArithmeticTwapResponse {
  return {
    arithmeticTwap: '',
  };
}
export const ArithmeticTwapResponse = {
  typeUrl: '/symphony.twap.v1beta1.ArithmeticTwapResponse',
  is(o: any): o is ArithmeticTwapResponse {
    return (
      o &&
      (o.$typeUrl === ArithmeticTwapResponse.typeUrl ||
        typeof o.arithmeticTwap === 'string')
    );
  },
  isSDK(o: any): o is ArithmeticTwapResponseSDKType {
    return (
      o &&
      (o.$typeUrl === ArithmeticTwapResponse.typeUrl ||
        typeof o.arithmetic_twap === 'string')
    );
  },
  isAmino(o: any): o is ArithmeticTwapResponseAmino {
    return (
      o &&
      (o.$typeUrl === ArithmeticTwapResponse.typeUrl ||
        typeof o.arithmetic_twap === 'string')
    );
  },
  encode(
    message: ArithmeticTwapResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.arithmeticTwap !== '') {
      writer
        .uint32(10)
        .string(Decimal.fromUserInput(message.arithmeticTwap, 18).atomics);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): ArithmeticTwapResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArithmeticTwapResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.arithmeticTwap = Decimal.fromAtomics(
            reader.string(),
            18,
          ).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ArithmeticTwapResponse>): ArithmeticTwapResponse {
    const message = createBaseArithmeticTwapResponse();
    message.arithmeticTwap = object.arithmeticTwap ?? '';
    return message;
  },
  fromAmino(object: ArithmeticTwapResponseAmino): ArithmeticTwapResponse {
    const message = createBaseArithmeticTwapResponse();
    if (
      object.arithmetic_twap !== undefined &&
      object.arithmetic_twap !== null
    ) {
      message.arithmeticTwap = object.arithmetic_twap;
    }
    return message;
  },
  toAmino(message: ArithmeticTwapResponse): ArithmeticTwapResponseAmino {
    const obj: any = {};
    obj.arithmetic_twap =
      message.arithmeticTwap === '' ? undefined : message.arithmeticTwap;
    return obj;
  },
  fromAminoMsg(object: ArithmeticTwapResponseAminoMsg): ArithmeticTwapResponse {
    return ArithmeticTwapResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: ArithmeticTwapResponseProtoMsg,
  ): ArithmeticTwapResponse {
    return ArithmeticTwapResponse.decode(message.value);
  },
  toProto(message: ArithmeticTwapResponse): Uint8Array {
    return ArithmeticTwapResponse.encode(message).finish();
  },
  toProtoMsg(message: ArithmeticTwapResponse): ArithmeticTwapResponseProtoMsg {
    return {
      typeUrl: '/symphony.twap.v1beta1.ArithmeticTwapResponse',
      value: ArithmeticTwapResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  ArithmeticTwapResponse.typeUrl,
  ArithmeticTwapResponse,
);
function createBaseArithmeticTwapToNowRequest(): ArithmeticTwapToNowRequest {
  return {
    poolId: BigInt(0),
    baseAsset: '',
    quoteAsset: '',
    startTime: new Date(),
  };
}
export const ArithmeticTwapToNowRequest = {
  typeUrl: '/symphony.twap.v1beta1.ArithmeticTwapToNowRequest',
  is(o: any): o is ArithmeticTwapToNowRequest {
    return (
      o &&
      (o.$typeUrl === ArithmeticTwapToNowRequest.typeUrl ||
        (typeof o.poolId === 'bigint' &&
          typeof o.baseAsset === 'string' &&
          typeof o.quoteAsset === 'string' &&
          Timestamp.is(o.startTime)))
    );
  },
  isSDK(o: any): o is ArithmeticTwapToNowRequestSDKType {
    return (
      o &&
      (o.$typeUrl === ArithmeticTwapToNowRequest.typeUrl ||
        (typeof o.pool_id === 'bigint' &&
          typeof o.base_asset === 'string' &&
          typeof o.quote_asset === 'string' &&
          Timestamp.isSDK(o.start_time)))
    );
  },
  isAmino(o: any): o is ArithmeticTwapToNowRequestAmino {
    return (
      o &&
      (o.$typeUrl === ArithmeticTwapToNowRequest.typeUrl ||
        (typeof o.pool_id === 'bigint' &&
          typeof o.base_asset === 'string' &&
          typeof o.quote_asset === 'string' &&
          Timestamp.isAmino(o.start_time)))
    );
  },
  encode(
    message: ArithmeticTwapToNowRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.baseAsset !== '') {
      writer.uint32(18).string(message.baseAsset);
    }
    if (message.quoteAsset !== '') {
      writer.uint32(26).string(message.quoteAsset);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.startTime),
        writer.uint32(34).fork(),
      ).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): ArithmeticTwapToNowRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArithmeticTwapToNowRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.baseAsset = reader.string();
          break;
        case 3:
          message.quoteAsset = reader.string();
          break;
        case 4:
          message.startTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(
    object: Partial<ArithmeticTwapToNowRequest>,
  ): ArithmeticTwapToNowRequest {
    const message = createBaseArithmeticTwapToNowRequest();
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? BigInt(object.poolId.toString())
        : BigInt(0);
    message.baseAsset = object.baseAsset ?? '';
    message.quoteAsset = object.quoteAsset ?? '';
    message.startTime = object.startTime ?? undefined;
    return message;
  },
  fromAmino(
    object: ArithmeticTwapToNowRequestAmino,
  ): ArithmeticTwapToNowRequest {
    const message = createBaseArithmeticTwapToNowRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.base_asset !== undefined && object.base_asset !== null) {
      message.baseAsset = object.base_asset;
    }
    if (object.quote_asset !== undefined && object.quote_asset !== null) {
      message.quoteAsset = object.quote_asset;
    }
    if (object.start_time !== undefined && object.start_time !== null) {
      message.startTime = fromTimestamp(Timestamp.fromAmino(object.start_time));
    }
    return message;
  },
  toAmino(
    message: ArithmeticTwapToNowRequest,
  ): ArithmeticTwapToNowRequestAmino {
    const obj: any = {};
    obj.pool_id =
      message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
    obj.base_asset = message.baseAsset === '' ? undefined : message.baseAsset;
    obj.quote_asset =
      message.quoteAsset === '' ? undefined : message.quoteAsset;
    obj.start_time = message.startTime
      ? Timestamp.toAmino(toTimestamp(message.startTime))
      : undefined;
    return obj;
  },
  fromAminoMsg(
    object: ArithmeticTwapToNowRequestAminoMsg,
  ): ArithmeticTwapToNowRequest {
    return ArithmeticTwapToNowRequest.fromAmino(object.value);
  },
  fromProtoMsg(
    message: ArithmeticTwapToNowRequestProtoMsg,
  ): ArithmeticTwapToNowRequest {
    return ArithmeticTwapToNowRequest.decode(message.value);
  },
  toProto(message: ArithmeticTwapToNowRequest): Uint8Array {
    return ArithmeticTwapToNowRequest.encode(message).finish();
  },
  toProtoMsg(
    message: ArithmeticTwapToNowRequest,
  ): ArithmeticTwapToNowRequestProtoMsg {
    return {
      typeUrl: '/symphony.twap.v1beta1.ArithmeticTwapToNowRequest',
      value: ArithmeticTwapToNowRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  ArithmeticTwapToNowRequest.typeUrl,
  ArithmeticTwapToNowRequest,
);
function createBaseArithmeticTwapToNowResponse(): ArithmeticTwapToNowResponse {
  return {
    arithmeticTwap: '',
  };
}
export const ArithmeticTwapToNowResponse = {
  typeUrl: '/symphony.twap.v1beta1.ArithmeticTwapToNowResponse',
  is(o: any): o is ArithmeticTwapToNowResponse {
    return (
      o &&
      (o.$typeUrl === ArithmeticTwapToNowResponse.typeUrl ||
        typeof o.arithmeticTwap === 'string')
    );
  },
  isSDK(o: any): o is ArithmeticTwapToNowResponseSDKType {
    return (
      o &&
      (o.$typeUrl === ArithmeticTwapToNowResponse.typeUrl ||
        typeof o.arithmetic_twap === 'string')
    );
  },
  isAmino(o: any): o is ArithmeticTwapToNowResponseAmino {
    return (
      o &&
      (o.$typeUrl === ArithmeticTwapToNowResponse.typeUrl ||
        typeof o.arithmetic_twap === 'string')
    );
  },
  encode(
    message: ArithmeticTwapToNowResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.arithmeticTwap !== '') {
      writer
        .uint32(10)
        .string(Decimal.fromUserInput(message.arithmeticTwap, 18).atomics);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): ArithmeticTwapToNowResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArithmeticTwapToNowResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.arithmeticTwap = Decimal.fromAtomics(
            reader.string(),
            18,
          ).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(
    object: Partial<ArithmeticTwapToNowResponse>,
  ): ArithmeticTwapToNowResponse {
    const message = createBaseArithmeticTwapToNowResponse();
    message.arithmeticTwap = object.arithmeticTwap ?? '';
    return message;
  },
  fromAmino(
    object: ArithmeticTwapToNowResponseAmino,
  ): ArithmeticTwapToNowResponse {
    const message = createBaseArithmeticTwapToNowResponse();
    if (
      object.arithmetic_twap !== undefined &&
      object.arithmetic_twap !== null
    ) {
      message.arithmeticTwap = object.arithmetic_twap;
    }
    return message;
  },
  toAmino(
    message: ArithmeticTwapToNowResponse,
  ): ArithmeticTwapToNowResponseAmino {
    const obj: any = {};
    obj.arithmetic_twap =
      message.arithmeticTwap === '' ? undefined : message.arithmeticTwap;
    return obj;
  },
  fromAminoMsg(
    object: ArithmeticTwapToNowResponseAminoMsg,
  ): ArithmeticTwapToNowResponse {
    return ArithmeticTwapToNowResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: ArithmeticTwapToNowResponseProtoMsg,
  ): ArithmeticTwapToNowResponse {
    return ArithmeticTwapToNowResponse.decode(message.value);
  },
  toProto(message: ArithmeticTwapToNowResponse): Uint8Array {
    return ArithmeticTwapToNowResponse.encode(message).finish();
  },
  toProtoMsg(
    message: ArithmeticTwapToNowResponse,
  ): ArithmeticTwapToNowResponseProtoMsg {
    return {
      typeUrl: '/symphony.twap.v1beta1.ArithmeticTwapToNowResponse',
      value: ArithmeticTwapToNowResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  ArithmeticTwapToNowResponse.typeUrl,
  ArithmeticTwapToNowResponse,
);
function createBaseGeometricTwapRequest(): GeometricTwapRequest {
  return {
    poolId: BigInt(0),
    baseAsset: '',
    quoteAsset: '',
    startTime: new Date(),
    endTime: undefined,
  };
}
export const GeometricTwapRequest = {
  typeUrl: '/symphony.twap.v1beta1.GeometricTwapRequest',
  is(o: any): o is GeometricTwapRequest {
    return (
      o &&
      (o.$typeUrl === GeometricTwapRequest.typeUrl ||
        (typeof o.poolId === 'bigint' &&
          typeof o.baseAsset === 'string' &&
          typeof o.quoteAsset === 'string' &&
          Timestamp.is(o.startTime)))
    );
  },
  isSDK(o: any): o is GeometricTwapRequestSDKType {
    return (
      o &&
      (o.$typeUrl === GeometricTwapRequest.typeUrl ||
        (typeof o.pool_id === 'bigint' &&
          typeof o.base_asset === 'string' &&
          typeof o.quote_asset === 'string' &&
          Timestamp.isSDK(o.start_time)))
    );
  },
  isAmino(o: any): o is GeometricTwapRequestAmino {
    return (
      o &&
      (o.$typeUrl === GeometricTwapRequest.typeUrl ||
        (typeof o.pool_id === 'bigint' &&
          typeof o.base_asset === 'string' &&
          typeof o.quote_asset === 'string' &&
          Timestamp.isAmino(o.start_time)))
    );
  },
  encode(
    message: GeometricTwapRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.baseAsset !== '') {
      writer.uint32(18).string(message.baseAsset);
    }
    if (message.quoteAsset !== '') {
      writer.uint32(26).string(message.quoteAsset);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.startTime),
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.endTime),
        writer.uint32(42).fork(),
      ).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): GeometricTwapRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGeometricTwapRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.baseAsset = reader.string();
          break;
        case 3:
          message.quoteAsset = reader.string();
          break;
        case 4:
          message.startTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32()),
          );
          break;
        case 5:
          message.endTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GeometricTwapRequest>): GeometricTwapRequest {
    const message = createBaseGeometricTwapRequest();
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? BigInt(object.poolId.toString())
        : BigInt(0);
    message.baseAsset = object.baseAsset ?? '';
    message.quoteAsset = object.quoteAsset ?? '';
    message.startTime = object.startTime ?? undefined;
    message.endTime = object.endTime ?? undefined;
    return message;
  },
  fromAmino(object: GeometricTwapRequestAmino): GeometricTwapRequest {
    const message = createBaseGeometricTwapRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.base_asset !== undefined && object.base_asset !== null) {
      message.baseAsset = object.base_asset;
    }
    if (object.quote_asset !== undefined && object.quote_asset !== null) {
      message.quoteAsset = object.quote_asset;
    }
    if (object.start_time !== undefined && object.start_time !== null) {
      message.startTime = fromTimestamp(Timestamp.fromAmino(object.start_time));
    }
    if (object.end_time !== undefined && object.end_time !== null) {
      message.endTime = fromTimestamp(Timestamp.fromAmino(object.end_time));
    }
    return message;
  },
  toAmino(message: GeometricTwapRequest): GeometricTwapRequestAmino {
    const obj: any = {};
    obj.pool_id =
      message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
    obj.base_asset = message.baseAsset === '' ? undefined : message.baseAsset;
    obj.quote_asset =
      message.quoteAsset === '' ? undefined : message.quoteAsset;
    obj.start_time = message.startTime
      ? Timestamp.toAmino(toTimestamp(message.startTime))
      : undefined;
    obj.end_time = message.endTime
      ? Timestamp.toAmino(toTimestamp(message.endTime))
      : undefined;
    return obj;
  },
  fromAminoMsg(object: GeometricTwapRequestAminoMsg): GeometricTwapRequest {
    return GeometricTwapRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: GeometricTwapRequestProtoMsg): GeometricTwapRequest {
    return GeometricTwapRequest.decode(message.value);
  },
  toProto(message: GeometricTwapRequest): Uint8Array {
    return GeometricTwapRequest.encode(message).finish();
  },
  toProtoMsg(message: GeometricTwapRequest): GeometricTwapRequestProtoMsg {
    return {
      typeUrl: '/symphony.twap.v1beta1.GeometricTwapRequest',
      value: GeometricTwapRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  GeometricTwapRequest.typeUrl,
  GeometricTwapRequest,
);
function createBaseGeometricTwapResponse(): GeometricTwapResponse {
  return {
    geometricTwap: '',
  };
}
export const GeometricTwapResponse = {
  typeUrl: '/symphony.twap.v1beta1.GeometricTwapResponse',
  is(o: any): o is GeometricTwapResponse {
    return (
      o &&
      (o.$typeUrl === GeometricTwapResponse.typeUrl ||
        typeof o.geometricTwap === 'string')
    );
  },
  isSDK(o: any): o is GeometricTwapResponseSDKType {
    return (
      o &&
      (o.$typeUrl === GeometricTwapResponse.typeUrl ||
        typeof o.geometric_twap === 'string')
    );
  },
  isAmino(o: any): o is GeometricTwapResponseAmino {
    return (
      o &&
      (o.$typeUrl === GeometricTwapResponse.typeUrl ||
        typeof o.geometric_twap === 'string')
    );
  },
  encode(
    message: GeometricTwapResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.geometricTwap !== '') {
      writer
        .uint32(10)
        .string(Decimal.fromUserInput(message.geometricTwap, 18).atomics);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): GeometricTwapResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGeometricTwapResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.geometricTwap = Decimal.fromAtomics(
            reader.string(),
            18,
          ).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GeometricTwapResponse>): GeometricTwapResponse {
    const message = createBaseGeometricTwapResponse();
    message.geometricTwap = object.geometricTwap ?? '';
    return message;
  },
  fromAmino(object: GeometricTwapResponseAmino): GeometricTwapResponse {
    const message = createBaseGeometricTwapResponse();
    if (object.geometric_twap !== undefined && object.geometric_twap !== null) {
      message.geometricTwap = object.geometric_twap;
    }
    return message;
  },
  toAmino(message: GeometricTwapResponse): GeometricTwapResponseAmino {
    const obj: any = {};
    obj.geometric_twap =
      message.geometricTwap === '' ? undefined : message.geometricTwap;
    return obj;
  },
  fromAminoMsg(object: GeometricTwapResponseAminoMsg): GeometricTwapResponse {
    return GeometricTwapResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: GeometricTwapResponseProtoMsg): GeometricTwapResponse {
    return GeometricTwapResponse.decode(message.value);
  },
  toProto(message: GeometricTwapResponse): Uint8Array {
    return GeometricTwapResponse.encode(message).finish();
  },
  toProtoMsg(message: GeometricTwapResponse): GeometricTwapResponseProtoMsg {
    return {
      typeUrl: '/symphony.twap.v1beta1.GeometricTwapResponse',
      value: GeometricTwapResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  GeometricTwapResponse.typeUrl,
  GeometricTwapResponse,
);
function createBaseGeometricTwapToNowRequest(): GeometricTwapToNowRequest {
  return {
    poolId: BigInt(0),
    baseAsset: '',
    quoteAsset: '',
    startTime: new Date(),
  };
}
export const GeometricTwapToNowRequest = {
  typeUrl: '/symphony.twap.v1beta1.GeometricTwapToNowRequest',
  is(o: any): o is GeometricTwapToNowRequest {
    return (
      o &&
      (o.$typeUrl === GeometricTwapToNowRequest.typeUrl ||
        (typeof o.poolId === 'bigint' &&
          typeof o.baseAsset === 'string' &&
          typeof o.quoteAsset === 'string' &&
          Timestamp.is(o.startTime)))
    );
  },
  isSDK(o: any): o is GeometricTwapToNowRequestSDKType {
    return (
      o &&
      (o.$typeUrl === GeometricTwapToNowRequest.typeUrl ||
        (typeof o.pool_id === 'bigint' &&
          typeof o.base_asset === 'string' &&
          typeof o.quote_asset === 'string' &&
          Timestamp.isSDK(o.start_time)))
    );
  },
  isAmino(o: any): o is GeometricTwapToNowRequestAmino {
    return (
      o &&
      (o.$typeUrl === GeometricTwapToNowRequest.typeUrl ||
        (typeof o.pool_id === 'bigint' &&
          typeof o.base_asset === 'string' &&
          typeof o.quote_asset === 'string' &&
          Timestamp.isAmino(o.start_time)))
    );
  },
  encode(
    message: GeometricTwapToNowRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.baseAsset !== '') {
      writer.uint32(18).string(message.baseAsset);
    }
    if (message.quoteAsset !== '') {
      writer.uint32(26).string(message.quoteAsset);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.startTime),
        writer.uint32(34).fork(),
      ).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): GeometricTwapToNowRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGeometricTwapToNowRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.baseAsset = reader.string();
          break;
        case 3:
          message.quoteAsset = reader.string();
          break;
        case 4:
          message.startTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(
    object: Partial<GeometricTwapToNowRequest>,
  ): GeometricTwapToNowRequest {
    const message = createBaseGeometricTwapToNowRequest();
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? BigInt(object.poolId.toString())
        : BigInt(0);
    message.baseAsset = object.baseAsset ?? '';
    message.quoteAsset = object.quoteAsset ?? '';
    message.startTime = object.startTime ?? undefined;
    return message;
  },
  fromAmino(object: GeometricTwapToNowRequestAmino): GeometricTwapToNowRequest {
    const message = createBaseGeometricTwapToNowRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.base_asset !== undefined && object.base_asset !== null) {
      message.baseAsset = object.base_asset;
    }
    if (object.quote_asset !== undefined && object.quote_asset !== null) {
      message.quoteAsset = object.quote_asset;
    }
    if (object.start_time !== undefined && object.start_time !== null) {
      message.startTime = fromTimestamp(Timestamp.fromAmino(object.start_time));
    }
    return message;
  },
  toAmino(message: GeometricTwapToNowRequest): GeometricTwapToNowRequestAmino {
    const obj: any = {};
    obj.pool_id =
      message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
    obj.base_asset = message.baseAsset === '' ? undefined : message.baseAsset;
    obj.quote_asset =
      message.quoteAsset === '' ? undefined : message.quoteAsset;
    obj.start_time = message.startTime
      ? Timestamp.toAmino(toTimestamp(message.startTime))
      : undefined;
    return obj;
  },
  fromAminoMsg(
    object: GeometricTwapToNowRequestAminoMsg,
  ): GeometricTwapToNowRequest {
    return GeometricTwapToNowRequest.fromAmino(object.value);
  },
  fromProtoMsg(
    message: GeometricTwapToNowRequestProtoMsg,
  ): GeometricTwapToNowRequest {
    return GeometricTwapToNowRequest.decode(message.value);
  },
  toProto(message: GeometricTwapToNowRequest): Uint8Array {
    return GeometricTwapToNowRequest.encode(message).finish();
  },
  toProtoMsg(
    message: GeometricTwapToNowRequest,
  ): GeometricTwapToNowRequestProtoMsg {
    return {
      typeUrl: '/symphony.twap.v1beta1.GeometricTwapToNowRequest',
      value: GeometricTwapToNowRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  GeometricTwapToNowRequest.typeUrl,
  GeometricTwapToNowRequest,
);
function createBaseGeometricTwapToNowResponse(): GeometricTwapToNowResponse {
  return {
    geometricTwap: '',
  };
}
export const GeometricTwapToNowResponse = {
  typeUrl: '/symphony.twap.v1beta1.GeometricTwapToNowResponse',
  is(o: any): o is GeometricTwapToNowResponse {
    return (
      o &&
      (o.$typeUrl === GeometricTwapToNowResponse.typeUrl ||
        typeof o.geometricTwap === 'string')
    );
  },
  isSDK(o: any): o is GeometricTwapToNowResponseSDKType {
    return (
      o &&
      (o.$typeUrl === GeometricTwapToNowResponse.typeUrl ||
        typeof o.geometric_twap === 'string')
    );
  },
  isAmino(o: any): o is GeometricTwapToNowResponseAmino {
    return (
      o &&
      (o.$typeUrl === GeometricTwapToNowResponse.typeUrl ||
        typeof o.geometric_twap === 'string')
    );
  },
  encode(
    message: GeometricTwapToNowResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.geometricTwap !== '') {
      writer
        .uint32(10)
        .string(Decimal.fromUserInput(message.geometricTwap, 18).atomics);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): GeometricTwapToNowResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGeometricTwapToNowResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.geometricTwap = Decimal.fromAtomics(
            reader.string(),
            18,
          ).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(
    object: Partial<GeometricTwapToNowResponse>,
  ): GeometricTwapToNowResponse {
    const message = createBaseGeometricTwapToNowResponse();
    message.geometricTwap = object.geometricTwap ?? '';
    return message;
  },
  fromAmino(
    object: GeometricTwapToNowResponseAmino,
  ): GeometricTwapToNowResponse {
    const message = createBaseGeometricTwapToNowResponse();
    if (object.geometric_twap !== undefined && object.geometric_twap !== null) {
      message.geometricTwap = object.geometric_twap;
    }
    return message;
  },
  toAmino(
    message: GeometricTwapToNowResponse,
  ): GeometricTwapToNowResponseAmino {
    const obj: any = {};
    obj.geometric_twap =
      message.geometricTwap === '' ? undefined : message.geometricTwap;
    return obj;
  },
  fromAminoMsg(
    object: GeometricTwapToNowResponseAminoMsg,
  ): GeometricTwapToNowResponse {
    return GeometricTwapToNowResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: GeometricTwapToNowResponseProtoMsg,
  ): GeometricTwapToNowResponse {
    return GeometricTwapToNowResponse.decode(message.value);
  },
  toProto(message: GeometricTwapToNowResponse): Uint8Array {
    return GeometricTwapToNowResponse.encode(message).finish();
  },
  toProtoMsg(
    message: GeometricTwapToNowResponse,
  ): GeometricTwapToNowResponseProtoMsg {
    return {
      typeUrl: '/symphony.twap.v1beta1.GeometricTwapToNowResponse',
      value: GeometricTwapToNowResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  GeometricTwapToNowResponse.typeUrl,
  GeometricTwapToNowResponse,
);
function createBaseParamsRequest(): ParamsRequest {
  return {};
}
export const ParamsRequest = {
  typeUrl: '/symphony.twap.v1beta1.ParamsRequest',
  is(o: any): o is ParamsRequest {
    return o && o.$typeUrl === ParamsRequest.typeUrl;
  },
  isSDK(o: any): o is ParamsRequestSDKType {
    return o && o.$typeUrl === ParamsRequest.typeUrl;
  },
  isAmino(o: any): o is ParamsRequestAmino {
    return o && o.$typeUrl === ParamsRequest.typeUrl;
  },
  encode(
    _: ParamsRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ParamsRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<ParamsRequest>): ParamsRequest {
    const message = createBaseParamsRequest();
    return message;
  },
  fromAmino(_: ParamsRequestAmino): ParamsRequest {
    const message = createBaseParamsRequest();
    return message;
  },
  toAmino(_: ParamsRequest): ParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: ParamsRequestAminoMsg): ParamsRequest {
    return ParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsRequestProtoMsg): ParamsRequest {
    return ParamsRequest.decode(message.value);
  },
  toProto(message: ParamsRequest): Uint8Array {
    return ParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: ParamsRequest): ParamsRequestProtoMsg {
    return {
      typeUrl: '/symphony.twap.v1beta1.ParamsRequest',
      value: ParamsRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(ParamsRequest.typeUrl, ParamsRequest);
function createBaseParamsResponse(): ParamsResponse {
  return {
    params: Params.fromPartial({}),
  };
}
export const ParamsResponse = {
  typeUrl: '/symphony.twap.v1beta1.ParamsResponse',
  is(o: any): o is ParamsResponse {
    return o && (o.$typeUrl === ParamsResponse.typeUrl || Params.is(o.params));
  },
  isSDK(o: any): o is ParamsResponseSDKType {
    return (
      o && (o.$typeUrl === ParamsResponse.typeUrl || Params.isSDK(o.params))
    );
  },
  isAmino(o: any): o is ParamsResponseAmino {
    return (
      o && (o.$typeUrl === ParamsResponse.typeUrl || Params.isAmino(o.params))
    );
  },
  encode(
    message: ParamsResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ParamsResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ParamsResponse>): ParamsResponse {
    const message = createBaseParamsResponse();
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    return message;
  },
  fromAmino(object: ParamsResponseAmino): ParamsResponse {
    const message = createBaseParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: ParamsResponse): ParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsResponseAminoMsg): ParamsResponse {
    return ParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsResponseProtoMsg): ParamsResponse {
    return ParamsResponse.decode(message.value);
  },
  toProto(message: ParamsResponse): Uint8Array {
    return ParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: ParamsResponse): ParamsResponseProtoMsg {
    return {
      typeUrl: '/symphony.twap.v1beta1.ParamsResponse',
      value: ParamsResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(ParamsResponse.typeUrl, ParamsResponse);
