//@ts-nocheck
import {
  PageRequest,
  PageRequestAmino,
  PageRequestSDKType,
  PageResponse,
  PageResponseAmino,
  PageResponseSDKType,
} from '../../../cosmos/base/query/v1beta1/pagination';
import {
  FullPositionBreakdown,
  FullPositionBreakdownAmino,
  FullPositionBreakdownSDKType,
  PositionWithPeriodLock,
  PositionWithPeriodLockAmino,
  PositionWithPeriodLockSDKType,
} from './position';
import {
  Any,
  AnyProtoMsg,
  AnyAmino,
  AnySDKType,
} from '../../../google/protobuf/any';
import { Params, ParamsAmino, ParamsSDKType } from '../params';
import {
  Coin,
  CoinAmino,
  CoinSDKType,
  DecCoin,
  DecCoinAmino,
  DecCoinSDKType,
} from '../../../cosmos/base/v1beta1/coin';
import {
  UptimeTracker,
  UptimeTrackerAmino,
  UptimeTrackerSDKType,
} from './tick_info';
import {
  IncentiveRecord,
  IncentiveRecordAmino,
  IncentiveRecordSDKType,
} from './incentive_record';
import { Pool as Pool1 } from './pool';
import { PoolProtoMsg as Pool1ProtoMsg } from './pool';
import { PoolSDKType as Pool1SDKType } from './pool';
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
 * =============================== UserPositions
 * @name UserPositionsRequest
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.UserPositionsRequest
 */
export interface UserPositionsRequest {
  address: string;
  poolId: bigint;
  pagination?: PageRequest;
}
export interface UserPositionsRequestProtoMsg {
  typeUrl: '/symphony.concentratedliquidity.v1beta1.UserPositionsRequest';
  value: Uint8Array;
}
/**
 * =============================== UserPositions
 * @name UserPositionsRequestAmino
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.UserPositionsRequest
 */
export interface UserPositionsRequestAmino {
  address?: string;
  pool_id?: string;
  pagination?: PageRequestAmino;
}
export interface UserPositionsRequestAminoMsg {
  type: '/symphony.concentratedliquidity.v1beta1.UserPositionsRequest';
  value: UserPositionsRequestAmino;
}
/**
 * =============================== UserPositions
 * @name UserPositionsRequestSDKType
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.UserPositionsRequest
 */
export interface UserPositionsRequestSDKType {
  address: string;
  pool_id: bigint;
  pagination?: PageRequestSDKType;
}
/**
 * @name UserPositionsResponse
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.UserPositionsResponse
 */
export interface UserPositionsResponse {
  positions: FullPositionBreakdown[];
  pagination?: PageResponse;
}
export interface UserPositionsResponseProtoMsg {
  typeUrl: '/symphony.concentratedliquidity.v1beta1.UserPositionsResponse';
  value: Uint8Array;
}
/**
 * @name UserPositionsResponseAmino
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.UserPositionsResponse
 */
export interface UserPositionsResponseAmino {
  positions?: FullPositionBreakdownAmino[];
  pagination?: PageResponseAmino;
}
export interface UserPositionsResponseAminoMsg {
  type: '/symphony.concentratedliquidity.v1beta1.UserPositionsResponse';
  value: UserPositionsResponseAmino;
}
/**
 * @name UserPositionsResponseSDKType
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.UserPositionsResponse
 */
export interface UserPositionsResponseSDKType {
  positions: FullPositionBreakdownSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * =============================== PositionById
 * @name PositionByIdRequest
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.PositionByIdRequest
 */
export interface PositionByIdRequest {
  positionId: bigint;
}
export interface PositionByIdRequestProtoMsg {
  typeUrl: '/symphony.concentratedliquidity.v1beta1.PositionByIdRequest';
  value: Uint8Array;
}
/**
 * =============================== PositionById
 * @name PositionByIdRequestAmino
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.PositionByIdRequest
 */
export interface PositionByIdRequestAmino {
  position_id?: string;
}
export interface PositionByIdRequestAminoMsg {
  type: '/symphony.concentratedliquidity.v1beta1.PositionByIdRequest';
  value: PositionByIdRequestAmino;
}
/**
 * =============================== PositionById
 * @name PositionByIdRequestSDKType
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.PositionByIdRequest
 */
export interface PositionByIdRequestSDKType {
  position_id: bigint;
}
/**
 * @name PositionByIdResponse
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.PositionByIdResponse
 */
export interface PositionByIdResponse {
  position: FullPositionBreakdown;
}
export interface PositionByIdResponseProtoMsg {
  typeUrl: '/symphony.concentratedliquidity.v1beta1.PositionByIdResponse';
  value: Uint8Array;
}
/**
 * @name PositionByIdResponseAmino
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.PositionByIdResponse
 */
export interface PositionByIdResponseAmino {
  position?: FullPositionBreakdownAmino;
}
export interface PositionByIdResponseAminoMsg {
  type: '/symphony.concentratedliquidity.v1beta1.PositionByIdResponse';
  value: PositionByIdResponseAmino;
}
/**
 * @name PositionByIdResponseSDKType
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.PositionByIdResponse
 */
export interface PositionByIdResponseSDKType {
  position: FullPositionBreakdownSDKType;
}
/**
 * @name NumPoolPositionsRequest
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.NumPoolPositionsRequest
 */
export interface NumPoolPositionsRequest {
  poolId: bigint;
}
export interface NumPoolPositionsRequestProtoMsg {
  typeUrl: '/symphony.concentratedliquidity.v1beta1.NumPoolPositionsRequest';
  value: Uint8Array;
}
/**
 * @name NumPoolPositionsRequestAmino
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.NumPoolPositionsRequest
 */
export interface NumPoolPositionsRequestAmino {
  pool_id?: string;
}
export interface NumPoolPositionsRequestAminoMsg {
  type: '/symphony.concentratedliquidity.v1beta1.NumPoolPositionsRequest';
  value: NumPoolPositionsRequestAmino;
}
/**
 * @name NumPoolPositionsRequestSDKType
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.NumPoolPositionsRequest
 */
export interface NumPoolPositionsRequestSDKType {
  pool_id: bigint;
}
/**
 * @name NumPoolPositionsResponse
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.NumPoolPositionsResponse
 */
export interface NumPoolPositionsResponse {
  positionCount: bigint;
}
export interface NumPoolPositionsResponseProtoMsg {
  typeUrl: '/symphony.concentratedliquidity.v1beta1.NumPoolPositionsResponse';
  value: Uint8Array;
}
/**
 * @name NumPoolPositionsResponseAmino
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.NumPoolPositionsResponse
 */
export interface NumPoolPositionsResponseAmino {
  position_count?: string;
}
export interface NumPoolPositionsResponseAminoMsg {
  type: '/symphony.concentratedliquidity.v1beta1.NumPoolPositionsResponse';
  value: NumPoolPositionsResponseAmino;
}
/**
 * @name NumPoolPositionsResponseSDKType
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.NumPoolPositionsResponse
 */
export interface NumPoolPositionsResponseSDKType {
  position_count: bigint;
}
/**
 * =============================== Pools
 * @name PoolsRequest
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.PoolsRequest
 */
export interface PoolsRequest {
  /**
   * pagination defines an optional pagination for the request.
   */
  pagination?: PageRequest;
}
export interface PoolsRequestProtoMsg {
  typeUrl: '/symphony.concentratedliquidity.v1beta1.PoolsRequest';
  value: Uint8Array;
}
/**
 * =============================== Pools
 * @name PoolsRequestAmino
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.PoolsRequest
 */
export interface PoolsRequestAmino {
  /**
   * pagination defines an optional pagination for the request.
   */
  pagination?: PageRequestAmino;
}
export interface PoolsRequestAminoMsg {
  type: '/symphony.concentratedliquidity.v1beta1.PoolsRequest';
  value: PoolsRequestAmino;
}
/**
 * =============================== Pools
 * @name PoolsRequestSDKType
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.PoolsRequest
 */
export interface PoolsRequestSDKType {
  pagination?: PageRequestSDKType;
}
/**
 * @name PoolsResponse
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.PoolsResponse
 */
export interface PoolsResponse {
  pools: (Pool1 | CosmWasmPool | Pool2 | Pool3 | Any)[] | Any[];
  /**
   * pagination defines the pagination in the response.
   */
  pagination?: PageResponse;
}
export interface PoolsResponseProtoMsg {
  typeUrl: '/symphony.concentratedliquidity.v1beta1.PoolsResponse';
  value: Uint8Array;
}
export type PoolsResponseEncoded = Omit<PoolsResponse, 'pools'> & {
  pools: (
    | Pool1ProtoMsg
    | CosmWasmPoolProtoMsg
    | Pool2ProtoMsg
    | Pool3ProtoMsg
    | AnyProtoMsg
  )[];
};
/**
 * @name PoolsResponseAmino
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.PoolsResponse
 */
export interface PoolsResponseAmino {
  pools?: AnyAmino[];
  /**
   * pagination defines the pagination in the response.
   */
  pagination?: PageResponseAmino;
}
export interface PoolsResponseAminoMsg {
  type: '/symphony.concentratedliquidity.v1beta1.PoolsResponse';
  value: PoolsResponseAmino;
}
/**
 * @name PoolsResponseSDKType
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.PoolsResponse
 */
export interface PoolsResponseSDKType {
  pools: (
    | Pool1SDKType
    | CosmWasmPoolSDKType
    | Pool2SDKType
    | Pool3SDKType
    | AnySDKType
  )[];
  pagination?: PageResponseSDKType;
}
/**
 * =============================== ModuleParams
 * @name ParamsRequest
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.ParamsRequest
 */
export interface ParamsRequest {}
export interface ParamsRequestProtoMsg {
  typeUrl: '/symphony.concentratedliquidity.v1beta1.ParamsRequest';
  value: Uint8Array;
}
/**
 * =============================== ModuleParams
 * @name ParamsRequestAmino
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.ParamsRequest
 */
export interface ParamsRequestAmino {}
export interface ParamsRequestAminoMsg {
  type: '/symphony.concentratedliquidity.v1beta1.ParamsRequest';
  value: ParamsRequestAmino;
}
/**
 * =============================== ModuleParams
 * @name ParamsRequestSDKType
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.ParamsRequest
 */
export interface ParamsRequestSDKType {}
/**
 * @name ParamsResponse
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.ParamsResponse
 */
export interface ParamsResponse {
  params: Params;
}
export interface ParamsResponseProtoMsg {
  typeUrl: '/symphony.concentratedliquidity.v1beta1.ParamsResponse';
  value: Uint8Array;
}
/**
 * @name ParamsResponseAmino
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.ParamsResponse
 */
export interface ParamsResponseAmino {
  params?: ParamsAmino;
}
export interface ParamsResponseAminoMsg {
  type: '/symphony.concentratedliquidity.v1beta1.ParamsResponse';
  value: ParamsResponseAmino;
}
/**
 * @name ParamsResponseSDKType
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.ParamsResponse
 */
export interface ParamsResponseSDKType {
  params: ParamsSDKType;
}
/**
 * @name TickLiquidityNet
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.TickLiquidityNet
 */
export interface TickLiquidityNet {
  liquidityNet: string;
  tickIndex: bigint;
}
export interface TickLiquidityNetProtoMsg {
  typeUrl: '/symphony.concentratedliquidity.v1beta1.TickLiquidityNet';
  value: Uint8Array;
}
/**
 * @name TickLiquidityNetAmino
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.TickLiquidityNet
 */
export interface TickLiquidityNetAmino {
  liquidity_net?: string;
  tick_index?: string;
}
export interface TickLiquidityNetAminoMsg {
  type: '/symphony.concentratedliquidity.v1beta1.TickLiquidityNet';
  value: TickLiquidityNetAmino;
}
/**
 * @name TickLiquidityNetSDKType
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.TickLiquidityNet
 */
export interface TickLiquidityNetSDKType {
  liquidity_net: string;
  tick_index: bigint;
}
/**
 * @name LiquidityDepthWithRange
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.LiquidityDepthWithRange
 */
export interface LiquidityDepthWithRange {
  liquidityAmount: string;
  lowerTick: bigint;
  upperTick: bigint;
}
export interface LiquidityDepthWithRangeProtoMsg {
  typeUrl: '/symphony.concentratedliquidity.v1beta1.LiquidityDepthWithRange';
  value: Uint8Array;
}
/**
 * @name LiquidityDepthWithRangeAmino
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.LiquidityDepthWithRange
 */
export interface LiquidityDepthWithRangeAmino {
  liquidity_amount?: string;
  lower_tick?: string;
  upper_tick?: string;
}
export interface LiquidityDepthWithRangeAminoMsg {
  type: '/symphony.concentratedliquidity.v1beta1.LiquidityDepthWithRange';
  value: LiquidityDepthWithRangeAmino;
}
/**
 * @name LiquidityDepthWithRangeSDKType
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.LiquidityDepthWithRange
 */
export interface LiquidityDepthWithRangeSDKType {
  liquidity_amount: string;
  lower_tick: bigint;
  upper_tick: bigint;
}
/**
 * =============================== LiquidityNetInDirection
 * @name LiquidityNetInDirectionRequest
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.LiquidityNetInDirectionRequest
 */
export interface LiquidityNetInDirectionRequest {
  poolId: bigint;
  tokenIn: string;
  startTick: bigint;
  useCurTick: boolean;
  boundTick: bigint;
  useNoBound: boolean;
}
export interface LiquidityNetInDirectionRequestProtoMsg {
  typeUrl: '/symphony.concentratedliquidity.v1beta1.LiquidityNetInDirectionRequest';
  value: Uint8Array;
}
/**
 * =============================== LiquidityNetInDirection
 * @name LiquidityNetInDirectionRequestAmino
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.LiquidityNetInDirectionRequest
 */
export interface LiquidityNetInDirectionRequestAmino {
  pool_id?: string;
  token_in?: string;
  start_tick?: string;
  use_cur_tick?: boolean;
  bound_tick?: string;
  use_no_bound?: boolean;
}
export interface LiquidityNetInDirectionRequestAminoMsg {
  type: '/symphony.concentratedliquidity.v1beta1.LiquidityNetInDirectionRequest';
  value: LiquidityNetInDirectionRequestAmino;
}
/**
 * =============================== LiquidityNetInDirection
 * @name LiquidityNetInDirectionRequestSDKType
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.LiquidityNetInDirectionRequest
 */
export interface LiquidityNetInDirectionRequestSDKType {
  pool_id: bigint;
  token_in: string;
  start_tick: bigint;
  use_cur_tick: boolean;
  bound_tick: bigint;
  use_no_bound: boolean;
}
/**
 * @name LiquidityNetInDirectionResponse
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.LiquidityNetInDirectionResponse
 */
export interface LiquidityNetInDirectionResponse {
  liquidityDepths: TickLiquidityNet[];
  currentTick: bigint;
  currentLiquidity: string;
  currentSqrtPrice: string;
}
export interface LiquidityNetInDirectionResponseProtoMsg {
  typeUrl: '/symphony.concentratedliquidity.v1beta1.LiquidityNetInDirectionResponse';
  value: Uint8Array;
}
/**
 * @name LiquidityNetInDirectionResponseAmino
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.LiquidityNetInDirectionResponse
 */
export interface LiquidityNetInDirectionResponseAmino {
  liquidity_depths?: TickLiquidityNetAmino[];
  current_tick?: string;
  current_liquidity?: string;
  current_sqrt_price?: string;
}
export interface LiquidityNetInDirectionResponseAminoMsg {
  type: '/symphony.concentratedliquidity.v1beta1.LiquidityNetInDirectionResponse';
  value: LiquidityNetInDirectionResponseAmino;
}
/**
 * @name LiquidityNetInDirectionResponseSDKType
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.LiquidityNetInDirectionResponse
 */
export interface LiquidityNetInDirectionResponseSDKType {
  liquidity_depths: TickLiquidityNetSDKType[];
  current_tick: bigint;
  current_liquidity: string;
  current_sqrt_price: string;
}
/**
 * =============================== LiquidityPerTickRange
 * @name LiquidityPerTickRangeRequest
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.LiquidityPerTickRangeRequest
 */
export interface LiquidityPerTickRangeRequest {
  poolId: bigint;
}
export interface LiquidityPerTickRangeRequestProtoMsg {
  typeUrl: '/symphony.concentratedliquidity.v1beta1.LiquidityPerTickRangeRequest';
  value: Uint8Array;
}
/**
 * =============================== LiquidityPerTickRange
 * @name LiquidityPerTickRangeRequestAmino
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.LiquidityPerTickRangeRequest
 */
export interface LiquidityPerTickRangeRequestAmino {
  pool_id?: string;
}
export interface LiquidityPerTickRangeRequestAminoMsg {
  type: '/symphony.concentratedliquidity.v1beta1.LiquidityPerTickRangeRequest';
  value: LiquidityPerTickRangeRequestAmino;
}
/**
 * =============================== LiquidityPerTickRange
 * @name LiquidityPerTickRangeRequestSDKType
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.LiquidityPerTickRangeRequest
 */
export interface LiquidityPerTickRangeRequestSDKType {
  pool_id: bigint;
}
/**
 * @name LiquidityPerTickRangeResponse
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.LiquidityPerTickRangeResponse
 */
export interface LiquidityPerTickRangeResponse {
  liquidity: LiquidityDepthWithRange[];
  bucketIndex: bigint;
}
export interface LiquidityPerTickRangeResponseProtoMsg {
  typeUrl: '/symphony.concentratedliquidity.v1beta1.LiquidityPerTickRangeResponse';
  value: Uint8Array;
}
/**
 * @name LiquidityPerTickRangeResponseAmino
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.LiquidityPerTickRangeResponse
 */
export interface LiquidityPerTickRangeResponseAmino {
  liquidity?: LiquidityDepthWithRangeAmino[];
  bucket_index?: string;
}
export interface LiquidityPerTickRangeResponseAminoMsg {
  type: '/symphony.concentratedliquidity.v1beta1.LiquidityPerTickRangeResponse';
  value: LiquidityPerTickRangeResponseAmino;
}
/**
 * @name LiquidityPerTickRangeResponseSDKType
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.LiquidityPerTickRangeResponse
 */
export interface LiquidityPerTickRangeResponseSDKType {
  liquidity: LiquidityDepthWithRangeSDKType[];
  bucket_index: bigint;
}
/**
 * ===================== QueryClaimableSpreadRewards
 * @name ClaimableSpreadRewardsRequest
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.ClaimableSpreadRewardsRequest
 */
export interface ClaimableSpreadRewardsRequest {
  positionId: bigint;
}
export interface ClaimableSpreadRewardsRequestProtoMsg {
  typeUrl: '/symphony.concentratedliquidity.v1beta1.ClaimableSpreadRewardsRequest';
  value: Uint8Array;
}
/**
 * ===================== QueryClaimableSpreadRewards
 * @name ClaimableSpreadRewardsRequestAmino
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.ClaimableSpreadRewardsRequest
 */
export interface ClaimableSpreadRewardsRequestAmino {
  position_id?: string;
}
export interface ClaimableSpreadRewardsRequestAminoMsg {
  type: '/symphony.concentratedliquidity.v1beta1.ClaimableSpreadRewardsRequest';
  value: ClaimableSpreadRewardsRequestAmino;
}
/**
 * ===================== QueryClaimableSpreadRewards
 * @name ClaimableSpreadRewardsRequestSDKType
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.ClaimableSpreadRewardsRequest
 */
export interface ClaimableSpreadRewardsRequestSDKType {
  position_id: bigint;
}
/**
 * @name ClaimableSpreadRewardsResponse
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.ClaimableSpreadRewardsResponse
 */
export interface ClaimableSpreadRewardsResponse {
  claimableSpreadRewards: Coin[];
}
export interface ClaimableSpreadRewardsResponseProtoMsg {
  typeUrl: '/symphony.concentratedliquidity.v1beta1.ClaimableSpreadRewardsResponse';
  value: Uint8Array;
}
/**
 * @name ClaimableSpreadRewardsResponseAmino
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.ClaimableSpreadRewardsResponse
 */
export interface ClaimableSpreadRewardsResponseAmino {
  claimable_spread_rewards?: CoinAmino[];
}
export interface ClaimableSpreadRewardsResponseAminoMsg {
  type: '/symphony.concentratedliquidity.v1beta1.ClaimableSpreadRewardsResponse';
  value: ClaimableSpreadRewardsResponseAmino;
}
/**
 * @name ClaimableSpreadRewardsResponseSDKType
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.ClaimableSpreadRewardsResponse
 */
export interface ClaimableSpreadRewardsResponseSDKType {
  claimable_spread_rewards: CoinSDKType[];
}
/**
 * ===================== QueryClaimableIncentives
 * @name ClaimableIncentivesRequest
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.ClaimableIncentivesRequest
 */
export interface ClaimableIncentivesRequest {
  positionId: bigint;
}
export interface ClaimableIncentivesRequestProtoMsg {
  typeUrl: '/symphony.concentratedliquidity.v1beta1.ClaimableIncentivesRequest';
  value: Uint8Array;
}
/**
 * ===================== QueryClaimableIncentives
 * @name ClaimableIncentivesRequestAmino
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.ClaimableIncentivesRequest
 */
export interface ClaimableIncentivesRequestAmino {
  position_id?: string;
}
export interface ClaimableIncentivesRequestAminoMsg {
  type: '/symphony.concentratedliquidity.v1beta1.ClaimableIncentivesRequest';
  value: ClaimableIncentivesRequestAmino;
}
/**
 * ===================== QueryClaimableIncentives
 * @name ClaimableIncentivesRequestSDKType
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.ClaimableIncentivesRequest
 */
export interface ClaimableIncentivesRequestSDKType {
  position_id: bigint;
}
/**
 * @name ClaimableIncentivesResponse
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.ClaimableIncentivesResponse
 */
export interface ClaimableIncentivesResponse {
  claimableIncentives: Coin[];
  forfeitedIncentives: Coin[];
}
export interface ClaimableIncentivesResponseProtoMsg {
  typeUrl: '/symphony.concentratedliquidity.v1beta1.ClaimableIncentivesResponse';
  value: Uint8Array;
}
/**
 * @name ClaimableIncentivesResponseAmino
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.ClaimableIncentivesResponse
 */
export interface ClaimableIncentivesResponseAmino {
  claimable_incentives?: CoinAmino[];
  forfeited_incentives?: CoinAmino[];
}
export interface ClaimableIncentivesResponseAminoMsg {
  type: '/symphony.concentratedliquidity.v1beta1.ClaimableIncentivesResponse';
  value: ClaimableIncentivesResponseAmino;
}
/**
 * @name ClaimableIncentivesResponseSDKType
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.ClaimableIncentivesResponse
 */
export interface ClaimableIncentivesResponseSDKType {
  claimable_incentives: CoinSDKType[];
  forfeited_incentives: CoinSDKType[];
}
/**
 * ===================== QueryPoolAccumulatorRewards
 * @name PoolAccumulatorRewardsRequest
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.PoolAccumulatorRewardsRequest
 */
export interface PoolAccumulatorRewardsRequest {
  poolId: bigint;
}
export interface PoolAccumulatorRewardsRequestProtoMsg {
  typeUrl: '/symphony.concentratedliquidity.v1beta1.PoolAccumulatorRewardsRequest';
  value: Uint8Array;
}
/**
 * ===================== QueryPoolAccumulatorRewards
 * @name PoolAccumulatorRewardsRequestAmino
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.PoolAccumulatorRewardsRequest
 */
export interface PoolAccumulatorRewardsRequestAmino {
  pool_id?: string;
}
export interface PoolAccumulatorRewardsRequestAminoMsg {
  type: '/symphony.concentratedliquidity.v1beta1.PoolAccumulatorRewardsRequest';
  value: PoolAccumulatorRewardsRequestAmino;
}
/**
 * ===================== QueryPoolAccumulatorRewards
 * @name PoolAccumulatorRewardsRequestSDKType
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.PoolAccumulatorRewardsRequest
 */
export interface PoolAccumulatorRewardsRequestSDKType {
  pool_id: bigint;
}
/**
 * @name PoolAccumulatorRewardsResponse
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.PoolAccumulatorRewardsResponse
 */
export interface PoolAccumulatorRewardsResponse {
  spreadRewardGrowthGlobal: DecCoin[];
  uptimeGrowthGlobal: UptimeTracker[];
}
export interface PoolAccumulatorRewardsResponseProtoMsg {
  typeUrl: '/symphony.concentratedliquidity.v1beta1.PoolAccumulatorRewardsResponse';
  value: Uint8Array;
}
/**
 * @name PoolAccumulatorRewardsResponseAmino
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.PoolAccumulatorRewardsResponse
 */
export interface PoolAccumulatorRewardsResponseAmino {
  spread_reward_growth_global?: DecCoinAmino[];
  uptime_growth_global?: UptimeTrackerAmino[];
}
export interface PoolAccumulatorRewardsResponseAminoMsg {
  type: '/symphony.concentratedliquidity.v1beta1.PoolAccumulatorRewardsResponse';
  value: PoolAccumulatorRewardsResponseAmino;
}
/**
 * @name PoolAccumulatorRewardsResponseSDKType
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.PoolAccumulatorRewardsResponse
 */
export interface PoolAccumulatorRewardsResponseSDKType {
  spread_reward_growth_global: DecCoinSDKType[];
  uptime_growth_global: UptimeTrackerSDKType[];
}
/**
 * ===================== QueryTickAccumulatorTrackers
 * @name TickAccumulatorTrackersRequest
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.TickAccumulatorTrackersRequest
 */
export interface TickAccumulatorTrackersRequest {
  poolId: bigint;
  tickIndex: bigint;
}
export interface TickAccumulatorTrackersRequestProtoMsg {
  typeUrl: '/symphony.concentratedliquidity.v1beta1.TickAccumulatorTrackersRequest';
  value: Uint8Array;
}
/**
 * ===================== QueryTickAccumulatorTrackers
 * @name TickAccumulatorTrackersRequestAmino
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.TickAccumulatorTrackersRequest
 */
export interface TickAccumulatorTrackersRequestAmino {
  pool_id?: string;
  tick_index?: string;
}
export interface TickAccumulatorTrackersRequestAminoMsg {
  type: '/symphony.concentratedliquidity.v1beta1.TickAccumulatorTrackersRequest';
  value: TickAccumulatorTrackersRequestAmino;
}
/**
 * ===================== QueryTickAccumulatorTrackers
 * @name TickAccumulatorTrackersRequestSDKType
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.TickAccumulatorTrackersRequest
 */
export interface TickAccumulatorTrackersRequestSDKType {
  pool_id: bigint;
  tick_index: bigint;
}
/**
 * @name TickAccumulatorTrackersResponse
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.TickAccumulatorTrackersResponse
 */
export interface TickAccumulatorTrackersResponse {
  spreadRewardGrowthOppositeDirectionOfLastTraversal: DecCoin[];
  uptimeTrackers: UptimeTracker[];
}
export interface TickAccumulatorTrackersResponseProtoMsg {
  typeUrl: '/symphony.concentratedliquidity.v1beta1.TickAccumulatorTrackersResponse';
  value: Uint8Array;
}
/**
 * @name TickAccumulatorTrackersResponseAmino
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.TickAccumulatorTrackersResponse
 */
export interface TickAccumulatorTrackersResponseAmino {
  spread_reward_growth_opposite_direction_of_last_traversal?: DecCoinAmino[];
  uptime_trackers?: UptimeTrackerAmino[];
}
export interface TickAccumulatorTrackersResponseAminoMsg {
  type: '/symphony.concentratedliquidity.v1beta1.TickAccumulatorTrackersResponse';
  value: TickAccumulatorTrackersResponseAmino;
}
/**
 * @name TickAccumulatorTrackersResponseSDKType
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.TickAccumulatorTrackersResponse
 */
export interface TickAccumulatorTrackersResponseSDKType {
  spread_reward_growth_opposite_direction_of_last_traversal: DecCoinSDKType[];
  uptime_trackers: UptimeTrackerSDKType[];
}
/**
 * ===================== QueryIncentiveRecords
 * @name IncentiveRecordsRequest
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.IncentiveRecordsRequest
 */
export interface IncentiveRecordsRequest {
  poolId: bigint;
  pagination?: PageRequest;
}
export interface IncentiveRecordsRequestProtoMsg {
  typeUrl: '/symphony.concentratedliquidity.v1beta1.IncentiveRecordsRequest';
  value: Uint8Array;
}
/**
 * ===================== QueryIncentiveRecords
 * @name IncentiveRecordsRequestAmino
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.IncentiveRecordsRequest
 */
export interface IncentiveRecordsRequestAmino {
  pool_id?: string;
  pagination?: PageRequestAmino;
}
export interface IncentiveRecordsRequestAminoMsg {
  type: '/symphony.concentratedliquidity.v1beta1.IncentiveRecordsRequest';
  value: IncentiveRecordsRequestAmino;
}
/**
 * ===================== QueryIncentiveRecords
 * @name IncentiveRecordsRequestSDKType
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.IncentiveRecordsRequest
 */
export interface IncentiveRecordsRequestSDKType {
  pool_id: bigint;
  pagination?: PageRequestSDKType;
}
/**
 * @name IncentiveRecordsResponse
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.IncentiveRecordsResponse
 */
export interface IncentiveRecordsResponse {
  incentiveRecords: IncentiveRecord[];
  /**
   * pagination defines the pagination in the response.
   */
  pagination?: PageResponse;
}
export interface IncentiveRecordsResponseProtoMsg {
  typeUrl: '/symphony.concentratedliquidity.v1beta1.IncentiveRecordsResponse';
  value: Uint8Array;
}
/**
 * @name IncentiveRecordsResponseAmino
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.IncentiveRecordsResponse
 */
export interface IncentiveRecordsResponseAmino {
  incentive_records?: IncentiveRecordAmino[];
  /**
   * pagination defines the pagination in the response.
   */
  pagination?: PageResponseAmino;
}
export interface IncentiveRecordsResponseAminoMsg {
  type: '/symphony.concentratedliquidity.v1beta1.IncentiveRecordsResponse';
  value: IncentiveRecordsResponseAmino;
}
/**
 * @name IncentiveRecordsResponseSDKType
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.IncentiveRecordsResponse
 */
export interface IncentiveRecordsResponseSDKType {
  incentive_records: IncentiveRecordSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * =============================== CFMMPoolIdLinkFromConcentratedPoolId
 * @name CFMMPoolIdLinkFromConcentratedPoolIdRequest
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.CFMMPoolIdLinkFromConcentratedPoolIdRequest
 */
export interface CFMMPoolIdLinkFromConcentratedPoolIdRequest {
  concentratedPoolId: bigint;
}
export interface CFMMPoolIdLinkFromConcentratedPoolIdRequestProtoMsg {
  typeUrl: '/symphony.concentratedliquidity.v1beta1.CFMMPoolIdLinkFromConcentratedPoolIdRequest';
  value: Uint8Array;
}
/**
 * =============================== CFMMPoolIdLinkFromConcentratedPoolId
 * @name CFMMPoolIdLinkFromConcentratedPoolIdRequestAmino
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.CFMMPoolIdLinkFromConcentratedPoolIdRequest
 */
export interface CFMMPoolIdLinkFromConcentratedPoolIdRequestAmino {
  concentrated_pool_id?: string;
}
export interface CFMMPoolIdLinkFromConcentratedPoolIdRequestAminoMsg {
  type: '/symphony.concentratedliquidity.v1beta1.CFMMPoolIdLinkFromConcentratedPoolIdRequest';
  value: CFMMPoolIdLinkFromConcentratedPoolIdRequestAmino;
}
/**
 * =============================== CFMMPoolIdLinkFromConcentratedPoolId
 * @name CFMMPoolIdLinkFromConcentratedPoolIdRequestSDKType
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.CFMMPoolIdLinkFromConcentratedPoolIdRequest
 */
export interface CFMMPoolIdLinkFromConcentratedPoolIdRequestSDKType {
  concentrated_pool_id: bigint;
}
/**
 * @name CFMMPoolIdLinkFromConcentratedPoolIdResponse
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.CFMMPoolIdLinkFromConcentratedPoolIdResponse
 */
export interface CFMMPoolIdLinkFromConcentratedPoolIdResponse {
  cfmmPoolId: bigint;
}
export interface CFMMPoolIdLinkFromConcentratedPoolIdResponseProtoMsg {
  typeUrl: '/symphony.concentratedliquidity.v1beta1.CFMMPoolIdLinkFromConcentratedPoolIdResponse';
  value: Uint8Array;
}
/**
 * @name CFMMPoolIdLinkFromConcentratedPoolIdResponseAmino
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.CFMMPoolIdLinkFromConcentratedPoolIdResponse
 */
export interface CFMMPoolIdLinkFromConcentratedPoolIdResponseAmino {
  cfmm_pool_id?: string;
}
export interface CFMMPoolIdLinkFromConcentratedPoolIdResponseAminoMsg {
  type: '/symphony.concentratedliquidity.v1beta1.CFMMPoolIdLinkFromConcentratedPoolIdResponse';
  value: CFMMPoolIdLinkFromConcentratedPoolIdResponseAmino;
}
/**
 * @name CFMMPoolIdLinkFromConcentratedPoolIdResponseSDKType
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.CFMMPoolIdLinkFromConcentratedPoolIdResponse
 */
export interface CFMMPoolIdLinkFromConcentratedPoolIdResponseSDKType {
  cfmm_pool_id: bigint;
}
/**
 * =============================== UserUnbondingPositions
 * @name UserUnbondingPositionsRequest
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.UserUnbondingPositionsRequest
 */
export interface UserUnbondingPositionsRequest {
  address: string;
}
export interface UserUnbondingPositionsRequestProtoMsg {
  typeUrl: '/symphony.concentratedliquidity.v1beta1.UserUnbondingPositionsRequest';
  value: Uint8Array;
}
/**
 * =============================== UserUnbondingPositions
 * @name UserUnbondingPositionsRequestAmino
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.UserUnbondingPositionsRequest
 */
export interface UserUnbondingPositionsRequestAmino {
  address?: string;
}
export interface UserUnbondingPositionsRequestAminoMsg {
  type: '/symphony.concentratedliquidity.v1beta1.UserUnbondingPositionsRequest';
  value: UserUnbondingPositionsRequestAmino;
}
/**
 * =============================== UserUnbondingPositions
 * @name UserUnbondingPositionsRequestSDKType
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.UserUnbondingPositionsRequest
 */
export interface UserUnbondingPositionsRequestSDKType {
  address: string;
}
/**
 * @name UserUnbondingPositionsResponse
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.UserUnbondingPositionsResponse
 */
export interface UserUnbondingPositionsResponse {
  positionsWithPeriodLock: PositionWithPeriodLock[];
}
export interface UserUnbondingPositionsResponseProtoMsg {
  typeUrl: '/symphony.concentratedliquidity.v1beta1.UserUnbondingPositionsResponse';
  value: Uint8Array;
}
/**
 * @name UserUnbondingPositionsResponseAmino
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.UserUnbondingPositionsResponse
 */
export interface UserUnbondingPositionsResponseAmino {
  positions_with_period_lock?: PositionWithPeriodLockAmino[];
}
export interface UserUnbondingPositionsResponseAminoMsg {
  type: '/symphony.concentratedliquidity.v1beta1.UserUnbondingPositionsResponse';
  value: UserUnbondingPositionsResponseAmino;
}
/**
 * @name UserUnbondingPositionsResponseSDKType
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.UserUnbondingPositionsResponse
 */
export interface UserUnbondingPositionsResponseSDKType {
  positions_with_period_lock: PositionWithPeriodLockSDKType[];
}
/**
 * =============================== GetTotalLiquidity
 * @name GetTotalLiquidityRequest
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.GetTotalLiquidityRequest
 */
export interface GetTotalLiquidityRequest {}
export interface GetTotalLiquidityRequestProtoMsg {
  typeUrl: '/symphony.concentratedliquidity.v1beta1.GetTotalLiquidityRequest';
  value: Uint8Array;
}
/**
 * =============================== GetTotalLiquidity
 * @name GetTotalLiquidityRequestAmino
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.GetTotalLiquidityRequest
 */
export interface GetTotalLiquidityRequestAmino {}
export interface GetTotalLiquidityRequestAminoMsg {
  type: '/symphony.concentratedliquidity.v1beta1.GetTotalLiquidityRequest';
  value: GetTotalLiquidityRequestAmino;
}
/**
 * =============================== GetTotalLiquidity
 * @name GetTotalLiquidityRequestSDKType
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.GetTotalLiquidityRequest
 */
export interface GetTotalLiquidityRequestSDKType {}
/**
 * @name GetTotalLiquidityResponse
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.GetTotalLiquidityResponse
 */
export interface GetTotalLiquidityResponse {
  totalLiquidity: Coin[];
}
export interface GetTotalLiquidityResponseProtoMsg {
  typeUrl: '/symphony.concentratedliquidity.v1beta1.GetTotalLiquidityResponse';
  value: Uint8Array;
}
/**
 * @name GetTotalLiquidityResponseAmino
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.GetTotalLiquidityResponse
 */
export interface GetTotalLiquidityResponseAmino {
  total_liquidity?: CoinAmino[];
}
export interface GetTotalLiquidityResponseAminoMsg {
  type: '/symphony.concentratedliquidity.v1beta1.GetTotalLiquidityResponse';
  value: GetTotalLiquidityResponseAmino;
}
/**
 * @name GetTotalLiquidityResponseSDKType
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.GetTotalLiquidityResponse
 */
export interface GetTotalLiquidityResponseSDKType {
  total_liquidity: CoinSDKType[];
}
/**
 * =============================== NumNextInitializedTicks
 * @name NumNextInitializedTicksRequest
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.NumNextInitializedTicksRequest
 */
export interface NumNextInitializedTicksRequest {
  poolId: bigint;
  tokenInDenom: string;
  numNextInitializedTicks: bigint;
}
export interface NumNextInitializedTicksRequestProtoMsg {
  typeUrl: '/symphony.concentratedliquidity.v1beta1.NumNextInitializedTicksRequest';
  value: Uint8Array;
}
/**
 * =============================== NumNextInitializedTicks
 * @name NumNextInitializedTicksRequestAmino
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.NumNextInitializedTicksRequest
 */
export interface NumNextInitializedTicksRequestAmino {
  pool_id?: string;
  token_in_denom?: string;
  num_next_initialized_ticks?: string;
}
export interface NumNextInitializedTicksRequestAminoMsg {
  type: '/symphony.concentratedliquidity.v1beta1.NumNextInitializedTicksRequest';
  value: NumNextInitializedTicksRequestAmino;
}
/**
 * =============================== NumNextInitializedTicks
 * @name NumNextInitializedTicksRequestSDKType
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.NumNextInitializedTicksRequest
 */
export interface NumNextInitializedTicksRequestSDKType {
  pool_id: bigint;
  token_in_denom: string;
  num_next_initialized_ticks: bigint;
}
/**
 * @name NumNextInitializedTicksResponse
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.NumNextInitializedTicksResponse
 */
export interface NumNextInitializedTicksResponse {
  liquidityDepths: TickLiquidityNet[];
  currentTick: bigint;
  currentLiquidity: string;
}
export interface NumNextInitializedTicksResponseProtoMsg {
  typeUrl: '/symphony.concentratedliquidity.v1beta1.NumNextInitializedTicksResponse';
  value: Uint8Array;
}
/**
 * @name NumNextInitializedTicksResponseAmino
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.NumNextInitializedTicksResponse
 */
export interface NumNextInitializedTicksResponseAmino {
  liquidity_depths?: TickLiquidityNetAmino[];
  current_tick?: string;
  current_liquidity?: string;
}
export interface NumNextInitializedTicksResponseAminoMsg {
  type: '/symphony.concentratedliquidity.v1beta1.NumNextInitializedTicksResponse';
  value: NumNextInitializedTicksResponseAmino;
}
/**
 * @name NumNextInitializedTicksResponseSDKType
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.NumNextInitializedTicksResponse
 */
export interface NumNextInitializedTicksResponseSDKType {
  liquidity_depths: TickLiquidityNetSDKType[];
  current_tick: bigint;
  current_liquidity: string;
}
function createBaseUserPositionsRequest(): UserPositionsRequest {
  return {
    address: '',
    poolId: BigInt(0),
    pagination: undefined,
  };
}
/**
 * =============================== UserPositions
 * @name UserPositionsRequest
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.UserPositionsRequest
 */
export const UserPositionsRequest = {
  typeUrl: '/symphony.concentratedliquidity.v1beta1.UserPositionsRequest',
  is(o: any): o is UserPositionsRequest {
    return (
      o &&
      (o.$typeUrl === UserPositionsRequest.typeUrl ||
        (typeof o.address === 'string' && typeof o.poolId === 'bigint'))
    );
  },
  isSDK(o: any): o is UserPositionsRequestSDKType {
    return (
      o &&
      (o.$typeUrl === UserPositionsRequest.typeUrl ||
        (typeof o.address === 'string' && typeof o.pool_id === 'bigint'))
    );
  },
  isAmino(o: any): o is UserPositionsRequestAmino {
    return (
      o &&
      (o.$typeUrl === UserPositionsRequest.typeUrl ||
        (typeof o.address === 'string' && typeof o.pool_id === 'bigint'))
    );
  },
  encode(
    message: UserPositionsRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.address !== '') {
      writer.uint32(10).string(message.address);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): UserPositionsRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserPositionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64();
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
  fromPartial(object: Partial<UserPositionsRequest>): UserPositionsRequest {
    const message = createBaseUserPositionsRequest();
    message.address = object.address ?? '';
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? BigInt(object.poolId.toString())
        : BigInt(0);
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
  fromAmino(object: UserPositionsRequestAmino): UserPositionsRequest {
    const message = createBaseUserPositionsRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: UserPositionsRequest): UserPositionsRequestAmino {
    const obj: any = {};
    obj.address = message.address === '' ? undefined : message.address;
    obj.pool_id =
      message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    obj.pagination = message.pagination
      ? PageRequest.toAmino(message.pagination)
      : undefined;
    return obj;
  },
  fromAminoMsg(object: UserPositionsRequestAminoMsg): UserPositionsRequest {
    return UserPositionsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: UserPositionsRequestProtoMsg): UserPositionsRequest {
    return UserPositionsRequest.decode(message.value);
  },
  toProto(message: UserPositionsRequest): Uint8Array {
    return UserPositionsRequest.encode(message).finish();
  },
  toProtoMsg(message: UserPositionsRequest): UserPositionsRequestProtoMsg {
    return {
      typeUrl: '/symphony.concentratedliquidity.v1beta1.UserPositionsRequest',
      value: UserPositionsRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  UserPositionsRequest.typeUrl,
  UserPositionsRequest,
);
function createBaseUserPositionsResponse(): UserPositionsResponse {
  return {
    positions: [],
    pagination: undefined,
  };
}
/**
 * @name UserPositionsResponse
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.UserPositionsResponse
 */
export const UserPositionsResponse = {
  typeUrl: '/symphony.concentratedliquidity.v1beta1.UserPositionsResponse',
  is(o: any): o is UserPositionsResponse {
    return (
      o &&
      (o.$typeUrl === UserPositionsResponse.typeUrl ||
        (Array.isArray(o.positions) &&
          (!o.positions.length || FullPositionBreakdown.is(o.positions[0]))))
    );
  },
  isSDK(o: any): o is UserPositionsResponseSDKType {
    return (
      o &&
      (o.$typeUrl === UserPositionsResponse.typeUrl ||
        (Array.isArray(o.positions) &&
          (!o.positions.length || FullPositionBreakdown.isSDK(o.positions[0]))))
    );
  },
  isAmino(o: any): o is UserPositionsResponseAmino {
    return (
      o &&
      (o.$typeUrl === UserPositionsResponse.typeUrl ||
        (Array.isArray(o.positions) &&
          (!o.positions.length ||
            FullPositionBreakdown.isAmino(o.positions[0]))))
    );
  },
  encode(
    message: UserPositionsResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.positions) {
      FullPositionBreakdown.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): UserPositionsResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserPositionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.positions.push(
            FullPositionBreakdown.decode(reader, reader.uint32()),
          );
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
  fromPartial(object: Partial<UserPositionsResponse>): UserPositionsResponse {
    const message = createBaseUserPositionsResponse();
    message.positions =
      object.positions?.map(e => FullPositionBreakdown.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
  fromAmino(object: UserPositionsResponseAmino): UserPositionsResponse {
    const message = createBaseUserPositionsResponse();
    message.positions =
      object.positions?.map(e => FullPositionBreakdown.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: UserPositionsResponse): UserPositionsResponseAmino {
    const obj: any = {};
    if (message.positions) {
      obj.positions = message.positions.map(e =>
        e ? FullPositionBreakdown.toAmino(e) : undefined,
      );
    } else {
      obj.positions = message.positions;
    }
    obj.pagination = message.pagination
      ? PageResponse.toAmino(message.pagination)
      : undefined;
    return obj;
  },
  fromAminoMsg(object: UserPositionsResponseAminoMsg): UserPositionsResponse {
    return UserPositionsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: UserPositionsResponseProtoMsg): UserPositionsResponse {
    return UserPositionsResponse.decode(message.value);
  },
  toProto(message: UserPositionsResponse): Uint8Array {
    return UserPositionsResponse.encode(message).finish();
  },
  toProtoMsg(message: UserPositionsResponse): UserPositionsResponseProtoMsg {
    return {
      typeUrl: '/symphony.concentratedliquidity.v1beta1.UserPositionsResponse',
      value: UserPositionsResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  UserPositionsResponse.typeUrl,
  UserPositionsResponse,
);
function createBasePositionByIdRequest(): PositionByIdRequest {
  return {
    positionId: BigInt(0),
  };
}
/**
 * =============================== PositionById
 * @name PositionByIdRequest
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.PositionByIdRequest
 */
export const PositionByIdRequest = {
  typeUrl: '/symphony.concentratedliquidity.v1beta1.PositionByIdRequest',
  is(o: any): o is PositionByIdRequest {
    return (
      o &&
      (o.$typeUrl === PositionByIdRequest.typeUrl ||
        typeof o.positionId === 'bigint')
    );
  },
  isSDK(o: any): o is PositionByIdRequestSDKType {
    return (
      o &&
      (o.$typeUrl === PositionByIdRequest.typeUrl ||
        typeof o.position_id === 'bigint')
    );
  },
  isAmino(o: any): o is PositionByIdRequestAmino {
    return (
      o &&
      (o.$typeUrl === PositionByIdRequest.typeUrl ||
        typeof o.position_id === 'bigint')
    );
  },
  encode(
    message: PositionByIdRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.positionId !== BigInt(0)) {
      writer.uint32(8).uint64(message.positionId);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): PositionByIdRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionByIdRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.positionId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<PositionByIdRequest>): PositionByIdRequest {
    const message = createBasePositionByIdRequest();
    message.positionId =
      object.positionId !== undefined && object.positionId !== null
        ? BigInt(object.positionId.toString())
        : BigInt(0);
    return message;
  },
  fromAmino(object: PositionByIdRequestAmino): PositionByIdRequest {
    const message = createBasePositionByIdRequest();
    if (object.position_id !== undefined && object.position_id !== null) {
      message.positionId = BigInt(object.position_id);
    }
    return message;
  },
  toAmino(message: PositionByIdRequest): PositionByIdRequestAmino {
    const obj: any = {};
    obj.position_id =
      message.positionId !== BigInt(0)
        ? message.positionId?.toString()
        : undefined;
    return obj;
  },
  fromAminoMsg(object: PositionByIdRequestAminoMsg): PositionByIdRequest {
    return PositionByIdRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: PositionByIdRequestProtoMsg): PositionByIdRequest {
    return PositionByIdRequest.decode(message.value);
  },
  toProto(message: PositionByIdRequest): Uint8Array {
    return PositionByIdRequest.encode(message).finish();
  },
  toProtoMsg(message: PositionByIdRequest): PositionByIdRequestProtoMsg {
    return {
      typeUrl: '/symphony.concentratedliquidity.v1beta1.PositionByIdRequest',
      value: PositionByIdRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  PositionByIdRequest.typeUrl,
  PositionByIdRequest,
);
function createBasePositionByIdResponse(): PositionByIdResponse {
  return {
    position: FullPositionBreakdown.fromPartial({}),
  };
}
/**
 * @name PositionByIdResponse
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.PositionByIdResponse
 */
export const PositionByIdResponse = {
  typeUrl: '/symphony.concentratedliquidity.v1beta1.PositionByIdResponse',
  is(o: any): o is PositionByIdResponse {
    return (
      o &&
      (o.$typeUrl === PositionByIdResponse.typeUrl ||
        FullPositionBreakdown.is(o.position))
    );
  },
  isSDK(o: any): o is PositionByIdResponseSDKType {
    return (
      o &&
      (o.$typeUrl === PositionByIdResponse.typeUrl ||
        FullPositionBreakdown.isSDK(o.position))
    );
  },
  isAmino(o: any): o is PositionByIdResponseAmino {
    return (
      o &&
      (o.$typeUrl === PositionByIdResponse.typeUrl ||
        FullPositionBreakdown.isAmino(o.position))
    );
  },
  encode(
    message: PositionByIdResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.position !== undefined) {
      FullPositionBreakdown.encode(
        message.position,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): PositionByIdResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionByIdResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.position = FullPositionBreakdown.decode(
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
  fromPartial(object: Partial<PositionByIdResponse>): PositionByIdResponse {
    const message = createBasePositionByIdResponse();
    message.position =
      object.position !== undefined && object.position !== null
        ? FullPositionBreakdown.fromPartial(object.position)
        : undefined;
    return message;
  },
  fromAmino(object: PositionByIdResponseAmino): PositionByIdResponse {
    const message = createBasePositionByIdResponse();
    if (object.position !== undefined && object.position !== null) {
      message.position = FullPositionBreakdown.fromAmino(object.position);
    }
    return message;
  },
  toAmino(message: PositionByIdResponse): PositionByIdResponseAmino {
    const obj: any = {};
    obj.position = message.position
      ? FullPositionBreakdown.toAmino(message.position)
      : undefined;
    return obj;
  },
  fromAminoMsg(object: PositionByIdResponseAminoMsg): PositionByIdResponse {
    return PositionByIdResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: PositionByIdResponseProtoMsg): PositionByIdResponse {
    return PositionByIdResponse.decode(message.value);
  },
  toProto(message: PositionByIdResponse): Uint8Array {
    return PositionByIdResponse.encode(message).finish();
  },
  toProtoMsg(message: PositionByIdResponse): PositionByIdResponseProtoMsg {
    return {
      typeUrl: '/symphony.concentratedliquidity.v1beta1.PositionByIdResponse',
      value: PositionByIdResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  PositionByIdResponse.typeUrl,
  PositionByIdResponse,
);
function createBaseNumPoolPositionsRequest(): NumPoolPositionsRequest {
  return {
    poolId: BigInt(0),
  };
}
/**
 * @name NumPoolPositionsRequest
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.NumPoolPositionsRequest
 */
export const NumPoolPositionsRequest = {
  typeUrl: '/symphony.concentratedliquidity.v1beta1.NumPoolPositionsRequest',
  is(o: any): o is NumPoolPositionsRequest {
    return (
      o &&
      (o.$typeUrl === NumPoolPositionsRequest.typeUrl ||
        typeof o.poolId === 'bigint')
    );
  },
  isSDK(o: any): o is NumPoolPositionsRequestSDKType {
    return (
      o &&
      (o.$typeUrl === NumPoolPositionsRequest.typeUrl ||
        typeof o.pool_id === 'bigint')
    );
  },
  isAmino(o: any): o is NumPoolPositionsRequestAmino {
    return (
      o &&
      (o.$typeUrl === NumPoolPositionsRequest.typeUrl ||
        typeof o.pool_id === 'bigint')
    );
  },
  encode(
    message: NumPoolPositionsRequest,
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
  ): NumPoolPositionsRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNumPoolPositionsRequest();
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
    object: Partial<NumPoolPositionsRequest>,
  ): NumPoolPositionsRequest {
    const message = createBaseNumPoolPositionsRequest();
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? BigInt(object.poolId.toString())
        : BigInt(0);
    return message;
  },
  fromAmino(object: NumPoolPositionsRequestAmino): NumPoolPositionsRequest {
    const message = createBaseNumPoolPositionsRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(message: NumPoolPositionsRequest): NumPoolPositionsRequestAmino {
    const obj: any = {};
    obj.pool_id =
      message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(
    object: NumPoolPositionsRequestAminoMsg,
  ): NumPoolPositionsRequest {
    return NumPoolPositionsRequest.fromAmino(object.value);
  },
  fromProtoMsg(
    message: NumPoolPositionsRequestProtoMsg,
  ): NumPoolPositionsRequest {
    return NumPoolPositionsRequest.decode(message.value);
  },
  toProto(message: NumPoolPositionsRequest): Uint8Array {
    return NumPoolPositionsRequest.encode(message).finish();
  },
  toProtoMsg(
    message: NumPoolPositionsRequest,
  ): NumPoolPositionsRequestProtoMsg {
    return {
      typeUrl:
        '/symphony.concentratedliquidity.v1beta1.NumPoolPositionsRequest',
      value: NumPoolPositionsRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  NumPoolPositionsRequest.typeUrl,
  NumPoolPositionsRequest,
);
function createBaseNumPoolPositionsResponse(): NumPoolPositionsResponse {
  return {
    positionCount: BigInt(0),
  };
}
/**
 * @name NumPoolPositionsResponse
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.NumPoolPositionsResponse
 */
export const NumPoolPositionsResponse = {
  typeUrl: '/symphony.concentratedliquidity.v1beta1.NumPoolPositionsResponse',
  is(o: any): o is NumPoolPositionsResponse {
    return (
      o &&
      (o.$typeUrl === NumPoolPositionsResponse.typeUrl ||
        typeof o.positionCount === 'bigint')
    );
  },
  isSDK(o: any): o is NumPoolPositionsResponseSDKType {
    return (
      o &&
      (o.$typeUrl === NumPoolPositionsResponse.typeUrl ||
        typeof o.position_count === 'bigint')
    );
  },
  isAmino(o: any): o is NumPoolPositionsResponseAmino {
    return (
      o &&
      (o.$typeUrl === NumPoolPositionsResponse.typeUrl ||
        typeof o.position_count === 'bigint')
    );
  },
  encode(
    message: NumPoolPositionsResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.positionCount !== BigInt(0)) {
      writer.uint32(8).uint64(message.positionCount);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): NumPoolPositionsResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNumPoolPositionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.positionCount = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(
    object: Partial<NumPoolPositionsResponse>,
  ): NumPoolPositionsResponse {
    const message = createBaseNumPoolPositionsResponse();
    message.positionCount =
      object.positionCount !== undefined && object.positionCount !== null
        ? BigInt(object.positionCount.toString())
        : BigInt(0);
    return message;
  },
  fromAmino(object: NumPoolPositionsResponseAmino): NumPoolPositionsResponse {
    const message = createBaseNumPoolPositionsResponse();
    if (object.position_count !== undefined && object.position_count !== null) {
      message.positionCount = BigInt(object.position_count);
    }
    return message;
  },
  toAmino(message: NumPoolPositionsResponse): NumPoolPositionsResponseAmino {
    const obj: any = {};
    obj.position_count =
      message.positionCount !== BigInt(0)
        ? message.positionCount?.toString()
        : undefined;
    return obj;
  },
  fromAminoMsg(
    object: NumPoolPositionsResponseAminoMsg,
  ): NumPoolPositionsResponse {
    return NumPoolPositionsResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: NumPoolPositionsResponseProtoMsg,
  ): NumPoolPositionsResponse {
    return NumPoolPositionsResponse.decode(message.value);
  },
  toProto(message: NumPoolPositionsResponse): Uint8Array {
    return NumPoolPositionsResponse.encode(message).finish();
  },
  toProtoMsg(
    message: NumPoolPositionsResponse,
  ): NumPoolPositionsResponseProtoMsg {
    return {
      typeUrl:
        '/symphony.concentratedliquidity.v1beta1.NumPoolPositionsResponse',
      value: NumPoolPositionsResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  NumPoolPositionsResponse.typeUrl,
  NumPoolPositionsResponse,
);
function createBasePoolsRequest(): PoolsRequest {
  return {
    pagination: undefined,
  };
}
/**
 * =============================== Pools
 * @name PoolsRequest
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.PoolsRequest
 */
export const PoolsRequest = {
  typeUrl: '/symphony.concentratedliquidity.v1beta1.PoolsRequest',
  is(o: any): o is PoolsRequest {
    return o && o.$typeUrl === PoolsRequest.typeUrl;
  },
  isSDK(o: any): o is PoolsRequestSDKType {
    return o && o.$typeUrl === PoolsRequest.typeUrl;
  },
  isAmino(o: any): o is PoolsRequestAmino {
    return o && o.$typeUrl === PoolsRequest.typeUrl;
  },
  encode(
    message: PoolsRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PoolsRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolsRequest();
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
  fromPartial(object: Partial<PoolsRequest>): PoolsRequest {
    const message = createBasePoolsRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
  fromAmino(object: PoolsRequestAmino): PoolsRequest {
    const message = createBasePoolsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: PoolsRequest): PoolsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination
      ? PageRequest.toAmino(message.pagination)
      : undefined;
    return obj;
  },
  fromAminoMsg(object: PoolsRequestAminoMsg): PoolsRequest {
    return PoolsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: PoolsRequestProtoMsg): PoolsRequest {
    return PoolsRequest.decode(message.value);
  },
  toProto(message: PoolsRequest): Uint8Array {
    return PoolsRequest.encode(message).finish();
  },
  toProtoMsg(message: PoolsRequest): PoolsRequestProtoMsg {
    return {
      typeUrl: '/symphony.concentratedliquidity.v1beta1.PoolsRequest',
      value: PoolsRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(PoolsRequest.typeUrl, PoolsRequest);
function createBasePoolsResponse(): PoolsResponse {
  return {
    pools: [],
    pagination: undefined,
  };
}
/**
 * @name PoolsResponse
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.PoolsResponse
 */
export const PoolsResponse = {
  typeUrl: '/symphony.concentratedliquidity.v1beta1.PoolsResponse',
  is(o: any): o is PoolsResponse {
    return (
      o &&
      (o.$typeUrl === PoolsResponse.typeUrl ||
        (Array.isArray(o.pools) &&
          (!o.pools.length ||
            Pool1.is(o.pools[0]) ||
            CosmWasmPool.is(o.pools[0]) ||
            Pool2.is(o.pools[0]) ||
            Pool3.is(o.pools[0]) ||
            Any.is(o.pools[0]))))
    );
  },
  isSDK(o: any): o is PoolsResponseSDKType {
    return (
      o &&
      (o.$typeUrl === PoolsResponse.typeUrl ||
        (Array.isArray(o.pools) &&
          (!o.pools.length ||
            Pool1.isSDK(o.pools[0]) ||
            CosmWasmPool.isSDK(o.pools[0]) ||
            Pool2.isSDK(o.pools[0]) ||
            Pool3.isSDK(o.pools[0]) ||
            Any.isSDK(o.pools[0]))))
    );
  },
  isAmino(o: any): o is PoolsResponseAmino {
    return (
      o &&
      (o.$typeUrl === PoolsResponse.typeUrl ||
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
    message: PoolsResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.pools) {
      Any.encode(
        GlobalDecoderRegistry.wrapAny(v!),
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PoolsResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolsResponse();
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
  fromPartial(object: Partial<PoolsResponse>): PoolsResponse {
    const message = createBasePoolsResponse();
    message.pools =
      object.pools?.map(e => GlobalDecoderRegistry.fromPartial(e) as any) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
  fromAmino(object: PoolsResponseAmino): PoolsResponse {
    const message = createBasePoolsResponse();
    message.pools =
      object.pools?.map(e => GlobalDecoderRegistry.fromAminoMsg(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: PoolsResponse): PoolsResponseAmino {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map(e =>
        e ? GlobalDecoderRegistry.toAminoMsg(e) : undefined,
      );
    } else {
      obj.pools = message.pools;
    }
    obj.pagination = message.pagination
      ? PageResponse.toAmino(message.pagination)
      : undefined;
    return obj;
  },
  fromAminoMsg(object: PoolsResponseAminoMsg): PoolsResponse {
    return PoolsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: PoolsResponseProtoMsg): PoolsResponse {
    return PoolsResponse.decode(message.value);
  },
  toProto(message: PoolsResponse): Uint8Array {
    return PoolsResponse.encode(message).finish();
  },
  toProtoMsg(message: PoolsResponse): PoolsResponseProtoMsg {
    return {
      typeUrl: '/symphony.concentratedliquidity.v1beta1.PoolsResponse',
      value: PoolsResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(PoolsResponse.typeUrl, PoolsResponse);
function createBaseParamsRequest(): ParamsRequest {
  return {};
}
/**
 * =============================== ModuleParams
 * @name ParamsRequest
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.ParamsRequest
 */
export const ParamsRequest = {
  typeUrl: '/symphony.concentratedliquidity.v1beta1.ParamsRequest',
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
      typeUrl: '/symphony.concentratedliquidity.v1beta1.ParamsRequest',
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
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.ParamsResponse
 */
export const ParamsResponse = {
  typeUrl: '/symphony.concentratedliquidity.v1beta1.ParamsResponse',
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
      typeUrl: '/symphony.concentratedliquidity.v1beta1.ParamsResponse',
      value: ParamsResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(ParamsResponse.typeUrl, ParamsResponse);
function createBaseTickLiquidityNet(): TickLiquidityNet {
  return {
    liquidityNet: '',
    tickIndex: BigInt(0),
  };
}
/**
 * @name TickLiquidityNet
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.TickLiquidityNet
 */
export const TickLiquidityNet = {
  typeUrl: '/symphony.concentratedliquidity.v1beta1.TickLiquidityNet',
  is(o: any): o is TickLiquidityNet {
    return (
      o &&
      (o.$typeUrl === TickLiquidityNet.typeUrl ||
        (typeof o.liquidityNet === 'string' && typeof o.tickIndex === 'bigint'))
    );
  },
  isSDK(o: any): o is TickLiquidityNetSDKType {
    return (
      o &&
      (o.$typeUrl === TickLiquidityNet.typeUrl ||
        (typeof o.liquidity_net === 'string' &&
          typeof o.tick_index === 'bigint'))
    );
  },
  isAmino(o: any): o is TickLiquidityNetAmino {
    return (
      o &&
      (o.$typeUrl === TickLiquidityNet.typeUrl ||
        (typeof o.liquidity_net === 'string' &&
          typeof o.tick_index === 'bigint'))
    );
  },
  encode(
    message: TickLiquidityNet,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.liquidityNet !== '') {
      writer
        .uint32(10)
        .string(Decimal.fromUserInput(message.liquidityNet, 18).atomics);
    }
    if (message.tickIndex !== BigInt(0)) {
      writer.uint32(16).int64(message.tickIndex);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TickLiquidityNet {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTickLiquidityNet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.liquidityNet = Decimal.fromAtomics(
            reader.string(),
            18,
          ).toString();
          break;
        case 2:
          message.tickIndex = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<TickLiquidityNet>): TickLiquidityNet {
    const message = createBaseTickLiquidityNet();
    message.liquidityNet = object.liquidityNet ?? '';
    message.tickIndex =
      object.tickIndex !== undefined && object.tickIndex !== null
        ? BigInt(object.tickIndex.toString())
        : BigInt(0);
    return message;
  },
  fromAmino(object: TickLiquidityNetAmino): TickLiquidityNet {
    const message = createBaseTickLiquidityNet();
    if (object.liquidity_net !== undefined && object.liquidity_net !== null) {
      message.liquidityNet = object.liquidity_net;
    }
    if (object.tick_index !== undefined && object.tick_index !== null) {
      message.tickIndex = BigInt(object.tick_index);
    }
    return message;
  },
  toAmino(message: TickLiquidityNet): TickLiquidityNetAmino {
    const obj: any = {};
    obj.liquidity_net =
      message.liquidityNet === '' ? undefined : message.liquidityNet;
    obj.tick_index =
      message.tickIndex !== BigInt(0)
        ? message.tickIndex?.toString()
        : undefined;
    return obj;
  },
  fromAminoMsg(object: TickLiquidityNetAminoMsg): TickLiquidityNet {
    return TickLiquidityNet.fromAmino(object.value);
  },
  fromProtoMsg(message: TickLiquidityNetProtoMsg): TickLiquidityNet {
    return TickLiquidityNet.decode(message.value);
  },
  toProto(message: TickLiquidityNet): Uint8Array {
    return TickLiquidityNet.encode(message).finish();
  },
  toProtoMsg(message: TickLiquidityNet): TickLiquidityNetProtoMsg {
    return {
      typeUrl: '/symphony.concentratedliquidity.v1beta1.TickLiquidityNet',
      value: TickLiquidityNet.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(TickLiquidityNet.typeUrl, TickLiquidityNet);
function createBaseLiquidityDepthWithRange(): LiquidityDepthWithRange {
  return {
    liquidityAmount: '',
    lowerTick: BigInt(0),
    upperTick: BigInt(0),
  };
}
/**
 * @name LiquidityDepthWithRange
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.LiquidityDepthWithRange
 */
export const LiquidityDepthWithRange = {
  typeUrl: '/symphony.concentratedliquidity.v1beta1.LiquidityDepthWithRange',
  is(o: any): o is LiquidityDepthWithRange {
    return (
      o &&
      (o.$typeUrl === LiquidityDepthWithRange.typeUrl ||
        (typeof o.liquidityAmount === 'string' &&
          typeof o.lowerTick === 'bigint' &&
          typeof o.upperTick === 'bigint'))
    );
  },
  isSDK(o: any): o is LiquidityDepthWithRangeSDKType {
    return (
      o &&
      (o.$typeUrl === LiquidityDepthWithRange.typeUrl ||
        (typeof o.liquidity_amount === 'string' &&
          typeof o.lower_tick === 'bigint' &&
          typeof o.upper_tick === 'bigint'))
    );
  },
  isAmino(o: any): o is LiquidityDepthWithRangeAmino {
    return (
      o &&
      (o.$typeUrl === LiquidityDepthWithRange.typeUrl ||
        (typeof o.liquidity_amount === 'string' &&
          typeof o.lower_tick === 'bigint' &&
          typeof o.upper_tick === 'bigint'))
    );
  },
  encode(
    message: LiquidityDepthWithRange,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.liquidityAmount !== '') {
      writer
        .uint32(10)
        .string(Decimal.fromUserInput(message.liquidityAmount, 18).atomics);
    }
    if (message.lowerTick !== BigInt(0)) {
      writer.uint32(16).int64(message.lowerTick);
    }
    if (message.upperTick !== BigInt(0)) {
      writer.uint32(24).int64(message.upperTick);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): LiquidityDepthWithRange {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiquidityDepthWithRange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.liquidityAmount = Decimal.fromAtomics(
            reader.string(),
            18,
          ).toString();
          break;
        case 2:
          message.lowerTick = reader.int64();
          break;
        case 3:
          message.upperTick = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(
    object: Partial<LiquidityDepthWithRange>,
  ): LiquidityDepthWithRange {
    const message = createBaseLiquidityDepthWithRange();
    message.liquidityAmount = object.liquidityAmount ?? '';
    message.lowerTick =
      object.lowerTick !== undefined && object.lowerTick !== null
        ? BigInt(object.lowerTick.toString())
        : BigInt(0);
    message.upperTick =
      object.upperTick !== undefined && object.upperTick !== null
        ? BigInt(object.upperTick.toString())
        : BigInt(0);
    return message;
  },
  fromAmino(object: LiquidityDepthWithRangeAmino): LiquidityDepthWithRange {
    const message = createBaseLiquidityDepthWithRange();
    if (
      object.liquidity_amount !== undefined &&
      object.liquidity_amount !== null
    ) {
      message.liquidityAmount = object.liquidity_amount;
    }
    if (object.lower_tick !== undefined && object.lower_tick !== null) {
      message.lowerTick = BigInt(object.lower_tick);
    }
    if (object.upper_tick !== undefined && object.upper_tick !== null) {
      message.upperTick = BigInt(object.upper_tick);
    }
    return message;
  },
  toAmino(message: LiquidityDepthWithRange): LiquidityDepthWithRangeAmino {
    const obj: any = {};
    obj.liquidity_amount =
      message.liquidityAmount === '' ? undefined : message.liquidityAmount;
    obj.lower_tick =
      message.lowerTick !== BigInt(0)
        ? message.lowerTick?.toString()
        : undefined;
    obj.upper_tick =
      message.upperTick !== BigInt(0)
        ? message.upperTick?.toString()
        : undefined;
    return obj;
  },
  fromAminoMsg(
    object: LiquidityDepthWithRangeAminoMsg,
  ): LiquidityDepthWithRange {
    return LiquidityDepthWithRange.fromAmino(object.value);
  },
  fromProtoMsg(
    message: LiquidityDepthWithRangeProtoMsg,
  ): LiquidityDepthWithRange {
    return LiquidityDepthWithRange.decode(message.value);
  },
  toProto(message: LiquidityDepthWithRange): Uint8Array {
    return LiquidityDepthWithRange.encode(message).finish();
  },
  toProtoMsg(
    message: LiquidityDepthWithRange,
  ): LiquidityDepthWithRangeProtoMsg {
    return {
      typeUrl:
        '/symphony.concentratedliquidity.v1beta1.LiquidityDepthWithRange',
      value: LiquidityDepthWithRange.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  LiquidityDepthWithRange.typeUrl,
  LiquidityDepthWithRange,
);
function createBaseLiquidityNetInDirectionRequest(): LiquidityNetInDirectionRequest {
  return {
    poolId: BigInt(0),
    tokenIn: '',
    startTick: BigInt(0),
    useCurTick: false,
    boundTick: BigInt(0),
    useNoBound: false,
  };
}
/**
 * =============================== LiquidityNetInDirection
 * @name LiquidityNetInDirectionRequest
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.LiquidityNetInDirectionRequest
 */
export const LiquidityNetInDirectionRequest = {
  typeUrl:
    '/symphony.concentratedliquidity.v1beta1.LiquidityNetInDirectionRequest',
  is(o: any): o is LiquidityNetInDirectionRequest {
    return (
      o &&
      (o.$typeUrl === LiquidityNetInDirectionRequest.typeUrl ||
        (typeof o.poolId === 'bigint' &&
          typeof o.tokenIn === 'string' &&
          typeof o.startTick === 'bigint' &&
          typeof o.useCurTick === 'boolean' &&
          typeof o.boundTick === 'bigint' &&
          typeof o.useNoBound === 'boolean'))
    );
  },
  isSDK(o: any): o is LiquidityNetInDirectionRequestSDKType {
    return (
      o &&
      (o.$typeUrl === LiquidityNetInDirectionRequest.typeUrl ||
        (typeof o.pool_id === 'bigint' &&
          typeof o.token_in === 'string' &&
          typeof o.start_tick === 'bigint' &&
          typeof o.use_cur_tick === 'boolean' &&
          typeof o.bound_tick === 'bigint' &&
          typeof o.use_no_bound === 'boolean'))
    );
  },
  isAmino(o: any): o is LiquidityNetInDirectionRequestAmino {
    return (
      o &&
      (o.$typeUrl === LiquidityNetInDirectionRequest.typeUrl ||
        (typeof o.pool_id === 'bigint' &&
          typeof o.token_in === 'string' &&
          typeof o.start_tick === 'bigint' &&
          typeof o.use_cur_tick === 'boolean' &&
          typeof o.bound_tick === 'bigint' &&
          typeof o.use_no_bound === 'boolean'))
    );
  },
  encode(
    message: LiquidityNetInDirectionRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.tokenIn !== '') {
      writer.uint32(18).string(message.tokenIn);
    }
    if (message.startTick !== BigInt(0)) {
      writer.uint32(24).int64(message.startTick);
    }
    if (message.useCurTick === true) {
      writer.uint32(32).bool(message.useCurTick);
    }
    if (message.boundTick !== BigInt(0)) {
      writer.uint32(40).int64(message.boundTick);
    }
    if (message.useNoBound === true) {
      writer.uint32(48).bool(message.useNoBound);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): LiquidityNetInDirectionRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiquidityNetInDirectionRequest();
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
          message.startTick = reader.int64();
          break;
        case 4:
          message.useCurTick = reader.bool();
          break;
        case 5:
          message.boundTick = reader.int64();
          break;
        case 6:
          message.useNoBound = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(
    object: Partial<LiquidityNetInDirectionRequest>,
  ): LiquidityNetInDirectionRequest {
    const message = createBaseLiquidityNetInDirectionRequest();
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? BigInt(object.poolId.toString())
        : BigInt(0);
    message.tokenIn = object.tokenIn ?? '';
    message.startTick =
      object.startTick !== undefined && object.startTick !== null
        ? BigInt(object.startTick.toString())
        : BigInt(0);
    message.useCurTick = object.useCurTick ?? false;
    message.boundTick =
      object.boundTick !== undefined && object.boundTick !== null
        ? BigInt(object.boundTick.toString())
        : BigInt(0);
    message.useNoBound = object.useNoBound ?? false;
    return message;
  },
  fromAmino(
    object: LiquidityNetInDirectionRequestAmino,
  ): LiquidityNetInDirectionRequest {
    const message = createBaseLiquidityNetInDirectionRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.token_in !== undefined && object.token_in !== null) {
      message.tokenIn = object.token_in;
    }
    if (object.start_tick !== undefined && object.start_tick !== null) {
      message.startTick = BigInt(object.start_tick);
    }
    if (object.use_cur_tick !== undefined && object.use_cur_tick !== null) {
      message.useCurTick = object.use_cur_tick;
    }
    if (object.bound_tick !== undefined && object.bound_tick !== null) {
      message.boundTick = BigInt(object.bound_tick);
    }
    if (object.use_no_bound !== undefined && object.use_no_bound !== null) {
      message.useNoBound = object.use_no_bound;
    }
    return message;
  },
  toAmino(
    message: LiquidityNetInDirectionRequest,
  ): LiquidityNetInDirectionRequestAmino {
    const obj: any = {};
    obj.pool_id =
      message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    obj.token_in = message.tokenIn === '' ? undefined : message.tokenIn;
    obj.start_tick =
      message.startTick !== BigInt(0)
        ? message.startTick?.toString()
        : undefined;
    obj.use_cur_tick =
      message.useCurTick === false ? undefined : message.useCurTick;
    obj.bound_tick =
      message.boundTick !== BigInt(0)
        ? message.boundTick?.toString()
        : undefined;
    obj.use_no_bound =
      message.useNoBound === false ? undefined : message.useNoBound;
    return obj;
  },
  fromAminoMsg(
    object: LiquidityNetInDirectionRequestAminoMsg,
  ): LiquidityNetInDirectionRequest {
    return LiquidityNetInDirectionRequest.fromAmino(object.value);
  },
  fromProtoMsg(
    message: LiquidityNetInDirectionRequestProtoMsg,
  ): LiquidityNetInDirectionRequest {
    return LiquidityNetInDirectionRequest.decode(message.value);
  },
  toProto(message: LiquidityNetInDirectionRequest): Uint8Array {
    return LiquidityNetInDirectionRequest.encode(message).finish();
  },
  toProtoMsg(
    message: LiquidityNetInDirectionRequest,
  ): LiquidityNetInDirectionRequestProtoMsg {
    return {
      typeUrl:
        '/symphony.concentratedliquidity.v1beta1.LiquidityNetInDirectionRequest',
      value: LiquidityNetInDirectionRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  LiquidityNetInDirectionRequest.typeUrl,
  LiquidityNetInDirectionRequest,
);
function createBaseLiquidityNetInDirectionResponse(): LiquidityNetInDirectionResponse {
  return {
    liquidityDepths: [],
    currentTick: BigInt(0),
    currentLiquidity: '',
    currentSqrtPrice: '',
  };
}
/**
 * @name LiquidityNetInDirectionResponse
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.LiquidityNetInDirectionResponse
 */
export const LiquidityNetInDirectionResponse = {
  typeUrl:
    '/symphony.concentratedliquidity.v1beta1.LiquidityNetInDirectionResponse',
  is(o: any): o is LiquidityNetInDirectionResponse {
    return (
      o &&
      (o.$typeUrl === LiquidityNetInDirectionResponse.typeUrl ||
        (Array.isArray(o.liquidityDepths) &&
          (!o.liquidityDepths.length ||
            TickLiquidityNet.is(o.liquidityDepths[0])) &&
          typeof o.currentTick === 'bigint' &&
          typeof o.currentLiquidity === 'string' &&
          typeof o.currentSqrtPrice === 'string'))
    );
  },
  isSDK(o: any): o is LiquidityNetInDirectionResponseSDKType {
    return (
      o &&
      (o.$typeUrl === LiquidityNetInDirectionResponse.typeUrl ||
        (Array.isArray(o.liquidity_depths) &&
          (!o.liquidity_depths.length ||
            TickLiquidityNet.isSDK(o.liquidity_depths[0])) &&
          typeof o.current_tick === 'bigint' &&
          typeof o.current_liquidity === 'string' &&
          typeof o.current_sqrt_price === 'string'))
    );
  },
  isAmino(o: any): o is LiquidityNetInDirectionResponseAmino {
    return (
      o &&
      (o.$typeUrl === LiquidityNetInDirectionResponse.typeUrl ||
        (Array.isArray(o.liquidity_depths) &&
          (!o.liquidity_depths.length ||
            TickLiquidityNet.isAmino(o.liquidity_depths[0])) &&
          typeof o.current_tick === 'bigint' &&
          typeof o.current_liquidity === 'string' &&
          typeof o.current_sqrt_price === 'string'))
    );
  },
  encode(
    message: LiquidityNetInDirectionResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.liquidityDepths) {
      TickLiquidityNet.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.currentTick !== BigInt(0)) {
      writer.uint32(16).int64(message.currentTick);
    }
    if (message.currentLiquidity !== '') {
      writer
        .uint32(26)
        .string(Decimal.fromUserInput(message.currentLiquidity, 18).atomics);
    }
    if (message.currentSqrtPrice !== '') {
      writer.uint32(34).string(message.currentSqrtPrice);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): LiquidityNetInDirectionResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiquidityNetInDirectionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.liquidityDepths.push(
            TickLiquidityNet.decode(reader, reader.uint32()),
          );
          break;
        case 2:
          message.currentTick = reader.int64();
          break;
        case 3:
          message.currentLiquidity = Decimal.fromAtomics(
            reader.string(),
            18,
          ).toString();
          break;
        case 4:
          message.currentSqrtPrice = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(
    object: Partial<LiquidityNetInDirectionResponse>,
  ): LiquidityNetInDirectionResponse {
    const message = createBaseLiquidityNetInDirectionResponse();
    message.liquidityDepths =
      object.liquidityDepths?.map(e => TickLiquidityNet.fromPartial(e)) || [];
    message.currentTick =
      object.currentTick !== undefined && object.currentTick !== null
        ? BigInt(object.currentTick.toString())
        : BigInt(0);
    message.currentLiquidity = object.currentLiquidity ?? '';
    message.currentSqrtPrice = object.currentSqrtPrice ?? '';
    return message;
  },
  fromAmino(
    object: LiquidityNetInDirectionResponseAmino,
  ): LiquidityNetInDirectionResponse {
    const message = createBaseLiquidityNetInDirectionResponse();
    message.liquidityDepths =
      object.liquidity_depths?.map(e => TickLiquidityNet.fromAmino(e)) || [];
    if (object.current_tick !== undefined && object.current_tick !== null) {
      message.currentTick = BigInt(object.current_tick);
    }
    if (
      object.current_liquidity !== undefined &&
      object.current_liquidity !== null
    ) {
      message.currentLiquidity = object.current_liquidity;
    }
    if (
      object.current_sqrt_price !== undefined &&
      object.current_sqrt_price !== null
    ) {
      message.currentSqrtPrice = object.current_sqrt_price;
    }
    return message;
  },
  toAmino(
    message: LiquidityNetInDirectionResponse,
  ): LiquidityNetInDirectionResponseAmino {
    const obj: any = {};
    if (message.liquidityDepths) {
      obj.liquidity_depths = message.liquidityDepths.map(e =>
        e ? TickLiquidityNet.toAmino(e) : undefined,
      );
    } else {
      obj.liquidity_depths = message.liquidityDepths;
    }
    obj.current_tick =
      message.currentTick !== BigInt(0)
        ? message.currentTick?.toString()
        : undefined;
    obj.current_liquidity =
      message.currentLiquidity === '' ? undefined : message.currentLiquidity;
    obj.current_sqrt_price =
      message.currentSqrtPrice === '' ? undefined : message.currentSqrtPrice;
    return obj;
  },
  fromAminoMsg(
    object: LiquidityNetInDirectionResponseAminoMsg,
  ): LiquidityNetInDirectionResponse {
    return LiquidityNetInDirectionResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: LiquidityNetInDirectionResponseProtoMsg,
  ): LiquidityNetInDirectionResponse {
    return LiquidityNetInDirectionResponse.decode(message.value);
  },
  toProto(message: LiquidityNetInDirectionResponse): Uint8Array {
    return LiquidityNetInDirectionResponse.encode(message).finish();
  },
  toProtoMsg(
    message: LiquidityNetInDirectionResponse,
  ): LiquidityNetInDirectionResponseProtoMsg {
    return {
      typeUrl:
        '/symphony.concentratedliquidity.v1beta1.LiquidityNetInDirectionResponse',
      value: LiquidityNetInDirectionResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  LiquidityNetInDirectionResponse.typeUrl,
  LiquidityNetInDirectionResponse,
);
function createBaseLiquidityPerTickRangeRequest(): LiquidityPerTickRangeRequest {
  return {
    poolId: BigInt(0),
  };
}
/**
 * =============================== LiquidityPerTickRange
 * @name LiquidityPerTickRangeRequest
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.LiquidityPerTickRangeRequest
 */
export const LiquidityPerTickRangeRequest = {
  typeUrl:
    '/symphony.concentratedliquidity.v1beta1.LiquidityPerTickRangeRequest',
  is(o: any): o is LiquidityPerTickRangeRequest {
    return (
      o &&
      (o.$typeUrl === LiquidityPerTickRangeRequest.typeUrl ||
        typeof o.poolId === 'bigint')
    );
  },
  isSDK(o: any): o is LiquidityPerTickRangeRequestSDKType {
    return (
      o &&
      (o.$typeUrl === LiquidityPerTickRangeRequest.typeUrl ||
        typeof o.pool_id === 'bigint')
    );
  },
  isAmino(o: any): o is LiquidityPerTickRangeRequestAmino {
    return (
      o &&
      (o.$typeUrl === LiquidityPerTickRangeRequest.typeUrl ||
        typeof o.pool_id === 'bigint')
    );
  },
  encode(
    message: LiquidityPerTickRangeRequest,
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
  ): LiquidityPerTickRangeRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiquidityPerTickRangeRequest();
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
    object: Partial<LiquidityPerTickRangeRequest>,
  ): LiquidityPerTickRangeRequest {
    const message = createBaseLiquidityPerTickRangeRequest();
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? BigInt(object.poolId.toString())
        : BigInt(0);
    return message;
  },
  fromAmino(
    object: LiquidityPerTickRangeRequestAmino,
  ): LiquidityPerTickRangeRequest {
    const message = createBaseLiquidityPerTickRangeRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(
    message: LiquidityPerTickRangeRequest,
  ): LiquidityPerTickRangeRequestAmino {
    const obj: any = {};
    obj.pool_id =
      message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(
    object: LiquidityPerTickRangeRequestAminoMsg,
  ): LiquidityPerTickRangeRequest {
    return LiquidityPerTickRangeRequest.fromAmino(object.value);
  },
  fromProtoMsg(
    message: LiquidityPerTickRangeRequestProtoMsg,
  ): LiquidityPerTickRangeRequest {
    return LiquidityPerTickRangeRequest.decode(message.value);
  },
  toProto(message: LiquidityPerTickRangeRequest): Uint8Array {
    return LiquidityPerTickRangeRequest.encode(message).finish();
  },
  toProtoMsg(
    message: LiquidityPerTickRangeRequest,
  ): LiquidityPerTickRangeRequestProtoMsg {
    return {
      typeUrl:
        '/symphony.concentratedliquidity.v1beta1.LiquidityPerTickRangeRequest',
      value: LiquidityPerTickRangeRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  LiquidityPerTickRangeRequest.typeUrl,
  LiquidityPerTickRangeRequest,
);
function createBaseLiquidityPerTickRangeResponse(): LiquidityPerTickRangeResponse {
  return {
    liquidity: [],
    bucketIndex: BigInt(0),
  };
}
/**
 * @name LiquidityPerTickRangeResponse
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.LiquidityPerTickRangeResponse
 */
export const LiquidityPerTickRangeResponse = {
  typeUrl:
    '/symphony.concentratedliquidity.v1beta1.LiquidityPerTickRangeResponse',
  is(o: any): o is LiquidityPerTickRangeResponse {
    return (
      o &&
      (o.$typeUrl === LiquidityPerTickRangeResponse.typeUrl ||
        (Array.isArray(o.liquidity) &&
          (!o.liquidity.length || LiquidityDepthWithRange.is(o.liquidity[0])) &&
          typeof o.bucketIndex === 'bigint'))
    );
  },
  isSDK(o: any): o is LiquidityPerTickRangeResponseSDKType {
    return (
      o &&
      (o.$typeUrl === LiquidityPerTickRangeResponse.typeUrl ||
        (Array.isArray(o.liquidity) &&
          (!o.liquidity.length ||
            LiquidityDepthWithRange.isSDK(o.liquidity[0])) &&
          typeof o.bucket_index === 'bigint'))
    );
  },
  isAmino(o: any): o is LiquidityPerTickRangeResponseAmino {
    return (
      o &&
      (o.$typeUrl === LiquidityPerTickRangeResponse.typeUrl ||
        (Array.isArray(o.liquidity) &&
          (!o.liquidity.length ||
            LiquidityDepthWithRange.isAmino(o.liquidity[0])) &&
          typeof o.bucket_index === 'bigint'))
    );
  },
  encode(
    message: LiquidityPerTickRangeResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.liquidity) {
      LiquidityDepthWithRange.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.bucketIndex !== BigInt(0)) {
      writer.uint32(16).int64(message.bucketIndex);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): LiquidityPerTickRangeResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiquidityPerTickRangeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.liquidity.push(
            LiquidityDepthWithRange.decode(reader, reader.uint32()),
          );
          break;
        case 2:
          message.bucketIndex = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(
    object: Partial<LiquidityPerTickRangeResponse>,
  ): LiquidityPerTickRangeResponse {
    const message = createBaseLiquidityPerTickRangeResponse();
    message.liquidity =
      object.liquidity?.map(e => LiquidityDepthWithRange.fromPartial(e)) || [];
    message.bucketIndex =
      object.bucketIndex !== undefined && object.bucketIndex !== null
        ? BigInt(object.bucketIndex.toString())
        : BigInt(0);
    return message;
  },
  fromAmino(
    object: LiquidityPerTickRangeResponseAmino,
  ): LiquidityPerTickRangeResponse {
    const message = createBaseLiquidityPerTickRangeResponse();
    message.liquidity =
      object.liquidity?.map(e => LiquidityDepthWithRange.fromAmino(e)) || [];
    if (object.bucket_index !== undefined && object.bucket_index !== null) {
      message.bucketIndex = BigInt(object.bucket_index);
    }
    return message;
  },
  toAmino(
    message: LiquidityPerTickRangeResponse,
  ): LiquidityPerTickRangeResponseAmino {
    const obj: any = {};
    if (message.liquidity) {
      obj.liquidity = message.liquidity.map(e =>
        e ? LiquidityDepthWithRange.toAmino(e) : undefined,
      );
    } else {
      obj.liquidity = message.liquidity;
    }
    obj.bucket_index =
      message.bucketIndex !== BigInt(0)
        ? message.bucketIndex?.toString()
        : undefined;
    return obj;
  },
  fromAminoMsg(
    object: LiquidityPerTickRangeResponseAminoMsg,
  ): LiquidityPerTickRangeResponse {
    return LiquidityPerTickRangeResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: LiquidityPerTickRangeResponseProtoMsg,
  ): LiquidityPerTickRangeResponse {
    return LiquidityPerTickRangeResponse.decode(message.value);
  },
  toProto(message: LiquidityPerTickRangeResponse): Uint8Array {
    return LiquidityPerTickRangeResponse.encode(message).finish();
  },
  toProtoMsg(
    message: LiquidityPerTickRangeResponse,
  ): LiquidityPerTickRangeResponseProtoMsg {
    return {
      typeUrl:
        '/symphony.concentratedliquidity.v1beta1.LiquidityPerTickRangeResponse',
      value: LiquidityPerTickRangeResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  LiquidityPerTickRangeResponse.typeUrl,
  LiquidityPerTickRangeResponse,
);
function createBaseClaimableSpreadRewardsRequest(): ClaimableSpreadRewardsRequest {
  return {
    positionId: BigInt(0),
  };
}
/**
 * ===================== QueryClaimableSpreadRewards
 * @name ClaimableSpreadRewardsRequest
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.ClaimableSpreadRewardsRequest
 */
export const ClaimableSpreadRewardsRequest = {
  typeUrl:
    '/symphony.concentratedliquidity.v1beta1.ClaimableSpreadRewardsRequest',
  is(o: any): o is ClaimableSpreadRewardsRequest {
    return (
      o &&
      (o.$typeUrl === ClaimableSpreadRewardsRequest.typeUrl ||
        typeof o.positionId === 'bigint')
    );
  },
  isSDK(o: any): o is ClaimableSpreadRewardsRequestSDKType {
    return (
      o &&
      (o.$typeUrl === ClaimableSpreadRewardsRequest.typeUrl ||
        typeof o.position_id === 'bigint')
    );
  },
  isAmino(o: any): o is ClaimableSpreadRewardsRequestAmino {
    return (
      o &&
      (o.$typeUrl === ClaimableSpreadRewardsRequest.typeUrl ||
        typeof o.position_id === 'bigint')
    );
  },
  encode(
    message: ClaimableSpreadRewardsRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.positionId !== BigInt(0)) {
      writer.uint32(8).uint64(message.positionId);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): ClaimableSpreadRewardsRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClaimableSpreadRewardsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.positionId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(
    object: Partial<ClaimableSpreadRewardsRequest>,
  ): ClaimableSpreadRewardsRequest {
    const message = createBaseClaimableSpreadRewardsRequest();
    message.positionId =
      object.positionId !== undefined && object.positionId !== null
        ? BigInt(object.positionId.toString())
        : BigInt(0);
    return message;
  },
  fromAmino(
    object: ClaimableSpreadRewardsRequestAmino,
  ): ClaimableSpreadRewardsRequest {
    const message = createBaseClaimableSpreadRewardsRequest();
    if (object.position_id !== undefined && object.position_id !== null) {
      message.positionId = BigInt(object.position_id);
    }
    return message;
  },
  toAmino(
    message: ClaimableSpreadRewardsRequest,
  ): ClaimableSpreadRewardsRequestAmino {
    const obj: any = {};
    obj.position_id =
      message.positionId !== BigInt(0)
        ? message.positionId?.toString()
        : undefined;
    return obj;
  },
  fromAminoMsg(
    object: ClaimableSpreadRewardsRequestAminoMsg,
  ): ClaimableSpreadRewardsRequest {
    return ClaimableSpreadRewardsRequest.fromAmino(object.value);
  },
  fromProtoMsg(
    message: ClaimableSpreadRewardsRequestProtoMsg,
  ): ClaimableSpreadRewardsRequest {
    return ClaimableSpreadRewardsRequest.decode(message.value);
  },
  toProto(message: ClaimableSpreadRewardsRequest): Uint8Array {
    return ClaimableSpreadRewardsRequest.encode(message).finish();
  },
  toProtoMsg(
    message: ClaimableSpreadRewardsRequest,
  ): ClaimableSpreadRewardsRequestProtoMsg {
    return {
      typeUrl:
        '/symphony.concentratedliquidity.v1beta1.ClaimableSpreadRewardsRequest',
      value: ClaimableSpreadRewardsRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  ClaimableSpreadRewardsRequest.typeUrl,
  ClaimableSpreadRewardsRequest,
);
function createBaseClaimableSpreadRewardsResponse(): ClaimableSpreadRewardsResponse {
  return {
    claimableSpreadRewards: [],
  };
}
/**
 * @name ClaimableSpreadRewardsResponse
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.ClaimableSpreadRewardsResponse
 */
export const ClaimableSpreadRewardsResponse = {
  typeUrl:
    '/symphony.concentratedliquidity.v1beta1.ClaimableSpreadRewardsResponse',
  is(o: any): o is ClaimableSpreadRewardsResponse {
    return (
      o &&
      (o.$typeUrl === ClaimableSpreadRewardsResponse.typeUrl ||
        (Array.isArray(o.claimableSpreadRewards) &&
          (!o.claimableSpreadRewards.length ||
            Coin.is(o.claimableSpreadRewards[0]))))
    );
  },
  isSDK(o: any): o is ClaimableSpreadRewardsResponseSDKType {
    return (
      o &&
      (o.$typeUrl === ClaimableSpreadRewardsResponse.typeUrl ||
        (Array.isArray(o.claimable_spread_rewards) &&
          (!o.claimable_spread_rewards.length ||
            Coin.isSDK(o.claimable_spread_rewards[0]))))
    );
  },
  isAmino(o: any): o is ClaimableSpreadRewardsResponseAmino {
    return (
      o &&
      (o.$typeUrl === ClaimableSpreadRewardsResponse.typeUrl ||
        (Array.isArray(o.claimable_spread_rewards) &&
          (!o.claimable_spread_rewards.length ||
            Coin.isAmino(o.claimable_spread_rewards[0]))))
    );
  },
  encode(
    message: ClaimableSpreadRewardsResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.claimableSpreadRewards) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): ClaimableSpreadRewardsResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClaimableSpreadRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.claimableSpreadRewards.push(
            Coin.decode(reader, reader.uint32()),
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
    object: Partial<ClaimableSpreadRewardsResponse>,
  ): ClaimableSpreadRewardsResponse {
    const message = createBaseClaimableSpreadRewardsResponse();
    message.claimableSpreadRewards =
      object.claimableSpreadRewards?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(
    object: ClaimableSpreadRewardsResponseAmino,
  ): ClaimableSpreadRewardsResponse {
    const message = createBaseClaimableSpreadRewardsResponse();
    message.claimableSpreadRewards =
      object.claimable_spread_rewards?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(
    message: ClaimableSpreadRewardsResponse,
  ): ClaimableSpreadRewardsResponseAmino {
    const obj: any = {};
    if (message.claimableSpreadRewards) {
      obj.claimable_spread_rewards = message.claimableSpreadRewards.map(e =>
        e ? Coin.toAmino(e) : undefined,
      );
    } else {
      obj.claimable_spread_rewards = message.claimableSpreadRewards;
    }
    return obj;
  },
  fromAminoMsg(
    object: ClaimableSpreadRewardsResponseAminoMsg,
  ): ClaimableSpreadRewardsResponse {
    return ClaimableSpreadRewardsResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: ClaimableSpreadRewardsResponseProtoMsg,
  ): ClaimableSpreadRewardsResponse {
    return ClaimableSpreadRewardsResponse.decode(message.value);
  },
  toProto(message: ClaimableSpreadRewardsResponse): Uint8Array {
    return ClaimableSpreadRewardsResponse.encode(message).finish();
  },
  toProtoMsg(
    message: ClaimableSpreadRewardsResponse,
  ): ClaimableSpreadRewardsResponseProtoMsg {
    return {
      typeUrl:
        '/symphony.concentratedliquidity.v1beta1.ClaimableSpreadRewardsResponse',
      value: ClaimableSpreadRewardsResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  ClaimableSpreadRewardsResponse.typeUrl,
  ClaimableSpreadRewardsResponse,
);
function createBaseClaimableIncentivesRequest(): ClaimableIncentivesRequest {
  return {
    positionId: BigInt(0),
  };
}
/**
 * ===================== QueryClaimableIncentives
 * @name ClaimableIncentivesRequest
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.ClaimableIncentivesRequest
 */
export const ClaimableIncentivesRequest = {
  typeUrl: '/symphony.concentratedliquidity.v1beta1.ClaimableIncentivesRequest',
  is(o: any): o is ClaimableIncentivesRequest {
    return (
      o &&
      (o.$typeUrl === ClaimableIncentivesRequest.typeUrl ||
        typeof o.positionId === 'bigint')
    );
  },
  isSDK(o: any): o is ClaimableIncentivesRequestSDKType {
    return (
      o &&
      (o.$typeUrl === ClaimableIncentivesRequest.typeUrl ||
        typeof o.position_id === 'bigint')
    );
  },
  isAmino(o: any): o is ClaimableIncentivesRequestAmino {
    return (
      o &&
      (o.$typeUrl === ClaimableIncentivesRequest.typeUrl ||
        typeof o.position_id === 'bigint')
    );
  },
  encode(
    message: ClaimableIncentivesRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.positionId !== BigInt(0)) {
      writer.uint32(8).uint64(message.positionId);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): ClaimableIncentivesRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClaimableIncentivesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.positionId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(
    object: Partial<ClaimableIncentivesRequest>,
  ): ClaimableIncentivesRequest {
    const message = createBaseClaimableIncentivesRequest();
    message.positionId =
      object.positionId !== undefined && object.positionId !== null
        ? BigInt(object.positionId.toString())
        : BigInt(0);
    return message;
  },
  fromAmino(
    object: ClaimableIncentivesRequestAmino,
  ): ClaimableIncentivesRequest {
    const message = createBaseClaimableIncentivesRequest();
    if (object.position_id !== undefined && object.position_id !== null) {
      message.positionId = BigInt(object.position_id);
    }
    return message;
  },
  toAmino(
    message: ClaimableIncentivesRequest,
  ): ClaimableIncentivesRequestAmino {
    const obj: any = {};
    obj.position_id =
      message.positionId !== BigInt(0)
        ? message.positionId?.toString()
        : undefined;
    return obj;
  },
  fromAminoMsg(
    object: ClaimableIncentivesRequestAminoMsg,
  ): ClaimableIncentivesRequest {
    return ClaimableIncentivesRequest.fromAmino(object.value);
  },
  fromProtoMsg(
    message: ClaimableIncentivesRequestProtoMsg,
  ): ClaimableIncentivesRequest {
    return ClaimableIncentivesRequest.decode(message.value);
  },
  toProto(message: ClaimableIncentivesRequest): Uint8Array {
    return ClaimableIncentivesRequest.encode(message).finish();
  },
  toProtoMsg(
    message: ClaimableIncentivesRequest,
  ): ClaimableIncentivesRequestProtoMsg {
    return {
      typeUrl:
        '/symphony.concentratedliquidity.v1beta1.ClaimableIncentivesRequest',
      value: ClaimableIncentivesRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  ClaimableIncentivesRequest.typeUrl,
  ClaimableIncentivesRequest,
);
function createBaseClaimableIncentivesResponse(): ClaimableIncentivesResponse {
  return {
    claimableIncentives: [],
    forfeitedIncentives: [],
  };
}
/**
 * @name ClaimableIncentivesResponse
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.ClaimableIncentivesResponse
 */
export const ClaimableIncentivesResponse = {
  typeUrl:
    '/symphony.concentratedliquidity.v1beta1.ClaimableIncentivesResponse',
  is(o: any): o is ClaimableIncentivesResponse {
    return (
      o &&
      (o.$typeUrl === ClaimableIncentivesResponse.typeUrl ||
        (Array.isArray(o.claimableIncentives) &&
          (!o.claimableIncentives.length ||
            Coin.is(o.claimableIncentives[0])) &&
          Array.isArray(o.forfeitedIncentives) &&
          (!o.forfeitedIncentives.length || Coin.is(o.forfeitedIncentives[0]))))
    );
  },
  isSDK(o: any): o is ClaimableIncentivesResponseSDKType {
    return (
      o &&
      (o.$typeUrl === ClaimableIncentivesResponse.typeUrl ||
        (Array.isArray(o.claimable_incentives) &&
          (!o.claimable_incentives.length ||
            Coin.isSDK(o.claimable_incentives[0])) &&
          Array.isArray(o.forfeited_incentives) &&
          (!o.forfeited_incentives.length ||
            Coin.isSDK(o.forfeited_incentives[0]))))
    );
  },
  isAmino(o: any): o is ClaimableIncentivesResponseAmino {
    return (
      o &&
      (o.$typeUrl === ClaimableIncentivesResponse.typeUrl ||
        (Array.isArray(o.claimable_incentives) &&
          (!o.claimable_incentives.length ||
            Coin.isAmino(o.claimable_incentives[0])) &&
          Array.isArray(o.forfeited_incentives) &&
          (!o.forfeited_incentives.length ||
            Coin.isAmino(o.forfeited_incentives[0]))))
    );
  },
  encode(
    message: ClaimableIncentivesResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.claimableIncentives) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.forfeitedIncentives) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): ClaimableIncentivesResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClaimableIncentivesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.claimableIncentives.push(
            Coin.decode(reader, reader.uint32()),
          );
          break;
        case 2:
          message.forfeitedIncentives.push(
            Coin.decode(reader, reader.uint32()),
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
    object: Partial<ClaimableIncentivesResponse>,
  ): ClaimableIncentivesResponse {
    const message = createBaseClaimableIncentivesResponse();
    message.claimableIncentives =
      object.claimableIncentives?.map(e => Coin.fromPartial(e)) || [];
    message.forfeitedIncentives =
      object.forfeitedIncentives?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(
    object: ClaimableIncentivesResponseAmino,
  ): ClaimableIncentivesResponse {
    const message = createBaseClaimableIncentivesResponse();
    message.claimableIncentives =
      object.claimable_incentives?.map(e => Coin.fromAmino(e)) || [];
    message.forfeitedIncentives =
      object.forfeited_incentives?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(
    message: ClaimableIncentivesResponse,
  ): ClaimableIncentivesResponseAmino {
    const obj: any = {};
    if (message.claimableIncentives) {
      obj.claimable_incentives = message.claimableIncentives.map(e =>
        e ? Coin.toAmino(e) : undefined,
      );
    } else {
      obj.claimable_incentives = message.claimableIncentives;
    }
    if (message.forfeitedIncentives) {
      obj.forfeited_incentives = message.forfeitedIncentives.map(e =>
        e ? Coin.toAmino(e) : undefined,
      );
    } else {
      obj.forfeited_incentives = message.forfeitedIncentives;
    }
    return obj;
  },
  fromAminoMsg(
    object: ClaimableIncentivesResponseAminoMsg,
  ): ClaimableIncentivesResponse {
    return ClaimableIncentivesResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: ClaimableIncentivesResponseProtoMsg,
  ): ClaimableIncentivesResponse {
    return ClaimableIncentivesResponse.decode(message.value);
  },
  toProto(message: ClaimableIncentivesResponse): Uint8Array {
    return ClaimableIncentivesResponse.encode(message).finish();
  },
  toProtoMsg(
    message: ClaimableIncentivesResponse,
  ): ClaimableIncentivesResponseProtoMsg {
    return {
      typeUrl:
        '/symphony.concentratedliquidity.v1beta1.ClaimableIncentivesResponse',
      value: ClaimableIncentivesResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  ClaimableIncentivesResponse.typeUrl,
  ClaimableIncentivesResponse,
);
function createBasePoolAccumulatorRewardsRequest(): PoolAccumulatorRewardsRequest {
  return {
    poolId: BigInt(0),
  };
}
/**
 * ===================== QueryPoolAccumulatorRewards
 * @name PoolAccumulatorRewardsRequest
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.PoolAccumulatorRewardsRequest
 */
export const PoolAccumulatorRewardsRequest = {
  typeUrl:
    '/symphony.concentratedliquidity.v1beta1.PoolAccumulatorRewardsRequest',
  is(o: any): o is PoolAccumulatorRewardsRequest {
    return (
      o &&
      (o.$typeUrl === PoolAccumulatorRewardsRequest.typeUrl ||
        typeof o.poolId === 'bigint')
    );
  },
  isSDK(o: any): o is PoolAccumulatorRewardsRequestSDKType {
    return (
      o &&
      (o.$typeUrl === PoolAccumulatorRewardsRequest.typeUrl ||
        typeof o.pool_id === 'bigint')
    );
  },
  isAmino(o: any): o is PoolAccumulatorRewardsRequestAmino {
    return (
      o &&
      (o.$typeUrl === PoolAccumulatorRewardsRequest.typeUrl ||
        typeof o.pool_id === 'bigint')
    );
  },
  encode(
    message: PoolAccumulatorRewardsRequest,
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
  ): PoolAccumulatorRewardsRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolAccumulatorRewardsRequest();
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
    object: Partial<PoolAccumulatorRewardsRequest>,
  ): PoolAccumulatorRewardsRequest {
    const message = createBasePoolAccumulatorRewardsRequest();
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? BigInt(object.poolId.toString())
        : BigInt(0);
    return message;
  },
  fromAmino(
    object: PoolAccumulatorRewardsRequestAmino,
  ): PoolAccumulatorRewardsRequest {
    const message = createBasePoolAccumulatorRewardsRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(
    message: PoolAccumulatorRewardsRequest,
  ): PoolAccumulatorRewardsRequestAmino {
    const obj: any = {};
    obj.pool_id =
      message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(
    object: PoolAccumulatorRewardsRequestAminoMsg,
  ): PoolAccumulatorRewardsRequest {
    return PoolAccumulatorRewardsRequest.fromAmino(object.value);
  },
  fromProtoMsg(
    message: PoolAccumulatorRewardsRequestProtoMsg,
  ): PoolAccumulatorRewardsRequest {
    return PoolAccumulatorRewardsRequest.decode(message.value);
  },
  toProto(message: PoolAccumulatorRewardsRequest): Uint8Array {
    return PoolAccumulatorRewardsRequest.encode(message).finish();
  },
  toProtoMsg(
    message: PoolAccumulatorRewardsRequest,
  ): PoolAccumulatorRewardsRequestProtoMsg {
    return {
      typeUrl:
        '/symphony.concentratedliquidity.v1beta1.PoolAccumulatorRewardsRequest',
      value: PoolAccumulatorRewardsRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  PoolAccumulatorRewardsRequest.typeUrl,
  PoolAccumulatorRewardsRequest,
);
function createBasePoolAccumulatorRewardsResponse(): PoolAccumulatorRewardsResponse {
  return {
    spreadRewardGrowthGlobal: [],
    uptimeGrowthGlobal: [],
  };
}
/**
 * @name PoolAccumulatorRewardsResponse
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.PoolAccumulatorRewardsResponse
 */
export const PoolAccumulatorRewardsResponse = {
  typeUrl:
    '/symphony.concentratedliquidity.v1beta1.PoolAccumulatorRewardsResponse',
  is(o: any): o is PoolAccumulatorRewardsResponse {
    return (
      o &&
      (o.$typeUrl === PoolAccumulatorRewardsResponse.typeUrl ||
        (Array.isArray(o.spreadRewardGrowthGlobal) &&
          (!o.spreadRewardGrowthGlobal.length ||
            DecCoin.is(o.spreadRewardGrowthGlobal[0])) &&
          Array.isArray(o.uptimeGrowthGlobal) &&
          (!o.uptimeGrowthGlobal.length ||
            UptimeTracker.is(o.uptimeGrowthGlobal[0]))))
    );
  },
  isSDK(o: any): o is PoolAccumulatorRewardsResponseSDKType {
    return (
      o &&
      (o.$typeUrl === PoolAccumulatorRewardsResponse.typeUrl ||
        (Array.isArray(o.spread_reward_growth_global) &&
          (!o.spread_reward_growth_global.length ||
            DecCoin.isSDK(o.spread_reward_growth_global[0])) &&
          Array.isArray(o.uptime_growth_global) &&
          (!o.uptime_growth_global.length ||
            UptimeTracker.isSDK(o.uptime_growth_global[0]))))
    );
  },
  isAmino(o: any): o is PoolAccumulatorRewardsResponseAmino {
    return (
      o &&
      (o.$typeUrl === PoolAccumulatorRewardsResponse.typeUrl ||
        (Array.isArray(o.spread_reward_growth_global) &&
          (!o.spread_reward_growth_global.length ||
            DecCoin.isAmino(o.spread_reward_growth_global[0])) &&
          Array.isArray(o.uptime_growth_global) &&
          (!o.uptime_growth_global.length ||
            UptimeTracker.isAmino(o.uptime_growth_global[0]))))
    );
  },
  encode(
    message: PoolAccumulatorRewardsResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.spreadRewardGrowthGlobal) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.uptimeGrowthGlobal) {
      UptimeTracker.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): PoolAccumulatorRewardsResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolAccumulatorRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.spreadRewardGrowthGlobal.push(
            DecCoin.decode(reader, reader.uint32()),
          );
          break;
        case 2:
          message.uptimeGrowthGlobal.push(
            UptimeTracker.decode(reader, reader.uint32()),
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
    object: Partial<PoolAccumulatorRewardsResponse>,
  ): PoolAccumulatorRewardsResponse {
    const message = createBasePoolAccumulatorRewardsResponse();
    message.spreadRewardGrowthGlobal =
      object.spreadRewardGrowthGlobal?.map(e => DecCoin.fromPartial(e)) || [];
    message.uptimeGrowthGlobal =
      object.uptimeGrowthGlobal?.map(e => UptimeTracker.fromPartial(e)) || [];
    return message;
  },
  fromAmino(
    object: PoolAccumulatorRewardsResponseAmino,
  ): PoolAccumulatorRewardsResponse {
    const message = createBasePoolAccumulatorRewardsResponse();
    message.spreadRewardGrowthGlobal =
      object.spread_reward_growth_global?.map(e => DecCoin.fromAmino(e)) || [];
    message.uptimeGrowthGlobal =
      object.uptime_growth_global?.map(e => UptimeTracker.fromAmino(e)) || [];
    return message;
  },
  toAmino(
    message: PoolAccumulatorRewardsResponse,
  ): PoolAccumulatorRewardsResponseAmino {
    const obj: any = {};
    if (message.spreadRewardGrowthGlobal) {
      obj.spread_reward_growth_global = message.spreadRewardGrowthGlobal.map(
        e => (e ? DecCoin.toAmino(e) : undefined),
      );
    } else {
      obj.spread_reward_growth_global = message.spreadRewardGrowthGlobal;
    }
    if (message.uptimeGrowthGlobal) {
      obj.uptime_growth_global = message.uptimeGrowthGlobal.map(e =>
        e ? UptimeTracker.toAmino(e) : undefined,
      );
    } else {
      obj.uptime_growth_global = message.uptimeGrowthGlobal;
    }
    return obj;
  },
  fromAminoMsg(
    object: PoolAccumulatorRewardsResponseAminoMsg,
  ): PoolAccumulatorRewardsResponse {
    return PoolAccumulatorRewardsResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: PoolAccumulatorRewardsResponseProtoMsg,
  ): PoolAccumulatorRewardsResponse {
    return PoolAccumulatorRewardsResponse.decode(message.value);
  },
  toProto(message: PoolAccumulatorRewardsResponse): Uint8Array {
    return PoolAccumulatorRewardsResponse.encode(message).finish();
  },
  toProtoMsg(
    message: PoolAccumulatorRewardsResponse,
  ): PoolAccumulatorRewardsResponseProtoMsg {
    return {
      typeUrl:
        '/symphony.concentratedliquidity.v1beta1.PoolAccumulatorRewardsResponse',
      value: PoolAccumulatorRewardsResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  PoolAccumulatorRewardsResponse.typeUrl,
  PoolAccumulatorRewardsResponse,
);
function createBaseTickAccumulatorTrackersRequest(): TickAccumulatorTrackersRequest {
  return {
    poolId: BigInt(0),
    tickIndex: BigInt(0),
  };
}
/**
 * ===================== QueryTickAccumulatorTrackers
 * @name TickAccumulatorTrackersRequest
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.TickAccumulatorTrackersRequest
 */
export const TickAccumulatorTrackersRequest = {
  typeUrl:
    '/symphony.concentratedliquidity.v1beta1.TickAccumulatorTrackersRequest',
  is(o: any): o is TickAccumulatorTrackersRequest {
    return (
      o &&
      (o.$typeUrl === TickAccumulatorTrackersRequest.typeUrl ||
        (typeof o.poolId === 'bigint' && typeof o.tickIndex === 'bigint'))
    );
  },
  isSDK(o: any): o is TickAccumulatorTrackersRequestSDKType {
    return (
      o &&
      (o.$typeUrl === TickAccumulatorTrackersRequest.typeUrl ||
        (typeof o.pool_id === 'bigint' && typeof o.tick_index === 'bigint'))
    );
  },
  isAmino(o: any): o is TickAccumulatorTrackersRequestAmino {
    return (
      o &&
      (o.$typeUrl === TickAccumulatorTrackersRequest.typeUrl ||
        (typeof o.pool_id === 'bigint' && typeof o.tick_index === 'bigint'))
    );
  },
  encode(
    message: TickAccumulatorTrackersRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.tickIndex !== BigInt(0)) {
      writer.uint32(16).int64(message.tickIndex);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): TickAccumulatorTrackersRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTickAccumulatorTrackersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.tickIndex = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(
    object: Partial<TickAccumulatorTrackersRequest>,
  ): TickAccumulatorTrackersRequest {
    const message = createBaseTickAccumulatorTrackersRequest();
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? BigInt(object.poolId.toString())
        : BigInt(0);
    message.tickIndex =
      object.tickIndex !== undefined && object.tickIndex !== null
        ? BigInt(object.tickIndex.toString())
        : BigInt(0);
    return message;
  },
  fromAmino(
    object: TickAccumulatorTrackersRequestAmino,
  ): TickAccumulatorTrackersRequest {
    const message = createBaseTickAccumulatorTrackersRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.tick_index !== undefined && object.tick_index !== null) {
      message.tickIndex = BigInt(object.tick_index);
    }
    return message;
  },
  toAmino(
    message: TickAccumulatorTrackersRequest,
  ): TickAccumulatorTrackersRequestAmino {
    const obj: any = {};
    obj.pool_id =
      message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    obj.tick_index =
      message.tickIndex !== BigInt(0)
        ? message.tickIndex?.toString()
        : undefined;
    return obj;
  },
  fromAminoMsg(
    object: TickAccumulatorTrackersRequestAminoMsg,
  ): TickAccumulatorTrackersRequest {
    return TickAccumulatorTrackersRequest.fromAmino(object.value);
  },
  fromProtoMsg(
    message: TickAccumulatorTrackersRequestProtoMsg,
  ): TickAccumulatorTrackersRequest {
    return TickAccumulatorTrackersRequest.decode(message.value);
  },
  toProto(message: TickAccumulatorTrackersRequest): Uint8Array {
    return TickAccumulatorTrackersRequest.encode(message).finish();
  },
  toProtoMsg(
    message: TickAccumulatorTrackersRequest,
  ): TickAccumulatorTrackersRequestProtoMsg {
    return {
      typeUrl:
        '/symphony.concentratedliquidity.v1beta1.TickAccumulatorTrackersRequest',
      value: TickAccumulatorTrackersRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  TickAccumulatorTrackersRequest.typeUrl,
  TickAccumulatorTrackersRequest,
);
function createBaseTickAccumulatorTrackersResponse(): TickAccumulatorTrackersResponse {
  return {
    spreadRewardGrowthOppositeDirectionOfLastTraversal: [],
    uptimeTrackers: [],
  };
}
/**
 * @name TickAccumulatorTrackersResponse
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.TickAccumulatorTrackersResponse
 */
export const TickAccumulatorTrackersResponse = {
  typeUrl:
    '/symphony.concentratedliquidity.v1beta1.TickAccumulatorTrackersResponse',
  is(o: any): o is TickAccumulatorTrackersResponse {
    return (
      o &&
      (o.$typeUrl === TickAccumulatorTrackersResponse.typeUrl ||
        (Array.isArray(o.spreadRewardGrowthOppositeDirectionOfLastTraversal) &&
          (!o.spreadRewardGrowthOppositeDirectionOfLastTraversal.length ||
            DecCoin.is(
              o.spreadRewardGrowthOppositeDirectionOfLastTraversal[0],
            )) &&
          Array.isArray(o.uptimeTrackers) &&
          (!o.uptimeTrackers.length || UptimeTracker.is(o.uptimeTrackers[0]))))
    );
  },
  isSDK(o: any): o is TickAccumulatorTrackersResponseSDKType {
    return (
      o &&
      (o.$typeUrl === TickAccumulatorTrackersResponse.typeUrl ||
        (Array.isArray(
          o.spread_reward_growth_opposite_direction_of_last_traversal,
        ) &&
          (!o.spread_reward_growth_opposite_direction_of_last_traversal
            .length ||
            DecCoin.isSDK(
              o.spread_reward_growth_opposite_direction_of_last_traversal[0],
            )) &&
          Array.isArray(o.uptime_trackers) &&
          (!o.uptime_trackers.length ||
            UptimeTracker.isSDK(o.uptime_trackers[0]))))
    );
  },
  isAmino(o: any): o is TickAccumulatorTrackersResponseAmino {
    return (
      o &&
      (o.$typeUrl === TickAccumulatorTrackersResponse.typeUrl ||
        (Array.isArray(
          o.spread_reward_growth_opposite_direction_of_last_traversal,
        ) &&
          (!o.spread_reward_growth_opposite_direction_of_last_traversal
            .length ||
            DecCoin.isAmino(
              o.spread_reward_growth_opposite_direction_of_last_traversal[0],
            )) &&
          Array.isArray(o.uptime_trackers) &&
          (!o.uptime_trackers.length ||
            UptimeTracker.isAmino(o.uptime_trackers[0]))))
    );
  },
  encode(
    message: TickAccumulatorTrackersResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.spreadRewardGrowthOppositeDirectionOfLastTraversal) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.uptimeTrackers) {
      UptimeTracker.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): TickAccumulatorTrackersResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTickAccumulatorTrackersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.spreadRewardGrowthOppositeDirectionOfLastTraversal.push(
            DecCoin.decode(reader, reader.uint32()),
          );
          break;
        case 2:
          message.uptimeTrackers.push(
            UptimeTracker.decode(reader, reader.uint32()),
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
    object: Partial<TickAccumulatorTrackersResponse>,
  ): TickAccumulatorTrackersResponse {
    const message = createBaseTickAccumulatorTrackersResponse();
    message.spreadRewardGrowthOppositeDirectionOfLastTraversal =
      object.spreadRewardGrowthOppositeDirectionOfLastTraversal?.map(e =>
        DecCoin.fromPartial(e),
      ) || [];
    message.uptimeTrackers =
      object.uptimeTrackers?.map(e => UptimeTracker.fromPartial(e)) || [];
    return message;
  },
  fromAmino(
    object: TickAccumulatorTrackersResponseAmino,
  ): TickAccumulatorTrackersResponse {
    const message = createBaseTickAccumulatorTrackersResponse();
    message.spreadRewardGrowthOppositeDirectionOfLastTraversal =
      object.spread_reward_growth_opposite_direction_of_last_traversal?.map(e =>
        DecCoin.fromAmino(e),
      ) || [];
    message.uptimeTrackers =
      object.uptime_trackers?.map(e => UptimeTracker.fromAmino(e)) || [];
    return message;
  },
  toAmino(
    message: TickAccumulatorTrackersResponse,
  ): TickAccumulatorTrackersResponseAmino {
    const obj: any = {};
    if (message.spreadRewardGrowthOppositeDirectionOfLastTraversal) {
      obj.spread_reward_growth_opposite_direction_of_last_traversal =
        message.spreadRewardGrowthOppositeDirectionOfLastTraversal.map(e =>
          e ? DecCoin.toAmino(e) : undefined,
        );
    } else {
      obj.spread_reward_growth_opposite_direction_of_last_traversal =
        message.spreadRewardGrowthOppositeDirectionOfLastTraversal;
    }
    if (message.uptimeTrackers) {
      obj.uptime_trackers = message.uptimeTrackers.map(e =>
        e ? UptimeTracker.toAmino(e) : undefined,
      );
    } else {
      obj.uptime_trackers = message.uptimeTrackers;
    }
    return obj;
  },
  fromAminoMsg(
    object: TickAccumulatorTrackersResponseAminoMsg,
  ): TickAccumulatorTrackersResponse {
    return TickAccumulatorTrackersResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: TickAccumulatorTrackersResponseProtoMsg,
  ): TickAccumulatorTrackersResponse {
    return TickAccumulatorTrackersResponse.decode(message.value);
  },
  toProto(message: TickAccumulatorTrackersResponse): Uint8Array {
    return TickAccumulatorTrackersResponse.encode(message).finish();
  },
  toProtoMsg(
    message: TickAccumulatorTrackersResponse,
  ): TickAccumulatorTrackersResponseProtoMsg {
    return {
      typeUrl:
        '/symphony.concentratedliquidity.v1beta1.TickAccumulatorTrackersResponse',
      value: TickAccumulatorTrackersResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  TickAccumulatorTrackersResponse.typeUrl,
  TickAccumulatorTrackersResponse,
);
function createBaseIncentiveRecordsRequest(): IncentiveRecordsRequest {
  return {
    poolId: BigInt(0),
    pagination: undefined,
  };
}
/**
 * ===================== QueryIncentiveRecords
 * @name IncentiveRecordsRequest
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.IncentiveRecordsRequest
 */
export const IncentiveRecordsRequest = {
  typeUrl: '/symphony.concentratedliquidity.v1beta1.IncentiveRecordsRequest',
  is(o: any): o is IncentiveRecordsRequest {
    return (
      o &&
      (o.$typeUrl === IncentiveRecordsRequest.typeUrl ||
        typeof o.poolId === 'bigint')
    );
  },
  isSDK(o: any): o is IncentiveRecordsRequestSDKType {
    return (
      o &&
      (o.$typeUrl === IncentiveRecordsRequest.typeUrl ||
        typeof o.pool_id === 'bigint')
    );
  },
  isAmino(o: any): o is IncentiveRecordsRequestAmino {
    return (
      o &&
      (o.$typeUrl === IncentiveRecordsRequest.typeUrl ||
        typeof o.pool_id === 'bigint')
    );
  },
  encode(
    message: IncentiveRecordsRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): IncentiveRecordsRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIncentiveRecordsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
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
  fromPartial(
    object: Partial<IncentiveRecordsRequest>,
  ): IncentiveRecordsRequest {
    const message = createBaseIncentiveRecordsRequest();
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? BigInt(object.poolId.toString())
        : BigInt(0);
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
  fromAmino(object: IncentiveRecordsRequestAmino): IncentiveRecordsRequest {
    const message = createBaseIncentiveRecordsRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: IncentiveRecordsRequest): IncentiveRecordsRequestAmino {
    const obj: any = {};
    obj.pool_id =
      message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    obj.pagination = message.pagination
      ? PageRequest.toAmino(message.pagination)
      : undefined;
    return obj;
  },
  fromAminoMsg(
    object: IncentiveRecordsRequestAminoMsg,
  ): IncentiveRecordsRequest {
    return IncentiveRecordsRequest.fromAmino(object.value);
  },
  fromProtoMsg(
    message: IncentiveRecordsRequestProtoMsg,
  ): IncentiveRecordsRequest {
    return IncentiveRecordsRequest.decode(message.value);
  },
  toProto(message: IncentiveRecordsRequest): Uint8Array {
    return IncentiveRecordsRequest.encode(message).finish();
  },
  toProtoMsg(
    message: IncentiveRecordsRequest,
  ): IncentiveRecordsRequestProtoMsg {
    return {
      typeUrl:
        '/symphony.concentratedliquidity.v1beta1.IncentiveRecordsRequest',
      value: IncentiveRecordsRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  IncentiveRecordsRequest.typeUrl,
  IncentiveRecordsRequest,
);
function createBaseIncentiveRecordsResponse(): IncentiveRecordsResponse {
  return {
    incentiveRecords: [],
    pagination: undefined,
  };
}
/**
 * @name IncentiveRecordsResponse
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.IncentiveRecordsResponse
 */
export const IncentiveRecordsResponse = {
  typeUrl: '/symphony.concentratedliquidity.v1beta1.IncentiveRecordsResponse',
  is(o: any): o is IncentiveRecordsResponse {
    return (
      o &&
      (o.$typeUrl === IncentiveRecordsResponse.typeUrl ||
        (Array.isArray(o.incentiveRecords) &&
          (!o.incentiveRecords.length ||
            IncentiveRecord.is(o.incentiveRecords[0]))))
    );
  },
  isSDK(o: any): o is IncentiveRecordsResponseSDKType {
    return (
      o &&
      (o.$typeUrl === IncentiveRecordsResponse.typeUrl ||
        (Array.isArray(o.incentive_records) &&
          (!o.incentive_records.length ||
            IncentiveRecord.isSDK(o.incentive_records[0]))))
    );
  },
  isAmino(o: any): o is IncentiveRecordsResponseAmino {
    return (
      o &&
      (o.$typeUrl === IncentiveRecordsResponse.typeUrl ||
        (Array.isArray(o.incentive_records) &&
          (!o.incentive_records.length ||
            IncentiveRecord.isAmino(o.incentive_records[0]))))
    );
  },
  encode(
    message: IncentiveRecordsResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.incentiveRecords) {
      IncentiveRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): IncentiveRecordsResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIncentiveRecordsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.incentiveRecords.push(
            IncentiveRecord.decode(reader, reader.uint32()),
          );
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
  fromPartial(
    object: Partial<IncentiveRecordsResponse>,
  ): IncentiveRecordsResponse {
    const message = createBaseIncentiveRecordsResponse();
    message.incentiveRecords =
      object.incentiveRecords?.map(e => IncentiveRecord.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
  fromAmino(object: IncentiveRecordsResponseAmino): IncentiveRecordsResponse {
    const message = createBaseIncentiveRecordsResponse();
    message.incentiveRecords =
      object.incentive_records?.map(e => IncentiveRecord.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: IncentiveRecordsResponse): IncentiveRecordsResponseAmino {
    const obj: any = {};
    if (message.incentiveRecords) {
      obj.incentive_records = message.incentiveRecords.map(e =>
        e ? IncentiveRecord.toAmino(e) : undefined,
      );
    } else {
      obj.incentive_records = message.incentiveRecords;
    }
    obj.pagination = message.pagination
      ? PageResponse.toAmino(message.pagination)
      : undefined;
    return obj;
  },
  fromAminoMsg(
    object: IncentiveRecordsResponseAminoMsg,
  ): IncentiveRecordsResponse {
    return IncentiveRecordsResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: IncentiveRecordsResponseProtoMsg,
  ): IncentiveRecordsResponse {
    return IncentiveRecordsResponse.decode(message.value);
  },
  toProto(message: IncentiveRecordsResponse): Uint8Array {
    return IncentiveRecordsResponse.encode(message).finish();
  },
  toProtoMsg(
    message: IncentiveRecordsResponse,
  ): IncentiveRecordsResponseProtoMsg {
    return {
      typeUrl:
        '/symphony.concentratedliquidity.v1beta1.IncentiveRecordsResponse',
      value: IncentiveRecordsResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  IncentiveRecordsResponse.typeUrl,
  IncentiveRecordsResponse,
);
function createBaseCFMMPoolIdLinkFromConcentratedPoolIdRequest(): CFMMPoolIdLinkFromConcentratedPoolIdRequest {
  return {
    concentratedPoolId: BigInt(0),
  };
}
/**
 * =============================== CFMMPoolIdLinkFromConcentratedPoolId
 * @name CFMMPoolIdLinkFromConcentratedPoolIdRequest
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.CFMMPoolIdLinkFromConcentratedPoolIdRequest
 */
export const CFMMPoolIdLinkFromConcentratedPoolIdRequest = {
  typeUrl:
    '/symphony.concentratedliquidity.v1beta1.CFMMPoolIdLinkFromConcentratedPoolIdRequest',
  is(o: any): o is CFMMPoolIdLinkFromConcentratedPoolIdRequest {
    return (
      o &&
      (o.$typeUrl === CFMMPoolIdLinkFromConcentratedPoolIdRequest.typeUrl ||
        typeof o.concentratedPoolId === 'bigint')
    );
  },
  isSDK(o: any): o is CFMMPoolIdLinkFromConcentratedPoolIdRequestSDKType {
    return (
      o &&
      (o.$typeUrl === CFMMPoolIdLinkFromConcentratedPoolIdRequest.typeUrl ||
        typeof o.concentrated_pool_id === 'bigint')
    );
  },
  isAmino(o: any): o is CFMMPoolIdLinkFromConcentratedPoolIdRequestAmino {
    return (
      o &&
      (o.$typeUrl === CFMMPoolIdLinkFromConcentratedPoolIdRequest.typeUrl ||
        typeof o.concentrated_pool_id === 'bigint')
    );
  },
  encode(
    message: CFMMPoolIdLinkFromConcentratedPoolIdRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.concentratedPoolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.concentratedPoolId);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): CFMMPoolIdLinkFromConcentratedPoolIdRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCFMMPoolIdLinkFromConcentratedPoolIdRequest();
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
  fromPartial(
    object: Partial<CFMMPoolIdLinkFromConcentratedPoolIdRequest>,
  ): CFMMPoolIdLinkFromConcentratedPoolIdRequest {
    const message = createBaseCFMMPoolIdLinkFromConcentratedPoolIdRequest();
    message.concentratedPoolId =
      object.concentratedPoolId !== undefined &&
      object.concentratedPoolId !== null
        ? BigInt(object.concentratedPoolId.toString())
        : BigInt(0);
    return message;
  },
  fromAmino(
    object: CFMMPoolIdLinkFromConcentratedPoolIdRequestAmino,
  ): CFMMPoolIdLinkFromConcentratedPoolIdRequest {
    const message = createBaseCFMMPoolIdLinkFromConcentratedPoolIdRequest();
    if (
      object.concentrated_pool_id !== undefined &&
      object.concentrated_pool_id !== null
    ) {
      message.concentratedPoolId = BigInt(object.concentrated_pool_id);
    }
    return message;
  },
  toAmino(
    message: CFMMPoolIdLinkFromConcentratedPoolIdRequest,
  ): CFMMPoolIdLinkFromConcentratedPoolIdRequestAmino {
    const obj: any = {};
    obj.concentrated_pool_id =
      message.concentratedPoolId !== BigInt(0)
        ? message.concentratedPoolId?.toString()
        : undefined;
    return obj;
  },
  fromAminoMsg(
    object: CFMMPoolIdLinkFromConcentratedPoolIdRequestAminoMsg,
  ): CFMMPoolIdLinkFromConcentratedPoolIdRequest {
    return CFMMPoolIdLinkFromConcentratedPoolIdRequest.fromAmino(object.value);
  },
  fromProtoMsg(
    message: CFMMPoolIdLinkFromConcentratedPoolIdRequestProtoMsg,
  ): CFMMPoolIdLinkFromConcentratedPoolIdRequest {
    return CFMMPoolIdLinkFromConcentratedPoolIdRequest.decode(message.value);
  },
  toProto(message: CFMMPoolIdLinkFromConcentratedPoolIdRequest): Uint8Array {
    return CFMMPoolIdLinkFromConcentratedPoolIdRequest.encode(message).finish();
  },
  toProtoMsg(
    message: CFMMPoolIdLinkFromConcentratedPoolIdRequest,
  ): CFMMPoolIdLinkFromConcentratedPoolIdRequestProtoMsg {
    return {
      typeUrl:
        '/symphony.concentratedliquidity.v1beta1.CFMMPoolIdLinkFromConcentratedPoolIdRequest',
      value:
        CFMMPoolIdLinkFromConcentratedPoolIdRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  CFMMPoolIdLinkFromConcentratedPoolIdRequest.typeUrl,
  CFMMPoolIdLinkFromConcentratedPoolIdRequest,
);
function createBaseCFMMPoolIdLinkFromConcentratedPoolIdResponse(): CFMMPoolIdLinkFromConcentratedPoolIdResponse {
  return {
    cfmmPoolId: BigInt(0),
  };
}
/**
 * @name CFMMPoolIdLinkFromConcentratedPoolIdResponse
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.CFMMPoolIdLinkFromConcentratedPoolIdResponse
 */
export const CFMMPoolIdLinkFromConcentratedPoolIdResponse = {
  typeUrl:
    '/symphony.concentratedliquidity.v1beta1.CFMMPoolIdLinkFromConcentratedPoolIdResponse',
  is(o: any): o is CFMMPoolIdLinkFromConcentratedPoolIdResponse {
    return (
      o &&
      (o.$typeUrl === CFMMPoolIdLinkFromConcentratedPoolIdResponse.typeUrl ||
        typeof o.cfmmPoolId === 'bigint')
    );
  },
  isSDK(o: any): o is CFMMPoolIdLinkFromConcentratedPoolIdResponseSDKType {
    return (
      o &&
      (o.$typeUrl === CFMMPoolIdLinkFromConcentratedPoolIdResponse.typeUrl ||
        typeof o.cfmm_pool_id === 'bigint')
    );
  },
  isAmino(o: any): o is CFMMPoolIdLinkFromConcentratedPoolIdResponseAmino {
    return (
      o &&
      (o.$typeUrl === CFMMPoolIdLinkFromConcentratedPoolIdResponse.typeUrl ||
        typeof o.cfmm_pool_id === 'bigint')
    );
  },
  encode(
    message: CFMMPoolIdLinkFromConcentratedPoolIdResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.cfmmPoolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.cfmmPoolId);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): CFMMPoolIdLinkFromConcentratedPoolIdResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCFMMPoolIdLinkFromConcentratedPoolIdResponse();
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
  fromPartial(
    object: Partial<CFMMPoolIdLinkFromConcentratedPoolIdResponse>,
  ): CFMMPoolIdLinkFromConcentratedPoolIdResponse {
    const message = createBaseCFMMPoolIdLinkFromConcentratedPoolIdResponse();
    message.cfmmPoolId =
      object.cfmmPoolId !== undefined && object.cfmmPoolId !== null
        ? BigInt(object.cfmmPoolId.toString())
        : BigInt(0);
    return message;
  },
  fromAmino(
    object: CFMMPoolIdLinkFromConcentratedPoolIdResponseAmino,
  ): CFMMPoolIdLinkFromConcentratedPoolIdResponse {
    const message = createBaseCFMMPoolIdLinkFromConcentratedPoolIdResponse();
    if (object.cfmm_pool_id !== undefined && object.cfmm_pool_id !== null) {
      message.cfmmPoolId = BigInt(object.cfmm_pool_id);
    }
    return message;
  },
  toAmino(
    message: CFMMPoolIdLinkFromConcentratedPoolIdResponse,
  ): CFMMPoolIdLinkFromConcentratedPoolIdResponseAmino {
    const obj: any = {};
    obj.cfmm_pool_id =
      message.cfmmPoolId !== BigInt(0)
        ? message.cfmmPoolId?.toString()
        : undefined;
    return obj;
  },
  fromAminoMsg(
    object: CFMMPoolIdLinkFromConcentratedPoolIdResponseAminoMsg,
  ): CFMMPoolIdLinkFromConcentratedPoolIdResponse {
    return CFMMPoolIdLinkFromConcentratedPoolIdResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: CFMMPoolIdLinkFromConcentratedPoolIdResponseProtoMsg,
  ): CFMMPoolIdLinkFromConcentratedPoolIdResponse {
    return CFMMPoolIdLinkFromConcentratedPoolIdResponse.decode(message.value);
  },
  toProto(message: CFMMPoolIdLinkFromConcentratedPoolIdResponse): Uint8Array {
    return CFMMPoolIdLinkFromConcentratedPoolIdResponse.encode(
      message,
    ).finish();
  },
  toProtoMsg(
    message: CFMMPoolIdLinkFromConcentratedPoolIdResponse,
  ): CFMMPoolIdLinkFromConcentratedPoolIdResponseProtoMsg {
    return {
      typeUrl:
        '/symphony.concentratedliquidity.v1beta1.CFMMPoolIdLinkFromConcentratedPoolIdResponse',
      value:
        CFMMPoolIdLinkFromConcentratedPoolIdResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  CFMMPoolIdLinkFromConcentratedPoolIdResponse.typeUrl,
  CFMMPoolIdLinkFromConcentratedPoolIdResponse,
);
function createBaseUserUnbondingPositionsRequest(): UserUnbondingPositionsRequest {
  return {
    address: '',
  };
}
/**
 * =============================== UserUnbondingPositions
 * @name UserUnbondingPositionsRequest
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.UserUnbondingPositionsRequest
 */
export const UserUnbondingPositionsRequest = {
  typeUrl:
    '/symphony.concentratedliquidity.v1beta1.UserUnbondingPositionsRequest',
  is(o: any): o is UserUnbondingPositionsRequest {
    return (
      o &&
      (o.$typeUrl === UserUnbondingPositionsRequest.typeUrl ||
        typeof o.address === 'string')
    );
  },
  isSDK(o: any): o is UserUnbondingPositionsRequestSDKType {
    return (
      o &&
      (o.$typeUrl === UserUnbondingPositionsRequest.typeUrl ||
        typeof o.address === 'string')
    );
  },
  isAmino(o: any): o is UserUnbondingPositionsRequestAmino {
    return (
      o &&
      (o.$typeUrl === UserUnbondingPositionsRequest.typeUrl ||
        typeof o.address === 'string')
    );
  },
  encode(
    message: UserUnbondingPositionsRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.address !== '') {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): UserUnbondingPositionsRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserUnbondingPositionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(
    object: Partial<UserUnbondingPositionsRequest>,
  ): UserUnbondingPositionsRequest {
    const message = createBaseUserUnbondingPositionsRequest();
    message.address = object.address ?? '';
    return message;
  },
  fromAmino(
    object: UserUnbondingPositionsRequestAmino,
  ): UserUnbondingPositionsRequest {
    const message = createBaseUserUnbondingPositionsRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(
    message: UserUnbondingPositionsRequest,
  ): UserUnbondingPositionsRequestAmino {
    const obj: any = {};
    obj.address = message.address === '' ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(
    object: UserUnbondingPositionsRequestAminoMsg,
  ): UserUnbondingPositionsRequest {
    return UserUnbondingPositionsRequest.fromAmino(object.value);
  },
  fromProtoMsg(
    message: UserUnbondingPositionsRequestProtoMsg,
  ): UserUnbondingPositionsRequest {
    return UserUnbondingPositionsRequest.decode(message.value);
  },
  toProto(message: UserUnbondingPositionsRequest): Uint8Array {
    return UserUnbondingPositionsRequest.encode(message).finish();
  },
  toProtoMsg(
    message: UserUnbondingPositionsRequest,
  ): UserUnbondingPositionsRequestProtoMsg {
    return {
      typeUrl:
        '/symphony.concentratedliquidity.v1beta1.UserUnbondingPositionsRequest',
      value: UserUnbondingPositionsRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  UserUnbondingPositionsRequest.typeUrl,
  UserUnbondingPositionsRequest,
);
function createBaseUserUnbondingPositionsResponse(): UserUnbondingPositionsResponse {
  return {
    positionsWithPeriodLock: [],
  };
}
/**
 * @name UserUnbondingPositionsResponse
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.UserUnbondingPositionsResponse
 */
export const UserUnbondingPositionsResponse = {
  typeUrl:
    '/symphony.concentratedliquidity.v1beta1.UserUnbondingPositionsResponse',
  is(o: any): o is UserUnbondingPositionsResponse {
    return (
      o &&
      (o.$typeUrl === UserUnbondingPositionsResponse.typeUrl ||
        (Array.isArray(o.positionsWithPeriodLock) &&
          (!o.positionsWithPeriodLock.length ||
            PositionWithPeriodLock.is(o.positionsWithPeriodLock[0]))))
    );
  },
  isSDK(o: any): o is UserUnbondingPositionsResponseSDKType {
    return (
      o &&
      (o.$typeUrl === UserUnbondingPositionsResponse.typeUrl ||
        (Array.isArray(o.positions_with_period_lock) &&
          (!o.positions_with_period_lock.length ||
            PositionWithPeriodLock.isSDK(o.positions_with_period_lock[0]))))
    );
  },
  isAmino(o: any): o is UserUnbondingPositionsResponseAmino {
    return (
      o &&
      (o.$typeUrl === UserUnbondingPositionsResponse.typeUrl ||
        (Array.isArray(o.positions_with_period_lock) &&
          (!o.positions_with_period_lock.length ||
            PositionWithPeriodLock.isAmino(o.positions_with_period_lock[0]))))
    );
  },
  encode(
    message: UserUnbondingPositionsResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.positionsWithPeriodLock) {
      PositionWithPeriodLock.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): UserUnbondingPositionsResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserUnbondingPositionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.positionsWithPeriodLock.push(
            PositionWithPeriodLock.decode(reader, reader.uint32()),
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
    object: Partial<UserUnbondingPositionsResponse>,
  ): UserUnbondingPositionsResponse {
    const message = createBaseUserUnbondingPositionsResponse();
    message.positionsWithPeriodLock =
      object.positionsWithPeriodLock?.map(e =>
        PositionWithPeriodLock.fromPartial(e),
      ) || [];
    return message;
  },
  fromAmino(
    object: UserUnbondingPositionsResponseAmino,
  ): UserUnbondingPositionsResponse {
    const message = createBaseUserUnbondingPositionsResponse();
    message.positionsWithPeriodLock =
      object.positions_with_period_lock?.map(e =>
        PositionWithPeriodLock.fromAmino(e),
      ) || [];
    return message;
  },
  toAmino(
    message: UserUnbondingPositionsResponse,
  ): UserUnbondingPositionsResponseAmino {
    const obj: any = {};
    if (message.positionsWithPeriodLock) {
      obj.positions_with_period_lock = message.positionsWithPeriodLock.map(e =>
        e ? PositionWithPeriodLock.toAmino(e) : undefined,
      );
    } else {
      obj.positions_with_period_lock = message.positionsWithPeriodLock;
    }
    return obj;
  },
  fromAminoMsg(
    object: UserUnbondingPositionsResponseAminoMsg,
  ): UserUnbondingPositionsResponse {
    return UserUnbondingPositionsResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: UserUnbondingPositionsResponseProtoMsg,
  ): UserUnbondingPositionsResponse {
    return UserUnbondingPositionsResponse.decode(message.value);
  },
  toProto(message: UserUnbondingPositionsResponse): Uint8Array {
    return UserUnbondingPositionsResponse.encode(message).finish();
  },
  toProtoMsg(
    message: UserUnbondingPositionsResponse,
  ): UserUnbondingPositionsResponseProtoMsg {
    return {
      typeUrl:
        '/symphony.concentratedliquidity.v1beta1.UserUnbondingPositionsResponse',
      value: UserUnbondingPositionsResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  UserUnbondingPositionsResponse.typeUrl,
  UserUnbondingPositionsResponse,
);
function createBaseGetTotalLiquidityRequest(): GetTotalLiquidityRequest {
  return {};
}
/**
 * =============================== GetTotalLiquidity
 * @name GetTotalLiquidityRequest
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.GetTotalLiquidityRequest
 */
export const GetTotalLiquidityRequest = {
  typeUrl: '/symphony.concentratedliquidity.v1beta1.GetTotalLiquidityRequest',
  is(o: any): o is GetTotalLiquidityRequest {
    return o && o.$typeUrl === GetTotalLiquidityRequest.typeUrl;
  },
  isSDK(o: any): o is GetTotalLiquidityRequestSDKType {
    return o && o.$typeUrl === GetTotalLiquidityRequest.typeUrl;
  },
  isAmino(o: any): o is GetTotalLiquidityRequestAmino {
    return o && o.$typeUrl === GetTotalLiquidityRequest.typeUrl;
  },
  encode(
    _: GetTotalLiquidityRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): GetTotalLiquidityRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTotalLiquidityRequest();
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
  fromPartial(_: Partial<GetTotalLiquidityRequest>): GetTotalLiquidityRequest {
    const message = createBaseGetTotalLiquidityRequest();
    return message;
  },
  fromAmino(_: GetTotalLiquidityRequestAmino): GetTotalLiquidityRequest {
    const message = createBaseGetTotalLiquidityRequest();
    return message;
  },
  toAmino(_: GetTotalLiquidityRequest): GetTotalLiquidityRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(
    object: GetTotalLiquidityRequestAminoMsg,
  ): GetTotalLiquidityRequest {
    return GetTotalLiquidityRequest.fromAmino(object.value);
  },
  fromProtoMsg(
    message: GetTotalLiquidityRequestProtoMsg,
  ): GetTotalLiquidityRequest {
    return GetTotalLiquidityRequest.decode(message.value);
  },
  toProto(message: GetTotalLiquidityRequest): Uint8Array {
    return GetTotalLiquidityRequest.encode(message).finish();
  },
  toProtoMsg(
    message: GetTotalLiquidityRequest,
  ): GetTotalLiquidityRequestProtoMsg {
    return {
      typeUrl:
        '/symphony.concentratedliquidity.v1beta1.GetTotalLiquidityRequest',
      value: GetTotalLiquidityRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  GetTotalLiquidityRequest.typeUrl,
  GetTotalLiquidityRequest,
);
function createBaseGetTotalLiquidityResponse(): GetTotalLiquidityResponse {
  return {
    totalLiquidity: [],
  };
}
/**
 * @name GetTotalLiquidityResponse
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.GetTotalLiquidityResponse
 */
export const GetTotalLiquidityResponse = {
  typeUrl: '/symphony.concentratedliquidity.v1beta1.GetTotalLiquidityResponse',
  is(o: any): o is GetTotalLiquidityResponse {
    return (
      o &&
      (o.$typeUrl === GetTotalLiquidityResponse.typeUrl ||
        (Array.isArray(o.totalLiquidity) &&
          (!o.totalLiquidity.length || Coin.is(o.totalLiquidity[0]))))
    );
  },
  isSDK(o: any): o is GetTotalLiquidityResponseSDKType {
    return (
      o &&
      (o.$typeUrl === GetTotalLiquidityResponse.typeUrl ||
        (Array.isArray(o.total_liquidity) &&
          (!o.total_liquidity.length || Coin.isSDK(o.total_liquidity[0]))))
    );
  },
  isAmino(o: any): o is GetTotalLiquidityResponseAmino {
    return (
      o &&
      (o.$typeUrl === GetTotalLiquidityResponse.typeUrl ||
        (Array.isArray(o.total_liquidity) &&
          (!o.total_liquidity.length || Coin.isAmino(o.total_liquidity[0]))))
    );
  },
  encode(
    message: GetTotalLiquidityResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.totalLiquidity) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): GetTotalLiquidityResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTotalLiquidityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalLiquidity.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(
    object: Partial<GetTotalLiquidityResponse>,
  ): GetTotalLiquidityResponse {
    const message = createBaseGetTotalLiquidityResponse();
    message.totalLiquidity =
      object.totalLiquidity?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GetTotalLiquidityResponseAmino): GetTotalLiquidityResponse {
    const message = createBaseGetTotalLiquidityResponse();
    message.totalLiquidity =
      object.total_liquidity?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GetTotalLiquidityResponse): GetTotalLiquidityResponseAmino {
    const obj: any = {};
    if (message.totalLiquidity) {
      obj.total_liquidity = message.totalLiquidity.map(e =>
        e ? Coin.toAmino(e) : undefined,
      );
    } else {
      obj.total_liquidity = message.totalLiquidity;
    }
    return obj;
  },
  fromAminoMsg(
    object: GetTotalLiquidityResponseAminoMsg,
  ): GetTotalLiquidityResponse {
    return GetTotalLiquidityResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: GetTotalLiquidityResponseProtoMsg,
  ): GetTotalLiquidityResponse {
    return GetTotalLiquidityResponse.decode(message.value);
  },
  toProto(message: GetTotalLiquidityResponse): Uint8Array {
    return GetTotalLiquidityResponse.encode(message).finish();
  },
  toProtoMsg(
    message: GetTotalLiquidityResponse,
  ): GetTotalLiquidityResponseProtoMsg {
    return {
      typeUrl:
        '/symphony.concentratedliquidity.v1beta1.GetTotalLiquidityResponse',
      value: GetTotalLiquidityResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  GetTotalLiquidityResponse.typeUrl,
  GetTotalLiquidityResponse,
);
function createBaseNumNextInitializedTicksRequest(): NumNextInitializedTicksRequest {
  return {
    poolId: BigInt(0),
    tokenInDenom: '',
    numNextInitializedTicks: BigInt(0),
  };
}
/**
 * =============================== NumNextInitializedTicks
 * @name NumNextInitializedTicksRequest
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.NumNextInitializedTicksRequest
 */
export const NumNextInitializedTicksRequest = {
  typeUrl:
    '/symphony.concentratedliquidity.v1beta1.NumNextInitializedTicksRequest',
  is(o: any): o is NumNextInitializedTicksRequest {
    return (
      o &&
      (o.$typeUrl === NumNextInitializedTicksRequest.typeUrl ||
        (typeof o.poolId === 'bigint' &&
          typeof o.tokenInDenom === 'string' &&
          typeof o.numNextInitializedTicks === 'bigint'))
    );
  },
  isSDK(o: any): o is NumNextInitializedTicksRequestSDKType {
    return (
      o &&
      (o.$typeUrl === NumNextInitializedTicksRequest.typeUrl ||
        (typeof o.pool_id === 'bigint' &&
          typeof o.token_in_denom === 'string' &&
          typeof o.num_next_initialized_ticks === 'bigint'))
    );
  },
  isAmino(o: any): o is NumNextInitializedTicksRequestAmino {
    return (
      o &&
      (o.$typeUrl === NumNextInitializedTicksRequest.typeUrl ||
        (typeof o.pool_id === 'bigint' &&
          typeof o.token_in_denom === 'string' &&
          typeof o.num_next_initialized_ticks === 'bigint'))
    );
  },
  encode(
    message: NumNextInitializedTicksRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.tokenInDenom !== '') {
      writer.uint32(18).string(message.tokenInDenom);
    }
    if (message.numNextInitializedTicks !== BigInt(0)) {
      writer.uint32(24).uint64(message.numNextInitializedTicks);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): NumNextInitializedTicksRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNumNextInitializedTicksRequest();
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
          message.numNextInitializedTicks = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(
    object: Partial<NumNextInitializedTicksRequest>,
  ): NumNextInitializedTicksRequest {
    const message = createBaseNumNextInitializedTicksRequest();
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? BigInt(object.poolId.toString())
        : BigInt(0);
    message.tokenInDenom = object.tokenInDenom ?? '';
    message.numNextInitializedTicks =
      object.numNextInitializedTicks !== undefined &&
      object.numNextInitializedTicks !== null
        ? BigInt(object.numNextInitializedTicks.toString())
        : BigInt(0);
    return message;
  },
  fromAmino(
    object: NumNextInitializedTicksRequestAmino,
  ): NumNextInitializedTicksRequest {
    const message = createBaseNumNextInitializedTicksRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.token_in_denom !== undefined && object.token_in_denom !== null) {
      message.tokenInDenom = object.token_in_denom;
    }
    if (
      object.num_next_initialized_ticks !== undefined &&
      object.num_next_initialized_ticks !== null
    ) {
      message.numNextInitializedTicks = BigInt(
        object.num_next_initialized_ticks,
      );
    }
    return message;
  },
  toAmino(
    message: NumNextInitializedTicksRequest,
  ): NumNextInitializedTicksRequestAmino {
    const obj: any = {};
    obj.pool_id =
      message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    obj.token_in_denom =
      message.tokenInDenom === '' ? undefined : message.tokenInDenom;
    obj.num_next_initialized_ticks =
      message.numNextInitializedTicks !== BigInt(0)
        ? message.numNextInitializedTicks?.toString()
        : undefined;
    return obj;
  },
  fromAminoMsg(
    object: NumNextInitializedTicksRequestAminoMsg,
  ): NumNextInitializedTicksRequest {
    return NumNextInitializedTicksRequest.fromAmino(object.value);
  },
  fromProtoMsg(
    message: NumNextInitializedTicksRequestProtoMsg,
  ): NumNextInitializedTicksRequest {
    return NumNextInitializedTicksRequest.decode(message.value);
  },
  toProto(message: NumNextInitializedTicksRequest): Uint8Array {
    return NumNextInitializedTicksRequest.encode(message).finish();
  },
  toProtoMsg(
    message: NumNextInitializedTicksRequest,
  ): NumNextInitializedTicksRequestProtoMsg {
    return {
      typeUrl:
        '/symphony.concentratedliquidity.v1beta1.NumNextInitializedTicksRequest',
      value: NumNextInitializedTicksRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  NumNextInitializedTicksRequest.typeUrl,
  NumNextInitializedTicksRequest,
);
function createBaseNumNextInitializedTicksResponse(): NumNextInitializedTicksResponse {
  return {
    liquidityDepths: [],
    currentTick: BigInt(0),
    currentLiquidity: '',
  };
}
/**
 * @name NumNextInitializedTicksResponse
 * @package symphony.concentratedliquidity.v1beta1
 * @see proto type: symphony.concentratedliquidity.v1beta1.NumNextInitializedTicksResponse
 */
export const NumNextInitializedTicksResponse = {
  typeUrl:
    '/symphony.concentratedliquidity.v1beta1.NumNextInitializedTicksResponse',
  is(o: any): o is NumNextInitializedTicksResponse {
    return (
      o &&
      (o.$typeUrl === NumNextInitializedTicksResponse.typeUrl ||
        (Array.isArray(o.liquidityDepths) &&
          (!o.liquidityDepths.length ||
            TickLiquidityNet.is(o.liquidityDepths[0])) &&
          typeof o.currentTick === 'bigint' &&
          typeof o.currentLiquidity === 'string'))
    );
  },
  isSDK(o: any): o is NumNextInitializedTicksResponseSDKType {
    return (
      o &&
      (o.$typeUrl === NumNextInitializedTicksResponse.typeUrl ||
        (Array.isArray(o.liquidity_depths) &&
          (!o.liquidity_depths.length ||
            TickLiquidityNet.isSDK(o.liquidity_depths[0])) &&
          typeof o.current_tick === 'bigint' &&
          typeof o.current_liquidity === 'string'))
    );
  },
  isAmino(o: any): o is NumNextInitializedTicksResponseAmino {
    return (
      o &&
      (o.$typeUrl === NumNextInitializedTicksResponse.typeUrl ||
        (Array.isArray(o.liquidity_depths) &&
          (!o.liquidity_depths.length ||
            TickLiquidityNet.isAmino(o.liquidity_depths[0])) &&
          typeof o.current_tick === 'bigint' &&
          typeof o.current_liquidity === 'string'))
    );
  },
  encode(
    message: NumNextInitializedTicksResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.liquidityDepths) {
      TickLiquidityNet.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.currentTick !== BigInt(0)) {
      writer.uint32(16).int64(message.currentTick);
    }
    if (message.currentLiquidity !== '') {
      writer
        .uint32(26)
        .string(Decimal.fromUserInput(message.currentLiquidity, 18).atomics);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): NumNextInitializedTicksResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNumNextInitializedTicksResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.liquidityDepths.push(
            TickLiquidityNet.decode(reader, reader.uint32()),
          );
          break;
        case 2:
          message.currentTick = reader.int64();
          break;
        case 3:
          message.currentLiquidity = Decimal.fromAtomics(
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
    object: Partial<NumNextInitializedTicksResponse>,
  ): NumNextInitializedTicksResponse {
    const message = createBaseNumNextInitializedTicksResponse();
    message.liquidityDepths =
      object.liquidityDepths?.map(e => TickLiquidityNet.fromPartial(e)) || [];
    message.currentTick =
      object.currentTick !== undefined && object.currentTick !== null
        ? BigInt(object.currentTick.toString())
        : BigInt(0);
    message.currentLiquidity = object.currentLiquidity ?? '';
    return message;
  },
  fromAmino(
    object: NumNextInitializedTicksResponseAmino,
  ): NumNextInitializedTicksResponse {
    const message = createBaseNumNextInitializedTicksResponse();
    message.liquidityDepths =
      object.liquidity_depths?.map(e => TickLiquidityNet.fromAmino(e)) || [];
    if (object.current_tick !== undefined && object.current_tick !== null) {
      message.currentTick = BigInt(object.current_tick);
    }
    if (
      object.current_liquidity !== undefined &&
      object.current_liquidity !== null
    ) {
      message.currentLiquidity = object.current_liquidity;
    }
    return message;
  },
  toAmino(
    message: NumNextInitializedTicksResponse,
  ): NumNextInitializedTicksResponseAmino {
    const obj: any = {};
    if (message.liquidityDepths) {
      obj.liquidity_depths = message.liquidityDepths.map(e =>
        e ? TickLiquidityNet.toAmino(e) : undefined,
      );
    } else {
      obj.liquidity_depths = message.liquidityDepths;
    }
    obj.current_tick =
      message.currentTick !== BigInt(0)
        ? message.currentTick?.toString()
        : undefined;
    obj.current_liquidity =
      message.currentLiquidity === '' ? undefined : message.currentLiquidity;
    return obj;
  },
  fromAminoMsg(
    object: NumNextInitializedTicksResponseAminoMsg,
  ): NumNextInitializedTicksResponse {
    return NumNextInitializedTicksResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: NumNextInitializedTicksResponseProtoMsg,
  ): NumNextInitializedTicksResponse {
    return NumNextInitializedTicksResponse.decode(message.value);
  },
  toProto(message: NumNextInitializedTicksResponse): Uint8Array {
    return NumNextInitializedTicksResponse.encode(message).finish();
  },
  toProtoMsg(
    message: NumNextInitializedTicksResponse,
  ): NumNextInitializedTicksResponseProtoMsg {
    return {
      typeUrl:
        '/symphony.concentratedliquidity.v1beta1.NumNextInitializedTicksResponse',
      value: NumNextInitializedTicksResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  NumNextInitializedTicksResponse.typeUrl,
  NumNextInitializedTicksResponse,
);
