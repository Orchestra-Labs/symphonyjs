//@ts-nocheck
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { SwapAmountInRoute, SwapAmountInRouteAmino, SwapAmountInRouteSDKType, SwapAmountOutRoute, SwapAmountOutRouteAmino, SwapAmountOutRouteSDKType } from "../../poolmanager/v1beta1/swap_route";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { MigrationRecords, MigrationRecordsAmino, MigrationRecordsSDKType } from "./shared";
import { Pool as Pool1 } from "../../concentratedliquidity/v1beta1/pool";
import { PoolProtoMsg as Pool1ProtoMsg } from "../../concentratedliquidity/v1beta1/pool";
import { PoolSDKType as Pool1SDKType } from "../../concentratedliquidity/v1beta1/pool";
import { CosmWasmPool, CosmWasmPoolProtoMsg, CosmWasmPoolSDKType } from "../../cosmwasmpool/v1beta1/model/pool";
import { Pool as Pool2 } from "../poolmodels/stableswap/v1beta1/stableswap_pool";
import { PoolProtoMsg as Pool2ProtoMsg } from "../poolmodels/stableswap/v1beta1/stableswap_pool";
import { PoolSDKType as Pool2SDKType } from "../poolmodels/stableswap/v1beta1/stableswap_pool";
import { Pool as Pool3 } from "./balancerPool";
import { PoolProtoMsg as Pool3ProtoMsg } from "./balancerPool";
import { PoolSDKType as Pool3SDKType } from "./balancerPool";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
/** =============================== Params */
export interface ParamsRequest {}
export interface ParamsRequestProtoMsg {
  typeUrl: "/symphony.gamm.v1beta1.ParamsRequest";
  value: Uint8Array;
}
/** =============================== Params */
export interface ParamsRequestAmino {}
export interface ParamsRequestAminoMsg {
  type: "/symphony.gamm.v1beta1.ParamsRequest";
  value: ParamsRequestAmino;
}
/** =============================== Params */
export interface ParamsRequestSDKType {}
export interface ParamsResponse {
  params: Params;
}
export interface ParamsResponseProtoMsg {
  typeUrl: "/symphony.gamm.v1beta1.ParamsResponse";
  value: Uint8Array;
}
export interface ParamsResponseAmino {
  params?: ParamsAmino;
}
export interface ParamsResponseAminoMsg {
  type: "/symphony.gamm.v1beta1.ParamsResponse";
  value: ParamsResponseAmino;
}
export interface ParamsResponseSDKType {
  params: ParamsSDKType;
}
/**
 * =============================== Pool
 * Deprecated: please use the alternative in x/poolmanager
 */
/** @deprecated */
export interface QueryPoolRequest {
  poolId: bigint;
}
export interface QueryPoolRequestProtoMsg {
  typeUrl: "/symphony.gamm.v1beta1.QueryPoolRequest";
  value: Uint8Array;
}
/**
 * =============================== Pool
 * Deprecated: please use the alternative in x/poolmanager
 */
/** @deprecated */
export interface QueryPoolRequestAmino {
  pool_id?: string;
}
export interface QueryPoolRequestAminoMsg {
  type: "/symphony.gamm.v1beta1.QueryPoolRequest";
  value: QueryPoolRequestAmino;
}
/**
 * =============================== Pool
 * Deprecated: please use the alternative in x/poolmanager
 */
/** @deprecated */
export interface QueryPoolRequestSDKType {
  pool_id: bigint;
}
/** Deprecated: please use the alternative in x/poolmanager */
/** @deprecated */
export interface QueryPoolResponse {
  pool?: Pool1 | CosmWasmPool | Pool2 | Pool3 | Any | undefined;
}
export interface QueryPoolResponseProtoMsg {
  typeUrl: "/symphony.gamm.v1beta1.QueryPoolResponse";
  value: Uint8Array;
}
export type QueryPoolResponseEncoded = Omit<QueryPoolResponse, "pool"> & {
  pool?: Pool1ProtoMsg | CosmWasmPoolProtoMsg | Pool2ProtoMsg | Pool3ProtoMsg | AnyProtoMsg | undefined;
};
/** Deprecated: please use the alternative in x/poolmanager */
/** @deprecated */
export interface QueryPoolResponseAmino {
  pool?: AnyAmino;
}
export interface QueryPoolResponseAminoMsg {
  type: "/symphony.gamm.v1beta1.QueryPoolResponse";
  value: QueryPoolResponseAmino;
}
/** Deprecated: please use the alternative in x/poolmanager */
/** @deprecated */
export interface QueryPoolResponseSDKType {
  pool?: Pool1SDKType | CosmWasmPoolSDKType | Pool2SDKType | Pool3SDKType | AnySDKType | undefined;
}
/** =============================== Pools */
export interface QueryPoolsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryPoolsRequestProtoMsg {
  typeUrl: "/symphony.gamm.v1beta1.QueryPoolsRequest";
  value: Uint8Array;
}
/** =============================== Pools */
export interface QueryPoolsRequestAmino {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryPoolsRequestAminoMsg {
  type: "/symphony.gamm.v1beta1.QueryPoolsRequest";
  value: QueryPoolsRequestAmino;
}
/** =============================== Pools */
export interface QueryPoolsRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryPoolsResponse {
  pools: (Pool1 | CosmWasmPool | Pool2 | Pool3 | Any)[] | Any[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryPoolsResponseProtoMsg {
  typeUrl: "/symphony.gamm.v1beta1.QueryPoolsResponse";
  value: Uint8Array;
}
export type QueryPoolsResponseEncoded = Omit<QueryPoolsResponse, "pools"> & {
  pools: (Pool1ProtoMsg | CosmWasmPoolProtoMsg | Pool2ProtoMsg | Pool3ProtoMsg | AnyProtoMsg)[];
};
export interface QueryPoolsResponseAmino {
  pools?: AnyAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryPoolsResponseAminoMsg {
  type: "/symphony.gamm.v1beta1.QueryPoolsResponse";
  value: QueryPoolsResponseAmino;
}
export interface QueryPoolsResponseSDKType {
  pools: (Pool1SDKType | CosmWasmPoolSDKType | Pool2SDKType | Pool3SDKType | AnySDKType)[];
  pagination?: PageResponseSDKType;
}
/** =============================== NumPools */
/** @deprecated */
export interface QueryNumPoolsRequest {}
export interface QueryNumPoolsRequestProtoMsg {
  typeUrl: "/symphony.gamm.v1beta1.QueryNumPoolsRequest";
  value: Uint8Array;
}
/** =============================== NumPools */
/** @deprecated */
export interface QueryNumPoolsRequestAmino {}
export interface QueryNumPoolsRequestAminoMsg {
  type: "/symphony.gamm.v1beta1.QueryNumPoolsRequest";
  value: QueryNumPoolsRequestAmino;
}
/** =============================== NumPools */
/** @deprecated */
export interface QueryNumPoolsRequestSDKType {}
/** @deprecated */
export interface QueryNumPoolsResponse {
  numPools: bigint;
}
export interface QueryNumPoolsResponseProtoMsg {
  typeUrl: "/symphony.gamm.v1beta1.QueryNumPoolsResponse";
  value: Uint8Array;
}
/** @deprecated */
export interface QueryNumPoolsResponseAmino {
  num_pools?: string;
}
export interface QueryNumPoolsResponseAminoMsg {
  type: "/symphony.gamm.v1beta1.QueryNumPoolsResponse";
  value: QueryNumPoolsResponseAmino;
}
/** @deprecated */
export interface QueryNumPoolsResponseSDKType {
  num_pools: bigint;
}
/** =============================== PoolType */
export interface QueryPoolTypeRequest {
  poolId: bigint;
}
export interface QueryPoolTypeRequestProtoMsg {
  typeUrl: "/symphony.gamm.v1beta1.QueryPoolTypeRequest";
  value: Uint8Array;
}
/** =============================== PoolType */
export interface QueryPoolTypeRequestAmino {
  pool_id?: string;
}
export interface QueryPoolTypeRequestAminoMsg {
  type: "/symphony.gamm.v1beta1.QueryPoolTypeRequest";
  value: QueryPoolTypeRequestAmino;
}
/** =============================== PoolType */
export interface QueryPoolTypeRequestSDKType {
  pool_id: bigint;
}
export interface QueryPoolTypeResponse {
  poolType: string;
}
export interface QueryPoolTypeResponseProtoMsg {
  typeUrl: "/symphony.gamm.v1beta1.QueryPoolTypeResponse";
  value: Uint8Array;
}
export interface QueryPoolTypeResponseAmino {
  pool_type?: string;
}
export interface QueryPoolTypeResponseAminoMsg {
  type: "/symphony.gamm.v1beta1.QueryPoolTypeResponse";
  value: QueryPoolTypeResponseAmino;
}
export interface QueryPoolTypeResponseSDKType {
  pool_type: string;
}
/** =============================== CalcJoinPoolShares */
export interface QueryCalcJoinPoolSharesRequest {
  poolId: bigint;
  tokensIn: Coin[];
}
export interface QueryCalcJoinPoolSharesRequestProtoMsg {
  typeUrl: "/symphony.gamm.v1beta1.QueryCalcJoinPoolSharesRequest";
  value: Uint8Array;
}
/** =============================== CalcJoinPoolShares */
export interface QueryCalcJoinPoolSharesRequestAmino {
  pool_id?: string;
  tokens_in?: CoinAmino[];
}
export interface QueryCalcJoinPoolSharesRequestAminoMsg {
  type: "/symphony.gamm.v1beta1.QueryCalcJoinPoolSharesRequest";
  value: QueryCalcJoinPoolSharesRequestAmino;
}
/** =============================== CalcJoinPoolShares */
export interface QueryCalcJoinPoolSharesRequestSDKType {
  pool_id: bigint;
  tokens_in: CoinSDKType[];
}
export interface QueryCalcJoinPoolSharesResponse {
  shareOutAmount: string;
  tokensOut: Coin[];
}
export interface QueryCalcJoinPoolSharesResponseProtoMsg {
  typeUrl: "/symphony.gamm.v1beta1.QueryCalcJoinPoolSharesResponse";
  value: Uint8Array;
}
export interface QueryCalcJoinPoolSharesResponseAmino {
  share_out_amount?: string;
  tokens_out?: CoinAmino[];
}
export interface QueryCalcJoinPoolSharesResponseAminoMsg {
  type: "/symphony.gamm.v1beta1.QueryCalcJoinPoolSharesResponse";
  value: QueryCalcJoinPoolSharesResponseAmino;
}
export interface QueryCalcJoinPoolSharesResponseSDKType {
  share_out_amount: string;
  tokens_out: CoinSDKType[];
}
/** =============================== CalcExitPoolCoinsFromShares */
export interface QueryCalcExitPoolCoinsFromSharesRequest {
  poolId: bigint;
  shareInAmount: string;
}
export interface QueryCalcExitPoolCoinsFromSharesRequestProtoMsg {
  typeUrl: "/symphony.gamm.v1beta1.QueryCalcExitPoolCoinsFromSharesRequest";
  value: Uint8Array;
}
/** =============================== CalcExitPoolCoinsFromShares */
export interface QueryCalcExitPoolCoinsFromSharesRequestAmino {
  pool_id?: string;
  share_in_amount?: string;
}
export interface QueryCalcExitPoolCoinsFromSharesRequestAminoMsg {
  type: "/symphony.gamm.v1beta1.QueryCalcExitPoolCoinsFromSharesRequest";
  value: QueryCalcExitPoolCoinsFromSharesRequestAmino;
}
/** =============================== CalcExitPoolCoinsFromShares */
export interface QueryCalcExitPoolCoinsFromSharesRequestSDKType {
  pool_id: bigint;
  share_in_amount: string;
}
export interface QueryCalcExitPoolCoinsFromSharesResponse {
  tokensOut: Coin[];
}
export interface QueryCalcExitPoolCoinsFromSharesResponseProtoMsg {
  typeUrl: "/symphony.gamm.v1beta1.QueryCalcExitPoolCoinsFromSharesResponse";
  value: Uint8Array;
}
export interface QueryCalcExitPoolCoinsFromSharesResponseAmino {
  tokens_out?: CoinAmino[];
}
export interface QueryCalcExitPoolCoinsFromSharesResponseAminoMsg {
  type: "/symphony.gamm.v1beta1.QueryCalcExitPoolCoinsFromSharesResponse";
  value: QueryCalcExitPoolCoinsFromSharesResponseAmino;
}
export interface QueryCalcExitPoolCoinsFromSharesResponseSDKType {
  tokens_out: CoinSDKType[];
}
/** =============================== PoolParams */
export interface QueryPoolParamsRequest {
  poolId: bigint;
}
export interface QueryPoolParamsRequestProtoMsg {
  typeUrl: "/symphony.gamm.v1beta1.QueryPoolParamsRequest";
  value: Uint8Array;
}
/** =============================== PoolParams */
export interface QueryPoolParamsRequestAmino {
  pool_id?: string;
}
export interface QueryPoolParamsRequestAminoMsg {
  type: "/symphony.gamm.v1beta1.QueryPoolParamsRequest";
  value: QueryPoolParamsRequestAmino;
}
/** =============================== PoolParams */
export interface QueryPoolParamsRequestSDKType {
  pool_id: bigint;
}
export interface QueryPoolParamsResponse {
  params?: Any;
}
export interface QueryPoolParamsResponseProtoMsg {
  typeUrl: "/symphony.gamm.v1beta1.QueryPoolParamsResponse";
  value: Uint8Array;
}
export interface QueryPoolParamsResponseAmino {
  params?: AnyAmino;
}
export interface QueryPoolParamsResponseAminoMsg {
  type: "/symphony.gamm.v1beta1.QueryPoolParamsResponse";
  value: QueryPoolParamsResponseAmino;
}
export interface QueryPoolParamsResponseSDKType {
  params?: AnySDKType;
}
/**
 * =============================== PoolLiquidity
 * Deprecated: please use the alternative in x/poolmanager
 */
/** @deprecated */
export interface QueryTotalPoolLiquidityRequest {
  poolId: bigint;
}
export interface QueryTotalPoolLiquidityRequestProtoMsg {
  typeUrl: "/symphony.gamm.v1beta1.QueryTotalPoolLiquidityRequest";
  value: Uint8Array;
}
/**
 * =============================== PoolLiquidity
 * Deprecated: please use the alternative in x/poolmanager
 */
/** @deprecated */
export interface QueryTotalPoolLiquidityRequestAmino {
  pool_id?: string;
}
export interface QueryTotalPoolLiquidityRequestAminoMsg {
  type: "/symphony.gamm.v1beta1.QueryTotalPoolLiquidityRequest";
  value: QueryTotalPoolLiquidityRequestAmino;
}
/**
 * =============================== PoolLiquidity
 * Deprecated: please use the alternative in x/poolmanager
 */
/** @deprecated */
export interface QueryTotalPoolLiquidityRequestSDKType {
  pool_id: bigint;
}
/** Deprecated: please use the alternative in x/poolmanager */
/** @deprecated */
export interface QueryTotalPoolLiquidityResponse {
  liquidity: Coin[];
}
export interface QueryTotalPoolLiquidityResponseProtoMsg {
  typeUrl: "/symphony.gamm.v1beta1.QueryTotalPoolLiquidityResponse";
  value: Uint8Array;
}
/** Deprecated: please use the alternative in x/poolmanager */
/** @deprecated */
export interface QueryTotalPoolLiquidityResponseAmino {
  liquidity?: CoinAmino[];
}
export interface QueryTotalPoolLiquidityResponseAminoMsg {
  type: "/symphony.gamm.v1beta1.QueryTotalPoolLiquidityResponse";
  value: QueryTotalPoolLiquidityResponseAmino;
}
/** Deprecated: please use the alternative in x/poolmanager */
/** @deprecated */
export interface QueryTotalPoolLiquidityResponseSDKType {
  liquidity: CoinSDKType[];
}
/** =============================== TotalShares */
export interface QueryTotalSharesRequest {
  poolId: bigint;
}
export interface QueryTotalSharesRequestProtoMsg {
  typeUrl: "/symphony.gamm.v1beta1.QueryTotalSharesRequest";
  value: Uint8Array;
}
/** =============================== TotalShares */
export interface QueryTotalSharesRequestAmino {
  pool_id?: string;
}
export interface QueryTotalSharesRequestAminoMsg {
  type: "/symphony.gamm.v1beta1.QueryTotalSharesRequest";
  value: QueryTotalSharesRequestAmino;
}
/** =============================== TotalShares */
export interface QueryTotalSharesRequestSDKType {
  pool_id: bigint;
}
export interface QueryTotalSharesResponse {
  totalShares: Coin;
}
export interface QueryTotalSharesResponseProtoMsg {
  typeUrl: "/symphony.gamm.v1beta1.QueryTotalSharesResponse";
  value: Uint8Array;
}
export interface QueryTotalSharesResponseAmino {
  total_shares?: CoinAmino;
}
export interface QueryTotalSharesResponseAminoMsg {
  type: "/symphony.gamm.v1beta1.QueryTotalSharesResponse";
  value: QueryTotalSharesResponseAmino;
}
export interface QueryTotalSharesResponseSDKType {
  total_shares: CoinSDKType;
}
/** =============================== CalcJoinPoolNoSwapShares */
export interface QueryCalcJoinPoolNoSwapSharesRequest {
  poolId: bigint;
  tokensIn: Coin[];
}
export interface QueryCalcJoinPoolNoSwapSharesRequestProtoMsg {
  typeUrl: "/symphony.gamm.v1beta1.QueryCalcJoinPoolNoSwapSharesRequest";
  value: Uint8Array;
}
/** =============================== CalcJoinPoolNoSwapShares */
export interface QueryCalcJoinPoolNoSwapSharesRequestAmino {
  pool_id?: string;
  tokens_in?: CoinAmino[];
}
export interface QueryCalcJoinPoolNoSwapSharesRequestAminoMsg {
  type: "/symphony.gamm.v1beta1.QueryCalcJoinPoolNoSwapSharesRequest";
  value: QueryCalcJoinPoolNoSwapSharesRequestAmino;
}
/** =============================== CalcJoinPoolNoSwapShares */
export interface QueryCalcJoinPoolNoSwapSharesRequestSDKType {
  pool_id: bigint;
  tokens_in: CoinSDKType[];
}
export interface QueryCalcJoinPoolNoSwapSharesResponse {
  tokensOut: Coin[];
  sharesOut: string;
}
export interface QueryCalcJoinPoolNoSwapSharesResponseProtoMsg {
  typeUrl: "/symphony.gamm.v1beta1.QueryCalcJoinPoolNoSwapSharesResponse";
  value: Uint8Array;
}
export interface QueryCalcJoinPoolNoSwapSharesResponseAmino {
  tokens_out?: CoinAmino[];
  shares_out?: string;
}
export interface QueryCalcJoinPoolNoSwapSharesResponseAminoMsg {
  type: "/symphony.gamm.v1beta1.QueryCalcJoinPoolNoSwapSharesResponse";
  value: QueryCalcJoinPoolNoSwapSharesResponseAmino;
}
export interface QueryCalcJoinPoolNoSwapSharesResponseSDKType {
  tokens_out: CoinSDKType[];
  shares_out: string;
}
/**
 * QuerySpotPriceRequest defines the gRPC request structure for a SpotPrice
 * query.
 */
/** @deprecated */
export interface QuerySpotPriceRequest {
  poolId: bigint;
  baseAssetDenom: string;
  quoteAssetDenom: string;
  /** DEPRECATED */
  /** @deprecated */
  withSwapFee?: boolean;
}
export interface QuerySpotPriceRequestProtoMsg {
  typeUrl: "/symphony.gamm.v1beta1.QuerySpotPriceRequest";
  value: Uint8Array;
}
/**
 * QuerySpotPriceRequest defines the gRPC request structure for a SpotPrice
 * query.
 */
/** @deprecated */
export interface QuerySpotPriceRequestAmino {
  pool_id?: string;
  base_asset_denom?: string;
  quote_asset_denom?: string;
  /** DEPRECATED */
  /** @deprecated */
  withSwapFee?: boolean;
}
export interface QuerySpotPriceRequestAminoMsg {
  type: "/symphony.gamm.v1beta1.QuerySpotPriceRequest";
  value: QuerySpotPriceRequestAmino;
}
/**
 * QuerySpotPriceRequest defines the gRPC request structure for a SpotPrice
 * query.
 */
/** @deprecated */
export interface QuerySpotPriceRequestSDKType {
  pool_id: bigint;
  base_asset_denom: string;
  quote_asset_denom: string;
  /** @deprecated */
  withSwapFee?: boolean;
}
export interface QueryPoolsWithFilterRequest {
  /**
   * String of the coins in single string separated by comma. Ex)
   * 10uatom,100uosmo
   */
  minLiquidity: string;
  poolType: string;
  pagination?: PageRequest;
}
export interface QueryPoolsWithFilterRequestProtoMsg {
  typeUrl: "/symphony.gamm.v1beta1.QueryPoolsWithFilterRequest";
  value: Uint8Array;
}
export interface QueryPoolsWithFilterRequestAmino {
  /**
   * String of the coins in single string separated by comma. Ex)
   * 10uatom,100uosmo
   */
  min_liquidity?: string;
  pool_type?: string;
  pagination?: PageRequestAmino;
}
export interface QueryPoolsWithFilterRequestAminoMsg {
  type: "/symphony.gamm.v1beta1.QueryPoolsWithFilterRequest";
  value: QueryPoolsWithFilterRequestAmino;
}
export interface QueryPoolsWithFilterRequestSDKType {
  min_liquidity: string;
  pool_type: string;
  pagination?: PageRequestSDKType;
}
export interface QueryPoolsWithFilterResponse {
  pools: (Pool1 | CosmWasmPool | Pool2 | Pool3 | Any)[] | Any[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryPoolsWithFilterResponseProtoMsg {
  typeUrl: "/symphony.gamm.v1beta1.QueryPoolsWithFilterResponse";
  value: Uint8Array;
}
export type QueryPoolsWithFilterResponseEncoded = Omit<QueryPoolsWithFilterResponse, "pools"> & {
  pools: (Pool1ProtoMsg | CosmWasmPoolProtoMsg | Pool2ProtoMsg | Pool3ProtoMsg | AnyProtoMsg)[];
};
export interface QueryPoolsWithFilterResponseAmino {
  pools?: AnyAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryPoolsWithFilterResponseAminoMsg {
  type: "/symphony.gamm.v1beta1.QueryPoolsWithFilterResponse";
  value: QueryPoolsWithFilterResponseAmino;
}
export interface QueryPoolsWithFilterResponseSDKType {
  pools: (Pool1SDKType | CosmWasmPoolSDKType | Pool2SDKType | Pool3SDKType | AnySDKType)[];
  pagination?: PageResponseSDKType;
}
/**
 * QuerySpotPriceResponse defines the gRPC response structure for a SpotPrice
 * query.
 */
/** @deprecated */
export interface QuerySpotPriceResponse {
  /** String of the Dec. Ex) 10.203uatom */
  spotPrice: string;
}
export interface QuerySpotPriceResponseProtoMsg {
  typeUrl: "/symphony.gamm.v1beta1.QuerySpotPriceResponse";
  value: Uint8Array;
}
/**
 * QuerySpotPriceResponse defines the gRPC response structure for a SpotPrice
 * query.
 */
/** @deprecated */
export interface QuerySpotPriceResponseAmino {
  /** String of the Dec. Ex) 10.203uatom */
  spot_price?: string;
}
export interface QuerySpotPriceResponseAminoMsg {
  type: "/symphony.gamm.v1beta1.QuerySpotPriceResponse";
  value: QuerySpotPriceResponseAmino;
}
/**
 * QuerySpotPriceResponse defines the gRPC response structure for a SpotPrice
 * query.
 */
/** @deprecated */
export interface QuerySpotPriceResponseSDKType {
  spot_price: string;
}
/** =============================== EstimateSwapExactAmountIn */
/** @deprecated */
export interface QuerySwapExactAmountInRequest {
  sender: string;
  poolId: bigint;
  tokenIn: string;
  routes: SwapAmountInRoute[];
}
export interface QuerySwapExactAmountInRequestProtoMsg {
  typeUrl: "/symphony.gamm.v1beta1.QuerySwapExactAmountInRequest";
  value: Uint8Array;
}
/** =============================== EstimateSwapExactAmountIn */
/** @deprecated */
export interface QuerySwapExactAmountInRequestAmino {
  sender?: string;
  pool_id?: string;
  token_in?: string;
  routes?: SwapAmountInRouteAmino[];
}
export interface QuerySwapExactAmountInRequestAminoMsg {
  type: "/symphony.gamm.v1beta1.QuerySwapExactAmountInRequest";
  value: QuerySwapExactAmountInRequestAmino;
}
/** =============================== EstimateSwapExactAmountIn */
/** @deprecated */
export interface QuerySwapExactAmountInRequestSDKType {
  sender: string;
  pool_id: bigint;
  token_in: string;
  routes: SwapAmountInRouteSDKType[];
}
/** @deprecated */
export interface QuerySwapExactAmountInResponse {
  tokenOutAmount: string;
}
export interface QuerySwapExactAmountInResponseProtoMsg {
  typeUrl: "/symphony.gamm.v1beta1.QuerySwapExactAmountInResponse";
  value: Uint8Array;
}
/** @deprecated */
export interface QuerySwapExactAmountInResponseAmino {
  token_out_amount?: string;
}
export interface QuerySwapExactAmountInResponseAminoMsg {
  type: "/symphony.gamm.v1beta1.QuerySwapExactAmountInResponse";
  value: QuerySwapExactAmountInResponseAmino;
}
/** @deprecated */
export interface QuerySwapExactAmountInResponseSDKType {
  token_out_amount: string;
}
/** =============================== EstimateSwapExactAmountOut */
/** @deprecated */
export interface QuerySwapExactAmountOutRequest {
  sender: string;
  poolId: bigint;
  routes: SwapAmountOutRoute[];
  tokenOut: string;
}
export interface QuerySwapExactAmountOutRequestProtoMsg {
  typeUrl: "/symphony.gamm.v1beta1.QuerySwapExactAmountOutRequest";
  value: Uint8Array;
}
/** =============================== EstimateSwapExactAmountOut */
/** @deprecated */
export interface QuerySwapExactAmountOutRequestAmino {
  sender?: string;
  pool_id?: string;
  routes?: SwapAmountOutRouteAmino[];
  token_out?: string;
}
export interface QuerySwapExactAmountOutRequestAminoMsg {
  type: "/symphony.gamm.v1beta1.QuerySwapExactAmountOutRequest";
  value: QuerySwapExactAmountOutRequestAmino;
}
/** =============================== EstimateSwapExactAmountOut */
/** @deprecated */
export interface QuerySwapExactAmountOutRequestSDKType {
  sender: string;
  pool_id: bigint;
  routes: SwapAmountOutRouteSDKType[];
  token_out: string;
}
/** @deprecated */
export interface QuerySwapExactAmountOutResponse {
  tokenInAmount: string;
}
export interface QuerySwapExactAmountOutResponseProtoMsg {
  typeUrl: "/symphony.gamm.v1beta1.QuerySwapExactAmountOutResponse";
  value: Uint8Array;
}
/** @deprecated */
export interface QuerySwapExactAmountOutResponseAmino {
  token_in_amount?: string;
}
export interface QuerySwapExactAmountOutResponseAminoMsg {
  type: "/symphony.gamm.v1beta1.QuerySwapExactAmountOutResponse";
  value: QuerySwapExactAmountOutResponseAmino;
}
/** @deprecated */
export interface QuerySwapExactAmountOutResponseSDKType {
  token_in_amount: string;
}
export interface QueryTotalLiquidityRequest {}
export interface QueryTotalLiquidityRequestProtoMsg {
  typeUrl: "/symphony.gamm.v1beta1.QueryTotalLiquidityRequest";
  value: Uint8Array;
}
export interface QueryTotalLiquidityRequestAmino {}
export interface QueryTotalLiquidityRequestAminoMsg {
  type: "/symphony.gamm.v1beta1.QueryTotalLiquidityRequest";
  value: QueryTotalLiquidityRequestAmino;
}
export interface QueryTotalLiquidityRequestSDKType {}
export interface QueryTotalLiquidityResponse {
  liquidity: Coin[];
}
export interface QueryTotalLiquidityResponseProtoMsg {
  typeUrl: "/symphony.gamm.v1beta1.QueryTotalLiquidityResponse";
  value: Uint8Array;
}
export interface QueryTotalLiquidityResponseAmino {
  liquidity?: CoinAmino[];
}
export interface QueryTotalLiquidityResponseAminoMsg {
  type: "/symphony.gamm.v1beta1.QueryTotalLiquidityResponse";
  value: QueryTotalLiquidityResponseAmino;
}
export interface QueryTotalLiquidityResponseSDKType {
  liquidity: CoinSDKType[];
}
/** =============================== QueryConcentratedPoolIdLinkFromCFMM */
export interface QueryConcentratedPoolIdLinkFromCFMMRequest {
  cfmmPoolId: bigint;
}
export interface QueryConcentratedPoolIdLinkFromCFMMRequestProtoMsg {
  typeUrl: "/symphony.gamm.v1beta1.QueryConcentratedPoolIdLinkFromCFMMRequest";
  value: Uint8Array;
}
/** =============================== QueryConcentratedPoolIdLinkFromCFMM */
export interface QueryConcentratedPoolIdLinkFromCFMMRequestAmino {
  cfmm_pool_id?: string;
}
export interface QueryConcentratedPoolIdLinkFromCFMMRequestAminoMsg {
  type: "/symphony.gamm.v1beta1.QueryConcentratedPoolIdLinkFromCFMMRequest";
  value: QueryConcentratedPoolIdLinkFromCFMMRequestAmino;
}
/** =============================== QueryConcentratedPoolIdLinkFromCFMM */
export interface QueryConcentratedPoolIdLinkFromCFMMRequestSDKType {
  cfmm_pool_id: bigint;
}
export interface QueryConcentratedPoolIdLinkFromCFMMResponse {
  concentratedPoolId: bigint;
}
export interface QueryConcentratedPoolIdLinkFromCFMMResponseProtoMsg {
  typeUrl: "/symphony.gamm.v1beta1.QueryConcentratedPoolIdLinkFromCFMMResponse";
  value: Uint8Array;
}
export interface QueryConcentratedPoolIdLinkFromCFMMResponseAmino {
  concentrated_pool_id?: string;
}
export interface QueryConcentratedPoolIdLinkFromCFMMResponseAminoMsg {
  type: "/symphony.gamm.v1beta1.QueryConcentratedPoolIdLinkFromCFMMResponse";
  value: QueryConcentratedPoolIdLinkFromCFMMResponseAmino;
}
export interface QueryConcentratedPoolIdLinkFromCFMMResponseSDKType {
  concentrated_pool_id: bigint;
}
/** =============================== QueryCFMMConcentratedPoolLinks */
export interface QueryCFMMConcentratedPoolLinksRequest {}
export interface QueryCFMMConcentratedPoolLinksRequestProtoMsg {
  typeUrl: "/symphony.gamm.v1beta1.QueryCFMMConcentratedPoolLinksRequest";
  value: Uint8Array;
}
/** =============================== QueryCFMMConcentratedPoolLinks */
export interface QueryCFMMConcentratedPoolLinksRequestAmino {}
export interface QueryCFMMConcentratedPoolLinksRequestAminoMsg {
  type: "/symphony.gamm.v1beta1.QueryCFMMConcentratedPoolLinksRequest";
  value: QueryCFMMConcentratedPoolLinksRequestAmino;
}
/** =============================== QueryCFMMConcentratedPoolLinks */
export interface QueryCFMMConcentratedPoolLinksRequestSDKType {}
export interface QueryCFMMConcentratedPoolLinksResponse {
  migrationRecords?: MigrationRecords;
}
export interface QueryCFMMConcentratedPoolLinksResponseProtoMsg {
  typeUrl: "/symphony.gamm.v1beta1.QueryCFMMConcentratedPoolLinksResponse";
  value: Uint8Array;
}
export interface QueryCFMMConcentratedPoolLinksResponseAmino {
  migration_records?: MigrationRecordsAmino;
}
export interface QueryCFMMConcentratedPoolLinksResponseAminoMsg {
  type: "/symphony.gamm.v1beta1.QueryCFMMConcentratedPoolLinksResponse";
  value: QueryCFMMConcentratedPoolLinksResponseAmino;
}
export interface QueryCFMMConcentratedPoolLinksResponseSDKType {
  migration_records?: MigrationRecordsSDKType;
}
function createBaseParamsRequest(): ParamsRequest {
  return {};
}
export const ParamsRequest = {
  typeUrl: "/symphony.gamm.v1beta1.ParamsRequest",
  is(o: any): o is ParamsRequest {
    return o && o.$typeUrl === ParamsRequest.typeUrl;
  },
  isSDK(o: any): o is ParamsRequestSDKType {
    return o && o.$typeUrl === ParamsRequest.typeUrl;
  },
  isAmino(o: any): o is ParamsRequestAmino {
    return o && o.$typeUrl === ParamsRequest.typeUrl;
  },
  encode(_: ParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParamsRequest();
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
  fromPartial(_: Partial<ParamsRequest>): ParamsRequest {
    const message = createBaseParamsRequest();
    return message;
  },
  fromAmino(_: ParamsRequestAmino): ParamsRequest {
    const message = createBaseParamsRequest();
    return message;
  },
  toAmino(_: ParamsRequest): ParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: ParamsRequestAminoMsg): ParamsRequest {
    return ParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsRequestProtoMsg): ParamsRequest {
    return ParamsRequest.decode(message.value);
  },
  toProto(message: ParamsRequest): Uint8Array {
    return ParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: ParamsRequest): ParamsRequestProtoMsg {
    return {
      typeUrl: "/symphony.gamm.v1beta1.ParamsRequest",
      value: ParamsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ParamsRequest.typeUrl, ParamsRequest);
function createBaseParamsResponse(): ParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const ParamsResponse = {
  typeUrl: "/symphony.gamm.v1beta1.ParamsResponse",
  is(o: any): o is ParamsResponse {
    return o && (o.$typeUrl === ParamsResponse.typeUrl || Params.is(o.params));
  },
  isSDK(o: any): o is ParamsResponseSDKType {
    return o && (o.$typeUrl === ParamsResponse.typeUrl || Params.isSDK(o.params));
  },
  isAmino(o: any): o is ParamsResponseAmino {
    return o && (o.$typeUrl === ParamsResponse.typeUrl || Params.isAmino(o.params));
  },
  encode(message: ParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParamsResponse();
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
  fromPartial(object: Partial<ParamsResponse>): ParamsResponse {
    const message = createBaseParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: ParamsResponseAmino): ParamsResponse {
    const message = createBaseParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: ParamsResponse): ParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsResponseAminoMsg): ParamsResponse {
    return ParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsResponseProtoMsg): ParamsResponse {
    return ParamsResponse.decode(message.value);
  },
  toProto(message: ParamsResponse): Uint8Array {
    return ParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: ParamsResponse): ParamsResponseProtoMsg {
    return {
      typeUrl: "/symphony.gamm.v1beta1.ParamsResponse",
      value: ParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ParamsResponse.typeUrl, ParamsResponse);
function createBaseQueryPoolRequest(): QueryPoolRequest {
  return {
    poolId: BigInt(0)
  };
}
export const QueryPoolRequest = {
  typeUrl: "/symphony.gamm.v1beta1.QueryPoolRequest",
  is(o: any): o is QueryPoolRequest {
    return o && (o.$typeUrl === QueryPoolRequest.typeUrl || typeof o.poolId === "bigint");
  },
  isSDK(o: any): o is QueryPoolRequestSDKType {
    return o && (o.$typeUrl === QueryPoolRequest.typeUrl || typeof o.pool_id === "bigint");
  },
  isAmino(o: any): o is QueryPoolRequestAmino {
    return o && (o.$typeUrl === QueryPoolRequest.typeUrl || typeof o.pool_id === "bigint");
  },
  encode(message: QueryPoolRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
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
          message.poolId = reader.uint64();
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
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryPoolRequestAmino): QueryPoolRequest {
    const message = createBaseQueryPoolRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(message: QueryPoolRequest): QueryPoolRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
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
      typeUrl: "/symphony.gamm.v1beta1.QueryPoolRequest",
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
  typeUrl: "/symphony.gamm.v1beta1.QueryPoolResponse",
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
      Any.encode(GlobalDecoderRegistry.wrapAny(message.pool), writer.uint32(10).fork()).ldelim();
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
          message.pool = GlobalDecoderRegistry.unwrapAny(reader);
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
    message.pool = object.pool !== undefined && object.pool !== null ? GlobalDecoderRegistry.fromPartial(object.pool) : undefined;
    return message;
  },
  fromAmino(object: QueryPoolResponseAmino): QueryPoolResponse {
    const message = createBaseQueryPoolResponse();
    if (object.pool !== undefined && object.pool !== null) {
      message.pool = GlobalDecoderRegistry.fromAminoMsg(object.pool);
    }
    return message;
  },
  toAmino(message: QueryPoolResponse): QueryPoolResponseAmino {
    const obj: any = {};
    obj.pool = message.pool ? GlobalDecoderRegistry.toAminoMsg(message.pool) : undefined;
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
      typeUrl: "/symphony.gamm.v1beta1.QueryPoolResponse",
      value: QueryPoolResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryPoolResponse.typeUrl, QueryPoolResponse);
function createBaseQueryPoolsRequest(): QueryPoolsRequest {
  return {
    pagination: undefined
  };
}
export const QueryPoolsRequest = {
  typeUrl: "/symphony.gamm.v1beta1.QueryPoolsRequest",
  is(o: any): o is QueryPoolsRequest {
    return o && o.$typeUrl === QueryPoolsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryPoolsRequestSDKType {
    return o && o.$typeUrl === QueryPoolsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryPoolsRequestAmino {
    return o && o.$typeUrl === QueryPoolsRequest.typeUrl;
  },
  encode(message: QueryPoolsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPoolsRequest>): QueryPoolsRequest {
    const message = createBaseQueryPoolsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPoolsRequestAmino): QueryPoolsRequest {
    const message = createBaseQueryPoolsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPoolsRequest): QueryPoolsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
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
      typeUrl: "/symphony.gamm.v1beta1.QueryPoolsRequest",
      value: QueryPoolsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryPoolsRequest.typeUrl, QueryPoolsRequest);
function createBaseQueryPoolsResponse(): QueryPoolsResponse {
  return {
    pools: [],
    pagination: undefined
  };
}
export const QueryPoolsResponse = {
  typeUrl: "/symphony.gamm.v1beta1.QueryPoolsResponse",
  is(o: any): o is QueryPoolsResponse {
    return o && (o.$typeUrl === QueryPoolsResponse.typeUrl || Array.isArray(o.pools) && (!o.pools.length || Pool1.is(o.pools[0]) || CosmWasmPool.is(o.pools[0]) || Pool2.is(o.pools[0]) || Pool3.is(o.pools[0]) || Any.is(o.pools[0])));
  },
  isSDK(o: any): o is QueryPoolsResponseSDKType {
    return o && (o.$typeUrl === QueryPoolsResponse.typeUrl || Array.isArray(o.pools) && (!o.pools.length || Pool1.isSDK(o.pools[0]) || CosmWasmPool.isSDK(o.pools[0]) || Pool2.isSDK(o.pools[0]) || Pool3.isSDK(o.pools[0]) || Any.isSDK(o.pools[0])));
  },
  isAmino(o: any): o is QueryPoolsResponseAmino {
    return o && (o.$typeUrl === QueryPoolsResponse.typeUrl || Array.isArray(o.pools) && (!o.pools.length || Pool1.isAmino(o.pools[0]) || CosmWasmPool.isAmino(o.pools[0]) || Pool2.isAmino(o.pools[0]) || Pool3.isAmino(o.pools[0]) || Any.isAmino(o.pools[0])));
  },
  encode(message: QueryPoolsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pools) {
      Any.encode(GlobalDecoderRegistry.wrapAny(v!), writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
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
          message.pools.push(GlobalDecoderRegistry.unwrapAny(reader));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
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
    message.pools = object.pools?.map(e => GlobalDecoderRegistry.fromPartial(e) as any) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPoolsResponseAmino): QueryPoolsResponse {
    const message = createBaseQueryPoolsResponse();
    message.pools = object.pools?.map(e => GlobalDecoderRegistry.fromAminoMsg(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPoolsResponse): QueryPoolsResponseAmino {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map(e => e ? GlobalDecoderRegistry.toAminoMsg(e) : undefined);
    } else {
      obj.pools = message.pools;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
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
      typeUrl: "/symphony.gamm.v1beta1.QueryPoolsResponse",
      value: QueryPoolsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryPoolsResponse.typeUrl, QueryPoolsResponse);
function createBaseQueryNumPoolsRequest(): QueryNumPoolsRequest {
  return {};
}
export const QueryNumPoolsRequest = {
  typeUrl: "/symphony.gamm.v1beta1.QueryNumPoolsRequest",
  is(o: any): o is QueryNumPoolsRequest {
    return o && o.$typeUrl === QueryNumPoolsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryNumPoolsRequestSDKType {
    return o && o.$typeUrl === QueryNumPoolsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryNumPoolsRequestAmino {
    return o && o.$typeUrl === QueryNumPoolsRequest.typeUrl;
  },
  encode(_: QueryNumPoolsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryNumPoolsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNumPoolsRequest();
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
  fromPartial(_: Partial<QueryNumPoolsRequest>): QueryNumPoolsRequest {
    const message = createBaseQueryNumPoolsRequest();
    return message;
  },
  fromAmino(_: QueryNumPoolsRequestAmino): QueryNumPoolsRequest {
    const message = createBaseQueryNumPoolsRequest();
    return message;
  },
  toAmino(_: QueryNumPoolsRequest): QueryNumPoolsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryNumPoolsRequestAminoMsg): QueryNumPoolsRequest {
    return QueryNumPoolsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryNumPoolsRequestProtoMsg): QueryNumPoolsRequest {
    return QueryNumPoolsRequest.decode(message.value);
  },
  toProto(message: QueryNumPoolsRequest): Uint8Array {
    return QueryNumPoolsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryNumPoolsRequest): QueryNumPoolsRequestProtoMsg {
    return {
      typeUrl: "/symphony.gamm.v1beta1.QueryNumPoolsRequest",
      value: QueryNumPoolsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryNumPoolsRequest.typeUrl, QueryNumPoolsRequest);
function createBaseQueryNumPoolsResponse(): QueryNumPoolsResponse {
  return {
    numPools: BigInt(0)
  };
}
export const QueryNumPoolsResponse = {
  typeUrl: "/symphony.gamm.v1beta1.QueryNumPoolsResponse",
  is(o: any): o is QueryNumPoolsResponse {
    return o && (o.$typeUrl === QueryNumPoolsResponse.typeUrl || typeof o.numPools === "bigint");
  },
  isSDK(o: any): o is QueryNumPoolsResponseSDKType {
    return o && (o.$typeUrl === QueryNumPoolsResponse.typeUrl || typeof o.num_pools === "bigint");
  },
  isAmino(o: any): o is QueryNumPoolsResponseAmino {
    return o && (o.$typeUrl === QueryNumPoolsResponse.typeUrl || typeof o.num_pools === "bigint");
  },
  encode(message: QueryNumPoolsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.numPools !== BigInt(0)) {
      writer.uint32(8).uint64(message.numPools);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryNumPoolsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNumPoolsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.numPools = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryNumPoolsResponse>): QueryNumPoolsResponse {
    const message = createBaseQueryNumPoolsResponse();
    message.numPools = object.numPools !== undefined && object.numPools !== null ? BigInt(object.numPools.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryNumPoolsResponseAmino): QueryNumPoolsResponse {
    const message = createBaseQueryNumPoolsResponse();
    if (object.num_pools !== undefined && object.num_pools !== null) {
      message.numPools = BigInt(object.num_pools);
    }
    return message;
  },
  toAmino(message: QueryNumPoolsResponse): QueryNumPoolsResponseAmino {
    const obj: any = {};
    obj.num_pools = message.numPools !== BigInt(0) ? message.numPools?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryNumPoolsResponseAminoMsg): QueryNumPoolsResponse {
    return QueryNumPoolsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryNumPoolsResponseProtoMsg): QueryNumPoolsResponse {
    return QueryNumPoolsResponse.decode(message.value);
  },
  toProto(message: QueryNumPoolsResponse): Uint8Array {
    return QueryNumPoolsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryNumPoolsResponse): QueryNumPoolsResponseProtoMsg {
    return {
      typeUrl: "/symphony.gamm.v1beta1.QueryNumPoolsResponse",
      value: QueryNumPoolsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryNumPoolsResponse.typeUrl, QueryNumPoolsResponse);
function createBaseQueryPoolTypeRequest(): QueryPoolTypeRequest {
  return {
    poolId: BigInt(0)
  };
}
export const QueryPoolTypeRequest = {
  typeUrl: "/symphony.gamm.v1beta1.QueryPoolTypeRequest",
  is(o: any): o is QueryPoolTypeRequest {
    return o && (o.$typeUrl === QueryPoolTypeRequest.typeUrl || typeof o.poolId === "bigint");
  },
  isSDK(o: any): o is QueryPoolTypeRequestSDKType {
    return o && (o.$typeUrl === QueryPoolTypeRequest.typeUrl || typeof o.pool_id === "bigint");
  },
  isAmino(o: any): o is QueryPoolTypeRequestAmino {
    return o && (o.$typeUrl === QueryPoolTypeRequest.typeUrl || typeof o.pool_id === "bigint");
  },
  encode(message: QueryPoolTypeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolTypeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolTypeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPoolTypeRequest>): QueryPoolTypeRequest {
    const message = createBaseQueryPoolTypeRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryPoolTypeRequestAmino): QueryPoolTypeRequest {
    const message = createBaseQueryPoolTypeRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(message: QueryPoolTypeRequest): QueryPoolTypeRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPoolTypeRequestAminoMsg): QueryPoolTypeRequest {
    return QueryPoolTypeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolTypeRequestProtoMsg): QueryPoolTypeRequest {
    return QueryPoolTypeRequest.decode(message.value);
  },
  toProto(message: QueryPoolTypeRequest): Uint8Array {
    return QueryPoolTypeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolTypeRequest): QueryPoolTypeRequestProtoMsg {
    return {
      typeUrl: "/symphony.gamm.v1beta1.QueryPoolTypeRequest",
      value: QueryPoolTypeRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryPoolTypeRequest.typeUrl, QueryPoolTypeRequest);
function createBaseQueryPoolTypeResponse(): QueryPoolTypeResponse {
  return {
    poolType: ""
  };
}
export const QueryPoolTypeResponse = {
  typeUrl: "/symphony.gamm.v1beta1.QueryPoolTypeResponse",
  is(o: any): o is QueryPoolTypeResponse {
    return o && (o.$typeUrl === QueryPoolTypeResponse.typeUrl || typeof o.poolType === "string");
  },
  isSDK(o: any): o is QueryPoolTypeResponseSDKType {
    return o && (o.$typeUrl === QueryPoolTypeResponse.typeUrl || typeof o.pool_type === "string");
  },
  isAmino(o: any): o is QueryPoolTypeResponseAmino {
    return o && (o.$typeUrl === QueryPoolTypeResponse.typeUrl || typeof o.pool_type === "string");
  },
  encode(message: QueryPoolTypeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolType !== "") {
      writer.uint32(10).string(message.poolType);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolTypeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolTypeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPoolTypeResponse>): QueryPoolTypeResponse {
    const message = createBaseQueryPoolTypeResponse();
    message.poolType = object.poolType ?? "";
    return message;
  },
  fromAmino(object: QueryPoolTypeResponseAmino): QueryPoolTypeResponse {
    const message = createBaseQueryPoolTypeResponse();
    if (object.pool_type !== undefined && object.pool_type !== null) {
      message.poolType = object.pool_type;
    }
    return message;
  },
  toAmino(message: QueryPoolTypeResponse): QueryPoolTypeResponseAmino {
    const obj: any = {};
    obj.pool_type = message.poolType === "" ? undefined : message.poolType;
    return obj;
  },
  fromAminoMsg(object: QueryPoolTypeResponseAminoMsg): QueryPoolTypeResponse {
    return QueryPoolTypeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolTypeResponseProtoMsg): QueryPoolTypeResponse {
    return QueryPoolTypeResponse.decode(message.value);
  },
  toProto(message: QueryPoolTypeResponse): Uint8Array {
    return QueryPoolTypeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolTypeResponse): QueryPoolTypeResponseProtoMsg {
    return {
      typeUrl: "/symphony.gamm.v1beta1.QueryPoolTypeResponse",
      value: QueryPoolTypeResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryPoolTypeResponse.typeUrl, QueryPoolTypeResponse);
function createBaseQueryCalcJoinPoolSharesRequest(): QueryCalcJoinPoolSharesRequest {
  return {
    poolId: BigInt(0),
    tokensIn: []
  };
}
export const QueryCalcJoinPoolSharesRequest = {
  typeUrl: "/symphony.gamm.v1beta1.QueryCalcJoinPoolSharesRequest",
  is(o: any): o is QueryCalcJoinPoolSharesRequest {
    return o && (o.$typeUrl === QueryCalcJoinPoolSharesRequest.typeUrl || typeof o.poolId === "bigint" && Array.isArray(o.tokensIn) && (!o.tokensIn.length || Coin.is(o.tokensIn[0])));
  },
  isSDK(o: any): o is QueryCalcJoinPoolSharesRequestSDKType {
    return o && (o.$typeUrl === QueryCalcJoinPoolSharesRequest.typeUrl || typeof o.pool_id === "bigint" && Array.isArray(o.tokens_in) && (!o.tokens_in.length || Coin.isSDK(o.tokens_in[0])));
  },
  isAmino(o: any): o is QueryCalcJoinPoolSharesRequestAmino {
    return o && (o.$typeUrl === QueryCalcJoinPoolSharesRequest.typeUrl || typeof o.pool_id === "bigint" && Array.isArray(o.tokens_in) && (!o.tokens_in.length || Coin.isAmino(o.tokens_in[0])));
  },
  encode(message: QueryCalcJoinPoolSharesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    for (const v of message.tokensIn) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCalcJoinPoolSharesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCalcJoinPoolSharesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.tokensIn.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryCalcJoinPoolSharesRequest>): QueryCalcJoinPoolSharesRequest {
    const message = createBaseQueryCalcJoinPoolSharesRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.tokensIn = object.tokensIn?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryCalcJoinPoolSharesRequestAmino): QueryCalcJoinPoolSharesRequest {
    const message = createBaseQueryCalcJoinPoolSharesRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    message.tokensIn = object.tokens_in?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryCalcJoinPoolSharesRequest): QueryCalcJoinPoolSharesRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    if (message.tokensIn) {
      obj.tokens_in = message.tokensIn.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.tokens_in = message.tokensIn;
    }
    return obj;
  },
  fromAminoMsg(object: QueryCalcJoinPoolSharesRequestAminoMsg): QueryCalcJoinPoolSharesRequest {
    return QueryCalcJoinPoolSharesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCalcJoinPoolSharesRequestProtoMsg): QueryCalcJoinPoolSharesRequest {
    return QueryCalcJoinPoolSharesRequest.decode(message.value);
  },
  toProto(message: QueryCalcJoinPoolSharesRequest): Uint8Array {
    return QueryCalcJoinPoolSharesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCalcJoinPoolSharesRequest): QueryCalcJoinPoolSharesRequestProtoMsg {
    return {
      typeUrl: "/symphony.gamm.v1beta1.QueryCalcJoinPoolSharesRequest",
      value: QueryCalcJoinPoolSharesRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryCalcJoinPoolSharesRequest.typeUrl, QueryCalcJoinPoolSharesRequest);
function createBaseQueryCalcJoinPoolSharesResponse(): QueryCalcJoinPoolSharesResponse {
  return {
    shareOutAmount: "",
    tokensOut: []
  };
}
export const QueryCalcJoinPoolSharesResponse = {
  typeUrl: "/symphony.gamm.v1beta1.QueryCalcJoinPoolSharesResponse",
  is(o: any): o is QueryCalcJoinPoolSharesResponse {
    return o && (o.$typeUrl === QueryCalcJoinPoolSharesResponse.typeUrl || typeof o.shareOutAmount === "string" && Array.isArray(o.tokensOut) && (!o.tokensOut.length || Coin.is(o.tokensOut[0])));
  },
  isSDK(o: any): o is QueryCalcJoinPoolSharesResponseSDKType {
    return o && (o.$typeUrl === QueryCalcJoinPoolSharesResponse.typeUrl || typeof o.share_out_amount === "string" && Array.isArray(o.tokens_out) && (!o.tokens_out.length || Coin.isSDK(o.tokens_out[0])));
  },
  isAmino(o: any): o is QueryCalcJoinPoolSharesResponseAmino {
    return o && (o.$typeUrl === QueryCalcJoinPoolSharesResponse.typeUrl || typeof o.share_out_amount === "string" && Array.isArray(o.tokens_out) && (!o.tokens_out.length || Coin.isAmino(o.tokens_out[0])));
  },
  encode(message: QueryCalcJoinPoolSharesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.shareOutAmount !== "") {
      writer.uint32(10).string(message.shareOutAmount);
    }
    for (const v of message.tokensOut) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCalcJoinPoolSharesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCalcJoinPoolSharesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.shareOutAmount = reader.string();
          break;
        case 2:
          message.tokensOut.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryCalcJoinPoolSharesResponse>): QueryCalcJoinPoolSharesResponse {
    const message = createBaseQueryCalcJoinPoolSharesResponse();
    message.shareOutAmount = object.shareOutAmount ?? "";
    message.tokensOut = object.tokensOut?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryCalcJoinPoolSharesResponseAmino): QueryCalcJoinPoolSharesResponse {
    const message = createBaseQueryCalcJoinPoolSharesResponse();
    if (object.share_out_amount !== undefined && object.share_out_amount !== null) {
      message.shareOutAmount = object.share_out_amount;
    }
    message.tokensOut = object.tokens_out?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryCalcJoinPoolSharesResponse): QueryCalcJoinPoolSharesResponseAmino {
    const obj: any = {};
    obj.share_out_amount = message.shareOutAmount === "" ? undefined : message.shareOutAmount;
    if (message.tokensOut) {
      obj.tokens_out = message.tokensOut.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.tokens_out = message.tokensOut;
    }
    return obj;
  },
  fromAminoMsg(object: QueryCalcJoinPoolSharesResponseAminoMsg): QueryCalcJoinPoolSharesResponse {
    return QueryCalcJoinPoolSharesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCalcJoinPoolSharesResponseProtoMsg): QueryCalcJoinPoolSharesResponse {
    return QueryCalcJoinPoolSharesResponse.decode(message.value);
  },
  toProto(message: QueryCalcJoinPoolSharesResponse): Uint8Array {
    return QueryCalcJoinPoolSharesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCalcJoinPoolSharesResponse): QueryCalcJoinPoolSharesResponseProtoMsg {
    return {
      typeUrl: "/symphony.gamm.v1beta1.QueryCalcJoinPoolSharesResponse",
      value: QueryCalcJoinPoolSharesResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryCalcJoinPoolSharesResponse.typeUrl, QueryCalcJoinPoolSharesResponse);
function createBaseQueryCalcExitPoolCoinsFromSharesRequest(): QueryCalcExitPoolCoinsFromSharesRequest {
  return {
    poolId: BigInt(0),
    shareInAmount: ""
  };
}
export const QueryCalcExitPoolCoinsFromSharesRequest = {
  typeUrl: "/symphony.gamm.v1beta1.QueryCalcExitPoolCoinsFromSharesRequest",
  is(o: any): o is QueryCalcExitPoolCoinsFromSharesRequest {
    return o && (o.$typeUrl === QueryCalcExitPoolCoinsFromSharesRequest.typeUrl || typeof o.poolId === "bigint" && typeof o.shareInAmount === "string");
  },
  isSDK(o: any): o is QueryCalcExitPoolCoinsFromSharesRequestSDKType {
    return o && (o.$typeUrl === QueryCalcExitPoolCoinsFromSharesRequest.typeUrl || typeof o.pool_id === "bigint" && typeof o.share_in_amount === "string");
  },
  isAmino(o: any): o is QueryCalcExitPoolCoinsFromSharesRequestAmino {
    return o && (o.$typeUrl === QueryCalcExitPoolCoinsFromSharesRequest.typeUrl || typeof o.pool_id === "bigint" && typeof o.share_in_amount === "string");
  },
  encode(message: QueryCalcExitPoolCoinsFromSharesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.shareInAmount !== "") {
      writer.uint32(18).string(message.shareInAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCalcExitPoolCoinsFromSharesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCalcExitPoolCoinsFromSharesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.shareInAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryCalcExitPoolCoinsFromSharesRequest>): QueryCalcExitPoolCoinsFromSharesRequest {
    const message = createBaseQueryCalcExitPoolCoinsFromSharesRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.shareInAmount = object.shareInAmount ?? "";
    return message;
  },
  fromAmino(object: QueryCalcExitPoolCoinsFromSharesRequestAmino): QueryCalcExitPoolCoinsFromSharesRequest {
    const message = createBaseQueryCalcExitPoolCoinsFromSharesRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.share_in_amount !== undefined && object.share_in_amount !== null) {
      message.shareInAmount = object.share_in_amount;
    }
    return message;
  },
  toAmino(message: QueryCalcExitPoolCoinsFromSharesRequest): QueryCalcExitPoolCoinsFromSharesRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    obj.share_in_amount = message.shareInAmount === "" ? undefined : message.shareInAmount;
    return obj;
  },
  fromAminoMsg(object: QueryCalcExitPoolCoinsFromSharesRequestAminoMsg): QueryCalcExitPoolCoinsFromSharesRequest {
    return QueryCalcExitPoolCoinsFromSharesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCalcExitPoolCoinsFromSharesRequestProtoMsg): QueryCalcExitPoolCoinsFromSharesRequest {
    return QueryCalcExitPoolCoinsFromSharesRequest.decode(message.value);
  },
  toProto(message: QueryCalcExitPoolCoinsFromSharesRequest): Uint8Array {
    return QueryCalcExitPoolCoinsFromSharesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCalcExitPoolCoinsFromSharesRequest): QueryCalcExitPoolCoinsFromSharesRequestProtoMsg {
    return {
      typeUrl: "/symphony.gamm.v1beta1.QueryCalcExitPoolCoinsFromSharesRequest",
      value: QueryCalcExitPoolCoinsFromSharesRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryCalcExitPoolCoinsFromSharesRequest.typeUrl, QueryCalcExitPoolCoinsFromSharesRequest);
function createBaseQueryCalcExitPoolCoinsFromSharesResponse(): QueryCalcExitPoolCoinsFromSharesResponse {
  return {
    tokensOut: []
  };
}
export const QueryCalcExitPoolCoinsFromSharesResponse = {
  typeUrl: "/symphony.gamm.v1beta1.QueryCalcExitPoolCoinsFromSharesResponse",
  is(o: any): o is QueryCalcExitPoolCoinsFromSharesResponse {
    return o && (o.$typeUrl === QueryCalcExitPoolCoinsFromSharesResponse.typeUrl || Array.isArray(o.tokensOut) && (!o.tokensOut.length || Coin.is(o.tokensOut[0])));
  },
  isSDK(o: any): o is QueryCalcExitPoolCoinsFromSharesResponseSDKType {
    return o && (o.$typeUrl === QueryCalcExitPoolCoinsFromSharesResponse.typeUrl || Array.isArray(o.tokens_out) && (!o.tokens_out.length || Coin.isSDK(o.tokens_out[0])));
  },
  isAmino(o: any): o is QueryCalcExitPoolCoinsFromSharesResponseAmino {
    return o && (o.$typeUrl === QueryCalcExitPoolCoinsFromSharesResponse.typeUrl || Array.isArray(o.tokens_out) && (!o.tokens_out.length || Coin.isAmino(o.tokens_out[0])));
  },
  encode(message: QueryCalcExitPoolCoinsFromSharesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.tokensOut) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCalcExitPoolCoinsFromSharesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCalcExitPoolCoinsFromSharesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokensOut.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryCalcExitPoolCoinsFromSharesResponse>): QueryCalcExitPoolCoinsFromSharesResponse {
    const message = createBaseQueryCalcExitPoolCoinsFromSharesResponse();
    message.tokensOut = object.tokensOut?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryCalcExitPoolCoinsFromSharesResponseAmino): QueryCalcExitPoolCoinsFromSharesResponse {
    const message = createBaseQueryCalcExitPoolCoinsFromSharesResponse();
    message.tokensOut = object.tokens_out?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryCalcExitPoolCoinsFromSharesResponse): QueryCalcExitPoolCoinsFromSharesResponseAmino {
    const obj: any = {};
    if (message.tokensOut) {
      obj.tokens_out = message.tokensOut.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.tokens_out = message.tokensOut;
    }
    return obj;
  },
  fromAminoMsg(object: QueryCalcExitPoolCoinsFromSharesResponseAminoMsg): QueryCalcExitPoolCoinsFromSharesResponse {
    return QueryCalcExitPoolCoinsFromSharesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCalcExitPoolCoinsFromSharesResponseProtoMsg): QueryCalcExitPoolCoinsFromSharesResponse {
    return QueryCalcExitPoolCoinsFromSharesResponse.decode(message.value);
  },
  toProto(message: QueryCalcExitPoolCoinsFromSharesResponse): Uint8Array {
    return QueryCalcExitPoolCoinsFromSharesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCalcExitPoolCoinsFromSharesResponse): QueryCalcExitPoolCoinsFromSharesResponseProtoMsg {
    return {
      typeUrl: "/symphony.gamm.v1beta1.QueryCalcExitPoolCoinsFromSharesResponse",
      value: QueryCalcExitPoolCoinsFromSharesResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryCalcExitPoolCoinsFromSharesResponse.typeUrl, QueryCalcExitPoolCoinsFromSharesResponse);
function createBaseQueryPoolParamsRequest(): QueryPoolParamsRequest {
  return {
    poolId: BigInt(0)
  };
}
export const QueryPoolParamsRequest = {
  typeUrl: "/symphony.gamm.v1beta1.QueryPoolParamsRequest",
  is(o: any): o is QueryPoolParamsRequest {
    return o && (o.$typeUrl === QueryPoolParamsRequest.typeUrl || typeof o.poolId === "bigint");
  },
  isSDK(o: any): o is QueryPoolParamsRequestSDKType {
    return o && (o.$typeUrl === QueryPoolParamsRequest.typeUrl || typeof o.pool_id === "bigint");
  },
  isAmino(o: any): o is QueryPoolParamsRequestAmino {
    return o && (o.$typeUrl === QueryPoolParamsRequest.typeUrl || typeof o.pool_id === "bigint");
  },
  encode(message: QueryPoolParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPoolParamsRequest>): QueryPoolParamsRequest {
    const message = createBaseQueryPoolParamsRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryPoolParamsRequestAmino): QueryPoolParamsRequest {
    const message = createBaseQueryPoolParamsRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(message: QueryPoolParamsRequest): QueryPoolParamsRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPoolParamsRequestAminoMsg): QueryPoolParamsRequest {
    return QueryPoolParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolParamsRequestProtoMsg): QueryPoolParamsRequest {
    return QueryPoolParamsRequest.decode(message.value);
  },
  toProto(message: QueryPoolParamsRequest): Uint8Array {
    return QueryPoolParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolParamsRequest): QueryPoolParamsRequestProtoMsg {
    return {
      typeUrl: "/symphony.gamm.v1beta1.QueryPoolParamsRequest",
      value: QueryPoolParamsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryPoolParamsRequest.typeUrl, QueryPoolParamsRequest);
function createBaseQueryPoolParamsResponse(): QueryPoolParamsResponse {
  return {
    params: undefined
  };
}
export const QueryPoolParamsResponse = {
  typeUrl: "/symphony.gamm.v1beta1.QueryPoolParamsResponse",
  is(o: any): o is QueryPoolParamsResponse {
    return o && o.$typeUrl === QueryPoolParamsResponse.typeUrl;
  },
  isSDK(o: any): o is QueryPoolParamsResponseSDKType {
    return o && o.$typeUrl === QueryPoolParamsResponse.typeUrl;
  },
  isAmino(o: any): o is QueryPoolParamsResponseAmino {
    return o && o.$typeUrl === QueryPoolParamsResponse.typeUrl;
  },
  encode(message: QueryPoolParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Any.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPoolParamsResponse>): QueryPoolParamsResponse {
    const message = createBaseQueryPoolParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Any.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryPoolParamsResponseAmino): QueryPoolParamsResponse {
    const message = createBaseQueryPoolParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Any.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryPoolParamsResponse): QueryPoolParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Any.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPoolParamsResponseAminoMsg): QueryPoolParamsResponse {
    return QueryPoolParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolParamsResponseProtoMsg): QueryPoolParamsResponse {
    return QueryPoolParamsResponse.decode(message.value);
  },
  toProto(message: QueryPoolParamsResponse): Uint8Array {
    return QueryPoolParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolParamsResponse): QueryPoolParamsResponseProtoMsg {
    return {
      typeUrl: "/symphony.gamm.v1beta1.QueryPoolParamsResponse",
      value: QueryPoolParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryPoolParamsResponse.typeUrl, QueryPoolParamsResponse);
function createBaseQueryTotalPoolLiquidityRequest(): QueryTotalPoolLiquidityRequest {
  return {
    poolId: BigInt(0)
  };
}
export const QueryTotalPoolLiquidityRequest = {
  typeUrl: "/symphony.gamm.v1beta1.QueryTotalPoolLiquidityRequest",
  is(o: any): o is QueryTotalPoolLiquidityRequest {
    return o && (o.$typeUrl === QueryTotalPoolLiquidityRequest.typeUrl || typeof o.poolId === "bigint");
  },
  isSDK(o: any): o is QueryTotalPoolLiquidityRequestSDKType {
    return o && (o.$typeUrl === QueryTotalPoolLiquidityRequest.typeUrl || typeof o.pool_id === "bigint");
  },
  isAmino(o: any): o is QueryTotalPoolLiquidityRequestAmino {
    return o && (o.$typeUrl === QueryTotalPoolLiquidityRequest.typeUrl || typeof o.pool_id === "bigint");
  },
  encode(message: QueryTotalPoolLiquidityRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalPoolLiquidityRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalPoolLiquidityRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryTotalPoolLiquidityRequest>): QueryTotalPoolLiquidityRequest {
    const message = createBaseQueryTotalPoolLiquidityRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryTotalPoolLiquidityRequestAmino): QueryTotalPoolLiquidityRequest {
    const message = createBaseQueryTotalPoolLiquidityRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(message: QueryTotalPoolLiquidityRequest): QueryTotalPoolLiquidityRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTotalPoolLiquidityRequestAminoMsg): QueryTotalPoolLiquidityRequest {
    return QueryTotalPoolLiquidityRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTotalPoolLiquidityRequestProtoMsg): QueryTotalPoolLiquidityRequest {
    return QueryTotalPoolLiquidityRequest.decode(message.value);
  },
  toProto(message: QueryTotalPoolLiquidityRequest): Uint8Array {
    return QueryTotalPoolLiquidityRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalPoolLiquidityRequest): QueryTotalPoolLiquidityRequestProtoMsg {
    return {
      typeUrl: "/symphony.gamm.v1beta1.QueryTotalPoolLiquidityRequest",
      value: QueryTotalPoolLiquidityRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryTotalPoolLiquidityRequest.typeUrl, QueryTotalPoolLiquidityRequest);
function createBaseQueryTotalPoolLiquidityResponse(): QueryTotalPoolLiquidityResponse {
  return {
    liquidity: []
  };
}
export const QueryTotalPoolLiquidityResponse = {
  typeUrl: "/symphony.gamm.v1beta1.QueryTotalPoolLiquidityResponse",
  is(o: any): o is QueryTotalPoolLiquidityResponse {
    return o && (o.$typeUrl === QueryTotalPoolLiquidityResponse.typeUrl || Array.isArray(o.liquidity) && (!o.liquidity.length || Coin.is(o.liquidity[0])));
  },
  isSDK(o: any): o is QueryTotalPoolLiquidityResponseSDKType {
    return o && (o.$typeUrl === QueryTotalPoolLiquidityResponse.typeUrl || Array.isArray(o.liquidity) && (!o.liquidity.length || Coin.isSDK(o.liquidity[0])));
  },
  isAmino(o: any): o is QueryTotalPoolLiquidityResponseAmino {
    return o && (o.$typeUrl === QueryTotalPoolLiquidityResponse.typeUrl || Array.isArray(o.liquidity) && (!o.liquidity.length || Coin.isAmino(o.liquidity[0])));
  },
  encode(message: QueryTotalPoolLiquidityResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.liquidity) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalPoolLiquidityResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalPoolLiquidityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.liquidity.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryTotalPoolLiquidityResponse>): QueryTotalPoolLiquidityResponse {
    const message = createBaseQueryTotalPoolLiquidityResponse();
    message.liquidity = object.liquidity?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryTotalPoolLiquidityResponseAmino): QueryTotalPoolLiquidityResponse {
    const message = createBaseQueryTotalPoolLiquidityResponse();
    message.liquidity = object.liquidity?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryTotalPoolLiquidityResponse): QueryTotalPoolLiquidityResponseAmino {
    const obj: any = {};
    if (message.liquidity) {
      obj.liquidity = message.liquidity.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.liquidity = message.liquidity;
    }
    return obj;
  },
  fromAminoMsg(object: QueryTotalPoolLiquidityResponseAminoMsg): QueryTotalPoolLiquidityResponse {
    return QueryTotalPoolLiquidityResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTotalPoolLiquidityResponseProtoMsg): QueryTotalPoolLiquidityResponse {
    return QueryTotalPoolLiquidityResponse.decode(message.value);
  },
  toProto(message: QueryTotalPoolLiquidityResponse): Uint8Array {
    return QueryTotalPoolLiquidityResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalPoolLiquidityResponse): QueryTotalPoolLiquidityResponseProtoMsg {
    return {
      typeUrl: "/symphony.gamm.v1beta1.QueryTotalPoolLiquidityResponse",
      value: QueryTotalPoolLiquidityResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryTotalPoolLiquidityResponse.typeUrl, QueryTotalPoolLiquidityResponse);
function createBaseQueryTotalSharesRequest(): QueryTotalSharesRequest {
  return {
    poolId: BigInt(0)
  };
}
export const QueryTotalSharesRequest = {
  typeUrl: "/symphony.gamm.v1beta1.QueryTotalSharesRequest",
  is(o: any): o is QueryTotalSharesRequest {
    return o && (o.$typeUrl === QueryTotalSharesRequest.typeUrl || typeof o.poolId === "bigint");
  },
  isSDK(o: any): o is QueryTotalSharesRequestSDKType {
    return o && (o.$typeUrl === QueryTotalSharesRequest.typeUrl || typeof o.pool_id === "bigint");
  },
  isAmino(o: any): o is QueryTotalSharesRequestAmino {
    return o && (o.$typeUrl === QueryTotalSharesRequest.typeUrl || typeof o.pool_id === "bigint");
  },
  encode(message: QueryTotalSharesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalSharesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalSharesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryTotalSharesRequest>): QueryTotalSharesRequest {
    const message = createBaseQueryTotalSharesRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryTotalSharesRequestAmino): QueryTotalSharesRequest {
    const message = createBaseQueryTotalSharesRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(message: QueryTotalSharesRequest): QueryTotalSharesRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTotalSharesRequestAminoMsg): QueryTotalSharesRequest {
    return QueryTotalSharesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTotalSharesRequestProtoMsg): QueryTotalSharesRequest {
    return QueryTotalSharesRequest.decode(message.value);
  },
  toProto(message: QueryTotalSharesRequest): Uint8Array {
    return QueryTotalSharesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalSharesRequest): QueryTotalSharesRequestProtoMsg {
    return {
      typeUrl: "/symphony.gamm.v1beta1.QueryTotalSharesRequest",
      value: QueryTotalSharesRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryTotalSharesRequest.typeUrl, QueryTotalSharesRequest);
function createBaseQueryTotalSharesResponse(): QueryTotalSharesResponse {
  return {
    totalShares: Coin.fromPartial({})
  };
}
export const QueryTotalSharesResponse = {
  typeUrl: "/symphony.gamm.v1beta1.QueryTotalSharesResponse",
  is(o: any): o is QueryTotalSharesResponse {
    return o && (o.$typeUrl === QueryTotalSharesResponse.typeUrl || Coin.is(o.totalShares));
  },
  isSDK(o: any): o is QueryTotalSharesResponseSDKType {
    return o && (o.$typeUrl === QueryTotalSharesResponse.typeUrl || Coin.isSDK(o.total_shares));
  },
  isAmino(o: any): o is QueryTotalSharesResponseAmino {
    return o && (o.$typeUrl === QueryTotalSharesResponse.typeUrl || Coin.isAmino(o.total_shares));
  },
  encode(message: QueryTotalSharesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.totalShares !== undefined) {
      Coin.encode(message.totalShares, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalSharesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalSharesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalShares = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryTotalSharesResponse>): QueryTotalSharesResponse {
    const message = createBaseQueryTotalSharesResponse();
    message.totalShares = object.totalShares !== undefined && object.totalShares !== null ? Coin.fromPartial(object.totalShares) : undefined;
    return message;
  },
  fromAmino(object: QueryTotalSharesResponseAmino): QueryTotalSharesResponse {
    const message = createBaseQueryTotalSharesResponse();
    if (object.total_shares !== undefined && object.total_shares !== null) {
      message.totalShares = Coin.fromAmino(object.total_shares);
    }
    return message;
  },
  toAmino(message: QueryTotalSharesResponse): QueryTotalSharesResponseAmino {
    const obj: any = {};
    obj.total_shares = message.totalShares ? Coin.toAmino(message.totalShares) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTotalSharesResponseAminoMsg): QueryTotalSharesResponse {
    return QueryTotalSharesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTotalSharesResponseProtoMsg): QueryTotalSharesResponse {
    return QueryTotalSharesResponse.decode(message.value);
  },
  toProto(message: QueryTotalSharesResponse): Uint8Array {
    return QueryTotalSharesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalSharesResponse): QueryTotalSharesResponseProtoMsg {
    return {
      typeUrl: "/symphony.gamm.v1beta1.QueryTotalSharesResponse",
      value: QueryTotalSharesResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryTotalSharesResponse.typeUrl, QueryTotalSharesResponse);
function createBaseQueryCalcJoinPoolNoSwapSharesRequest(): QueryCalcJoinPoolNoSwapSharesRequest {
  return {
    poolId: BigInt(0),
    tokensIn: []
  };
}
export const QueryCalcJoinPoolNoSwapSharesRequest = {
  typeUrl: "/symphony.gamm.v1beta1.QueryCalcJoinPoolNoSwapSharesRequest",
  is(o: any): o is QueryCalcJoinPoolNoSwapSharesRequest {
    return o && (o.$typeUrl === QueryCalcJoinPoolNoSwapSharesRequest.typeUrl || typeof o.poolId === "bigint" && Array.isArray(o.tokensIn) && (!o.tokensIn.length || Coin.is(o.tokensIn[0])));
  },
  isSDK(o: any): o is QueryCalcJoinPoolNoSwapSharesRequestSDKType {
    return o && (o.$typeUrl === QueryCalcJoinPoolNoSwapSharesRequest.typeUrl || typeof o.pool_id === "bigint" && Array.isArray(o.tokens_in) && (!o.tokens_in.length || Coin.isSDK(o.tokens_in[0])));
  },
  isAmino(o: any): o is QueryCalcJoinPoolNoSwapSharesRequestAmino {
    return o && (o.$typeUrl === QueryCalcJoinPoolNoSwapSharesRequest.typeUrl || typeof o.pool_id === "bigint" && Array.isArray(o.tokens_in) && (!o.tokens_in.length || Coin.isAmino(o.tokens_in[0])));
  },
  encode(message: QueryCalcJoinPoolNoSwapSharesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    for (const v of message.tokensIn) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCalcJoinPoolNoSwapSharesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCalcJoinPoolNoSwapSharesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.tokensIn.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryCalcJoinPoolNoSwapSharesRequest>): QueryCalcJoinPoolNoSwapSharesRequest {
    const message = createBaseQueryCalcJoinPoolNoSwapSharesRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.tokensIn = object.tokensIn?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryCalcJoinPoolNoSwapSharesRequestAmino): QueryCalcJoinPoolNoSwapSharesRequest {
    const message = createBaseQueryCalcJoinPoolNoSwapSharesRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    message.tokensIn = object.tokens_in?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryCalcJoinPoolNoSwapSharesRequest): QueryCalcJoinPoolNoSwapSharesRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    if (message.tokensIn) {
      obj.tokens_in = message.tokensIn.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.tokens_in = message.tokensIn;
    }
    return obj;
  },
  fromAminoMsg(object: QueryCalcJoinPoolNoSwapSharesRequestAminoMsg): QueryCalcJoinPoolNoSwapSharesRequest {
    return QueryCalcJoinPoolNoSwapSharesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCalcJoinPoolNoSwapSharesRequestProtoMsg): QueryCalcJoinPoolNoSwapSharesRequest {
    return QueryCalcJoinPoolNoSwapSharesRequest.decode(message.value);
  },
  toProto(message: QueryCalcJoinPoolNoSwapSharesRequest): Uint8Array {
    return QueryCalcJoinPoolNoSwapSharesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCalcJoinPoolNoSwapSharesRequest): QueryCalcJoinPoolNoSwapSharesRequestProtoMsg {
    return {
      typeUrl: "/symphony.gamm.v1beta1.QueryCalcJoinPoolNoSwapSharesRequest",
      value: QueryCalcJoinPoolNoSwapSharesRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryCalcJoinPoolNoSwapSharesRequest.typeUrl, QueryCalcJoinPoolNoSwapSharesRequest);
function createBaseQueryCalcJoinPoolNoSwapSharesResponse(): QueryCalcJoinPoolNoSwapSharesResponse {
  return {
    tokensOut: [],
    sharesOut: ""
  };
}
export const QueryCalcJoinPoolNoSwapSharesResponse = {
  typeUrl: "/symphony.gamm.v1beta1.QueryCalcJoinPoolNoSwapSharesResponse",
  is(o: any): o is QueryCalcJoinPoolNoSwapSharesResponse {
    return o && (o.$typeUrl === QueryCalcJoinPoolNoSwapSharesResponse.typeUrl || Array.isArray(o.tokensOut) && (!o.tokensOut.length || Coin.is(o.tokensOut[0])) && typeof o.sharesOut === "string");
  },
  isSDK(o: any): o is QueryCalcJoinPoolNoSwapSharesResponseSDKType {
    return o && (o.$typeUrl === QueryCalcJoinPoolNoSwapSharesResponse.typeUrl || Array.isArray(o.tokens_out) && (!o.tokens_out.length || Coin.isSDK(o.tokens_out[0])) && typeof o.shares_out === "string");
  },
  isAmino(o: any): o is QueryCalcJoinPoolNoSwapSharesResponseAmino {
    return o && (o.$typeUrl === QueryCalcJoinPoolNoSwapSharesResponse.typeUrl || Array.isArray(o.tokens_out) && (!o.tokens_out.length || Coin.isAmino(o.tokens_out[0])) && typeof o.shares_out === "string");
  },
  encode(message: QueryCalcJoinPoolNoSwapSharesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.tokensOut) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.sharesOut !== "") {
      writer.uint32(18).string(message.sharesOut);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCalcJoinPoolNoSwapSharesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCalcJoinPoolNoSwapSharesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokensOut.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.sharesOut = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryCalcJoinPoolNoSwapSharesResponse>): QueryCalcJoinPoolNoSwapSharesResponse {
    const message = createBaseQueryCalcJoinPoolNoSwapSharesResponse();
    message.tokensOut = object.tokensOut?.map(e => Coin.fromPartial(e)) || [];
    message.sharesOut = object.sharesOut ?? "";
    return message;
  },
  fromAmino(object: QueryCalcJoinPoolNoSwapSharesResponseAmino): QueryCalcJoinPoolNoSwapSharesResponse {
    const message = createBaseQueryCalcJoinPoolNoSwapSharesResponse();
    message.tokensOut = object.tokens_out?.map(e => Coin.fromAmino(e)) || [];
    if (object.shares_out !== undefined && object.shares_out !== null) {
      message.sharesOut = object.shares_out;
    }
    return message;
  },
  toAmino(message: QueryCalcJoinPoolNoSwapSharesResponse): QueryCalcJoinPoolNoSwapSharesResponseAmino {
    const obj: any = {};
    if (message.tokensOut) {
      obj.tokens_out = message.tokensOut.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.tokens_out = message.tokensOut;
    }
    obj.shares_out = message.sharesOut === "" ? undefined : message.sharesOut;
    return obj;
  },
  fromAminoMsg(object: QueryCalcJoinPoolNoSwapSharesResponseAminoMsg): QueryCalcJoinPoolNoSwapSharesResponse {
    return QueryCalcJoinPoolNoSwapSharesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCalcJoinPoolNoSwapSharesResponseProtoMsg): QueryCalcJoinPoolNoSwapSharesResponse {
    return QueryCalcJoinPoolNoSwapSharesResponse.decode(message.value);
  },
  toProto(message: QueryCalcJoinPoolNoSwapSharesResponse): Uint8Array {
    return QueryCalcJoinPoolNoSwapSharesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCalcJoinPoolNoSwapSharesResponse): QueryCalcJoinPoolNoSwapSharesResponseProtoMsg {
    return {
      typeUrl: "/symphony.gamm.v1beta1.QueryCalcJoinPoolNoSwapSharesResponse",
      value: QueryCalcJoinPoolNoSwapSharesResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryCalcJoinPoolNoSwapSharesResponse.typeUrl, QueryCalcJoinPoolNoSwapSharesResponse);
function createBaseQuerySpotPriceRequest(): QuerySpotPriceRequest {
  return {
    poolId: BigInt(0),
    baseAssetDenom: "",
    quoteAssetDenom: "",
    withSwapFee: undefined
  };
}
export const QuerySpotPriceRequest = {
  typeUrl: "/symphony.gamm.v1beta1.QuerySpotPriceRequest",
  is(o: any): o is QuerySpotPriceRequest {
    return o && (o.$typeUrl === QuerySpotPriceRequest.typeUrl || typeof o.poolId === "bigint" && typeof o.baseAssetDenom === "string" && typeof o.quoteAssetDenom === "string");
  },
  isSDK(o: any): o is QuerySpotPriceRequestSDKType {
    return o && (o.$typeUrl === QuerySpotPriceRequest.typeUrl || typeof o.pool_id === "bigint" && typeof o.base_asset_denom === "string" && typeof o.quote_asset_denom === "string");
  },
  isAmino(o: any): o is QuerySpotPriceRequestAmino {
    return o && (o.$typeUrl === QuerySpotPriceRequest.typeUrl || typeof o.pool_id === "bigint" && typeof o.base_asset_denom === "string" && typeof o.quote_asset_denom === "string");
  },
  encode(message: QuerySpotPriceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.baseAssetDenom !== "") {
      writer.uint32(18).string(message.baseAssetDenom);
    }
    if (message.quoteAssetDenom !== "") {
      writer.uint32(26).string(message.quoteAssetDenom);
    }
    if (message.withSwapFee !== undefined) {
      writer.uint32(32).bool(message.withSwapFee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySpotPriceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySpotPriceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.baseAssetDenom = reader.string();
          break;
        case 3:
          message.quoteAssetDenom = reader.string();
          break;
        case 4:
          message.withSwapFee = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QuerySpotPriceRequest>): QuerySpotPriceRequest {
    const message = createBaseQuerySpotPriceRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.baseAssetDenom = object.baseAssetDenom ?? "";
    message.quoteAssetDenom = object.quoteAssetDenom ?? "";
    message.withSwapFee = object.withSwapFee ?? undefined;
    return message;
  },
  fromAmino(object: QuerySpotPriceRequestAmino): QuerySpotPriceRequest {
    const message = createBaseQuerySpotPriceRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.base_asset_denom !== undefined && object.base_asset_denom !== null) {
      message.baseAssetDenom = object.base_asset_denom;
    }
    if (object.quote_asset_denom !== undefined && object.quote_asset_denom !== null) {
      message.quoteAssetDenom = object.quote_asset_denom;
    }
    if (object.withSwapFee !== undefined && object.withSwapFee !== null) {
      message.withSwapFee = object.withSwapFee;
    }
    return message;
  },
  toAmino(message: QuerySpotPriceRequest): QuerySpotPriceRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    obj.base_asset_denom = message.baseAssetDenom === "" ? undefined : message.baseAssetDenom;
    obj.quote_asset_denom = message.quoteAssetDenom === "" ? undefined : message.quoteAssetDenom;
    obj.withSwapFee = message.withSwapFee === null ? undefined : message.withSwapFee;
    return obj;
  },
  fromAminoMsg(object: QuerySpotPriceRequestAminoMsg): QuerySpotPriceRequest {
    return QuerySpotPriceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySpotPriceRequestProtoMsg): QuerySpotPriceRequest {
    return QuerySpotPriceRequest.decode(message.value);
  },
  toProto(message: QuerySpotPriceRequest): Uint8Array {
    return QuerySpotPriceRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySpotPriceRequest): QuerySpotPriceRequestProtoMsg {
    return {
      typeUrl: "/symphony.gamm.v1beta1.QuerySpotPriceRequest",
      value: QuerySpotPriceRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuerySpotPriceRequest.typeUrl, QuerySpotPriceRequest);
function createBaseQueryPoolsWithFilterRequest(): QueryPoolsWithFilterRequest {
  return {
    minLiquidity: "",
    poolType: "",
    pagination: undefined
  };
}
export const QueryPoolsWithFilterRequest = {
  typeUrl: "/symphony.gamm.v1beta1.QueryPoolsWithFilterRequest",
  is(o: any): o is QueryPoolsWithFilterRequest {
    return o && (o.$typeUrl === QueryPoolsWithFilterRequest.typeUrl || typeof o.minLiquidity === "string" && typeof o.poolType === "string");
  },
  isSDK(o: any): o is QueryPoolsWithFilterRequestSDKType {
    return o && (o.$typeUrl === QueryPoolsWithFilterRequest.typeUrl || typeof o.min_liquidity === "string" && typeof o.pool_type === "string");
  },
  isAmino(o: any): o is QueryPoolsWithFilterRequestAmino {
    return o && (o.$typeUrl === QueryPoolsWithFilterRequest.typeUrl || typeof o.min_liquidity === "string" && typeof o.pool_type === "string");
  },
  encode(message: QueryPoolsWithFilterRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.minLiquidity !== "") {
      writer.uint32(10).string(message.minLiquidity);
    }
    if (message.poolType !== "") {
      writer.uint32(18).string(message.poolType);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolsWithFilterRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolsWithFilterRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minLiquidity = reader.string();
          break;
        case 2:
          message.poolType = reader.string();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPoolsWithFilterRequest>): QueryPoolsWithFilterRequest {
    const message = createBaseQueryPoolsWithFilterRequest();
    message.minLiquidity = object.minLiquidity ?? "";
    message.poolType = object.poolType ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPoolsWithFilterRequestAmino): QueryPoolsWithFilterRequest {
    const message = createBaseQueryPoolsWithFilterRequest();
    if (object.min_liquidity !== undefined && object.min_liquidity !== null) {
      message.minLiquidity = object.min_liquidity;
    }
    if (object.pool_type !== undefined && object.pool_type !== null) {
      message.poolType = object.pool_type;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPoolsWithFilterRequest): QueryPoolsWithFilterRequestAmino {
    const obj: any = {};
    obj.min_liquidity = message.minLiquidity === "" ? undefined : message.minLiquidity;
    obj.pool_type = message.poolType === "" ? undefined : message.poolType;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPoolsWithFilterRequestAminoMsg): QueryPoolsWithFilterRequest {
    return QueryPoolsWithFilterRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolsWithFilterRequestProtoMsg): QueryPoolsWithFilterRequest {
    return QueryPoolsWithFilterRequest.decode(message.value);
  },
  toProto(message: QueryPoolsWithFilterRequest): Uint8Array {
    return QueryPoolsWithFilterRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolsWithFilterRequest): QueryPoolsWithFilterRequestProtoMsg {
    return {
      typeUrl: "/symphony.gamm.v1beta1.QueryPoolsWithFilterRequest",
      value: QueryPoolsWithFilterRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryPoolsWithFilterRequest.typeUrl, QueryPoolsWithFilterRequest);
function createBaseQueryPoolsWithFilterResponse(): QueryPoolsWithFilterResponse {
  return {
    pools: [],
    pagination: undefined
  };
}
export const QueryPoolsWithFilterResponse = {
  typeUrl: "/symphony.gamm.v1beta1.QueryPoolsWithFilterResponse",
  is(o: any): o is QueryPoolsWithFilterResponse {
    return o && (o.$typeUrl === QueryPoolsWithFilterResponse.typeUrl || Array.isArray(o.pools) && (!o.pools.length || Pool1.is(o.pools[0]) || CosmWasmPool.is(o.pools[0]) || Pool2.is(o.pools[0]) || Pool3.is(o.pools[0]) || Any.is(o.pools[0])));
  },
  isSDK(o: any): o is QueryPoolsWithFilterResponseSDKType {
    return o && (o.$typeUrl === QueryPoolsWithFilterResponse.typeUrl || Array.isArray(o.pools) && (!o.pools.length || Pool1.isSDK(o.pools[0]) || CosmWasmPool.isSDK(o.pools[0]) || Pool2.isSDK(o.pools[0]) || Pool3.isSDK(o.pools[0]) || Any.isSDK(o.pools[0])));
  },
  isAmino(o: any): o is QueryPoolsWithFilterResponseAmino {
    return o && (o.$typeUrl === QueryPoolsWithFilterResponse.typeUrl || Array.isArray(o.pools) && (!o.pools.length || Pool1.isAmino(o.pools[0]) || CosmWasmPool.isAmino(o.pools[0]) || Pool2.isAmino(o.pools[0]) || Pool3.isAmino(o.pools[0]) || Any.isAmino(o.pools[0])));
  },
  encode(message: QueryPoolsWithFilterResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pools) {
      Any.encode(GlobalDecoderRegistry.wrapAny(v!), writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolsWithFilterResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolsWithFilterResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pools.push(GlobalDecoderRegistry.unwrapAny(reader));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPoolsWithFilterResponse>): QueryPoolsWithFilterResponse {
    const message = createBaseQueryPoolsWithFilterResponse();
    message.pools = object.pools?.map(e => GlobalDecoderRegistry.fromPartial(e) as any) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPoolsWithFilterResponseAmino): QueryPoolsWithFilterResponse {
    const message = createBaseQueryPoolsWithFilterResponse();
    message.pools = object.pools?.map(e => GlobalDecoderRegistry.fromAminoMsg(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPoolsWithFilterResponse): QueryPoolsWithFilterResponseAmino {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map(e => e ? GlobalDecoderRegistry.toAminoMsg(e) : undefined);
    } else {
      obj.pools = message.pools;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPoolsWithFilterResponseAminoMsg): QueryPoolsWithFilterResponse {
    return QueryPoolsWithFilterResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolsWithFilterResponseProtoMsg): QueryPoolsWithFilterResponse {
    return QueryPoolsWithFilterResponse.decode(message.value);
  },
  toProto(message: QueryPoolsWithFilterResponse): Uint8Array {
    return QueryPoolsWithFilterResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolsWithFilterResponse): QueryPoolsWithFilterResponseProtoMsg {
    return {
      typeUrl: "/symphony.gamm.v1beta1.QueryPoolsWithFilterResponse",
      value: QueryPoolsWithFilterResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryPoolsWithFilterResponse.typeUrl, QueryPoolsWithFilterResponse);
function createBaseQuerySpotPriceResponse(): QuerySpotPriceResponse {
  return {
    spotPrice: ""
  };
}
export const QuerySpotPriceResponse = {
  typeUrl: "/symphony.gamm.v1beta1.QuerySpotPriceResponse",
  is(o: any): o is QuerySpotPriceResponse {
    return o && (o.$typeUrl === QuerySpotPriceResponse.typeUrl || typeof o.spotPrice === "string");
  },
  isSDK(o: any): o is QuerySpotPriceResponseSDKType {
    return o && (o.$typeUrl === QuerySpotPriceResponse.typeUrl || typeof o.spot_price === "string");
  },
  isAmino(o: any): o is QuerySpotPriceResponseAmino {
    return o && (o.$typeUrl === QuerySpotPriceResponse.typeUrl || typeof o.spot_price === "string");
  },
  encode(message: QuerySpotPriceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.spotPrice !== "") {
      writer.uint32(10).string(message.spotPrice);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySpotPriceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySpotPriceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.spotPrice = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QuerySpotPriceResponse>): QuerySpotPriceResponse {
    const message = createBaseQuerySpotPriceResponse();
    message.spotPrice = object.spotPrice ?? "";
    return message;
  },
  fromAmino(object: QuerySpotPriceResponseAmino): QuerySpotPriceResponse {
    const message = createBaseQuerySpotPriceResponse();
    if (object.spot_price !== undefined && object.spot_price !== null) {
      message.spotPrice = object.spot_price;
    }
    return message;
  },
  toAmino(message: QuerySpotPriceResponse): QuerySpotPriceResponseAmino {
    const obj: any = {};
    obj.spot_price = message.spotPrice === "" ? undefined : message.spotPrice;
    return obj;
  },
  fromAminoMsg(object: QuerySpotPriceResponseAminoMsg): QuerySpotPriceResponse {
    return QuerySpotPriceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySpotPriceResponseProtoMsg): QuerySpotPriceResponse {
    return QuerySpotPriceResponse.decode(message.value);
  },
  toProto(message: QuerySpotPriceResponse): Uint8Array {
    return QuerySpotPriceResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySpotPriceResponse): QuerySpotPriceResponseProtoMsg {
    return {
      typeUrl: "/symphony.gamm.v1beta1.QuerySpotPriceResponse",
      value: QuerySpotPriceResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuerySpotPriceResponse.typeUrl, QuerySpotPriceResponse);
function createBaseQuerySwapExactAmountInRequest(): QuerySwapExactAmountInRequest {
  return {
    sender: "",
    poolId: BigInt(0),
    tokenIn: "",
    routes: []
  };
}
export const QuerySwapExactAmountInRequest = {
  typeUrl: "/symphony.gamm.v1beta1.QuerySwapExactAmountInRequest",
  is(o: any): o is QuerySwapExactAmountInRequest {
    return o && (o.$typeUrl === QuerySwapExactAmountInRequest.typeUrl || typeof o.sender === "string" && typeof o.poolId === "bigint" && typeof o.tokenIn === "string" && Array.isArray(o.routes) && (!o.routes.length || SwapAmountInRoute.is(o.routes[0])));
  },
  isSDK(o: any): o is QuerySwapExactAmountInRequestSDKType {
    return o && (o.$typeUrl === QuerySwapExactAmountInRequest.typeUrl || typeof o.sender === "string" && typeof o.pool_id === "bigint" && typeof o.token_in === "string" && Array.isArray(o.routes) && (!o.routes.length || SwapAmountInRoute.isSDK(o.routes[0])));
  },
  isAmino(o: any): o is QuerySwapExactAmountInRequestAmino {
    return o && (o.$typeUrl === QuerySwapExactAmountInRequest.typeUrl || typeof o.sender === "string" && typeof o.pool_id === "bigint" && typeof o.token_in === "string" && Array.isArray(o.routes) && (!o.routes.length || SwapAmountInRoute.isAmino(o.routes[0])));
  },
  encode(message: QuerySwapExactAmountInRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.tokenIn !== "") {
      writer.uint32(26).string(message.tokenIn);
    }
    for (const v of message.routes) {
      SwapAmountInRoute.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySwapExactAmountInRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySwapExactAmountInRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64();
          break;
        case 3:
          message.tokenIn = reader.string();
          break;
        case 4:
          message.routes.push(SwapAmountInRoute.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QuerySwapExactAmountInRequest>): QuerySwapExactAmountInRequest {
    const message = createBaseQuerySwapExactAmountInRequest();
    message.sender = object.sender ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.tokenIn = object.tokenIn ?? "";
    message.routes = object.routes?.map(e => SwapAmountInRoute.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QuerySwapExactAmountInRequestAmino): QuerySwapExactAmountInRequest {
    const message = createBaseQuerySwapExactAmountInRequest();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.token_in !== undefined && object.token_in !== null) {
      message.tokenIn = object.token_in;
    }
    message.routes = object.routes?.map(e => SwapAmountInRoute.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QuerySwapExactAmountInRequest): QuerySwapExactAmountInRequestAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    obj.token_in = message.tokenIn === "" ? undefined : message.tokenIn;
    if (message.routes) {
      obj.routes = message.routes.map(e => e ? SwapAmountInRoute.toAmino(e) : undefined);
    } else {
      obj.routes = message.routes;
    }
    return obj;
  },
  fromAminoMsg(object: QuerySwapExactAmountInRequestAminoMsg): QuerySwapExactAmountInRequest {
    return QuerySwapExactAmountInRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySwapExactAmountInRequestProtoMsg): QuerySwapExactAmountInRequest {
    return QuerySwapExactAmountInRequest.decode(message.value);
  },
  toProto(message: QuerySwapExactAmountInRequest): Uint8Array {
    return QuerySwapExactAmountInRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySwapExactAmountInRequest): QuerySwapExactAmountInRequestProtoMsg {
    return {
      typeUrl: "/symphony.gamm.v1beta1.QuerySwapExactAmountInRequest",
      value: QuerySwapExactAmountInRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuerySwapExactAmountInRequest.typeUrl, QuerySwapExactAmountInRequest);
function createBaseQuerySwapExactAmountInResponse(): QuerySwapExactAmountInResponse {
  return {
    tokenOutAmount: ""
  };
}
export const QuerySwapExactAmountInResponse = {
  typeUrl: "/symphony.gamm.v1beta1.QuerySwapExactAmountInResponse",
  is(o: any): o is QuerySwapExactAmountInResponse {
    return o && (o.$typeUrl === QuerySwapExactAmountInResponse.typeUrl || typeof o.tokenOutAmount === "string");
  },
  isSDK(o: any): o is QuerySwapExactAmountInResponseSDKType {
    return o && (o.$typeUrl === QuerySwapExactAmountInResponse.typeUrl || typeof o.token_out_amount === "string");
  },
  isAmino(o: any): o is QuerySwapExactAmountInResponseAmino {
    return o && (o.$typeUrl === QuerySwapExactAmountInResponse.typeUrl || typeof o.token_out_amount === "string");
  },
  encode(message: QuerySwapExactAmountInResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenOutAmount !== "") {
      writer.uint32(10).string(message.tokenOutAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySwapExactAmountInResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySwapExactAmountInResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenOutAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QuerySwapExactAmountInResponse>): QuerySwapExactAmountInResponse {
    const message = createBaseQuerySwapExactAmountInResponse();
    message.tokenOutAmount = object.tokenOutAmount ?? "";
    return message;
  },
  fromAmino(object: QuerySwapExactAmountInResponseAmino): QuerySwapExactAmountInResponse {
    const message = createBaseQuerySwapExactAmountInResponse();
    if (object.token_out_amount !== undefined && object.token_out_amount !== null) {
      message.tokenOutAmount = object.token_out_amount;
    }
    return message;
  },
  toAmino(message: QuerySwapExactAmountInResponse): QuerySwapExactAmountInResponseAmino {
    const obj: any = {};
    obj.token_out_amount = message.tokenOutAmount === "" ? undefined : message.tokenOutAmount;
    return obj;
  },
  fromAminoMsg(object: QuerySwapExactAmountInResponseAminoMsg): QuerySwapExactAmountInResponse {
    return QuerySwapExactAmountInResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySwapExactAmountInResponseProtoMsg): QuerySwapExactAmountInResponse {
    return QuerySwapExactAmountInResponse.decode(message.value);
  },
  toProto(message: QuerySwapExactAmountInResponse): Uint8Array {
    return QuerySwapExactAmountInResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySwapExactAmountInResponse): QuerySwapExactAmountInResponseProtoMsg {
    return {
      typeUrl: "/symphony.gamm.v1beta1.QuerySwapExactAmountInResponse",
      value: QuerySwapExactAmountInResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuerySwapExactAmountInResponse.typeUrl, QuerySwapExactAmountInResponse);
function createBaseQuerySwapExactAmountOutRequest(): QuerySwapExactAmountOutRequest {
  return {
    sender: "",
    poolId: BigInt(0),
    routes: [],
    tokenOut: ""
  };
}
export const QuerySwapExactAmountOutRequest = {
  typeUrl: "/symphony.gamm.v1beta1.QuerySwapExactAmountOutRequest",
  is(o: any): o is QuerySwapExactAmountOutRequest {
    return o && (o.$typeUrl === QuerySwapExactAmountOutRequest.typeUrl || typeof o.sender === "string" && typeof o.poolId === "bigint" && Array.isArray(o.routes) && (!o.routes.length || SwapAmountOutRoute.is(o.routes[0])) && typeof o.tokenOut === "string");
  },
  isSDK(o: any): o is QuerySwapExactAmountOutRequestSDKType {
    return o && (o.$typeUrl === QuerySwapExactAmountOutRequest.typeUrl || typeof o.sender === "string" && typeof o.pool_id === "bigint" && Array.isArray(o.routes) && (!o.routes.length || SwapAmountOutRoute.isSDK(o.routes[0])) && typeof o.token_out === "string");
  },
  isAmino(o: any): o is QuerySwapExactAmountOutRequestAmino {
    return o && (o.$typeUrl === QuerySwapExactAmountOutRequest.typeUrl || typeof o.sender === "string" && typeof o.pool_id === "bigint" && Array.isArray(o.routes) && (!o.routes.length || SwapAmountOutRoute.isAmino(o.routes[0])) && typeof o.token_out === "string");
  },
  encode(message: QuerySwapExactAmountOutRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    for (const v of message.routes) {
      SwapAmountOutRoute.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.tokenOut !== "") {
      writer.uint32(34).string(message.tokenOut);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySwapExactAmountOutRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySwapExactAmountOutRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64();
          break;
        case 3:
          message.routes.push(SwapAmountOutRoute.decode(reader, reader.uint32()));
          break;
        case 4:
          message.tokenOut = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QuerySwapExactAmountOutRequest>): QuerySwapExactAmountOutRequest {
    const message = createBaseQuerySwapExactAmountOutRequest();
    message.sender = object.sender ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.routes = object.routes?.map(e => SwapAmountOutRoute.fromPartial(e)) || [];
    message.tokenOut = object.tokenOut ?? "";
    return message;
  },
  fromAmino(object: QuerySwapExactAmountOutRequestAmino): QuerySwapExactAmountOutRequest {
    const message = createBaseQuerySwapExactAmountOutRequest();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    message.routes = object.routes?.map(e => SwapAmountOutRoute.fromAmino(e)) || [];
    if (object.token_out !== undefined && object.token_out !== null) {
      message.tokenOut = object.token_out;
    }
    return message;
  },
  toAmino(message: QuerySwapExactAmountOutRequest): QuerySwapExactAmountOutRequestAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    if (message.routes) {
      obj.routes = message.routes.map(e => e ? SwapAmountOutRoute.toAmino(e) : undefined);
    } else {
      obj.routes = message.routes;
    }
    obj.token_out = message.tokenOut === "" ? undefined : message.tokenOut;
    return obj;
  },
  fromAminoMsg(object: QuerySwapExactAmountOutRequestAminoMsg): QuerySwapExactAmountOutRequest {
    return QuerySwapExactAmountOutRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySwapExactAmountOutRequestProtoMsg): QuerySwapExactAmountOutRequest {
    return QuerySwapExactAmountOutRequest.decode(message.value);
  },
  toProto(message: QuerySwapExactAmountOutRequest): Uint8Array {
    return QuerySwapExactAmountOutRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySwapExactAmountOutRequest): QuerySwapExactAmountOutRequestProtoMsg {
    return {
      typeUrl: "/symphony.gamm.v1beta1.QuerySwapExactAmountOutRequest",
      value: QuerySwapExactAmountOutRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuerySwapExactAmountOutRequest.typeUrl, QuerySwapExactAmountOutRequest);
function createBaseQuerySwapExactAmountOutResponse(): QuerySwapExactAmountOutResponse {
  return {
    tokenInAmount: ""
  };
}
export const QuerySwapExactAmountOutResponse = {
  typeUrl: "/symphony.gamm.v1beta1.QuerySwapExactAmountOutResponse",
  is(o: any): o is QuerySwapExactAmountOutResponse {
    return o && (o.$typeUrl === QuerySwapExactAmountOutResponse.typeUrl || typeof o.tokenInAmount === "string");
  },
  isSDK(o: any): o is QuerySwapExactAmountOutResponseSDKType {
    return o && (o.$typeUrl === QuerySwapExactAmountOutResponse.typeUrl || typeof o.token_in_amount === "string");
  },
  isAmino(o: any): o is QuerySwapExactAmountOutResponseAmino {
    return o && (o.$typeUrl === QuerySwapExactAmountOutResponse.typeUrl || typeof o.token_in_amount === "string");
  },
  encode(message: QuerySwapExactAmountOutResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenInAmount !== "") {
      writer.uint32(10).string(message.tokenInAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySwapExactAmountOutResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySwapExactAmountOutResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenInAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QuerySwapExactAmountOutResponse>): QuerySwapExactAmountOutResponse {
    const message = createBaseQuerySwapExactAmountOutResponse();
    message.tokenInAmount = object.tokenInAmount ?? "";
    return message;
  },
  fromAmino(object: QuerySwapExactAmountOutResponseAmino): QuerySwapExactAmountOutResponse {
    const message = createBaseQuerySwapExactAmountOutResponse();
    if (object.token_in_amount !== undefined && object.token_in_amount !== null) {
      message.tokenInAmount = object.token_in_amount;
    }
    return message;
  },
  toAmino(message: QuerySwapExactAmountOutResponse): QuerySwapExactAmountOutResponseAmino {
    const obj: any = {};
    obj.token_in_amount = message.tokenInAmount === "" ? undefined : message.tokenInAmount;
    return obj;
  },
  fromAminoMsg(object: QuerySwapExactAmountOutResponseAminoMsg): QuerySwapExactAmountOutResponse {
    return QuerySwapExactAmountOutResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySwapExactAmountOutResponseProtoMsg): QuerySwapExactAmountOutResponse {
    return QuerySwapExactAmountOutResponse.decode(message.value);
  },
  toProto(message: QuerySwapExactAmountOutResponse): Uint8Array {
    return QuerySwapExactAmountOutResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySwapExactAmountOutResponse): QuerySwapExactAmountOutResponseProtoMsg {
    return {
      typeUrl: "/symphony.gamm.v1beta1.QuerySwapExactAmountOutResponse",
      value: QuerySwapExactAmountOutResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuerySwapExactAmountOutResponse.typeUrl, QuerySwapExactAmountOutResponse);
function createBaseQueryTotalLiquidityRequest(): QueryTotalLiquidityRequest {
  return {};
}
export const QueryTotalLiquidityRequest = {
  typeUrl: "/symphony.gamm.v1beta1.QueryTotalLiquidityRequest",
  is(o: any): o is QueryTotalLiquidityRequest {
    return o && o.$typeUrl === QueryTotalLiquidityRequest.typeUrl;
  },
  isSDK(o: any): o is QueryTotalLiquidityRequestSDKType {
    return o && o.$typeUrl === QueryTotalLiquidityRequest.typeUrl;
  },
  isAmino(o: any): o is QueryTotalLiquidityRequestAmino {
    return o && o.$typeUrl === QueryTotalLiquidityRequest.typeUrl;
  },
  encode(_: QueryTotalLiquidityRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalLiquidityRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalLiquidityRequest();
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
  fromPartial(_: Partial<QueryTotalLiquidityRequest>): QueryTotalLiquidityRequest {
    const message = createBaseQueryTotalLiquidityRequest();
    return message;
  },
  fromAmino(_: QueryTotalLiquidityRequestAmino): QueryTotalLiquidityRequest {
    const message = createBaseQueryTotalLiquidityRequest();
    return message;
  },
  toAmino(_: QueryTotalLiquidityRequest): QueryTotalLiquidityRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryTotalLiquidityRequestAminoMsg): QueryTotalLiquidityRequest {
    return QueryTotalLiquidityRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTotalLiquidityRequestProtoMsg): QueryTotalLiquidityRequest {
    return QueryTotalLiquidityRequest.decode(message.value);
  },
  toProto(message: QueryTotalLiquidityRequest): Uint8Array {
    return QueryTotalLiquidityRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalLiquidityRequest): QueryTotalLiquidityRequestProtoMsg {
    return {
      typeUrl: "/symphony.gamm.v1beta1.QueryTotalLiquidityRequest",
      value: QueryTotalLiquidityRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryTotalLiquidityRequest.typeUrl, QueryTotalLiquidityRequest);
function createBaseQueryTotalLiquidityResponse(): QueryTotalLiquidityResponse {
  return {
    liquidity: []
  };
}
export const QueryTotalLiquidityResponse = {
  typeUrl: "/symphony.gamm.v1beta1.QueryTotalLiquidityResponse",
  is(o: any): o is QueryTotalLiquidityResponse {
    return o && (o.$typeUrl === QueryTotalLiquidityResponse.typeUrl || Array.isArray(o.liquidity) && (!o.liquidity.length || Coin.is(o.liquidity[0])));
  },
  isSDK(o: any): o is QueryTotalLiquidityResponseSDKType {
    return o && (o.$typeUrl === QueryTotalLiquidityResponse.typeUrl || Array.isArray(o.liquidity) && (!o.liquidity.length || Coin.isSDK(o.liquidity[0])));
  },
  isAmino(o: any): o is QueryTotalLiquidityResponseAmino {
    return o && (o.$typeUrl === QueryTotalLiquidityResponse.typeUrl || Array.isArray(o.liquidity) && (!o.liquidity.length || Coin.isAmino(o.liquidity[0])));
  },
  encode(message: QueryTotalLiquidityResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.liquidity) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalLiquidityResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalLiquidityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.liquidity.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryTotalLiquidityResponse>): QueryTotalLiquidityResponse {
    const message = createBaseQueryTotalLiquidityResponse();
    message.liquidity = object.liquidity?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryTotalLiquidityResponseAmino): QueryTotalLiquidityResponse {
    const message = createBaseQueryTotalLiquidityResponse();
    message.liquidity = object.liquidity?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryTotalLiquidityResponse): QueryTotalLiquidityResponseAmino {
    const obj: any = {};
    if (message.liquidity) {
      obj.liquidity = message.liquidity.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.liquidity = message.liquidity;
    }
    return obj;
  },
  fromAminoMsg(object: QueryTotalLiquidityResponseAminoMsg): QueryTotalLiquidityResponse {
    return QueryTotalLiquidityResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTotalLiquidityResponseProtoMsg): QueryTotalLiquidityResponse {
    return QueryTotalLiquidityResponse.decode(message.value);
  },
  toProto(message: QueryTotalLiquidityResponse): Uint8Array {
    return QueryTotalLiquidityResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalLiquidityResponse): QueryTotalLiquidityResponseProtoMsg {
    return {
      typeUrl: "/symphony.gamm.v1beta1.QueryTotalLiquidityResponse",
      value: QueryTotalLiquidityResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryTotalLiquidityResponse.typeUrl, QueryTotalLiquidityResponse);
function createBaseQueryConcentratedPoolIdLinkFromCFMMRequest(): QueryConcentratedPoolIdLinkFromCFMMRequest {
  return {
    cfmmPoolId: BigInt(0)
  };
}
export const QueryConcentratedPoolIdLinkFromCFMMRequest = {
  typeUrl: "/symphony.gamm.v1beta1.QueryConcentratedPoolIdLinkFromCFMMRequest",
  is(o: any): o is QueryConcentratedPoolIdLinkFromCFMMRequest {
    return o && (o.$typeUrl === QueryConcentratedPoolIdLinkFromCFMMRequest.typeUrl || typeof o.cfmmPoolId === "bigint");
  },
  isSDK(o: any): o is QueryConcentratedPoolIdLinkFromCFMMRequestSDKType {
    return o && (o.$typeUrl === QueryConcentratedPoolIdLinkFromCFMMRequest.typeUrl || typeof o.cfmm_pool_id === "bigint");
  },
  isAmino(o: any): o is QueryConcentratedPoolIdLinkFromCFMMRequestAmino {
    return o && (o.$typeUrl === QueryConcentratedPoolIdLinkFromCFMMRequest.typeUrl || typeof o.cfmm_pool_id === "bigint");
  },
  encode(message: QueryConcentratedPoolIdLinkFromCFMMRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.cfmmPoolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.cfmmPoolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryConcentratedPoolIdLinkFromCFMMRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConcentratedPoolIdLinkFromCFMMRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cfmmPoolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryConcentratedPoolIdLinkFromCFMMRequest>): QueryConcentratedPoolIdLinkFromCFMMRequest {
    const message = createBaseQueryConcentratedPoolIdLinkFromCFMMRequest();
    message.cfmmPoolId = object.cfmmPoolId !== undefined && object.cfmmPoolId !== null ? BigInt(object.cfmmPoolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryConcentratedPoolIdLinkFromCFMMRequestAmino): QueryConcentratedPoolIdLinkFromCFMMRequest {
    const message = createBaseQueryConcentratedPoolIdLinkFromCFMMRequest();
    if (object.cfmm_pool_id !== undefined && object.cfmm_pool_id !== null) {
      message.cfmmPoolId = BigInt(object.cfmm_pool_id);
    }
    return message;
  },
  toAmino(message: QueryConcentratedPoolIdLinkFromCFMMRequest): QueryConcentratedPoolIdLinkFromCFMMRequestAmino {
    const obj: any = {};
    obj.cfmm_pool_id = message.cfmmPoolId !== BigInt(0) ? message.cfmmPoolId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryConcentratedPoolIdLinkFromCFMMRequestAminoMsg): QueryConcentratedPoolIdLinkFromCFMMRequest {
    return QueryConcentratedPoolIdLinkFromCFMMRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryConcentratedPoolIdLinkFromCFMMRequestProtoMsg): QueryConcentratedPoolIdLinkFromCFMMRequest {
    return QueryConcentratedPoolIdLinkFromCFMMRequest.decode(message.value);
  },
  toProto(message: QueryConcentratedPoolIdLinkFromCFMMRequest): Uint8Array {
    return QueryConcentratedPoolIdLinkFromCFMMRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryConcentratedPoolIdLinkFromCFMMRequest): QueryConcentratedPoolIdLinkFromCFMMRequestProtoMsg {
    return {
      typeUrl: "/symphony.gamm.v1beta1.QueryConcentratedPoolIdLinkFromCFMMRequest",
      value: QueryConcentratedPoolIdLinkFromCFMMRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryConcentratedPoolIdLinkFromCFMMRequest.typeUrl, QueryConcentratedPoolIdLinkFromCFMMRequest);
function createBaseQueryConcentratedPoolIdLinkFromCFMMResponse(): QueryConcentratedPoolIdLinkFromCFMMResponse {
  return {
    concentratedPoolId: BigInt(0)
  };
}
export const QueryConcentratedPoolIdLinkFromCFMMResponse = {
  typeUrl: "/symphony.gamm.v1beta1.QueryConcentratedPoolIdLinkFromCFMMResponse",
  is(o: any): o is QueryConcentratedPoolIdLinkFromCFMMResponse {
    return o && (o.$typeUrl === QueryConcentratedPoolIdLinkFromCFMMResponse.typeUrl || typeof o.concentratedPoolId === "bigint");
  },
  isSDK(o: any): o is QueryConcentratedPoolIdLinkFromCFMMResponseSDKType {
    return o && (o.$typeUrl === QueryConcentratedPoolIdLinkFromCFMMResponse.typeUrl || typeof o.concentrated_pool_id === "bigint");
  },
  isAmino(o: any): o is QueryConcentratedPoolIdLinkFromCFMMResponseAmino {
    return o && (o.$typeUrl === QueryConcentratedPoolIdLinkFromCFMMResponse.typeUrl || typeof o.concentrated_pool_id === "bigint");
  },
  encode(message: QueryConcentratedPoolIdLinkFromCFMMResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.concentratedPoolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.concentratedPoolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryConcentratedPoolIdLinkFromCFMMResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConcentratedPoolIdLinkFromCFMMResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.concentratedPoolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryConcentratedPoolIdLinkFromCFMMResponse>): QueryConcentratedPoolIdLinkFromCFMMResponse {
    const message = createBaseQueryConcentratedPoolIdLinkFromCFMMResponse();
    message.concentratedPoolId = object.concentratedPoolId !== undefined && object.concentratedPoolId !== null ? BigInt(object.concentratedPoolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryConcentratedPoolIdLinkFromCFMMResponseAmino): QueryConcentratedPoolIdLinkFromCFMMResponse {
    const message = createBaseQueryConcentratedPoolIdLinkFromCFMMResponse();
    if (object.concentrated_pool_id !== undefined && object.concentrated_pool_id !== null) {
      message.concentratedPoolId = BigInt(object.concentrated_pool_id);
    }
    return message;
  },
  toAmino(message: QueryConcentratedPoolIdLinkFromCFMMResponse): QueryConcentratedPoolIdLinkFromCFMMResponseAmino {
    const obj: any = {};
    obj.concentrated_pool_id = message.concentratedPoolId !== BigInt(0) ? message.concentratedPoolId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryConcentratedPoolIdLinkFromCFMMResponseAminoMsg): QueryConcentratedPoolIdLinkFromCFMMResponse {
    return QueryConcentratedPoolIdLinkFromCFMMResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryConcentratedPoolIdLinkFromCFMMResponseProtoMsg): QueryConcentratedPoolIdLinkFromCFMMResponse {
    return QueryConcentratedPoolIdLinkFromCFMMResponse.decode(message.value);
  },
  toProto(message: QueryConcentratedPoolIdLinkFromCFMMResponse): Uint8Array {
    return QueryConcentratedPoolIdLinkFromCFMMResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryConcentratedPoolIdLinkFromCFMMResponse): QueryConcentratedPoolIdLinkFromCFMMResponseProtoMsg {
    return {
      typeUrl: "/symphony.gamm.v1beta1.QueryConcentratedPoolIdLinkFromCFMMResponse",
      value: QueryConcentratedPoolIdLinkFromCFMMResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryConcentratedPoolIdLinkFromCFMMResponse.typeUrl, QueryConcentratedPoolIdLinkFromCFMMResponse);
function createBaseQueryCFMMConcentratedPoolLinksRequest(): QueryCFMMConcentratedPoolLinksRequest {
  return {};
}
export const QueryCFMMConcentratedPoolLinksRequest = {
  typeUrl: "/symphony.gamm.v1beta1.QueryCFMMConcentratedPoolLinksRequest",
  is(o: any): o is QueryCFMMConcentratedPoolLinksRequest {
    return o && o.$typeUrl === QueryCFMMConcentratedPoolLinksRequest.typeUrl;
  },
  isSDK(o: any): o is QueryCFMMConcentratedPoolLinksRequestSDKType {
    return o && o.$typeUrl === QueryCFMMConcentratedPoolLinksRequest.typeUrl;
  },
  isAmino(o: any): o is QueryCFMMConcentratedPoolLinksRequestAmino {
    return o && o.$typeUrl === QueryCFMMConcentratedPoolLinksRequest.typeUrl;
  },
  encode(_: QueryCFMMConcentratedPoolLinksRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCFMMConcentratedPoolLinksRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCFMMConcentratedPoolLinksRequest();
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
  fromPartial(_: Partial<QueryCFMMConcentratedPoolLinksRequest>): QueryCFMMConcentratedPoolLinksRequest {
    const message = createBaseQueryCFMMConcentratedPoolLinksRequest();
    return message;
  },
  fromAmino(_: QueryCFMMConcentratedPoolLinksRequestAmino): QueryCFMMConcentratedPoolLinksRequest {
    const message = createBaseQueryCFMMConcentratedPoolLinksRequest();
    return message;
  },
  toAmino(_: QueryCFMMConcentratedPoolLinksRequest): QueryCFMMConcentratedPoolLinksRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryCFMMConcentratedPoolLinksRequestAminoMsg): QueryCFMMConcentratedPoolLinksRequest {
    return QueryCFMMConcentratedPoolLinksRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCFMMConcentratedPoolLinksRequestProtoMsg): QueryCFMMConcentratedPoolLinksRequest {
    return QueryCFMMConcentratedPoolLinksRequest.decode(message.value);
  },
  toProto(message: QueryCFMMConcentratedPoolLinksRequest): Uint8Array {
    return QueryCFMMConcentratedPoolLinksRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCFMMConcentratedPoolLinksRequest): QueryCFMMConcentratedPoolLinksRequestProtoMsg {
    return {
      typeUrl: "/symphony.gamm.v1beta1.QueryCFMMConcentratedPoolLinksRequest",
      value: QueryCFMMConcentratedPoolLinksRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryCFMMConcentratedPoolLinksRequest.typeUrl, QueryCFMMConcentratedPoolLinksRequest);
function createBaseQueryCFMMConcentratedPoolLinksResponse(): QueryCFMMConcentratedPoolLinksResponse {
  return {
    migrationRecords: undefined
  };
}
export const QueryCFMMConcentratedPoolLinksResponse = {
  typeUrl: "/symphony.gamm.v1beta1.QueryCFMMConcentratedPoolLinksResponse",
  is(o: any): o is QueryCFMMConcentratedPoolLinksResponse {
    return o && o.$typeUrl === QueryCFMMConcentratedPoolLinksResponse.typeUrl;
  },
  isSDK(o: any): o is QueryCFMMConcentratedPoolLinksResponseSDKType {
    return o && o.$typeUrl === QueryCFMMConcentratedPoolLinksResponse.typeUrl;
  },
  isAmino(o: any): o is QueryCFMMConcentratedPoolLinksResponseAmino {
    return o && o.$typeUrl === QueryCFMMConcentratedPoolLinksResponse.typeUrl;
  },
  encode(message: QueryCFMMConcentratedPoolLinksResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.migrationRecords !== undefined) {
      MigrationRecords.encode(message.migrationRecords, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCFMMConcentratedPoolLinksResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCFMMConcentratedPoolLinksResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.migrationRecords = MigrationRecords.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryCFMMConcentratedPoolLinksResponse>): QueryCFMMConcentratedPoolLinksResponse {
    const message = createBaseQueryCFMMConcentratedPoolLinksResponse();
    message.migrationRecords = object.migrationRecords !== undefined && object.migrationRecords !== null ? MigrationRecords.fromPartial(object.migrationRecords) : undefined;
    return message;
  },
  fromAmino(object: QueryCFMMConcentratedPoolLinksResponseAmino): QueryCFMMConcentratedPoolLinksResponse {
    const message = createBaseQueryCFMMConcentratedPoolLinksResponse();
    if (object.migration_records !== undefined && object.migration_records !== null) {
      message.migrationRecords = MigrationRecords.fromAmino(object.migration_records);
    }
    return message;
  },
  toAmino(message: QueryCFMMConcentratedPoolLinksResponse): QueryCFMMConcentratedPoolLinksResponseAmino {
    const obj: any = {};
    obj.migration_records = message.migrationRecords ? MigrationRecords.toAmino(message.migrationRecords) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCFMMConcentratedPoolLinksResponseAminoMsg): QueryCFMMConcentratedPoolLinksResponse {
    return QueryCFMMConcentratedPoolLinksResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCFMMConcentratedPoolLinksResponseProtoMsg): QueryCFMMConcentratedPoolLinksResponse {
    return QueryCFMMConcentratedPoolLinksResponse.decode(message.value);
  },
  toProto(message: QueryCFMMConcentratedPoolLinksResponse): Uint8Array {
    return QueryCFMMConcentratedPoolLinksResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCFMMConcentratedPoolLinksResponse): QueryCFMMConcentratedPoolLinksResponseProtoMsg {
    return {
      typeUrl: "/symphony.gamm.v1beta1.QueryCFMMConcentratedPoolLinksResponse",
      value: QueryCFMMConcentratedPoolLinksResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryCFMMConcentratedPoolLinksResponse.typeUrl, QueryCFMMConcentratedPoolLinksResponse);