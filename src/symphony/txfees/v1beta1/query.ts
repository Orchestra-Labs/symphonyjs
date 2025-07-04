//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { Decimal } from "@cosmjs/math";
export interface QueryFeeTokensRequest {}
export interface QueryFeeTokensRequestProtoMsg {
  typeUrl: "/symphony.txfees.v1beta1.QueryFeeTokensRequest";
  value: Uint8Array;
}
export interface QueryFeeTokensRequestAmino {}
export interface QueryFeeTokensRequestAminoMsg {
  type: "/symphony.txfees.v1beta1.QueryFeeTokensRequest";
  value: QueryFeeTokensRequestAmino;
}
export interface QueryFeeTokensRequestSDKType {}
export interface QueryFeeTokensResponse {
  feeTokens: string[];
}
export interface QueryFeeTokensResponseProtoMsg {
  typeUrl: "/symphony.txfees.v1beta1.QueryFeeTokensResponse";
  value: Uint8Array;
}
export interface QueryFeeTokensResponseAmino {
  fee_tokens?: string[];
}
export interface QueryFeeTokensResponseAminoMsg {
  type: "/symphony.txfees.v1beta1.QueryFeeTokensResponse";
  value: QueryFeeTokensResponseAmino;
}
export interface QueryFeeTokensResponseSDKType {
  fee_tokens: string[];
}
/**
 * QueryDenomSpotPriceRequest defines grpc request structure for querying spot
 * price for the specified tx fee denom
 */
export interface QueryDenomSpotPriceRequest {
  denom: string;
}
export interface QueryDenomSpotPriceRequestProtoMsg {
  typeUrl: "/symphony.txfees.v1beta1.QueryDenomSpotPriceRequest";
  value: Uint8Array;
}
/**
 * QueryDenomSpotPriceRequest defines grpc request structure for querying spot
 * price for the specified tx fee denom
 */
export interface QueryDenomSpotPriceRequestAmino {
  denom?: string;
}
export interface QueryDenomSpotPriceRequestAminoMsg {
  type: "/symphony.txfees.v1beta1.QueryDenomSpotPriceRequest";
  value: QueryDenomSpotPriceRequestAmino;
}
/**
 * QueryDenomSpotPriceRequest defines grpc request structure for querying spot
 * price for the specified tx fee denom
 */
export interface QueryDenomSpotPriceRequestSDKType {
  denom: string;
}
/**
 * QueryDenomSpotPriceRequest defines grpc response structure for querying spot
 * price for the specified tx fee denom
 */
export interface QueryDenomSpotPriceResponse {
  spotPrice: string;
}
export interface QueryDenomSpotPriceResponseProtoMsg {
  typeUrl: "/symphony.txfees.v1beta1.QueryDenomSpotPriceResponse";
  value: Uint8Array;
}
/**
 * QueryDenomSpotPriceRequest defines grpc response structure for querying spot
 * price for the specified tx fee denom
 */
export interface QueryDenomSpotPriceResponseAmino {
  spot_price?: string;
}
export interface QueryDenomSpotPriceResponseAminoMsg {
  type: "/symphony.txfees.v1beta1.QueryDenomSpotPriceResponse";
  value: QueryDenomSpotPriceResponseAmino;
}
/**
 * QueryDenomSpotPriceRequest defines grpc response structure for querying spot
 * price for the specified tx fee denom
 */
export interface QueryDenomSpotPriceResponseSDKType {
  spot_price: string;
}
export interface QueryEipBaseFeeRequest {}
export interface QueryEipBaseFeeRequestProtoMsg {
  typeUrl: "/symphony.txfees.v1beta1.QueryEipBaseFeeRequest";
  value: Uint8Array;
}
export interface QueryEipBaseFeeRequestAmino {}
export interface QueryEipBaseFeeRequestAminoMsg {
  type: "/symphony.txfees.v1beta1.QueryEipBaseFeeRequest";
  value: QueryEipBaseFeeRequestAmino;
}
export interface QueryEipBaseFeeRequestSDKType {}
export interface QueryEipBaseFeeResponse {
  baseFee: string;
}
export interface QueryEipBaseFeeResponseProtoMsg {
  typeUrl: "/symphony.txfees.v1beta1.QueryEipBaseFeeResponse";
  value: Uint8Array;
}
export interface QueryEipBaseFeeResponseAmino {
  base_fee?: string;
}
export interface QueryEipBaseFeeResponseAminoMsg {
  type: "/symphony.txfees.v1beta1.QueryEipBaseFeeResponse";
  value: QueryEipBaseFeeResponseAmino;
}
export interface QueryEipBaseFeeResponseSDKType {
  base_fee: string;
}
function createBaseQueryFeeTokensRequest(): QueryFeeTokensRequest {
  return {};
}
export const QueryFeeTokensRequest = {
  typeUrl: "/symphony.txfees.v1beta1.QueryFeeTokensRequest",
  is(o: any): o is QueryFeeTokensRequest {
    return o && o.$typeUrl === QueryFeeTokensRequest.typeUrl;
  },
  isSDK(o: any): o is QueryFeeTokensRequestSDKType {
    return o && o.$typeUrl === QueryFeeTokensRequest.typeUrl;
  },
  isAmino(o: any): o is QueryFeeTokensRequestAmino {
    return o && o.$typeUrl === QueryFeeTokensRequest.typeUrl;
  },
  encode(_: QueryFeeTokensRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFeeTokensRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeeTokensRequest();
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
  fromPartial(_: Partial<QueryFeeTokensRequest>): QueryFeeTokensRequest {
    const message = createBaseQueryFeeTokensRequest();
    return message;
  },
  fromAmino(_: QueryFeeTokensRequestAmino): QueryFeeTokensRequest {
    const message = createBaseQueryFeeTokensRequest();
    return message;
  },
  toAmino(_: QueryFeeTokensRequest): QueryFeeTokensRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryFeeTokensRequestAminoMsg): QueryFeeTokensRequest {
    return QueryFeeTokensRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFeeTokensRequestProtoMsg): QueryFeeTokensRequest {
    return QueryFeeTokensRequest.decode(message.value);
  },
  toProto(message: QueryFeeTokensRequest): Uint8Array {
    return QueryFeeTokensRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryFeeTokensRequest): QueryFeeTokensRequestProtoMsg {
    return {
      typeUrl: "/symphony.txfees.v1beta1.QueryFeeTokensRequest",
      value: QueryFeeTokensRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryFeeTokensRequest.typeUrl, QueryFeeTokensRequest);
function createBaseQueryFeeTokensResponse(): QueryFeeTokensResponse {
  return {
    feeTokens: []
  };
}
export const QueryFeeTokensResponse = {
  typeUrl: "/symphony.txfees.v1beta1.QueryFeeTokensResponse",
  is(o: any): o is QueryFeeTokensResponse {
    return o && (o.$typeUrl === QueryFeeTokensResponse.typeUrl || Array.isArray(o.feeTokens) && (!o.feeTokens.length || typeof o.feeTokens[0] === "string"));
  },
  isSDK(o: any): o is QueryFeeTokensResponseSDKType {
    return o && (o.$typeUrl === QueryFeeTokensResponse.typeUrl || Array.isArray(o.fee_tokens) && (!o.fee_tokens.length || typeof o.fee_tokens[0] === "string"));
  },
  isAmino(o: any): o is QueryFeeTokensResponseAmino {
    return o && (o.$typeUrl === QueryFeeTokensResponse.typeUrl || Array.isArray(o.fee_tokens) && (!o.fee_tokens.length || typeof o.fee_tokens[0] === "string"));
  },
  encode(message: QueryFeeTokensResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.feeTokens) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFeeTokensResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeeTokensResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feeTokens.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryFeeTokensResponse>): QueryFeeTokensResponse {
    const message = createBaseQueryFeeTokensResponse();
    message.feeTokens = object.feeTokens?.map(e => e) || [];
    return message;
  },
  fromAmino(object: QueryFeeTokensResponseAmino): QueryFeeTokensResponse {
    const message = createBaseQueryFeeTokensResponse();
    message.feeTokens = object.fee_tokens?.map(e => e) || [];
    return message;
  },
  toAmino(message: QueryFeeTokensResponse): QueryFeeTokensResponseAmino {
    const obj: any = {};
    if (message.feeTokens) {
      obj.fee_tokens = message.feeTokens.map(e => e);
    } else {
      obj.fee_tokens = message.feeTokens;
    }
    return obj;
  },
  fromAminoMsg(object: QueryFeeTokensResponseAminoMsg): QueryFeeTokensResponse {
    return QueryFeeTokensResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFeeTokensResponseProtoMsg): QueryFeeTokensResponse {
    return QueryFeeTokensResponse.decode(message.value);
  },
  toProto(message: QueryFeeTokensResponse): Uint8Array {
    return QueryFeeTokensResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryFeeTokensResponse): QueryFeeTokensResponseProtoMsg {
    return {
      typeUrl: "/symphony.txfees.v1beta1.QueryFeeTokensResponse",
      value: QueryFeeTokensResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryFeeTokensResponse.typeUrl, QueryFeeTokensResponse);
function createBaseQueryDenomSpotPriceRequest(): QueryDenomSpotPriceRequest {
  return {
    denom: ""
  };
}
export const QueryDenomSpotPriceRequest = {
  typeUrl: "/symphony.txfees.v1beta1.QueryDenomSpotPriceRequest",
  is(o: any): o is QueryDenomSpotPriceRequest {
    return o && (o.$typeUrl === QueryDenomSpotPriceRequest.typeUrl || typeof o.denom === "string");
  },
  isSDK(o: any): o is QueryDenomSpotPriceRequestSDKType {
    return o && (o.$typeUrl === QueryDenomSpotPriceRequest.typeUrl || typeof o.denom === "string");
  },
  isAmino(o: any): o is QueryDenomSpotPriceRequestAmino {
    return o && (o.$typeUrl === QueryDenomSpotPriceRequest.typeUrl || typeof o.denom === "string");
  },
  encode(message: QueryDenomSpotPriceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomSpotPriceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomSpotPriceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDenomSpotPriceRequest>): QueryDenomSpotPriceRequest {
    const message = createBaseQueryDenomSpotPriceRequest();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryDenomSpotPriceRequestAmino): QueryDenomSpotPriceRequest {
    const message = createBaseQueryDenomSpotPriceRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryDenomSpotPriceRequest): QueryDenomSpotPriceRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryDenomSpotPriceRequestAminoMsg): QueryDenomSpotPriceRequest {
    return QueryDenomSpotPriceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDenomSpotPriceRequestProtoMsg): QueryDenomSpotPriceRequest {
    return QueryDenomSpotPriceRequest.decode(message.value);
  },
  toProto(message: QueryDenomSpotPriceRequest): Uint8Array {
    return QueryDenomSpotPriceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomSpotPriceRequest): QueryDenomSpotPriceRequestProtoMsg {
    return {
      typeUrl: "/symphony.txfees.v1beta1.QueryDenomSpotPriceRequest",
      value: QueryDenomSpotPriceRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryDenomSpotPriceRequest.typeUrl, QueryDenomSpotPriceRequest);
function createBaseQueryDenomSpotPriceResponse(): QueryDenomSpotPriceResponse {
  return {
    spotPrice: ""
  };
}
export const QueryDenomSpotPriceResponse = {
  typeUrl: "/symphony.txfees.v1beta1.QueryDenomSpotPriceResponse",
  is(o: any): o is QueryDenomSpotPriceResponse {
    return o && (o.$typeUrl === QueryDenomSpotPriceResponse.typeUrl || typeof o.spotPrice === "string");
  },
  isSDK(o: any): o is QueryDenomSpotPriceResponseSDKType {
    return o && (o.$typeUrl === QueryDenomSpotPriceResponse.typeUrl || typeof o.spot_price === "string");
  },
  isAmino(o: any): o is QueryDenomSpotPriceResponseAmino {
    return o && (o.$typeUrl === QueryDenomSpotPriceResponse.typeUrl || typeof o.spot_price === "string");
  },
  encode(message: QueryDenomSpotPriceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.spotPrice !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.spotPrice, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomSpotPriceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomSpotPriceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.spotPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDenomSpotPriceResponse>): QueryDenomSpotPriceResponse {
    const message = createBaseQueryDenomSpotPriceResponse();
    message.spotPrice = object.spotPrice ?? "";
    return message;
  },
  fromAmino(object: QueryDenomSpotPriceResponseAmino): QueryDenomSpotPriceResponse {
    const message = createBaseQueryDenomSpotPriceResponse();
    if (object.spot_price !== undefined && object.spot_price !== null) {
      message.spotPrice = object.spot_price;
    }
    return message;
  },
  toAmino(message: QueryDenomSpotPriceResponse): QueryDenomSpotPriceResponseAmino {
    const obj: any = {};
    obj.spot_price = message.spotPrice === "" ? undefined : message.spotPrice;
    return obj;
  },
  fromAminoMsg(object: QueryDenomSpotPriceResponseAminoMsg): QueryDenomSpotPriceResponse {
    return QueryDenomSpotPriceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDenomSpotPriceResponseProtoMsg): QueryDenomSpotPriceResponse {
    return QueryDenomSpotPriceResponse.decode(message.value);
  },
  toProto(message: QueryDenomSpotPriceResponse): Uint8Array {
    return QueryDenomSpotPriceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomSpotPriceResponse): QueryDenomSpotPriceResponseProtoMsg {
    return {
      typeUrl: "/symphony.txfees.v1beta1.QueryDenomSpotPriceResponse",
      value: QueryDenomSpotPriceResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryDenomSpotPriceResponse.typeUrl, QueryDenomSpotPriceResponse);
function createBaseQueryEipBaseFeeRequest(): QueryEipBaseFeeRequest {
  return {};
}
export const QueryEipBaseFeeRequest = {
  typeUrl: "/symphony.txfees.v1beta1.QueryEipBaseFeeRequest",
  is(o: any): o is QueryEipBaseFeeRequest {
    return o && o.$typeUrl === QueryEipBaseFeeRequest.typeUrl;
  },
  isSDK(o: any): o is QueryEipBaseFeeRequestSDKType {
    return o && o.$typeUrl === QueryEipBaseFeeRequest.typeUrl;
  },
  isAmino(o: any): o is QueryEipBaseFeeRequestAmino {
    return o && o.$typeUrl === QueryEipBaseFeeRequest.typeUrl;
  },
  encode(_: QueryEipBaseFeeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEipBaseFeeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEipBaseFeeRequest();
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
  fromPartial(_: Partial<QueryEipBaseFeeRequest>): QueryEipBaseFeeRequest {
    const message = createBaseQueryEipBaseFeeRequest();
    return message;
  },
  fromAmino(_: QueryEipBaseFeeRequestAmino): QueryEipBaseFeeRequest {
    const message = createBaseQueryEipBaseFeeRequest();
    return message;
  },
  toAmino(_: QueryEipBaseFeeRequest): QueryEipBaseFeeRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryEipBaseFeeRequestAminoMsg): QueryEipBaseFeeRequest {
    return QueryEipBaseFeeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEipBaseFeeRequestProtoMsg): QueryEipBaseFeeRequest {
    return QueryEipBaseFeeRequest.decode(message.value);
  },
  toProto(message: QueryEipBaseFeeRequest): Uint8Array {
    return QueryEipBaseFeeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryEipBaseFeeRequest): QueryEipBaseFeeRequestProtoMsg {
    return {
      typeUrl: "/symphony.txfees.v1beta1.QueryEipBaseFeeRequest",
      value: QueryEipBaseFeeRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryEipBaseFeeRequest.typeUrl, QueryEipBaseFeeRequest);
function createBaseQueryEipBaseFeeResponse(): QueryEipBaseFeeResponse {
  return {
    baseFee: ""
  };
}
export const QueryEipBaseFeeResponse = {
  typeUrl: "/symphony.txfees.v1beta1.QueryEipBaseFeeResponse",
  is(o: any): o is QueryEipBaseFeeResponse {
    return o && (o.$typeUrl === QueryEipBaseFeeResponse.typeUrl || typeof o.baseFee === "string");
  },
  isSDK(o: any): o is QueryEipBaseFeeResponseSDKType {
    return o && (o.$typeUrl === QueryEipBaseFeeResponse.typeUrl || typeof o.base_fee === "string");
  },
  isAmino(o: any): o is QueryEipBaseFeeResponseAmino {
    return o && (o.$typeUrl === QueryEipBaseFeeResponse.typeUrl || typeof o.base_fee === "string");
  },
  encode(message: QueryEipBaseFeeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.baseFee !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.baseFee, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEipBaseFeeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEipBaseFeeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseFee = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryEipBaseFeeResponse>): QueryEipBaseFeeResponse {
    const message = createBaseQueryEipBaseFeeResponse();
    message.baseFee = object.baseFee ?? "";
    return message;
  },
  fromAmino(object: QueryEipBaseFeeResponseAmino): QueryEipBaseFeeResponse {
    const message = createBaseQueryEipBaseFeeResponse();
    if (object.base_fee !== undefined && object.base_fee !== null) {
      message.baseFee = object.base_fee;
    }
    return message;
  },
  toAmino(message: QueryEipBaseFeeResponse): QueryEipBaseFeeResponseAmino {
    const obj: any = {};
    obj.base_fee = message.baseFee === "" ? undefined : message.baseFee;
    return obj;
  },
  fromAminoMsg(object: QueryEipBaseFeeResponseAminoMsg): QueryEipBaseFeeResponse {
    return QueryEipBaseFeeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEipBaseFeeResponseProtoMsg): QueryEipBaseFeeResponse {
    return QueryEipBaseFeeResponse.decode(message.value);
  },
  toProto(message: QueryEipBaseFeeResponse): Uint8Array {
    return QueryEipBaseFeeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryEipBaseFeeResponse): QueryEipBaseFeeResponseProtoMsg {
    return {
      typeUrl: "/symphony.txfees.v1beta1.QueryEipBaseFeeResponse",
      value: QueryEipBaseFeeResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryEipBaseFeeResponse.typeUrl, QueryEipBaseFeeResponse);