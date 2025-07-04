//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
/** GenesisState defines the txfees module's genesis state. */
export interface GenesisState {
  /** params is the container of txfees parameters. */
  params: Params;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/symphony.txfees.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the txfees module's genesis state. */
export interface GenesisStateAmino {
  /** params is the container of txfees parameters. */
  params?: ParamsAmino;
}
export interface GenesisStateAminoMsg {
  type: "/symphony.txfees.v1beta1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the txfees module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
}
export interface TxFeesTracker {
  txFees: Coin[];
  heightAccountingStartsFrom: bigint;
}
export interface TxFeesTrackerProtoMsg {
  typeUrl: "/symphony.txfees.v1beta1.TxFeesTracker";
  value: Uint8Array;
}
export interface TxFeesTrackerAmino {
  tx_fees?: CoinAmino[];
  height_accounting_starts_from?: string;
}
export interface TxFeesTrackerAminoMsg {
  type: "/symphony.txfees.v1beta1.TxFeesTracker";
  value: TxFeesTrackerAmino;
}
export interface TxFeesTrackerSDKType {
  tx_fees: CoinSDKType[];
  height_accounting_starts_from: bigint;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({})
  };
}
export const GenesisState = {
  typeUrl: "/symphony.txfees.v1beta1.GenesisState",
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
      typeUrl: "/symphony.txfees.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GenesisState.typeUrl, GenesisState);
function createBaseTxFeesTracker(): TxFeesTracker {
  return {
    txFees: [],
    heightAccountingStartsFrom: BigInt(0)
  };
}
export const TxFeesTracker = {
  typeUrl: "/symphony.txfees.v1beta1.TxFeesTracker",
  is(o: any): o is TxFeesTracker {
    return o && (o.$typeUrl === TxFeesTracker.typeUrl || Array.isArray(o.txFees) && (!o.txFees.length || Coin.is(o.txFees[0])) && typeof o.heightAccountingStartsFrom === "bigint");
  },
  isSDK(o: any): o is TxFeesTrackerSDKType {
    return o && (o.$typeUrl === TxFeesTracker.typeUrl || Array.isArray(o.tx_fees) && (!o.tx_fees.length || Coin.isSDK(o.tx_fees[0])) && typeof o.height_accounting_starts_from === "bigint");
  },
  isAmino(o: any): o is TxFeesTrackerAmino {
    return o && (o.$typeUrl === TxFeesTracker.typeUrl || Array.isArray(o.tx_fees) && (!o.tx_fees.length || Coin.isAmino(o.tx_fees[0])) && typeof o.height_accounting_starts_from === "bigint");
  },
  encode(message: TxFeesTracker, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.txFees) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.heightAccountingStartsFrom !== BigInt(0)) {
      writer.uint32(16).int64(message.heightAccountingStartsFrom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TxFeesTracker {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxFeesTracker();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txFees.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.heightAccountingStartsFrom = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<TxFeesTracker>): TxFeesTracker {
    const message = createBaseTxFeesTracker();
    message.txFees = object.txFees?.map(e => Coin.fromPartial(e)) || [];
    message.heightAccountingStartsFrom = object.heightAccountingStartsFrom !== undefined && object.heightAccountingStartsFrom !== null ? BigInt(object.heightAccountingStartsFrom.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: TxFeesTrackerAmino): TxFeesTracker {
    const message = createBaseTxFeesTracker();
    message.txFees = object.tx_fees?.map(e => Coin.fromAmino(e)) || [];
    if (object.height_accounting_starts_from !== undefined && object.height_accounting_starts_from !== null) {
      message.heightAccountingStartsFrom = BigInt(object.height_accounting_starts_from);
    }
    return message;
  },
  toAmino(message: TxFeesTracker): TxFeesTrackerAmino {
    const obj: any = {};
    if (message.txFees) {
      obj.tx_fees = message.txFees.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.tx_fees = message.txFees;
    }
    obj.height_accounting_starts_from = message.heightAccountingStartsFrom !== BigInt(0) ? message.heightAccountingStartsFrom?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: TxFeesTrackerAminoMsg): TxFeesTracker {
    return TxFeesTracker.fromAmino(object.value);
  },
  fromProtoMsg(message: TxFeesTrackerProtoMsg): TxFeesTracker {
    return TxFeesTracker.decode(message.value);
  },
  toProto(message: TxFeesTracker): Uint8Array {
    return TxFeesTracker.encode(message).finish();
  },
  toProtoMsg(message: TxFeesTracker): TxFeesTrackerProtoMsg {
    return {
      typeUrl: "/symphony.txfees.v1beta1.TxFeesTracker",
      value: TxFeesTracker.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(TxFeesTracker.typeUrl, TxFeesTracker);