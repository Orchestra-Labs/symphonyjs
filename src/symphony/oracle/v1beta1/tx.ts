//@ts-nocheck
import { BinaryReader, BinaryWriter } from '../../../binary';
import { GlobalDecoderRegistry } from '../../../registry';
/**
 * MsgAggregateExchangeRatePrevote represents a message to submit
 * aggregate exchange rate prevote.
 * @name MsgAggregateExchangeRatePrevote
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.MsgAggregateExchangeRatePrevote
 */
export interface MsgAggregateExchangeRatePrevote {
  hash: string;
  feeder: string;
  validator: string;
}
export interface MsgAggregateExchangeRatePrevoteProtoMsg {
  typeUrl: '/symphony.oracle.v1beta1.MsgAggregateExchangeRatePrevote';
  value: Uint8Array;
}
/**
 * MsgAggregateExchangeRatePrevote represents a message to submit
 * aggregate exchange rate prevote.
 * @name MsgAggregateExchangeRatePrevoteAmino
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.MsgAggregateExchangeRatePrevote
 */
export interface MsgAggregateExchangeRatePrevoteAmino {
  hash?: string;
  feeder?: string;
  validator?: string;
}
export interface MsgAggregateExchangeRatePrevoteAminoMsg {
  type: '/symphony.oracle.v1beta1.MsgAggregateExchangeRatePrevote';
  value: MsgAggregateExchangeRatePrevoteAmino;
}
/**
 * MsgAggregateExchangeRatePrevote represents a message to submit
 * aggregate exchange rate prevote.
 * @name MsgAggregateExchangeRatePrevoteSDKType
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.MsgAggregateExchangeRatePrevote
 */
export interface MsgAggregateExchangeRatePrevoteSDKType {
  hash: string;
  feeder: string;
  validator: string;
}
/**
 * MsgAggregateExchangeRatePrevoteResponse defines the
 * Msg/AggregateExchangeRatePrevote response type.
 * @name MsgAggregateExchangeRatePrevoteResponse
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.MsgAggregateExchangeRatePrevoteResponse
 */
export interface MsgAggregateExchangeRatePrevoteResponse {}
export interface MsgAggregateExchangeRatePrevoteResponseProtoMsg {
  typeUrl: '/symphony.oracle.v1beta1.MsgAggregateExchangeRatePrevoteResponse';
  value: Uint8Array;
}
/**
 * MsgAggregateExchangeRatePrevoteResponse defines the
 * Msg/AggregateExchangeRatePrevote response type.
 * @name MsgAggregateExchangeRatePrevoteResponseAmino
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.MsgAggregateExchangeRatePrevoteResponse
 */
export interface MsgAggregateExchangeRatePrevoteResponseAmino {}
export interface MsgAggregateExchangeRatePrevoteResponseAminoMsg {
  type: '/symphony.oracle.v1beta1.MsgAggregateExchangeRatePrevoteResponse';
  value: MsgAggregateExchangeRatePrevoteResponseAmino;
}
/**
 * MsgAggregateExchangeRatePrevoteResponse defines the
 * Msg/AggregateExchangeRatePrevote response type.
 * @name MsgAggregateExchangeRatePrevoteResponseSDKType
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.MsgAggregateExchangeRatePrevoteResponse
 */
export interface MsgAggregateExchangeRatePrevoteResponseSDKType {}
/**
 * MsgAggregateExchangeRateVote represents a message to submit
 * aggregate exchange rate vote.
 * @name MsgAggregateExchangeRateVote
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.MsgAggregateExchangeRateVote
 */
export interface MsgAggregateExchangeRateVote {
  salt: string;
  exchangeRates: string;
  feeder: string;
  validator: string;
}
export interface MsgAggregateExchangeRateVoteProtoMsg {
  typeUrl: '/symphony.oracle.v1beta1.MsgAggregateExchangeRateVote';
  value: Uint8Array;
}
/**
 * MsgAggregateExchangeRateVote represents a message to submit
 * aggregate exchange rate vote.
 * @name MsgAggregateExchangeRateVoteAmino
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.MsgAggregateExchangeRateVote
 */
export interface MsgAggregateExchangeRateVoteAmino {
  salt?: string;
  exchange_rates?: string;
  feeder?: string;
  validator?: string;
}
export interface MsgAggregateExchangeRateVoteAminoMsg {
  type: '/symphony.oracle.v1beta1.MsgAggregateExchangeRateVote';
  value: MsgAggregateExchangeRateVoteAmino;
}
/**
 * MsgAggregateExchangeRateVote represents a message to submit
 * aggregate exchange rate vote.
 * @name MsgAggregateExchangeRateVoteSDKType
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.MsgAggregateExchangeRateVote
 */
export interface MsgAggregateExchangeRateVoteSDKType {
  salt: string;
  exchange_rates: string;
  feeder: string;
  validator: string;
}
/**
 * MsgAggregateExchangeRateVoteResponse defines the
 * Msg/AggregateExchangeRateVote response type.
 * @name MsgAggregateExchangeRateVoteResponse
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.MsgAggregateExchangeRateVoteResponse
 */
export interface MsgAggregateExchangeRateVoteResponse {}
export interface MsgAggregateExchangeRateVoteResponseProtoMsg {
  typeUrl: '/symphony.oracle.v1beta1.MsgAggregateExchangeRateVoteResponse';
  value: Uint8Array;
}
/**
 * MsgAggregateExchangeRateVoteResponse defines the
 * Msg/AggregateExchangeRateVote response type.
 * @name MsgAggregateExchangeRateVoteResponseAmino
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.MsgAggregateExchangeRateVoteResponse
 */
export interface MsgAggregateExchangeRateVoteResponseAmino {}
export interface MsgAggregateExchangeRateVoteResponseAminoMsg {
  type: '/symphony.oracle.v1beta1.MsgAggregateExchangeRateVoteResponse';
  value: MsgAggregateExchangeRateVoteResponseAmino;
}
/**
 * MsgAggregateExchangeRateVoteResponse defines the
 * Msg/AggregateExchangeRateVote response type.
 * @name MsgAggregateExchangeRateVoteResponseSDKType
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.MsgAggregateExchangeRateVoteResponse
 */
export interface MsgAggregateExchangeRateVoteResponseSDKType {}
/**
 * MsgDelegateFeedConsent represents a message to
 * delegate oracle voting rights to another address.
 * @name MsgDelegateFeedConsent
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.MsgDelegateFeedConsent
 */
export interface MsgDelegateFeedConsent {
  operator: string;
  delegate: string;
}
export interface MsgDelegateFeedConsentProtoMsg {
  typeUrl: '/symphony.oracle.v1beta1.MsgDelegateFeedConsent';
  value: Uint8Array;
}
/**
 * MsgDelegateFeedConsent represents a message to
 * delegate oracle voting rights to another address.
 * @name MsgDelegateFeedConsentAmino
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.MsgDelegateFeedConsent
 */
export interface MsgDelegateFeedConsentAmino {
  operator?: string;
  delegate?: string;
}
export interface MsgDelegateFeedConsentAminoMsg {
  type: '/symphony.oracle.v1beta1.MsgDelegateFeedConsent';
  value: MsgDelegateFeedConsentAmino;
}
/**
 * MsgDelegateFeedConsent represents a message to
 * delegate oracle voting rights to another address.
 * @name MsgDelegateFeedConsentSDKType
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.MsgDelegateFeedConsent
 */
export interface MsgDelegateFeedConsentSDKType {
  operator: string;
  delegate: string;
}
/**
 * MsgDelegateFeedConsentResponse defines the Msg/DelegateFeedConsent response
 * type.
 * @name MsgDelegateFeedConsentResponse
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.MsgDelegateFeedConsentResponse
 */
export interface MsgDelegateFeedConsentResponse {}
export interface MsgDelegateFeedConsentResponseProtoMsg {
  typeUrl: '/symphony.oracle.v1beta1.MsgDelegateFeedConsentResponse';
  value: Uint8Array;
}
/**
 * MsgDelegateFeedConsentResponse defines the Msg/DelegateFeedConsent response
 * type.
 * @name MsgDelegateFeedConsentResponseAmino
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.MsgDelegateFeedConsentResponse
 */
export interface MsgDelegateFeedConsentResponseAmino {}
export interface MsgDelegateFeedConsentResponseAminoMsg {
  type: '/symphony.oracle.v1beta1.MsgDelegateFeedConsentResponse';
  value: MsgDelegateFeedConsentResponseAmino;
}
/**
 * MsgDelegateFeedConsentResponse defines the Msg/DelegateFeedConsent response
 * type.
 * @name MsgDelegateFeedConsentResponseSDKType
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.MsgDelegateFeedConsentResponse
 */
export interface MsgDelegateFeedConsentResponseSDKType {}
function createBaseMsgAggregateExchangeRatePrevote(): MsgAggregateExchangeRatePrevote {
  return {
    hash: '',
    feeder: '',
    validator: '',
  };
}
/**
 * MsgAggregateExchangeRatePrevote represents a message to submit
 * aggregate exchange rate prevote.
 * @name MsgAggregateExchangeRatePrevote
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.MsgAggregateExchangeRatePrevote
 */
export const MsgAggregateExchangeRatePrevote = {
  typeUrl: '/symphony.oracle.v1beta1.MsgAggregateExchangeRatePrevote',
  is(o: any): o is MsgAggregateExchangeRatePrevote {
    return (
      o &&
      (o.$typeUrl === MsgAggregateExchangeRatePrevote.typeUrl ||
        (typeof o.hash === 'string' &&
          typeof o.feeder === 'string' &&
          typeof o.validator === 'string'))
    );
  },
  isSDK(o: any): o is MsgAggregateExchangeRatePrevoteSDKType {
    return (
      o &&
      (o.$typeUrl === MsgAggregateExchangeRatePrevote.typeUrl ||
        (typeof o.hash === 'string' &&
          typeof o.feeder === 'string' &&
          typeof o.validator === 'string'))
    );
  },
  isAmino(o: any): o is MsgAggregateExchangeRatePrevoteAmino {
    return (
      o &&
      (o.$typeUrl === MsgAggregateExchangeRatePrevote.typeUrl ||
        (typeof o.hash === 'string' &&
          typeof o.feeder === 'string' &&
          typeof o.validator === 'string'))
    );
  },
  encode(
    message: MsgAggregateExchangeRatePrevote,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.hash !== '') {
      writer.uint32(10).string(message.hash);
    }
    if (message.feeder !== '') {
      writer.uint32(18).string(message.feeder);
    }
    if (message.validator !== '') {
      writer.uint32(26).string(message.validator);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): MsgAggregateExchangeRatePrevote {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAggregateExchangeRatePrevote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
          break;
        case 2:
          message.feeder = reader.string();
          break;
        case 3:
          message.validator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(
    object: Partial<MsgAggregateExchangeRatePrevote>,
  ): MsgAggregateExchangeRatePrevote {
    const message = createBaseMsgAggregateExchangeRatePrevote();
    message.hash = object.hash ?? '';
    message.feeder = object.feeder ?? '';
    message.validator = object.validator ?? '';
    return message;
  },
  fromAmino(
    object: MsgAggregateExchangeRatePrevoteAmino,
  ): MsgAggregateExchangeRatePrevote {
    const message = createBaseMsgAggregateExchangeRatePrevote();
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    }
    if (object.feeder !== undefined && object.feeder !== null) {
      message.feeder = object.feeder;
    }
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = object.validator;
    }
    return message;
  },
  toAmino(
    message: MsgAggregateExchangeRatePrevote,
  ): MsgAggregateExchangeRatePrevoteAmino {
    const obj: any = {};
    obj.hash = message.hash === '' ? undefined : message.hash;
    obj.feeder = message.feeder === '' ? undefined : message.feeder;
    obj.validator = message.validator === '' ? undefined : message.validator;
    return obj;
  },
  fromAminoMsg(
    object: MsgAggregateExchangeRatePrevoteAminoMsg,
  ): MsgAggregateExchangeRatePrevote {
    return MsgAggregateExchangeRatePrevote.fromAmino(object.value);
  },
  fromProtoMsg(
    message: MsgAggregateExchangeRatePrevoteProtoMsg,
  ): MsgAggregateExchangeRatePrevote {
    return MsgAggregateExchangeRatePrevote.decode(message.value);
  },
  toProto(message: MsgAggregateExchangeRatePrevote): Uint8Array {
    return MsgAggregateExchangeRatePrevote.encode(message).finish();
  },
  toProtoMsg(
    message: MsgAggregateExchangeRatePrevote,
  ): MsgAggregateExchangeRatePrevoteProtoMsg {
    return {
      typeUrl: '/symphony.oracle.v1beta1.MsgAggregateExchangeRatePrevote',
      value: MsgAggregateExchangeRatePrevote.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  MsgAggregateExchangeRatePrevote.typeUrl,
  MsgAggregateExchangeRatePrevote,
);
function createBaseMsgAggregateExchangeRatePrevoteResponse(): MsgAggregateExchangeRatePrevoteResponse {
  return {};
}
/**
 * MsgAggregateExchangeRatePrevoteResponse defines the
 * Msg/AggregateExchangeRatePrevote response type.
 * @name MsgAggregateExchangeRatePrevoteResponse
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.MsgAggregateExchangeRatePrevoteResponse
 */
export const MsgAggregateExchangeRatePrevoteResponse = {
  typeUrl: '/symphony.oracle.v1beta1.MsgAggregateExchangeRatePrevoteResponse',
  is(o: any): o is MsgAggregateExchangeRatePrevoteResponse {
    return o && o.$typeUrl === MsgAggregateExchangeRatePrevoteResponse.typeUrl;
  },
  isSDK(o: any): o is MsgAggregateExchangeRatePrevoteResponseSDKType {
    return o && o.$typeUrl === MsgAggregateExchangeRatePrevoteResponse.typeUrl;
  },
  isAmino(o: any): o is MsgAggregateExchangeRatePrevoteResponseAmino {
    return o && o.$typeUrl === MsgAggregateExchangeRatePrevoteResponse.typeUrl;
  },
  encode(
    _: MsgAggregateExchangeRatePrevoteResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): MsgAggregateExchangeRatePrevoteResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAggregateExchangeRatePrevoteResponse();
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
    _: Partial<MsgAggregateExchangeRatePrevoteResponse>,
  ): MsgAggregateExchangeRatePrevoteResponse {
    const message = createBaseMsgAggregateExchangeRatePrevoteResponse();
    return message;
  },
  fromAmino(
    _: MsgAggregateExchangeRatePrevoteResponseAmino,
  ): MsgAggregateExchangeRatePrevoteResponse {
    const message = createBaseMsgAggregateExchangeRatePrevoteResponse();
    return message;
  },
  toAmino(
    _: MsgAggregateExchangeRatePrevoteResponse,
  ): MsgAggregateExchangeRatePrevoteResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(
    object: MsgAggregateExchangeRatePrevoteResponseAminoMsg,
  ): MsgAggregateExchangeRatePrevoteResponse {
    return MsgAggregateExchangeRatePrevoteResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: MsgAggregateExchangeRatePrevoteResponseProtoMsg,
  ): MsgAggregateExchangeRatePrevoteResponse {
    return MsgAggregateExchangeRatePrevoteResponse.decode(message.value);
  },
  toProto(message: MsgAggregateExchangeRatePrevoteResponse): Uint8Array {
    return MsgAggregateExchangeRatePrevoteResponse.encode(message).finish();
  },
  toProtoMsg(
    message: MsgAggregateExchangeRatePrevoteResponse,
  ): MsgAggregateExchangeRatePrevoteResponseProtoMsg {
    return {
      typeUrl:
        '/symphony.oracle.v1beta1.MsgAggregateExchangeRatePrevoteResponse',
      value: MsgAggregateExchangeRatePrevoteResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  MsgAggregateExchangeRatePrevoteResponse.typeUrl,
  MsgAggregateExchangeRatePrevoteResponse,
);
function createBaseMsgAggregateExchangeRateVote(): MsgAggregateExchangeRateVote {
  return {
    salt: '',
    exchangeRates: '',
    feeder: '',
    validator: '',
  };
}
/**
 * MsgAggregateExchangeRateVote represents a message to submit
 * aggregate exchange rate vote.
 * @name MsgAggregateExchangeRateVote
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.MsgAggregateExchangeRateVote
 */
export const MsgAggregateExchangeRateVote = {
  typeUrl: '/symphony.oracle.v1beta1.MsgAggregateExchangeRateVote',
  is(o: any): o is MsgAggregateExchangeRateVote {
    return (
      o &&
      (o.$typeUrl === MsgAggregateExchangeRateVote.typeUrl ||
        (typeof o.salt === 'string' &&
          typeof o.exchangeRates === 'string' &&
          typeof o.feeder === 'string' &&
          typeof o.validator === 'string'))
    );
  },
  isSDK(o: any): o is MsgAggregateExchangeRateVoteSDKType {
    return (
      o &&
      (o.$typeUrl === MsgAggregateExchangeRateVote.typeUrl ||
        (typeof o.salt === 'string' &&
          typeof o.exchange_rates === 'string' &&
          typeof o.feeder === 'string' &&
          typeof o.validator === 'string'))
    );
  },
  isAmino(o: any): o is MsgAggregateExchangeRateVoteAmino {
    return (
      o &&
      (o.$typeUrl === MsgAggregateExchangeRateVote.typeUrl ||
        (typeof o.salt === 'string' &&
          typeof o.exchange_rates === 'string' &&
          typeof o.feeder === 'string' &&
          typeof o.validator === 'string'))
    );
  },
  encode(
    message: MsgAggregateExchangeRateVote,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.salt !== '') {
      writer.uint32(10).string(message.salt);
    }
    if (message.exchangeRates !== '') {
      writer.uint32(18).string(message.exchangeRates);
    }
    if (message.feeder !== '') {
      writer.uint32(26).string(message.feeder);
    }
    if (message.validator !== '') {
      writer.uint32(34).string(message.validator);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): MsgAggregateExchangeRateVote {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAggregateExchangeRateVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.salt = reader.string();
          break;
        case 2:
          message.exchangeRates = reader.string();
          break;
        case 3:
          message.feeder = reader.string();
          break;
        case 4:
          message.validator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(
    object: Partial<MsgAggregateExchangeRateVote>,
  ): MsgAggregateExchangeRateVote {
    const message = createBaseMsgAggregateExchangeRateVote();
    message.salt = object.salt ?? '';
    message.exchangeRates = object.exchangeRates ?? '';
    message.feeder = object.feeder ?? '';
    message.validator = object.validator ?? '';
    return message;
  },
  fromAmino(
    object: MsgAggregateExchangeRateVoteAmino,
  ): MsgAggregateExchangeRateVote {
    const message = createBaseMsgAggregateExchangeRateVote();
    if (object.salt !== undefined && object.salt !== null) {
      message.salt = object.salt;
    }
    if (object.exchange_rates !== undefined && object.exchange_rates !== null) {
      message.exchangeRates = object.exchange_rates;
    }
    if (object.feeder !== undefined && object.feeder !== null) {
      message.feeder = object.feeder;
    }
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = object.validator;
    }
    return message;
  },
  toAmino(
    message: MsgAggregateExchangeRateVote,
  ): MsgAggregateExchangeRateVoteAmino {
    const obj: any = {};
    obj.salt = message.salt === '' ? undefined : message.salt;
    obj.exchange_rates =
      message.exchangeRates === '' ? undefined : message.exchangeRates;
    obj.feeder = message.feeder === '' ? undefined : message.feeder;
    obj.validator = message.validator === '' ? undefined : message.validator;
    return obj;
  },
  fromAminoMsg(
    object: MsgAggregateExchangeRateVoteAminoMsg,
  ): MsgAggregateExchangeRateVote {
    return MsgAggregateExchangeRateVote.fromAmino(object.value);
  },
  fromProtoMsg(
    message: MsgAggregateExchangeRateVoteProtoMsg,
  ): MsgAggregateExchangeRateVote {
    return MsgAggregateExchangeRateVote.decode(message.value);
  },
  toProto(message: MsgAggregateExchangeRateVote): Uint8Array {
    return MsgAggregateExchangeRateVote.encode(message).finish();
  },
  toProtoMsg(
    message: MsgAggregateExchangeRateVote,
  ): MsgAggregateExchangeRateVoteProtoMsg {
    return {
      typeUrl: '/symphony.oracle.v1beta1.MsgAggregateExchangeRateVote',
      value: MsgAggregateExchangeRateVote.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  MsgAggregateExchangeRateVote.typeUrl,
  MsgAggregateExchangeRateVote,
);
function createBaseMsgAggregateExchangeRateVoteResponse(): MsgAggregateExchangeRateVoteResponse {
  return {};
}
/**
 * MsgAggregateExchangeRateVoteResponse defines the
 * Msg/AggregateExchangeRateVote response type.
 * @name MsgAggregateExchangeRateVoteResponse
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.MsgAggregateExchangeRateVoteResponse
 */
export const MsgAggregateExchangeRateVoteResponse = {
  typeUrl: '/symphony.oracle.v1beta1.MsgAggregateExchangeRateVoteResponse',
  is(o: any): o is MsgAggregateExchangeRateVoteResponse {
    return o && o.$typeUrl === MsgAggregateExchangeRateVoteResponse.typeUrl;
  },
  isSDK(o: any): o is MsgAggregateExchangeRateVoteResponseSDKType {
    return o && o.$typeUrl === MsgAggregateExchangeRateVoteResponse.typeUrl;
  },
  isAmino(o: any): o is MsgAggregateExchangeRateVoteResponseAmino {
    return o && o.$typeUrl === MsgAggregateExchangeRateVoteResponse.typeUrl;
  },
  encode(
    _: MsgAggregateExchangeRateVoteResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): MsgAggregateExchangeRateVoteResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAggregateExchangeRateVoteResponse();
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
    _: Partial<MsgAggregateExchangeRateVoteResponse>,
  ): MsgAggregateExchangeRateVoteResponse {
    const message = createBaseMsgAggregateExchangeRateVoteResponse();
    return message;
  },
  fromAmino(
    _: MsgAggregateExchangeRateVoteResponseAmino,
  ): MsgAggregateExchangeRateVoteResponse {
    const message = createBaseMsgAggregateExchangeRateVoteResponse();
    return message;
  },
  toAmino(
    _: MsgAggregateExchangeRateVoteResponse,
  ): MsgAggregateExchangeRateVoteResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(
    object: MsgAggregateExchangeRateVoteResponseAminoMsg,
  ): MsgAggregateExchangeRateVoteResponse {
    return MsgAggregateExchangeRateVoteResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: MsgAggregateExchangeRateVoteResponseProtoMsg,
  ): MsgAggregateExchangeRateVoteResponse {
    return MsgAggregateExchangeRateVoteResponse.decode(message.value);
  },
  toProto(message: MsgAggregateExchangeRateVoteResponse): Uint8Array {
    return MsgAggregateExchangeRateVoteResponse.encode(message).finish();
  },
  toProtoMsg(
    message: MsgAggregateExchangeRateVoteResponse,
  ): MsgAggregateExchangeRateVoteResponseProtoMsg {
    return {
      typeUrl: '/symphony.oracle.v1beta1.MsgAggregateExchangeRateVoteResponse',
      value: MsgAggregateExchangeRateVoteResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  MsgAggregateExchangeRateVoteResponse.typeUrl,
  MsgAggregateExchangeRateVoteResponse,
);
function createBaseMsgDelegateFeedConsent(): MsgDelegateFeedConsent {
  return {
    operator: '',
    delegate: '',
  };
}
/**
 * MsgDelegateFeedConsent represents a message to
 * delegate oracle voting rights to another address.
 * @name MsgDelegateFeedConsent
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.MsgDelegateFeedConsent
 */
export const MsgDelegateFeedConsent = {
  typeUrl: '/symphony.oracle.v1beta1.MsgDelegateFeedConsent',
  is(o: any): o is MsgDelegateFeedConsent {
    return (
      o &&
      (o.$typeUrl === MsgDelegateFeedConsent.typeUrl ||
        (typeof o.operator === 'string' && typeof o.delegate === 'string'))
    );
  },
  isSDK(o: any): o is MsgDelegateFeedConsentSDKType {
    return (
      o &&
      (o.$typeUrl === MsgDelegateFeedConsent.typeUrl ||
        (typeof o.operator === 'string' && typeof o.delegate === 'string'))
    );
  },
  isAmino(o: any): o is MsgDelegateFeedConsentAmino {
    return (
      o &&
      (o.$typeUrl === MsgDelegateFeedConsent.typeUrl ||
        (typeof o.operator === 'string' && typeof o.delegate === 'string'))
    );
  },
  encode(
    message: MsgDelegateFeedConsent,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.operator !== '') {
      writer.uint32(10).string(message.operator);
    }
    if (message.delegate !== '') {
      writer.uint32(18).string(message.delegate);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): MsgDelegateFeedConsent {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegateFeedConsent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;
        case 2:
          message.delegate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgDelegateFeedConsent>): MsgDelegateFeedConsent {
    const message = createBaseMsgDelegateFeedConsent();
    message.operator = object.operator ?? '';
    message.delegate = object.delegate ?? '';
    return message;
  },
  fromAmino(object: MsgDelegateFeedConsentAmino): MsgDelegateFeedConsent {
    const message = createBaseMsgDelegateFeedConsent();
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.delegate !== undefined && object.delegate !== null) {
      message.delegate = object.delegate;
    }
    return message;
  },
  toAmino(message: MsgDelegateFeedConsent): MsgDelegateFeedConsentAmino {
    const obj: any = {};
    obj.operator = message.operator === '' ? undefined : message.operator;
    obj.delegate = message.delegate === '' ? undefined : message.delegate;
    return obj;
  },
  fromAminoMsg(object: MsgDelegateFeedConsentAminoMsg): MsgDelegateFeedConsent {
    return MsgDelegateFeedConsent.fromAmino(object.value);
  },
  fromProtoMsg(
    message: MsgDelegateFeedConsentProtoMsg,
  ): MsgDelegateFeedConsent {
    return MsgDelegateFeedConsent.decode(message.value);
  },
  toProto(message: MsgDelegateFeedConsent): Uint8Array {
    return MsgDelegateFeedConsent.encode(message).finish();
  },
  toProtoMsg(message: MsgDelegateFeedConsent): MsgDelegateFeedConsentProtoMsg {
    return {
      typeUrl: '/symphony.oracle.v1beta1.MsgDelegateFeedConsent',
      value: MsgDelegateFeedConsent.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  MsgDelegateFeedConsent.typeUrl,
  MsgDelegateFeedConsent,
);
function createBaseMsgDelegateFeedConsentResponse(): MsgDelegateFeedConsentResponse {
  return {};
}
/**
 * MsgDelegateFeedConsentResponse defines the Msg/DelegateFeedConsent response
 * type.
 * @name MsgDelegateFeedConsentResponse
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.MsgDelegateFeedConsentResponse
 */
export const MsgDelegateFeedConsentResponse = {
  typeUrl: '/symphony.oracle.v1beta1.MsgDelegateFeedConsentResponse',
  is(o: any): o is MsgDelegateFeedConsentResponse {
    return o && o.$typeUrl === MsgDelegateFeedConsentResponse.typeUrl;
  },
  isSDK(o: any): o is MsgDelegateFeedConsentResponseSDKType {
    return o && o.$typeUrl === MsgDelegateFeedConsentResponse.typeUrl;
  },
  isAmino(o: any): o is MsgDelegateFeedConsentResponseAmino {
    return o && o.$typeUrl === MsgDelegateFeedConsentResponse.typeUrl;
  },
  encode(
    _: MsgDelegateFeedConsentResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): MsgDelegateFeedConsentResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegateFeedConsentResponse();
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
    _: Partial<MsgDelegateFeedConsentResponse>,
  ): MsgDelegateFeedConsentResponse {
    const message = createBaseMsgDelegateFeedConsentResponse();
    return message;
  },
  fromAmino(
    _: MsgDelegateFeedConsentResponseAmino,
  ): MsgDelegateFeedConsentResponse {
    const message = createBaseMsgDelegateFeedConsentResponse();
    return message;
  },
  toAmino(
    _: MsgDelegateFeedConsentResponse,
  ): MsgDelegateFeedConsentResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(
    object: MsgDelegateFeedConsentResponseAminoMsg,
  ): MsgDelegateFeedConsentResponse {
    return MsgDelegateFeedConsentResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: MsgDelegateFeedConsentResponseProtoMsg,
  ): MsgDelegateFeedConsentResponse {
    return MsgDelegateFeedConsentResponse.decode(message.value);
  },
  toProto(message: MsgDelegateFeedConsentResponse): Uint8Array {
    return MsgDelegateFeedConsentResponse.encode(message).finish();
  },
  toProtoMsg(
    message: MsgDelegateFeedConsentResponse,
  ): MsgDelegateFeedConsentResponseProtoMsg {
    return {
      typeUrl: '/symphony.oracle.v1beta1.MsgDelegateFeedConsentResponse',
      value: MsgDelegateFeedConsentResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  MsgDelegateFeedConsentResponse.typeUrl,
  MsgDelegateFeedConsentResponse,
);
