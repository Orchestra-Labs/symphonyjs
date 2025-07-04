//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType, UserStake, UserStakeAmino, UserStakeSDKType, StakingPool, StakingPoolAmino, StakingPoolSDKType, UnbondingInfo, UnbondingInfoAmino, UnbondingInfoSDKType } from "./stablestaking";
import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/symphony.stablestaking.v1beta1.QueryParamsRequest";
  value: Uint8Array;
}
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/symphony.stablestaking.v1beta1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
export interface QueryParamsRequestSDKType {}
export interface QueryParamsResponse {
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/symphony.stablestaking.v1beta1.QueryParamsResponse";
  value: Uint8Array;
}
export interface QueryParamsResponseAmino {
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/symphony.stablestaking.v1beta1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryUserStakeRequest {
  address: string;
  denom: string;
}
export interface QueryUserStakeRequestProtoMsg {
  typeUrl: "/symphony.stablestaking.v1beta1.QueryUserStakeRequest";
  value: Uint8Array;
}
export interface QueryUserStakeRequestAmino {
  address?: string;
  denom?: string;
}
export interface QueryUserStakeRequestAminoMsg {
  type: "/symphony.stablestaking.v1beta1.QueryUserStakeRequest";
  value: QueryUserStakeRequestAmino;
}
export interface QueryUserStakeRequestSDKType {
  address: string;
  denom: string;
}
export interface QueryUserStakeResponse {
  stakes?: UserStake;
}
export interface QueryUserStakeResponseProtoMsg {
  typeUrl: "/symphony.stablestaking.v1beta1.QueryUserStakeResponse";
  value: Uint8Array;
}
export interface QueryUserStakeResponseAmino {
  stakes?: UserStakeAmino;
}
export interface QueryUserStakeResponseAminoMsg {
  type: "/symphony.stablestaking.v1beta1.QueryUserStakeResponse";
  value: QueryUserStakeResponseAmino;
}
export interface QueryUserStakeResponseSDKType {
  stakes?: UserStakeSDKType;
}
export interface QueryUserTotalStakeRequest {
  address: string;
}
export interface QueryUserTotalStakeRequestProtoMsg {
  typeUrl: "/symphony.stablestaking.v1beta1.QueryUserTotalStakeRequest";
  value: Uint8Array;
}
export interface QueryUserTotalStakeRequestAmino {
  address?: string;
}
export interface QueryUserTotalStakeRequestAminoMsg {
  type: "/symphony.stablestaking.v1beta1.QueryUserTotalStakeRequest";
  value: QueryUserTotalStakeRequestAmino;
}
export interface QueryUserTotalStakeRequestSDKType {
  address: string;
}
export interface QueryUserTotalStakeResponse {
  stakes: DecCoin[];
}
export interface QueryUserTotalStakeResponseProtoMsg {
  typeUrl: "/symphony.stablestaking.v1beta1.QueryUserTotalStakeResponse";
  value: Uint8Array;
}
export interface QueryUserTotalStakeResponseAmino {
  stakes?: DecCoinAmino[];
}
export interface QueryUserTotalStakeResponseAminoMsg {
  type: "/symphony.stablestaking.v1beta1.QueryUserTotalStakeResponse";
  value: QueryUserTotalStakeResponseAmino;
}
export interface QueryUserTotalStakeResponseSDKType {
  stakes: DecCoinSDKType[];
}
export interface QueryPoolRequest {
  denom: string;
}
export interface QueryPoolRequestProtoMsg {
  typeUrl: "/symphony.stablestaking.v1beta1.QueryPoolRequest";
  value: Uint8Array;
}
export interface QueryPoolRequestAmino {
  denom?: string;
}
export interface QueryPoolRequestAminoMsg {
  type: "/symphony.stablestaking.v1beta1.QueryPoolRequest";
  value: QueryPoolRequestAmino;
}
export interface QueryPoolRequestSDKType {
  denom: string;
}
export interface QueryPoolResponse {
  pool?: StakingPool;
}
export interface QueryPoolResponseProtoMsg {
  typeUrl: "/symphony.stablestaking.v1beta1.QueryPoolResponse";
  value: Uint8Array;
}
export interface QueryPoolResponseAmino {
  pool?: StakingPoolAmino;
}
export interface QueryPoolResponseAminoMsg {
  type: "/symphony.stablestaking.v1beta1.QueryPoolResponse";
  value: QueryPoolResponseAmino;
}
export interface QueryPoolResponseSDKType {
  pool?: StakingPoolSDKType;
}
export interface QueryPoolsRequest {}
export interface QueryPoolsRequestProtoMsg {
  typeUrl: "/symphony.stablestaking.v1beta1.QueryPoolsRequest";
  value: Uint8Array;
}
export interface QueryPoolsRequestAmino {}
export interface QueryPoolsRequestAminoMsg {
  type: "/symphony.stablestaking.v1beta1.QueryPoolsRequest";
  value: QueryPoolsRequestAmino;
}
export interface QueryPoolsRequestSDKType {}
export interface QueryPoolsResponse {
  pools: StakingPool[];
}
export interface QueryPoolsResponseProtoMsg {
  typeUrl: "/symphony.stablestaking.v1beta1.QueryPoolsResponse";
  value: Uint8Array;
}
export interface QueryPoolsResponseAmino {
  pools?: StakingPoolAmino[];
}
export interface QueryPoolsResponseAminoMsg {
  type: "/symphony.stablestaking.v1beta1.QueryPoolsResponse";
  value: QueryPoolsResponseAmino;
}
export interface QueryPoolsResponseSDKType {
  pools: StakingPoolSDKType[];
}
export interface QueryUserUnbondingRequest {
  address: string;
  denom: string;
}
export interface QueryUserUnbondingRequestProtoMsg {
  typeUrl: "/symphony.stablestaking.v1beta1.QueryUserUnbondingRequest";
  value: Uint8Array;
}
export interface QueryUserUnbondingRequestAmino {
  address?: string;
  denom?: string;
}
export interface QueryUserUnbondingRequestAminoMsg {
  type: "/symphony.stablestaking.v1beta1.QueryUserUnbondingRequest";
  value: QueryUserUnbondingRequestAmino;
}
export interface QueryUserUnbondingRequestSDKType {
  address: string;
  denom: string;
}
export interface QueryUserUnbondingResponse {
  info?: UnbondingInfo;
}
export interface QueryUserUnbondingResponseProtoMsg {
  typeUrl: "/symphony.stablestaking.v1beta1.QueryUserUnbondingResponse";
  value: Uint8Array;
}
export interface QueryUserUnbondingResponseAmino {
  info?: UnbondingInfoAmino;
}
export interface QueryUserUnbondingResponseAminoMsg {
  type: "/symphony.stablestaking.v1beta1.QueryUserUnbondingResponse";
  value: QueryUserUnbondingResponseAmino;
}
export interface QueryUserUnbondingResponseSDKType {
  info?: UnbondingInfoSDKType;
}
export interface QueryUserTotalUnbondingRequest {
  address: string;
}
export interface QueryUserTotalUnbondingRequestProtoMsg {
  typeUrl: "/symphony.stablestaking.v1beta1.QueryUserTotalUnbondingRequest";
  value: Uint8Array;
}
export interface QueryUserTotalUnbondingRequestAmino {
  address?: string;
}
export interface QueryUserTotalUnbondingRequestAminoMsg {
  type: "/symphony.stablestaking.v1beta1.QueryUserTotalUnbondingRequest";
  value: QueryUserTotalUnbondingRequestAmino;
}
export interface QueryUserTotalUnbondingRequestSDKType {
  address: string;
}
export interface QueryUserTotalUnbondingResponse {
  info: UnbondingInfo[];
}
export interface QueryUserTotalUnbondingResponseProtoMsg {
  typeUrl: "/symphony.stablestaking.v1beta1.QueryUserTotalUnbondingResponse";
  value: Uint8Array;
}
export interface QueryUserTotalUnbondingResponseAmino {
  info?: UnbondingInfoAmino[];
}
export interface QueryUserTotalUnbondingResponseAminoMsg {
  type: "/symphony.stablestaking.v1beta1.QueryUserTotalUnbondingResponse";
  value: QueryUserTotalUnbondingResponseAmino;
}
export interface QueryUserTotalUnbondingResponseSDKType {
  info: UnbondingInfoSDKType[];
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/symphony.stablestaking.v1beta1.QueryParamsRequest",
  is(o: any): o is QueryParamsRequest {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryParamsRequestSDKType {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryParamsRequestAmino {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/symphony.stablestaking.v1beta1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsRequest.typeUrl, QueryParamsRequest);
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/symphony.stablestaking.v1beta1.QueryParamsResponse",
  is(o: any): o is QueryParamsResponse {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.is(o.params));
  },
  isSDK(o: any): o is QueryParamsResponseSDKType {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isSDK(o.params));
  },
  isAmino(o: any): o is QueryParamsResponseAmino {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isAmino(o.params));
  },
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
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
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/symphony.stablestaking.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsResponse.typeUrl, QueryParamsResponse);
function createBaseQueryUserStakeRequest(): QueryUserStakeRequest {
  return {
    address: "",
    denom: ""
  };
}
export const QueryUserStakeRequest = {
  typeUrl: "/symphony.stablestaking.v1beta1.QueryUserStakeRequest",
  is(o: any): o is QueryUserStakeRequest {
    return o && (o.$typeUrl === QueryUserStakeRequest.typeUrl || typeof o.address === "string" && typeof o.denom === "string");
  },
  isSDK(o: any): o is QueryUserStakeRequestSDKType {
    return o && (o.$typeUrl === QueryUserStakeRequest.typeUrl || typeof o.address === "string" && typeof o.denom === "string");
  },
  isAmino(o: any): o is QueryUserStakeRequestAmino {
    return o && (o.$typeUrl === QueryUserStakeRequest.typeUrl || typeof o.address === "string" && typeof o.denom === "string");
  },
  encode(message: QueryUserStakeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUserStakeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserStakeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryUserStakeRequest>): QueryUserStakeRequest {
    const message = createBaseQueryUserStakeRequest();
    message.address = object.address ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryUserStakeRequestAmino): QueryUserStakeRequest {
    const message = createBaseQueryUserStakeRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryUserStakeRequest): QueryUserStakeRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryUserStakeRequestAminoMsg): QueryUserStakeRequest {
    return QueryUserStakeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUserStakeRequestProtoMsg): QueryUserStakeRequest {
    return QueryUserStakeRequest.decode(message.value);
  },
  toProto(message: QueryUserStakeRequest): Uint8Array {
    return QueryUserStakeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryUserStakeRequest): QueryUserStakeRequestProtoMsg {
    return {
      typeUrl: "/symphony.stablestaking.v1beta1.QueryUserStakeRequest",
      value: QueryUserStakeRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryUserStakeRequest.typeUrl, QueryUserStakeRequest);
function createBaseQueryUserStakeResponse(): QueryUserStakeResponse {
  return {
    stakes: undefined
  };
}
export const QueryUserStakeResponse = {
  typeUrl: "/symphony.stablestaking.v1beta1.QueryUserStakeResponse",
  is(o: any): o is QueryUserStakeResponse {
    return o && o.$typeUrl === QueryUserStakeResponse.typeUrl;
  },
  isSDK(o: any): o is QueryUserStakeResponseSDKType {
    return o && o.$typeUrl === QueryUserStakeResponse.typeUrl;
  },
  isAmino(o: any): o is QueryUserStakeResponseAmino {
    return o && o.$typeUrl === QueryUserStakeResponse.typeUrl;
  },
  encode(message: QueryUserStakeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.stakes !== undefined) {
      UserStake.encode(message.stakes, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUserStakeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserStakeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stakes = UserStake.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryUserStakeResponse>): QueryUserStakeResponse {
    const message = createBaseQueryUserStakeResponse();
    message.stakes = object.stakes !== undefined && object.stakes !== null ? UserStake.fromPartial(object.stakes) : undefined;
    return message;
  },
  fromAmino(object: QueryUserStakeResponseAmino): QueryUserStakeResponse {
    const message = createBaseQueryUserStakeResponse();
    if (object.stakes !== undefined && object.stakes !== null) {
      message.stakes = UserStake.fromAmino(object.stakes);
    }
    return message;
  },
  toAmino(message: QueryUserStakeResponse): QueryUserStakeResponseAmino {
    const obj: any = {};
    obj.stakes = message.stakes ? UserStake.toAmino(message.stakes) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryUserStakeResponseAminoMsg): QueryUserStakeResponse {
    return QueryUserStakeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUserStakeResponseProtoMsg): QueryUserStakeResponse {
    return QueryUserStakeResponse.decode(message.value);
  },
  toProto(message: QueryUserStakeResponse): Uint8Array {
    return QueryUserStakeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryUserStakeResponse): QueryUserStakeResponseProtoMsg {
    return {
      typeUrl: "/symphony.stablestaking.v1beta1.QueryUserStakeResponse",
      value: QueryUserStakeResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryUserStakeResponse.typeUrl, QueryUserStakeResponse);
function createBaseQueryUserTotalStakeRequest(): QueryUserTotalStakeRequest {
  return {
    address: ""
  };
}
export const QueryUserTotalStakeRequest = {
  typeUrl: "/symphony.stablestaking.v1beta1.QueryUserTotalStakeRequest",
  is(o: any): o is QueryUserTotalStakeRequest {
    return o && (o.$typeUrl === QueryUserTotalStakeRequest.typeUrl || typeof o.address === "string");
  },
  isSDK(o: any): o is QueryUserTotalStakeRequestSDKType {
    return o && (o.$typeUrl === QueryUserTotalStakeRequest.typeUrl || typeof o.address === "string");
  },
  isAmino(o: any): o is QueryUserTotalStakeRequestAmino {
    return o && (o.$typeUrl === QueryUserTotalStakeRequest.typeUrl || typeof o.address === "string");
  },
  encode(message: QueryUserTotalStakeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUserTotalStakeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserTotalStakeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryUserTotalStakeRequest>): QueryUserTotalStakeRequest {
    const message = createBaseQueryUserTotalStakeRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryUserTotalStakeRequestAmino): QueryUserTotalStakeRequest {
    const message = createBaseQueryUserTotalStakeRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryUserTotalStakeRequest): QueryUserTotalStakeRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryUserTotalStakeRequestAminoMsg): QueryUserTotalStakeRequest {
    return QueryUserTotalStakeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUserTotalStakeRequestProtoMsg): QueryUserTotalStakeRequest {
    return QueryUserTotalStakeRequest.decode(message.value);
  },
  toProto(message: QueryUserTotalStakeRequest): Uint8Array {
    return QueryUserTotalStakeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryUserTotalStakeRequest): QueryUserTotalStakeRequestProtoMsg {
    return {
      typeUrl: "/symphony.stablestaking.v1beta1.QueryUserTotalStakeRequest",
      value: QueryUserTotalStakeRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryUserTotalStakeRequest.typeUrl, QueryUserTotalStakeRequest);
function createBaseQueryUserTotalStakeResponse(): QueryUserTotalStakeResponse {
  return {
    stakes: []
  };
}
export const QueryUserTotalStakeResponse = {
  typeUrl: "/symphony.stablestaking.v1beta1.QueryUserTotalStakeResponse",
  is(o: any): o is QueryUserTotalStakeResponse {
    return o && (o.$typeUrl === QueryUserTotalStakeResponse.typeUrl || Array.isArray(o.stakes) && (!o.stakes.length || DecCoin.is(o.stakes[0])));
  },
  isSDK(o: any): o is QueryUserTotalStakeResponseSDKType {
    return o && (o.$typeUrl === QueryUserTotalStakeResponse.typeUrl || Array.isArray(o.stakes) && (!o.stakes.length || DecCoin.isSDK(o.stakes[0])));
  },
  isAmino(o: any): o is QueryUserTotalStakeResponseAmino {
    return o && (o.$typeUrl === QueryUserTotalStakeResponse.typeUrl || Array.isArray(o.stakes) && (!o.stakes.length || DecCoin.isAmino(o.stakes[0])));
  },
  encode(message: QueryUserTotalStakeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.stakes) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUserTotalStakeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserTotalStakeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stakes.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryUserTotalStakeResponse>): QueryUserTotalStakeResponse {
    const message = createBaseQueryUserTotalStakeResponse();
    message.stakes = object.stakes?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryUserTotalStakeResponseAmino): QueryUserTotalStakeResponse {
    const message = createBaseQueryUserTotalStakeResponse();
    message.stakes = object.stakes?.map(e => DecCoin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryUserTotalStakeResponse): QueryUserTotalStakeResponseAmino {
    const obj: any = {};
    if (message.stakes) {
      obj.stakes = message.stakes.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.stakes = message.stakes;
    }
    return obj;
  },
  fromAminoMsg(object: QueryUserTotalStakeResponseAminoMsg): QueryUserTotalStakeResponse {
    return QueryUserTotalStakeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUserTotalStakeResponseProtoMsg): QueryUserTotalStakeResponse {
    return QueryUserTotalStakeResponse.decode(message.value);
  },
  toProto(message: QueryUserTotalStakeResponse): Uint8Array {
    return QueryUserTotalStakeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryUserTotalStakeResponse): QueryUserTotalStakeResponseProtoMsg {
    return {
      typeUrl: "/symphony.stablestaking.v1beta1.QueryUserTotalStakeResponse",
      value: QueryUserTotalStakeResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryUserTotalStakeResponse.typeUrl, QueryUserTotalStakeResponse);
function createBaseQueryPoolRequest(): QueryPoolRequest {
  return {
    denom: ""
  };
}
export const QueryPoolRequest = {
  typeUrl: "/symphony.stablestaking.v1beta1.QueryPoolRequest",
  is(o: any): o is QueryPoolRequest {
    return o && (o.$typeUrl === QueryPoolRequest.typeUrl || typeof o.denom === "string");
  },
  isSDK(o: any): o is QueryPoolRequestSDKType {
    return o && (o.$typeUrl === QueryPoolRequest.typeUrl || typeof o.denom === "string");
  },
  isAmino(o: any): o is QueryPoolRequestAmino {
    return o && (o.$typeUrl === QueryPoolRequest.typeUrl || typeof o.denom === "string");
  },
  encode(message: QueryPoolRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolRequest();
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
  fromPartial(object: Partial<QueryPoolRequest>): QueryPoolRequest {
    const message = createBaseQueryPoolRequest();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryPoolRequestAmino): QueryPoolRequest {
    const message = createBaseQueryPoolRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryPoolRequest): QueryPoolRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryPoolRequestAminoMsg): QueryPoolRequest {
    return QueryPoolRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolRequestProtoMsg): QueryPoolRequest {
    return QueryPoolRequest.decode(message.value);
  },
  toProto(message: QueryPoolRequest): Uint8Array {
    return QueryPoolRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolRequest): QueryPoolRequestProtoMsg {
    return {
      typeUrl: "/symphony.stablestaking.v1beta1.QueryPoolRequest",
      value: QueryPoolRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryPoolRequest.typeUrl, QueryPoolRequest);
function createBaseQueryPoolResponse(): QueryPoolResponse {
  return {
    pool: undefined
  };
}
export const QueryPoolResponse = {
  typeUrl: "/symphony.stablestaking.v1beta1.QueryPoolResponse",
  is(o: any): o is QueryPoolResponse {
    return o && o.$typeUrl === QueryPoolResponse.typeUrl;
  },
  isSDK(o: any): o is QueryPoolResponseSDKType {
    return o && o.$typeUrl === QueryPoolResponse.typeUrl;
  },
  isAmino(o: any): o is QueryPoolResponseAmino {
    return o && o.$typeUrl === QueryPoolResponse.typeUrl;
  },
  encode(message: QueryPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pool !== undefined) {
      StakingPool.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = StakingPool.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPoolResponse>): QueryPoolResponse {
    const message = createBaseQueryPoolResponse();
    message.pool = object.pool !== undefined && object.pool !== null ? StakingPool.fromPartial(object.pool) : undefined;
    return message;
  },
  fromAmino(object: QueryPoolResponseAmino): QueryPoolResponse {
    const message = createBaseQueryPoolResponse();
    if (object.pool !== undefined && object.pool !== null) {
      message.pool = StakingPool.fromAmino(object.pool);
    }
    return message;
  },
  toAmino(message: QueryPoolResponse): QueryPoolResponseAmino {
    const obj: any = {};
    obj.pool = message.pool ? StakingPool.toAmino(message.pool) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPoolResponseAminoMsg): QueryPoolResponse {
    return QueryPoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolResponseProtoMsg): QueryPoolResponse {
    return QueryPoolResponse.decode(message.value);
  },
  toProto(message: QueryPoolResponse): Uint8Array {
    return QueryPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolResponse): QueryPoolResponseProtoMsg {
    return {
      typeUrl: "/symphony.stablestaking.v1beta1.QueryPoolResponse",
      value: QueryPoolResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryPoolResponse.typeUrl, QueryPoolResponse);
function createBaseQueryPoolsRequest(): QueryPoolsRequest {
  return {};
}
export const QueryPoolsRequest = {
  typeUrl: "/symphony.stablestaking.v1beta1.QueryPoolsRequest",
  is(o: any): o is QueryPoolsRequest {
    return o && o.$typeUrl === QueryPoolsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryPoolsRequestSDKType {
    return o && o.$typeUrl === QueryPoolsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryPoolsRequestAmino {
    return o && o.$typeUrl === QueryPoolsRequest.typeUrl;
  },
  encode(_: QueryPoolsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolsRequest();
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
  fromPartial(_: Partial<QueryPoolsRequest>): QueryPoolsRequest {
    const message = createBaseQueryPoolsRequest();
    return message;
  },
  fromAmino(_: QueryPoolsRequestAmino): QueryPoolsRequest {
    const message = createBaseQueryPoolsRequest();
    return message;
  },
  toAmino(_: QueryPoolsRequest): QueryPoolsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryPoolsRequestAminoMsg): QueryPoolsRequest {
    return QueryPoolsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolsRequestProtoMsg): QueryPoolsRequest {
    return QueryPoolsRequest.decode(message.value);
  },
  toProto(message: QueryPoolsRequest): Uint8Array {
    return QueryPoolsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolsRequest): QueryPoolsRequestProtoMsg {
    return {
      typeUrl: "/symphony.stablestaking.v1beta1.QueryPoolsRequest",
      value: QueryPoolsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryPoolsRequest.typeUrl, QueryPoolsRequest);
function createBaseQueryPoolsResponse(): QueryPoolsResponse {
  return {
    pools: []
  };
}
export const QueryPoolsResponse = {
  typeUrl: "/symphony.stablestaking.v1beta1.QueryPoolsResponse",
  is(o: any): o is QueryPoolsResponse {
    return o && (o.$typeUrl === QueryPoolsResponse.typeUrl || Array.isArray(o.pools) && (!o.pools.length || StakingPool.is(o.pools[0])));
  },
  isSDK(o: any): o is QueryPoolsResponseSDKType {
    return o && (o.$typeUrl === QueryPoolsResponse.typeUrl || Array.isArray(o.pools) && (!o.pools.length || StakingPool.isSDK(o.pools[0])));
  },
  isAmino(o: any): o is QueryPoolsResponseAmino {
    return o && (o.$typeUrl === QueryPoolsResponse.typeUrl || Array.isArray(o.pools) && (!o.pools.length || StakingPool.isAmino(o.pools[0])));
  },
  encode(message: QueryPoolsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pools) {
      StakingPool.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pools.push(StakingPool.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPoolsResponse>): QueryPoolsResponse {
    const message = createBaseQueryPoolsResponse();
    message.pools = object.pools?.map(e => StakingPool.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryPoolsResponseAmino): QueryPoolsResponse {
    const message = createBaseQueryPoolsResponse();
    message.pools = object.pools?.map(e => StakingPool.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryPoolsResponse): QueryPoolsResponseAmino {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map(e => e ? StakingPool.toAmino(e) : undefined);
    } else {
      obj.pools = message.pools;
    }
    return obj;
  },
  fromAminoMsg(object: QueryPoolsResponseAminoMsg): QueryPoolsResponse {
    return QueryPoolsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolsResponseProtoMsg): QueryPoolsResponse {
    return QueryPoolsResponse.decode(message.value);
  },
  toProto(message: QueryPoolsResponse): Uint8Array {
    return QueryPoolsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolsResponse): QueryPoolsResponseProtoMsg {
    return {
      typeUrl: "/symphony.stablestaking.v1beta1.QueryPoolsResponse",
      value: QueryPoolsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryPoolsResponse.typeUrl, QueryPoolsResponse);
function createBaseQueryUserUnbondingRequest(): QueryUserUnbondingRequest {
  return {
    address: "",
    denom: ""
  };
}
export const QueryUserUnbondingRequest = {
  typeUrl: "/symphony.stablestaking.v1beta1.QueryUserUnbondingRequest",
  is(o: any): o is QueryUserUnbondingRequest {
    return o && (o.$typeUrl === QueryUserUnbondingRequest.typeUrl || typeof o.address === "string" && typeof o.denom === "string");
  },
  isSDK(o: any): o is QueryUserUnbondingRequestSDKType {
    return o && (o.$typeUrl === QueryUserUnbondingRequest.typeUrl || typeof o.address === "string" && typeof o.denom === "string");
  },
  isAmino(o: any): o is QueryUserUnbondingRequestAmino {
    return o && (o.$typeUrl === QueryUserUnbondingRequest.typeUrl || typeof o.address === "string" && typeof o.denom === "string");
  },
  encode(message: QueryUserUnbondingRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUserUnbondingRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserUnbondingRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryUserUnbondingRequest>): QueryUserUnbondingRequest {
    const message = createBaseQueryUserUnbondingRequest();
    message.address = object.address ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryUserUnbondingRequestAmino): QueryUserUnbondingRequest {
    const message = createBaseQueryUserUnbondingRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryUserUnbondingRequest): QueryUserUnbondingRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryUserUnbondingRequestAminoMsg): QueryUserUnbondingRequest {
    return QueryUserUnbondingRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUserUnbondingRequestProtoMsg): QueryUserUnbondingRequest {
    return QueryUserUnbondingRequest.decode(message.value);
  },
  toProto(message: QueryUserUnbondingRequest): Uint8Array {
    return QueryUserUnbondingRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryUserUnbondingRequest): QueryUserUnbondingRequestProtoMsg {
    return {
      typeUrl: "/symphony.stablestaking.v1beta1.QueryUserUnbondingRequest",
      value: QueryUserUnbondingRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryUserUnbondingRequest.typeUrl, QueryUserUnbondingRequest);
function createBaseQueryUserUnbondingResponse(): QueryUserUnbondingResponse {
  return {
    info: undefined
  };
}
export const QueryUserUnbondingResponse = {
  typeUrl: "/symphony.stablestaking.v1beta1.QueryUserUnbondingResponse",
  is(o: any): o is QueryUserUnbondingResponse {
    return o && o.$typeUrl === QueryUserUnbondingResponse.typeUrl;
  },
  isSDK(o: any): o is QueryUserUnbondingResponseSDKType {
    return o && o.$typeUrl === QueryUserUnbondingResponse.typeUrl;
  },
  isAmino(o: any): o is QueryUserUnbondingResponseAmino {
    return o && o.$typeUrl === QueryUserUnbondingResponse.typeUrl;
  },
  encode(message: QueryUserUnbondingResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.info !== undefined) {
      UnbondingInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUserUnbondingResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserUnbondingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.info = UnbondingInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryUserUnbondingResponse>): QueryUserUnbondingResponse {
    const message = createBaseQueryUserUnbondingResponse();
    message.info = object.info !== undefined && object.info !== null ? UnbondingInfo.fromPartial(object.info) : undefined;
    return message;
  },
  fromAmino(object: QueryUserUnbondingResponseAmino): QueryUserUnbondingResponse {
    const message = createBaseQueryUserUnbondingResponse();
    if (object.info !== undefined && object.info !== null) {
      message.info = UnbondingInfo.fromAmino(object.info);
    }
    return message;
  },
  toAmino(message: QueryUserUnbondingResponse): QueryUserUnbondingResponseAmino {
    const obj: any = {};
    obj.info = message.info ? UnbondingInfo.toAmino(message.info) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryUserUnbondingResponseAminoMsg): QueryUserUnbondingResponse {
    return QueryUserUnbondingResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUserUnbondingResponseProtoMsg): QueryUserUnbondingResponse {
    return QueryUserUnbondingResponse.decode(message.value);
  },
  toProto(message: QueryUserUnbondingResponse): Uint8Array {
    return QueryUserUnbondingResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryUserUnbondingResponse): QueryUserUnbondingResponseProtoMsg {
    return {
      typeUrl: "/symphony.stablestaking.v1beta1.QueryUserUnbondingResponse",
      value: QueryUserUnbondingResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryUserUnbondingResponse.typeUrl, QueryUserUnbondingResponse);
function createBaseQueryUserTotalUnbondingRequest(): QueryUserTotalUnbondingRequest {
  return {
    address: ""
  };
}
export const QueryUserTotalUnbondingRequest = {
  typeUrl: "/symphony.stablestaking.v1beta1.QueryUserTotalUnbondingRequest",
  is(o: any): o is QueryUserTotalUnbondingRequest {
    return o && (o.$typeUrl === QueryUserTotalUnbondingRequest.typeUrl || typeof o.address === "string");
  },
  isSDK(o: any): o is QueryUserTotalUnbondingRequestSDKType {
    return o && (o.$typeUrl === QueryUserTotalUnbondingRequest.typeUrl || typeof o.address === "string");
  },
  isAmino(o: any): o is QueryUserTotalUnbondingRequestAmino {
    return o && (o.$typeUrl === QueryUserTotalUnbondingRequest.typeUrl || typeof o.address === "string");
  },
  encode(message: QueryUserTotalUnbondingRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUserTotalUnbondingRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserTotalUnbondingRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryUserTotalUnbondingRequest>): QueryUserTotalUnbondingRequest {
    const message = createBaseQueryUserTotalUnbondingRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryUserTotalUnbondingRequestAmino): QueryUserTotalUnbondingRequest {
    const message = createBaseQueryUserTotalUnbondingRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryUserTotalUnbondingRequest): QueryUserTotalUnbondingRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryUserTotalUnbondingRequestAminoMsg): QueryUserTotalUnbondingRequest {
    return QueryUserTotalUnbondingRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUserTotalUnbondingRequestProtoMsg): QueryUserTotalUnbondingRequest {
    return QueryUserTotalUnbondingRequest.decode(message.value);
  },
  toProto(message: QueryUserTotalUnbondingRequest): Uint8Array {
    return QueryUserTotalUnbondingRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryUserTotalUnbondingRequest): QueryUserTotalUnbondingRequestProtoMsg {
    return {
      typeUrl: "/symphony.stablestaking.v1beta1.QueryUserTotalUnbondingRequest",
      value: QueryUserTotalUnbondingRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryUserTotalUnbondingRequest.typeUrl, QueryUserTotalUnbondingRequest);
function createBaseQueryUserTotalUnbondingResponse(): QueryUserTotalUnbondingResponse {
  return {
    info: []
  };
}
export const QueryUserTotalUnbondingResponse = {
  typeUrl: "/symphony.stablestaking.v1beta1.QueryUserTotalUnbondingResponse",
  is(o: any): o is QueryUserTotalUnbondingResponse {
    return o && (o.$typeUrl === QueryUserTotalUnbondingResponse.typeUrl || Array.isArray(o.info) && (!o.info.length || UnbondingInfo.is(o.info[0])));
  },
  isSDK(o: any): o is QueryUserTotalUnbondingResponseSDKType {
    return o && (o.$typeUrl === QueryUserTotalUnbondingResponse.typeUrl || Array.isArray(o.info) && (!o.info.length || UnbondingInfo.isSDK(o.info[0])));
  },
  isAmino(o: any): o is QueryUserTotalUnbondingResponseAmino {
    return o && (o.$typeUrl === QueryUserTotalUnbondingResponse.typeUrl || Array.isArray(o.info) && (!o.info.length || UnbondingInfo.isAmino(o.info[0])));
  },
  encode(message: QueryUserTotalUnbondingResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.info) {
      UnbondingInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUserTotalUnbondingResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserTotalUnbondingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.info.push(UnbondingInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryUserTotalUnbondingResponse>): QueryUserTotalUnbondingResponse {
    const message = createBaseQueryUserTotalUnbondingResponse();
    message.info = object.info?.map(e => UnbondingInfo.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryUserTotalUnbondingResponseAmino): QueryUserTotalUnbondingResponse {
    const message = createBaseQueryUserTotalUnbondingResponse();
    message.info = object.info?.map(e => UnbondingInfo.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryUserTotalUnbondingResponse): QueryUserTotalUnbondingResponseAmino {
    const obj: any = {};
    if (message.info) {
      obj.info = message.info.map(e => e ? UnbondingInfo.toAmino(e) : undefined);
    } else {
      obj.info = message.info;
    }
    return obj;
  },
  fromAminoMsg(object: QueryUserTotalUnbondingResponseAminoMsg): QueryUserTotalUnbondingResponse {
    return QueryUserTotalUnbondingResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUserTotalUnbondingResponseProtoMsg): QueryUserTotalUnbondingResponse {
    return QueryUserTotalUnbondingResponse.decode(message.value);
  },
  toProto(message: QueryUserTotalUnbondingResponse): Uint8Array {
    return QueryUserTotalUnbondingResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryUserTotalUnbondingResponse): QueryUserTotalUnbondingResponseProtoMsg {
    return {
      typeUrl: "/symphony.stablestaking.v1beta1.QueryUserTotalUnbondingResponse",
      value: QueryUserTotalUnbondingResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryUserTotalUnbondingResponse.typeUrl, QueryUserTotalUnbondingResponse);