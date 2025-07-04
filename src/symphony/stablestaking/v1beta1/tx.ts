//@ts-nocheck
import {
  Coin,
  CoinAmino,
  CoinSDKType,
  DecCoin,
  DecCoinAmino,
  DecCoinSDKType,
} from '../../../cosmos/base/v1beta1/coin';
import { BinaryReader, BinaryWriter } from '../../../binary';
import { GlobalDecoderRegistry } from '../../../registry';
import { bytesFromBase64, base64FromBytes } from '../../../helpers';
/**
 * @name MsgStakeTokens
 * @package symphony.stablestaking.v1beta1
 * @see proto type: symphony.stablestaking.v1beta1.MsgStakeTokens
 */
export interface MsgStakeTokens {
  staker: string;
  amount: Coin;
}
export interface MsgStakeTokensProtoMsg {
  typeUrl: '/symphony.stablestaking.v1beta1.MsgStakeTokens';
  value: Uint8Array;
}
/**
 * @name MsgStakeTokensAmino
 * @package symphony.stablestaking.v1beta1
 * @see proto type: symphony.stablestaking.v1beta1.MsgStakeTokens
 */
export interface MsgStakeTokensAmino {
  staker?: string;
  amount?: CoinAmino;
}
export interface MsgStakeTokensAminoMsg {
  type: '/symphony.stablestaking.v1beta1.MsgStakeTokens';
  value: MsgStakeTokensAmino;
}
/**
 * @name MsgStakeTokensSDKType
 * @package symphony.stablestaking.v1beta1
 * @see proto type: symphony.stablestaking.v1beta1.MsgStakeTokens
 */
export interface MsgStakeTokensSDKType {
  staker: string;
  amount: CoinSDKType;
}
/**
 * @name MsgStakeTokensResponse
 * @package symphony.stablestaking.v1beta1
 * @see proto type: symphony.stablestaking.v1beta1.MsgStakeTokensResponse
 */
export interface MsgStakeTokensResponse {
  staker: string;
  amount?: Coin;
  totalStaked: Uint8Array;
  totalShares: Uint8Array;
}
export interface MsgStakeTokensResponseProtoMsg {
  typeUrl: '/symphony.stablestaking.v1beta1.MsgStakeTokensResponse';
  value: Uint8Array;
}
/**
 * @name MsgStakeTokensResponseAmino
 * @package symphony.stablestaking.v1beta1
 * @see proto type: symphony.stablestaking.v1beta1.MsgStakeTokensResponse
 */
export interface MsgStakeTokensResponseAmino {
  staker?: string;
  amount?: CoinAmino;
  total_staked?: string;
  total_shares?: string;
}
export interface MsgStakeTokensResponseAminoMsg {
  type: '/symphony.stablestaking.v1beta1.MsgStakeTokensResponse';
  value: MsgStakeTokensResponseAmino;
}
/**
 * @name MsgStakeTokensResponseSDKType
 * @package symphony.stablestaking.v1beta1
 * @see proto type: symphony.stablestaking.v1beta1.MsgStakeTokensResponse
 */
export interface MsgStakeTokensResponseSDKType {
  staker: string;
  amount?: CoinSDKType;
  total_staked: Uint8Array;
  total_shares: Uint8Array;
}
/**
 * @name MsgUnstakeTokens
 * @package symphony.stablestaking.v1beta1
 * @see proto type: symphony.stablestaking.v1beta1.MsgUnstakeTokens
 */
export interface MsgUnstakeTokens {
  staker: string;
  amount: Coin;
}
export interface MsgUnstakeTokensProtoMsg {
  typeUrl: '/symphony.stablestaking.v1beta1.MsgUnstakeTokens';
  value: Uint8Array;
}
/**
 * @name MsgUnstakeTokensAmino
 * @package symphony.stablestaking.v1beta1
 * @see proto type: symphony.stablestaking.v1beta1.MsgUnstakeTokens
 */
export interface MsgUnstakeTokensAmino {
  staker?: string;
  amount?: CoinAmino;
}
export interface MsgUnstakeTokensAminoMsg {
  type: '/symphony.stablestaking.v1beta1.MsgUnstakeTokens';
  value: MsgUnstakeTokensAmino;
}
/**
 * @name MsgUnstakeTokensSDKType
 * @package symphony.stablestaking.v1beta1
 * @see proto type: symphony.stablestaking.v1beta1.MsgUnstakeTokens
 */
export interface MsgUnstakeTokensSDKType {
  staker: string;
  amount: CoinSDKType;
}
/**
 * @name MsgUnstakeTokensResponse
 * @package symphony.stablestaking.v1beta1
 * @see proto type: symphony.stablestaking.v1beta1.MsgUnstakeTokensResponse
 */
export interface MsgUnstakeTokensResponse {
  staker: string;
  amount: DecCoin;
  totalStaked: Uint8Array;
  totalShares: Uint8Array;
}
export interface MsgUnstakeTokensResponseProtoMsg {
  typeUrl: '/symphony.stablestaking.v1beta1.MsgUnstakeTokensResponse';
  value: Uint8Array;
}
/**
 * @name MsgUnstakeTokensResponseAmino
 * @package symphony.stablestaking.v1beta1
 * @see proto type: symphony.stablestaking.v1beta1.MsgUnstakeTokensResponse
 */
export interface MsgUnstakeTokensResponseAmino {
  staker?: string;
  amount?: DecCoinAmino;
  total_staked?: string;
  total_shares?: string;
}
export interface MsgUnstakeTokensResponseAminoMsg {
  type: '/symphony.stablestaking.v1beta1.MsgUnstakeTokensResponse';
  value: MsgUnstakeTokensResponseAmino;
}
/**
 * @name MsgUnstakeTokensResponseSDKType
 * @package symphony.stablestaking.v1beta1
 * @see proto type: symphony.stablestaking.v1beta1.MsgUnstakeTokensResponse
 */
export interface MsgUnstakeTokensResponseSDKType {
  staker: string;
  amount: DecCoinSDKType;
  total_staked: Uint8Array;
  total_shares: Uint8Array;
}
function createBaseMsgStakeTokens(): MsgStakeTokens {
  return {
    staker: '',
    amount: Coin.fromPartial({}),
  };
}
/**
 * @name MsgStakeTokens
 * @package symphony.stablestaking.v1beta1
 * @see proto type: symphony.stablestaking.v1beta1.MsgStakeTokens
 */
export const MsgStakeTokens = {
  typeUrl: '/symphony.stablestaking.v1beta1.MsgStakeTokens',
  is(o: any): o is MsgStakeTokens {
    return (
      o &&
      (o.$typeUrl === MsgStakeTokens.typeUrl ||
        (typeof o.staker === 'string' && Coin.is(o.amount)))
    );
  },
  isSDK(o: any): o is MsgStakeTokensSDKType {
    return (
      o &&
      (o.$typeUrl === MsgStakeTokens.typeUrl ||
        (typeof o.staker === 'string' && Coin.isSDK(o.amount)))
    );
  },
  isAmino(o: any): o is MsgStakeTokensAmino {
    return (
      o &&
      (o.$typeUrl === MsgStakeTokens.typeUrl ||
        (typeof o.staker === 'string' && Coin.isAmino(o.amount)))
    );
  },
  encode(
    message: MsgStakeTokens,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.staker !== '') {
      writer.uint32(10).string(message.staker);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgStakeTokens {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStakeTokens();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.staker = reader.string();
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgStakeTokens>): MsgStakeTokens {
    const message = createBaseMsgStakeTokens();
    message.staker = object.staker ?? '';
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? Coin.fromPartial(object.amount)
        : undefined;
    return message;
  },
  fromAmino(object: MsgStakeTokensAmino): MsgStakeTokens {
    const message = createBaseMsgStakeTokens();
    if (object.staker !== undefined && object.staker !== null) {
      message.staker = object.staker;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: MsgStakeTokens): MsgStakeTokensAmino {
    const obj: any = {};
    obj.staker = message.staker === '' ? undefined : message.staker;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgStakeTokensAminoMsg): MsgStakeTokens {
    return MsgStakeTokens.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgStakeTokensProtoMsg): MsgStakeTokens {
    return MsgStakeTokens.decode(message.value);
  },
  toProto(message: MsgStakeTokens): Uint8Array {
    return MsgStakeTokens.encode(message).finish();
  },
  toProtoMsg(message: MsgStakeTokens): MsgStakeTokensProtoMsg {
    return {
      typeUrl: '/symphony.stablestaking.v1beta1.MsgStakeTokens',
      value: MsgStakeTokens.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(MsgStakeTokens.typeUrl, MsgStakeTokens);
function createBaseMsgStakeTokensResponse(): MsgStakeTokensResponse {
  return {
    staker: '',
    amount: undefined,
    totalStaked: new Uint8Array(),
    totalShares: new Uint8Array(),
  };
}
/**
 * @name MsgStakeTokensResponse
 * @package symphony.stablestaking.v1beta1
 * @see proto type: symphony.stablestaking.v1beta1.MsgStakeTokensResponse
 */
export const MsgStakeTokensResponse = {
  typeUrl: '/symphony.stablestaking.v1beta1.MsgStakeTokensResponse',
  is(o: any): o is MsgStakeTokensResponse {
    return (
      o &&
      (o.$typeUrl === MsgStakeTokensResponse.typeUrl ||
        (typeof o.staker === 'string' &&
          (o.totalStaked instanceof Uint8Array ||
            typeof o.totalStaked === 'string') &&
          (o.totalShares instanceof Uint8Array ||
            typeof o.totalShares === 'string')))
    );
  },
  isSDK(o: any): o is MsgStakeTokensResponseSDKType {
    return (
      o &&
      (o.$typeUrl === MsgStakeTokensResponse.typeUrl ||
        (typeof o.staker === 'string' &&
          (o.total_staked instanceof Uint8Array ||
            typeof o.total_staked === 'string') &&
          (o.total_shares instanceof Uint8Array ||
            typeof o.total_shares === 'string')))
    );
  },
  isAmino(o: any): o is MsgStakeTokensResponseAmino {
    return (
      o &&
      (o.$typeUrl === MsgStakeTokensResponse.typeUrl ||
        (typeof o.staker === 'string' &&
          (o.total_staked instanceof Uint8Array ||
            typeof o.total_staked === 'string') &&
          (o.total_shares instanceof Uint8Array ||
            typeof o.total_shares === 'string')))
    );
  },
  encode(
    message: MsgStakeTokensResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.staker !== '') {
      writer.uint32(10).string(message.staker);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    if (message.totalStaked.length !== 0) {
      writer.uint32(26).bytes(message.totalStaked);
    }
    if (message.totalShares.length !== 0) {
      writer.uint32(34).bytes(message.totalShares);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): MsgStakeTokensResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStakeTokensResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.staker = reader.string();
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.totalStaked = reader.bytes();
          break;
        case 4:
          message.totalShares = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgStakeTokensResponse>): MsgStakeTokensResponse {
    const message = createBaseMsgStakeTokensResponse();
    message.staker = object.staker ?? '';
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? Coin.fromPartial(object.amount)
        : undefined;
    message.totalStaked = object.totalStaked ?? new Uint8Array();
    message.totalShares = object.totalShares ?? new Uint8Array();
    return message;
  },
  fromAmino(object: MsgStakeTokensResponseAmino): MsgStakeTokensResponse {
    const message = createBaseMsgStakeTokensResponse();
    if (object.staker !== undefined && object.staker !== null) {
      message.staker = object.staker;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    if (object.total_staked !== undefined && object.total_staked !== null) {
      message.totalStaked = bytesFromBase64(object.total_staked);
    }
    if (object.total_shares !== undefined && object.total_shares !== null) {
      message.totalShares = bytesFromBase64(object.total_shares);
    }
    return message;
  },
  toAmino(message: MsgStakeTokensResponse): MsgStakeTokensResponseAmino {
    const obj: any = {};
    obj.staker = message.staker === '' ? undefined : message.staker;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    obj.total_staked = message.totalStaked
      ? base64FromBytes(message.totalStaked)
      : undefined;
    obj.total_shares = message.totalShares
      ? base64FromBytes(message.totalShares)
      : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgStakeTokensResponseAminoMsg): MsgStakeTokensResponse {
    return MsgStakeTokensResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: MsgStakeTokensResponseProtoMsg,
  ): MsgStakeTokensResponse {
    return MsgStakeTokensResponse.decode(message.value);
  },
  toProto(message: MsgStakeTokensResponse): Uint8Array {
    return MsgStakeTokensResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgStakeTokensResponse): MsgStakeTokensResponseProtoMsg {
    return {
      typeUrl: '/symphony.stablestaking.v1beta1.MsgStakeTokensResponse',
      value: MsgStakeTokensResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  MsgStakeTokensResponse.typeUrl,
  MsgStakeTokensResponse,
);
function createBaseMsgUnstakeTokens(): MsgUnstakeTokens {
  return {
    staker: '',
    amount: Coin.fromPartial({}),
  };
}
/**
 * @name MsgUnstakeTokens
 * @package symphony.stablestaking.v1beta1
 * @see proto type: symphony.stablestaking.v1beta1.MsgUnstakeTokens
 */
export const MsgUnstakeTokens = {
  typeUrl: '/symphony.stablestaking.v1beta1.MsgUnstakeTokens',
  is(o: any): o is MsgUnstakeTokens {
    return (
      o &&
      (o.$typeUrl === MsgUnstakeTokens.typeUrl ||
        (typeof o.staker === 'string' && Coin.is(o.amount)))
    );
  },
  isSDK(o: any): o is MsgUnstakeTokensSDKType {
    return (
      o &&
      (o.$typeUrl === MsgUnstakeTokens.typeUrl ||
        (typeof o.staker === 'string' && Coin.isSDK(o.amount)))
    );
  },
  isAmino(o: any): o is MsgUnstakeTokensAmino {
    return (
      o &&
      (o.$typeUrl === MsgUnstakeTokens.typeUrl ||
        (typeof o.staker === 'string' && Coin.isAmino(o.amount)))
    );
  },
  encode(
    message: MsgUnstakeTokens,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.staker !== '') {
      writer.uint32(10).string(message.staker);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnstakeTokens {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnstakeTokens();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.staker = reader.string();
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUnstakeTokens>): MsgUnstakeTokens {
    const message = createBaseMsgUnstakeTokens();
    message.staker = object.staker ?? '';
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? Coin.fromPartial(object.amount)
        : undefined;
    return message;
  },
  fromAmino(object: MsgUnstakeTokensAmino): MsgUnstakeTokens {
    const message = createBaseMsgUnstakeTokens();
    if (object.staker !== undefined && object.staker !== null) {
      message.staker = object.staker;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: MsgUnstakeTokens): MsgUnstakeTokensAmino {
    const obj: any = {};
    obj.staker = message.staker === '' ? undefined : message.staker;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUnstakeTokensAminoMsg): MsgUnstakeTokens {
    return MsgUnstakeTokens.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnstakeTokensProtoMsg): MsgUnstakeTokens {
    return MsgUnstakeTokens.decode(message.value);
  },
  toProto(message: MsgUnstakeTokens): Uint8Array {
    return MsgUnstakeTokens.encode(message).finish();
  },
  toProtoMsg(message: MsgUnstakeTokens): MsgUnstakeTokensProtoMsg {
    return {
      typeUrl: '/symphony.stablestaking.v1beta1.MsgUnstakeTokens',
      value: MsgUnstakeTokens.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(MsgUnstakeTokens.typeUrl, MsgUnstakeTokens);
function createBaseMsgUnstakeTokensResponse(): MsgUnstakeTokensResponse {
  return {
    staker: '',
    amount: DecCoin.fromPartial({}),
    totalStaked: new Uint8Array(),
    totalShares: new Uint8Array(),
  };
}
/**
 * @name MsgUnstakeTokensResponse
 * @package symphony.stablestaking.v1beta1
 * @see proto type: symphony.stablestaking.v1beta1.MsgUnstakeTokensResponse
 */
export const MsgUnstakeTokensResponse = {
  typeUrl: '/symphony.stablestaking.v1beta1.MsgUnstakeTokensResponse',
  is(o: any): o is MsgUnstakeTokensResponse {
    return (
      o &&
      (o.$typeUrl === MsgUnstakeTokensResponse.typeUrl ||
        (typeof o.staker === 'string' &&
          DecCoin.is(o.amount) &&
          (o.totalStaked instanceof Uint8Array ||
            typeof o.totalStaked === 'string') &&
          (o.totalShares instanceof Uint8Array ||
            typeof o.totalShares === 'string')))
    );
  },
  isSDK(o: any): o is MsgUnstakeTokensResponseSDKType {
    return (
      o &&
      (o.$typeUrl === MsgUnstakeTokensResponse.typeUrl ||
        (typeof o.staker === 'string' &&
          DecCoin.isSDK(o.amount) &&
          (o.total_staked instanceof Uint8Array ||
            typeof o.total_staked === 'string') &&
          (o.total_shares instanceof Uint8Array ||
            typeof o.total_shares === 'string')))
    );
  },
  isAmino(o: any): o is MsgUnstakeTokensResponseAmino {
    return (
      o &&
      (o.$typeUrl === MsgUnstakeTokensResponse.typeUrl ||
        (typeof o.staker === 'string' &&
          DecCoin.isAmino(o.amount) &&
          (o.total_staked instanceof Uint8Array ||
            typeof o.total_staked === 'string') &&
          (o.total_shares instanceof Uint8Array ||
            typeof o.total_shares === 'string')))
    );
  },
  encode(
    message: MsgUnstakeTokensResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.staker !== '') {
      writer.uint32(10).string(message.staker);
    }
    if (message.amount !== undefined) {
      DecCoin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    if (message.totalStaked.length !== 0) {
      writer.uint32(26).bytes(message.totalStaked);
    }
    if (message.totalShares.length !== 0) {
      writer.uint32(34).bytes(message.totalShares);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): MsgUnstakeTokensResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnstakeTokensResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.staker = reader.string();
          break;
        case 2:
          message.amount = DecCoin.decode(reader, reader.uint32());
          break;
        case 3:
          message.totalStaked = reader.bytes();
          break;
        case 4:
          message.totalShares = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(
    object: Partial<MsgUnstakeTokensResponse>,
  ): MsgUnstakeTokensResponse {
    const message = createBaseMsgUnstakeTokensResponse();
    message.staker = object.staker ?? '';
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? DecCoin.fromPartial(object.amount)
        : undefined;
    message.totalStaked = object.totalStaked ?? new Uint8Array();
    message.totalShares = object.totalShares ?? new Uint8Array();
    return message;
  },
  fromAmino(object: MsgUnstakeTokensResponseAmino): MsgUnstakeTokensResponse {
    const message = createBaseMsgUnstakeTokensResponse();
    if (object.staker !== undefined && object.staker !== null) {
      message.staker = object.staker;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = DecCoin.fromAmino(object.amount);
    }
    if (object.total_staked !== undefined && object.total_staked !== null) {
      message.totalStaked = bytesFromBase64(object.total_staked);
    }
    if (object.total_shares !== undefined && object.total_shares !== null) {
      message.totalShares = bytesFromBase64(object.total_shares);
    }
    return message;
  },
  toAmino(message: MsgUnstakeTokensResponse): MsgUnstakeTokensResponseAmino {
    const obj: any = {};
    obj.staker = message.staker === '' ? undefined : message.staker;
    obj.amount = message.amount ? DecCoin.toAmino(message.amount) : undefined;
    obj.total_staked = message.totalStaked
      ? base64FromBytes(message.totalStaked)
      : undefined;
    obj.total_shares = message.totalShares
      ? base64FromBytes(message.totalShares)
      : undefined;
    return obj;
  },
  fromAminoMsg(
    object: MsgUnstakeTokensResponseAminoMsg,
  ): MsgUnstakeTokensResponse {
    return MsgUnstakeTokensResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: MsgUnstakeTokensResponseProtoMsg,
  ): MsgUnstakeTokensResponse {
    return MsgUnstakeTokensResponse.decode(message.value);
  },
  toProto(message: MsgUnstakeTokensResponse): Uint8Array {
    return MsgUnstakeTokensResponse.encode(message).finish();
  },
  toProtoMsg(
    message: MsgUnstakeTokensResponse,
  ): MsgUnstakeTokensResponseProtoMsg {
    return {
      typeUrl: '/symphony.stablestaking.v1beta1.MsgUnstakeTokensResponse',
      value: MsgUnstakeTokensResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  MsgUnstakeTokensResponse.typeUrl,
  MsgUnstakeTokensResponse,
);
