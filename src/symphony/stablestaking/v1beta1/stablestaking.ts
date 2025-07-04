//@ts-nocheck
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { bytesFromBase64, base64FromBytes } from "../../../helpers";
export interface Params {
  rewardRate: string;
  unbondingDuration: Duration;
  supportedTokens: string[];
  rewardEpochIdentifier: string;
  unbondingEpochIdentifier: string;
  maxStakingAmount: Uint8Array;
}
export interface ParamsProtoMsg {
  typeUrl: "/symphony.stablestaking.v1beta1.Params";
  value: Uint8Array;
}
export interface ParamsAmino {
  reward_rate?: string;
  unbonding_duration?: DurationAmino;
  supported_tokens?: string[];
  reward_epoch_identifier?: string;
  unbonding_epoch_identifier?: string;
  max_staking_amount?: string;
}
export interface ParamsAminoMsg {
  type: "/symphony.stablestaking.v1beta1.Params";
  value: ParamsAmino;
}
export interface ParamsSDKType {
  reward_rate: string;
  unbonding_duration: DurationSDKType;
  supported_tokens: string[];
  reward_epoch_identifier: string;
  unbonding_epoch_identifier: string;
  max_staking_amount: Uint8Array;
}
export interface GenesisState {
  params: Params;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/symphony.stablestaking.v1beta1.GenesisState";
  value: Uint8Array;
}
export interface GenesisStateAmino {
  params?: ParamsAmino;
}
export interface GenesisStateAminoMsg {
  type: "/symphony.stablestaking.v1beta1.GenesisState";
  value: GenesisStateAmino;
}
export interface GenesisStateSDKType {
  params: ParamsSDKType;
}
export interface StakingPool {
  denom: string;
  totalStaked: Uint8Array;
  totalShares: Uint8Array;
}
export interface StakingPoolProtoMsg {
  typeUrl: "/symphony.stablestaking.v1beta1.StakingPool";
  value: Uint8Array;
}
export interface StakingPoolAmino {
  denom?: string;
  total_staked?: string;
  total_shares?: string;
}
export interface StakingPoolAminoMsg {
  type: "/symphony.stablestaking.v1beta1.StakingPool";
  value: StakingPoolAmino;
}
export interface StakingPoolSDKType {
  denom: string;
  total_staked: Uint8Array;
  total_shares: Uint8Array;
}
export interface UserStake {
  address: string;
  shares: Uint8Array;
  epoch: bigint;
}
export interface UserStakeProtoMsg {
  typeUrl: "/symphony.stablestaking.v1beta1.UserStake";
  value: Uint8Array;
}
export interface UserStakeAmino {
  address?: string;
  shares?: string;
  epoch?: string;
}
export interface UserStakeAminoMsg {
  type: "/symphony.stablestaking.v1beta1.UserStake";
  value: UserStakeAmino;
}
export interface UserStakeSDKType {
  address: string;
  shares: Uint8Array;
  epoch: bigint;
}
export interface UnbondingInfo {
  address: string;
  amount: Uint8Array;
  denom: string;
  unbondEpoch: bigint;
}
export interface UnbondingInfoProtoMsg {
  typeUrl: "/symphony.stablestaking.v1beta1.UnbondingInfo";
  value: Uint8Array;
}
export interface UnbondingInfoAmino {
  address?: string;
  amount?: string;
  denom?: string;
  unbond_epoch?: string;
}
export interface UnbondingInfoAminoMsg {
  type: "/symphony.stablestaking.v1beta1.UnbondingInfo";
  value: UnbondingInfoAmino;
}
export interface UnbondingInfoSDKType {
  address: string;
  amount: Uint8Array;
  denom: string;
  unbond_epoch: bigint;
}
export interface EpochSnapshot {
  totalStaked: Uint8Array;
  totalShares: Uint8Array;
  stakers: UserStake[];
}
export interface EpochSnapshotProtoMsg {
  typeUrl: "/symphony.stablestaking.v1beta1.EpochSnapshot";
  value: Uint8Array;
}
export interface EpochSnapshotAmino {
  total_staked?: string;
  total_shares?: string;
  stakers?: UserStakeAmino[];
}
export interface EpochSnapshotAminoMsg {
  type: "/symphony.stablestaking.v1beta1.EpochSnapshot";
  value: EpochSnapshotAmino;
}
export interface EpochSnapshotSDKType {
  total_staked: Uint8Array;
  total_shares: Uint8Array;
  stakers: UserStakeSDKType[];
}
function createBaseParams(): Params {
  return {
    rewardRate: "",
    unbondingDuration: Duration.fromPartial({}),
    supportedTokens: [],
    rewardEpochIdentifier: "",
    unbondingEpochIdentifier: "",
    maxStakingAmount: new Uint8Array()
  };
}
export const Params = {
  typeUrl: "/symphony.stablestaking.v1beta1.Params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.rewardRate === "string" && Duration.is(o.unbondingDuration) && Array.isArray(o.supportedTokens) && (!o.supportedTokens.length || typeof o.supportedTokens[0] === "string") && typeof o.rewardEpochIdentifier === "string" && typeof o.unbondingEpochIdentifier === "string" && (o.maxStakingAmount instanceof Uint8Array || typeof o.maxStakingAmount === "string"));
  },
  isSDK(o: any): o is ParamsSDKType {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.reward_rate === "string" && Duration.isSDK(o.unbonding_duration) && Array.isArray(o.supported_tokens) && (!o.supported_tokens.length || typeof o.supported_tokens[0] === "string") && typeof o.reward_epoch_identifier === "string" && typeof o.unbonding_epoch_identifier === "string" && (o.max_staking_amount instanceof Uint8Array || typeof o.max_staking_amount === "string"));
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.reward_rate === "string" && Duration.isAmino(o.unbonding_duration) && Array.isArray(o.supported_tokens) && (!o.supported_tokens.length || typeof o.supported_tokens[0] === "string") && typeof o.reward_epoch_identifier === "string" && typeof o.unbonding_epoch_identifier === "string" && (o.max_staking_amount instanceof Uint8Array || typeof o.max_staking_amount === "string"));
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rewardRate !== "") {
      writer.uint32(10).string(message.rewardRate);
    }
    if (message.unbondingDuration !== undefined) {
      Duration.encode(message.unbondingDuration, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.supportedTokens) {
      writer.uint32(26).string(v!);
    }
    if (message.rewardEpochIdentifier !== "") {
      writer.uint32(34).string(message.rewardEpochIdentifier);
    }
    if (message.unbondingEpochIdentifier !== "") {
      writer.uint32(42).string(message.unbondingEpochIdentifier);
    }
    if (message.maxStakingAmount.length !== 0) {
      writer.uint32(50).bytes(message.maxStakingAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewardRate = reader.string();
          break;
        case 2:
          message.unbondingDuration = Duration.decode(reader, reader.uint32());
          break;
        case 3:
          message.supportedTokens.push(reader.string());
          break;
        case 4:
          message.rewardEpochIdentifier = reader.string();
          break;
        case 5:
          message.unbondingEpochIdentifier = reader.string();
          break;
        case 6:
          message.maxStakingAmount = reader.bytes();
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
    message.rewardRate = object.rewardRate ?? "";
    message.unbondingDuration = object.unbondingDuration !== undefined && object.unbondingDuration !== null ? Duration.fromPartial(object.unbondingDuration) : undefined;
    message.supportedTokens = object.supportedTokens?.map(e => e) || [];
    message.rewardEpochIdentifier = object.rewardEpochIdentifier ?? "";
    message.unbondingEpochIdentifier = object.unbondingEpochIdentifier ?? "";
    message.maxStakingAmount = object.maxStakingAmount ?? new Uint8Array();
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.reward_rate !== undefined && object.reward_rate !== null) {
      message.rewardRate = object.reward_rate;
    }
    if (object.unbonding_duration !== undefined && object.unbonding_duration !== null) {
      message.unbondingDuration = Duration.fromAmino(object.unbonding_duration);
    }
    message.supportedTokens = object.supported_tokens?.map(e => e) || [];
    if (object.reward_epoch_identifier !== undefined && object.reward_epoch_identifier !== null) {
      message.rewardEpochIdentifier = object.reward_epoch_identifier;
    }
    if (object.unbonding_epoch_identifier !== undefined && object.unbonding_epoch_identifier !== null) {
      message.unbondingEpochIdentifier = object.unbonding_epoch_identifier;
    }
    if (object.max_staking_amount !== undefined && object.max_staking_amount !== null) {
      message.maxStakingAmount = bytesFromBase64(object.max_staking_amount);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.reward_rate = message.rewardRate === "" ? undefined : message.rewardRate;
    obj.unbonding_duration = message.unbondingDuration ? Duration.toAmino(message.unbondingDuration) : undefined;
    if (message.supportedTokens) {
      obj.supported_tokens = message.supportedTokens.map(e => e);
    } else {
      obj.supported_tokens = message.supportedTokens;
    }
    obj.reward_epoch_identifier = message.rewardEpochIdentifier === "" ? undefined : message.rewardEpochIdentifier;
    obj.unbonding_epoch_identifier = message.unbondingEpochIdentifier === "" ? undefined : message.unbondingEpochIdentifier;
    obj.max_staking_amount = message.maxStakingAmount ? base64FromBytes(message.maxStakingAmount) : undefined;
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
      typeUrl: "/symphony.stablestaking.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Params.typeUrl, Params);
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({})
  };
}
export const GenesisState = {
  typeUrl: "/symphony.stablestaking.v1beta1.GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.is(o.params));
  },
  isSDK(o: any): o is GenesisStateSDKType {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isSDK(o.params));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isAmino(o.params));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
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
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/symphony.stablestaking.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GenesisState.typeUrl, GenesisState);
function createBaseStakingPool(): StakingPool {
  return {
    denom: "",
    totalStaked: new Uint8Array(),
    totalShares: new Uint8Array()
  };
}
export const StakingPool = {
  typeUrl: "/symphony.stablestaking.v1beta1.StakingPool",
  is(o: any): o is StakingPool {
    return o && (o.$typeUrl === StakingPool.typeUrl || typeof o.denom === "string" && (o.totalStaked instanceof Uint8Array || typeof o.totalStaked === "string") && (o.totalShares instanceof Uint8Array || typeof o.totalShares === "string"));
  },
  isSDK(o: any): o is StakingPoolSDKType {
    return o && (o.$typeUrl === StakingPool.typeUrl || typeof o.denom === "string" && (o.total_staked instanceof Uint8Array || typeof o.total_staked === "string") && (o.total_shares instanceof Uint8Array || typeof o.total_shares === "string"));
  },
  isAmino(o: any): o is StakingPoolAmino {
    return o && (o.$typeUrl === StakingPool.typeUrl || typeof o.denom === "string" && (o.total_staked instanceof Uint8Array || typeof o.total_staked === "string") && (o.total_shares instanceof Uint8Array || typeof o.total_shares === "string"));
  },
  encode(message: StakingPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.totalStaked.length !== 0) {
      writer.uint32(18).bytes(message.totalStaked);
    }
    if (message.totalShares.length !== 0) {
      writer.uint32(26).bytes(message.totalShares);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StakingPool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakingPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.totalStaked = reader.bytes();
          break;
        case 3:
          message.totalShares = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<StakingPool>): StakingPool {
    const message = createBaseStakingPool();
    message.denom = object.denom ?? "";
    message.totalStaked = object.totalStaked ?? new Uint8Array();
    message.totalShares = object.totalShares ?? new Uint8Array();
    return message;
  },
  fromAmino(object: StakingPoolAmino): StakingPool {
    const message = createBaseStakingPool();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.total_staked !== undefined && object.total_staked !== null) {
      message.totalStaked = bytesFromBase64(object.total_staked);
    }
    if (object.total_shares !== undefined && object.total_shares !== null) {
      message.totalShares = bytesFromBase64(object.total_shares);
    }
    return message;
  },
  toAmino(message: StakingPool): StakingPoolAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.total_staked = message.totalStaked ? base64FromBytes(message.totalStaked) : undefined;
    obj.total_shares = message.totalShares ? base64FromBytes(message.totalShares) : undefined;
    return obj;
  },
  fromAminoMsg(object: StakingPoolAminoMsg): StakingPool {
    return StakingPool.fromAmino(object.value);
  },
  fromProtoMsg(message: StakingPoolProtoMsg): StakingPool {
    return StakingPool.decode(message.value);
  },
  toProto(message: StakingPool): Uint8Array {
    return StakingPool.encode(message).finish();
  },
  toProtoMsg(message: StakingPool): StakingPoolProtoMsg {
    return {
      typeUrl: "/symphony.stablestaking.v1beta1.StakingPool",
      value: StakingPool.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(StakingPool.typeUrl, StakingPool);
function createBaseUserStake(): UserStake {
  return {
    address: "",
    shares: new Uint8Array(),
    epoch: BigInt(0)
  };
}
export const UserStake = {
  typeUrl: "/symphony.stablestaking.v1beta1.UserStake",
  is(o: any): o is UserStake {
    return o && (o.$typeUrl === UserStake.typeUrl || typeof o.address === "string" && (o.shares instanceof Uint8Array || typeof o.shares === "string") && typeof o.epoch === "bigint");
  },
  isSDK(o: any): o is UserStakeSDKType {
    return o && (o.$typeUrl === UserStake.typeUrl || typeof o.address === "string" && (o.shares instanceof Uint8Array || typeof o.shares === "string") && typeof o.epoch === "bigint");
  },
  isAmino(o: any): o is UserStakeAmino {
    return o && (o.$typeUrl === UserStake.typeUrl || typeof o.address === "string" && (o.shares instanceof Uint8Array || typeof o.shares === "string") && typeof o.epoch === "bigint");
  },
  encode(message: UserStake, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.shares.length !== 0) {
      writer.uint32(18).bytes(message.shares);
    }
    if (message.epoch !== BigInt(0)) {
      writer.uint32(24).int64(message.epoch);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UserStake {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserStake();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.shares = reader.bytes();
          break;
        case 3:
          message.epoch = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<UserStake>): UserStake {
    const message = createBaseUserStake();
    message.address = object.address ?? "";
    message.shares = object.shares ?? new Uint8Array();
    message.epoch = object.epoch !== undefined && object.epoch !== null ? BigInt(object.epoch.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: UserStakeAmino): UserStake {
    const message = createBaseUserStake();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.shares !== undefined && object.shares !== null) {
      message.shares = bytesFromBase64(object.shares);
    }
    if (object.epoch !== undefined && object.epoch !== null) {
      message.epoch = BigInt(object.epoch);
    }
    return message;
  },
  toAmino(message: UserStake): UserStakeAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.shares = message.shares ? base64FromBytes(message.shares) : undefined;
    obj.epoch = message.epoch !== BigInt(0) ? message.epoch?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: UserStakeAminoMsg): UserStake {
    return UserStake.fromAmino(object.value);
  },
  fromProtoMsg(message: UserStakeProtoMsg): UserStake {
    return UserStake.decode(message.value);
  },
  toProto(message: UserStake): Uint8Array {
    return UserStake.encode(message).finish();
  },
  toProtoMsg(message: UserStake): UserStakeProtoMsg {
    return {
      typeUrl: "/symphony.stablestaking.v1beta1.UserStake",
      value: UserStake.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(UserStake.typeUrl, UserStake);
function createBaseUnbondingInfo(): UnbondingInfo {
  return {
    address: "",
    amount: new Uint8Array(),
    denom: "",
    unbondEpoch: BigInt(0)
  };
}
export const UnbondingInfo = {
  typeUrl: "/symphony.stablestaking.v1beta1.UnbondingInfo",
  is(o: any): o is UnbondingInfo {
    return o && (o.$typeUrl === UnbondingInfo.typeUrl || typeof o.address === "string" && (o.amount instanceof Uint8Array || typeof o.amount === "string") && typeof o.denom === "string" && typeof o.unbondEpoch === "bigint");
  },
  isSDK(o: any): o is UnbondingInfoSDKType {
    return o && (o.$typeUrl === UnbondingInfo.typeUrl || typeof o.address === "string" && (o.amount instanceof Uint8Array || typeof o.amount === "string") && typeof o.denom === "string" && typeof o.unbond_epoch === "bigint");
  },
  isAmino(o: any): o is UnbondingInfoAmino {
    return o && (o.$typeUrl === UnbondingInfo.typeUrl || typeof o.address === "string" && (o.amount instanceof Uint8Array || typeof o.amount === "string") && typeof o.denom === "string" && typeof o.unbond_epoch === "bigint");
  },
  encode(message: UnbondingInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.amount.length !== 0) {
      writer.uint32(18).bytes(message.amount);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    if (message.unbondEpoch !== BigInt(0)) {
      writer.uint32(32).int64(message.unbondEpoch);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UnbondingInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnbondingInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.amount = reader.bytes();
          break;
        case 3:
          message.denom = reader.string();
          break;
        case 4:
          message.unbondEpoch = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<UnbondingInfo>): UnbondingInfo {
    const message = createBaseUnbondingInfo();
    message.address = object.address ?? "";
    message.amount = object.amount ?? new Uint8Array();
    message.denom = object.denom ?? "";
    message.unbondEpoch = object.unbondEpoch !== undefined && object.unbondEpoch !== null ? BigInt(object.unbondEpoch.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: UnbondingInfoAmino): UnbondingInfo {
    const message = createBaseUnbondingInfo();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = bytesFromBase64(object.amount);
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.unbond_epoch !== undefined && object.unbond_epoch !== null) {
      message.unbondEpoch = BigInt(object.unbond_epoch);
    }
    return message;
  },
  toAmino(message: UnbondingInfo): UnbondingInfoAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.amount = message.amount ? base64FromBytes(message.amount) : undefined;
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.unbond_epoch = message.unbondEpoch !== BigInt(0) ? message.unbondEpoch?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: UnbondingInfoAminoMsg): UnbondingInfo {
    return UnbondingInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: UnbondingInfoProtoMsg): UnbondingInfo {
    return UnbondingInfo.decode(message.value);
  },
  toProto(message: UnbondingInfo): Uint8Array {
    return UnbondingInfo.encode(message).finish();
  },
  toProtoMsg(message: UnbondingInfo): UnbondingInfoProtoMsg {
    return {
      typeUrl: "/symphony.stablestaking.v1beta1.UnbondingInfo",
      value: UnbondingInfo.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(UnbondingInfo.typeUrl, UnbondingInfo);
function createBaseEpochSnapshot(): EpochSnapshot {
  return {
    totalStaked: new Uint8Array(),
    totalShares: new Uint8Array(),
    stakers: []
  };
}
export const EpochSnapshot = {
  typeUrl: "/symphony.stablestaking.v1beta1.EpochSnapshot",
  is(o: any): o is EpochSnapshot {
    return o && (o.$typeUrl === EpochSnapshot.typeUrl || (o.totalStaked instanceof Uint8Array || typeof o.totalStaked === "string") && (o.totalShares instanceof Uint8Array || typeof o.totalShares === "string") && Array.isArray(o.stakers) && (!o.stakers.length || UserStake.is(o.stakers[0])));
  },
  isSDK(o: any): o is EpochSnapshotSDKType {
    return o && (o.$typeUrl === EpochSnapshot.typeUrl || (o.total_staked instanceof Uint8Array || typeof o.total_staked === "string") && (o.total_shares instanceof Uint8Array || typeof o.total_shares === "string") && Array.isArray(o.stakers) && (!o.stakers.length || UserStake.isSDK(o.stakers[0])));
  },
  isAmino(o: any): o is EpochSnapshotAmino {
    return o && (o.$typeUrl === EpochSnapshot.typeUrl || (o.total_staked instanceof Uint8Array || typeof o.total_staked === "string") && (o.total_shares instanceof Uint8Array || typeof o.total_shares === "string") && Array.isArray(o.stakers) && (!o.stakers.length || UserStake.isAmino(o.stakers[0])));
  },
  encode(message: EpochSnapshot, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.totalStaked.length !== 0) {
      writer.uint32(10).bytes(message.totalStaked);
    }
    if (message.totalShares.length !== 0) {
      writer.uint32(18).bytes(message.totalShares);
    }
    for (const v of message.stakers) {
      UserStake.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EpochSnapshot {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEpochSnapshot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalStaked = reader.bytes();
          break;
        case 2:
          message.totalShares = reader.bytes();
          break;
        case 3:
          message.stakers.push(UserStake.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EpochSnapshot>): EpochSnapshot {
    const message = createBaseEpochSnapshot();
    message.totalStaked = object.totalStaked ?? new Uint8Array();
    message.totalShares = object.totalShares ?? new Uint8Array();
    message.stakers = object.stakers?.map(e => UserStake.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: EpochSnapshotAmino): EpochSnapshot {
    const message = createBaseEpochSnapshot();
    if (object.total_staked !== undefined && object.total_staked !== null) {
      message.totalStaked = bytesFromBase64(object.total_staked);
    }
    if (object.total_shares !== undefined && object.total_shares !== null) {
      message.totalShares = bytesFromBase64(object.total_shares);
    }
    message.stakers = object.stakers?.map(e => UserStake.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: EpochSnapshot): EpochSnapshotAmino {
    const obj: any = {};
    obj.total_staked = message.totalStaked ? base64FromBytes(message.totalStaked) : undefined;
    obj.total_shares = message.totalShares ? base64FromBytes(message.totalShares) : undefined;
    if (message.stakers) {
      obj.stakers = message.stakers.map(e => e ? UserStake.toAmino(e) : undefined);
    } else {
      obj.stakers = message.stakers;
    }
    return obj;
  },
  fromAminoMsg(object: EpochSnapshotAminoMsg): EpochSnapshot {
    return EpochSnapshot.fromAmino(object.value);
  },
  fromProtoMsg(message: EpochSnapshotProtoMsg): EpochSnapshot {
    return EpochSnapshot.decode(message.value);
  },
  toProto(message: EpochSnapshot): Uint8Array {
    return EpochSnapshot.encode(message).finish();
  },
  toProtoMsg(message: EpochSnapshot): EpochSnapshotProtoMsg {
    return {
      typeUrl: "/symphony.stablestaking.v1beta1.EpochSnapshot",
      value: EpochSnapshot.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EpochSnapshot.typeUrl, EpochSnapshot);