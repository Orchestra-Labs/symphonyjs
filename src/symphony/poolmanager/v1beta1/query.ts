//@ts-nocheck
import {
  SwapAmountInRoute,
  SwapAmountInRouteAmino,
  SwapAmountInRouteSDKType,
  SwapAmountOutRoute,
  SwapAmountOutRouteAmino,
  SwapAmountOutRouteSDKType,
} from './swap_route';
import {
  Coin,
  CoinAmino,
  CoinSDKType,
} from '../../../cosmos/base/v1beta1/coin';
import { Params, ParamsAmino, ParamsSDKType } from './genesis';
import {
  Any,
  AnyProtoMsg,
  AnyAmino,
  AnySDKType,
} from '../../../google/protobuf/any';
import {
  TakerFeeShareAgreement,
  TakerFeeShareAgreementAmino,
  TakerFeeShareAgreementSDKType,
  TakerFeeSkimAccumulator,
  TakerFeeSkimAccumulatorAmino,
  TakerFeeSkimAccumulatorSDKType,
  AlloyContractTakerFeeShareState,
  AlloyContractTakerFeeShareStateAmino,
  AlloyContractTakerFeeShareStateSDKType,
} from './taker_fee_share';
import { Pool as Pool1 } from '../../concentratedliquidity/v1beta1/pool';
import { PoolProtoMsg as Pool1ProtoMsg } from '../../concentratedliquidity/v1beta1/pool';
import { PoolSDKType as Pool1SDKType } from '../../concentratedliquidity/v1beta1/pool';
import {
  CosmWasmPool,
  CosmWasmPoolProtoMsg,
  CosmWasmPoolSDKType,
} from '../../cosmwasmpool/v1beta1/model/pool';
import { Pool as Pool2 } from '../../gamm/poolmodels/stableswap/v1beta1/stableswap_pool';
import { PoolProtoMsg as Pool2ProtoMsg } from '../../gamm/poolmodels/stableswap/v1beta1/stableswap_pool';
import { PoolSDKType as Pool2SDKType } from '../../gamm/poolmodels/stableswap/v1beta1/stableswap_pool';
import { Pool as Pool3 } from '../../gamm/v1beta1/balancerPool';
import { PoolProtoMsg as Pool3ProtoMsg } from '../../gamm/v1beta1/balancerPool';
import { PoolSDKType as Pool3SDKType } from '../../gamm/v1beta1/balancerPool';
import { BinaryReader, BinaryWriter } from '../../../binary';
import { GlobalDecoderRegistry } from '../../../registry';
import { Decimal } from '@cosmjs/math';
/**
 * =============================== Params
 * @name ParamsRequest
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.ParamsRequest
 */
export interface ParamsRequest {}
export interface ParamsRequestProtoMsg {
  typeUrl: '/symphony.poolmanager.v1beta1.ParamsRequest';
  value: Uint8Array;
}
/**
 * =============================== Params
 * @name ParamsRequestAmino
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.ParamsRequest
 */
export interface ParamsRequestAmino {}
export interface ParamsRequestAminoMsg {
  type: '/symphony.poolmanager.v1beta1.ParamsRequest';
  value: ParamsRequestAmino;
}
/**
 * =============================== Params
 * @name ParamsRequestSDKType
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.ParamsRequest
 */
export interface ParamsRequestSDKType {}
/**
 * @name ParamsResponse
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.ParamsResponse
 */
export interface ParamsResponse {
  params: Params;
}
export interface ParamsResponseProtoMsg {
  typeUrl: '/symphony.poolmanager.v1beta1.ParamsResponse';
  value: Uint8Array;
}
/**
 * @name ParamsResponseAmino
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.ParamsResponse
 */
export interface ParamsResponseAmino {
  params?: ParamsAmino;
}
export interface ParamsResponseAminoMsg {
  type: '/symphony.poolmanager.v1beta1.ParamsResponse';
  value: ParamsResponseAmino;
}
/**
 * @name ParamsResponseSDKType
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.ParamsResponse
 */
export interface ParamsResponseSDKType {
  params: ParamsSDKType;
}
/**
 * =============================== EstimateSwapExactAmountIn
 * @name EstimateSwapExactAmountInRequest
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.EstimateSwapExactAmountInRequest
 */
export interface EstimateSwapExactAmountInRequest {
  /**
   * DEPRECATED
   * @deprecated
   */
  sender?: string;
  /**
   * @deprecated
   */
  poolId?: bigint;
  tokenIn: string;
  routes: SwapAmountInRoute[];
}
export interface EstimateSwapExactAmountInRequestProtoMsg {
  typeUrl: '/symphony.poolmanager.v1beta1.EstimateSwapExactAmountInRequest';
  value: Uint8Array;
}
/**
 * =============================== EstimateSwapExactAmountIn
 * @name EstimateSwapExactAmountInRequestAmino
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.EstimateSwapExactAmountInRequest
 */
export interface EstimateSwapExactAmountInRequestAmino {
  /**
   * DEPRECATED
   * @deprecated
   */
  sender?: string;
  /**
   * @deprecated
   */
  pool_id?: string;
  token_in?: string;
  routes?: SwapAmountInRouteAmino[];
}
export interface EstimateSwapExactAmountInRequestAminoMsg {
  type: '/symphony.poolmanager.v1beta1.EstimateSwapExactAmountInRequest';
  value: EstimateSwapExactAmountInRequestAmino;
}
/**
 * =============================== EstimateSwapExactAmountIn
 * @name EstimateSwapExactAmountInRequestSDKType
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.EstimateSwapExactAmountInRequest
 */
export interface EstimateSwapExactAmountInRequestSDKType {
  /**
   * @deprecated
   */
  sender?: string;
  /**
   * @deprecated
   */
  pool_id?: bigint;
  token_in: string;
  routes: SwapAmountInRouteSDKType[];
}
/**
 * @name EstimateSwapExactAmountInWithPrimitiveTypesRequest
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.EstimateSwapExactAmountInWithPrimitiveTypesRequest
 */
export interface EstimateSwapExactAmountInWithPrimitiveTypesRequest {
  /**
   * @deprecated
   */
  poolId?: bigint;
  tokenIn: string;
  routesPoolId: bigint[];
  routesTokenOutDenom: string[];
}
export interface EstimateSwapExactAmountInWithPrimitiveTypesRequestProtoMsg {
  typeUrl: '/symphony.poolmanager.v1beta1.EstimateSwapExactAmountInWithPrimitiveTypesRequest';
  value: Uint8Array;
}
/**
 * @name EstimateSwapExactAmountInWithPrimitiveTypesRequestAmino
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.EstimateSwapExactAmountInWithPrimitiveTypesRequest
 */
export interface EstimateSwapExactAmountInWithPrimitiveTypesRequestAmino {
  /**
   * @deprecated
   */
  pool_id?: string;
  token_in?: string;
  routes_pool_id?: string[];
  routes_token_out_denom?: string[];
}
export interface EstimateSwapExactAmountInWithPrimitiveTypesRequestAminoMsg {
  type: '/symphony.poolmanager.v1beta1.EstimateSwapExactAmountInWithPrimitiveTypesRequest';
  value: EstimateSwapExactAmountInWithPrimitiveTypesRequestAmino;
}
/**
 * @name EstimateSwapExactAmountInWithPrimitiveTypesRequestSDKType
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.EstimateSwapExactAmountInWithPrimitiveTypesRequest
 */
export interface EstimateSwapExactAmountInWithPrimitiveTypesRequestSDKType {
  /**
   * @deprecated
   */
  pool_id?: bigint;
  token_in: string;
  routes_pool_id: bigint[];
  routes_token_out_denom: string[];
}
/**
 * @name EstimateSinglePoolSwapExactAmountInRequest
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.EstimateSinglePoolSwapExactAmountInRequest
 */
export interface EstimateSinglePoolSwapExactAmountInRequest {
  poolId: bigint;
  tokenIn: string;
  tokenOutDenom: string;
}
export interface EstimateSinglePoolSwapExactAmountInRequestProtoMsg {
  typeUrl: '/symphony.poolmanager.v1beta1.EstimateSinglePoolSwapExactAmountInRequest';
  value: Uint8Array;
}
/**
 * @name EstimateSinglePoolSwapExactAmountInRequestAmino
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.EstimateSinglePoolSwapExactAmountInRequest
 */
export interface EstimateSinglePoolSwapExactAmountInRequestAmino {
  pool_id?: string;
  token_in?: string;
  token_out_denom?: string;
}
export interface EstimateSinglePoolSwapExactAmountInRequestAminoMsg {
  type: '/symphony.poolmanager.v1beta1.EstimateSinglePoolSwapExactAmountInRequest';
  value: EstimateSinglePoolSwapExactAmountInRequestAmino;
}
/**
 * @name EstimateSinglePoolSwapExactAmountInRequestSDKType
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.EstimateSinglePoolSwapExactAmountInRequest
 */
export interface EstimateSinglePoolSwapExactAmountInRequestSDKType {
  pool_id: bigint;
  token_in: string;
  token_out_denom: string;
}
/**
 * @name EstimateSwapExactAmountInResponse
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.EstimateSwapExactAmountInResponse
 */
export interface EstimateSwapExactAmountInResponse {
  tokenOutAmount: string;
}
export interface EstimateSwapExactAmountInResponseProtoMsg {
  typeUrl: '/symphony.poolmanager.v1beta1.EstimateSwapExactAmountInResponse';
  value: Uint8Array;
}
/**
 * @name EstimateSwapExactAmountInResponseAmino
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.EstimateSwapExactAmountInResponse
 */
export interface EstimateSwapExactAmountInResponseAmino {
  token_out_amount?: string;
}
export interface EstimateSwapExactAmountInResponseAminoMsg {
  type: '/symphony.poolmanager.v1beta1.EstimateSwapExactAmountInResponse';
  value: EstimateSwapExactAmountInResponseAmino;
}
/**
 * @name EstimateSwapExactAmountInResponseSDKType
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.EstimateSwapExactAmountInResponse
 */
export interface EstimateSwapExactAmountInResponseSDKType {
  token_out_amount: string;
}
/**
 * =============================== EstimateSwapExactAmountOut
 * @name EstimateSwapExactAmountOutRequest
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.EstimateSwapExactAmountOutRequest
 */
export interface EstimateSwapExactAmountOutRequest {
  /**
   * DEPRECATED
   * @deprecated
   */
  sender?: string;
  /**
   * @deprecated
   */
  poolId?: bigint;
  routes: SwapAmountOutRoute[];
  tokenOut: string;
}
export interface EstimateSwapExactAmountOutRequestProtoMsg {
  typeUrl: '/symphony.poolmanager.v1beta1.EstimateSwapExactAmountOutRequest';
  value: Uint8Array;
}
/**
 * =============================== EstimateSwapExactAmountOut
 * @name EstimateSwapExactAmountOutRequestAmino
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.EstimateSwapExactAmountOutRequest
 */
export interface EstimateSwapExactAmountOutRequestAmino {
  /**
   * DEPRECATED
   * @deprecated
   */
  sender?: string;
  /**
   * @deprecated
   */
  pool_id?: string;
  routes?: SwapAmountOutRouteAmino[];
  token_out?: string;
}
export interface EstimateSwapExactAmountOutRequestAminoMsg {
  type: '/symphony.poolmanager.v1beta1.EstimateSwapExactAmountOutRequest';
  value: EstimateSwapExactAmountOutRequestAmino;
}
/**
 * =============================== EstimateSwapExactAmountOut
 * @name EstimateSwapExactAmountOutRequestSDKType
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.EstimateSwapExactAmountOutRequest
 */
export interface EstimateSwapExactAmountOutRequestSDKType {
  /**
   * @deprecated
   */
  sender?: string;
  /**
   * @deprecated
   */
  pool_id?: bigint;
  routes: SwapAmountOutRouteSDKType[];
  token_out: string;
}
/**
 * @name EstimateSwapExactAmountOutWithPrimitiveTypesRequest
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.EstimateSwapExactAmountOutWithPrimitiveTypesRequest
 */
export interface EstimateSwapExactAmountOutWithPrimitiveTypesRequest {
  /**
   * @deprecated
   */
  poolId?: bigint;
  routesPoolId: bigint[];
  routesTokenInDenom: string[];
  tokenOut: string;
}
export interface EstimateSwapExactAmountOutWithPrimitiveTypesRequestProtoMsg {
  typeUrl: '/symphony.poolmanager.v1beta1.EstimateSwapExactAmountOutWithPrimitiveTypesRequest';
  value: Uint8Array;
}
/**
 * @name EstimateSwapExactAmountOutWithPrimitiveTypesRequestAmino
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.EstimateSwapExactAmountOutWithPrimitiveTypesRequest
 */
export interface EstimateSwapExactAmountOutWithPrimitiveTypesRequestAmino {
  /**
   * @deprecated
   */
  pool_id?: string;
  routes_pool_id?: string[];
  routes_token_in_denom?: string[];
  token_out?: string;
}
export interface EstimateSwapExactAmountOutWithPrimitiveTypesRequestAminoMsg {
  type: '/symphony.poolmanager.v1beta1.EstimateSwapExactAmountOutWithPrimitiveTypesRequest';
  value: EstimateSwapExactAmountOutWithPrimitiveTypesRequestAmino;
}
/**
 * @name EstimateSwapExactAmountOutWithPrimitiveTypesRequestSDKType
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.EstimateSwapExactAmountOutWithPrimitiveTypesRequest
 */
export interface EstimateSwapExactAmountOutWithPrimitiveTypesRequestSDKType {
  /**
   * @deprecated
   */
  pool_id?: bigint;
  routes_pool_id: bigint[];
  routes_token_in_denom: string[];
  token_out: string;
}
/**
 * @name EstimateSinglePoolSwapExactAmountOutRequest
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.EstimateSinglePoolSwapExactAmountOutRequest
 */
export interface EstimateSinglePoolSwapExactAmountOutRequest {
  poolId: bigint;
  tokenInDenom: string;
  tokenOut: string;
}
export interface EstimateSinglePoolSwapExactAmountOutRequestProtoMsg {
  typeUrl: '/symphony.poolmanager.v1beta1.EstimateSinglePoolSwapExactAmountOutRequest';
  value: Uint8Array;
}
/**
 * @name EstimateSinglePoolSwapExactAmountOutRequestAmino
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.EstimateSinglePoolSwapExactAmountOutRequest
 */
export interface EstimateSinglePoolSwapExactAmountOutRequestAmino {
  pool_id?: string;
  token_in_denom?: string;
  token_out?: string;
}
export interface EstimateSinglePoolSwapExactAmountOutRequestAminoMsg {
  type: '/symphony.poolmanager.v1beta1.EstimateSinglePoolSwapExactAmountOutRequest';
  value: EstimateSinglePoolSwapExactAmountOutRequestAmino;
}
/**
 * @name EstimateSinglePoolSwapExactAmountOutRequestSDKType
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.EstimateSinglePoolSwapExactAmountOutRequest
 */
export interface EstimateSinglePoolSwapExactAmountOutRequestSDKType {
  pool_id: bigint;
  token_in_denom: string;
  token_out: string;
}
/**
 * @name EstimateSwapExactAmountOutResponse
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.EstimateSwapExactAmountOutResponse
 */
export interface EstimateSwapExactAmountOutResponse {
  tokenInAmount: string;
}
export interface EstimateSwapExactAmountOutResponseProtoMsg {
  typeUrl: '/symphony.poolmanager.v1beta1.EstimateSwapExactAmountOutResponse';
  value: Uint8Array;
}
/**
 * @name EstimateSwapExactAmountOutResponseAmino
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.EstimateSwapExactAmountOutResponse
 */
export interface EstimateSwapExactAmountOutResponseAmino {
  token_in_amount?: string;
}
export interface EstimateSwapExactAmountOutResponseAminoMsg {
  type: '/symphony.poolmanager.v1beta1.EstimateSwapExactAmountOutResponse';
  value: EstimateSwapExactAmountOutResponseAmino;
}
/**
 * @name EstimateSwapExactAmountOutResponseSDKType
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.EstimateSwapExactAmountOutResponse
 */
export interface EstimateSwapExactAmountOutResponseSDKType {
  token_in_amount: string;
}
/**
 * =============================== NumPools
 * @name NumPoolsRequest
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.NumPoolsRequest
 */
export interface NumPoolsRequest {}
export interface NumPoolsRequestProtoMsg {
  typeUrl: '/symphony.poolmanager.v1beta1.NumPoolsRequest';
  value: Uint8Array;
}
/**
 * =============================== NumPools
 * @name NumPoolsRequestAmino
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.NumPoolsRequest
 */
export interface NumPoolsRequestAmino {}
export interface NumPoolsRequestAminoMsg {
  type: '/symphony.poolmanager.v1beta1.NumPoolsRequest';
  value: NumPoolsRequestAmino;
}
/**
 * =============================== NumPools
 * @name NumPoolsRequestSDKType
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.NumPoolsRequest
 */
export interface NumPoolsRequestSDKType {}
/**
 * @name NumPoolsResponse
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.NumPoolsResponse
 */
export interface NumPoolsResponse {
  numPools: bigint;
}
export interface NumPoolsResponseProtoMsg {
  typeUrl: '/symphony.poolmanager.v1beta1.NumPoolsResponse';
  value: Uint8Array;
}
/**
 * @name NumPoolsResponseAmino
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.NumPoolsResponse
 */
export interface NumPoolsResponseAmino {
  num_pools?: string;
}
export interface NumPoolsResponseAminoMsg {
  type: '/symphony.poolmanager.v1beta1.NumPoolsResponse';
  value: NumPoolsResponseAmino;
}
/**
 * @name NumPoolsResponseSDKType
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.NumPoolsResponse
 */
export interface NumPoolsResponseSDKType {
  num_pools: bigint;
}
/**
 * =============================== Pool
 * @name PoolRequest
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.PoolRequest
 */
export interface PoolRequest {
  poolId: bigint;
}
export interface PoolRequestProtoMsg {
  typeUrl: '/symphony.poolmanager.v1beta1.PoolRequest';
  value: Uint8Array;
}
/**
 * =============================== Pool
 * @name PoolRequestAmino
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.PoolRequest
 */
export interface PoolRequestAmino {
  pool_id?: string;
}
export interface PoolRequestAminoMsg {
  type: '/symphony.poolmanager.v1beta1.PoolRequest';
  value: PoolRequestAmino;
}
/**
 * =============================== Pool
 * @name PoolRequestSDKType
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.PoolRequest
 */
export interface PoolRequestSDKType {
  pool_id: bigint;
}
/**
 * @name PoolResponse
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.PoolResponse
 */
export interface PoolResponse {
  pool?: Pool1 | CosmWasmPool | Pool2 | Pool3 | Any | undefined;
}
export interface PoolResponseProtoMsg {
  typeUrl: '/symphony.poolmanager.v1beta1.PoolResponse';
  value: Uint8Array;
}
export type PoolResponseEncoded = Omit<PoolResponse, 'pool'> & {
  pool?:
    | Pool1ProtoMsg
    | CosmWasmPoolProtoMsg
    | Pool2ProtoMsg
    | Pool3ProtoMsg
    | AnyProtoMsg
    | undefined;
};
/**
 * @name PoolResponseAmino
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.PoolResponse
 */
export interface PoolResponseAmino {
  pool?: AnyAmino;
}
export interface PoolResponseAminoMsg {
  type: '/symphony.poolmanager.v1beta1.PoolResponse';
  value: PoolResponseAmino;
}
/**
 * @name PoolResponseSDKType
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.PoolResponse
 */
export interface PoolResponseSDKType {
  pool?:
    | Pool1SDKType
    | CosmWasmPoolSDKType
    | Pool2SDKType
    | Pool3SDKType
    | AnySDKType
    | undefined;
}
/**
 * =============================== AllPools
 * @name AllPoolsRequest
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.AllPoolsRequest
 */
export interface AllPoolsRequest {}
export interface AllPoolsRequestProtoMsg {
  typeUrl: '/symphony.poolmanager.v1beta1.AllPoolsRequest';
  value: Uint8Array;
}
/**
 * =============================== AllPools
 * @name AllPoolsRequestAmino
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.AllPoolsRequest
 */
export interface AllPoolsRequestAmino {}
export interface AllPoolsRequestAminoMsg {
  type: '/symphony.poolmanager.v1beta1.AllPoolsRequest';
  value: AllPoolsRequestAmino;
}
/**
 * =============================== AllPools
 * @name AllPoolsRequestSDKType
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.AllPoolsRequest
 */
export interface AllPoolsRequestSDKType {}
/**
 * @name AllPoolsResponse
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.AllPoolsResponse
 */
export interface AllPoolsResponse {
  pools: (Pool1 | CosmWasmPool | Pool2 | Pool3 | Any)[] | Any[];
}
export interface AllPoolsResponseProtoMsg {
  typeUrl: '/symphony.poolmanager.v1beta1.AllPoolsResponse';
  value: Uint8Array;
}
export type AllPoolsResponseEncoded = Omit<AllPoolsResponse, 'pools'> & {
  pools: (
    | Pool1ProtoMsg
    | CosmWasmPoolProtoMsg
    | Pool2ProtoMsg
    | Pool3ProtoMsg
    | AnyProtoMsg
  )[];
};
/**
 * @name AllPoolsResponseAmino
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.AllPoolsResponse
 */
export interface AllPoolsResponseAmino {
  pools?: AnyAmino[];
}
export interface AllPoolsResponseAminoMsg {
  type: '/symphony.poolmanager.v1beta1.AllPoolsResponse';
  value: AllPoolsResponseAmino;
}
/**
 * @name AllPoolsResponseSDKType
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.AllPoolsResponse
 */
export interface AllPoolsResponseSDKType {
  pools: (
    | Pool1SDKType
    | CosmWasmPoolSDKType
    | Pool2SDKType
    | Pool3SDKType
    | AnySDKType
  )[];
}
/**
 * =======================================================
 * ListPoolsByDenomRequest
 * @name ListPoolsByDenomRequest
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.ListPoolsByDenomRequest
 */
export interface ListPoolsByDenomRequest {
  denom: string;
}
export interface ListPoolsByDenomRequestProtoMsg {
  typeUrl: '/symphony.poolmanager.v1beta1.ListPoolsByDenomRequest';
  value: Uint8Array;
}
/**
 * =======================================================
 * ListPoolsByDenomRequest
 * @name ListPoolsByDenomRequestAmino
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.ListPoolsByDenomRequest
 */
export interface ListPoolsByDenomRequestAmino {
  denom?: string;
}
export interface ListPoolsByDenomRequestAminoMsg {
  type: '/symphony.poolmanager.v1beta1.ListPoolsByDenomRequest';
  value: ListPoolsByDenomRequestAmino;
}
/**
 * =======================================================
 * ListPoolsByDenomRequest
 * @name ListPoolsByDenomRequestSDKType
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.ListPoolsByDenomRequest
 */
export interface ListPoolsByDenomRequestSDKType {
  denom: string;
}
/**
 * @name ListPoolsByDenomResponse
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.ListPoolsByDenomResponse
 */
export interface ListPoolsByDenomResponse {
  pools: (Pool1 | CosmWasmPool | Pool2 | Pool3 | Any)[] | Any[];
}
export interface ListPoolsByDenomResponseProtoMsg {
  typeUrl: '/symphony.poolmanager.v1beta1.ListPoolsByDenomResponse';
  value: Uint8Array;
}
export type ListPoolsByDenomResponseEncoded = Omit<
  ListPoolsByDenomResponse,
  'pools'
> & {
  pools: (
    | Pool1ProtoMsg
    | CosmWasmPoolProtoMsg
    | Pool2ProtoMsg
    | Pool3ProtoMsg
    | AnyProtoMsg
  )[];
};
/**
 * @name ListPoolsByDenomResponseAmino
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.ListPoolsByDenomResponse
 */
export interface ListPoolsByDenomResponseAmino {
  pools?: AnyAmino[];
}
export interface ListPoolsByDenomResponseAminoMsg {
  type: '/symphony.poolmanager.v1beta1.ListPoolsByDenomResponse';
  value: ListPoolsByDenomResponseAmino;
}
/**
 * @name ListPoolsByDenomResponseSDKType
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.ListPoolsByDenomResponse
 */
export interface ListPoolsByDenomResponseSDKType {
  pools: (
    | Pool1SDKType
    | CosmWasmPoolSDKType
    | Pool2SDKType
    | Pool3SDKType
    | AnySDKType
  )[];
}
/**
 * ==========================================================
 * SpotPriceRequest defines the gRPC request structure for a SpotPrice
 * query.
 * @name SpotPriceRequest
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.SpotPriceRequest
 */
export interface SpotPriceRequest {
  poolId: bigint;
  baseAssetDenom: string;
  quoteAssetDenom: string;
}
export interface SpotPriceRequestProtoMsg {
  typeUrl: '/symphony.poolmanager.v1beta1.SpotPriceRequest';
  value: Uint8Array;
}
/**
 * ==========================================================
 * SpotPriceRequest defines the gRPC request structure for a SpotPrice
 * query.
 * @name SpotPriceRequestAmino
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.SpotPriceRequest
 */
export interface SpotPriceRequestAmino {
  pool_id?: string;
  base_asset_denom?: string;
  quote_asset_denom?: string;
}
export interface SpotPriceRequestAminoMsg {
  type: '/symphony.poolmanager.v1beta1.SpotPriceRequest';
  value: SpotPriceRequestAmino;
}
/**
 * ==========================================================
 * SpotPriceRequest defines the gRPC request structure for a SpotPrice
 * query.
 * @name SpotPriceRequestSDKType
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.SpotPriceRequest
 */
export interface SpotPriceRequestSDKType {
  pool_id: bigint;
  base_asset_denom: string;
  quote_asset_denom: string;
}
/**
 * SpotPriceResponse defines the gRPC response structure for a SpotPrice
 * query.
 * @name SpotPriceResponse
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.SpotPriceResponse
 */
export interface SpotPriceResponse {
  /**
   * String of the Dec. Ex) 10.203uatom
   */
  spotPrice: string;
}
export interface SpotPriceResponseProtoMsg {
  typeUrl: '/symphony.poolmanager.v1beta1.SpotPriceResponse';
  value: Uint8Array;
}
/**
 * SpotPriceResponse defines the gRPC response structure for a SpotPrice
 * query.
 * @name SpotPriceResponseAmino
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.SpotPriceResponse
 */
export interface SpotPriceResponseAmino {
  /**
   * String of the Dec. Ex) 10.203uatom
   */
  spot_price?: string;
}
export interface SpotPriceResponseAminoMsg {
  type: '/symphony.poolmanager.v1beta1.SpotPriceResponse';
  value: SpotPriceResponseAmino;
}
/**
 * SpotPriceResponse defines the gRPC response structure for a SpotPrice
 * query.
 * @name SpotPriceResponseSDKType
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.SpotPriceResponse
 */
export interface SpotPriceResponseSDKType {
  spot_price: string;
}
/**
 * =============================== TotalPoolLiquidity
 * @name TotalPoolLiquidityRequest
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.TotalPoolLiquidityRequest
 */
export interface TotalPoolLiquidityRequest {
  poolId: bigint;
}
export interface TotalPoolLiquidityRequestProtoMsg {
  typeUrl: '/symphony.poolmanager.v1beta1.TotalPoolLiquidityRequest';
  value: Uint8Array;
}
/**
 * =============================== TotalPoolLiquidity
 * @name TotalPoolLiquidityRequestAmino
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.TotalPoolLiquidityRequest
 */
export interface TotalPoolLiquidityRequestAmino {
  pool_id?: string;
}
export interface TotalPoolLiquidityRequestAminoMsg {
  type: '/symphony.poolmanager.v1beta1.TotalPoolLiquidityRequest';
  value: TotalPoolLiquidityRequestAmino;
}
/**
 * =============================== TotalPoolLiquidity
 * @name TotalPoolLiquidityRequestSDKType
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.TotalPoolLiquidityRequest
 */
export interface TotalPoolLiquidityRequestSDKType {
  pool_id: bigint;
}
/**
 * @name TotalPoolLiquidityResponse
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.TotalPoolLiquidityResponse
 */
export interface TotalPoolLiquidityResponse {
  liquidity: Coin[];
}
export interface TotalPoolLiquidityResponseProtoMsg {
  typeUrl: '/symphony.poolmanager.v1beta1.TotalPoolLiquidityResponse';
  value: Uint8Array;
}
/**
 * @name TotalPoolLiquidityResponseAmino
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.TotalPoolLiquidityResponse
 */
export interface TotalPoolLiquidityResponseAmino {
  liquidity?: CoinAmino[];
}
export interface TotalPoolLiquidityResponseAminoMsg {
  type: '/symphony.poolmanager.v1beta1.TotalPoolLiquidityResponse';
  value: TotalPoolLiquidityResponseAmino;
}
/**
 * @name TotalPoolLiquidityResponseSDKType
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.TotalPoolLiquidityResponse
 */
export interface TotalPoolLiquidityResponseSDKType {
  liquidity: CoinSDKType[];
}
/**
 * =============================== TotalLiquidity
 * @name TotalLiquidityRequest
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.TotalLiquidityRequest
 */
export interface TotalLiquidityRequest {}
export interface TotalLiquidityRequestProtoMsg {
  typeUrl: '/symphony.poolmanager.v1beta1.TotalLiquidityRequest';
  value: Uint8Array;
}
/**
 * =============================== TotalLiquidity
 * @name TotalLiquidityRequestAmino
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.TotalLiquidityRequest
 */
export interface TotalLiquidityRequestAmino {}
export interface TotalLiquidityRequestAminoMsg {
  type: '/symphony.poolmanager.v1beta1.TotalLiquidityRequest';
  value: TotalLiquidityRequestAmino;
}
/**
 * =============================== TotalLiquidity
 * @name TotalLiquidityRequestSDKType
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.TotalLiquidityRequest
 */
export interface TotalLiquidityRequestSDKType {}
/**
 * @name TotalLiquidityResponse
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.TotalLiquidityResponse
 */
export interface TotalLiquidityResponse {
  liquidity: Coin[];
}
export interface TotalLiquidityResponseProtoMsg {
  typeUrl: '/symphony.poolmanager.v1beta1.TotalLiquidityResponse';
  value: Uint8Array;
}
/**
 * @name TotalLiquidityResponseAmino
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.TotalLiquidityResponse
 */
export interface TotalLiquidityResponseAmino {
  liquidity?: CoinAmino[];
}
export interface TotalLiquidityResponseAminoMsg {
  type: '/symphony.poolmanager.v1beta1.TotalLiquidityResponse';
  value: TotalLiquidityResponseAmino;
}
/**
 * @name TotalLiquidityResponseSDKType
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.TotalLiquidityResponse
 */
export interface TotalLiquidityResponseSDKType {
  liquidity: CoinSDKType[];
}
/**
 * =============================== TotalVolumeForPool
 * @name TotalVolumeForPoolRequest
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.TotalVolumeForPoolRequest
 */
export interface TotalVolumeForPoolRequest {
  poolId: bigint;
}
export interface TotalVolumeForPoolRequestProtoMsg {
  typeUrl: '/symphony.poolmanager.v1beta1.TotalVolumeForPoolRequest';
  value: Uint8Array;
}
/**
 * =============================== TotalVolumeForPool
 * @name TotalVolumeForPoolRequestAmino
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.TotalVolumeForPoolRequest
 */
export interface TotalVolumeForPoolRequestAmino {
  pool_id?: string;
}
export interface TotalVolumeForPoolRequestAminoMsg {
  type: '/symphony.poolmanager.v1beta1.TotalVolumeForPoolRequest';
  value: TotalVolumeForPoolRequestAmino;
}
/**
 * =============================== TotalVolumeForPool
 * @name TotalVolumeForPoolRequestSDKType
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.TotalVolumeForPoolRequest
 */
export interface TotalVolumeForPoolRequestSDKType {
  pool_id: bigint;
}
/**
 * @name TotalVolumeForPoolResponse
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.TotalVolumeForPoolResponse
 */
export interface TotalVolumeForPoolResponse {
  volume: Coin[];
}
export interface TotalVolumeForPoolResponseProtoMsg {
  typeUrl: '/symphony.poolmanager.v1beta1.TotalVolumeForPoolResponse';
  value: Uint8Array;
}
/**
 * @name TotalVolumeForPoolResponseAmino
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.TotalVolumeForPoolResponse
 */
export interface TotalVolumeForPoolResponseAmino {
  volume?: CoinAmino[];
}
export interface TotalVolumeForPoolResponseAminoMsg {
  type: '/symphony.poolmanager.v1beta1.TotalVolumeForPoolResponse';
  value: TotalVolumeForPoolResponseAmino;
}
/**
 * @name TotalVolumeForPoolResponseSDKType
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.TotalVolumeForPoolResponse
 */
export interface TotalVolumeForPoolResponseSDKType {
  volume: CoinSDKType[];
}
/**
 * =============================== TradingPairTakerFee
 * @name TradingPairTakerFeeRequest
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.TradingPairTakerFeeRequest
 */
export interface TradingPairTakerFeeRequest {
  denom0: string;
  denom1: string;
}
export interface TradingPairTakerFeeRequestProtoMsg {
  typeUrl: '/symphony.poolmanager.v1beta1.TradingPairTakerFeeRequest';
  value: Uint8Array;
}
/**
 * =============================== TradingPairTakerFee
 * @name TradingPairTakerFeeRequestAmino
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.TradingPairTakerFeeRequest
 */
export interface TradingPairTakerFeeRequestAmino {
  denom_0?: string;
  denom_1?: string;
}
export interface TradingPairTakerFeeRequestAminoMsg {
  type: '/symphony.poolmanager.v1beta1.TradingPairTakerFeeRequest';
  value: TradingPairTakerFeeRequestAmino;
}
/**
 * =============================== TradingPairTakerFee
 * @name TradingPairTakerFeeRequestSDKType
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.TradingPairTakerFeeRequest
 */
export interface TradingPairTakerFeeRequestSDKType {
  denom_0: string;
  denom_1: string;
}
/**
 * @name TradingPairTakerFeeResponse
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.TradingPairTakerFeeResponse
 */
export interface TradingPairTakerFeeResponse {
  takerFee: string;
}
export interface TradingPairTakerFeeResponseProtoMsg {
  typeUrl: '/symphony.poolmanager.v1beta1.TradingPairTakerFeeResponse';
  value: Uint8Array;
}
/**
 * @name TradingPairTakerFeeResponseAmino
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.TradingPairTakerFeeResponse
 */
export interface TradingPairTakerFeeResponseAmino {
  taker_fee?: string;
}
export interface TradingPairTakerFeeResponseAminoMsg {
  type: '/symphony.poolmanager.v1beta1.TradingPairTakerFeeResponse';
  value: TradingPairTakerFeeResponseAmino;
}
/**
 * @name TradingPairTakerFeeResponseSDKType
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.TradingPairTakerFeeResponse
 */
export interface TradingPairTakerFeeResponseSDKType {
  taker_fee: string;
}
/**
 * EstimateTradeBasedOnPriceImpactRequest represents a request to estimate a
 * trade for Balancer/StableSwap/Concentrated liquidity pool types based on the
 * given parameters.
 * @name EstimateTradeBasedOnPriceImpactRequest
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.EstimateTradeBasedOnPriceImpactRequest
 */
export interface EstimateTradeBasedOnPriceImpactRequest {
  /**
   * from_coin is the total amount of tokens that the user wants to sell.
   */
  fromCoin: Coin;
  /**
   * to_coin_denom is the denom identifier of the token that the user wants to
   * buy.
   */
  toCoinDenom: string;
  /**
   * pool_id is the identifier of the liquidity pool that the trade will occur
   * on.
   */
  poolId: bigint;
  /**
   * max_price_impact is the maximum percentage that the user is willing
   * to affect the price of the liquidity pool.
   */
  maxPriceImpact: string;
  /**
   * external_price is an optional external price that the user can enter.
   * It adjusts the MaxPriceImpact as the SpotPrice of a pool can be changed at
   * any time.
   */
  externalPrice: string;
}
export interface EstimateTradeBasedOnPriceImpactRequestProtoMsg {
  typeUrl: '/symphony.poolmanager.v1beta1.EstimateTradeBasedOnPriceImpactRequest';
  value: Uint8Array;
}
/**
 * EstimateTradeBasedOnPriceImpactRequest represents a request to estimate a
 * trade for Balancer/StableSwap/Concentrated liquidity pool types based on the
 * given parameters.
 * @name EstimateTradeBasedOnPriceImpactRequestAmino
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.EstimateTradeBasedOnPriceImpactRequest
 */
export interface EstimateTradeBasedOnPriceImpactRequestAmino {
  /**
   * from_coin is the total amount of tokens that the user wants to sell.
   */
  from_coin?: CoinAmino;
  /**
   * to_coin_denom is the denom identifier of the token that the user wants to
   * buy.
   */
  to_coin_denom?: string;
  /**
   * pool_id is the identifier of the liquidity pool that the trade will occur
   * on.
   */
  pool_id?: string;
  /**
   * max_price_impact is the maximum percentage that the user is willing
   * to affect the price of the liquidity pool.
   */
  max_price_impact?: string;
  /**
   * external_price is an optional external price that the user can enter.
   * It adjusts the MaxPriceImpact as the SpotPrice of a pool can be changed at
   * any time.
   */
  external_price?: string;
}
export interface EstimateTradeBasedOnPriceImpactRequestAminoMsg {
  type: '/symphony.poolmanager.v1beta1.EstimateTradeBasedOnPriceImpactRequest';
  value: EstimateTradeBasedOnPriceImpactRequestAmino;
}
/**
 * EstimateTradeBasedOnPriceImpactRequest represents a request to estimate a
 * trade for Balancer/StableSwap/Concentrated liquidity pool types based on the
 * given parameters.
 * @name EstimateTradeBasedOnPriceImpactRequestSDKType
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.EstimateTradeBasedOnPriceImpactRequest
 */
export interface EstimateTradeBasedOnPriceImpactRequestSDKType {
  from_coin: CoinSDKType;
  to_coin_denom: string;
  pool_id: bigint;
  max_price_impact: string;
  external_price: string;
}
/**
 * EstimateTradeBasedOnPriceImpactResponse represents the response data
 * for an estimated trade based on price impact. If a trade fails to be
 * estimated the response would be 0,0 for input_coin and output_coin and will
 * not error.
 * @name EstimateTradeBasedOnPriceImpactResponse
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.EstimateTradeBasedOnPriceImpactResponse
 */
export interface EstimateTradeBasedOnPriceImpactResponse {
  /**
   * input_coin is the actual input amount that would be tradeable
   * under the specified price impact.
   */
  inputCoin: Coin;
  /**
   * output_coin is the amount of tokens of the ToCoinDenom type
   * that will be received for the actual InputCoin trade.
   */
  outputCoin: Coin;
}
export interface EstimateTradeBasedOnPriceImpactResponseProtoMsg {
  typeUrl: '/symphony.poolmanager.v1beta1.EstimateTradeBasedOnPriceImpactResponse';
  value: Uint8Array;
}
/**
 * EstimateTradeBasedOnPriceImpactResponse represents the response data
 * for an estimated trade based on price impact. If a trade fails to be
 * estimated the response would be 0,0 for input_coin and output_coin and will
 * not error.
 * @name EstimateTradeBasedOnPriceImpactResponseAmino
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.EstimateTradeBasedOnPriceImpactResponse
 */
export interface EstimateTradeBasedOnPriceImpactResponseAmino {
  /**
   * input_coin is the actual input amount that would be tradeable
   * under the specified price impact.
   */
  input_coin?: CoinAmino;
  /**
   * output_coin is the amount of tokens of the ToCoinDenom type
   * that will be received for the actual InputCoin trade.
   */
  output_coin?: CoinAmino;
}
export interface EstimateTradeBasedOnPriceImpactResponseAminoMsg {
  type: '/symphony.poolmanager.v1beta1.EstimateTradeBasedOnPriceImpactResponse';
  value: EstimateTradeBasedOnPriceImpactResponseAmino;
}
/**
 * EstimateTradeBasedOnPriceImpactResponse represents the response data
 * for an estimated trade based on price impact. If a trade fails to be
 * estimated the response would be 0,0 for input_coin and output_coin and will
 * not error.
 * @name EstimateTradeBasedOnPriceImpactResponseSDKType
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.EstimateTradeBasedOnPriceImpactResponse
 */
export interface EstimateTradeBasedOnPriceImpactResponseSDKType {
  input_coin: CoinSDKType;
  output_coin: CoinSDKType;
}
/**
 * @name AllTakerFeeShareAgreementsRequest
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.AllTakerFeeShareAgreementsRequest
 */
export interface AllTakerFeeShareAgreementsRequest {}
export interface AllTakerFeeShareAgreementsRequestProtoMsg {
  typeUrl: '/symphony.poolmanager.v1beta1.AllTakerFeeShareAgreementsRequest';
  value: Uint8Array;
}
/**
 * @name AllTakerFeeShareAgreementsRequestAmino
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.AllTakerFeeShareAgreementsRequest
 */
export interface AllTakerFeeShareAgreementsRequestAmino {}
export interface AllTakerFeeShareAgreementsRequestAminoMsg {
  type: '/symphony.poolmanager.v1beta1.AllTakerFeeShareAgreementsRequest';
  value: AllTakerFeeShareAgreementsRequestAmino;
}
/**
 * @name AllTakerFeeShareAgreementsRequestSDKType
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.AllTakerFeeShareAgreementsRequest
 */
export interface AllTakerFeeShareAgreementsRequestSDKType {}
/**
 * @name AllTakerFeeShareAgreementsResponse
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.AllTakerFeeShareAgreementsResponse
 */
export interface AllTakerFeeShareAgreementsResponse {
  takerFeeShareAgreements: TakerFeeShareAgreement[];
}
export interface AllTakerFeeShareAgreementsResponseProtoMsg {
  typeUrl: '/symphony.poolmanager.v1beta1.AllTakerFeeShareAgreementsResponse';
  value: Uint8Array;
}
/**
 * @name AllTakerFeeShareAgreementsResponseAmino
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.AllTakerFeeShareAgreementsResponse
 */
export interface AllTakerFeeShareAgreementsResponseAmino {
  taker_fee_share_agreements?: TakerFeeShareAgreementAmino[];
}
export interface AllTakerFeeShareAgreementsResponseAminoMsg {
  type: '/symphony.poolmanager.v1beta1.AllTakerFeeShareAgreementsResponse';
  value: AllTakerFeeShareAgreementsResponseAmino;
}
/**
 * @name AllTakerFeeShareAgreementsResponseSDKType
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.AllTakerFeeShareAgreementsResponse
 */
export interface AllTakerFeeShareAgreementsResponseSDKType {
  taker_fee_share_agreements: TakerFeeShareAgreementSDKType[];
}
/**
 * @name TakerFeeShareAgreementFromDenomRequest
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.TakerFeeShareAgreementFromDenomRequest
 */
export interface TakerFeeShareAgreementFromDenomRequest {
  denom: string;
}
export interface TakerFeeShareAgreementFromDenomRequestProtoMsg {
  typeUrl: '/symphony.poolmanager.v1beta1.TakerFeeShareAgreementFromDenomRequest';
  value: Uint8Array;
}
/**
 * @name TakerFeeShareAgreementFromDenomRequestAmino
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.TakerFeeShareAgreementFromDenomRequest
 */
export interface TakerFeeShareAgreementFromDenomRequestAmino {
  denom?: string;
}
export interface TakerFeeShareAgreementFromDenomRequestAminoMsg {
  type: '/symphony.poolmanager.v1beta1.TakerFeeShareAgreementFromDenomRequest';
  value: TakerFeeShareAgreementFromDenomRequestAmino;
}
/**
 * @name TakerFeeShareAgreementFromDenomRequestSDKType
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.TakerFeeShareAgreementFromDenomRequest
 */
export interface TakerFeeShareAgreementFromDenomRequestSDKType {
  denom: string;
}
/**
 * @name TakerFeeShareAgreementFromDenomResponse
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.TakerFeeShareAgreementFromDenomResponse
 */
export interface TakerFeeShareAgreementFromDenomResponse {
  takerFeeShareAgreement: TakerFeeShareAgreement;
}
export interface TakerFeeShareAgreementFromDenomResponseProtoMsg {
  typeUrl: '/symphony.poolmanager.v1beta1.TakerFeeShareAgreementFromDenomResponse';
  value: Uint8Array;
}
/**
 * @name TakerFeeShareAgreementFromDenomResponseAmino
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.TakerFeeShareAgreementFromDenomResponse
 */
export interface TakerFeeShareAgreementFromDenomResponseAmino {
  taker_fee_share_agreement?: TakerFeeShareAgreementAmino;
}
export interface TakerFeeShareAgreementFromDenomResponseAminoMsg {
  type: '/symphony.poolmanager.v1beta1.TakerFeeShareAgreementFromDenomResponse';
  value: TakerFeeShareAgreementFromDenomResponseAmino;
}
/**
 * @name TakerFeeShareAgreementFromDenomResponseSDKType
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.TakerFeeShareAgreementFromDenomResponse
 */
export interface TakerFeeShareAgreementFromDenomResponseSDKType {
  taker_fee_share_agreement: TakerFeeShareAgreementSDKType;
}
/**
 * @name TakerFeeShareDenomsToAccruedValueRequest
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.TakerFeeShareDenomsToAccruedValueRequest
 */
export interface TakerFeeShareDenomsToAccruedValueRequest {
  denom: string;
  takerFeeDenom: string;
}
export interface TakerFeeShareDenomsToAccruedValueRequestProtoMsg {
  typeUrl: '/symphony.poolmanager.v1beta1.TakerFeeShareDenomsToAccruedValueRequest';
  value: Uint8Array;
}
/**
 * @name TakerFeeShareDenomsToAccruedValueRequestAmino
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.TakerFeeShareDenomsToAccruedValueRequest
 */
export interface TakerFeeShareDenomsToAccruedValueRequestAmino {
  denom?: string;
  takerFeeDenom?: string;
}
export interface TakerFeeShareDenomsToAccruedValueRequestAminoMsg {
  type: '/symphony.poolmanager.v1beta1.TakerFeeShareDenomsToAccruedValueRequest';
  value: TakerFeeShareDenomsToAccruedValueRequestAmino;
}
/**
 * @name TakerFeeShareDenomsToAccruedValueRequestSDKType
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.TakerFeeShareDenomsToAccruedValueRequest
 */
export interface TakerFeeShareDenomsToAccruedValueRequestSDKType {
  denom: string;
  takerFeeDenom: string;
}
/**
 * @name TakerFeeShareDenomsToAccruedValueResponse
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.TakerFeeShareDenomsToAccruedValueResponse
 */
export interface TakerFeeShareDenomsToAccruedValueResponse {
  amount: string;
}
export interface TakerFeeShareDenomsToAccruedValueResponseProtoMsg {
  typeUrl: '/symphony.poolmanager.v1beta1.TakerFeeShareDenomsToAccruedValueResponse';
  value: Uint8Array;
}
/**
 * @name TakerFeeShareDenomsToAccruedValueResponseAmino
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.TakerFeeShareDenomsToAccruedValueResponse
 */
export interface TakerFeeShareDenomsToAccruedValueResponseAmino {
  amount?: string;
}
export interface TakerFeeShareDenomsToAccruedValueResponseAminoMsg {
  type: '/symphony.poolmanager.v1beta1.TakerFeeShareDenomsToAccruedValueResponse';
  value: TakerFeeShareDenomsToAccruedValueResponseAmino;
}
/**
 * @name TakerFeeShareDenomsToAccruedValueResponseSDKType
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.TakerFeeShareDenomsToAccruedValueResponse
 */
export interface TakerFeeShareDenomsToAccruedValueResponseSDKType {
  amount: string;
}
/**
 * @name AllTakerFeeShareAccumulatorsRequest
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.AllTakerFeeShareAccumulatorsRequest
 */
export interface AllTakerFeeShareAccumulatorsRequest {}
export interface AllTakerFeeShareAccumulatorsRequestProtoMsg {
  typeUrl: '/symphony.poolmanager.v1beta1.AllTakerFeeShareAccumulatorsRequest';
  value: Uint8Array;
}
/**
 * @name AllTakerFeeShareAccumulatorsRequestAmino
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.AllTakerFeeShareAccumulatorsRequest
 */
export interface AllTakerFeeShareAccumulatorsRequestAmino {}
export interface AllTakerFeeShareAccumulatorsRequestAminoMsg {
  type: '/symphony.poolmanager.v1beta1.AllTakerFeeShareAccumulatorsRequest';
  value: AllTakerFeeShareAccumulatorsRequestAmino;
}
/**
 * @name AllTakerFeeShareAccumulatorsRequestSDKType
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.AllTakerFeeShareAccumulatorsRequest
 */
export interface AllTakerFeeShareAccumulatorsRequestSDKType {}
/**
 * @name AllTakerFeeShareAccumulatorsResponse
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.AllTakerFeeShareAccumulatorsResponse
 */
export interface AllTakerFeeShareAccumulatorsResponse {
  takerFeeSkimAccumulators: TakerFeeSkimAccumulator[];
}
export interface AllTakerFeeShareAccumulatorsResponseProtoMsg {
  typeUrl: '/symphony.poolmanager.v1beta1.AllTakerFeeShareAccumulatorsResponse';
  value: Uint8Array;
}
/**
 * @name AllTakerFeeShareAccumulatorsResponseAmino
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.AllTakerFeeShareAccumulatorsResponse
 */
export interface AllTakerFeeShareAccumulatorsResponseAmino {
  taker_fee_skim_accumulators?: TakerFeeSkimAccumulatorAmino[];
}
export interface AllTakerFeeShareAccumulatorsResponseAminoMsg {
  type: '/symphony.poolmanager.v1beta1.AllTakerFeeShareAccumulatorsResponse';
  value: AllTakerFeeShareAccumulatorsResponseAmino;
}
/**
 * @name AllTakerFeeShareAccumulatorsResponseSDKType
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.AllTakerFeeShareAccumulatorsResponse
 */
export interface AllTakerFeeShareAccumulatorsResponseSDKType {
  taker_fee_skim_accumulators: TakerFeeSkimAccumulatorSDKType[];
}
/**
 * @name RegisteredAlloyedPoolFromDenomRequest
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.RegisteredAlloyedPoolFromDenomRequest
 */
export interface RegisteredAlloyedPoolFromDenomRequest {
  denom: string;
}
export interface RegisteredAlloyedPoolFromDenomRequestProtoMsg {
  typeUrl: '/symphony.poolmanager.v1beta1.RegisteredAlloyedPoolFromDenomRequest';
  value: Uint8Array;
}
/**
 * @name RegisteredAlloyedPoolFromDenomRequestAmino
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.RegisteredAlloyedPoolFromDenomRequest
 */
export interface RegisteredAlloyedPoolFromDenomRequestAmino {
  denom?: string;
}
export interface RegisteredAlloyedPoolFromDenomRequestAminoMsg {
  type: '/symphony.poolmanager.v1beta1.RegisteredAlloyedPoolFromDenomRequest';
  value: RegisteredAlloyedPoolFromDenomRequestAmino;
}
/**
 * @name RegisteredAlloyedPoolFromDenomRequestSDKType
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.RegisteredAlloyedPoolFromDenomRequest
 */
export interface RegisteredAlloyedPoolFromDenomRequestSDKType {
  denom: string;
}
/**
 * @name RegisteredAlloyedPoolFromDenomResponse
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.RegisteredAlloyedPoolFromDenomResponse
 */
export interface RegisteredAlloyedPoolFromDenomResponse {
  contractState: AlloyContractTakerFeeShareState;
}
export interface RegisteredAlloyedPoolFromDenomResponseProtoMsg {
  typeUrl: '/symphony.poolmanager.v1beta1.RegisteredAlloyedPoolFromDenomResponse';
  value: Uint8Array;
}
/**
 * @name RegisteredAlloyedPoolFromDenomResponseAmino
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.RegisteredAlloyedPoolFromDenomResponse
 */
export interface RegisteredAlloyedPoolFromDenomResponseAmino {
  contract_state?: AlloyContractTakerFeeShareStateAmino;
}
export interface RegisteredAlloyedPoolFromDenomResponseAminoMsg {
  type: '/symphony.poolmanager.v1beta1.RegisteredAlloyedPoolFromDenomResponse';
  value: RegisteredAlloyedPoolFromDenomResponseAmino;
}
/**
 * @name RegisteredAlloyedPoolFromDenomResponseSDKType
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.RegisteredAlloyedPoolFromDenomResponse
 */
export interface RegisteredAlloyedPoolFromDenomResponseSDKType {
  contract_state: AlloyContractTakerFeeShareStateSDKType;
}
/**
 * @name RegisteredAlloyedPoolFromPoolIdRequest
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.RegisteredAlloyedPoolFromPoolIdRequest
 */
export interface RegisteredAlloyedPoolFromPoolIdRequest {
  poolId: bigint;
}
export interface RegisteredAlloyedPoolFromPoolIdRequestProtoMsg {
  typeUrl: '/symphony.poolmanager.v1beta1.RegisteredAlloyedPoolFromPoolIdRequest';
  value: Uint8Array;
}
/**
 * @name RegisteredAlloyedPoolFromPoolIdRequestAmino
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.RegisteredAlloyedPoolFromPoolIdRequest
 */
export interface RegisteredAlloyedPoolFromPoolIdRequestAmino {
  pool_id?: string;
}
export interface RegisteredAlloyedPoolFromPoolIdRequestAminoMsg {
  type: '/symphony.poolmanager.v1beta1.RegisteredAlloyedPoolFromPoolIdRequest';
  value: RegisteredAlloyedPoolFromPoolIdRequestAmino;
}
/**
 * @name RegisteredAlloyedPoolFromPoolIdRequestSDKType
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.RegisteredAlloyedPoolFromPoolIdRequest
 */
export interface RegisteredAlloyedPoolFromPoolIdRequestSDKType {
  pool_id: bigint;
}
/**
 * @name RegisteredAlloyedPoolFromPoolIdResponse
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.RegisteredAlloyedPoolFromPoolIdResponse
 */
export interface RegisteredAlloyedPoolFromPoolIdResponse {
  contractState: AlloyContractTakerFeeShareState;
}
export interface RegisteredAlloyedPoolFromPoolIdResponseProtoMsg {
  typeUrl: '/symphony.poolmanager.v1beta1.RegisteredAlloyedPoolFromPoolIdResponse';
  value: Uint8Array;
}
/**
 * @name RegisteredAlloyedPoolFromPoolIdResponseAmino
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.RegisteredAlloyedPoolFromPoolIdResponse
 */
export interface RegisteredAlloyedPoolFromPoolIdResponseAmino {
  contract_state?: AlloyContractTakerFeeShareStateAmino;
}
export interface RegisteredAlloyedPoolFromPoolIdResponseAminoMsg {
  type: '/symphony.poolmanager.v1beta1.RegisteredAlloyedPoolFromPoolIdResponse';
  value: RegisteredAlloyedPoolFromPoolIdResponseAmino;
}
/**
 * @name RegisteredAlloyedPoolFromPoolIdResponseSDKType
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.RegisteredAlloyedPoolFromPoolIdResponse
 */
export interface RegisteredAlloyedPoolFromPoolIdResponseSDKType {
  contract_state: AlloyContractTakerFeeShareStateSDKType;
}
/**
 * @name AllRegisteredAlloyedPoolsRequest
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.AllRegisteredAlloyedPoolsRequest
 */
export interface AllRegisteredAlloyedPoolsRequest {}
export interface AllRegisteredAlloyedPoolsRequestProtoMsg {
  typeUrl: '/symphony.poolmanager.v1beta1.AllRegisteredAlloyedPoolsRequest';
  value: Uint8Array;
}
/**
 * @name AllRegisteredAlloyedPoolsRequestAmino
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.AllRegisteredAlloyedPoolsRequest
 */
export interface AllRegisteredAlloyedPoolsRequestAmino {}
export interface AllRegisteredAlloyedPoolsRequestAminoMsg {
  type: '/symphony.poolmanager.v1beta1.AllRegisteredAlloyedPoolsRequest';
  value: AllRegisteredAlloyedPoolsRequestAmino;
}
/**
 * @name AllRegisteredAlloyedPoolsRequestSDKType
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.AllRegisteredAlloyedPoolsRequest
 */
export interface AllRegisteredAlloyedPoolsRequestSDKType {}
/**
 * @name AllRegisteredAlloyedPoolsResponse
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.AllRegisteredAlloyedPoolsResponse
 */
export interface AllRegisteredAlloyedPoolsResponse {
  contractStates: AlloyContractTakerFeeShareState[];
}
export interface AllRegisteredAlloyedPoolsResponseProtoMsg {
  typeUrl: '/symphony.poolmanager.v1beta1.AllRegisteredAlloyedPoolsResponse';
  value: Uint8Array;
}
/**
 * @name AllRegisteredAlloyedPoolsResponseAmino
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.AllRegisteredAlloyedPoolsResponse
 */
export interface AllRegisteredAlloyedPoolsResponseAmino {
  contract_states?: AlloyContractTakerFeeShareStateAmino[];
}
export interface AllRegisteredAlloyedPoolsResponseAminoMsg {
  type: '/symphony.poolmanager.v1beta1.AllRegisteredAlloyedPoolsResponse';
  value: AllRegisteredAlloyedPoolsResponseAmino;
}
/**
 * @name AllRegisteredAlloyedPoolsResponseSDKType
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.AllRegisteredAlloyedPoolsResponse
 */
export interface AllRegisteredAlloyedPoolsResponseSDKType {
  contract_states: AlloyContractTakerFeeShareStateSDKType[];
}
function createBaseParamsRequest(): ParamsRequest {
  return {};
}
/**
 * =============================== Params
 * @name ParamsRequest
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.ParamsRequest
 */
export const ParamsRequest = {
  typeUrl: '/symphony.poolmanager.v1beta1.ParamsRequest',
  is(o: any): o is ParamsRequest {
    return o && o.$typeUrl === ParamsRequest.typeUrl;
  },
  isSDK(o: any): o is ParamsRequestSDKType {
    return o && o.$typeUrl === ParamsRequest.typeUrl;
  },
  isAmino(o: any): o is ParamsRequestAmino {
    return o && o.$typeUrl === ParamsRequest.typeUrl;
  },
  encode(
    _: ParamsRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ParamsRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
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
      typeUrl: '/symphony.poolmanager.v1beta1.ParamsRequest',
      value: ParamsRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(ParamsRequest.typeUrl, ParamsRequest);
function createBaseParamsResponse(): ParamsResponse {
  return {
    params: Params.fromPartial({}),
  };
}
/**
 * @name ParamsResponse
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.ParamsResponse
 */
export const ParamsResponse = {
  typeUrl: '/symphony.poolmanager.v1beta1.ParamsResponse',
  is(o: any): o is ParamsResponse {
    return o && (o.$typeUrl === ParamsResponse.typeUrl || Params.is(o.params));
  },
  isSDK(o: any): o is ParamsResponseSDKType {
    return (
      o && (o.$typeUrl === ParamsResponse.typeUrl || Params.isSDK(o.params))
    );
  },
  isAmino(o: any): o is ParamsResponseAmino {
    return (
      o && (o.$typeUrl === ParamsResponse.typeUrl || Params.isAmino(o.params))
    );
  },
  encode(
    message: ParamsResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ParamsResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
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
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
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
      typeUrl: '/symphony.poolmanager.v1beta1.ParamsResponse',
      value: ParamsResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(ParamsResponse.typeUrl, ParamsResponse);
function createBaseEstimateSwapExactAmountInRequest(): EstimateSwapExactAmountInRequest {
  return {
    sender: undefined,
    poolId: undefined,
    tokenIn: '',
    routes: [],
  };
}
/**
 * =============================== EstimateSwapExactAmountIn
 * @name EstimateSwapExactAmountInRequest
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.EstimateSwapExactAmountInRequest
 */
export const EstimateSwapExactAmountInRequest = {
  typeUrl: '/symphony.poolmanager.v1beta1.EstimateSwapExactAmountInRequest',
  is(o: any): o is EstimateSwapExactAmountInRequest {
    return (
      o &&
      (o.$typeUrl === EstimateSwapExactAmountInRequest.typeUrl ||
        (typeof o.tokenIn === 'string' &&
          Array.isArray(o.routes) &&
          (!o.routes.length || SwapAmountInRoute.is(o.routes[0]))))
    );
  },
  isSDK(o: any): o is EstimateSwapExactAmountInRequestSDKType {
    return (
      o &&
      (o.$typeUrl === EstimateSwapExactAmountInRequest.typeUrl ||
        (typeof o.token_in === 'string' &&
          Array.isArray(o.routes) &&
          (!o.routes.length || SwapAmountInRoute.isSDK(o.routes[0]))))
    );
  },
  isAmino(o: any): o is EstimateSwapExactAmountInRequestAmino {
    return (
      o &&
      (o.$typeUrl === EstimateSwapExactAmountInRequest.typeUrl ||
        (typeof o.token_in === 'string' &&
          Array.isArray(o.routes) &&
          (!o.routes.length || SwapAmountInRoute.isAmino(o.routes[0]))))
    );
  },
  encode(
    message: EstimateSwapExactAmountInRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.sender !== undefined) {
      writer.uint32(10).string(message.sender);
    }
    if (message.poolId !== undefined) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.tokenIn !== '') {
      writer.uint32(26).string(message.tokenIn);
    }
    for (const v of message.routes) {
      SwapAmountInRoute.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): EstimateSwapExactAmountInRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimateSwapExactAmountInRequest();
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
          message.routes.push(
            SwapAmountInRoute.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(
    object: Partial<EstimateSwapExactAmountInRequest>,
  ): EstimateSwapExactAmountInRequest {
    const message = createBaseEstimateSwapExactAmountInRequest();
    message.sender = object.sender ?? undefined;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? BigInt(object.poolId.toString())
        : undefined;
    message.tokenIn = object.tokenIn ?? '';
    message.routes =
      object.routes?.map(e => SwapAmountInRoute.fromPartial(e)) || [];
    return message;
  },
  fromAmino(
    object: EstimateSwapExactAmountInRequestAmino,
  ): EstimateSwapExactAmountInRequest {
    const message = createBaseEstimateSwapExactAmountInRequest();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.token_in !== undefined && object.token_in !== null) {
      message.tokenIn = object.token_in;
    }
    message.routes =
      object.routes?.map(e => SwapAmountInRoute.fromAmino(e)) || [];
    return message;
  },
  toAmino(
    message: EstimateSwapExactAmountInRequest,
  ): EstimateSwapExactAmountInRequestAmino {
    const obj: any = {};
    obj.sender = message.sender === null ? undefined : message.sender;
    obj.pool_id =
      message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    obj.token_in = message.tokenIn === '' ? undefined : message.tokenIn;
    if (message.routes) {
      obj.routes = message.routes.map(e =>
        e ? SwapAmountInRoute.toAmino(e) : undefined,
      );
    } else {
      obj.routes = message.routes;
    }
    return obj;
  },
  fromAminoMsg(
    object: EstimateSwapExactAmountInRequestAminoMsg,
  ): EstimateSwapExactAmountInRequest {
    return EstimateSwapExactAmountInRequest.fromAmino(object.value);
  },
  fromProtoMsg(
    message: EstimateSwapExactAmountInRequestProtoMsg,
  ): EstimateSwapExactAmountInRequest {
    return EstimateSwapExactAmountInRequest.decode(message.value);
  },
  toProto(message: EstimateSwapExactAmountInRequest): Uint8Array {
    return EstimateSwapExactAmountInRequest.encode(message).finish();
  },
  toProtoMsg(
    message: EstimateSwapExactAmountInRequest,
  ): EstimateSwapExactAmountInRequestProtoMsg {
    return {
      typeUrl: '/symphony.poolmanager.v1beta1.EstimateSwapExactAmountInRequest',
      value: EstimateSwapExactAmountInRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  EstimateSwapExactAmountInRequest.typeUrl,
  EstimateSwapExactAmountInRequest,
);
function createBaseEstimateSwapExactAmountInWithPrimitiveTypesRequest(): EstimateSwapExactAmountInWithPrimitiveTypesRequest {
  return {
    poolId: undefined,
    tokenIn: '',
    routesPoolId: [],
    routesTokenOutDenom: [],
  };
}
/**
 * @name EstimateSwapExactAmountInWithPrimitiveTypesRequest
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.EstimateSwapExactAmountInWithPrimitiveTypesRequest
 */
export const EstimateSwapExactAmountInWithPrimitiveTypesRequest = {
  typeUrl:
    '/symphony.poolmanager.v1beta1.EstimateSwapExactAmountInWithPrimitiveTypesRequest',
  is(o: any): o is EstimateSwapExactAmountInWithPrimitiveTypesRequest {
    return (
      o &&
      (o.$typeUrl ===
        EstimateSwapExactAmountInWithPrimitiveTypesRequest.typeUrl ||
        (typeof o.tokenIn === 'string' &&
          Array.isArray(o.routesPoolId) &&
          (!o.routesPoolId.length || typeof o.routesPoolId[0] === 'bigint') &&
          Array.isArray(o.routesTokenOutDenom) &&
          (!o.routesTokenOutDenom.length ||
            typeof o.routesTokenOutDenom[0] === 'string')))
    );
  },
  isSDK(
    o: any,
  ): o is EstimateSwapExactAmountInWithPrimitiveTypesRequestSDKType {
    return (
      o &&
      (o.$typeUrl ===
        EstimateSwapExactAmountInWithPrimitiveTypesRequest.typeUrl ||
        (typeof o.token_in === 'string' &&
          Array.isArray(o.routes_pool_id) &&
          (!o.routes_pool_id.length ||
            typeof o.routes_pool_id[0] === 'bigint') &&
          Array.isArray(o.routes_token_out_denom) &&
          (!o.routes_token_out_denom.length ||
            typeof o.routes_token_out_denom[0] === 'string')))
    );
  },
  isAmino(
    o: any,
  ): o is EstimateSwapExactAmountInWithPrimitiveTypesRequestAmino {
    return (
      o &&
      (o.$typeUrl ===
        EstimateSwapExactAmountInWithPrimitiveTypesRequest.typeUrl ||
        (typeof o.token_in === 'string' &&
          Array.isArray(o.routes_pool_id) &&
          (!o.routes_pool_id.length ||
            typeof o.routes_pool_id[0] === 'bigint') &&
          Array.isArray(o.routes_token_out_denom) &&
          (!o.routes_token_out_denom.length ||
            typeof o.routes_token_out_denom[0] === 'string')))
    );
  },
  encode(
    message: EstimateSwapExactAmountInWithPrimitiveTypesRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.poolId !== undefined) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.tokenIn !== '') {
      writer.uint32(18).string(message.tokenIn);
    }
    writer.uint32(26).fork();
    for (const v of message.routesPoolId) {
      writer.uint64(v);
    }
    writer.ldelim();
    for (const v of message.routesTokenOutDenom) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): EstimateSwapExactAmountInWithPrimitiveTypesRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseEstimateSwapExactAmountInWithPrimitiveTypesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.tokenIn = reader.string();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.routesPoolId.push(reader.uint64());
            }
          } else {
            message.routesPoolId.push(reader.uint64());
          }
          break;
        case 4:
          message.routesTokenOutDenom.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(
    object: Partial<EstimateSwapExactAmountInWithPrimitiveTypesRequest>,
  ): EstimateSwapExactAmountInWithPrimitiveTypesRequest {
    const message =
      createBaseEstimateSwapExactAmountInWithPrimitiveTypesRequest();
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? BigInt(object.poolId.toString())
        : undefined;
    message.tokenIn = object.tokenIn ?? '';
    message.routesPoolId =
      object.routesPoolId?.map(e => BigInt(e.toString())) || [];
    message.routesTokenOutDenom = object.routesTokenOutDenom?.map(e => e) || [];
    return message;
  },
  fromAmino(
    object: EstimateSwapExactAmountInWithPrimitiveTypesRequestAmino,
  ): EstimateSwapExactAmountInWithPrimitiveTypesRequest {
    const message =
      createBaseEstimateSwapExactAmountInWithPrimitiveTypesRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.token_in !== undefined && object.token_in !== null) {
      message.tokenIn = object.token_in;
    }
    message.routesPoolId = object.routes_pool_id?.map(e => BigInt(e)) || [];
    message.routesTokenOutDenom =
      object.routes_token_out_denom?.map(e => e) || [];
    return message;
  },
  toAmino(
    message: EstimateSwapExactAmountInWithPrimitiveTypesRequest,
  ): EstimateSwapExactAmountInWithPrimitiveTypesRequestAmino {
    const obj: any = {};
    obj.pool_id =
      message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    obj.token_in = message.tokenIn === '' ? undefined : message.tokenIn;
    if (message.routesPoolId) {
      obj.routes_pool_id = message.routesPoolId.map(e => e.toString());
    } else {
      obj.routes_pool_id = message.routesPoolId;
    }
    if (message.routesTokenOutDenom) {
      obj.routes_token_out_denom = message.routesTokenOutDenom.map(e => e);
    } else {
      obj.routes_token_out_denom = message.routesTokenOutDenom;
    }
    return obj;
  },
  fromAminoMsg(
    object: EstimateSwapExactAmountInWithPrimitiveTypesRequestAminoMsg,
  ): EstimateSwapExactAmountInWithPrimitiveTypesRequest {
    return EstimateSwapExactAmountInWithPrimitiveTypesRequest.fromAmino(
      object.value,
    );
  },
  fromProtoMsg(
    message: EstimateSwapExactAmountInWithPrimitiveTypesRequestProtoMsg,
  ): EstimateSwapExactAmountInWithPrimitiveTypesRequest {
    return EstimateSwapExactAmountInWithPrimitiveTypesRequest.decode(
      message.value,
    );
  },
  toProto(
    message: EstimateSwapExactAmountInWithPrimitiveTypesRequest,
  ): Uint8Array {
    return EstimateSwapExactAmountInWithPrimitiveTypesRequest.encode(
      message,
    ).finish();
  },
  toProtoMsg(
    message: EstimateSwapExactAmountInWithPrimitiveTypesRequest,
  ): EstimateSwapExactAmountInWithPrimitiveTypesRequestProtoMsg {
    return {
      typeUrl:
        '/symphony.poolmanager.v1beta1.EstimateSwapExactAmountInWithPrimitiveTypesRequest',
      value:
        EstimateSwapExactAmountInWithPrimitiveTypesRequest.encode(
          message,
        ).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  EstimateSwapExactAmountInWithPrimitiveTypesRequest.typeUrl,
  EstimateSwapExactAmountInWithPrimitiveTypesRequest,
);
function createBaseEstimateSinglePoolSwapExactAmountInRequest(): EstimateSinglePoolSwapExactAmountInRequest {
  return {
    poolId: BigInt(0),
    tokenIn: '',
    tokenOutDenom: '',
  };
}
/**
 * @name EstimateSinglePoolSwapExactAmountInRequest
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.EstimateSinglePoolSwapExactAmountInRequest
 */
export const EstimateSinglePoolSwapExactAmountInRequest = {
  typeUrl:
    '/symphony.poolmanager.v1beta1.EstimateSinglePoolSwapExactAmountInRequest',
  is(o: any): o is EstimateSinglePoolSwapExactAmountInRequest {
    return (
      o &&
      (o.$typeUrl === EstimateSinglePoolSwapExactAmountInRequest.typeUrl ||
        (typeof o.poolId === 'bigint' &&
          typeof o.tokenIn === 'string' &&
          typeof o.tokenOutDenom === 'string'))
    );
  },
  isSDK(o: any): o is EstimateSinglePoolSwapExactAmountInRequestSDKType {
    return (
      o &&
      (o.$typeUrl === EstimateSinglePoolSwapExactAmountInRequest.typeUrl ||
        (typeof o.pool_id === 'bigint' &&
          typeof o.token_in === 'string' &&
          typeof o.token_out_denom === 'string'))
    );
  },
  isAmino(o: any): o is EstimateSinglePoolSwapExactAmountInRequestAmino {
    return (
      o &&
      (o.$typeUrl === EstimateSinglePoolSwapExactAmountInRequest.typeUrl ||
        (typeof o.pool_id === 'bigint' &&
          typeof o.token_in === 'string' &&
          typeof o.token_out_denom === 'string'))
    );
  },
  encode(
    message: EstimateSinglePoolSwapExactAmountInRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.tokenIn !== '') {
      writer.uint32(18).string(message.tokenIn);
    }
    if (message.tokenOutDenom !== '') {
      writer.uint32(26).string(message.tokenOutDenom);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): EstimateSinglePoolSwapExactAmountInRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimateSinglePoolSwapExactAmountInRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.tokenIn = reader.string();
          break;
        case 3:
          message.tokenOutDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(
    object: Partial<EstimateSinglePoolSwapExactAmountInRequest>,
  ): EstimateSinglePoolSwapExactAmountInRequest {
    const message = createBaseEstimateSinglePoolSwapExactAmountInRequest();
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? BigInt(object.poolId.toString())
        : BigInt(0);
    message.tokenIn = object.tokenIn ?? '';
    message.tokenOutDenom = object.tokenOutDenom ?? '';
    return message;
  },
  fromAmino(
    object: EstimateSinglePoolSwapExactAmountInRequestAmino,
  ): EstimateSinglePoolSwapExactAmountInRequest {
    const message = createBaseEstimateSinglePoolSwapExactAmountInRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.token_in !== undefined && object.token_in !== null) {
      message.tokenIn = object.token_in;
    }
    if (
      object.token_out_denom !== undefined &&
      object.token_out_denom !== null
    ) {
      message.tokenOutDenom = object.token_out_denom;
    }
    return message;
  },
  toAmino(
    message: EstimateSinglePoolSwapExactAmountInRequest,
  ): EstimateSinglePoolSwapExactAmountInRequestAmino {
    const obj: any = {};
    obj.pool_id =
      message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    obj.token_in = message.tokenIn === '' ? undefined : message.tokenIn;
    obj.token_out_denom =
      message.tokenOutDenom === '' ? undefined : message.tokenOutDenom;
    return obj;
  },
  fromAminoMsg(
    object: EstimateSinglePoolSwapExactAmountInRequestAminoMsg,
  ): EstimateSinglePoolSwapExactAmountInRequest {
    return EstimateSinglePoolSwapExactAmountInRequest.fromAmino(object.value);
  },
  fromProtoMsg(
    message: EstimateSinglePoolSwapExactAmountInRequestProtoMsg,
  ): EstimateSinglePoolSwapExactAmountInRequest {
    return EstimateSinglePoolSwapExactAmountInRequest.decode(message.value);
  },
  toProto(message: EstimateSinglePoolSwapExactAmountInRequest): Uint8Array {
    return EstimateSinglePoolSwapExactAmountInRequest.encode(message).finish();
  },
  toProtoMsg(
    message: EstimateSinglePoolSwapExactAmountInRequest,
  ): EstimateSinglePoolSwapExactAmountInRequestProtoMsg {
    return {
      typeUrl:
        '/symphony.poolmanager.v1beta1.EstimateSinglePoolSwapExactAmountInRequest',
      value:
        EstimateSinglePoolSwapExactAmountInRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  EstimateSinglePoolSwapExactAmountInRequest.typeUrl,
  EstimateSinglePoolSwapExactAmountInRequest,
);
function createBaseEstimateSwapExactAmountInResponse(): EstimateSwapExactAmountInResponse {
  return {
    tokenOutAmount: '',
  };
}
/**
 * @name EstimateSwapExactAmountInResponse
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.EstimateSwapExactAmountInResponse
 */
export const EstimateSwapExactAmountInResponse = {
  typeUrl: '/symphony.poolmanager.v1beta1.EstimateSwapExactAmountInResponse',
  is(o: any): o is EstimateSwapExactAmountInResponse {
    return (
      o &&
      (o.$typeUrl === EstimateSwapExactAmountInResponse.typeUrl ||
        typeof o.tokenOutAmount === 'string')
    );
  },
  isSDK(o: any): o is EstimateSwapExactAmountInResponseSDKType {
    return (
      o &&
      (o.$typeUrl === EstimateSwapExactAmountInResponse.typeUrl ||
        typeof o.token_out_amount === 'string')
    );
  },
  isAmino(o: any): o is EstimateSwapExactAmountInResponseAmino {
    return (
      o &&
      (o.$typeUrl === EstimateSwapExactAmountInResponse.typeUrl ||
        typeof o.token_out_amount === 'string')
    );
  },
  encode(
    message: EstimateSwapExactAmountInResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.tokenOutAmount !== '') {
      writer.uint32(10).string(message.tokenOutAmount);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): EstimateSwapExactAmountInResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimateSwapExactAmountInResponse();
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
  fromPartial(
    object: Partial<EstimateSwapExactAmountInResponse>,
  ): EstimateSwapExactAmountInResponse {
    const message = createBaseEstimateSwapExactAmountInResponse();
    message.tokenOutAmount = object.tokenOutAmount ?? '';
    return message;
  },
  fromAmino(
    object: EstimateSwapExactAmountInResponseAmino,
  ): EstimateSwapExactAmountInResponse {
    const message = createBaseEstimateSwapExactAmountInResponse();
    if (
      object.token_out_amount !== undefined &&
      object.token_out_amount !== null
    ) {
      message.tokenOutAmount = object.token_out_amount;
    }
    return message;
  },
  toAmino(
    message: EstimateSwapExactAmountInResponse,
  ): EstimateSwapExactAmountInResponseAmino {
    const obj: any = {};
    obj.token_out_amount =
      message.tokenOutAmount === '' ? undefined : message.tokenOutAmount;
    return obj;
  },
  fromAminoMsg(
    object: EstimateSwapExactAmountInResponseAminoMsg,
  ): EstimateSwapExactAmountInResponse {
    return EstimateSwapExactAmountInResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: EstimateSwapExactAmountInResponseProtoMsg,
  ): EstimateSwapExactAmountInResponse {
    return EstimateSwapExactAmountInResponse.decode(message.value);
  },
  toProto(message: EstimateSwapExactAmountInResponse): Uint8Array {
    return EstimateSwapExactAmountInResponse.encode(message).finish();
  },
  toProtoMsg(
    message: EstimateSwapExactAmountInResponse,
  ): EstimateSwapExactAmountInResponseProtoMsg {
    return {
      typeUrl:
        '/symphony.poolmanager.v1beta1.EstimateSwapExactAmountInResponse',
      value: EstimateSwapExactAmountInResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  EstimateSwapExactAmountInResponse.typeUrl,
  EstimateSwapExactAmountInResponse,
);
function createBaseEstimateSwapExactAmountOutRequest(): EstimateSwapExactAmountOutRequest {
  return {
    sender: undefined,
    poolId: undefined,
    routes: [],
    tokenOut: '',
  };
}
/**
 * =============================== EstimateSwapExactAmountOut
 * @name EstimateSwapExactAmountOutRequest
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.EstimateSwapExactAmountOutRequest
 */
export const EstimateSwapExactAmountOutRequest = {
  typeUrl: '/symphony.poolmanager.v1beta1.EstimateSwapExactAmountOutRequest',
  is(o: any): o is EstimateSwapExactAmountOutRequest {
    return (
      o &&
      (o.$typeUrl === EstimateSwapExactAmountOutRequest.typeUrl ||
        (Array.isArray(o.routes) &&
          (!o.routes.length || SwapAmountOutRoute.is(o.routes[0])) &&
          typeof o.tokenOut === 'string'))
    );
  },
  isSDK(o: any): o is EstimateSwapExactAmountOutRequestSDKType {
    return (
      o &&
      (o.$typeUrl === EstimateSwapExactAmountOutRequest.typeUrl ||
        (Array.isArray(o.routes) &&
          (!o.routes.length || SwapAmountOutRoute.isSDK(o.routes[0])) &&
          typeof o.token_out === 'string'))
    );
  },
  isAmino(o: any): o is EstimateSwapExactAmountOutRequestAmino {
    return (
      o &&
      (o.$typeUrl === EstimateSwapExactAmountOutRequest.typeUrl ||
        (Array.isArray(o.routes) &&
          (!o.routes.length || SwapAmountOutRoute.isAmino(o.routes[0])) &&
          typeof o.token_out === 'string'))
    );
  },
  encode(
    message: EstimateSwapExactAmountOutRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.sender !== undefined) {
      writer.uint32(10).string(message.sender);
    }
    if (message.poolId !== undefined) {
      writer.uint32(16).uint64(message.poolId);
    }
    for (const v of message.routes) {
      SwapAmountOutRoute.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.tokenOut !== '') {
      writer.uint32(34).string(message.tokenOut);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): EstimateSwapExactAmountOutRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimateSwapExactAmountOutRequest();
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
          message.routes.push(
            SwapAmountOutRoute.decode(reader, reader.uint32()),
          );
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
  fromPartial(
    object: Partial<EstimateSwapExactAmountOutRequest>,
  ): EstimateSwapExactAmountOutRequest {
    const message = createBaseEstimateSwapExactAmountOutRequest();
    message.sender = object.sender ?? undefined;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? BigInt(object.poolId.toString())
        : undefined;
    message.routes =
      object.routes?.map(e => SwapAmountOutRoute.fromPartial(e)) || [];
    message.tokenOut = object.tokenOut ?? '';
    return message;
  },
  fromAmino(
    object: EstimateSwapExactAmountOutRequestAmino,
  ): EstimateSwapExactAmountOutRequest {
    const message = createBaseEstimateSwapExactAmountOutRequest();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    message.routes =
      object.routes?.map(e => SwapAmountOutRoute.fromAmino(e)) || [];
    if (object.token_out !== undefined && object.token_out !== null) {
      message.tokenOut = object.token_out;
    }
    return message;
  },
  toAmino(
    message: EstimateSwapExactAmountOutRequest,
  ): EstimateSwapExactAmountOutRequestAmino {
    const obj: any = {};
    obj.sender = message.sender === null ? undefined : message.sender;
    obj.pool_id =
      message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    if (message.routes) {
      obj.routes = message.routes.map(e =>
        e ? SwapAmountOutRoute.toAmino(e) : undefined,
      );
    } else {
      obj.routes = message.routes;
    }
    obj.token_out = message.tokenOut === '' ? undefined : message.tokenOut;
    return obj;
  },
  fromAminoMsg(
    object: EstimateSwapExactAmountOutRequestAminoMsg,
  ): EstimateSwapExactAmountOutRequest {
    return EstimateSwapExactAmountOutRequest.fromAmino(object.value);
  },
  fromProtoMsg(
    message: EstimateSwapExactAmountOutRequestProtoMsg,
  ): EstimateSwapExactAmountOutRequest {
    return EstimateSwapExactAmountOutRequest.decode(message.value);
  },
  toProto(message: EstimateSwapExactAmountOutRequest): Uint8Array {
    return EstimateSwapExactAmountOutRequest.encode(message).finish();
  },
  toProtoMsg(
    message: EstimateSwapExactAmountOutRequest,
  ): EstimateSwapExactAmountOutRequestProtoMsg {
    return {
      typeUrl:
        '/symphony.poolmanager.v1beta1.EstimateSwapExactAmountOutRequest',
      value: EstimateSwapExactAmountOutRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  EstimateSwapExactAmountOutRequest.typeUrl,
  EstimateSwapExactAmountOutRequest,
);
function createBaseEstimateSwapExactAmountOutWithPrimitiveTypesRequest(): EstimateSwapExactAmountOutWithPrimitiveTypesRequest {
  return {
    poolId: undefined,
    routesPoolId: [],
    routesTokenInDenom: [],
    tokenOut: '',
  };
}
/**
 * @name EstimateSwapExactAmountOutWithPrimitiveTypesRequest
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.EstimateSwapExactAmountOutWithPrimitiveTypesRequest
 */
export const EstimateSwapExactAmountOutWithPrimitiveTypesRequest = {
  typeUrl:
    '/symphony.poolmanager.v1beta1.EstimateSwapExactAmountOutWithPrimitiveTypesRequest',
  is(o: any): o is EstimateSwapExactAmountOutWithPrimitiveTypesRequest {
    return (
      o &&
      (o.$typeUrl ===
        EstimateSwapExactAmountOutWithPrimitiveTypesRequest.typeUrl ||
        (Array.isArray(o.routesPoolId) &&
          (!o.routesPoolId.length || typeof o.routesPoolId[0] === 'bigint') &&
          Array.isArray(o.routesTokenInDenom) &&
          (!o.routesTokenInDenom.length ||
            typeof o.routesTokenInDenom[0] === 'string') &&
          typeof o.tokenOut === 'string'))
    );
  },
  isSDK(
    o: any,
  ): o is EstimateSwapExactAmountOutWithPrimitiveTypesRequestSDKType {
    return (
      o &&
      (o.$typeUrl ===
        EstimateSwapExactAmountOutWithPrimitiveTypesRequest.typeUrl ||
        (Array.isArray(o.routes_pool_id) &&
          (!o.routes_pool_id.length ||
            typeof o.routes_pool_id[0] === 'bigint') &&
          Array.isArray(o.routes_token_in_denom) &&
          (!o.routes_token_in_denom.length ||
            typeof o.routes_token_in_denom[0] === 'string') &&
          typeof o.token_out === 'string'))
    );
  },
  isAmino(
    o: any,
  ): o is EstimateSwapExactAmountOutWithPrimitiveTypesRequestAmino {
    return (
      o &&
      (o.$typeUrl ===
        EstimateSwapExactAmountOutWithPrimitiveTypesRequest.typeUrl ||
        (Array.isArray(o.routes_pool_id) &&
          (!o.routes_pool_id.length ||
            typeof o.routes_pool_id[0] === 'bigint') &&
          Array.isArray(o.routes_token_in_denom) &&
          (!o.routes_token_in_denom.length ||
            typeof o.routes_token_in_denom[0] === 'string') &&
          typeof o.token_out === 'string'))
    );
  },
  encode(
    message: EstimateSwapExactAmountOutWithPrimitiveTypesRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.poolId !== undefined) {
      writer.uint32(8).uint64(message.poolId);
    }
    writer.uint32(18).fork();
    for (const v of message.routesPoolId) {
      writer.uint64(v);
    }
    writer.ldelim();
    for (const v of message.routesTokenInDenom) {
      writer.uint32(26).string(v!);
    }
    if (message.tokenOut !== '') {
      writer.uint32(34).string(message.tokenOut);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): EstimateSwapExactAmountOutWithPrimitiveTypesRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseEstimateSwapExactAmountOutWithPrimitiveTypesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.routesPoolId.push(reader.uint64());
            }
          } else {
            message.routesPoolId.push(reader.uint64());
          }
          break;
        case 3:
          message.routesTokenInDenom.push(reader.string());
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
  fromPartial(
    object: Partial<EstimateSwapExactAmountOutWithPrimitiveTypesRequest>,
  ): EstimateSwapExactAmountOutWithPrimitiveTypesRequest {
    const message =
      createBaseEstimateSwapExactAmountOutWithPrimitiveTypesRequest();
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? BigInt(object.poolId.toString())
        : undefined;
    message.routesPoolId =
      object.routesPoolId?.map(e => BigInt(e.toString())) || [];
    message.routesTokenInDenom = object.routesTokenInDenom?.map(e => e) || [];
    message.tokenOut = object.tokenOut ?? '';
    return message;
  },
  fromAmino(
    object: EstimateSwapExactAmountOutWithPrimitiveTypesRequestAmino,
  ): EstimateSwapExactAmountOutWithPrimitiveTypesRequest {
    const message =
      createBaseEstimateSwapExactAmountOutWithPrimitiveTypesRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    message.routesPoolId = object.routes_pool_id?.map(e => BigInt(e)) || [];
    message.routesTokenInDenom =
      object.routes_token_in_denom?.map(e => e) || [];
    if (object.token_out !== undefined && object.token_out !== null) {
      message.tokenOut = object.token_out;
    }
    return message;
  },
  toAmino(
    message: EstimateSwapExactAmountOutWithPrimitiveTypesRequest,
  ): EstimateSwapExactAmountOutWithPrimitiveTypesRequestAmino {
    const obj: any = {};
    obj.pool_id =
      message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    if (message.routesPoolId) {
      obj.routes_pool_id = message.routesPoolId.map(e => e.toString());
    } else {
      obj.routes_pool_id = message.routesPoolId;
    }
    if (message.routesTokenInDenom) {
      obj.routes_token_in_denom = message.routesTokenInDenom.map(e => e);
    } else {
      obj.routes_token_in_denom = message.routesTokenInDenom;
    }
    obj.token_out = message.tokenOut === '' ? undefined : message.tokenOut;
    return obj;
  },
  fromAminoMsg(
    object: EstimateSwapExactAmountOutWithPrimitiveTypesRequestAminoMsg,
  ): EstimateSwapExactAmountOutWithPrimitiveTypesRequest {
    return EstimateSwapExactAmountOutWithPrimitiveTypesRequest.fromAmino(
      object.value,
    );
  },
  fromProtoMsg(
    message: EstimateSwapExactAmountOutWithPrimitiveTypesRequestProtoMsg,
  ): EstimateSwapExactAmountOutWithPrimitiveTypesRequest {
    return EstimateSwapExactAmountOutWithPrimitiveTypesRequest.decode(
      message.value,
    );
  },
  toProto(
    message: EstimateSwapExactAmountOutWithPrimitiveTypesRequest,
  ): Uint8Array {
    return EstimateSwapExactAmountOutWithPrimitiveTypesRequest.encode(
      message,
    ).finish();
  },
  toProtoMsg(
    message: EstimateSwapExactAmountOutWithPrimitiveTypesRequest,
  ): EstimateSwapExactAmountOutWithPrimitiveTypesRequestProtoMsg {
    return {
      typeUrl:
        '/symphony.poolmanager.v1beta1.EstimateSwapExactAmountOutWithPrimitiveTypesRequest',
      value:
        EstimateSwapExactAmountOutWithPrimitiveTypesRequest.encode(
          message,
        ).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  EstimateSwapExactAmountOutWithPrimitiveTypesRequest.typeUrl,
  EstimateSwapExactAmountOutWithPrimitiveTypesRequest,
);
function createBaseEstimateSinglePoolSwapExactAmountOutRequest(): EstimateSinglePoolSwapExactAmountOutRequest {
  return {
    poolId: BigInt(0),
    tokenInDenom: '',
    tokenOut: '',
  };
}
/**
 * @name EstimateSinglePoolSwapExactAmountOutRequest
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.EstimateSinglePoolSwapExactAmountOutRequest
 */
export const EstimateSinglePoolSwapExactAmountOutRequest = {
  typeUrl:
    '/symphony.poolmanager.v1beta1.EstimateSinglePoolSwapExactAmountOutRequest',
  is(o: any): o is EstimateSinglePoolSwapExactAmountOutRequest {
    return (
      o &&
      (o.$typeUrl === EstimateSinglePoolSwapExactAmountOutRequest.typeUrl ||
        (typeof o.poolId === 'bigint' &&
          typeof o.tokenInDenom === 'string' &&
          typeof o.tokenOut === 'string'))
    );
  },
  isSDK(o: any): o is EstimateSinglePoolSwapExactAmountOutRequestSDKType {
    return (
      o &&
      (o.$typeUrl === EstimateSinglePoolSwapExactAmountOutRequest.typeUrl ||
        (typeof o.pool_id === 'bigint' &&
          typeof o.token_in_denom === 'string' &&
          typeof o.token_out === 'string'))
    );
  },
  isAmino(o: any): o is EstimateSinglePoolSwapExactAmountOutRequestAmino {
    return (
      o &&
      (o.$typeUrl === EstimateSinglePoolSwapExactAmountOutRequest.typeUrl ||
        (typeof o.pool_id === 'bigint' &&
          typeof o.token_in_denom === 'string' &&
          typeof o.token_out === 'string'))
    );
  },
  encode(
    message: EstimateSinglePoolSwapExactAmountOutRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.tokenInDenom !== '') {
      writer.uint32(18).string(message.tokenInDenom);
    }
    if (message.tokenOut !== '') {
      writer.uint32(26).string(message.tokenOut);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): EstimateSinglePoolSwapExactAmountOutRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimateSinglePoolSwapExactAmountOutRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.tokenInDenom = reader.string();
          break;
        case 3:
          message.tokenOut = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(
    object: Partial<EstimateSinglePoolSwapExactAmountOutRequest>,
  ): EstimateSinglePoolSwapExactAmountOutRequest {
    const message = createBaseEstimateSinglePoolSwapExactAmountOutRequest();
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? BigInt(object.poolId.toString())
        : BigInt(0);
    message.tokenInDenom = object.tokenInDenom ?? '';
    message.tokenOut = object.tokenOut ?? '';
    return message;
  },
  fromAmino(
    object: EstimateSinglePoolSwapExactAmountOutRequestAmino,
  ): EstimateSinglePoolSwapExactAmountOutRequest {
    const message = createBaseEstimateSinglePoolSwapExactAmountOutRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.token_in_denom !== undefined && object.token_in_denom !== null) {
      message.tokenInDenom = object.token_in_denom;
    }
    if (object.token_out !== undefined && object.token_out !== null) {
      message.tokenOut = object.token_out;
    }
    return message;
  },
  toAmino(
    message: EstimateSinglePoolSwapExactAmountOutRequest,
  ): EstimateSinglePoolSwapExactAmountOutRequestAmino {
    const obj: any = {};
    obj.pool_id =
      message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    obj.token_in_denom =
      message.tokenInDenom === '' ? undefined : message.tokenInDenom;
    obj.token_out = message.tokenOut === '' ? undefined : message.tokenOut;
    return obj;
  },
  fromAminoMsg(
    object: EstimateSinglePoolSwapExactAmountOutRequestAminoMsg,
  ): EstimateSinglePoolSwapExactAmountOutRequest {
    return EstimateSinglePoolSwapExactAmountOutRequest.fromAmino(object.value);
  },
  fromProtoMsg(
    message: EstimateSinglePoolSwapExactAmountOutRequestProtoMsg,
  ): EstimateSinglePoolSwapExactAmountOutRequest {
    return EstimateSinglePoolSwapExactAmountOutRequest.decode(message.value);
  },
  toProto(message: EstimateSinglePoolSwapExactAmountOutRequest): Uint8Array {
    return EstimateSinglePoolSwapExactAmountOutRequest.encode(message).finish();
  },
  toProtoMsg(
    message: EstimateSinglePoolSwapExactAmountOutRequest,
  ): EstimateSinglePoolSwapExactAmountOutRequestProtoMsg {
    return {
      typeUrl:
        '/symphony.poolmanager.v1beta1.EstimateSinglePoolSwapExactAmountOutRequest',
      value:
        EstimateSinglePoolSwapExactAmountOutRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  EstimateSinglePoolSwapExactAmountOutRequest.typeUrl,
  EstimateSinglePoolSwapExactAmountOutRequest,
);
function createBaseEstimateSwapExactAmountOutResponse(): EstimateSwapExactAmountOutResponse {
  return {
    tokenInAmount: '',
  };
}
/**
 * @name EstimateSwapExactAmountOutResponse
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.EstimateSwapExactAmountOutResponse
 */
export const EstimateSwapExactAmountOutResponse = {
  typeUrl: '/symphony.poolmanager.v1beta1.EstimateSwapExactAmountOutResponse',
  is(o: any): o is EstimateSwapExactAmountOutResponse {
    return (
      o &&
      (o.$typeUrl === EstimateSwapExactAmountOutResponse.typeUrl ||
        typeof o.tokenInAmount === 'string')
    );
  },
  isSDK(o: any): o is EstimateSwapExactAmountOutResponseSDKType {
    return (
      o &&
      (o.$typeUrl === EstimateSwapExactAmountOutResponse.typeUrl ||
        typeof o.token_in_amount === 'string')
    );
  },
  isAmino(o: any): o is EstimateSwapExactAmountOutResponseAmino {
    return (
      o &&
      (o.$typeUrl === EstimateSwapExactAmountOutResponse.typeUrl ||
        typeof o.token_in_amount === 'string')
    );
  },
  encode(
    message: EstimateSwapExactAmountOutResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.tokenInAmount !== '') {
      writer.uint32(10).string(message.tokenInAmount);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): EstimateSwapExactAmountOutResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimateSwapExactAmountOutResponse();
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
  fromPartial(
    object: Partial<EstimateSwapExactAmountOutResponse>,
  ): EstimateSwapExactAmountOutResponse {
    const message = createBaseEstimateSwapExactAmountOutResponse();
    message.tokenInAmount = object.tokenInAmount ?? '';
    return message;
  },
  fromAmino(
    object: EstimateSwapExactAmountOutResponseAmino,
  ): EstimateSwapExactAmountOutResponse {
    const message = createBaseEstimateSwapExactAmountOutResponse();
    if (
      object.token_in_amount !== undefined &&
      object.token_in_amount !== null
    ) {
      message.tokenInAmount = object.token_in_amount;
    }
    return message;
  },
  toAmino(
    message: EstimateSwapExactAmountOutResponse,
  ): EstimateSwapExactAmountOutResponseAmino {
    const obj: any = {};
    obj.token_in_amount =
      message.tokenInAmount === '' ? undefined : message.tokenInAmount;
    return obj;
  },
  fromAminoMsg(
    object: EstimateSwapExactAmountOutResponseAminoMsg,
  ): EstimateSwapExactAmountOutResponse {
    return EstimateSwapExactAmountOutResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: EstimateSwapExactAmountOutResponseProtoMsg,
  ): EstimateSwapExactAmountOutResponse {
    return EstimateSwapExactAmountOutResponse.decode(message.value);
  },
  toProto(message: EstimateSwapExactAmountOutResponse): Uint8Array {
    return EstimateSwapExactAmountOutResponse.encode(message).finish();
  },
  toProtoMsg(
    message: EstimateSwapExactAmountOutResponse,
  ): EstimateSwapExactAmountOutResponseProtoMsg {
    return {
      typeUrl:
        '/symphony.poolmanager.v1beta1.EstimateSwapExactAmountOutResponse',
      value: EstimateSwapExactAmountOutResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  EstimateSwapExactAmountOutResponse.typeUrl,
  EstimateSwapExactAmountOutResponse,
);
function createBaseNumPoolsRequest(): NumPoolsRequest {
  return {};
}
/**
 * =============================== NumPools
 * @name NumPoolsRequest
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.NumPoolsRequest
 */
export const NumPoolsRequest = {
  typeUrl: '/symphony.poolmanager.v1beta1.NumPoolsRequest',
  is(o: any): o is NumPoolsRequest {
    return o && o.$typeUrl === NumPoolsRequest.typeUrl;
  },
  isSDK(o: any): o is NumPoolsRequestSDKType {
    return o && o.$typeUrl === NumPoolsRequest.typeUrl;
  },
  isAmino(o: any): o is NumPoolsRequestAmino {
    return o && o.$typeUrl === NumPoolsRequest.typeUrl;
  },
  encode(
    _: NumPoolsRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): NumPoolsRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNumPoolsRequest();
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
  fromPartial(_: Partial<NumPoolsRequest>): NumPoolsRequest {
    const message = createBaseNumPoolsRequest();
    return message;
  },
  fromAmino(_: NumPoolsRequestAmino): NumPoolsRequest {
    const message = createBaseNumPoolsRequest();
    return message;
  },
  toAmino(_: NumPoolsRequest): NumPoolsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: NumPoolsRequestAminoMsg): NumPoolsRequest {
    return NumPoolsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: NumPoolsRequestProtoMsg): NumPoolsRequest {
    return NumPoolsRequest.decode(message.value);
  },
  toProto(message: NumPoolsRequest): Uint8Array {
    return NumPoolsRequest.encode(message).finish();
  },
  toProtoMsg(message: NumPoolsRequest): NumPoolsRequestProtoMsg {
    return {
      typeUrl: '/symphony.poolmanager.v1beta1.NumPoolsRequest',
      value: NumPoolsRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(NumPoolsRequest.typeUrl, NumPoolsRequest);
function createBaseNumPoolsResponse(): NumPoolsResponse {
  return {
    numPools: BigInt(0),
  };
}
/**
 * @name NumPoolsResponse
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.NumPoolsResponse
 */
export const NumPoolsResponse = {
  typeUrl: '/symphony.poolmanager.v1beta1.NumPoolsResponse',
  is(o: any): o is NumPoolsResponse {
    return (
      o &&
      (o.$typeUrl === NumPoolsResponse.typeUrl ||
        typeof o.numPools === 'bigint')
    );
  },
  isSDK(o: any): o is NumPoolsResponseSDKType {
    return (
      o &&
      (o.$typeUrl === NumPoolsResponse.typeUrl ||
        typeof o.num_pools === 'bigint')
    );
  },
  isAmino(o: any): o is NumPoolsResponseAmino {
    return (
      o &&
      (o.$typeUrl === NumPoolsResponse.typeUrl ||
        typeof o.num_pools === 'bigint')
    );
  },
  encode(
    message: NumPoolsResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.numPools !== BigInt(0)) {
      writer.uint32(8).uint64(message.numPools);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): NumPoolsResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNumPoolsResponse();
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
  fromPartial(object: Partial<NumPoolsResponse>): NumPoolsResponse {
    const message = createBaseNumPoolsResponse();
    message.numPools =
      object.numPools !== undefined && object.numPools !== null
        ? BigInt(object.numPools.toString())
        : BigInt(0);
    return message;
  },
  fromAmino(object: NumPoolsResponseAmino): NumPoolsResponse {
    const message = createBaseNumPoolsResponse();
    if (object.num_pools !== undefined && object.num_pools !== null) {
      message.numPools = BigInt(object.num_pools);
    }
    return message;
  },
  toAmino(message: NumPoolsResponse): NumPoolsResponseAmino {
    const obj: any = {};
    obj.num_pools =
      message.numPools !== BigInt(0) ? message.numPools?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: NumPoolsResponseAminoMsg): NumPoolsResponse {
    return NumPoolsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: NumPoolsResponseProtoMsg): NumPoolsResponse {
    return NumPoolsResponse.decode(message.value);
  },
  toProto(message: NumPoolsResponse): Uint8Array {
    return NumPoolsResponse.encode(message).finish();
  },
  toProtoMsg(message: NumPoolsResponse): NumPoolsResponseProtoMsg {
    return {
      typeUrl: '/symphony.poolmanager.v1beta1.NumPoolsResponse',
      value: NumPoolsResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(NumPoolsResponse.typeUrl, NumPoolsResponse);
function createBasePoolRequest(): PoolRequest {
  return {
    poolId: BigInt(0),
  };
}
/**
 * =============================== Pool
 * @name PoolRequest
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.PoolRequest
 */
export const PoolRequest = {
  typeUrl: '/symphony.poolmanager.v1beta1.PoolRequest',
  is(o: any): o is PoolRequest {
    return (
      o && (o.$typeUrl === PoolRequest.typeUrl || typeof o.poolId === 'bigint')
    );
  },
  isSDK(o: any): o is PoolRequestSDKType {
    return (
      o && (o.$typeUrl === PoolRequest.typeUrl || typeof o.pool_id === 'bigint')
    );
  },
  isAmino(o: any): o is PoolRequestAmino {
    return (
      o && (o.$typeUrl === PoolRequest.typeUrl || typeof o.pool_id === 'bigint')
    );
  },
  encode(
    message: PoolRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PoolRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolRequest();
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
  fromPartial(object: Partial<PoolRequest>): PoolRequest {
    const message = createBasePoolRequest();
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? BigInt(object.poolId.toString())
        : BigInt(0);
    return message;
  },
  fromAmino(object: PoolRequestAmino): PoolRequest {
    const message = createBasePoolRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(message: PoolRequest): PoolRequestAmino {
    const obj: any = {};
    obj.pool_id =
      message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: PoolRequestAminoMsg): PoolRequest {
    return PoolRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: PoolRequestProtoMsg): PoolRequest {
    return PoolRequest.decode(message.value);
  },
  toProto(message: PoolRequest): Uint8Array {
    return PoolRequest.encode(message).finish();
  },
  toProtoMsg(message: PoolRequest): PoolRequestProtoMsg {
    return {
      typeUrl: '/symphony.poolmanager.v1beta1.PoolRequest',
      value: PoolRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(PoolRequest.typeUrl, PoolRequest);
function createBasePoolResponse(): PoolResponse {
  return {
    pool: undefined,
  };
}
/**
 * @name PoolResponse
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.PoolResponse
 */
export const PoolResponse = {
  typeUrl: '/symphony.poolmanager.v1beta1.PoolResponse',
  is(o: any): o is PoolResponse {
    return o && o.$typeUrl === PoolResponse.typeUrl;
  },
  isSDK(o: any): o is PoolResponseSDKType {
    return o && o.$typeUrl === PoolResponse.typeUrl;
  },
  isAmino(o: any): o is PoolResponseAmino {
    return o && o.$typeUrl === PoolResponse.typeUrl;
  },
  encode(
    message: PoolResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.pool !== undefined) {
      Any.encode(
        GlobalDecoderRegistry.wrapAny(message.pool),
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PoolResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolResponse();
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
  fromPartial(object: Partial<PoolResponse>): PoolResponse {
    const message = createBasePoolResponse();
    message.pool =
      object.pool !== undefined && object.pool !== null
        ? GlobalDecoderRegistry.fromPartial(object.pool)
        : undefined;
    return message;
  },
  fromAmino(object: PoolResponseAmino): PoolResponse {
    const message = createBasePoolResponse();
    if (object.pool !== undefined && object.pool !== null) {
      message.pool = GlobalDecoderRegistry.fromAminoMsg(object.pool);
    }
    return message;
  },
  toAmino(message: PoolResponse): PoolResponseAmino {
    const obj: any = {};
    obj.pool = message.pool
      ? GlobalDecoderRegistry.toAminoMsg(message.pool)
      : undefined;
    return obj;
  },
  fromAminoMsg(object: PoolResponseAminoMsg): PoolResponse {
    return PoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: PoolResponseProtoMsg): PoolResponse {
    return PoolResponse.decode(message.value);
  },
  toProto(message: PoolResponse): Uint8Array {
    return PoolResponse.encode(message).finish();
  },
  toProtoMsg(message: PoolResponse): PoolResponseProtoMsg {
    return {
      typeUrl: '/symphony.poolmanager.v1beta1.PoolResponse',
      value: PoolResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(PoolResponse.typeUrl, PoolResponse);
function createBaseAllPoolsRequest(): AllPoolsRequest {
  return {};
}
/**
 * =============================== AllPools
 * @name AllPoolsRequest
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.AllPoolsRequest
 */
export const AllPoolsRequest = {
  typeUrl: '/symphony.poolmanager.v1beta1.AllPoolsRequest',
  is(o: any): o is AllPoolsRequest {
    return o && o.$typeUrl === AllPoolsRequest.typeUrl;
  },
  isSDK(o: any): o is AllPoolsRequestSDKType {
    return o && o.$typeUrl === AllPoolsRequest.typeUrl;
  },
  isAmino(o: any): o is AllPoolsRequestAmino {
    return o && o.$typeUrl === AllPoolsRequest.typeUrl;
  },
  encode(
    _: AllPoolsRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AllPoolsRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllPoolsRequest();
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
  fromPartial(_: Partial<AllPoolsRequest>): AllPoolsRequest {
    const message = createBaseAllPoolsRequest();
    return message;
  },
  fromAmino(_: AllPoolsRequestAmino): AllPoolsRequest {
    const message = createBaseAllPoolsRequest();
    return message;
  },
  toAmino(_: AllPoolsRequest): AllPoolsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: AllPoolsRequestAminoMsg): AllPoolsRequest {
    return AllPoolsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: AllPoolsRequestProtoMsg): AllPoolsRequest {
    return AllPoolsRequest.decode(message.value);
  },
  toProto(message: AllPoolsRequest): Uint8Array {
    return AllPoolsRequest.encode(message).finish();
  },
  toProtoMsg(message: AllPoolsRequest): AllPoolsRequestProtoMsg {
    return {
      typeUrl: '/symphony.poolmanager.v1beta1.AllPoolsRequest',
      value: AllPoolsRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(AllPoolsRequest.typeUrl, AllPoolsRequest);
function createBaseAllPoolsResponse(): AllPoolsResponse {
  return {
    pools: [],
  };
}
/**
 * @name AllPoolsResponse
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.AllPoolsResponse
 */
export const AllPoolsResponse = {
  typeUrl: '/symphony.poolmanager.v1beta1.AllPoolsResponse',
  is(o: any): o is AllPoolsResponse {
    return (
      o &&
      (o.$typeUrl === AllPoolsResponse.typeUrl ||
        (Array.isArray(o.pools) &&
          (!o.pools.length ||
            Pool1.is(o.pools[0]) ||
            CosmWasmPool.is(o.pools[0]) ||
            Pool2.is(o.pools[0]) ||
            Pool3.is(o.pools[0]) ||
            Any.is(o.pools[0]))))
    );
  },
  isSDK(o: any): o is AllPoolsResponseSDKType {
    return (
      o &&
      (o.$typeUrl === AllPoolsResponse.typeUrl ||
        (Array.isArray(o.pools) &&
          (!o.pools.length ||
            Pool1.isSDK(o.pools[0]) ||
            CosmWasmPool.isSDK(o.pools[0]) ||
            Pool2.isSDK(o.pools[0]) ||
            Pool3.isSDK(o.pools[0]) ||
            Any.isSDK(o.pools[0]))))
    );
  },
  isAmino(o: any): o is AllPoolsResponseAmino {
    return (
      o &&
      (o.$typeUrl === AllPoolsResponse.typeUrl ||
        (Array.isArray(o.pools) &&
          (!o.pools.length ||
            Pool1.isAmino(o.pools[0]) ||
            CosmWasmPool.isAmino(o.pools[0]) ||
            Pool2.isAmino(o.pools[0]) ||
            Pool3.isAmino(o.pools[0]) ||
            Any.isAmino(o.pools[0]))))
    );
  },
  encode(
    message: AllPoolsResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.pools) {
      Any.encode(
        GlobalDecoderRegistry.wrapAny(v!),
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AllPoolsResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllPoolsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pools.push(GlobalDecoderRegistry.unwrapAny(reader));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<AllPoolsResponse>): AllPoolsResponse {
    const message = createBaseAllPoolsResponse();
    message.pools =
      object.pools?.map(e => GlobalDecoderRegistry.fromPartial(e) as any) || [];
    return message;
  },
  fromAmino(object: AllPoolsResponseAmino): AllPoolsResponse {
    const message = createBaseAllPoolsResponse();
    message.pools =
      object.pools?.map(e => GlobalDecoderRegistry.fromAminoMsg(e)) || [];
    return message;
  },
  toAmino(message: AllPoolsResponse): AllPoolsResponseAmino {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map(e =>
        e ? GlobalDecoderRegistry.toAminoMsg(e) : undefined,
      );
    } else {
      obj.pools = message.pools;
    }
    return obj;
  },
  fromAminoMsg(object: AllPoolsResponseAminoMsg): AllPoolsResponse {
    return AllPoolsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: AllPoolsResponseProtoMsg): AllPoolsResponse {
    return AllPoolsResponse.decode(message.value);
  },
  toProto(message: AllPoolsResponse): Uint8Array {
    return AllPoolsResponse.encode(message).finish();
  },
  toProtoMsg(message: AllPoolsResponse): AllPoolsResponseProtoMsg {
    return {
      typeUrl: '/symphony.poolmanager.v1beta1.AllPoolsResponse',
      value: AllPoolsResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(AllPoolsResponse.typeUrl, AllPoolsResponse);
function createBaseListPoolsByDenomRequest(): ListPoolsByDenomRequest {
  return {
    denom: '',
  };
}
/**
 * =======================================================
 * ListPoolsByDenomRequest
 * @name ListPoolsByDenomRequest
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.ListPoolsByDenomRequest
 */
export const ListPoolsByDenomRequest = {
  typeUrl: '/symphony.poolmanager.v1beta1.ListPoolsByDenomRequest',
  is(o: any): o is ListPoolsByDenomRequest {
    return (
      o &&
      (o.$typeUrl === ListPoolsByDenomRequest.typeUrl ||
        typeof o.denom === 'string')
    );
  },
  isSDK(o: any): o is ListPoolsByDenomRequestSDKType {
    return (
      o &&
      (o.$typeUrl === ListPoolsByDenomRequest.typeUrl ||
        typeof o.denom === 'string')
    );
  },
  isAmino(o: any): o is ListPoolsByDenomRequestAmino {
    return (
      o &&
      (o.$typeUrl === ListPoolsByDenomRequest.typeUrl ||
        typeof o.denom === 'string')
    );
  },
  encode(
    message: ListPoolsByDenomRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.denom !== '') {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): ListPoolsByDenomRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListPoolsByDenomRequest();
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
  fromPartial(
    object: Partial<ListPoolsByDenomRequest>,
  ): ListPoolsByDenomRequest {
    const message = createBaseListPoolsByDenomRequest();
    message.denom = object.denom ?? '';
    return message;
  },
  fromAmino(object: ListPoolsByDenomRequestAmino): ListPoolsByDenomRequest {
    const message = createBaseListPoolsByDenomRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: ListPoolsByDenomRequest): ListPoolsByDenomRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === '' ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(
    object: ListPoolsByDenomRequestAminoMsg,
  ): ListPoolsByDenomRequest {
    return ListPoolsByDenomRequest.fromAmino(object.value);
  },
  fromProtoMsg(
    message: ListPoolsByDenomRequestProtoMsg,
  ): ListPoolsByDenomRequest {
    return ListPoolsByDenomRequest.decode(message.value);
  },
  toProto(message: ListPoolsByDenomRequest): Uint8Array {
    return ListPoolsByDenomRequest.encode(message).finish();
  },
  toProtoMsg(
    message: ListPoolsByDenomRequest,
  ): ListPoolsByDenomRequestProtoMsg {
    return {
      typeUrl: '/symphony.poolmanager.v1beta1.ListPoolsByDenomRequest',
      value: ListPoolsByDenomRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  ListPoolsByDenomRequest.typeUrl,
  ListPoolsByDenomRequest,
);
function createBaseListPoolsByDenomResponse(): ListPoolsByDenomResponse {
  return {
    pools: [],
  };
}
/**
 * @name ListPoolsByDenomResponse
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.ListPoolsByDenomResponse
 */
export const ListPoolsByDenomResponse = {
  typeUrl: '/symphony.poolmanager.v1beta1.ListPoolsByDenomResponse',
  is(o: any): o is ListPoolsByDenomResponse {
    return (
      o &&
      (o.$typeUrl === ListPoolsByDenomResponse.typeUrl ||
        (Array.isArray(o.pools) &&
          (!o.pools.length ||
            Pool1.is(o.pools[0]) ||
            CosmWasmPool.is(o.pools[0]) ||
            Pool2.is(o.pools[0]) ||
            Pool3.is(o.pools[0]) ||
            Any.is(o.pools[0]))))
    );
  },
  isSDK(o: any): o is ListPoolsByDenomResponseSDKType {
    return (
      o &&
      (o.$typeUrl === ListPoolsByDenomResponse.typeUrl ||
        (Array.isArray(o.pools) &&
          (!o.pools.length ||
            Pool1.isSDK(o.pools[0]) ||
            CosmWasmPool.isSDK(o.pools[0]) ||
            Pool2.isSDK(o.pools[0]) ||
            Pool3.isSDK(o.pools[0]) ||
            Any.isSDK(o.pools[0]))))
    );
  },
  isAmino(o: any): o is ListPoolsByDenomResponseAmino {
    return (
      o &&
      (o.$typeUrl === ListPoolsByDenomResponse.typeUrl ||
        (Array.isArray(o.pools) &&
          (!o.pools.length ||
            Pool1.isAmino(o.pools[0]) ||
            CosmWasmPool.isAmino(o.pools[0]) ||
            Pool2.isAmino(o.pools[0]) ||
            Pool3.isAmino(o.pools[0]) ||
            Any.isAmino(o.pools[0]))))
    );
  },
  encode(
    message: ListPoolsByDenomResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.pools) {
      Any.encode(
        GlobalDecoderRegistry.wrapAny(v!),
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): ListPoolsByDenomResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListPoolsByDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pools.push(GlobalDecoderRegistry.unwrapAny(reader));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(
    object: Partial<ListPoolsByDenomResponse>,
  ): ListPoolsByDenomResponse {
    const message = createBaseListPoolsByDenomResponse();
    message.pools =
      object.pools?.map(e => GlobalDecoderRegistry.fromPartial(e) as any) || [];
    return message;
  },
  fromAmino(object: ListPoolsByDenomResponseAmino): ListPoolsByDenomResponse {
    const message = createBaseListPoolsByDenomResponse();
    message.pools =
      object.pools?.map(e => GlobalDecoderRegistry.fromAminoMsg(e)) || [];
    return message;
  },
  toAmino(message: ListPoolsByDenomResponse): ListPoolsByDenomResponseAmino {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map(e =>
        e ? GlobalDecoderRegistry.toAminoMsg(e) : undefined,
      );
    } else {
      obj.pools = message.pools;
    }
    return obj;
  },
  fromAminoMsg(
    object: ListPoolsByDenomResponseAminoMsg,
  ): ListPoolsByDenomResponse {
    return ListPoolsByDenomResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: ListPoolsByDenomResponseProtoMsg,
  ): ListPoolsByDenomResponse {
    return ListPoolsByDenomResponse.decode(message.value);
  },
  toProto(message: ListPoolsByDenomResponse): Uint8Array {
    return ListPoolsByDenomResponse.encode(message).finish();
  },
  toProtoMsg(
    message: ListPoolsByDenomResponse,
  ): ListPoolsByDenomResponseProtoMsg {
    return {
      typeUrl: '/symphony.poolmanager.v1beta1.ListPoolsByDenomResponse',
      value: ListPoolsByDenomResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  ListPoolsByDenomResponse.typeUrl,
  ListPoolsByDenomResponse,
);
function createBaseSpotPriceRequest(): SpotPriceRequest {
  return {
    poolId: BigInt(0),
    baseAssetDenom: '',
    quoteAssetDenom: '',
  };
}
/**
 * ==========================================================
 * SpotPriceRequest defines the gRPC request structure for a SpotPrice
 * query.
 * @name SpotPriceRequest
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.SpotPriceRequest
 */
export const SpotPriceRequest = {
  typeUrl: '/symphony.poolmanager.v1beta1.SpotPriceRequest',
  is(o: any): o is SpotPriceRequest {
    return (
      o &&
      (o.$typeUrl === SpotPriceRequest.typeUrl ||
        (typeof o.poolId === 'bigint' &&
          typeof o.baseAssetDenom === 'string' &&
          typeof o.quoteAssetDenom === 'string'))
    );
  },
  isSDK(o: any): o is SpotPriceRequestSDKType {
    return (
      o &&
      (o.$typeUrl === SpotPriceRequest.typeUrl ||
        (typeof o.pool_id === 'bigint' &&
          typeof o.base_asset_denom === 'string' &&
          typeof o.quote_asset_denom === 'string'))
    );
  },
  isAmino(o: any): o is SpotPriceRequestAmino {
    return (
      o &&
      (o.$typeUrl === SpotPriceRequest.typeUrl ||
        (typeof o.pool_id === 'bigint' &&
          typeof o.base_asset_denom === 'string' &&
          typeof o.quote_asset_denom === 'string'))
    );
  },
  encode(
    message: SpotPriceRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.baseAssetDenom !== '') {
      writer.uint32(18).string(message.baseAssetDenom);
    }
    if (message.quoteAssetDenom !== '') {
      writer.uint32(26).string(message.quoteAssetDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SpotPriceRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpotPriceRequest();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<SpotPriceRequest>): SpotPriceRequest {
    const message = createBaseSpotPriceRequest();
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? BigInt(object.poolId.toString())
        : BigInt(0);
    message.baseAssetDenom = object.baseAssetDenom ?? '';
    message.quoteAssetDenom = object.quoteAssetDenom ?? '';
    return message;
  },
  fromAmino(object: SpotPriceRequestAmino): SpotPriceRequest {
    const message = createBaseSpotPriceRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (
      object.base_asset_denom !== undefined &&
      object.base_asset_denom !== null
    ) {
      message.baseAssetDenom = object.base_asset_denom;
    }
    if (
      object.quote_asset_denom !== undefined &&
      object.quote_asset_denom !== null
    ) {
      message.quoteAssetDenom = object.quote_asset_denom;
    }
    return message;
  },
  toAmino(message: SpotPriceRequest): SpotPriceRequestAmino {
    const obj: any = {};
    obj.pool_id =
      message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    obj.base_asset_denom =
      message.baseAssetDenom === '' ? undefined : message.baseAssetDenom;
    obj.quote_asset_denom =
      message.quoteAssetDenom === '' ? undefined : message.quoteAssetDenom;
    return obj;
  },
  fromAminoMsg(object: SpotPriceRequestAminoMsg): SpotPriceRequest {
    return SpotPriceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: SpotPriceRequestProtoMsg): SpotPriceRequest {
    return SpotPriceRequest.decode(message.value);
  },
  toProto(message: SpotPriceRequest): Uint8Array {
    return SpotPriceRequest.encode(message).finish();
  },
  toProtoMsg(message: SpotPriceRequest): SpotPriceRequestProtoMsg {
    return {
      typeUrl: '/symphony.poolmanager.v1beta1.SpotPriceRequest',
      value: SpotPriceRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(SpotPriceRequest.typeUrl, SpotPriceRequest);
function createBaseSpotPriceResponse(): SpotPriceResponse {
  return {
    spotPrice: '',
  };
}
/**
 * SpotPriceResponse defines the gRPC response structure for a SpotPrice
 * query.
 * @name SpotPriceResponse
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.SpotPriceResponse
 */
export const SpotPriceResponse = {
  typeUrl: '/symphony.poolmanager.v1beta1.SpotPriceResponse',
  is(o: any): o is SpotPriceResponse {
    return (
      o &&
      (o.$typeUrl === SpotPriceResponse.typeUrl ||
        typeof o.spotPrice === 'string')
    );
  },
  isSDK(o: any): o is SpotPriceResponseSDKType {
    return (
      o &&
      (o.$typeUrl === SpotPriceResponse.typeUrl ||
        typeof o.spot_price === 'string')
    );
  },
  isAmino(o: any): o is SpotPriceResponseAmino {
    return (
      o &&
      (o.$typeUrl === SpotPriceResponse.typeUrl ||
        typeof o.spot_price === 'string')
    );
  },
  encode(
    message: SpotPriceResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.spotPrice !== '') {
      writer.uint32(10).string(message.spotPrice);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SpotPriceResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpotPriceResponse();
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
  fromPartial(object: Partial<SpotPriceResponse>): SpotPriceResponse {
    const message = createBaseSpotPriceResponse();
    message.spotPrice = object.spotPrice ?? '';
    return message;
  },
  fromAmino(object: SpotPriceResponseAmino): SpotPriceResponse {
    const message = createBaseSpotPriceResponse();
    if (object.spot_price !== undefined && object.spot_price !== null) {
      message.spotPrice = object.spot_price;
    }
    return message;
  },
  toAmino(message: SpotPriceResponse): SpotPriceResponseAmino {
    const obj: any = {};
    obj.spot_price = message.spotPrice === '' ? undefined : message.spotPrice;
    return obj;
  },
  fromAminoMsg(object: SpotPriceResponseAminoMsg): SpotPriceResponse {
    return SpotPriceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: SpotPriceResponseProtoMsg): SpotPriceResponse {
    return SpotPriceResponse.decode(message.value);
  },
  toProto(message: SpotPriceResponse): Uint8Array {
    return SpotPriceResponse.encode(message).finish();
  },
  toProtoMsg(message: SpotPriceResponse): SpotPriceResponseProtoMsg {
    return {
      typeUrl: '/symphony.poolmanager.v1beta1.SpotPriceResponse',
      value: SpotPriceResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(SpotPriceResponse.typeUrl, SpotPriceResponse);
function createBaseTotalPoolLiquidityRequest(): TotalPoolLiquidityRequest {
  return {
    poolId: BigInt(0),
  };
}
/**
 * =============================== TotalPoolLiquidity
 * @name TotalPoolLiquidityRequest
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.TotalPoolLiquidityRequest
 */
export const TotalPoolLiquidityRequest = {
  typeUrl: '/symphony.poolmanager.v1beta1.TotalPoolLiquidityRequest',
  is(o: any): o is TotalPoolLiquidityRequest {
    return (
      o &&
      (o.$typeUrl === TotalPoolLiquidityRequest.typeUrl ||
        typeof o.poolId === 'bigint')
    );
  },
  isSDK(o: any): o is TotalPoolLiquidityRequestSDKType {
    return (
      o &&
      (o.$typeUrl === TotalPoolLiquidityRequest.typeUrl ||
        typeof o.pool_id === 'bigint')
    );
  },
  isAmino(o: any): o is TotalPoolLiquidityRequestAmino {
    return (
      o &&
      (o.$typeUrl === TotalPoolLiquidityRequest.typeUrl ||
        typeof o.pool_id === 'bigint')
    );
  },
  encode(
    message: TotalPoolLiquidityRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): TotalPoolLiquidityRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTotalPoolLiquidityRequest();
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
  fromPartial(
    object: Partial<TotalPoolLiquidityRequest>,
  ): TotalPoolLiquidityRequest {
    const message = createBaseTotalPoolLiquidityRequest();
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? BigInt(object.poolId.toString())
        : BigInt(0);
    return message;
  },
  fromAmino(object: TotalPoolLiquidityRequestAmino): TotalPoolLiquidityRequest {
    const message = createBaseTotalPoolLiquidityRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(message: TotalPoolLiquidityRequest): TotalPoolLiquidityRequestAmino {
    const obj: any = {};
    obj.pool_id =
      message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(
    object: TotalPoolLiquidityRequestAminoMsg,
  ): TotalPoolLiquidityRequest {
    return TotalPoolLiquidityRequest.fromAmino(object.value);
  },
  fromProtoMsg(
    message: TotalPoolLiquidityRequestProtoMsg,
  ): TotalPoolLiquidityRequest {
    return TotalPoolLiquidityRequest.decode(message.value);
  },
  toProto(message: TotalPoolLiquidityRequest): Uint8Array {
    return TotalPoolLiquidityRequest.encode(message).finish();
  },
  toProtoMsg(
    message: TotalPoolLiquidityRequest,
  ): TotalPoolLiquidityRequestProtoMsg {
    return {
      typeUrl: '/symphony.poolmanager.v1beta1.TotalPoolLiquidityRequest',
      value: TotalPoolLiquidityRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  TotalPoolLiquidityRequest.typeUrl,
  TotalPoolLiquidityRequest,
);
function createBaseTotalPoolLiquidityResponse(): TotalPoolLiquidityResponse {
  return {
    liquidity: [],
  };
}
/**
 * @name TotalPoolLiquidityResponse
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.TotalPoolLiquidityResponse
 */
export const TotalPoolLiquidityResponse = {
  typeUrl: '/symphony.poolmanager.v1beta1.TotalPoolLiquidityResponse',
  is(o: any): o is TotalPoolLiquidityResponse {
    return (
      o &&
      (o.$typeUrl === TotalPoolLiquidityResponse.typeUrl ||
        (Array.isArray(o.liquidity) &&
          (!o.liquidity.length || Coin.is(o.liquidity[0]))))
    );
  },
  isSDK(o: any): o is TotalPoolLiquidityResponseSDKType {
    return (
      o &&
      (o.$typeUrl === TotalPoolLiquidityResponse.typeUrl ||
        (Array.isArray(o.liquidity) &&
          (!o.liquidity.length || Coin.isSDK(o.liquidity[0]))))
    );
  },
  isAmino(o: any): o is TotalPoolLiquidityResponseAmino {
    return (
      o &&
      (o.$typeUrl === TotalPoolLiquidityResponse.typeUrl ||
        (Array.isArray(o.liquidity) &&
          (!o.liquidity.length || Coin.isAmino(o.liquidity[0]))))
    );
  },
  encode(
    message: TotalPoolLiquidityResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.liquidity) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): TotalPoolLiquidityResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTotalPoolLiquidityResponse();
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
  fromPartial(
    object: Partial<TotalPoolLiquidityResponse>,
  ): TotalPoolLiquidityResponse {
    const message = createBaseTotalPoolLiquidityResponse();
    message.liquidity = object.liquidity?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(
    object: TotalPoolLiquidityResponseAmino,
  ): TotalPoolLiquidityResponse {
    const message = createBaseTotalPoolLiquidityResponse();
    message.liquidity = object.liquidity?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(
    message: TotalPoolLiquidityResponse,
  ): TotalPoolLiquidityResponseAmino {
    const obj: any = {};
    if (message.liquidity) {
      obj.liquidity = message.liquidity.map(e =>
        e ? Coin.toAmino(e) : undefined,
      );
    } else {
      obj.liquidity = message.liquidity;
    }
    return obj;
  },
  fromAminoMsg(
    object: TotalPoolLiquidityResponseAminoMsg,
  ): TotalPoolLiquidityResponse {
    return TotalPoolLiquidityResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: TotalPoolLiquidityResponseProtoMsg,
  ): TotalPoolLiquidityResponse {
    return TotalPoolLiquidityResponse.decode(message.value);
  },
  toProto(message: TotalPoolLiquidityResponse): Uint8Array {
    return TotalPoolLiquidityResponse.encode(message).finish();
  },
  toProtoMsg(
    message: TotalPoolLiquidityResponse,
  ): TotalPoolLiquidityResponseProtoMsg {
    return {
      typeUrl: '/symphony.poolmanager.v1beta1.TotalPoolLiquidityResponse',
      value: TotalPoolLiquidityResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  TotalPoolLiquidityResponse.typeUrl,
  TotalPoolLiquidityResponse,
);
function createBaseTotalLiquidityRequest(): TotalLiquidityRequest {
  return {};
}
/**
 * =============================== TotalLiquidity
 * @name TotalLiquidityRequest
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.TotalLiquidityRequest
 */
export const TotalLiquidityRequest = {
  typeUrl: '/symphony.poolmanager.v1beta1.TotalLiquidityRequest',
  is(o: any): o is TotalLiquidityRequest {
    return o && o.$typeUrl === TotalLiquidityRequest.typeUrl;
  },
  isSDK(o: any): o is TotalLiquidityRequestSDKType {
    return o && o.$typeUrl === TotalLiquidityRequest.typeUrl;
  },
  isAmino(o: any): o is TotalLiquidityRequestAmino {
    return o && o.$typeUrl === TotalLiquidityRequest.typeUrl;
  },
  encode(
    _: TotalLiquidityRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): TotalLiquidityRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTotalLiquidityRequest();
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
  fromPartial(_: Partial<TotalLiquidityRequest>): TotalLiquidityRequest {
    const message = createBaseTotalLiquidityRequest();
    return message;
  },
  fromAmino(_: TotalLiquidityRequestAmino): TotalLiquidityRequest {
    const message = createBaseTotalLiquidityRequest();
    return message;
  },
  toAmino(_: TotalLiquidityRequest): TotalLiquidityRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: TotalLiquidityRequestAminoMsg): TotalLiquidityRequest {
    return TotalLiquidityRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: TotalLiquidityRequestProtoMsg): TotalLiquidityRequest {
    return TotalLiquidityRequest.decode(message.value);
  },
  toProto(message: TotalLiquidityRequest): Uint8Array {
    return TotalLiquidityRequest.encode(message).finish();
  },
  toProtoMsg(message: TotalLiquidityRequest): TotalLiquidityRequestProtoMsg {
    return {
      typeUrl: '/symphony.poolmanager.v1beta1.TotalLiquidityRequest',
      value: TotalLiquidityRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  TotalLiquidityRequest.typeUrl,
  TotalLiquidityRequest,
);
function createBaseTotalLiquidityResponse(): TotalLiquidityResponse {
  return {
    liquidity: [],
  };
}
/**
 * @name TotalLiquidityResponse
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.TotalLiquidityResponse
 */
export const TotalLiquidityResponse = {
  typeUrl: '/symphony.poolmanager.v1beta1.TotalLiquidityResponse',
  is(o: any): o is TotalLiquidityResponse {
    return (
      o &&
      (o.$typeUrl === TotalLiquidityResponse.typeUrl ||
        (Array.isArray(o.liquidity) &&
          (!o.liquidity.length || Coin.is(o.liquidity[0]))))
    );
  },
  isSDK(o: any): o is TotalLiquidityResponseSDKType {
    return (
      o &&
      (o.$typeUrl === TotalLiquidityResponse.typeUrl ||
        (Array.isArray(o.liquidity) &&
          (!o.liquidity.length || Coin.isSDK(o.liquidity[0]))))
    );
  },
  isAmino(o: any): o is TotalLiquidityResponseAmino {
    return (
      o &&
      (o.$typeUrl === TotalLiquidityResponse.typeUrl ||
        (Array.isArray(o.liquidity) &&
          (!o.liquidity.length || Coin.isAmino(o.liquidity[0]))))
    );
  },
  encode(
    message: TotalLiquidityResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.liquidity) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): TotalLiquidityResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTotalLiquidityResponse();
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
  fromPartial(object: Partial<TotalLiquidityResponse>): TotalLiquidityResponse {
    const message = createBaseTotalLiquidityResponse();
    message.liquidity = object.liquidity?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: TotalLiquidityResponseAmino): TotalLiquidityResponse {
    const message = createBaseTotalLiquidityResponse();
    message.liquidity = object.liquidity?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: TotalLiquidityResponse): TotalLiquidityResponseAmino {
    const obj: any = {};
    if (message.liquidity) {
      obj.liquidity = message.liquidity.map(e =>
        e ? Coin.toAmino(e) : undefined,
      );
    } else {
      obj.liquidity = message.liquidity;
    }
    return obj;
  },
  fromAminoMsg(object: TotalLiquidityResponseAminoMsg): TotalLiquidityResponse {
    return TotalLiquidityResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: TotalLiquidityResponseProtoMsg,
  ): TotalLiquidityResponse {
    return TotalLiquidityResponse.decode(message.value);
  },
  toProto(message: TotalLiquidityResponse): Uint8Array {
    return TotalLiquidityResponse.encode(message).finish();
  },
  toProtoMsg(message: TotalLiquidityResponse): TotalLiquidityResponseProtoMsg {
    return {
      typeUrl: '/symphony.poolmanager.v1beta1.TotalLiquidityResponse',
      value: TotalLiquidityResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  TotalLiquidityResponse.typeUrl,
  TotalLiquidityResponse,
);
function createBaseTotalVolumeForPoolRequest(): TotalVolumeForPoolRequest {
  return {
    poolId: BigInt(0),
  };
}
/**
 * =============================== TotalVolumeForPool
 * @name TotalVolumeForPoolRequest
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.TotalVolumeForPoolRequest
 */
export const TotalVolumeForPoolRequest = {
  typeUrl: '/symphony.poolmanager.v1beta1.TotalVolumeForPoolRequest',
  is(o: any): o is TotalVolumeForPoolRequest {
    return (
      o &&
      (o.$typeUrl === TotalVolumeForPoolRequest.typeUrl ||
        typeof o.poolId === 'bigint')
    );
  },
  isSDK(o: any): o is TotalVolumeForPoolRequestSDKType {
    return (
      o &&
      (o.$typeUrl === TotalVolumeForPoolRequest.typeUrl ||
        typeof o.pool_id === 'bigint')
    );
  },
  isAmino(o: any): o is TotalVolumeForPoolRequestAmino {
    return (
      o &&
      (o.$typeUrl === TotalVolumeForPoolRequest.typeUrl ||
        typeof o.pool_id === 'bigint')
    );
  },
  encode(
    message: TotalVolumeForPoolRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): TotalVolumeForPoolRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTotalVolumeForPoolRequest();
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
  fromPartial(
    object: Partial<TotalVolumeForPoolRequest>,
  ): TotalVolumeForPoolRequest {
    const message = createBaseTotalVolumeForPoolRequest();
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? BigInt(object.poolId.toString())
        : BigInt(0);
    return message;
  },
  fromAmino(object: TotalVolumeForPoolRequestAmino): TotalVolumeForPoolRequest {
    const message = createBaseTotalVolumeForPoolRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(message: TotalVolumeForPoolRequest): TotalVolumeForPoolRequestAmino {
    const obj: any = {};
    obj.pool_id =
      message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(
    object: TotalVolumeForPoolRequestAminoMsg,
  ): TotalVolumeForPoolRequest {
    return TotalVolumeForPoolRequest.fromAmino(object.value);
  },
  fromProtoMsg(
    message: TotalVolumeForPoolRequestProtoMsg,
  ): TotalVolumeForPoolRequest {
    return TotalVolumeForPoolRequest.decode(message.value);
  },
  toProto(message: TotalVolumeForPoolRequest): Uint8Array {
    return TotalVolumeForPoolRequest.encode(message).finish();
  },
  toProtoMsg(
    message: TotalVolumeForPoolRequest,
  ): TotalVolumeForPoolRequestProtoMsg {
    return {
      typeUrl: '/symphony.poolmanager.v1beta1.TotalVolumeForPoolRequest',
      value: TotalVolumeForPoolRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  TotalVolumeForPoolRequest.typeUrl,
  TotalVolumeForPoolRequest,
);
function createBaseTotalVolumeForPoolResponse(): TotalVolumeForPoolResponse {
  return {
    volume: [],
  };
}
/**
 * @name TotalVolumeForPoolResponse
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.TotalVolumeForPoolResponse
 */
export const TotalVolumeForPoolResponse = {
  typeUrl: '/symphony.poolmanager.v1beta1.TotalVolumeForPoolResponse',
  is(o: any): o is TotalVolumeForPoolResponse {
    return (
      o &&
      (o.$typeUrl === TotalVolumeForPoolResponse.typeUrl ||
        (Array.isArray(o.volume) && (!o.volume.length || Coin.is(o.volume[0]))))
    );
  },
  isSDK(o: any): o is TotalVolumeForPoolResponseSDKType {
    return (
      o &&
      (o.$typeUrl === TotalVolumeForPoolResponse.typeUrl ||
        (Array.isArray(o.volume) &&
          (!o.volume.length || Coin.isSDK(o.volume[0]))))
    );
  },
  isAmino(o: any): o is TotalVolumeForPoolResponseAmino {
    return (
      o &&
      (o.$typeUrl === TotalVolumeForPoolResponse.typeUrl ||
        (Array.isArray(o.volume) &&
          (!o.volume.length || Coin.isAmino(o.volume[0]))))
    );
  },
  encode(
    message: TotalVolumeForPoolResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.volume) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): TotalVolumeForPoolResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTotalVolumeForPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.volume.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(
    object: Partial<TotalVolumeForPoolResponse>,
  ): TotalVolumeForPoolResponse {
    const message = createBaseTotalVolumeForPoolResponse();
    message.volume = object.volume?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(
    object: TotalVolumeForPoolResponseAmino,
  ): TotalVolumeForPoolResponse {
    const message = createBaseTotalVolumeForPoolResponse();
    message.volume = object.volume?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(
    message: TotalVolumeForPoolResponse,
  ): TotalVolumeForPoolResponseAmino {
    const obj: any = {};
    if (message.volume) {
      obj.volume = message.volume.map(e => (e ? Coin.toAmino(e) : undefined));
    } else {
      obj.volume = message.volume;
    }
    return obj;
  },
  fromAminoMsg(
    object: TotalVolumeForPoolResponseAminoMsg,
  ): TotalVolumeForPoolResponse {
    return TotalVolumeForPoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: TotalVolumeForPoolResponseProtoMsg,
  ): TotalVolumeForPoolResponse {
    return TotalVolumeForPoolResponse.decode(message.value);
  },
  toProto(message: TotalVolumeForPoolResponse): Uint8Array {
    return TotalVolumeForPoolResponse.encode(message).finish();
  },
  toProtoMsg(
    message: TotalVolumeForPoolResponse,
  ): TotalVolumeForPoolResponseProtoMsg {
    return {
      typeUrl: '/symphony.poolmanager.v1beta1.TotalVolumeForPoolResponse',
      value: TotalVolumeForPoolResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  TotalVolumeForPoolResponse.typeUrl,
  TotalVolumeForPoolResponse,
);
function createBaseTradingPairTakerFeeRequest(): TradingPairTakerFeeRequest {
  return {
    denom0: '',
    denom1: '',
  };
}
/**
 * =============================== TradingPairTakerFee
 * @name TradingPairTakerFeeRequest
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.TradingPairTakerFeeRequest
 */
export const TradingPairTakerFeeRequest = {
  typeUrl: '/symphony.poolmanager.v1beta1.TradingPairTakerFeeRequest',
  is(o: any): o is TradingPairTakerFeeRequest {
    return (
      o &&
      (o.$typeUrl === TradingPairTakerFeeRequest.typeUrl ||
        (typeof o.denom0 === 'string' && typeof o.denom1 === 'string'))
    );
  },
  isSDK(o: any): o is TradingPairTakerFeeRequestSDKType {
    return (
      o &&
      (o.$typeUrl === TradingPairTakerFeeRequest.typeUrl ||
        (typeof o.denom_0 === 'string' && typeof o.denom_1 === 'string'))
    );
  },
  isAmino(o: any): o is TradingPairTakerFeeRequestAmino {
    return (
      o &&
      (o.$typeUrl === TradingPairTakerFeeRequest.typeUrl ||
        (typeof o.denom_0 === 'string' && typeof o.denom_1 === 'string'))
    );
  },
  encode(
    message: TradingPairTakerFeeRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.denom0 !== '') {
      writer.uint32(10).string(message.denom0);
    }
    if (message.denom1 !== '') {
      writer.uint32(18).string(message.denom1);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): TradingPairTakerFeeRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradingPairTakerFeeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom0 = reader.string();
          break;
        case 2:
          message.denom1 = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(
    object: Partial<TradingPairTakerFeeRequest>,
  ): TradingPairTakerFeeRequest {
    const message = createBaseTradingPairTakerFeeRequest();
    message.denom0 = object.denom0 ?? '';
    message.denom1 = object.denom1 ?? '';
    return message;
  },
  fromAmino(
    object: TradingPairTakerFeeRequestAmino,
  ): TradingPairTakerFeeRequest {
    const message = createBaseTradingPairTakerFeeRequest();
    if (object.denom_0 !== undefined && object.denom_0 !== null) {
      message.denom0 = object.denom_0;
    }
    if (object.denom_1 !== undefined && object.denom_1 !== null) {
      message.denom1 = object.denom_1;
    }
    return message;
  },
  toAmino(
    message: TradingPairTakerFeeRequest,
  ): TradingPairTakerFeeRequestAmino {
    const obj: any = {};
    obj.denom_0 = message.denom0 === '' ? undefined : message.denom0;
    obj.denom_1 = message.denom1 === '' ? undefined : message.denom1;
    return obj;
  },
  fromAminoMsg(
    object: TradingPairTakerFeeRequestAminoMsg,
  ): TradingPairTakerFeeRequest {
    return TradingPairTakerFeeRequest.fromAmino(object.value);
  },
  fromProtoMsg(
    message: TradingPairTakerFeeRequestProtoMsg,
  ): TradingPairTakerFeeRequest {
    return TradingPairTakerFeeRequest.decode(message.value);
  },
  toProto(message: TradingPairTakerFeeRequest): Uint8Array {
    return TradingPairTakerFeeRequest.encode(message).finish();
  },
  toProtoMsg(
    message: TradingPairTakerFeeRequest,
  ): TradingPairTakerFeeRequestProtoMsg {
    return {
      typeUrl: '/symphony.poolmanager.v1beta1.TradingPairTakerFeeRequest',
      value: TradingPairTakerFeeRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  TradingPairTakerFeeRequest.typeUrl,
  TradingPairTakerFeeRequest,
);
function createBaseTradingPairTakerFeeResponse(): TradingPairTakerFeeResponse {
  return {
    takerFee: '',
  };
}
/**
 * @name TradingPairTakerFeeResponse
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.TradingPairTakerFeeResponse
 */
export const TradingPairTakerFeeResponse = {
  typeUrl: '/symphony.poolmanager.v1beta1.TradingPairTakerFeeResponse',
  is(o: any): o is TradingPairTakerFeeResponse {
    return (
      o &&
      (o.$typeUrl === TradingPairTakerFeeResponse.typeUrl ||
        typeof o.takerFee === 'string')
    );
  },
  isSDK(o: any): o is TradingPairTakerFeeResponseSDKType {
    return (
      o &&
      (o.$typeUrl === TradingPairTakerFeeResponse.typeUrl ||
        typeof o.taker_fee === 'string')
    );
  },
  isAmino(o: any): o is TradingPairTakerFeeResponseAmino {
    return (
      o &&
      (o.$typeUrl === TradingPairTakerFeeResponse.typeUrl ||
        typeof o.taker_fee === 'string')
    );
  },
  encode(
    message: TradingPairTakerFeeResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.takerFee !== '') {
      writer
        .uint32(10)
        .string(Decimal.fromUserInput(message.takerFee, 18).atomics);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): TradingPairTakerFeeResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradingPairTakerFeeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.takerFee = Decimal.fromAtomics(
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
  fromPartial(
    object: Partial<TradingPairTakerFeeResponse>,
  ): TradingPairTakerFeeResponse {
    const message = createBaseTradingPairTakerFeeResponse();
    message.takerFee = object.takerFee ?? '';
    return message;
  },
  fromAmino(
    object: TradingPairTakerFeeResponseAmino,
  ): TradingPairTakerFeeResponse {
    const message = createBaseTradingPairTakerFeeResponse();
    if (object.taker_fee !== undefined && object.taker_fee !== null) {
      message.takerFee = object.taker_fee;
    }
    return message;
  },
  toAmino(
    message: TradingPairTakerFeeResponse,
  ): TradingPairTakerFeeResponseAmino {
    const obj: any = {};
    obj.taker_fee = message.takerFee === '' ? undefined : message.takerFee;
    return obj;
  },
  fromAminoMsg(
    object: TradingPairTakerFeeResponseAminoMsg,
  ): TradingPairTakerFeeResponse {
    return TradingPairTakerFeeResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: TradingPairTakerFeeResponseProtoMsg,
  ): TradingPairTakerFeeResponse {
    return TradingPairTakerFeeResponse.decode(message.value);
  },
  toProto(message: TradingPairTakerFeeResponse): Uint8Array {
    return TradingPairTakerFeeResponse.encode(message).finish();
  },
  toProtoMsg(
    message: TradingPairTakerFeeResponse,
  ): TradingPairTakerFeeResponseProtoMsg {
    return {
      typeUrl: '/symphony.poolmanager.v1beta1.TradingPairTakerFeeResponse',
      value: TradingPairTakerFeeResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  TradingPairTakerFeeResponse.typeUrl,
  TradingPairTakerFeeResponse,
);
function createBaseEstimateTradeBasedOnPriceImpactRequest(): EstimateTradeBasedOnPriceImpactRequest {
  return {
    fromCoin: Coin.fromPartial({}),
    toCoinDenom: '',
    poolId: BigInt(0),
    maxPriceImpact: '',
    externalPrice: '',
  };
}
/**
 * EstimateTradeBasedOnPriceImpactRequest represents a request to estimate a
 * trade for Balancer/StableSwap/Concentrated liquidity pool types based on the
 * given parameters.
 * @name EstimateTradeBasedOnPriceImpactRequest
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.EstimateTradeBasedOnPriceImpactRequest
 */
export const EstimateTradeBasedOnPriceImpactRequest = {
  typeUrl:
    '/symphony.poolmanager.v1beta1.EstimateTradeBasedOnPriceImpactRequest',
  is(o: any): o is EstimateTradeBasedOnPriceImpactRequest {
    return (
      o &&
      (o.$typeUrl === EstimateTradeBasedOnPriceImpactRequest.typeUrl ||
        (Coin.is(o.fromCoin) &&
          typeof o.toCoinDenom === 'string' &&
          typeof o.poolId === 'bigint' &&
          typeof o.maxPriceImpact === 'string' &&
          typeof o.externalPrice === 'string'))
    );
  },
  isSDK(o: any): o is EstimateTradeBasedOnPriceImpactRequestSDKType {
    return (
      o &&
      (o.$typeUrl === EstimateTradeBasedOnPriceImpactRequest.typeUrl ||
        (Coin.isSDK(o.from_coin) &&
          typeof o.to_coin_denom === 'string' &&
          typeof o.pool_id === 'bigint' &&
          typeof o.max_price_impact === 'string' &&
          typeof o.external_price === 'string'))
    );
  },
  isAmino(o: any): o is EstimateTradeBasedOnPriceImpactRequestAmino {
    return (
      o &&
      (o.$typeUrl === EstimateTradeBasedOnPriceImpactRequest.typeUrl ||
        (Coin.isAmino(o.from_coin) &&
          typeof o.to_coin_denom === 'string' &&
          typeof o.pool_id === 'bigint' &&
          typeof o.max_price_impact === 'string' &&
          typeof o.external_price === 'string'))
    );
  },
  encode(
    message: EstimateTradeBasedOnPriceImpactRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.fromCoin !== undefined) {
      Coin.encode(message.fromCoin, writer.uint32(10).fork()).ldelim();
    }
    if (message.toCoinDenom !== '') {
      writer.uint32(18).string(message.toCoinDenom);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(24).uint64(message.poolId);
    }
    if (message.maxPriceImpact !== '') {
      writer
        .uint32(34)
        .string(Decimal.fromUserInput(message.maxPriceImpact, 18).atomics);
    }
    if (message.externalPrice !== '') {
      writer
        .uint32(42)
        .string(Decimal.fromUserInput(message.externalPrice, 18).atomics);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): EstimateTradeBasedOnPriceImpactRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimateTradeBasedOnPriceImpactRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromCoin = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.toCoinDenom = reader.string();
          break;
        case 3:
          message.poolId = reader.uint64();
          break;
        case 4:
          message.maxPriceImpact = Decimal.fromAtomics(
            reader.string(),
            18,
          ).toString();
          break;
        case 5:
          message.externalPrice = Decimal.fromAtomics(
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
  fromPartial(
    object: Partial<EstimateTradeBasedOnPriceImpactRequest>,
  ): EstimateTradeBasedOnPriceImpactRequest {
    const message = createBaseEstimateTradeBasedOnPriceImpactRequest();
    message.fromCoin =
      object.fromCoin !== undefined && object.fromCoin !== null
        ? Coin.fromPartial(object.fromCoin)
        : undefined;
    message.toCoinDenom = object.toCoinDenom ?? '';
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? BigInt(object.poolId.toString())
        : BigInt(0);
    message.maxPriceImpact = object.maxPriceImpact ?? '';
    message.externalPrice = object.externalPrice ?? '';
    return message;
  },
  fromAmino(
    object: EstimateTradeBasedOnPriceImpactRequestAmino,
  ): EstimateTradeBasedOnPriceImpactRequest {
    const message = createBaseEstimateTradeBasedOnPriceImpactRequest();
    if (object.from_coin !== undefined && object.from_coin !== null) {
      message.fromCoin = Coin.fromAmino(object.from_coin);
    }
    if (object.to_coin_denom !== undefined && object.to_coin_denom !== null) {
      message.toCoinDenom = object.to_coin_denom;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (
      object.max_price_impact !== undefined &&
      object.max_price_impact !== null
    ) {
      message.maxPriceImpact = object.max_price_impact;
    }
    if (object.external_price !== undefined && object.external_price !== null) {
      message.externalPrice = object.external_price;
    }
    return message;
  },
  toAmino(
    message: EstimateTradeBasedOnPriceImpactRequest,
  ): EstimateTradeBasedOnPriceImpactRequestAmino {
    const obj: any = {};
    obj.from_coin = message.fromCoin
      ? Coin.toAmino(message.fromCoin)
      : undefined;
    obj.to_coin_denom =
      message.toCoinDenom === '' ? undefined : message.toCoinDenom;
    obj.pool_id =
      message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    obj.max_price_impact =
      message.maxPriceImpact === '' ? undefined : message.maxPriceImpact;
    obj.external_price =
      message.externalPrice === '' ? undefined : message.externalPrice;
    return obj;
  },
  fromAminoMsg(
    object: EstimateTradeBasedOnPriceImpactRequestAminoMsg,
  ): EstimateTradeBasedOnPriceImpactRequest {
    return EstimateTradeBasedOnPriceImpactRequest.fromAmino(object.value);
  },
  fromProtoMsg(
    message: EstimateTradeBasedOnPriceImpactRequestProtoMsg,
  ): EstimateTradeBasedOnPriceImpactRequest {
    return EstimateTradeBasedOnPriceImpactRequest.decode(message.value);
  },
  toProto(message: EstimateTradeBasedOnPriceImpactRequest): Uint8Array {
    return EstimateTradeBasedOnPriceImpactRequest.encode(message).finish();
  },
  toProtoMsg(
    message: EstimateTradeBasedOnPriceImpactRequest,
  ): EstimateTradeBasedOnPriceImpactRequestProtoMsg {
    return {
      typeUrl:
        '/symphony.poolmanager.v1beta1.EstimateTradeBasedOnPriceImpactRequest',
      value: EstimateTradeBasedOnPriceImpactRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  EstimateTradeBasedOnPriceImpactRequest.typeUrl,
  EstimateTradeBasedOnPriceImpactRequest,
);
function createBaseEstimateTradeBasedOnPriceImpactResponse(): EstimateTradeBasedOnPriceImpactResponse {
  return {
    inputCoin: Coin.fromPartial({}),
    outputCoin: Coin.fromPartial({}),
  };
}
/**
 * EstimateTradeBasedOnPriceImpactResponse represents the response data
 * for an estimated trade based on price impact. If a trade fails to be
 * estimated the response would be 0,0 for input_coin and output_coin and will
 * not error.
 * @name EstimateTradeBasedOnPriceImpactResponse
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.EstimateTradeBasedOnPriceImpactResponse
 */
export const EstimateTradeBasedOnPriceImpactResponse = {
  typeUrl:
    '/symphony.poolmanager.v1beta1.EstimateTradeBasedOnPriceImpactResponse',
  is(o: any): o is EstimateTradeBasedOnPriceImpactResponse {
    return (
      o &&
      (o.$typeUrl === EstimateTradeBasedOnPriceImpactResponse.typeUrl ||
        (Coin.is(o.inputCoin) && Coin.is(o.outputCoin)))
    );
  },
  isSDK(o: any): o is EstimateTradeBasedOnPriceImpactResponseSDKType {
    return (
      o &&
      (o.$typeUrl === EstimateTradeBasedOnPriceImpactResponse.typeUrl ||
        (Coin.isSDK(o.input_coin) && Coin.isSDK(o.output_coin)))
    );
  },
  isAmino(o: any): o is EstimateTradeBasedOnPriceImpactResponseAmino {
    return (
      o &&
      (o.$typeUrl === EstimateTradeBasedOnPriceImpactResponse.typeUrl ||
        (Coin.isAmino(o.input_coin) && Coin.isAmino(o.output_coin)))
    );
  },
  encode(
    message: EstimateTradeBasedOnPriceImpactResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.inputCoin !== undefined) {
      Coin.encode(message.inputCoin, writer.uint32(10).fork()).ldelim();
    }
    if (message.outputCoin !== undefined) {
      Coin.encode(message.outputCoin, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): EstimateTradeBasedOnPriceImpactResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimateTradeBasedOnPriceImpactResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inputCoin = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.outputCoin = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(
    object: Partial<EstimateTradeBasedOnPriceImpactResponse>,
  ): EstimateTradeBasedOnPriceImpactResponse {
    const message = createBaseEstimateTradeBasedOnPriceImpactResponse();
    message.inputCoin =
      object.inputCoin !== undefined && object.inputCoin !== null
        ? Coin.fromPartial(object.inputCoin)
        : undefined;
    message.outputCoin =
      object.outputCoin !== undefined && object.outputCoin !== null
        ? Coin.fromPartial(object.outputCoin)
        : undefined;
    return message;
  },
  fromAmino(
    object: EstimateTradeBasedOnPriceImpactResponseAmino,
  ): EstimateTradeBasedOnPriceImpactResponse {
    const message = createBaseEstimateTradeBasedOnPriceImpactResponse();
    if (object.input_coin !== undefined && object.input_coin !== null) {
      message.inputCoin = Coin.fromAmino(object.input_coin);
    }
    if (object.output_coin !== undefined && object.output_coin !== null) {
      message.outputCoin = Coin.fromAmino(object.output_coin);
    }
    return message;
  },
  toAmino(
    message: EstimateTradeBasedOnPriceImpactResponse,
  ): EstimateTradeBasedOnPriceImpactResponseAmino {
    const obj: any = {};
    obj.input_coin = message.inputCoin
      ? Coin.toAmino(message.inputCoin)
      : undefined;
    obj.output_coin = message.outputCoin
      ? Coin.toAmino(message.outputCoin)
      : undefined;
    return obj;
  },
  fromAminoMsg(
    object: EstimateTradeBasedOnPriceImpactResponseAminoMsg,
  ): EstimateTradeBasedOnPriceImpactResponse {
    return EstimateTradeBasedOnPriceImpactResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: EstimateTradeBasedOnPriceImpactResponseProtoMsg,
  ): EstimateTradeBasedOnPriceImpactResponse {
    return EstimateTradeBasedOnPriceImpactResponse.decode(message.value);
  },
  toProto(message: EstimateTradeBasedOnPriceImpactResponse): Uint8Array {
    return EstimateTradeBasedOnPriceImpactResponse.encode(message).finish();
  },
  toProtoMsg(
    message: EstimateTradeBasedOnPriceImpactResponse,
  ): EstimateTradeBasedOnPriceImpactResponseProtoMsg {
    return {
      typeUrl:
        '/symphony.poolmanager.v1beta1.EstimateTradeBasedOnPriceImpactResponse',
      value: EstimateTradeBasedOnPriceImpactResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  EstimateTradeBasedOnPriceImpactResponse.typeUrl,
  EstimateTradeBasedOnPriceImpactResponse,
);
function createBaseAllTakerFeeShareAgreementsRequest(): AllTakerFeeShareAgreementsRequest {
  return {};
}
/**
 * @name AllTakerFeeShareAgreementsRequest
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.AllTakerFeeShareAgreementsRequest
 */
export const AllTakerFeeShareAgreementsRequest = {
  typeUrl: '/symphony.poolmanager.v1beta1.AllTakerFeeShareAgreementsRequest',
  is(o: any): o is AllTakerFeeShareAgreementsRequest {
    return o && o.$typeUrl === AllTakerFeeShareAgreementsRequest.typeUrl;
  },
  isSDK(o: any): o is AllTakerFeeShareAgreementsRequestSDKType {
    return o && o.$typeUrl === AllTakerFeeShareAgreementsRequest.typeUrl;
  },
  isAmino(o: any): o is AllTakerFeeShareAgreementsRequestAmino {
    return o && o.$typeUrl === AllTakerFeeShareAgreementsRequest.typeUrl;
  },
  encode(
    _: AllTakerFeeShareAgreementsRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): AllTakerFeeShareAgreementsRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllTakerFeeShareAgreementsRequest();
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
    _: Partial<AllTakerFeeShareAgreementsRequest>,
  ): AllTakerFeeShareAgreementsRequest {
    const message = createBaseAllTakerFeeShareAgreementsRequest();
    return message;
  },
  fromAmino(
    _: AllTakerFeeShareAgreementsRequestAmino,
  ): AllTakerFeeShareAgreementsRequest {
    const message = createBaseAllTakerFeeShareAgreementsRequest();
    return message;
  },
  toAmino(
    _: AllTakerFeeShareAgreementsRequest,
  ): AllTakerFeeShareAgreementsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(
    object: AllTakerFeeShareAgreementsRequestAminoMsg,
  ): AllTakerFeeShareAgreementsRequest {
    return AllTakerFeeShareAgreementsRequest.fromAmino(object.value);
  },
  fromProtoMsg(
    message: AllTakerFeeShareAgreementsRequestProtoMsg,
  ): AllTakerFeeShareAgreementsRequest {
    return AllTakerFeeShareAgreementsRequest.decode(message.value);
  },
  toProto(message: AllTakerFeeShareAgreementsRequest): Uint8Array {
    return AllTakerFeeShareAgreementsRequest.encode(message).finish();
  },
  toProtoMsg(
    message: AllTakerFeeShareAgreementsRequest,
  ): AllTakerFeeShareAgreementsRequestProtoMsg {
    return {
      typeUrl:
        '/symphony.poolmanager.v1beta1.AllTakerFeeShareAgreementsRequest',
      value: AllTakerFeeShareAgreementsRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  AllTakerFeeShareAgreementsRequest.typeUrl,
  AllTakerFeeShareAgreementsRequest,
);
function createBaseAllTakerFeeShareAgreementsResponse(): AllTakerFeeShareAgreementsResponse {
  return {
    takerFeeShareAgreements: [],
  };
}
/**
 * @name AllTakerFeeShareAgreementsResponse
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.AllTakerFeeShareAgreementsResponse
 */
export const AllTakerFeeShareAgreementsResponse = {
  typeUrl: '/symphony.poolmanager.v1beta1.AllTakerFeeShareAgreementsResponse',
  is(o: any): o is AllTakerFeeShareAgreementsResponse {
    return (
      o &&
      (o.$typeUrl === AllTakerFeeShareAgreementsResponse.typeUrl ||
        (Array.isArray(o.takerFeeShareAgreements) &&
          (!o.takerFeeShareAgreements.length ||
            TakerFeeShareAgreement.is(o.takerFeeShareAgreements[0]))))
    );
  },
  isSDK(o: any): o is AllTakerFeeShareAgreementsResponseSDKType {
    return (
      o &&
      (o.$typeUrl === AllTakerFeeShareAgreementsResponse.typeUrl ||
        (Array.isArray(o.taker_fee_share_agreements) &&
          (!o.taker_fee_share_agreements.length ||
            TakerFeeShareAgreement.isSDK(o.taker_fee_share_agreements[0]))))
    );
  },
  isAmino(o: any): o is AllTakerFeeShareAgreementsResponseAmino {
    return (
      o &&
      (o.$typeUrl === AllTakerFeeShareAgreementsResponse.typeUrl ||
        (Array.isArray(o.taker_fee_share_agreements) &&
          (!o.taker_fee_share_agreements.length ||
            TakerFeeShareAgreement.isAmino(o.taker_fee_share_agreements[0]))))
    );
  },
  encode(
    message: AllTakerFeeShareAgreementsResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.takerFeeShareAgreements) {
      TakerFeeShareAgreement.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): AllTakerFeeShareAgreementsResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllTakerFeeShareAgreementsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.takerFeeShareAgreements.push(
            TakerFeeShareAgreement.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(
    object: Partial<AllTakerFeeShareAgreementsResponse>,
  ): AllTakerFeeShareAgreementsResponse {
    const message = createBaseAllTakerFeeShareAgreementsResponse();
    message.takerFeeShareAgreements =
      object.takerFeeShareAgreements?.map(e =>
        TakerFeeShareAgreement.fromPartial(e),
      ) || [];
    return message;
  },
  fromAmino(
    object: AllTakerFeeShareAgreementsResponseAmino,
  ): AllTakerFeeShareAgreementsResponse {
    const message = createBaseAllTakerFeeShareAgreementsResponse();
    message.takerFeeShareAgreements =
      object.taker_fee_share_agreements?.map(e =>
        TakerFeeShareAgreement.fromAmino(e),
      ) || [];
    return message;
  },
  toAmino(
    message: AllTakerFeeShareAgreementsResponse,
  ): AllTakerFeeShareAgreementsResponseAmino {
    const obj: any = {};
    if (message.takerFeeShareAgreements) {
      obj.taker_fee_share_agreements = message.takerFeeShareAgreements.map(e =>
        e ? TakerFeeShareAgreement.toAmino(e) : undefined,
      );
    } else {
      obj.taker_fee_share_agreements = message.takerFeeShareAgreements;
    }
    return obj;
  },
  fromAminoMsg(
    object: AllTakerFeeShareAgreementsResponseAminoMsg,
  ): AllTakerFeeShareAgreementsResponse {
    return AllTakerFeeShareAgreementsResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: AllTakerFeeShareAgreementsResponseProtoMsg,
  ): AllTakerFeeShareAgreementsResponse {
    return AllTakerFeeShareAgreementsResponse.decode(message.value);
  },
  toProto(message: AllTakerFeeShareAgreementsResponse): Uint8Array {
    return AllTakerFeeShareAgreementsResponse.encode(message).finish();
  },
  toProtoMsg(
    message: AllTakerFeeShareAgreementsResponse,
  ): AllTakerFeeShareAgreementsResponseProtoMsg {
    return {
      typeUrl:
        '/symphony.poolmanager.v1beta1.AllTakerFeeShareAgreementsResponse',
      value: AllTakerFeeShareAgreementsResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  AllTakerFeeShareAgreementsResponse.typeUrl,
  AllTakerFeeShareAgreementsResponse,
);
function createBaseTakerFeeShareAgreementFromDenomRequest(): TakerFeeShareAgreementFromDenomRequest {
  return {
    denom: '',
  };
}
/**
 * @name TakerFeeShareAgreementFromDenomRequest
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.TakerFeeShareAgreementFromDenomRequest
 */
export const TakerFeeShareAgreementFromDenomRequest = {
  typeUrl:
    '/symphony.poolmanager.v1beta1.TakerFeeShareAgreementFromDenomRequest',
  is(o: any): o is TakerFeeShareAgreementFromDenomRequest {
    return (
      o &&
      (o.$typeUrl === TakerFeeShareAgreementFromDenomRequest.typeUrl ||
        typeof o.denom === 'string')
    );
  },
  isSDK(o: any): o is TakerFeeShareAgreementFromDenomRequestSDKType {
    return (
      o &&
      (o.$typeUrl === TakerFeeShareAgreementFromDenomRequest.typeUrl ||
        typeof o.denom === 'string')
    );
  },
  isAmino(o: any): o is TakerFeeShareAgreementFromDenomRequestAmino {
    return (
      o &&
      (o.$typeUrl === TakerFeeShareAgreementFromDenomRequest.typeUrl ||
        typeof o.denom === 'string')
    );
  },
  encode(
    message: TakerFeeShareAgreementFromDenomRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.denom !== '') {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): TakerFeeShareAgreementFromDenomRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTakerFeeShareAgreementFromDenomRequest();
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
  fromPartial(
    object: Partial<TakerFeeShareAgreementFromDenomRequest>,
  ): TakerFeeShareAgreementFromDenomRequest {
    const message = createBaseTakerFeeShareAgreementFromDenomRequest();
    message.denom = object.denom ?? '';
    return message;
  },
  fromAmino(
    object: TakerFeeShareAgreementFromDenomRequestAmino,
  ): TakerFeeShareAgreementFromDenomRequest {
    const message = createBaseTakerFeeShareAgreementFromDenomRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(
    message: TakerFeeShareAgreementFromDenomRequest,
  ): TakerFeeShareAgreementFromDenomRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === '' ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(
    object: TakerFeeShareAgreementFromDenomRequestAminoMsg,
  ): TakerFeeShareAgreementFromDenomRequest {
    return TakerFeeShareAgreementFromDenomRequest.fromAmino(object.value);
  },
  fromProtoMsg(
    message: TakerFeeShareAgreementFromDenomRequestProtoMsg,
  ): TakerFeeShareAgreementFromDenomRequest {
    return TakerFeeShareAgreementFromDenomRequest.decode(message.value);
  },
  toProto(message: TakerFeeShareAgreementFromDenomRequest): Uint8Array {
    return TakerFeeShareAgreementFromDenomRequest.encode(message).finish();
  },
  toProtoMsg(
    message: TakerFeeShareAgreementFromDenomRequest,
  ): TakerFeeShareAgreementFromDenomRequestProtoMsg {
    return {
      typeUrl:
        '/symphony.poolmanager.v1beta1.TakerFeeShareAgreementFromDenomRequest',
      value: TakerFeeShareAgreementFromDenomRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  TakerFeeShareAgreementFromDenomRequest.typeUrl,
  TakerFeeShareAgreementFromDenomRequest,
);
function createBaseTakerFeeShareAgreementFromDenomResponse(): TakerFeeShareAgreementFromDenomResponse {
  return {
    takerFeeShareAgreement: TakerFeeShareAgreement.fromPartial({}),
  };
}
/**
 * @name TakerFeeShareAgreementFromDenomResponse
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.TakerFeeShareAgreementFromDenomResponse
 */
export const TakerFeeShareAgreementFromDenomResponse = {
  typeUrl:
    '/symphony.poolmanager.v1beta1.TakerFeeShareAgreementFromDenomResponse',
  is(o: any): o is TakerFeeShareAgreementFromDenomResponse {
    return (
      o &&
      (o.$typeUrl === TakerFeeShareAgreementFromDenomResponse.typeUrl ||
        TakerFeeShareAgreement.is(o.takerFeeShareAgreement))
    );
  },
  isSDK(o: any): o is TakerFeeShareAgreementFromDenomResponseSDKType {
    return (
      o &&
      (o.$typeUrl === TakerFeeShareAgreementFromDenomResponse.typeUrl ||
        TakerFeeShareAgreement.isSDK(o.taker_fee_share_agreement))
    );
  },
  isAmino(o: any): o is TakerFeeShareAgreementFromDenomResponseAmino {
    return (
      o &&
      (o.$typeUrl === TakerFeeShareAgreementFromDenomResponse.typeUrl ||
        TakerFeeShareAgreement.isAmino(o.taker_fee_share_agreement))
    );
  },
  encode(
    message: TakerFeeShareAgreementFromDenomResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.takerFeeShareAgreement !== undefined) {
      TakerFeeShareAgreement.encode(
        message.takerFeeShareAgreement,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): TakerFeeShareAgreementFromDenomResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTakerFeeShareAgreementFromDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.takerFeeShareAgreement = TakerFeeShareAgreement.decode(
            reader,
            reader.uint32(),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(
    object: Partial<TakerFeeShareAgreementFromDenomResponse>,
  ): TakerFeeShareAgreementFromDenomResponse {
    const message = createBaseTakerFeeShareAgreementFromDenomResponse();
    message.takerFeeShareAgreement =
      object.takerFeeShareAgreement !== undefined &&
      object.takerFeeShareAgreement !== null
        ? TakerFeeShareAgreement.fromPartial(object.takerFeeShareAgreement)
        : undefined;
    return message;
  },
  fromAmino(
    object: TakerFeeShareAgreementFromDenomResponseAmino,
  ): TakerFeeShareAgreementFromDenomResponse {
    const message = createBaseTakerFeeShareAgreementFromDenomResponse();
    if (
      object.taker_fee_share_agreement !== undefined &&
      object.taker_fee_share_agreement !== null
    ) {
      message.takerFeeShareAgreement = TakerFeeShareAgreement.fromAmino(
        object.taker_fee_share_agreement,
      );
    }
    return message;
  },
  toAmino(
    message: TakerFeeShareAgreementFromDenomResponse,
  ): TakerFeeShareAgreementFromDenomResponseAmino {
    const obj: any = {};
    obj.taker_fee_share_agreement = message.takerFeeShareAgreement
      ? TakerFeeShareAgreement.toAmino(message.takerFeeShareAgreement)
      : undefined;
    return obj;
  },
  fromAminoMsg(
    object: TakerFeeShareAgreementFromDenomResponseAminoMsg,
  ): TakerFeeShareAgreementFromDenomResponse {
    return TakerFeeShareAgreementFromDenomResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: TakerFeeShareAgreementFromDenomResponseProtoMsg,
  ): TakerFeeShareAgreementFromDenomResponse {
    return TakerFeeShareAgreementFromDenomResponse.decode(message.value);
  },
  toProto(message: TakerFeeShareAgreementFromDenomResponse): Uint8Array {
    return TakerFeeShareAgreementFromDenomResponse.encode(message).finish();
  },
  toProtoMsg(
    message: TakerFeeShareAgreementFromDenomResponse,
  ): TakerFeeShareAgreementFromDenomResponseProtoMsg {
    return {
      typeUrl:
        '/symphony.poolmanager.v1beta1.TakerFeeShareAgreementFromDenomResponse',
      value: TakerFeeShareAgreementFromDenomResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  TakerFeeShareAgreementFromDenomResponse.typeUrl,
  TakerFeeShareAgreementFromDenomResponse,
);
function createBaseTakerFeeShareDenomsToAccruedValueRequest(): TakerFeeShareDenomsToAccruedValueRequest {
  return {
    denom: '',
    takerFeeDenom: '',
  };
}
/**
 * @name TakerFeeShareDenomsToAccruedValueRequest
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.TakerFeeShareDenomsToAccruedValueRequest
 */
export const TakerFeeShareDenomsToAccruedValueRequest = {
  typeUrl:
    '/symphony.poolmanager.v1beta1.TakerFeeShareDenomsToAccruedValueRequest',
  is(o: any): o is TakerFeeShareDenomsToAccruedValueRequest {
    return (
      o &&
      (o.$typeUrl === TakerFeeShareDenomsToAccruedValueRequest.typeUrl ||
        (typeof o.denom === 'string' && typeof o.takerFeeDenom === 'string'))
    );
  },
  isSDK(o: any): o is TakerFeeShareDenomsToAccruedValueRequestSDKType {
    return (
      o &&
      (o.$typeUrl === TakerFeeShareDenomsToAccruedValueRequest.typeUrl ||
        (typeof o.denom === 'string' && typeof o.takerFeeDenom === 'string'))
    );
  },
  isAmino(o: any): o is TakerFeeShareDenomsToAccruedValueRequestAmino {
    return (
      o &&
      (o.$typeUrl === TakerFeeShareDenomsToAccruedValueRequest.typeUrl ||
        (typeof o.denom === 'string' && typeof o.takerFeeDenom === 'string'))
    );
  },
  encode(
    message: TakerFeeShareDenomsToAccruedValueRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.denom !== '') {
      writer.uint32(10).string(message.denom);
    }
    if (message.takerFeeDenom !== '') {
      writer.uint32(18).string(message.takerFeeDenom);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): TakerFeeShareDenomsToAccruedValueRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTakerFeeShareDenomsToAccruedValueRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.takerFeeDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(
    object: Partial<TakerFeeShareDenomsToAccruedValueRequest>,
  ): TakerFeeShareDenomsToAccruedValueRequest {
    const message = createBaseTakerFeeShareDenomsToAccruedValueRequest();
    message.denom = object.denom ?? '';
    message.takerFeeDenom = object.takerFeeDenom ?? '';
    return message;
  },
  fromAmino(
    object: TakerFeeShareDenomsToAccruedValueRequestAmino,
  ): TakerFeeShareDenomsToAccruedValueRequest {
    const message = createBaseTakerFeeShareDenomsToAccruedValueRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.takerFeeDenom !== undefined && object.takerFeeDenom !== null) {
      message.takerFeeDenom = object.takerFeeDenom;
    }
    return message;
  },
  toAmino(
    message: TakerFeeShareDenomsToAccruedValueRequest,
  ): TakerFeeShareDenomsToAccruedValueRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === '' ? undefined : message.denom;
    obj.takerFeeDenom =
      message.takerFeeDenom === '' ? undefined : message.takerFeeDenom;
    return obj;
  },
  fromAminoMsg(
    object: TakerFeeShareDenomsToAccruedValueRequestAminoMsg,
  ): TakerFeeShareDenomsToAccruedValueRequest {
    return TakerFeeShareDenomsToAccruedValueRequest.fromAmino(object.value);
  },
  fromProtoMsg(
    message: TakerFeeShareDenomsToAccruedValueRequestProtoMsg,
  ): TakerFeeShareDenomsToAccruedValueRequest {
    return TakerFeeShareDenomsToAccruedValueRequest.decode(message.value);
  },
  toProto(message: TakerFeeShareDenomsToAccruedValueRequest): Uint8Array {
    return TakerFeeShareDenomsToAccruedValueRequest.encode(message).finish();
  },
  toProtoMsg(
    message: TakerFeeShareDenomsToAccruedValueRequest,
  ): TakerFeeShareDenomsToAccruedValueRequestProtoMsg {
    return {
      typeUrl:
        '/symphony.poolmanager.v1beta1.TakerFeeShareDenomsToAccruedValueRequest',
      value: TakerFeeShareDenomsToAccruedValueRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  TakerFeeShareDenomsToAccruedValueRequest.typeUrl,
  TakerFeeShareDenomsToAccruedValueRequest,
);
function createBaseTakerFeeShareDenomsToAccruedValueResponse(): TakerFeeShareDenomsToAccruedValueResponse {
  return {
    amount: '',
  };
}
/**
 * @name TakerFeeShareDenomsToAccruedValueResponse
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.TakerFeeShareDenomsToAccruedValueResponse
 */
export const TakerFeeShareDenomsToAccruedValueResponse = {
  typeUrl:
    '/symphony.poolmanager.v1beta1.TakerFeeShareDenomsToAccruedValueResponse',
  is(o: any): o is TakerFeeShareDenomsToAccruedValueResponse {
    return (
      o &&
      (o.$typeUrl === TakerFeeShareDenomsToAccruedValueResponse.typeUrl ||
        typeof o.amount === 'string')
    );
  },
  isSDK(o: any): o is TakerFeeShareDenomsToAccruedValueResponseSDKType {
    return (
      o &&
      (o.$typeUrl === TakerFeeShareDenomsToAccruedValueResponse.typeUrl ||
        typeof o.amount === 'string')
    );
  },
  isAmino(o: any): o is TakerFeeShareDenomsToAccruedValueResponseAmino {
    return (
      o &&
      (o.$typeUrl === TakerFeeShareDenomsToAccruedValueResponse.typeUrl ||
        typeof o.amount === 'string')
    );
  },
  encode(
    message: TakerFeeShareDenomsToAccruedValueResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.amount !== '') {
      writer.uint32(10).string(message.amount);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): TakerFeeShareDenomsToAccruedValueResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTakerFeeShareDenomsToAccruedValueResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(
    object: Partial<TakerFeeShareDenomsToAccruedValueResponse>,
  ): TakerFeeShareDenomsToAccruedValueResponse {
    const message = createBaseTakerFeeShareDenomsToAccruedValueResponse();
    message.amount = object.amount ?? '';
    return message;
  },
  fromAmino(
    object: TakerFeeShareDenomsToAccruedValueResponseAmino,
  ): TakerFeeShareDenomsToAccruedValueResponse {
    const message = createBaseTakerFeeShareDenomsToAccruedValueResponse();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(
    message: TakerFeeShareDenomsToAccruedValueResponse,
  ): TakerFeeShareDenomsToAccruedValueResponseAmino {
    const obj: any = {};
    obj.amount = message.amount === '' ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(
    object: TakerFeeShareDenomsToAccruedValueResponseAminoMsg,
  ): TakerFeeShareDenomsToAccruedValueResponse {
    return TakerFeeShareDenomsToAccruedValueResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: TakerFeeShareDenomsToAccruedValueResponseProtoMsg,
  ): TakerFeeShareDenomsToAccruedValueResponse {
    return TakerFeeShareDenomsToAccruedValueResponse.decode(message.value);
  },
  toProto(message: TakerFeeShareDenomsToAccruedValueResponse): Uint8Array {
    return TakerFeeShareDenomsToAccruedValueResponse.encode(message).finish();
  },
  toProtoMsg(
    message: TakerFeeShareDenomsToAccruedValueResponse,
  ): TakerFeeShareDenomsToAccruedValueResponseProtoMsg {
    return {
      typeUrl:
        '/symphony.poolmanager.v1beta1.TakerFeeShareDenomsToAccruedValueResponse',
      value: TakerFeeShareDenomsToAccruedValueResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  TakerFeeShareDenomsToAccruedValueResponse.typeUrl,
  TakerFeeShareDenomsToAccruedValueResponse,
);
function createBaseAllTakerFeeShareAccumulatorsRequest(): AllTakerFeeShareAccumulatorsRequest {
  return {};
}
/**
 * @name AllTakerFeeShareAccumulatorsRequest
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.AllTakerFeeShareAccumulatorsRequest
 */
export const AllTakerFeeShareAccumulatorsRequest = {
  typeUrl: '/symphony.poolmanager.v1beta1.AllTakerFeeShareAccumulatorsRequest',
  is(o: any): o is AllTakerFeeShareAccumulatorsRequest {
    return o && o.$typeUrl === AllTakerFeeShareAccumulatorsRequest.typeUrl;
  },
  isSDK(o: any): o is AllTakerFeeShareAccumulatorsRequestSDKType {
    return o && o.$typeUrl === AllTakerFeeShareAccumulatorsRequest.typeUrl;
  },
  isAmino(o: any): o is AllTakerFeeShareAccumulatorsRequestAmino {
    return o && o.$typeUrl === AllTakerFeeShareAccumulatorsRequest.typeUrl;
  },
  encode(
    _: AllTakerFeeShareAccumulatorsRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): AllTakerFeeShareAccumulatorsRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllTakerFeeShareAccumulatorsRequest();
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
    _: Partial<AllTakerFeeShareAccumulatorsRequest>,
  ): AllTakerFeeShareAccumulatorsRequest {
    const message = createBaseAllTakerFeeShareAccumulatorsRequest();
    return message;
  },
  fromAmino(
    _: AllTakerFeeShareAccumulatorsRequestAmino,
  ): AllTakerFeeShareAccumulatorsRequest {
    const message = createBaseAllTakerFeeShareAccumulatorsRequest();
    return message;
  },
  toAmino(
    _: AllTakerFeeShareAccumulatorsRequest,
  ): AllTakerFeeShareAccumulatorsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(
    object: AllTakerFeeShareAccumulatorsRequestAminoMsg,
  ): AllTakerFeeShareAccumulatorsRequest {
    return AllTakerFeeShareAccumulatorsRequest.fromAmino(object.value);
  },
  fromProtoMsg(
    message: AllTakerFeeShareAccumulatorsRequestProtoMsg,
  ): AllTakerFeeShareAccumulatorsRequest {
    return AllTakerFeeShareAccumulatorsRequest.decode(message.value);
  },
  toProto(message: AllTakerFeeShareAccumulatorsRequest): Uint8Array {
    return AllTakerFeeShareAccumulatorsRequest.encode(message).finish();
  },
  toProtoMsg(
    message: AllTakerFeeShareAccumulatorsRequest,
  ): AllTakerFeeShareAccumulatorsRequestProtoMsg {
    return {
      typeUrl:
        '/symphony.poolmanager.v1beta1.AllTakerFeeShareAccumulatorsRequest',
      value: AllTakerFeeShareAccumulatorsRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  AllTakerFeeShareAccumulatorsRequest.typeUrl,
  AllTakerFeeShareAccumulatorsRequest,
);
function createBaseAllTakerFeeShareAccumulatorsResponse(): AllTakerFeeShareAccumulatorsResponse {
  return {
    takerFeeSkimAccumulators: [],
  };
}
/**
 * @name AllTakerFeeShareAccumulatorsResponse
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.AllTakerFeeShareAccumulatorsResponse
 */
export const AllTakerFeeShareAccumulatorsResponse = {
  typeUrl: '/symphony.poolmanager.v1beta1.AllTakerFeeShareAccumulatorsResponse',
  is(o: any): o is AllTakerFeeShareAccumulatorsResponse {
    return (
      o &&
      (o.$typeUrl === AllTakerFeeShareAccumulatorsResponse.typeUrl ||
        (Array.isArray(o.takerFeeSkimAccumulators) &&
          (!o.takerFeeSkimAccumulators.length ||
            TakerFeeSkimAccumulator.is(o.takerFeeSkimAccumulators[0]))))
    );
  },
  isSDK(o: any): o is AllTakerFeeShareAccumulatorsResponseSDKType {
    return (
      o &&
      (o.$typeUrl === AllTakerFeeShareAccumulatorsResponse.typeUrl ||
        (Array.isArray(o.taker_fee_skim_accumulators) &&
          (!o.taker_fee_skim_accumulators.length ||
            TakerFeeSkimAccumulator.isSDK(o.taker_fee_skim_accumulators[0]))))
    );
  },
  isAmino(o: any): o is AllTakerFeeShareAccumulatorsResponseAmino {
    return (
      o &&
      (o.$typeUrl === AllTakerFeeShareAccumulatorsResponse.typeUrl ||
        (Array.isArray(o.taker_fee_skim_accumulators) &&
          (!o.taker_fee_skim_accumulators.length ||
            TakerFeeSkimAccumulator.isAmino(o.taker_fee_skim_accumulators[0]))))
    );
  },
  encode(
    message: AllTakerFeeShareAccumulatorsResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.takerFeeSkimAccumulators) {
      TakerFeeSkimAccumulator.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): AllTakerFeeShareAccumulatorsResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllTakerFeeShareAccumulatorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.takerFeeSkimAccumulators.push(
            TakerFeeSkimAccumulator.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(
    object: Partial<AllTakerFeeShareAccumulatorsResponse>,
  ): AllTakerFeeShareAccumulatorsResponse {
    const message = createBaseAllTakerFeeShareAccumulatorsResponse();
    message.takerFeeSkimAccumulators =
      object.takerFeeSkimAccumulators?.map(e =>
        TakerFeeSkimAccumulator.fromPartial(e),
      ) || [];
    return message;
  },
  fromAmino(
    object: AllTakerFeeShareAccumulatorsResponseAmino,
  ): AllTakerFeeShareAccumulatorsResponse {
    const message = createBaseAllTakerFeeShareAccumulatorsResponse();
    message.takerFeeSkimAccumulators =
      object.taker_fee_skim_accumulators?.map(e =>
        TakerFeeSkimAccumulator.fromAmino(e),
      ) || [];
    return message;
  },
  toAmino(
    message: AllTakerFeeShareAccumulatorsResponse,
  ): AllTakerFeeShareAccumulatorsResponseAmino {
    const obj: any = {};
    if (message.takerFeeSkimAccumulators) {
      obj.taker_fee_skim_accumulators = message.takerFeeSkimAccumulators.map(
        e => (e ? TakerFeeSkimAccumulator.toAmino(e) : undefined),
      );
    } else {
      obj.taker_fee_skim_accumulators = message.takerFeeSkimAccumulators;
    }
    return obj;
  },
  fromAminoMsg(
    object: AllTakerFeeShareAccumulatorsResponseAminoMsg,
  ): AllTakerFeeShareAccumulatorsResponse {
    return AllTakerFeeShareAccumulatorsResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: AllTakerFeeShareAccumulatorsResponseProtoMsg,
  ): AllTakerFeeShareAccumulatorsResponse {
    return AllTakerFeeShareAccumulatorsResponse.decode(message.value);
  },
  toProto(message: AllTakerFeeShareAccumulatorsResponse): Uint8Array {
    return AllTakerFeeShareAccumulatorsResponse.encode(message).finish();
  },
  toProtoMsg(
    message: AllTakerFeeShareAccumulatorsResponse,
  ): AllTakerFeeShareAccumulatorsResponseProtoMsg {
    return {
      typeUrl:
        '/symphony.poolmanager.v1beta1.AllTakerFeeShareAccumulatorsResponse',
      value: AllTakerFeeShareAccumulatorsResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  AllTakerFeeShareAccumulatorsResponse.typeUrl,
  AllTakerFeeShareAccumulatorsResponse,
);
function createBaseRegisteredAlloyedPoolFromDenomRequest(): RegisteredAlloyedPoolFromDenomRequest {
  return {
    denom: '',
  };
}
/**
 * @name RegisteredAlloyedPoolFromDenomRequest
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.RegisteredAlloyedPoolFromDenomRequest
 */
export const RegisteredAlloyedPoolFromDenomRequest = {
  typeUrl:
    '/symphony.poolmanager.v1beta1.RegisteredAlloyedPoolFromDenomRequest',
  is(o: any): o is RegisteredAlloyedPoolFromDenomRequest {
    return (
      o &&
      (o.$typeUrl === RegisteredAlloyedPoolFromDenomRequest.typeUrl ||
        typeof o.denom === 'string')
    );
  },
  isSDK(o: any): o is RegisteredAlloyedPoolFromDenomRequestSDKType {
    return (
      o &&
      (o.$typeUrl === RegisteredAlloyedPoolFromDenomRequest.typeUrl ||
        typeof o.denom === 'string')
    );
  },
  isAmino(o: any): o is RegisteredAlloyedPoolFromDenomRequestAmino {
    return (
      o &&
      (o.$typeUrl === RegisteredAlloyedPoolFromDenomRequest.typeUrl ||
        typeof o.denom === 'string')
    );
  },
  encode(
    message: RegisteredAlloyedPoolFromDenomRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.denom !== '') {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): RegisteredAlloyedPoolFromDenomRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisteredAlloyedPoolFromDenomRequest();
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
  fromPartial(
    object: Partial<RegisteredAlloyedPoolFromDenomRequest>,
  ): RegisteredAlloyedPoolFromDenomRequest {
    const message = createBaseRegisteredAlloyedPoolFromDenomRequest();
    message.denom = object.denom ?? '';
    return message;
  },
  fromAmino(
    object: RegisteredAlloyedPoolFromDenomRequestAmino,
  ): RegisteredAlloyedPoolFromDenomRequest {
    const message = createBaseRegisteredAlloyedPoolFromDenomRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(
    message: RegisteredAlloyedPoolFromDenomRequest,
  ): RegisteredAlloyedPoolFromDenomRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === '' ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(
    object: RegisteredAlloyedPoolFromDenomRequestAminoMsg,
  ): RegisteredAlloyedPoolFromDenomRequest {
    return RegisteredAlloyedPoolFromDenomRequest.fromAmino(object.value);
  },
  fromProtoMsg(
    message: RegisteredAlloyedPoolFromDenomRequestProtoMsg,
  ): RegisteredAlloyedPoolFromDenomRequest {
    return RegisteredAlloyedPoolFromDenomRequest.decode(message.value);
  },
  toProto(message: RegisteredAlloyedPoolFromDenomRequest): Uint8Array {
    return RegisteredAlloyedPoolFromDenomRequest.encode(message).finish();
  },
  toProtoMsg(
    message: RegisteredAlloyedPoolFromDenomRequest,
  ): RegisteredAlloyedPoolFromDenomRequestProtoMsg {
    return {
      typeUrl:
        '/symphony.poolmanager.v1beta1.RegisteredAlloyedPoolFromDenomRequest',
      value: RegisteredAlloyedPoolFromDenomRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  RegisteredAlloyedPoolFromDenomRequest.typeUrl,
  RegisteredAlloyedPoolFromDenomRequest,
);
function createBaseRegisteredAlloyedPoolFromDenomResponse(): RegisteredAlloyedPoolFromDenomResponse {
  return {
    contractState: AlloyContractTakerFeeShareState.fromPartial({}),
  };
}
/**
 * @name RegisteredAlloyedPoolFromDenomResponse
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.RegisteredAlloyedPoolFromDenomResponse
 */
export const RegisteredAlloyedPoolFromDenomResponse = {
  typeUrl:
    '/symphony.poolmanager.v1beta1.RegisteredAlloyedPoolFromDenomResponse',
  is(o: any): o is RegisteredAlloyedPoolFromDenomResponse {
    return (
      o &&
      (o.$typeUrl === RegisteredAlloyedPoolFromDenomResponse.typeUrl ||
        AlloyContractTakerFeeShareState.is(o.contractState))
    );
  },
  isSDK(o: any): o is RegisteredAlloyedPoolFromDenomResponseSDKType {
    return (
      o &&
      (o.$typeUrl === RegisteredAlloyedPoolFromDenomResponse.typeUrl ||
        AlloyContractTakerFeeShareState.isSDK(o.contract_state))
    );
  },
  isAmino(o: any): o is RegisteredAlloyedPoolFromDenomResponseAmino {
    return (
      o &&
      (o.$typeUrl === RegisteredAlloyedPoolFromDenomResponse.typeUrl ||
        AlloyContractTakerFeeShareState.isAmino(o.contract_state))
    );
  },
  encode(
    message: RegisteredAlloyedPoolFromDenomResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.contractState !== undefined) {
      AlloyContractTakerFeeShareState.encode(
        message.contractState,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): RegisteredAlloyedPoolFromDenomResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisteredAlloyedPoolFromDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractState = AlloyContractTakerFeeShareState.decode(
            reader,
            reader.uint32(),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(
    object: Partial<RegisteredAlloyedPoolFromDenomResponse>,
  ): RegisteredAlloyedPoolFromDenomResponse {
    const message = createBaseRegisteredAlloyedPoolFromDenomResponse();
    message.contractState =
      object.contractState !== undefined && object.contractState !== null
        ? AlloyContractTakerFeeShareState.fromPartial(object.contractState)
        : undefined;
    return message;
  },
  fromAmino(
    object: RegisteredAlloyedPoolFromDenomResponseAmino,
  ): RegisteredAlloyedPoolFromDenomResponse {
    const message = createBaseRegisteredAlloyedPoolFromDenomResponse();
    if (object.contract_state !== undefined && object.contract_state !== null) {
      message.contractState = AlloyContractTakerFeeShareState.fromAmino(
        object.contract_state,
      );
    }
    return message;
  },
  toAmino(
    message: RegisteredAlloyedPoolFromDenomResponse,
  ): RegisteredAlloyedPoolFromDenomResponseAmino {
    const obj: any = {};
    obj.contract_state = message.contractState
      ? AlloyContractTakerFeeShareState.toAmino(message.contractState)
      : undefined;
    return obj;
  },
  fromAminoMsg(
    object: RegisteredAlloyedPoolFromDenomResponseAminoMsg,
  ): RegisteredAlloyedPoolFromDenomResponse {
    return RegisteredAlloyedPoolFromDenomResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: RegisteredAlloyedPoolFromDenomResponseProtoMsg,
  ): RegisteredAlloyedPoolFromDenomResponse {
    return RegisteredAlloyedPoolFromDenomResponse.decode(message.value);
  },
  toProto(message: RegisteredAlloyedPoolFromDenomResponse): Uint8Array {
    return RegisteredAlloyedPoolFromDenomResponse.encode(message).finish();
  },
  toProtoMsg(
    message: RegisteredAlloyedPoolFromDenomResponse,
  ): RegisteredAlloyedPoolFromDenomResponseProtoMsg {
    return {
      typeUrl:
        '/symphony.poolmanager.v1beta1.RegisteredAlloyedPoolFromDenomResponse',
      value: RegisteredAlloyedPoolFromDenomResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  RegisteredAlloyedPoolFromDenomResponse.typeUrl,
  RegisteredAlloyedPoolFromDenomResponse,
);
function createBaseRegisteredAlloyedPoolFromPoolIdRequest(): RegisteredAlloyedPoolFromPoolIdRequest {
  return {
    poolId: BigInt(0),
  };
}
/**
 * @name RegisteredAlloyedPoolFromPoolIdRequest
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.RegisteredAlloyedPoolFromPoolIdRequest
 */
export const RegisteredAlloyedPoolFromPoolIdRequest = {
  typeUrl:
    '/symphony.poolmanager.v1beta1.RegisteredAlloyedPoolFromPoolIdRequest',
  is(o: any): o is RegisteredAlloyedPoolFromPoolIdRequest {
    return (
      o &&
      (o.$typeUrl === RegisteredAlloyedPoolFromPoolIdRequest.typeUrl ||
        typeof o.poolId === 'bigint')
    );
  },
  isSDK(o: any): o is RegisteredAlloyedPoolFromPoolIdRequestSDKType {
    return (
      o &&
      (o.$typeUrl === RegisteredAlloyedPoolFromPoolIdRequest.typeUrl ||
        typeof o.pool_id === 'bigint')
    );
  },
  isAmino(o: any): o is RegisteredAlloyedPoolFromPoolIdRequestAmino {
    return (
      o &&
      (o.$typeUrl === RegisteredAlloyedPoolFromPoolIdRequest.typeUrl ||
        typeof o.pool_id === 'bigint')
    );
  },
  encode(
    message: RegisteredAlloyedPoolFromPoolIdRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): RegisteredAlloyedPoolFromPoolIdRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisteredAlloyedPoolFromPoolIdRequest();
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
  fromPartial(
    object: Partial<RegisteredAlloyedPoolFromPoolIdRequest>,
  ): RegisteredAlloyedPoolFromPoolIdRequest {
    const message = createBaseRegisteredAlloyedPoolFromPoolIdRequest();
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? BigInt(object.poolId.toString())
        : BigInt(0);
    return message;
  },
  fromAmino(
    object: RegisteredAlloyedPoolFromPoolIdRequestAmino,
  ): RegisteredAlloyedPoolFromPoolIdRequest {
    const message = createBaseRegisteredAlloyedPoolFromPoolIdRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(
    message: RegisteredAlloyedPoolFromPoolIdRequest,
  ): RegisteredAlloyedPoolFromPoolIdRequestAmino {
    const obj: any = {};
    obj.pool_id =
      message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(
    object: RegisteredAlloyedPoolFromPoolIdRequestAminoMsg,
  ): RegisteredAlloyedPoolFromPoolIdRequest {
    return RegisteredAlloyedPoolFromPoolIdRequest.fromAmino(object.value);
  },
  fromProtoMsg(
    message: RegisteredAlloyedPoolFromPoolIdRequestProtoMsg,
  ): RegisteredAlloyedPoolFromPoolIdRequest {
    return RegisteredAlloyedPoolFromPoolIdRequest.decode(message.value);
  },
  toProto(message: RegisteredAlloyedPoolFromPoolIdRequest): Uint8Array {
    return RegisteredAlloyedPoolFromPoolIdRequest.encode(message).finish();
  },
  toProtoMsg(
    message: RegisteredAlloyedPoolFromPoolIdRequest,
  ): RegisteredAlloyedPoolFromPoolIdRequestProtoMsg {
    return {
      typeUrl:
        '/symphony.poolmanager.v1beta1.RegisteredAlloyedPoolFromPoolIdRequest',
      value: RegisteredAlloyedPoolFromPoolIdRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  RegisteredAlloyedPoolFromPoolIdRequest.typeUrl,
  RegisteredAlloyedPoolFromPoolIdRequest,
);
function createBaseRegisteredAlloyedPoolFromPoolIdResponse(): RegisteredAlloyedPoolFromPoolIdResponse {
  return {
    contractState: AlloyContractTakerFeeShareState.fromPartial({}),
  };
}
/**
 * @name RegisteredAlloyedPoolFromPoolIdResponse
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.RegisteredAlloyedPoolFromPoolIdResponse
 */
export const RegisteredAlloyedPoolFromPoolIdResponse = {
  typeUrl:
    '/symphony.poolmanager.v1beta1.RegisteredAlloyedPoolFromPoolIdResponse',
  is(o: any): o is RegisteredAlloyedPoolFromPoolIdResponse {
    return (
      o &&
      (o.$typeUrl === RegisteredAlloyedPoolFromPoolIdResponse.typeUrl ||
        AlloyContractTakerFeeShareState.is(o.contractState))
    );
  },
  isSDK(o: any): o is RegisteredAlloyedPoolFromPoolIdResponseSDKType {
    return (
      o &&
      (o.$typeUrl === RegisteredAlloyedPoolFromPoolIdResponse.typeUrl ||
        AlloyContractTakerFeeShareState.isSDK(o.contract_state))
    );
  },
  isAmino(o: any): o is RegisteredAlloyedPoolFromPoolIdResponseAmino {
    return (
      o &&
      (o.$typeUrl === RegisteredAlloyedPoolFromPoolIdResponse.typeUrl ||
        AlloyContractTakerFeeShareState.isAmino(o.contract_state))
    );
  },
  encode(
    message: RegisteredAlloyedPoolFromPoolIdResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.contractState !== undefined) {
      AlloyContractTakerFeeShareState.encode(
        message.contractState,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): RegisteredAlloyedPoolFromPoolIdResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisteredAlloyedPoolFromPoolIdResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractState = AlloyContractTakerFeeShareState.decode(
            reader,
            reader.uint32(),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(
    object: Partial<RegisteredAlloyedPoolFromPoolIdResponse>,
  ): RegisteredAlloyedPoolFromPoolIdResponse {
    const message = createBaseRegisteredAlloyedPoolFromPoolIdResponse();
    message.contractState =
      object.contractState !== undefined && object.contractState !== null
        ? AlloyContractTakerFeeShareState.fromPartial(object.contractState)
        : undefined;
    return message;
  },
  fromAmino(
    object: RegisteredAlloyedPoolFromPoolIdResponseAmino,
  ): RegisteredAlloyedPoolFromPoolIdResponse {
    const message = createBaseRegisteredAlloyedPoolFromPoolIdResponse();
    if (object.contract_state !== undefined && object.contract_state !== null) {
      message.contractState = AlloyContractTakerFeeShareState.fromAmino(
        object.contract_state,
      );
    }
    return message;
  },
  toAmino(
    message: RegisteredAlloyedPoolFromPoolIdResponse,
  ): RegisteredAlloyedPoolFromPoolIdResponseAmino {
    const obj: any = {};
    obj.contract_state = message.contractState
      ? AlloyContractTakerFeeShareState.toAmino(message.contractState)
      : undefined;
    return obj;
  },
  fromAminoMsg(
    object: RegisteredAlloyedPoolFromPoolIdResponseAminoMsg,
  ): RegisteredAlloyedPoolFromPoolIdResponse {
    return RegisteredAlloyedPoolFromPoolIdResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: RegisteredAlloyedPoolFromPoolIdResponseProtoMsg,
  ): RegisteredAlloyedPoolFromPoolIdResponse {
    return RegisteredAlloyedPoolFromPoolIdResponse.decode(message.value);
  },
  toProto(message: RegisteredAlloyedPoolFromPoolIdResponse): Uint8Array {
    return RegisteredAlloyedPoolFromPoolIdResponse.encode(message).finish();
  },
  toProtoMsg(
    message: RegisteredAlloyedPoolFromPoolIdResponse,
  ): RegisteredAlloyedPoolFromPoolIdResponseProtoMsg {
    return {
      typeUrl:
        '/symphony.poolmanager.v1beta1.RegisteredAlloyedPoolFromPoolIdResponse',
      value: RegisteredAlloyedPoolFromPoolIdResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  RegisteredAlloyedPoolFromPoolIdResponse.typeUrl,
  RegisteredAlloyedPoolFromPoolIdResponse,
);
function createBaseAllRegisteredAlloyedPoolsRequest(): AllRegisteredAlloyedPoolsRequest {
  return {};
}
/**
 * @name AllRegisteredAlloyedPoolsRequest
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.AllRegisteredAlloyedPoolsRequest
 */
export const AllRegisteredAlloyedPoolsRequest = {
  typeUrl: '/symphony.poolmanager.v1beta1.AllRegisteredAlloyedPoolsRequest',
  is(o: any): o is AllRegisteredAlloyedPoolsRequest {
    return o && o.$typeUrl === AllRegisteredAlloyedPoolsRequest.typeUrl;
  },
  isSDK(o: any): o is AllRegisteredAlloyedPoolsRequestSDKType {
    return o && o.$typeUrl === AllRegisteredAlloyedPoolsRequest.typeUrl;
  },
  isAmino(o: any): o is AllRegisteredAlloyedPoolsRequestAmino {
    return o && o.$typeUrl === AllRegisteredAlloyedPoolsRequest.typeUrl;
  },
  encode(
    _: AllRegisteredAlloyedPoolsRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): AllRegisteredAlloyedPoolsRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllRegisteredAlloyedPoolsRequest();
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
    _: Partial<AllRegisteredAlloyedPoolsRequest>,
  ): AllRegisteredAlloyedPoolsRequest {
    const message = createBaseAllRegisteredAlloyedPoolsRequest();
    return message;
  },
  fromAmino(
    _: AllRegisteredAlloyedPoolsRequestAmino,
  ): AllRegisteredAlloyedPoolsRequest {
    const message = createBaseAllRegisteredAlloyedPoolsRequest();
    return message;
  },
  toAmino(
    _: AllRegisteredAlloyedPoolsRequest,
  ): AllRegisteredAlloyedPoolsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(
    object: AllRegisteredAlloyedPoolsRequestAminoMsg,
  ): AllRegisteredAlloyedPoolsRequest {
    return AllRegisteredAlloyedPoolsRequest.fromAmino(object.value);
  },
  fromProtoMsg(
    message: AllRegisteredAlloyedPoolsRequestProtoMsg,
  ): AllRegisteredAlloyedPoolsRequest {
    return AllRegisteredAlloyedPoolsRequest.decode(message.value);
  },
  toProto(message: AllRegisteredAlloyedPoolsRequest): Uint8Array {
    return AllRegisteredAlloyedPoolsRequest.encode(message).finish();
  },
  toProtoMsg(
    message: AllRegisteredAlloyedPoolsRequest,
  ): AllRegisteredAlloyedPoolsRequestProtoMsg {
    return {
      typeUrl: '/symphony.poolmanager.v1beta1.AllRegisteredAlloyedPoolsRequest',
      value: AllRegisteredAlloyedPoolsRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  AllRegisteredAlloyedPoolsRequest.typeUrl,
  AllRegisteredAlloyedPoolsRequest,
);
function createBaseAllRegisteredAlloyedPoolsResponse(): AllRegisteredAlloyedPoolsResponse {
  return {
    contractStates: [],
  };
}
/**
 * @name AllRegisteredAlloyedPoolsResponse
 * @package symphony.poolmanager.v1beta1
 * @see proto type: symphony.poolmanager.v1beta1.AllRegisteredAlloyedPoolsResponse
 */
export const AllRegisteredAlloyedPoolsResponse = {
  typeUrl: '/symphony.poolmanager.v1beta1.AllRegisteredAlloyedPoolsResponse',
  is(o: any): o is AllRegisteredAlloyedPoolsResponse {
    return (
      o &&
      (o.$typeUrl === AllRegisteredAlloyedPoolsResponse.typeUrl ||
        (Array.isArray(o.contractStates) &&
          (!o.contractStates.length ||
            AlloyContractTakerFeeShareState.is(o.contractStates[0]))))
    );
  },
  isSDK(o: any): o is AllRegisteredAlloyedPoolsResponseSDKType {
    return (
      o &&
      (o.$typeUrl === AllRegisteredAlloyedPoolsResponse.typeUrl ||
        (Array.isArray(o.contract_states) &&
          (!o.contract_states.length ||
            AlloyContractTakerFeeShareState.isSDK(o.contract_states[0]))))
    );
  },
  isAmino(o: any): o is AllRegisteredAlloyedPoolsResponseAmino {
    return (
      o &&
      (o.$typeUrl === AllRegisteredAlloyedPoolsResponse.typeUrl ||
        (Array.isArray(o.contract_states) &&
          (!o.contract_states.length ||
            AlloyContractTakerFeeShareState.isAmino(o.contract_states[0]))))
    );
  },
  encode(
    message: AllRegisteredAlloyedPoolsResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.contractStates) {
      AlloyContractTakerFeeShareState.encode(
        v!,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): AllRegisteredAlloyedPoolsResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllRegisteredAlloyedPoolsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractStates.push(
            AlloyContractTakerFeeShareState.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(
    object: Partial<AllRegisteredAlloyedPoolsResponse>,
  ): AllRegisteredAlloyedPoolsResponse {
    const message = createBaseAllRegisteredAlloyedPoolsResponse();
    message.contractStates =
      object.contractStates?.map(e =>
        AlloyContractTakerFeeShareState.fromPartial(e),
      ) || [];
    return message;
  },
  fromAmino(
    object: AllRegisteredAlloyedPoolsResponseAmino,
  ): AllRegisteredAlloyedPoolsResponse {
    const message = createBaseAllRegisteredAlloyedPoolsResponse();
    message.contractStates =
      object.contract_states?.map(e =>
        AlloyContractTakerFeeShareState.fromAmino(e),
      ) || [];
    return message;
  },
  toAmino(
    message: AllRegisteredAlloyedPoolsResponse,
  ): AllRegisteredAlloyedPoolsResponseAmino {
    const obj: any = {};
    if (message.contractStates) {
      obj.contract_states = message.contractStates.map(e =>
        e ? AlloyContractTakerFeeShareState.toAmino(e) : undefined,
      );
    } else {
      obj.contract_states = message.contractStates;
    }
    return obj;
  },
  fromAminoMsg(
    object: AllRegisteredAlloyedPoolsResponseAminoMsg,
  ): AllRegisteredAlloyedPoolsResponse {
    return AllRegisteredAlloyedPoolsResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: AllRegisteredAlloyedPoolsResponseProtoMsg,
  ): AllRegisteredAlloyedPoolsResponse {
    return AllRegisteredAlloyedPoolsResponse.decode(message.value);
  },
  toProto(message: AllRegisteredAlloyedPoolsResponse): Uint8Array {
    return AllRegisteredAlloyedPoolsResponse.encode(message).finish();
  },
  toProtoMsg(
    message: AllRegisteredAlloyedPoolsResponse,
  ): AllRegisteredAlloyedPoolsResponseProtoMsg {
    return {
      typeUrl:
        '/symphony.poolmanager.v1beta1.AllRegisteredAlloyedPoolsResponse',
      value: AllRegisteredAlloyedPoolsResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  AllRegisteredAlloyedPoolsResponse.typeUrl,
  AllRegisteredAlloyedPoolsResponse,
);
