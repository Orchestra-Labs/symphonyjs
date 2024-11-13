//@ts-nocheck
import { BinaryReader, BinaryWriter } from '../../../binary';
import { GlobalDecoderRegistry } from '../../../registry';
/** Deprecated: please use alternate in x/poolmanager */
/** @deprecated */
export interface QuerySpotPriceRequest {
  poolId: bigint;
  baseAssetDenom: string;
  quoteAssetDenom: string;
  /** DEPRECATED */
  /** @deprecated */
  withSwapFee: boolean;
}
export interface QuerySpotPriceRequestProtoMsg {
  typeUrl: '/symphony.gamm.v2.QuerySpotPriceRequest';
  value: Uint8Array;
}
/** Deprecated: please use alternate in x/poolmanager */
/** @deprecated */
export interface QuerySpotPriceRequestAmino {
  pool_id?: string;
  base_asset_denom?: string;
  quote_asset_denom?: string;
  /** DEPRECATED */
  /** @deprecated */
  withSwapFee?: boolean;
}
export interface QuerySpotPriceRequestAminoMsg {
  type: '/symphony.gamm.v2.QuerySpotPriceRequest';
  value: QuerySpotPriceRequestAmino;
}
/** Deprecated: please use alternate in x/poolmanager */
/** @deprecated */
export interface QuerySpotPriceRequestSDKType {
  pool_id: bigint;
  base_asset_denom: string;
  quote_asset_denom: string;
  /** @deprecated */
  withSwapFee: boolean;
}
/** Deprecated: please use alternate in x/poolmanager */
/** @deprecated */
export interface QuerySpotPriceResponse {
  /** String of the Dec. Ex) 10.203uatom */
  spotPrice: string;
}
export interface QuerySpotPriceResponseProtoMsg {
  typeUrl: '/symphony.gamm.v2.QuerySpotPriceResponse';
  value: Uint8Array;
}
/** Deprecated: please use alternate in x/poolmanager */
/** @deprecated */
export interface QuerySpotPriceResponseAmino {
  /** String of the Dec. Ex) 10.203uatom */
  spot_price?: string;
}
export interface QuerySpotPriceResponseAminoMsg {
  type: '/symphony.gamm.v2.QuerySpotPriceResponse';
  value: QuerySpotPriceResponseAmino;
}
/** Deprecated: please use alternate in x/poolmanager */
/** @deprecated */
export interface QuerySpotPriceResponseSDKType {
  spot_price: string;
}
function createBaseQuerySpotPriceRequest(): QuerySpotPriceRequest {
  return {
    poolId: BigInt(0),
    baseAssetDenom: '',
    quoteAssetDenom: '',
    withSwapFee: false,
  };
}
export const QuerySpotPriceRequest = {
  typeUrl: '/symphony.gamm.v2.QuerySpotPriceRequest',
  is(o: any): o is QuerySpotPriceRequest {
    return (
      o &&
      (o.$typeUrl === QuerySpotPriceRequest.typeUrl ||
        (typeof o.poolId === 'bigint' &&
          typeof o.baseAssetDenom === 'string' &&
          typeof o.quoteAssetDenom === 'string' &&
          typeof o.withSwapFee === 'boolean'))
    );
  },
  isSDK(o: any): o is QuerySpotPriceRequestSDKType {
    return (
      o &&
      (o.$typeUrl === QuerySpotPriceRequest.typeUrl ||
        (typeof o.pool_id === 'bigint' &&
          typeof o.base_asset_denom === 'string' &&
          typeof o.quote_asset_denom === 'string' &&
          typeof o.withSwapFee === 'boolean'))
    );
  },
  isAmino(o: any): o is QuerySpotPriceRequestAmino {
    return (
      o &&
      (o.$typeUrl === QuerySpotPriceRequest.typeUrl ||
        (typeof o.pool_id === 'bigint' &&
          typeof o.base_asset_denom === 'string' &&
          typeof o.quote_asset_denom === 'string' &&
          typeof o.withSwapFee === 'boolean'))
    );
  },
  encode(
    message: QuerySpotPriceRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.baseAssetDenom !== '') {
      writer.uint32(18).string(message.baseAssetDenom);
    }
    if (message.quoteAssetDenom !== '') {
      writer.uint32(26).string(message.quoteAssetDenom);
    }
    if (message.withSwapFee === true) {
      writer.uint32(32).bool(message.withSwapFee);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): QuerySpotPriceRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySpotPriceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.baseAssetDenom = reader.string();
          break;
        case 3:
          message.quoteAssetDenom = reader.string();
          break;
        case 4:
          message.withSwapFee = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QuerySpotPriceRequest>): QuerySpotPriceRequest {
    const message = createBaseQuerySpotPriceRequest();
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? BigInt(object.poolId.toString())
        : BigInt(0);
    message.baseAssetDenom = object.baseAssetDenom ?? '';
    message.quoteAssetDenom = object.quoteAssetDenom ?? '';
    message.withSwapFee = object.withSwapFee ?? false;
    return message;
  },
  fromAmino(object: QuerySpotPriceRequestAmino): QuerySpotPriceRequest {
    const message = createBaseQuerySpotPriceRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (
      object.base_asset_denom !== undefined &&
      object.base_asset_denom !== null
    ) {
      message.baseAssetDenom = object.base_asset_denom;
    }
    if (
      object.quote_asset_denom !== undefined &&
      object.quote_asset_denom !== null
    ) {
      message.quoteAssetDenom = object.quote_asset_denom;
    }
    if (object.withSwapFee !== undefined && object.withSwapFee !== null) {
      message.withSwapFee = object.withSwapFee;
    }
    return message;
  },
  toAmino(message: QuerySpotPriceRequest): QuerySpotPriceRequestAmino {
    const obj: any = {};
    obj.pool_id =
      message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
    obj.base_asset_denom =
      message.baseAssetDenom === '' ? undefined : message.baseAssetDenom;
    obj.quote_asset_denom =
      message.quoteAssetDenom === '' ? undefined : message.quoteAssetDenom;
    obj.withSwapFee =
      message.withSwapFee === false ? undefined : message.withSwapFee;
    return obj;
  },
  fromAminoMsg(object: QuerySpotPriceRequestAminoMsg): QuerySpotPriceRequest {
    return QuerySpotPriceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySpotPriceRequestProtoMsg): QuerySpotPriceRequest {
    return QuerySpotPriceRequest.decode(message.value);
  },
  toProto(message: QuerySpotPriceRequest): Uint8Array {
    return QuerySpotPriceRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySpotPriceRequest): QuerySpotPriceRequestProtoMsg {
    return {
      typeUrl: '/symphony.gamm.v2.QuerySpotPriceRequest',
      value: QuerySpotPriceRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  QuerySpotPriceRequest.typeUrl,
  QuerySpotPriceRequest,
);
function createBaseQuerySpotPriceResponse(): QuerySpotPriceResponse {
  return {
    spotPrice: '',
  };
}
export const QuerySpotPriceResponse = {
  typeUrl: '/symphony.gamm.v2.QuerySpotPriceResponse',
  is(o: any): o is QuerySpotPriceResponse {
    return (
      o &&
      (o.$typeUrl === QuerySpotPriceResponse.typeUrl ||
        typeof o.spotPrice === 'string')
    );
  },
  isSDK(o: any): o is QuerySpotPriceResponseSDKType {
    return (
      o &&
      (o.$typeUrl === QuerySpotPriceResponse.typeUrl ||
        typeof o.spot_price === 'string')
    );
  },
  isAmino(o: any): o is QuerySpotPriceResponseAmino {
    return (
      o &&
      (o.$typeUrl === QuerySpotPriceResponse.typeUrl ||
        typeof o.spot_price === 'string')
    );
  },
  encode(
    message: QuerySpotPriceResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.spotPrice !== '') {
      writer.uint32(10).string(message.spotPrice);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): QuerySpotPriceResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySpotPriceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.spotPrice = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QuerySpotPriceResponse>): QuerySpotPriceResponse {
    const message = createBaseQuerySpotPriceResponse();
    message.spotPrice = object.spotPrice ?? '';
    return message;
  },
  fromAmino(object: QuerySpotPriceResponseAmino): QuerySpotPriceResponse {
    const message = createBaseQuerySpotPriceResponse();
    if (object.spot_price !== undefined && object.spot_price !== null) {
      message.spotPrice = object.spot_price;
    }
    return message;
  },
  toAmino(message: QuerySpotPriceResponse): QuerySpotPriceResponseAmino {
    const obj: any = {};
    obj.spot_price = message.spotPrice === '' ? undefined : message.spotPrice;
    return obj;
  },
  fromAminoMsg(object: QuerySpotPriceResponseAminoMsg): QuerySpotPriceResponse {
    return QuerySpotPriceResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: QuerySpotPriceResponseProtoMsg,
  ): QuerySpotPriceResponse {
    return QuerySpotPriceResponse.decode(message.value);
  },
  toProto(message: QuerySpotPriceResponse): Uint8Array {
    return QuerySpotPriceResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySpotPriceResponse): QuerySpotPriceResponseProtoMsg {
    return {
      typeUrl: '/symphony.gamm.v2.QuerySpotPriceResponse',
      value: QuerySpotPriceResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  QuerySpotPriceResponse.typeUrl,
  QuerySpotPriceResponse,
);
