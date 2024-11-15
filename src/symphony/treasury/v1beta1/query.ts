//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from './treasury';
import { BinaryReader, BinaryWriter } from '../../../binary';
import { GlobalDecoderRegistry } from '../../../registry';
import { Decimal } from '@cosmjs/math';
/** QueryTaxRateRequest is the request type for the Query/TaxRate RPC method. */
export interface QueryTaxRateRequest {}
export interface QueryTaxRateRequestProtoMsg {
  typeUrl: '/symphony.treasury.v1beta1.QueryTaxRateRequest';
  value: Uint8Array;
}
/** QueryTaxRateRequest is the request type for the Query/TaxRate RPC method. */
export interface QueryTaxRateRequestAmino {}
export interface QueryTaxRateRequestAminoMsg {
  type: '/symphony.treasury.v1beta1.QueryTaxRateRequest';
  value: QueryTaxRateRequestAmino;
}
/** QueryTaxRateRequest is the request type for the Query/TaxRate RPC method. */
export interface QueryTaxRateRequestSDKType {}
/**
 * QueryTaxRateResponse is response type for the
 * Query/TaxRate RPC method.
 */
export interface QueryTaxRateResponse {
  taxRate: string;
}
export interface QueryTaxRateResponseProtoMsg {
  typeUrl: '/symphony.treasury.v1beta1.QueryTaxRateResponse';
  value: Uint8Array;
}
/**
 * QueryTaxRateResponse is response type for the
 * Query/TaxRate RPC method.
 */
export interface QueryTaxRateResponseAmino {
  tax_rate?: string;
}
export interface QueryTaxRateResponseAminoMsg {
  type: '/symphony.treasury.v1beta1.QueryTaxRateResponse';
  value: QueryTaxRateResponseAmino;
}
/**
 * QueryTaxRateResponse is response type for the
 * Query/TaxRate RPC method.
 */
export interface QueryTaxRateResponseSDKType {
  tax_rate: string;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: '/symphony.treasury.v1beta1.QueryParamsRequest';
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: '/symphony.treasury.v1beta1.QueryParamsRequest';
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: '/symphony.treasury.v1beta1.QueryParamsResponse';
  value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params defines the parameters of the module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: '/symphony.treasury.v1beta1.QueryParamsResponse';
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
function createBaseQueryTaxRateRequest(): QueryTaxRateRequest {
  return {};
}
export const QueryTaxRateRequest = {
  typeUrl: '/symphony.treasury.v1beta1.QueryTaxRateRequest',
  is(o: any): o is QueryTaxRateRequest {
    return o && o.$typeUrl === QueryTaxRateRequest.typeUrl;
  },
  isSDK(o: any): o is QueryTaxRateRequestSDKType {
    return o && o.$typeUrl === QueryTaxRateRequest.typeUrl;
  },
  isAmino(o: any): o is QueryTaxRateRequestAmino {
    return o && o.$typeUrl === QueryTaxRateRequest.typeUrl;
  },
  encode(
    _: QueryTaxRateRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): QueryTaxRateRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTaxRateRequest();
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
  fromPartial(_: Partial<QueryTaxRateRequest>): QueryTaxRateRequest {
    const message = createBaseQueryTaxRateRequest();
    return message;
  },
  fromAmino(_: QueryTaxRateRequestAmino): QueryTaxRateRequest {
    const message = createBaseQueryTaxRateRequest();
    return message;
  },
  toAmino(_: QueryTaxRateRequest): QueryTaxRateRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryTaxRateRequestAminoMsg): QueryTaxRateRequest {
    return QueryTaxRateRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTaxRateRequestProtoMsg): QueryTaxRateRequest {
    return QueryTaxRateRequest.decode(message.value);
  },
  toProto(message: QueryTaxRateRequest): Uint8Array {
    return QueryTaxRateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTaxRateRequest): QueryTaxRateRequestProtoMsg {
    return {
      typeUrl: '/symphony.treasury.v1beta1.QueryTaxRateRequest',
      value: QueryTaxRateRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  QueryTaxRateRequest.typeUrl,
  QueryTaxRateRequest,
);
function createBaseQueryTaxRateResponse(): QueryTaxRateResponse {
  return {
    taxRate: '',
  };
}
export const QueryTaxRateResponse = {
  typeUrl: '/symphony.treasury.v1beta1.QueryTaxRateResponse',
  is(o: any): o is QueryTaxRateResponse {
    return (
      o &&
      (o.$typeUrl === QueryTaxRateResponse.typeUrl ||
        typeof o.taxRate === 'string')
    );
  },
  isSDK(o: any): o is QueryTaxRateResponseSDKType {
    return (
      o &&
      (o.$typeUrl === QueryTaxRateResponse.typeUrl ||
        typeof o.tax_rate === 'string')
    );
  },
  isAmino(o: any): o is QueryTaxRateResponseAmino {
    return (
      o &&
      (o.$typeUrl === QueryTaxRateResponse.typeUrl ||
        typeof o.tax_rate === 'string')
    );
  },
  encode(
    message: QueryTaxRateResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.taxRate !== '') {
      writer
        .uint32(10)
        .string(Decimal.fromUserInput(message.taxRate, 18).atomics);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): QueryTaxRateResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTaxRateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.taxRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryTaxRateResponse>): QueryTaxRateResponse {
    const message = createBaseQueryTaxRateResponse();
    message.taxRate = object.taxRate ?? '';
    return message;
  },
  fromAmino(object: QueryTaxRateResponseAmino): QueryTaxRateResponse {
    const message = createBaseQueryTaxRateResponse();
    if (object.tax_rate !== undefined && object.tax_rate !== null) {
      message.taxRate = object.tax_rate;
    }
    return message;
  },
  toAmino(message: QueryTaxRateResponse): QueryTaxRateResponseAmino {
    const obj: any = {};
    obj.tax_rate = message.taxRate === '' ? undefined : message.taxRate;
    return obj;
  },
  fromAminoMsg(object: QueryTaxRateResponseAminoMsg): QueryTaxRateResponse {
    return QueryTaxRateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTaxRateResponseProtoMsg): QueryTaxRateResponse {
    return QueryTaxRateResponse.decode(message.value);
  },
  toProto(message: QueryTaxRateResponse): Uint8Array {
    return QueryTaxRateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTaxRateResponse): QueryTaxRateResponseProtoMsg {
    return {
      typeUrl: '/symphony.treasury.v1beta1.QueryTaxRateResponse',
      value: QueryTaxRateResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  QueryTaxRateResponse.typeUrl,
  QueryTaxRateResponse,
);
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: '/symphony.treasury.v1beta1.QueryParamsRequest',
  is(o: any): o is QueryParamsRequest {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryParamsRequestSDKType {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryParamsRequestAmino {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  encode(
    _: QueryParamsRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): QueryParamsRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
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
      typeUrl: '/symphony.treasury.v1beta1.QueryParamsRequest',
      value: QueryParamsRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(QueryParamsRequest.typeUrl, QueryParamsRequest);
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({}),
  };
}
export const QueryParamsResponse = {
  typeUrl: '/symphony.treasury.v1beta1.QueryParamsResponse',
  is(o: any): o is QueryParamsResponse {
    return (
      o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.is(o.params))
    );
  },
  isSDK(o: any): o is QueryParamsResponseSDKType {
    return (
      o &&
      (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isSDK(o.params))
    );
  },
  isAmino(o: any): o is QueryParamsResponseAmino {
    return (
      o &&
      (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isAmino(o.params))
    );
  },
  encode(
    message: QueryParamsResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): QueryParamsResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
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
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
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
      typeUrl: '/symphony.treasury.v1beta1.QueryParamsResponse',
      value: QueryParamsResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  QueryParamsResponse.typeUrl,
  QueryParamsResponse,
);
