//@ts-nocheck
import { BinaryReader, BinaryWriter } from '../../../binary';
import { Decimal } from '@cosmjs/math';
import { GlobalDecoderRegistry } from '../../../registry';
/**
 * Params defines the parameters for the oracle module.
 * @name Params
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.Params
 */
export interface Params {
  votePeriodEpochIdentifier: string;
  voteThreshold: string;
  rewardBand: string;
  rewardDistributionWindow: bigint;
  whitelist: Denom[];
  slashFraction: string;
  slashWindowEpochIdentifier: string;
  minValidPerWindow: string;
}
export interface ParamsProtoMsg {
  typeUrl: '/symphony.oracle.v1beta1.Params';
  value: Uint8Array;
}
/**
 * Params defines the parameters for the oracle module.
 * @name ParamsAmino
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.Params
 */
export interface ParamsAmino {
  vote_period_epoch_identifier?: string;
  vote_threshold?: string;
  reward_band?: string;
  reward_distribution_window?: string;
  whitelist?: DenomAmino[];
  slash_fraction?: string;
  slash_window_epoch_identifier?: string;
  min_valid_per_window?: string;
}
export interface ParamsAminoMsg {
  type: '/symphony.oracle.v1beta1.Params';
  value: ParamsAmino;
}
/**
 * Params defines the parameters for the oracle module.
 * @name ParamsSDKType
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.Params
 */
export interface ParamsSDKType {
  vote_period_epoch_identifier: string;
  vote_threshold: string;
  reward_band: string;
  reward_distribution_window: bigint;
  whitelist: DenomSDKType[];
  slash_fraction: string;
  slash_window_epoch_identifier: string;
  min_valid_per_window: string;
}
/**
 * Denom - the object to hold configurations of each denom
 * @name Denom
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.Denom
 */
export interface Denom {
  name: string;
  tobinTax: string;
}
export interface DenomProtoMsg {
  typeUrl: '/symphony.oracle.v1beta1.Denom';
  value: Uint8Array;
}
/**
 * Denom - the object to hold configurations of each denom
 * @name DenomAmino
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.Denom
 */
export interface DenomAmino {
  name?: string;
  tobin_tax?: string;
}
export interface DenomAminoMsg {
  type: '/symphony.oracle.v1beta1.Denom';
  value: DenomAmino;
}
/**
 * Denom - the object to hold configurations of each denom
 * @name DenomSDKType
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.Denom
 */
export interface DenomSDKType {
  name: string;
  tobin_tax: string;
}
/**
 * struct for aggregate prevoting on the ExchangeRateVote.
 * The purpose of aggregate prevote is to hide vote exchange rates with hash
 * which is formatted as hex string in SHA256("{salt}:{exchange
 * rate}{denom},...,{exchange rate}{denom}:{voter}")
 * @name AggregateExchangeRatePrevote
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.AggregateExchangeRatePrevote
 */
export interface AggregateExchangeRatePrevote {
  hash: string;
  voter: string;
  submitEpochCounter: bigint;
}
export interface AggregateExchangeRatePrevoteProtoMsg {
  typeUrl: '/symphony.oracle.v1beta1.AggregateExchangeRatePrevote';
  value: Uint8Array;
}
/**
 * struct for aggregate prevoting on the ExchangeRateVote.
 * The purpose of aggregate prevote is to hide vote exchange rates with hash
 * which is formatted as hex string in SHA256("{salt}:{exchange
 * rate}{denom},...,{exchange rate}{denom}:{voter}")
 * @name AggregateExchangeRatePrevoteAmino
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.AggregateExchangeRatePrevote
 */
export interface AggregateExchangeRatePrevoteAmino {
  hash?: string;
  voter?: string;
  submit_epoch_counter?: string;
}
export interface AggregateExchangeRatePrevoteAminoMsg {
  type: '/symphony.oracle.v1beta1.AggregateExchangeRatePrevote';
  value: AggregateExchangeRatePrevoteAmino;
}
/**
 * struct for aggregate prevoting on the ExchangeRateVote.
 * The purpose of aggregate prevote is to hide vote exchange rates with hash
 * which is formatted as hex string in SHA256("{salt}:{exchange
 * rate}{denom},...,{exchange rate}{denom}:{voter}")
 * @name AggregateExchangeRatePrevoteSDKType
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.AggregateExchangeRatePrevote
 */
export interface AggregateExchangeRatePrevoteSDKType {
  hash: string;
  voter: string;
  submit_epoch_counter: bigint;
}
/**
 * MsgAggregateExchangeRateVote - struct for voting on
 * the exchange rates of Luna denominated in various Terra assets.
 * @name AggregateExchangeRateVote
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.AggregateExchangeRateVote
 */
export interface AggregateExchangeRateVote {
  exchangeRateTuples: ExchangeRateTuple[];
  voter: string;
}
export interface AggregateExchangeRateVoteProtoMsg {
  typeUrl: '/symphony.oracle.v1beta1.AggregateExchangeRateVote';
  value: Uint8Array;
}
/**
 * MsgAggregateExchangeRateVote - struct for voting on
 * the exchange rates of Luna denominated in various Terra assets.
 * @name AggregateExchangeRateVoteAmino
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.AggregateExchangeRateVote
 */
export interface AggregateExchangeRateVoteAmino {
  exchange_rate_tuples?: ExchangeRateTupleAmino[];
  voter?: string;
}
export interface AggregateExchangeRateVoteAminoMsg {
  type: '/symphony.oracle.v1beta1.AggregateExchangeRateVote';
  value: AggregateExchangeRateVoteAmino;
}
/**
 * MsgAggregateExchangeRateVote - struct for voting on
 * the exchange rates of Luna denominated in various Terra assets.
 * @name AggregateExchangeRateVoteSDKType
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.AggregateExchangeRateVote
 */
export interface AggregateExchangeRateVoteSDKType {
  exchange_rate_tuples: ExchangeRateTupleSDKType[];
  voter: string;
}
/**
 * ExchangeRateTuple - struct to store interpreted exchange rates data to store
 * @name ExchangeRateTuple
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.ExchangeRateTuple
 */
export interface ExchangeRateTuple {
  denom: string;
  exchangeRate: string;
}
export interface ExchangeRateTupleProtoMsg {
  typeUrl: '/symphony.oracle.v1beta1.ExchangeRateTuple';
  value: Uint8Array;
}
/**
 * ExchangeRateTuple - struct to store interpreted exchange rates data to store
 * @name ExchangeRateTupleAmino
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.ExchangeRateTuple
 */
export interface ExchangeRateTupleAmino {
  denom?: string;
  exchange_rate?: string;
}
export interface ExchangeRateTupleAminoMsg {
  type: '/symphony.oracle.v1beta1.ExchangeRateTuple';
  value: ExchangeRateTupleAmino;
}
/**
 * ExchangeRateTuple - struct to store interpreted exchange rates data to store
 * @name ExchangeRateTupleSDKType
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.ExchangeRateTuple
 */
export interface ExchangeRateTupleSDKType {
  denom: string;
  exchange_rate: string;
}
function createBaseParams(): Params {
  return {
    votePeriodEpochIdentifier: '',
    voteThreshold: '',
    rewardBand: '',
    rewardDistributionWindow: BigInt(0),
    whitelist: [],
    slashFraction: '',
    slashWindowEpochIdentifier: '',
    minValidPerWindow: '',
  };
}
/**
 * Params defines the parameters for the oracle module.
 * @name Params
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.Params
 */
export const Params = {
  typeUrl: '/symphony.oracle.v1beta1.Params',
  is(o: any): o is Params {
    return (
      o &&
      (o.$typeUrl === Params.typeUrl ||
        (typeof o.votePeriodEpochIdentifier === 'string' &&
          typeof o.voteThreshold === 'string' &&
          typeof o.rewardBand === 'string' &&
          typeof o.rewardDistributionWindow === 'bigint' &&
          Array.isArray(o.whitelist) &&
          (!o.whitelist.length || Denom.is(o.whitelist[0])) &&
          typeof o.slashFraction === 'string' &&
          typeof o.slashWindowEpochIdentifier === 'string' &&
          typeof o.minValidPerWindow === 'string'))
    );
  },
  isSDK(o: any): o is ParamsSDKType {
    return (
      o &&
      (o.$typeUrl === Params.typeUrl ||
        (typeof o.vote_period_epoch_identifier === 'string' &&
          typeof o.vote_threshold === 'string' &&
          typeof o.reward_band === 'string' &&
          typeof o.reward_distribution_window === 'bigint' &&
          Array.isArray(o.whitelist) &&
          (!o.whitelist.length || Denom.isSDK(o.whitelist[0])) &&
          typeof o.slash_fraction === 'string' &&
          typeof o.slash_window_epoch_identifier === 'string' &&
          typeof o.min_valid_per_window === 'string'))
    );
  },
  isAmino(o: any): o is ParamsAmino {
    return (
      o &&
      (o.$typeUrl === Params.typeUrl ||
        (typeof o.vote_period_epoch_identifier === 'string' &&
          typeof o.vote_threshold === 'string' &&
          typeof o.reward_band === 'string' &&
          typeof o.reward_distribution_window === 'bigint' &&
          Array.isArray(o.whitelist) &&
          (!o.whitelist.length || Denom.isAmino(o.whitelist[0])) &&
          typeof o.slash_fraction === 'string' &&
          typeof o.slash_window_epoch_identifier === 'string' &&
          typeof o.min_valid_per_window === 'string'))
    );
  },
  encode(
    message: Params,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.votePeriodEpochIdentifier !== '') {
      writer.uint32(10).string(message.votePeriodEpochIdentifier);
    }
    if (message.voteThreshold !== '') {
      writer
        .uint32(18)
        .string(Decimal.fromUserInput(message.voteThreshold, 18).atomics);
    }
    if (message.rewardBand !== '') {
      writer
        .uint32(26)
        .string(Decimal.fromUserInput(message.rewardBand, 18).atomics);
    }
    if (message.rewardDistributionWindow !== BigInt(0)) {
      writer.uint32(32).uint64(message.rewardDistributionWindow);
    }
    for (const v of message.whitelist) {
      Denom.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.slashFraction !== '') {
      writer
        .uint32(50)
        .string(Decimal.fromUserInput(message.slashFraction, 18).atomics);
    }
    if (message.slashWindowEpochIdentifier !== '') {
      writer.uint32(58).string(message.slashWindowEpochIdentifier);
    }
    if (message.minValidPerWindow !== '') {
      writer
        .uint32(66)
        .string(Decimal.fromUserInput(message.minValidPerWindow, 18).atomics);
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
          message.votePeriodEpochIdentifier = reader.string();
          break;
        case 2:
          message.voteThreshold = Decimal.fromAtomics(
            reader.string(),
            18,
          ).toString();
          break;
        case 3:
          message.rewardBand = Decimal.fromAtomics(
            reader.string(),
            18,
          ).toString();
          break;
        case 4:
          message.rewardDistributionWindow = reader.uint64();
          break;
        case 5:
          message.whitelist.push(Denom.decode(reader, reader.uint32()));
          break;
        case 6:
          message.slashFraction = Decimal.fromAtomics(
            reader.string(),
            18,
          ).toString();
          break;
        case 7:
          message.slashWindowEpochIdentifier = reader.string();
          break;
        case 8:
          message.minValidPerWindow = Decimal.fromAtomics(
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
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.votePeriodEpochIdentifier = object.votePeriodEpochIdentifier ?? '';
    message.voteThreshold = object.voteThreshold ?? '';
    message.rewardBand = object.rewardBand ?? '';
    message.rewardDistributionWindow =
      object.rewardDistributionWindow !== undefined &&
      object.rewardDistributionWindow !== null
        ? BigInt(object.rewardDistributionWindow.toString())
        : BigInt(0);
    message.whitelist = object.whitelist?.map(e => Denom.fromPartial(e)) || [];
    message.slashFraction = object.slashFraction ?? '';
    message.slashWindowEpochIdentifier =
      object.slashWindowEpochIdentifier ?? '';
    message.minValidPerWindow = object.minValidPerWindow ?? '';
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (
      object.vote_period_epoch_identifier !== undefined &&
      object.vote_period_epoch_identifier !== null
    ) {
      message.votePeriodEpochIdentifier = object.vote_period_epoch_identifier;
    }
    if (object.vote_threshold !== undefined && object.vote_threshold !== null) {
      message.voteThreshold = object.vote_threshold;
    }
    if (object.reward_band !== undefined && object.reward_band !== null) {
      message.rewardBand = object.reward_band;
    }
    if (
      object.reward_distribution_window !== undefined &&
      object.reward_distribution_window !== null
    ) {
      message.rewardDistributionWindow = BigInt(
        object.reward_distribution_window,
      );
    }
    message.whitelist = object.whitelist?.map(e => Denom.fromAmino(e)) || [];
    if (object.slash_fraction !== undefined && object.slash_fraction !== null) {
      message.slashFraction = object.slash_fraction;
    }
    if (
      object.slash_window_epoch_identifier !== undefined &&
      object.slash_window_epoch_identifier !== null
    ) {
      message.slashWindowEpochIdentifier = object.slash_window_epoch_identifier;
    }
    if (
      object.min_valid_per_window !== undefined &&
      object.min_valid_per_window !== null
    ) {
      message.minValidPerWindow = object.min_valid_per_window;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.vote_period_epoch_identifier =
      message.votePeriodEpochIdentifier === ''
        ? undefined
        : message.votePeriodEpochIdentifier;
    obj.vote_threshold =
      message.voteThreshold === '' ? undefined : message.voteThreshold;
    obj.reward_band =
      message.rewardBand === '' ? undefined : message.rewardBand;
    obj.reward_distribution_window =
      message.rewardDistributionWindow !== BigInt(0)
        ? message.rewardDistributionWindow?.toString()
        : undefined;
    if (message.whitelist) {
      obj.whitelist = message.whitelist.map(e =>
        e ? Denom.toAmino(e) : undefined,
      );
    } else {
      obj.whitelist = message.whitelist;
    }
    obj.slash_fraction =
      message.slashFraction === '' ? undefined : message.slashFraction;
    obj.slash_window_epoch_identifier =
      message.slashWindowEpochIdentifier === ''
        ? undefined
        : message.slashWindowEpochIdentifier;
    obj.min_valid_per_window =
      message.minValidPerWindow === '' ? undefined : message.minValidPerWindow;
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
      typeUrl: '/symphony.oracle.v1beta1.Params',
      value: Params.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(Params.typeUrl, Params);
function createBaseDenom(): Denom {
  return {
    name: '',
    tobinTax: '',
  };
}
/**
 * Denom - the object to hold configurations of each denom
 * @name Denom
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.Denom
 */
export const Denom = {
  typeUrl: '/symphony.oracle.v1beta1.Denom',
  is(o: any): o is Denom {
    return (
      o &&
      (o.$typeUrl === Denom.typeUrl ||
        (typeof o.name === 'string' && typeof o.tobinTax === 'string'))
    );
  },
  isSDK(o: any): o is DenomSDKType {
    return (
      o &&
      (o.$typeUrl === Denom.typeUrl ||
        (typeof o.name === 'string' && typeof o.tobin_tax === 'string'))
    );
  },
  isAmino(o: any): o is DenomAmino {
    return (
      o &&
      (o.$typeUrl === Denom.typeUrl ||
        (typeof o.name === 'string' && typeof o.tobin_tax === 'string'))
    );
  },
  encode(
    message: Denom,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.name !== '') {
      writer.uint32(10).string(message.name);
    }
    if (message.tobinTax !== '') {
      writer
        .uint32(18)
        .string(Decimal.fromUserInput(message.tobinTax, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Denom {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.tobinTax = Decimal.fromAtomics(
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
  fromPartial(object: Partial<Denom>): Denom {
    const message = createBaseDenom();
    message.name = object.name ?? '';
    message.tobinTax = object.tobinTax ?? '';
    return message;
  },
  fromAmino(object: DenomAmino): Denom {
    const message = createBaseDenom();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.tobin_tax !== undefined && object.tobin_tax !== null) {
      message.tobinTax = object.tobin_tax;
    }
    return message;
  },
  toAmino(message: Denom): DenomAmino {
    const obj: any = {};
    obj.name = message.name === '' ? undefined : message.name;
    obj.tobin_tax = message.tobinTax === '' ? undefined : message.tobinTax;
    return obj;
  },
  fromAminoMsg(object: DenomAminoMsg): Denom {
    return Denom.fromAmino(object.value);
  },
  fromProtoMsg(message: DenomProtoMsg): Denom {
    return Denom.decode(message.value);
  },
  toProto(message: Denom): Uint8Array {
    return Denom.encode(message).finish();
  },
  toProtoMsg(message: Denom): DenomProtoMsg {
    return {
      typeUrl: '/symphony.oracle.v1beta1.Denom',
      value: Denom.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(Denom.typeUrl, Denom);
function createBaseAggregateExchangeRatePrevote(): AggregateExchangeRatePrevote {
  return {
    hash: '',
    voter: '',
    submitEpochCounter: BigInt(0),
  };
}
/**
 * struct for aggregate prevoting on the ExchangeRateVote.
 * The purpose of aggregate prevote is to hide vote exchange rates with hash
 * which is formatted as hex string in SHA256("{salt}:{exchange
 * rate}{denom},...,{exchange rate}{denom}:{voter}")
 * @name AggregateExchangeRatePrevote
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.AggregateExchangeRatePrevote
 */
export const AggregateExchangeRatePrevote = {
  typeUrl: '/symphony.oracle.v1beta1.AggregateExchangeRatePrevote',
  is(o: any): o is AggregateExchangeRatePrevote {
    return (
      o &&
      (o.$typeUrl === AggregateExchangeRatePrevote.typeUrl ||
        (typeof o.hash === 'string' &&
          typeof o.voter === 'string' &&
          typeof o.submitEpochCounter === 'bigint'))
    );
  },
  isSDK(o: any): o is AggregateExchangeRatePrevoteSDKType {
    return (
      o &&
      (o.$typeUrl === AggregateExchangeRatePrevote.typeUrl ||
        (typeof o.hash === 'string' &&
          typeof o.voter === 'string' &&
          typeof o.submit_epoch_counter === 'bigint'))
    );
  },
  isAmino(o: any): o is AggregateExchangeRatePrevoteAmino {
    return (
      o &&
      (o.$typeUrl === AggregateExchangeRatePrevote.typeUrl ||
        (typeof o.hash === 'string' &&
          typeof o.voter === 'string' &&
          typeof o.submit_epoch_counter === 'bigint'))
    );
  },
  encode(
    message: AggregateExchangeRatePrevote,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.hash !== '') {
      writer.uint32(10).string(message.hash);
    }
    if (message.voter !== '') {
      writer.uint32(18).string(message.voter);
    }
    if (message.submitEpochCounter !== BigInt(0)) {
      writer.uint32(24).uint64(message.submitEpochCounter);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): AggregateExchangeRatePrevote {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAggregateExchangeRatePrevote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
          break;
        case 2:
          message.voter = reader.string();
          break;
        case 3:
          message.submitEpochCounter = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(
    object: Partial<AggregateExchangeRatePrevote>,
  ): AggregateExchangeRatePrevote {
    const message = createBaseAggregateExchangeRatePrevote();
    message.hash = object.hash ?? '';
    message.voter = object.voter ?? '';
    message.submitEpochCounter =
      object.submitEpochCounter !== undefined &&
      object.submitEpochCounter !== null
        ? BigInt(object.submitEpochCounter.toString())
        : BigInt(0);
    return message;
  },
  fromAmino(
    object: AggregateExchangeRatePrevoteAmino,
  ): AggregateExchangeRatePrevote {
    const message = createBaseAggregateExchangeRatePrevote();
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    }
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = object.voter;
    }
    if (
      object.submit_epoch_counter !== undefined &&
      object.submit_epoch_counter !== null
    ) {
      message.submitEpochCounter = BigInt(object.submit_epoch_counter);
    }
    return message;
  },
  toAmino(
    message: AggregateExchangeRatePrevote,
  ): AggregateExchangeRatePrevoteAmino {
    const obj: any = {};
    obj.hash = message.hash === '' ? undefined : message.hash;
    obj.voter = message.voter === '' ? undefined : message.voter;
    obj.submit_epoch_counter =
      message.submitEpochCounter !== BigInt(0)
        ? message.submitEpochCounter?.toString()
        : undefined;
    return obj;
  },
  fromAminoMsg(
    object: AggregateExchangeRatePrevoteAminoMsg,
  ): AggregateExchangeRatePrevote {
    return AggregateExchangeRatePrevote.fromAmino(object.value);
  },
  fromProtoMsg(
    message: AggregateExchangeRatePrevoteProtoMsg,
  ): AggregateExchangeRatePrevote {
    return AggregateExchangeRatePrevote.decode(message.value);
  },
  toProto(message: AggregateExchangeRatePrevote): Uint8Array {
    return AggregateExchangeRatePrevote.encode(message).finish();
  },
  toProtoMsg(
    message: AggregateExchangeRatePrevote,
  ): AggregateExchangeRatePrevoteProtoMsg {
    return {
      typeUrl: '/symphony.oracle.v1beta1.AggregateExchangeRatePrevote',
      value: AggregateExchangeRatePrevote.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  AggregateExchangeRatePrevote.typeUrl,
  AggregateExchangeRatePrevote,
);
function createBaseAggregateExchangeRateVote(): AggregateExchangeRateVote {
  return {
    exchangeRateTuples: [],
    voter: '',
  };
}
/**
 * MsgAggregateExchangeRateVote - struct for voting on
 * the exchange rates of Luna denominated in various Terra assets.
 * @name AggregateExchangeRateVote
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.AggregateExchangeRateVote
 */
export const AggregateExchangeRateVote = {
  typeUrl: '/symphony.oracle.v1beta1.AggregateExchangeRateVote',
  is(o: any): o is AggregateExchangeRateVote {
    return (
      o &&
      (o.$typeUrl === AggregateExchangeRateVote.typeUrl ||
        (Array.isArray(o.exchangeRateTuples) &&
          (!o.exchangeRateTuples.length ||
            ExchangeRateTuple.is(o.exchangeRateTuples[0])) &&
          typeof o.voter === 'string'))
    );
  },
  isSDK(o: any): o is AggregateExchangeRateVoteSDKType {
    return (
      o &&
      (o.$typeUrl === AggregateExchangeRateVote.typeUrl ||
        (Array.isArray(o.exchange_rate_tuples) &&
          (!o.exchange_rate_tuples.length ||
            ExchangeRateTuple.isSDK(o.exchange_rate_tuples[0])) &&
          typeof o.voter === 'string'))
    );
  },
  isAmino(o: any): o is AggregateExchangeRateVoteAmino {
    return (
      o &&
      (o.$typeUrl === AggregateExchangeRateVote.typeUrl ||
        (Array.isArray(o.exchange_rate_tuples) &&
          (!o.exchange_rate_tuples.length ||
            ExchangeRateTuple.isAmino(o.exchange_rate_tuples[0])) &&
          typeof o.voter === 'string'))
    );
  },
  encode(
    message: AggregateExchangeRateVote,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.exchangeRateTuples) {
      ExchangeRateTuple.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.voter !== '') {
      writer.uint32(18).string(message.voter);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): AggregateExchangeRateVote {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAggregateExchangeRateVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exchangeRateTuples.push(
            ExchangeRateTuple.decode(reader, reader.uint32()),
          );
          break;
        case 2:
          message.voter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(
    object: Partial<AggregateExchangeRateVote>,
  ): AggregateExchangeRateVote {
    const message = createBaseAggregateExchangeRateVote();
    message.exchangeRateTuples =
      object.exchangeRateTuples?.map(e => ExchangeRateTuple.fromPartial(e)) ||
      [];
    message.voter = object.voter ?? '';
    return message;
  },
  fromAmino(object: AggregateExchangeRateVoteAmino): AggregateExchangeRateVote {
    const message = createBaseAggregateExchangeRateVote();
    message.exchangeRateTuples =
      object.exchange_rate_tuples?.map(e => ExchangeRateTuple.fromAmino(e)) ||
      [];
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = object.voter;
    }
    return message;
  },
  toAmino(message: AggregateExchangeRateVote): AggregateExchangeRateVoteAmino {
    const obj: any = {};
    if (message.exchangeRateTuples) {
      obj.exchange_rate_tuples = message.exchangeRateTuples.map(e =>
        e ? ExchangeRateTuple.toAmino(e) : undefined,
      );
    } else {
      obj.exchange_rate_tuples = message.exchangeRateTuples;
    }
    obj.voter = message.voter === '' ? undefined : message.voter;
    return obj;
  },
  fromAminoMsg(
    object: AggregateExchangeRateVoteAminoMsg,
  ): AggregateExchangeRateVote {
    return AggregateExchangeRateVote.fromAmino(object.value);
  },
  fromProtoMsg(
    message: AggregateExchangeRateVoteProtoMsg,
  ): AggregateExchangeRateVote {
    return AggregateExchangeRateVote.decode(message.value);
  },
  toProto(message: AggregateExchangeRateVote): Uint8Array {
    return AggregateExchangeRateVote.encode(message).finish();
  },
  toProtoMsg(
    message: AggregateExchangeRateVote,
  ): AggregateExchangeRateVoteProtoMsg {
    return {
      typeUrl: '/symphony.oracle.v1beta1.AggregateExchangeRateVote',
      value: AggregateExchangeRateVote.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  AggregateExchangeRateVote.typeUrl,
  AggregateExchangeRateVote,
);
function createBaseExchangeRateTuple(): ExchangeRateTuple {
  return {
    denom: '',
    exchangeRate: '',
  };
}
/**
 * ExchangeRateTuple - struct to store interpreted exchange rates data to store
 * @name ExchangeRateTuple
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.ExchangeRateTuple
 */
export const ExchangeRateTuple = {
  typeUrl: '/symphony.oracle.v1beta1.ExchangeRateTuple',
  is(o: any): o is ExchangeRateTuple {
    return (
      o &&
      (o.$typeUrl === ExchangeRateTuple.typeUrl ||
        (typeof o.denom === 'string' && typeof o.exchangeRate === 'string'))
    );
  },
  isSDK(o: any): o is ExchangeRateTupleSDKType {
    return (
      o &&
      (o.$typeUrl === ExchangeRateTuple.typeUrl ||
        (typeof o.denom === 'string' && typeof o.exchange_rate === 'string'))
    );
  },
  isAmino(o: any): o is ExchangeRateTupleAmino {
    return (
      o &&
      (o.$typeUrl === ExchangeRateTuple.typeUrl ||
        (typeof o.denom === 'string' && typeof o.exchange_rate === 'string'))
    );
  },
  encode(
    message: ExchangeRateTuple,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.denom !== '') {
      writer.uint32(10).string(message.denom);
    }
    if (message.exchangeRate !== '') {
      writer
        .uint32(18)
        .string(Decimal.fromUserInput(message.exchangeRate, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ExchangeRateTuple {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExchangeRateTuple();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.exchangeRate = Decimal.fromAtomics(
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
  fromPartial(object: Partial<ExchangeRateTuple>): ExchangeRateTuple {
    const message = createBaseExchangeRateTuple();
    message.denom = object.denom ?? '';
    message.exchangeRate = object.exchangeRate ?? '';
    return message;
  },
  fromAmino(object: ExchangeRateTupleAmino): ExchangeRateTuple {
    const message = createBaseExchangeRateTuple();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.exchange_rate !== undefined && object.exchange_rate !== null) {
      message.exchangeRate = object.exchange_rate;
    }
    return message;
  },
  toAmino(message: ExchangeRateTuple): ExchangeRateTupleAmino {
    const obj: any = {};
    obj.denom = message.denom === '' ? undefined : message.denom;
    obj.exchange_rate =
      message.exchangeRate === '' ? undefined : message.exchangeRate;
    return obj;
  },
  fromAminoMsg(object: ExchangeRateTupleAminoMsg): ExchangeRateTuple {
    return ExchangeRateTuple.fromAmino(object.value);
  },
  fromProtoMsg(message: ExchangeRateTupleProtoMsg): ExchangeRateTuple {
    return ExchangeRateTuple.decode(message.value);
  },
  toProto(message: ExchangeRateTuple): Uint8Array {
    return ExchangeRateTuple.encode(message).finish();
  },
  toProtoMsg(message: ExchangeRateTuple): ExchangeRateTupleProtoMsg {
    return {
      typeUrl: '/symphony.oracle.v1beta1.ExchangeRateTuple',
      value: ExchangeRateTuple.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(ExchangeRateTuple.typeUrl, ExchangeRateTuple);
