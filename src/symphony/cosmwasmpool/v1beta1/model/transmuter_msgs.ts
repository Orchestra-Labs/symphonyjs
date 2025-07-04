//@ts-nocheck
import { BinaryReader, BinaryWriter } from '../../../../binary';
import { GlobalDecoderRegistry } from '../../../../registry';
/**
 * ===================== JoinPoolExecuteMsg
 * @name EmptyRequest
 * @package symphony.cosmwasmpool.v1beta1
 * @see proto type: symphony.cosmwasmpool.v1beta1.EmptyRequest
 */
export interface EmptyRequest {}
export interface EmptyRequestProtoMsg {
  typeUrl: '/symphony.cosmwasmpool.v1beta1.EmptyRequest';
  value: Uint8Array;
}
/**
 * ===================== JoinPoolExecuteMsg
 * @name EmptyRequestAmino
 * @package symphony.cosmwasmpool.v1beta1
 * @see proto type: symphony.cosmwasmpool.v1beta1.EmptyRequest
 */
export interface EmptyRequestAmino {}
export interface EmptyRequestAminoMsg {
  type: '/symphony.cosmwasmpool.v1beta1.EmptyRequest';
  value: EmptyRequestAmino;
}
/**
 * ===================== JoinPoolExecuteMsg
 * @name EmptyRequestSDKType
 * @package symphony.cosmwasmpool.v1beta1
 * @see proto type: symphony.cosmwasmpool.v1beta1.EmptyRequest
 */
export interface EmptyRequestSDKType {}
/**
 * @name JoinPoolExecuteMsgRequest
 * @package symphony.cosmwasmpool.v1beta1
 * @see proto type: symphony.cosmwasmpool.v1beta1.JoinPoolExecuteMsgRequest
 */
export interface JoinPoolExecuteMsgRequest {
  /**
   * join_pool is the structure containing all request fields of the join pool
   * execute message.
   */
  joinPool: EmptyRequest;
}
export interface JoinPoolExecuteMsgRequestProtoMsg {
  typeUrl: '/symphony.cosmwasmpool.v1beta1.JoinPoolExecuteMsgRequest';
  value: Uint8Array;
}
/**
 * @name JoinPoolExecuteMsgRequestAmino
 * @package symphony.cosmwasmpool.v1beta1
 * @see proto type: symphony.cosmwasmpool.v1beta1.JoinPoolExecuteMsgRequest
 */
export interface JoinPoolExecuteMsgRequestAmino {
  /**
   * join_pool is the structure containing all request fields of the join pool
   * execute message.
   */
  join_pool?: EmptyRequestAmino;
}
export interface JoinPoolExecuteMsgRequestAminoMsg {
  type: '/symphony.cosmwasmpool.v1beta1.JoinPoolExecuteMsgRequest';
  value: JoinPoolExecuteMsgRequestAmino;
}
/**
 * @name JoinPoolExecuteMsgRequestSDKType
 * @package symphony.cosmwasmpool.v1beta1
 * @see proto type: symphony.cosmwasmpool.v1beta1.JoinPoolExecuteMsgRequest
 */
export interface JoinPoolExecuteMsgRequestSDKType {
  join_pool: EmptyRequestSDKType;
}
/**
 * @name JoinPoolExecuteMsgResponse
 * @package symphony.cosmwasmpool.v1beta1
 * @see proto type: symphony.cosmwasmpool.v1beta1.JoinPoolExecuteMsgResponse
 */
export interface JoinPoolExecuteMsgResponse {}
export interface JoinPoolExecuteMsgResponseProtoMsg {
  typeUrl: '/symphony.cosmwasmpool.v1beta1.JoinPoolExecuteMsgResponse';
  value: Uint8Array;
}
/**
 * @name JoinPoolExecuteMsgResponseAmino
 * @package symphony.cosmwasmpool.v1beta1
 * @see proto type: symphony.cosmwasmpool.v1beta1.JoinPoolExecuteMsgResponse
 */
export interface JoinPoolExecuteMsgResponseAmino {}
export interface JoinPoolExecuteMsgResponseAminoMsg {
  type: '/symphony.cosmwasmpool.v1beta1.JoinPoolExecuteMsgResponse';
  value: JoinPoolExecuteMsgResponseAmino;
}
/**
 * @name JoinPoolExecuteMsgResponseSDKType
 * @package symphony.cosmwasmpool.v1beta1
 * @see proto type: symphony.cosmwasmpool.v1beta1.JoinPoolExecuteMsgResponse
 */
export interface JoinPoolExecuteMsgResponseSDKType {}
/**
 * ===================== ExitPoolExecuteMsg
 * @name ExitPoolExecuteMsgRequest
 * @package symphony.cosmwasmpool.v1beta1
 * @see proto type: symphony.cosmwasmpool.v1beta1.ExitPoolExecuteMsgRequest
 */
export interface ExitPoolExecuteMsgRequest {
  /**
   * exit_pool is the structure containing all request fields of the exit pool
   * execute message.
   */
  exitPool: EmptyRequest;
}
export interface ExitPoolExecuteMsgRequestProtoMsg {
  typeUrl: '/symphony.cosmwasmpool.v1beta1.ExitPoolExecuteMsgRequest';
  value: Uint8Array;
}
/**
 * ===================== ExitPoolExecuteMsg
 * @name ExitPoolExecuteMsgRequestAmino
 * @package symphony.cosmwasmpool.v1beta1
 * @see proto type: symphony.cosmwasmpool.v1beta1.ExitPoolExecuteMsgRequest
 */
export interface ExitPoolExecuteMsgRequestAmino {
  /**
   * exit_pool is the structure containing all request fields of the exit pool
   * execute message.
   */
  exit_pool?: EmptyRequestAmino;
}
export interface ExitPoolExecuteMsgRequestAminoMsg {
  type: '/symphony.cosmwasmpool.v1beta1.ExitPoolExecuteMsgRequest';
  value: ExitPoolExecuteMsgRequestAmino;
}
/**
 * ===================== ExitPoolExecuteMsg
 * @name ExitPoolExecuteMsgRequestSDKType
 * @package symphony.cosmwasmpool.v1beta1
 * @see proto type: symphony.cosmwasmpool.v1beta1.ExitPoolExecuteMsgRequest
 */
export interface ExitPoolExecuteMsgRequestSDKType {
  exit_pool: EmptyRequestSDKType;
}
/**
 * @name ExitPoolExecuteMsgResponse
 * @package symphony.cosmwasmpool.v1beta1
 * @see proto type: symphony.cosmwasmpool.v1beta1.ExitPoolExecuteMsgResponse
 */
export interface ExitPoolExecuteMsgResponse {}
export interface ExitPoolExecuteMsgResponseProtoMsg {
  typeUrl: '/symphony.cosmwasmpool.v1beta1.ExitPoolExecuteMsgResponse';
  value: Uint8Array;
}
/**
 * @name ExitPoolExecuteMsgResponseAmino
 * @package symphony.cosmwasmpool.v1beta1
 * @see proto type: symphony.cosmwasmpool.v1beta1.ExitPoolExecuteMsgResponse
 */
export interface ExitPoolExecuteMsgResponseAmino {}
export interface ExitPoolExecuteMsgResponseAminoMsg {
  type: '/symphony.cosmwasmpool.v1beta1.ExitPoolExecuteMsgResponse';
  value: ExitPoolExecuteMsgResponseAmino;
}
/**
 * @name ExitPoolExecuteMsgResponseSDKType
 * @package symphony.cosmwasmpool.v1beta1
 * @see proto type: symphony.cosmwasmpool.v1beta1.ExitPoolExecuteMsgResponse
 */
export interface ExitPoolExecuteMsgResponseSDKType {}
function createBaseEmptyRequest(): EmptyRequest {
  return {};
}
/**
 * ===================== JoinPoolExecuteMsg
 * @name EmptyRequest
 * @package symphony.cosmwasmpool.v1beta1
 * @see proto type: symphony.cosmwasmpool.v1beta1.EmptyRequest
 */
export const EmptyRequest = {
  typeUrl: '/symphony.cosmwasmpool.v1beta1.EmptyRequest',
  is(o: any): o is EmptyRequest {
    return o && o.$typeUrl === EmptyRequest.typeUrl;
  },
  isSDK(o: any): o is EmptyRequestSDKType {
    return o && o.$typeUrl === EmptyRequest.typeUrl;
  },
  isAmino(o: any): o is EmptyRequestAmino {
    return o && o.$typeUrl === EmptyRequest.typeUrl;
  },
  encode(
    _: EmptyRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EmptyRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEmptyRequest();
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
  fromPartial(_: Partial<EmptyRequest>): EmptyRequest {
    const message = createBaseEmptyRequest();
    return message;
  },
  fromAmino(_: EmptyRequestAmino): EmptyRequest {
    const message = createBaseEmptyRequest();
    return message;
  },
  toAmino(_: EmptyRequest): EmptyRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: EmptyRequestAminoMsg): EmptyRequest {
    return EmptyRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: EmptyRequestProtoMsg): EmptyRequest {
    return EmptyRequest.decode(message.value);
  },
  toProto(message: EmptyRequest): Uint8Array {
    return EmptyRequest.encode(message).finish();
  },
  toProtoMsg(message: EmptyRequest): EmptyRequestProtoMsg {
    return {
      typeUrl: '/symphony.cosmwasmpool.v1beta1.EmptyRequest',
      value: EmptyRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(EmptyRequest.typeUrl, EmptyRequest);
function createBaseJoinPoolExecuteMsgRequest(): JoinPoolExecuteMsgRequest {
  return {
    joinPool: EmptyRequest.fromPartial({}),
  };
}
/**
 * @name JoinPoolExecuteMsgRequest
 * @package symphony.cosmwasmpool.v1beta1
 * @see proto type: symphony.cosmwasmpool.v1beta1.JoinPoolExecuteMsgRequest
 */
export const JoinPoolExecuteMsgRequest = {
  typeUrl: '/symphony.cosmwasmpool.v1beta1.JoinPoolExecuteMsgRequest',
  is(o: any): o is JoinPoolExecuteMsgRequest {
    return (
      o &&
      (o.$typeUrl === JoinPoolExecuteMsgRequest.typeUrl ||
        EmptyRequest.is(o.joinPool))
    );
  },
  isSDK(o: any): o is JoinPoolExecuteMsgRequestSDKType {
    return (
      o &&
      (o.$typeUrl === JoinPoolExecuteMsgRequest.typeUrl ||
        EmptyRequest.isSDK(o.join_pool))
    );
  },
  isAmino(o: any): o is JoinPoolExecuteMsgRequestAmino {
    return (
      o &&
      (o.$typeUrl === JoinPoolExecuteMsgRequest.typeUrl ||
        EmptyRequest.isAmino(o.join_pool))
    );
  },
  encode(
    message: JoinPoolExecuteMsgRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.joinPool !== undefined) {
      EmptyRequest.encode(message.joinPool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): JoinPoolExecuteMsgRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseJoinPoolExecuteMsgRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.joinPool = EmptyRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(
    object: Partial<JoinPoolExecuteMsgRequest>,
  ): JoinPoolExecuteMsgRequest {
    const message = createBaseJoinPoolExecuteMsgRequest();
    message.joinPool =
      object.joinPool !== undefined && object.joinPool !== null
        ? EmptyRequest.fromPartial(object.joinPool)
        : undefined;
    return message;
  },
  fromAmino(object: JoinPoolExecuteMsgRequestAmino): JoinPoolExecuteMsgRequest {
    const message = createBaseJoinPoolExecuteMsgRequest();
    if (object.join_pool !== undefined && object.join_pool !== null) {
      message.joinPool = EmptyRequest.fromAmino(object.join_pool);
    }
    return message;
  },
  toAmino(message: JoinPoolExecuteMsgRequest): JoinPoolExecuteMsgRequestAmino {
    const obj: any = {};
    obj.join_pool = message.joinPool
      ? EmptyRequest.toAmino(message.joinPool)
      : undefined;
    return obj;
  },
  fromAminoMsg(
    object: JoinPoolExecuteMsgRequestAminoMsg,
  ): JoinPoolExecuteMsgRequest {
    return JoinPoolExecuteMsgRequest.fromAmino(object.value);
  },
  fromProtoMsg(
    message: JoinPoolExecuteMsgRequestProtoMsg,
  ): JoinPoolExecuteMsgRequest {
    return JoinPoolExecuteMsgRequest.decode(message.value);
  },
  toProto(message: JoinPoolExecuteMsgRequest): Uint8Array {
    return JoinPoolExecuteMsgRequest.encode(message).finish();
  },
  toProtoMsg(
    message: JoinPoolExecuteMsgRequest,
  ): JoinPoolExecuteMsgRequestProtoMsg {
    return {
      typeUrl: '/symphony.cosmwasmpool.v1beta1.JoinPoolExecuteMsgRequest',
      value: JoinPoolExecuteMsgRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  JoinPoolExecuteMsgRequest.typeUrl,
  JoinPoolExecuteMsgRequest,
);
function createBaseJoinPoolExecuteMsgResponse(): JoinPoolExecuteMsgResponse {
  return {};
}
/**
 * @name JoinPoolExecuteMsgResponse
 * @package symphony.cosmwasmpool.v1beta1
 * @see proto type: symphony.cosmwasmpool.v1beta1.JoinPoolExecuteMsgResponse
 */
export const JoinPoolExecuteMsgResponse = {
  typeUrl: '/symphony.cosmwasmpool.v1beta1.JoinPoolExecuteMsgResponse',
  is(o: any): o is JoinPoolExecuteMsgResponse {
    return o && o.$typeUrl === JoinPoolExecuteMsgResponse.typeUrl;
  },
  isSDK(o: any): o is JoinPoolExecuteMsgResponseSDKType {
    return o && o.$typeUrl === JoinPoolExecuteMsgResponse.typeUrl;
  },
  isAmino(o: any): o is JoinPoolExecuteMsgResponseAmino {
    return o && o.$typeUrl === JoinPoolExecuteMsgResponse.typeUrl;
  },
  encode(
    _: JoinPoolExecuteMsgResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): JoinPoolExecuteMsgResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseJoinPoolExecuteMsgResponse();
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
  fromPartial(
    _: Partial<JoinPoolExecuteMsgResponse>,
  ): JoinPoolExecuteMsgResponse {
    const message = createBaseJoinPoolExecuteMsgResponse();
    return message;
  },
  fromAmino(_: JoinPoolExecuteMsgResponseAmino): JoinPoolExecuteMsgResponse {
    const message = createBaseJoinPoolExecuteMsgResponse();
    return message;
  },
  toAmino(_: JoinPoolExecuteMsgResponse): JoinPoolExecuteMsgResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(
    object: JoinPoolExecuteMsgResponseAminoMsg,
  ): JoinPoolExecuteMsgResponse {
    return JoinPoolExecuteMsgResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: JoinPoolExecuteMsgResponseProtoMsg,
  ): JoinPoolExecuteMsgResponse {
    return JoinPoolExecuteMsgResponse.decode(message.value);
  },
  toProto(message: JoinPoolExecuteMsgResponse): Uint8Array {
    return JoinPoolExecuteMsgResponse.encode(message).finish();
  },
  toProtoMsg(
    message: JoinPoolExecuteMsgResponse,
  ): JoinPoolExecuteMsgResponseProtoMsg {
    return {
      typeUrl: '/symphony.cosmwasmpool.v1beta1.JoinPoolExecuteMsgResponse',
      value: JoinPoolExecuteMsgResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  JoinPoolExecuteMsgResponse.typeUrl,
  JoinPoolExecuteMsgResponse,
);
function createBaseExitPoolExecuteMsgRequest(): ExitPoolExecuteMsgRequest {
  return {
    exitPool: EmptyRequest.fromPartial({}),
  };
}
/**
 * ===================== ExitPoolExecuteMsg
 * @name ExitPoolExecuteMsgRequest
 * @package symphony.cosmwasmpool.v1beta1
 * @see proto type: symphony.cosmwasmpool.v1beta1.ExitPoolExecuteMsgRequest
 */
export const ExitPoolExecuteMsgRequest = {
  typeUrl: '/symphony.cosmwasmpool.v1beta1.ExitPoolExecuteMsgRequest',
  is(o: any): o is ExitPoolExecuteMsgRequest {
    return (
      o &&
      (o.$typeUrl === ExitPoolExecuteMsgRequest.typeUrl ||
        EmptyRequest.is(o.exitPool))
    );
  },
  isSDK(o: any): o is ExitPoolExecuteMsgRequestSDKType {
    return (
      o &&
      (o.$typeUrl === ExitPoolExecuteMsgRequest.typeUrl ||
        EmptyRequest.isSDK(o.exit_pool))
    );
  },
  isAmino(o: any): o is ExitPoolExecuteMsgRequestAmino {
    return (
      o &&
      (o.$typeUrl === ExitPoolExecuteMsgRequest.typeUrl ||
        EmptyRequest.isAmino(o.exit_pool))
    );
  },
  encode(
    message: ExitPoolExecuteMsgRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.exitPool !== undefined) {
      EmptyRequest.encode(message.exitPool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): ExitPoolExecuteMsgRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExitPoolExecuteMsgRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exitPool = EmptyRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(
    object: Partial<ExitPoolExecuteMsgRequest>,
  ): ExitPoolExecuteMsgRequest {
    const message = createBaseExitPoolExecuteMsgRequest();
    message.exitPool =
      object.exitPool !== undefined && object.exitPool !== null
        ? EmptyRequest.fromPartial(object.exitPool)
        : undefined;
    return message;
  },
  fromAmino(object: ExitPoolExecuteMsgRequestAmino): ExitPoolExecuteMsgRequest {
    const message = createBaseExitPoolExecuteMsgRequest();
    if (object.exit_pool !== undefined && object.exit_pool !== null) {
      message.exitPool = EmptyRequest.fromAmino(object.exit_pool);
    }
    return message;
  },
  toAmino(message: ExitPoolExecuteMsgRequest): ExitPoolExecuteMsgRequestAmino {
    const obj: any = {};
    obj.exit_pool = message.exitPool
      ? EmptyRequest.toAmino(message.exitPool)
      : undefined;
    return obj;
  },
  fromAminoMsg(
    object: ExitPoolExecuteMsgRequestAminoMsg,
  ): ExitPoolExecuteMsgRequest {
    return ExitPoolExecuteMsgRequest.fromAmino(object.value);
  },
  fromProtoMsg(
    message: ExitPoolExecuteMsgRequestProtoMsg,
  ): ExitPoolExecuteMsgRequest {
    return ExitPoolExecuteMsgRequest.decode(message.value);
  },
  toProto(message: ExitPoolExecuteMsgRequest): Uint8Array {
    return ExitPoolExecuteMsgRequest.encode(message).finish();
  },
  toProtoMsg(
    message: ExitPoolExecuteMsgRequest,
  ): ExitPoolExecuteMsgRequestProtoMsg {
    return {
      typeUrl: '/symphony.cosmwasmpool.v1beta1.ExitPoolExecuteMsgRequest',
      value: ExitPoolExecuteMsgRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  ExitPoolExecuteMsgRequest.typeUrl,
  ExitPoolExecuteMsgRequest,
);
function createBaseExitPoolExecuteMsgResponse(): ExitPoolExecuteMsgResponse {
  return {};
}
/**
 * @name ExitPoolExecuteMsgResponse
 * @package symphony.cosmwasmpool.v1beta1
 * @see proto type: symphony.cosmwasmpool.v1beta1.ExitPoolExecuteMsgResponse
 */
export const ExitPoolExecuteMsgResponse = {
  typeUrl: '/symphony.cosmwasmpool.v1beta1.ExitPoolExecuteMsgResponse',
  is(o: any): o is ExitPoolExecuteMsgResponse {
    return o && o.$typeUrl === ExitPoolExecuteMsgResponse.typeUrl;
  },
  isSDK(o: any): o is ExitPoolExecuteMsgResponseSDKType {
    return o && o.$typeUrl === ExitPoolExecuteMsgResponse.typeUrl;
  },
  isAmino(o: any): o is ExitPoolExecuteMsgResponseAmino {
    return o && o.$typeUrl === ExitPoolExecuteMsgResponse.typeUrl;
  },
  encode(
    _: ExitPoolExecuteMsgResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): ExitPoolExecuteMsgResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExitPoolExecuteMsgResponse();
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
  fromPartial(
    _: Partial<ExitPoolExecuteMsgResponse>,
  ): ExitPoolExecuteMsgResponse {
    const message = createBaseExitPoolExecuteMsgResponse();
    return message;
  },
  fromAmino(_: ExitPoolExecuteMsgResponseAmino): ExitPoolExecuteMsgResponse {
    const message = createBaseExitPoolExecuteMsgResponse();
    return message;
  },
  toAmino(_: ExitPoolExecuteMsgResponse): ExitPoolExecuteMsgResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(
    object: ExitPoolExecuteMsgResponseAminoMsg,
  ): ExitPoolExecuteMsgResponse {
    return ExitPoolExecuteMsgResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: ExitPoolExecuteMsgResponseProtoMsg,
  ): ExitPoolExecuteMsgResponse {
    return ExitPoolExecuteMsgResponse.decode(message.value);
  },
  toProto(message: ExitPoolExecuteMsgResponse): Uint8Array {
    return ExitPoolExecuteMsgResponse.encode(message).finish();
  },
  toProtoMsg(
    message: ExitPoolExecuteMsgResponse,
  ): ExitPoolExecuteMsgResponseProtoMsg {
    return {
      typeUrl: '/symphony.cosmwasmpool.v1beta1.ExitPoolExecuteMsgResponse',
      value: ExitPoolExecuteMsgResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  ExitPoolExecuteMsgResponse.typeUrl,
  ExitPoolExecuteMsgResponse,
);
