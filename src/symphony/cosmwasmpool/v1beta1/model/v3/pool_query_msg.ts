//@ts-nocheck
import { Coin, CoinAmino, CoinSDKType } from "../../../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../../../binary";
import { GlobalDecoderRegistry } from "../../../../../registry";
/** ===================== ShareDenomResponse */
export interface ShareDenomResponse {
  /** share_denom is the share denomination. */
  shareDenom: string;
}
export interface ShareDenomResponseProtoMsg {
  typeUrl: "/symphony.cosmwasmpool.v1beta1.model.v3.ShareDenomResponse";
  value: Uint8Array;
}
/** ===================== ShareDenomResponse */
export interface ShareDenomResponseAmino {
  /** share_denom is the share denomination. */
  share_denom?: string;
}
export interface ShareDenomResponseAminoMsg {
  type: "/symphony.cosmwasmpool.v1beta1.model.v3.ShareDenomResponse";
  value: ShareDenomResponseAmino;
}
/** ===================== ShareDenomResponse */
export interface ShareDenomResponseSDKType {
  share_denom: string;
}
/** ===================== TotalPoolLiquidityResponse */
export interface TotalPoolLiquidityResponse {
  /**
   * total_pool_liquidity is the total liquidity in the pool denominated in
   * coins.
   */
  totalPoolLiquidity: Coin[];
}
export interface TotalPoolLiquidityResponseProtoMsg {
  typeUrl: "/symphony.cosmwasmpool.v1beta1.model.v3.TotalPoolLiquidityResponse";
  value: Uint8Array;
}
/** ===================== TotalPoolLiquidityResponse */
export interface TotalPoolLiquidityResponseAmino {
  /**
   * total_pool_liquidity is the total liquidity in the pool denominated in
   * coins.
   */
  total_pool_liquidity?: CoinAmino[];
}
export interface TotalPoolLiquidityResponseAminoMsg {
  type: "/symphony.cosmwasmpool.v1beta1.model.v3.TotalPoolLiquidityResponse";
  value: TotalPoolLiquidityResponseAmino;
}
/** ===================== TotalPoolLiquidityResponse */
export interface TotalPoolLiquidityResponseSDKType {
  total_pool_liquidity: CoinSDKType[];
}
/** ===================== AssetConfig */
export interface AssetConfig {
  /** denom is the asset denomination. */
  denom: string;
  /** normalization_factor is the normalization factor for the asset. */
  normalizationFactor: string;
}
export interface AssetConfigProtoMsg {
  typeUrl: "/symphony.cosmwasmpool.v1beta1.model.v3.AssetConfig";
  value: Uint8Array;
}
/** ===================== AssetConfig */
export interface AssetConfigAmino {
  /** denom is the asset denomination. */
  denom?: string;
  /** normalization_factor is the normalization factor for the asset. */
  normalization_factor?: string;
}
export interface AssetConfigAminoMsg {
  type: "/symphony.cosmwasmpool.v1beta1.model.v3.AssetConfig";
  value: AssetConfigAmino;
}
/** ===================== AssetConfig */
export interface AssetConfigSDKType {
  denom: string;
  normalization_factor: string;
}
/** ===================== ListAssetConfigsResponse */
export interface ListAssetConfigsResponse {
  /** asset_configs is the list of asset configurations. */
  assetConfigs: AssetConfig[];
}
export interface ListAssetConfigsResponseProtoMsg {
  typeUrl: "/symphony.cosmwasmpool.v1beta1.model.v3.ListAssetConfigsResponse";
  value: Uint8Array;
}
/** ===================== ListAssetConfigsResponse */
export interface ListAssetConfigsResponseAmino {
  /** asset_configs is the list of asset configurations. */
  asset_configs?: AssetConfigAmino[];
}
export interface ListAssetConfigsResponseAminoMsg {
  type: "/symphony.cosmwasmpool.v1beta1.model.v3.ListAssetConfigsResponse";
  value: ListAssetConfigsResponseAmino;
}
/** ===================== ListAssetConfigsResponse */
export interface ListAssetConfigsResponseSDKType {
  asset_configs: AssetConfigSDKType[];
}
function createBaseShareDenomResponse(): ShareDenomResponse {
  return {
    shareDenom: ""
  };
}
export const ShareDenomResponse = {
  typeUrl: "/symphony.cosmwasmpool.v1beta1.model.v3.ShareDenomResponse",
  is(o: any): o is ShareDenomResponse {
    return o && (o.$typeUrl === ShareDenomResponse.typeUrl || typeof o.shareDenom === "string");
  },
  isSDK(o: any): o is ShareDenomResponseSDKType {
    return o && (o.$typeUrl === ShareDenomResponse.typeUrl || typeof o.share_denom === "string");
  },
  isAmino(o: any): o is ShareDenomResponseAmino {
    return o && (o.$typeUrl === ShareDenomResponse.typeUrl || typeof o.share_denom === "string");
  },
  encode(message: ShareDenomResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.shareDenom !== "") {
      writer.uint32(10).string(message.shareDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ShareDenomResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseShareDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.shareDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ShareDenomResponse>): ShareDenomResponse {
    const message = createBaseShareDenomResponse();
    message.shareDenom = object.shareDenom ?? "";
    return message;
  },
  fromAmino(object: ShareDenomResponseAmino): ShareDenomResponse {
    const message = createBaseShareDenomResponse();
    if (object.share_denom !== undefined && object.share_denom !== null) {
      message.shareDenom = object.share_denom;
    }
    return message;
  },
  toAmino(message: ShareDenomResponse): ShareDenomResponseAmino {
    const obj: any = {};
    obj.share_denom = message.shareDenom === "" ? undefined : message.shareDenom;
    return obj;
  },
  fromAminoMsg(object: ShareDenomResponseAminoMsg): ShareDenomResponse {
    return ShareDenomResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: ShareDenomResponseProtoMsg): ShareDenomResponse {
    return ShareDenomResponse.decode(message.value);
  },
  toProto(message: ShareDenomResponse): Uint8Array {
    return ShareDenomResponse.encode(message).finish();
  },
  toProtoMsg(message: ShareDenomResponse): ShareDenomResponseProtoMsg {
    return {
      typeUrl: "/symphony.cosmwasmpool.v1beta1.model.v3.ShareDenomResponse",
      value: ShareDenomResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ShareDenomResponse.typeUrl, ShareDenomResponse);
function createBaseTotalPoolLiquidityResponse(): TotalPoolLiquidityResponse {
  return {
    totalPoolLiquidity: []
  };
}
export const TotalPoolLiquidityResponse = {
  typeUrl: "/symphony.cosmwasmpool.v1beta1.model.v3.TotalPoolLiquidityResponse",
  is(o: any): o is TotalPoolLiquidityResponse {
    return o && (o.$typeUrl === TotalPoolLiquidityResponse.typeUrl || Array.isArray(o.totalPoolLiquidity) && (!o.totalPoolLiquidity.length || Coin.is(o.totalPoolLiquidity[0])));
  },
  isSDK(o: any): o is TotalPoolLiquidityResponseSDKType {
    return o && (o.$typeUrl === TotalPoolLiquidityResponse.typeUrl || Array.isArray(o.total_pool_liquidity) && (!o.total_pool_liquidity.length || Coin.isSDK(o.total_pool_liquidity[0])));
  },
  isAmino(o: any): o is TotalPoolLiquidityResponseAmino {
    return o && (o.$typeUrl === TotalPoolLiquidityResponse.typeUrl || Array.isArray(o.total_pool_liquidity) && (!o.total_pool_liquidity.length || Coin.isAmino(o.total_pool_liquidity[0])));
  },
  encode(message: TotalPoolLiquidityResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.totalPoolLiquidity) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TotalPoolLiquidityResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTotalPoolLiquidityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalPoolLiquidity.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<TotalPoolLiquidityResponse>): TotalPoolLiquidityResponse {
    const message = createBaseTotalPoolLiquidityResponse();
    message.totalPoolLiquidity = object.totalPoolLiquidity?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: TotalPoolLiquidityResponseAmino): TotalPoolLiquidityResponse {
    const message = createBaseTotalPoolLiquidityResponse();
    message.totalPoolLiquidity = object.total_pool_liquidity?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: TotalPoolLiquidityResponse): TotalPoolLiquidityResponseAmino {
    const obj: any = {};
    if (message.totalPoolLiquidity) {
      obj.total_pool_liquidity = message.totalPoolLiquidity.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.total_pool_liquidity = message.totalPoolLiquidity;
    }
    return obj;
  },
  fromAminoMsg(object: TotalPoolLiquidityResponseAminoMsg): TotalPoolLiquidityResponse {
    return TotalPoolLiquidityResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: TotalPoolLiquidityResponseProtoMsg): TotalPoolLiquidityResponse {
    return TotalPoolLiquidityResponse.decode(message.value);
  },
  toProto(message: TotalPoolLiquidityResponse): Uint8Array {
    return TotalPoolLiquidityResponse.encode(message).finish();
  },
  toProtoMsg(message: TotalPoolLiquidityResponse): TotalPoolLiquidityResponseProtoMsg {
    return {
      typeUrl: "/symphony.cosmwasmpool.v1beta1.model.v3.TotalPoolLiquidityResponse",
      value: TotalPoolLiquidityResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(TotalPoolLiquidityResponse.typeUrl, TotalPoolLiquidityResponse);
function createBaseAssetConfig(): AssetConfig {
  return {
    denom: "",
    normalizationFactor: ""
  };
}
export const AssetConfig = {
  typeUrl: "/symphony.cosmwasmpool.v1beta1.model.v3.AssetConfig",
  is(o: any): o is AssetConfig {
    return o && (o.$typeUrl === AssetConfig.typeUrl || typeof o.denom === "string" && typeof o.normalizationFactor === "string");
  },
  isSDK(o: any): o is AssetConfigSDKType {
    return o && (o.$typeUrl === AssetConfig.typeUrl || typeof o.denom === "string" && typeof o.normalization_factor === "string");
  },
  isAmino(o: any): o is AssetConfigAmino {
    return o && (o.$typeUrl === AssetConfig.typeUrl || typeof o.denom === "string" && typeof o.normalization_factor === "string");
  },
  encode(message: AssetConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.normalizationFactor !== "") {
      writer.uint32(18).string(message.normalizationFactor);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AssetConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.normalizationFactor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<AssetConfig>): AssetConfig {
    const message = createBaseAssetConfig();
    message.denom = object.denom ?? "";
    message.normalizationFactor = object.normalizationFactor ?? "";
    return message;
  },
  fromAmino(object: AssetConfigAmino): AssetConfig {
    const message = createBaseAssetConfig();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.normalization_factor !== undefined && object.normalization_factor !== null) {
      message.normalizationFactor = object.normalization_factor;
    }
    return message;
  },
  toAmino(message: AssetConfig): AssetConfigAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.normalization_factor = message.normalizationFactor === "" ? undefined : message.normalizationFactor;
    return obj;
  },
  fromAminoMsg(object: AssetConfigAminoMsg): AssetConfig {
    return AssetConfig.fromAmino(object.value);
  },
  fromProtoMsg(message: AssetConfigProtoMsg): AssetConfig {
    return AssetConfig.decode(message.value);
  },
  toProto(message: AssetConfig): Uint8Array {
    return AssetConfig.encode(message).finish();
  },
  toProtoMsg(message: AssetConfig): AssetConfigProtoMsg {
    return {
      typeUrl: "/symphony.cosmwasmpool.v1beta1.model.v3.AssetConfig",
      value: AssetConfig.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(AssetConfig.typeUrl, AssetConfig);
function createBaseListAssetConfigsResponse(): ListAssetConfigsResponse {
  return {
    assetConfigs: []
  };
}
export const ListAssetConfigsResponse = {
  typeUrl: "/symphony.cosmwasmpool.v1beta1.model.v3.ListAssetConfigsResponse",
  is(o: any): o is ListAssetConfigsResponse {
    return o && (o.$typeUrl === ListAssetConfigsResponse.typeUrl || Array.isArray(o.assetConfigs) && (!o.assetConfigs.length || AssetConfig.is(o.assetConfigs[0])));
  },
  isSDK(o: any): o is ListAssetConfigsResponseSDKType {
    return o && (o.$typeUrl === ListAssetConfigsResponse.typeUrl || Array.isArray(o.asset_configs) && (!o.asset_configs.length || AssetConfig.isSDK(o.asset_configs[0])));
  },
  isAmino(o: any): o is ListAssetConfigsResponseAmino {
    return o && (o.$typeUrl === ListAssetConfigsResponse.typeUrl || Array.isArray(o.asset_configs) && (!o.asset_configs.length || AssetConfig.isAmino(o.asset_configs[0])));
  },
  encode(message: ListAssetConfigsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.assetConfigs) {
      AssetConfig.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListAssetConfigsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListAssetConfigsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetConfigs.push(AssetConfig.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ListAssetConfigsResponse>): ListAssetConfigsResponse {
    const message = createBaseListAssetConfigsResponse();
    message.assetConfigs = object.assetConfigs?.map(e => AssetConfig.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ListAssetConfigsResponseAmino): ListAssetConfigsResponse {
    const message = createBaseListAssetConfigsResponse();
    message.assetConfigs = object.asset_configs?.map(e => AssetConfig.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ListAssetConfigsResponse): ListAssetConfigsResponseAmino {
    const obj: any = {};
    if (message.assetConfigs) {
      obj.asset_configs = message.assetConfigs.map(e => e ? AssetConfig.toAmino(e) : undefined);
    } else {
      obj.asset_configs = message.assetConfigs;
    }
    return obj;
  },
  fromAminoMsg(object: ListAssetConfigsResponseAminoMsg): ListAssetConfigsResponse {
    return ListAssetConfigsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: ListAssetConfigsResponseProtoMsg): ListAssetConfigsResponse {
    return ListAssetConfigsResponse.decode(message.value);
  },
  toProto(message: ListAssetConfigsResponse): Uint8Array {
    return ListAssetConfigsResponse.encode(message).finish();
  },
  toProtoMsg(message: ListAssetConfigsResponse): ListAssetConfigsResponseProtoMsg {
    return {
      typeUrl: "/symphony.cosmwasmpool.v1beta1.model.v3.ListAssetConfigsResponse",
      value: ListAssetConfigsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ListAssetConfigsResponse.typeUrl, ListAssetConfigsResponse);