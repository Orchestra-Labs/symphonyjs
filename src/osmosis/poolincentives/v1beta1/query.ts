//@ts-nocheck
import {
  Duration,
  DurationAmino,
  DurationSDKType,
} from '../../../google/protobuf/duration';
import {
  DistrInfo,
  DistrInfoAmino,
  DistrInfoSDKType,
  Params,
  ParamsAmino,
  ParamsSDKType,
} from './incentives';
import { Gauge, GaugeAmino, GaugeSDKType } from '../../incentives/gauge';
import { BinaryReader, BinaryWriter } from '../../../binary';
import { GlobalDecoderRegistry } from '../../../registry';
export interface QueryGaugeIdsRequest {
  poolId: bigint;
}
export interface QueryGaugeIdsRequestProtoMsg {
  typeUrl: '/osmosis.poolincentives.v1beta1.QueryGaugeIdsRequest';
  value: Uint8Array;
}
export interface QueryGaugeIdsRequestAmino {
  pool_id?: string;
}
export interface QueryGaugeIdsRequestAminoMsg {
  type: 'osmosis/poolincentives/query-gauge-ids-request';
  value: QueryGaugeIdsRequestAmino;
}
export interface QueryGaugeIdsRequestSDKType {
  pool_id: bigint;
}
export interface QueryGaugeIdsResponse {
  gaugeIdsWithDuration: QueryGaugeIdsResponse_GaugeIdWithDuration[];
}
export interface QueryGaugeIdsResponseProtoMsg {
  typeUrl: '/osmosis.poolincentives.v1beta1.QueryGaugeIdsResponse';
  value: Uint8Array;
}
export interface QueryGaugeIdsResponseAmino {
  gauge_ids_with_duration?: QueryGaugeIdsResponse_GaugeIdWithDurationAmino[];
}
export interface QueryGaugeIdsResponseAminoMsg {
  type: 'osmosis/poolincentives/query-gauge-ids-response';
  value: QueryGaugeIdsResponseAmino;
}
export interface QueryGaugeIdsResponseSDKType {
  gauge_ids_with_duration: QueryGaugeIdsResponse_GaugeIdWithDurationSDKType[];
}
export interface QueryGaugeIdsResponse_GaugeIdWithDuration {
  gaugeId: bigint;
  duration: Duration;
  gaugeIncentivePercentage: string;
}
export interface QueryGaugeIdsResponse_GaugeIdWithDurationProtoMsg {
  typeUrl: '/osmosis.poolincentives.v1beta1.GaugeIdWithDuration';
  value: Uint8Array;
}
export interface QueryGaugeIdsResponse_GaugeIdWithDurationAmino {
  gauge_id?: string;
  duration?: DurationAmino;
  gauge_incentive_percentage?: string;
}
export interface QueryGaugeIdsResponse_GaugeIdWithDurationAminoMsg {
  type: 'osmosis/poolincentives/gauge-id-with-duration';
  value: QueryGaugeIdsResponse_GaugeIdWithDurationAmino;
}
export interface QueryGaugeIdsResponse_GaugeIdWithDurationSDKType {
  gauge_id: bigint;
  duration: DurationSDKType;
  gauge_incentive_percentage: string;
}
export interface QueryDistrInfoRequest {}
export interface QueryDistrInfoRequestProtoMsg {
  typeUrl: '/osmosis.poolincentives.v1beta1.QueryDistrInfoRequest';
  value: Uint8Array;
}
export interface QueryDistrInfoRequestAmino {}
export interface QueryDistrInfoRequestAminoMsg {
  type: 'osmosis/poolincentives/query-distr-info-request';
  value: QueryDistrInfoRequestAmino;
}
export interface QueryDistrInfoRequestSDKType {}
export interface QueryDistrInfoResponse {
  distrInfo: DistrInfo;
}
export interface QueryDistrInfoResponseProtoMsg {
  typeUrl: '/osmosis.poolincentives.v1beta1.QueryDistrInfoResponse';
  value: Uint8Array;
}
export interface QueryDistrInfoResponseAmino {
  distr_info?: DistrInfoAmino;
}
export interface QueryDistrInfoResponseAminoMsg {
  type: 'osmosis/poolincentives/query-distr-info-response';
  value: QueryDistrInfoResponseAmino;
}
export interface QueryDistrInfoResponseSDKType {
  distr_info: DistrInfoSDKType;
}
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: '/osmosis.poolincentives.v1beta1.QueryParamsRequest';
  value: Uint8Array;
}
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: 'osmosis/poolincentives/query-params-request';
  value: QueryParamsRequestAmino;
}
export interface QueryParamsRequestSDKType {}
export interface QueryParamsResponse {
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: '/osmosis.poolincentives.v1beta1.QueryParamsResponse';
  value: Uint8Array;
}
export interface QueryParamsResponseAmino {
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: 'osmosis/poolincentives/query-params-response';
  value: QueryParamsResponseAmino;
}
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryLockableDurationsRequest {}
export interface QueryLockableDurationsRequestProtoMsg {
  typeUrl: '/osmosis.poolincentives.v1beta1.QueryLockableDurationsRequest';
  value: Uint8Array;
}
export interface QueryLockableDurationsRequestAmino {}
export interface QueryLockableDurationsRequestAminoMsg {
  type: 'osmosis/poolincentives/query-lockable-durations-request';
  value: QueryLockableDurationsRequestAmino;
}
export interface QueryLockableDurationsRequestSDKType {}
export interface QueryLockableDurationsResponse {
  lockableDurations: Duration[];
}
export interface QueryLockableDurationsResponseProtoMsg {
  typeUrl: '/osmosis.poolincentives.v1beta1.QueryLockableDurationsResponse';
  value: Uint8Array;
}
export interface QueryLockableDurationsResponseAmino {
  lockable_durations?: DurationAmino[];
}
export interface QueryLockableDurationsResponseAminoMsg {
  type: 'osmosis/poolincentives/query-lockable-durations-response';
  value: QueryLockableDurationsResponseAmino;
}
export interface QueryLockableDurationsResponseSDKType {
  lockable_durations: DurationSDKType[];
}
export interface QueryIncentivizedPoolsRequest {}
export interface QueryIncentivizedPoolsRequestProtoMsg {
  typeUrl: '/osmosis.poolincentives.v1beta1.QueryIncentivizedPoolsRequest';
  value: Uint8Array;
}
export interface QueryIncentivizedPoolsRequestAmino {}
export interface QueryIncentivizedPoolsRequestAminoMsg {
  type: 'osmosis/poolincentives/query-incentivized-pools-request';
  value: QueryIncentivizedPoolsRequestAmino;
}
export interface QueryIncentivizedPoolsRequestSDKType {}
export interface IncentivizedPool {
  poolId: bigint;
  lockableDuration: Duration;
  gaugeId: bigint;
}
export interface IncentivizedPoolProtoMsg {
  typeUrl: '/osmosis.poolincentives.v1beta1.IncentivizedPool';
  value: Uint8Array;
}
export interface IncentivizedPoolAmino {
  pool_id?: string;
  lockable_duration?: DurationAmino;
  gauge_id?: string;
}
export interface IncentivizedPoolAminoMsg {
  type: 'osmosis/poolincentives/incentivized-pool';
  value: IncentivizedPoolAmino;
}
export interface IncentivizedPoolSDKType {
  pool_id: bigint;
  lockable_duration: DurationSDKType;
  gauge_id: bigint;
}
export interface QueryIncentivizedPoolsResponse {
  incentivizedPools: IncentivizedPool[];
}
export interface QueryIncentivizedPoolsResponseProtoMsg {
  typeUrl: '/osmosis.poolincentives.v1beta1.QueryIncentivizedPoolsResponse';
  value: Uint8Array;
}
export interface QueryIncentivizedPoolsResponseAmino {
  incentivized_pools?: IncentivizedPoolAmino[];
}
export interface QueryIncentivizedPoolsResponseAminoMsg {
  type: 'osmosis/poolincentives/query-incentivized-pools-response';
  value: QueryIncentivizedPoolsResponseAmino;
}
export interface QueryIncentivizedPoolsResponseSDKType {
  incentivized_pools: IncentivizedPoolSDKType[];
}
export interface QueryExternalIncentiveGaugesRequest {}
export interface QueryExternalIncentiveGaugesRequestProtoMsg {
  typeUrl: '/osmosis.poolincentives.v1beta1.QueryExternalIncentiveGaugesRequest';
  value: Uint8Array;
}
export interface QueryExternalIncentiveGaugesRequestAmino {}
export interface QueryExternalIncentiveGaugesRequestAminoMsg {
  type: 'osmosis/poolincentives/query-external-incentive-gauges-request';
  value: QueryExternalIncentiveGaugesRequestAmino;
}
export interface QueryExternalIncentiveGaugesRequestSDKType {}
export interface QueryExternalIncentiveGaugesResponse {
  data: Gauge[];
}
export interface QueryExternalIncentiveGaugesResponseProtoMsg {
  typeUrl: '/osmosis.poolincentives.v1beta1.QueryExternalIncentiveGaugesResponse';
  value: Uint8Array;
}
export interface QueryExternalIncentiveGaugesResponseAmino {
  data?: GaugeAmino[];
}
export interface QueryExternalIncentiveGaugesResponseAminoMsg {
  type: 'osmosis/poolincentives/query-external-incentive-gauges-response';
  value: QueryExternalIncentiveGaugesResponseAmino;
}
export interface QueryExternalIncentiveGaugesResponseSDKType {
  data: GaugeSDKType[];
}
function createBaseQueryGaugeIdsRequest(): QueryGaugeIdsRequest {
  return {
    poolId: BigInt(0),
  };
}
export const QueryGaugeIdsRequest = {
  typeUrl: '/osmosis.poolincentives.v1beta1.QueryGaugeIdsRequest',
  aminoType: 'osmosis/poolincentives/query-gauge-ids-request',
  is(o: any): o is QueryGaugeIdsRequest {
    return (
      o &&
      (o.$typeUrl === QueryGaugeIdsRequest.typeUrl ||
        typeof o.poolId === 'bigint')
    );
  },
  isSDK(o: any): o is QueryGaugeIdsRequestSDKType {
    return (
      o &&
      (o.$typeUrl === QueryGaugeIdsRequest.typeUrl ||
        typeof o.pool_id === 'bigint')
    );
  },
  isAmino(o: any): o is QueryGaugeIdsRequestAmino {
    return (
      o &&
      (o.$typeUrl === QueryGaugeIdsRequest.typeUrl ||
        typeof o.pool_id === 'bigint')
    );
  },
  encode(
    message: QueryGaugeIdsRequest,
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
  ): QueryGaugeIdsRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGaugeIdsRequest();
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
  fromPartial(object: Partial<QueryGaugeIdsRequest>): QueryGaugeIdsRequest {
    const message = createBaseQueryGaugeIdsRequest();
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? BigInt(object.poolId.toString())
        : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGaugeIdsRequestAmino): QueryGaugeIdsRequest {
    const message = createBaseQueryGaugeIdsRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(message: QueryGaugeIdsRequest): QueryGaugeIdsRequestAmino {
    const obj: any = {};
    obj.pool_id =
      message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGaugeIdsRequestAminoMsg): QueryGaugeIdsRequest {
    return QueryGaugeIdsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGaugeIdsRequest): QueryGaugeIdsRequestAminoMsg {
    return {
      type: 'osmosis/poolincentives/query-gauge-ids-request',
      value: QueryGaugeIdsRequest.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryGaugeIdsRequestProtoMsg): QueryGaugeIdsRequest {
    return QueryGaugeIdsRequest.decode(message.value);
  },
  toProto(message: QueryGaugeIdsRequest): Uint8Array {
    return QueryGaugeIdsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGaugeIdsRequest): QueryGaugeIdsRequestProtoMsg {
    return {
      typeUrl: '/osmosis.poolincentives.v1beta1.QueryGaugeIdsRequest',
      value: QueryGaugeIdsRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  QueryGaugeIdsRequest.typeUrl,
  QueryGaugeIdsRequest,
);
GlobalDecoderRegistry.registerAminoProtoMapping(
  QueryGaugeIdsRequest.aminoType,
  QueryGaugeIdsRequest.typeUrl,
);
function createBaseQueryGaugeIdsResponse(): QueryGaugeIdsResponse {
  return {
    gaugeIdsWithDuration: [],
  };
}
export const QueryGaugeIdsResponse = {
  typeUrl: '/osmosis.poolincentives.v1beta1.QueryGaugeIdsResponse',
  aminoType: 'osmosis/poolincentives/query-gauge-ids-response',
  is(o: any): o is QueryGaugeIdsResponse {
    return (
      o &&
      (o.$typeUrl === QueryGaugeIdsResponse.typeUrl ||
        (Array.isArray(o.gaugeIdsWithDuration) &&
          (!o.gaugeIdsWithDuration.length ||
            QueryGaugeIdsResponse_GaugeIdWithDuration.is(
              o.gaugeIdsWithDuration[0],
            ))))
    );
  },
  isSDK(o: any): o is QueryGaugeIdsResponseSDKType {
    return (
      o &&
      (o.$typeUrl === QueryGaugeIdsResponse.typeUrl ||
        (Array.isArray(o.gauge_ids_with_duration) &&
          (!o.gauge_ids_with_duration.length ||
            QueryGaugeIdsResponse_GaugeIdWithDuration.isSDK(
              o.gauge_ids_with_duration[0],
            ))))
    );
  },
  isAmino(o: any): o is QueryGaugeIdsResponseAmino {
    return (
      o &&
      (o.$typeUrl === QueryGaugeIdsResponse.typeUrl ||
        (Array.isArray(o.gauge_ids_with_duration) &&
          (!o.gauge_ids_with_duration.length ||
            QueryGaugeIdsResponse_GaugeIdWithDuration.isAmino(
              o.gauge_ids_with_duration[0],
            ))))
    );
  },
  encode(
    message: QueryGaugeIdsResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.gaugeIdsWithDuration) {
      QueryGaugeIdsResponse_GaugeIdWithDuration.encode(
        v!,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): QueryGaugeIdsResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGaugeIdsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gaugeIdsWithDuration.push(
            QueryGaugeIdsResponse_GaugeIdWithDuration.decode(
              reader,
              reader.uint32(),
            ),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGaugeIdsResponse>): QueryGaugeIdsResponse {
    const message = createBaseQueryGaugeIdsResponse();
    message.gaugeIdsWithDuration =
      object.gaugeIdsWithDuration?.map(e =>
        QueryGaugeIdsResponse_GaugeIdWithDuration.fromPartial(e),
      ) || [];
    return message;
  },
  fromAmino(object: QueryGaugeIdsResponseAmino): QueryGaugeIdsResponse {
    const message = createBaseQueryGaugeIdsResponse();
    message.gaugeIdsWithDuration =
      object.gauge_ids_with_duration?.map(e =>
        QueryGaugeIdsResponse_GaugeIdWithDuration.fromAmino(e),
      ) || [];
    return message;
  },
  toAmino(message: QueryGaugeIdsResponse): QueryGaugeIdsResponseAmino {
    const obj: any = {};
    if (message.gaugeIdsWithDuration) {
      obj.gauge_ids_with_duration = message.gaugeIdsWithDuration.map(e =>
        e ? QueryGaugeIdsResponse_GaugeIdWithDuration.toAmino(e) : undefined,
      );
    } else {
      obj.gauge_ids_with_duration = message.gaugeIdsWithDuration;
    }
    return obj;
  },
  fromAminoMsg(object: QueryGaugeIdsResponseAminoMsg): QueryGaugeIdsResponse {
    return QueryGaugeIdsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGaugeIdsResponse): QueryGaugeIdsResponseAminoMsg {
    return {
      type: 'osmosis/poolincentives/query-gauge-ids-response',
      value: QueryGaugeIdsResponse.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryGaugeIdsResponseProtoMsg): QueryGaugeIdsResponse {
    return QueryGaugeIdsResponse.decode(message.value);
  },
  toProto(message: QueryGaugeIdsResponse): Uint8Array {
    return QueryGaugeIdsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGaugeIdsResponse): QueryGaugeIdsResponseProtoMsg {
    return {
      typeUrl: '/osmosis.poolincentives.v1beta1.QueryGaugeIdsResponse',
      value: QueryGaugeIdsResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  QueryGaugeIdsResponse.typeUrl,
  QueryGaugeIdsResponse,
);
GlobalDecoderRegistry.registerAminoProtoMapping(
  QueryGaugeIdsResponse.aminoType,
  QueryGaugeIdsResponse.typeUrl,
);
function createBaseQueryGaugeIdsResponse_GaugeIdWithDuration(): QueryGaugeIdsResponse_GaugeIdWithDuration {
  return {
    gaugeId: BigInt(0),
    duration: Duration.fromPartial({}),
    gaugeIncentivePercentage: '',
  };
}
export const QueryGaugeIdsResponse_GaugeIdWithDuration = {
  typeUrl: '/osmosis.poolincentives.v1beta1.GaugeIdWithDuration',
  aminoType: 'osmosis/poolincentives/gauge-id-with-duration',
  is(o: any): o is QueryGaugeIdsResponse_GaugeIdWithDuration {
    return (
      o &&
      (o.$typeUrl === QueryGaugeIdsResponse_GaugeIdWithDuration.typeUrl ||
        (typeof o.gaugeId === 'bigint' &&
          Duration.is(o.duration) &&
          typeof o.gaugeIncentivePercentage === 'string'))
    );
  },
  isSDK(o: any): o is QueryGaugeIdsResponse_GaugeIdWithDurationSDKType {
    return (
      o &&
      (o.$typeUrl === QueryGaugeIdsResponse_GaugeIdWithDuration.typeUrl ||
        (typeof o.gauge_id === 'bigint' &&
          Duration.isSDK(o.duration) &&
          typeof o.gauge_incentive_percentage === 'string'))
    );
  },
  isAmino(o: any): o is QueryGaugeIdsResponse_GaugeIdWithDurationAmino {
    return (
      o &&
      (o.$typeUrl === QueryGaugeIdsResponse_GaugeIdWithDuration.typeUrl ||
        (typeof o.gauge_id === 'bigint' &&
          Duration.isAmino(o.duration) &&
          typeof o.gauge_incentive_percentage === 'string'))
    );
  },
  encode(
    message: QueryGaugeIdsResponse_GaugeIdWithDuration,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.gaugeId !== BigInt(0)) {
      writer.uint32(8).uint64(message.gaugeId);
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
    }
    if (message.gaugeIncentivePercentage !== '') {
      writer.uint32(26).string(message.gaugeIncentivePercentage);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): QueryGaugeIdsResponse_GaugeIdWithDuration {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGaugeIdsResponse_GaugeIdWithDuration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gaugeId = reader.uint64();
          break;
        case 2:
          message.duration = Duration.decode(reader, reader.uint32());
          break;
        case 3:
          message.gaugeIncentivePercentage = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(
    object: Partial<QueryGaugeIdsResponse_GaugeIdWithDuration>,
  ): QueryGaugeIdsResponse_GaugeIdWithDuration {
    const message = createBaseQueryGaugeIdsResponse_GaugeIdWithDuration();
    message.gaugeId =
      object.gaugeId !== undefined && object.gaugeId !== null
        ? BigInt(object.gaugeId.toString())
        : BigInt(0);
    message.duration =
      object.duration !== undefined && object.duration !== null
        ? Duration.fromPartial(object.duration)
        : undefined;
    message.gaugeIncentivePercentage = object.gaugeIncentivePercentage ?? '';
    return message;
  },
  fromAmino(
    object: QueryGaugeIdsResponse_GaugeIdWithDurationAmino,
  ): QueryGaugeIdsResponse_GaugeIdWithDuration {
    const message = createBaseQueryGaugeIdsResponse_GaugeIdWithDuration();
    if (object.gauge_id !== undefined && object.gauge_id !== null) {
      message.gaugeId = BigInt(object.gauge_id);
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = Duration.fromAmino(object.duration);
    }
    if (
      object.gauge_incentive_percentage !== undefined &&
      object.gauge_incentive_percentage !== null
    ) {
      message.gaugeIncentivePercentage = object.gauge_incentive_percentage;
    }
    return message;
  },
  toAmino(
    message: QueryGaugeIdsResponse_GaugeIdWithDuration,
  ): QueryGaugeIdsResponse_GaugeIdWithDurationAmino {
    const obj: any = {};
    obj.gauge_id =
      message.gaugeId !== BigInt(0) ? message.gaugeId.toString() : undefined;
    obj.duration = message.duration
      ? Duration.toAmino(message.duration)
      : undefined;
    obj.gauge_incentive_percentage =
      message.gaugeIncentivePercentage === ''
        ? undefined
        : message.gaugeIncentivePercentage;
    return obj;
  },
  fromAminoMsg(
    object: QueryGaugeIdsResponse_GaugeIdWithDurationAminoMsg,
  ): QueryGaugeIdsResponse_GaugeIdWithDuration {
    return QueryGaugeIdsResponse_GaugeIdWithDuration.fromAmino(object.value);
  },
  toAminoMsg(
    message: QueryGaugeIdsResponse_GaugeIdWithDuration,
  ): QueryGaugeIdsResponse_GaugeIdWithDurationAminoMsg {
    return {
      type: 'osmosis/poolincentives/gauge-id-with-duration',
      value: QueryGaugeIdsResponse_GaugeIdWithDuration.toAmino(message),
    };
  },
  fromProtoMsg(
    message: QueryGaugeIdsResponse_GaugeIdWithDurationProtoMsg,
  ): QueryGaugeIdsResponse_GaugeIdWithDuration {
    return QueryGaugeIdsResponse_GaugeIdWithDuration.decode(message.value);
  },
  toProto(message: QueryGaugeIdsResponse_GaugeIdWithDuration): Uint8Array {
    return QueryGaugeIdsResponse_GaugeIdWithDuration.encode(message).finish();
  },
  toProtoMsg(
    message: QueryGaugeIdsResponse_GaugeIdWithDuration,
  ): QueryGaugeIdsResponse_GaugeIdWithDurationProtoMsg {
    return {
      typeUrl: '/osmosis.poolincentives.v1beta1.GaugeIdWithDuration',
      value: QueryGaugeIdsResponse_GaugeIdWithDuration.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  QueryGaugeIdsResponse_GaugeIdWithDuration.typeUrl,
  QueryGaugeIdsResponse_GaugeIdWithDuration,
);
GlobalDecoderRegistry.registerAminoProtoMapping(
  QueryGaugeIdsResponse_GaugeIdWithDuration.aminoType,
  QueryGaugeIdsResponse_GaugeIdWithDuration.typeUrl,
);
function createBaseQueryDistrInfoRequest(): QueryDistrInfoRequest {
  return {};
}
export const QueryDistrInfoRequest = {
  typeUrl: '/osmosis.poolincentives.v1beta1.QueryDistrInfoRequest',
  aminoType: 'osmosis/poolincentives/query-distr-info-request',
  is(o: any): o is QueryDistrInfoRequest {
    return o && o.$typeUrl === QueryDistrInfoRequest.typeUrl;
  },
  isSDK(o: any): o is QueryDistrInfoRequestSDKType {
    return o && o.$typeUrl === QueryDistrInfoRequest.typeUrl;
  },
  isAmino(o: any): o is QueryDistrInfoRequestAmino {
    return o && o.$typeUrl === QueryDistrInfoRequest.typeUrl;
  },
  encode(
    _: QueryDistrInfoRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): QueryDistrInfoRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDistrInfoRequest();
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
  fromPartial(_: Partial<QueryDistrInfoRequest>): QueryDistrInfoRequest {
    const message = createBaseQueryDistrInfoRequest();
    return message;
  },
  fromAmino(_: QueryDistrInfoRequestAmino): QueryDistrInfoRequest {
    const message = createBaseQueryDistrInfoRequest();
    return message;
  },
  toAmino(_: QueryDistrInfoRequest): QueryDistrInfoRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryDistrInfoRequestAminoMsg): QueryDistrInfoRequest {
    return QueryDistrInfoRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDistrInfoRequest): QueryDistrInfoRequestAminoMsg {
    return {
      type: 'osmosis/poolincentives/query-distr-info-request',
      value: QueryDistrInfoRequest.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryDistrInfoRequestProtoMsg): QueryDistrInfoRequest {
    return QueryDistrInfoRequest.decode(message.value);
  },
  toProto(message: QueryDistrInfoRequest): Uint8Array {
    return QueryDistrInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDistrInfoRequest): QueryDistrInfoRequestProtoMsg {
    return {
      typeUrl: '/osmosis.poolincentives.v1beta1.QueryDistrInfoRequest',
      value: QueryDistrInfoRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  QueryDistrInfoRequest.typeUrl,
  QueryDistrInfoRequest,
);
GlobalDecoderRegistry.registerAminoProtoMapping(
  QueryDistrInfoRequest.aminoType,
  QueryDistrInfoRequest.typeUrl,
);
function createBaseQueryDistrInfoResponse(): QueryDistrInfoResponse {
  return {
    distrInfo: DistrInfo.fromPartial({}),
  };
}
export const QueryDistrInfoResponse = {
  typeUrl: '/osmosis.poolincentives.v1beta1.QueryDistrInfoResponse',
  aminoType: 'osmosis/poolincentives/query-distr-info-response',
  is(o: any): o is QueryDistrInfoResponse {
    return (
      o &&
      (o.$typeUrl === QueryDistrInfoResponse.typeUrl ||
        DistrInfo.is(o.distrInfo))
    );
  },
  isSDK(o: any): o is QueryDistrInfoResponseSDKType {
    return (
      o &&
      (o.$typeUrl === QueryDistrInfoResponse.typeUrl ||
        DistrInfo.isSDK(o.distr_info))
    );
  },
  isAmino(o: any): o is QueryDistrInfoResponseAmino {
    return (
      o &&
      (o.$typeUrl === QueryDistrInfoResponse.typeUrl ||
        DistrInfo.isAmino(o.distr_info))
    );
  },
  encode(
    message: QueryDistrInfoResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.distrInfo !== undefined) {
      DistrInfo.encode(message.distrInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): QueryDistrInfoResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDistrInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.distrInfo = DistrInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDistrInfoResponse>): QueryDistrInfoResponse {
    const message = createBaseQueryDistrInfoResponse();
    message.distrInfo =
      object.distrInfo !== undefined && object.distrInfo !== null
        ? DistrInfo.fromPartial(object.distrInfo)
        : undefined;
    return message;
  },
  fromAmino(object: QueryDistrInfoResponseAmino): QueryDistrInfoResponse {
    const message = createBaseQueryDistrInfoResponse();
    if (object.distr_info !== undefined && object.distr_info !== null) {
      message.distrInfo = DistrInfo.fromAmino(object.distr_info);
    }
    return message;
  },
  toAmino(message: QueryDistrInfoResponse): QueryDistrInfoResponseAmino {
    const obj: any = {};
    obj.distr_info = message.distrInfo
      ? DistrInfo.toAmino(message.distrInfo)
      : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDistrInfoResponseAminoMsg): QueryDistrInfoResponse {
    return QueryDistrInfoResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDistrInfoResponse): QueryDistrInfoResponseAminoMsg {
    return {
      type: 'osmosis/poolincentives/query-distr-info-response',
      value: QueryDistrInfoResponse.toAmino(message),
    };
  },
  fromProtoMsg(
    message: QueryDistrInfoResponseProtoMsg,
  ): QueryDistrInfoResponse {
    return QueryDistrInfoResponse.decode(message.value);
  },
  toProto(message: QueryDistrInfoResponse): Uint8Array {
    return QueryDistrInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDistrInfoResponse): QueryDistrInfoResponseProtoMsg {
    return {
      typeUrl: '/osmosis.poolincentives.v1beta1.QueryDistrInfoResponse',
      value: QueryDistrInfoResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  QueryDistrInfoResponse.typeUrl,
  QueryDistrInfoResponse,
);
GlobalDecoderRegistry.registerAminoProtoMapping(
  QueryDistrInfoResponse.aminoType,
  QueryDistrInfoResponse.typeUrl,
);
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: '/osmosis.poolincentives.v1beta1.QueryParamsRequest',
  aminoType: 'osmosis/poolincentives/query-params-request',
  is(o: any): o is QueryParamsRequest {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryParamsRequestSDKType {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryParamsRequestAmino {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  encode(
    _: QueryParamsRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): QueryParamsRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryParamsRequest): QueryParamsRequestAminoMsg {
    return {
      type: 'osmosis/poolincentives/query-params-request',
      value: QueryParamsRequest.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: '/osmosis.poolincentives.v1beta1.QueryParamsRequest',
      value: QueryParamsRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(QueryParamsRequest.typeUrl, QueryParamsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(
  QueryParamsRequest.aminoType,
  QueryParamsRequest.typeUrl,
);
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({}),
  };
}
export const QueryParamsResponse = {
  typeUrl: '/osmosis.poolincentives.v1beta1.QueryParamsResponse',
  aminoType: 'osmosis/poolincentives/query-params-response',
  is(o: any): o is QueryParamsResponse {
    return (
      o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.is(o.params))
    );
  },
  isSDK(o: any): o is QueryParamsResponseSDKType {
    return (
      o &&
      (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isSDK(o.params))
    );
  },
  isAmino(o: any): o is QueryParamsResponseAmino {
    return (
      o &&
      (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isAmino(o.params))
    );
  },
  encode(
    message: QueryParamsResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): QueryParamsResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
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
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryParamsResponse): QueryParamsResponseAminoMsg {
    return {
      type: 'osmosis/poolincentives/query-params-response',
      value: QueryParamsResponse.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: '/osmosis.poolincentives.v1beta1.QueryParamsResponse',
      value: QueryParamsResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  QueryParamsResponse.typeUrl,
  QueryParamsResponse,
);
GlobalDecoderRegistry.registerAminoProtoMapping(
  QueryParamsResponse.aminoType,
  QueryParamsResponse.typeUrl,
);
function createBaseQueryLockableDurationsRequest(): QueryLockableDurationsRequest {
  return {};
}
export const QueryLockableDurationsRequest = {
  typeUrl: '/osmosis.poolincentives.v1beta1.QueryLockableDurationsRequest',
  aminoType: 'osmosis/poolincentives/query-lockable-durations-request',
  is(o: any): o is QueryLockableDurationsRequest {
    return o && o.$typeUrl === QueryLockableDurationsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryLockableDurationsRequestSDKType {
    return o && o.$typeUrl === QueryLockableDurationsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryLockableDurationsRequestAmino {
    return o && o.$typeUrl === QueryLockableDurationsRequest.typeUrl;
  },
  encode(
    _: QueryLockableDurationsRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): QueryLockableDurationsRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLockableDurationsRequest();
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
    _: Partial<QueryLockableDurationsRequest>,
  ): QueryLockableDurationsRequest {
    const message = createBaseQueryLockableDurationsRequest();
    return message;
  },
  fromAmino(
    _: QueryLockableDurationsRequestAmino,
  ): QueryLockableDurationsRequest {
    const message = createBaseQueryLockableDurationsRequest();
    return message;
  },
  toAmino(
    _: QueryLockableDurationsRequest,
  ): QueryLockableDurationsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(
    object: QueryLockableDurationsRequestAminoMsg,
  ): QueryLockableDurationsRequest {
    return QueryLockableDurationsRequest.fromAmino(object.value);
  },
  toAminoMsg(
    message: QueryLockableDurationsRequest,
  ): QueryLockableDurationsRequestAminoMsg {
    return {
      type: 'osmosis/poolincentives/query-lockable-durations-request',
      value: QueryLockableDurationsRequest.toAmino(message),
    };
  },
  fromProtoMsg(
    message: QueryLockableDurationsRequestProtoMsg,
  ): QueryLockableDurationsRequest {
    return QueryLockableDurationsRequest.decode(message.value);
  },
  toProto(message: QueryLockableDurationsRequest): Uint8Array {
    return QueryLockableDurationsRequest.encode(message).finish();
  },
  toProtoMsg(
    message: QueryLockableDurationsRequest,
  ): QueryLockableDurationsRequestProtoMsg {
    return {
      typeUrl: '/osmosis.poolincentives.v1beta1.QueryLockableDurationsRequest',
      value: QueryLockableDurationsRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  QueryLockableDurationsRequest.typeUrl,
  QueryLockableDurationsRequest,
);
GlobalDecoderRegistry.registerAminoProtoMapping(
  QueryLockableDurationsRequest.aminoType,
  QueryLockableDurationsRequest.typeUrl,
);
function createBaseQueryLockableDurationsResponse(): QueryLockableDurationsResponse {
  return {
    lockableDurations: [],
  };
}
export const QueryLockableDurationsResponse = {
  typeUrl: '/osmosis.poolincentives.v1beta1.QueryLockableDurationsResponse',
  aminoType: 'osmosis/poolincentives/query-lockable-durations-response',
  is(o: any): o is QueryLockableDurationsResponse {
    return (
      o &&
      (o.$typeUrl === QueryLockableDurationsResponse.typeUrl ||
        (Array.isArray(o.lockableDurations) &&
          (!o.lockableDurations.length || Duration.is(o.lockableDurations[0]))))
    );
  },
  isSDK(o: any): o is QueryLockableDurationsResponseSDKType {
    return (
      o &&
      (o.$typeUrl === QueryLockableDurationsResponse.typeUrl ||
        (Array.isArray(o.lockable_durations) &&
          (!o.lockable_durations.length ||
            Duration.isSDK(o.lockable_durations[0]))))
    );
  },
  isAmino(o: any): o is QueryLockableDurationsResponseAmino {
    return (
      o &&
      (o.$typeUrl === QueryLockableDurationsResponse.typeUrl ||
        (Array.isArray(o.lockable_durations) &&
          (!o.lockable_durations.length ||
            Duration.isAmino(o.lockable_durations[0]))))
    );
  },
  encode(
    message: QueryLockableDurationsResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.lockableDurations) {
      Duration.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): QueryLockableDurationsResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLockableDurationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lockableDurations.push(
            Duration.decode(reader, reader.uint32()),
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
    object: Partial<QueryLockableDurationsResponse>,
  ): QueryLockableDurationsResponse {
    const message = createBaseQueryLockableDurationsResponse();
    message.lockableDurations =
      object.lockableDurations?.map(e => Duration.fromPartial(e)) || [];
    return message;
  },
  fromAmino(
    object: QueryLockableDurationsResponseAmino,
  ): QueryLockableDurationsResponse {
    const message = createBaseQueryLockableDurationsResponse();
    message.lockableDurations =
      object.lockable_durations?.map(e => Duration.fromAmino(e)) || [];
    return message;
  },
  toAmino(
    message: QueryLockableDurationsResponse,
  ): QueryLockableDurationsResponseAmino {
    const obj: any = {};
    if (message.lockableDurations) {
      obj.lockable_durations = message.lockableDurations.map(e =>
        e ? Duration.toAmino(e) : undefined,
      );
    } else {
      obj.lockable_durations = message.lockableDurations;
    }
    return obj;
  },
  fromAminoMsg(
    object: QueryLockableDurationsResponseAminoMsg,
  ): QueryLockableDurationsResponse {
    return QueryLockableDurationsResponse.fromAmino(object.value);
  },
  toAminoMsg(
    message: QueryLockableDurationsResponse,
  ): QueryLockableDurationsResponseAminoMsg {
    return {
      type: 'osmosis/poolincentives/query-lockable-durations-response',
      value: QueryLockableDurationsResponse.toAmino(message),
    };
  },
  fromProtoMsg(
    message: QueryLockableDurationsResponseProtoMsg,
  ): QueryLockableDurationsResponse {
    return QueryLockableDurationsResponse.decode(message.value);
  },
  toProto(message: QueryLockableDurationsResponse): Uint8Array {
    return QueryLockableDurationsResponse.encode(message).finish();
  },
  toProtoMsg(
    message: QueryLockableDurationsResponse,
  ): QueryLockableDurationsResponseProtoMsg {
    return {
      typeUrl: '/osmosis.poolincentives.v1beta1.QueryLockableDurationsResponse',
      value: QueryLockableDurationsResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  QueryLockableDurationsResponse.typeUrl,
  QueryLockableDurationsResponse,
);
GlobalDecoderRegistry.registerAminoProtoMapping(
  QueryLockableDurationsResponse.aminoType,
  QueryLockableDurationsResponse.typeUrl,
);
function createBaseQueryIncentivizedPoolsRequest(): QueryIncentivizedPoolsRequest {
  return {};
}
export const QueryIncentivizedPoolsRequest = {
  typeUrl: '/osmosis.poolincentives.v1beta1.QueryIncentivizedPoolsRequest',
  aminoType: 'osmosis/poolincentives/query-incentivized-pools-request',
  is(o: any): o is QueryIncentivizedPoolsRequest {
    return o && o.$typeUrl === QueryIncentivizedPoolsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryIncentivizedPoolsRequestSDKType {
    return o && o.$typeUrl === QueryIncentivizedPoolsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryIncentivizedPoolsRequestAmino {
    return o && o.$typeUrl === QueryIncentivizedPoolsRequest.typeUrl;
  },
  encode(
    _: QueryIncentivizedPoolsRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): QueryIncentivizedPoolsRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIncentivizedPoolsRequest();
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
    _: Partial<QueryIncentivizedPoolsRequest>,
  ): QueryIncentivizedPoolsRequest {
    const message = createBaseQueryIncentivizedPoolsRequest();
    return message;
  },
  fromAmino(
    _: QueryIncentivizedPoolsRequestAmino,
  ): QueryIncentivizedPoolsRequest {
    const message = createBaseQueryIncentivizedPoolsRequest();
    return message;
  },
  toAmino(
    _: QueryIncentivizedPoolsRequest,
  ): QueryIncentivizedPoolsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(
    object: QueryIncentivizedPoolsRequestAminoMsg,
  ): QueryIncentivizedPoolsRequest {
    return QueryIncentivizedPoolsRequest.fromAmino(object.value);
  },
  toAminoMsg(
    message: QueryIncentivizedPoolsRequest,
  ): QueryIncentivizedPoolsRequestAminoMsg {
    return {
      type: 'osmosis/poolincentives/query-incentivized-pools-request',
      value: QueryIncentivizedPoolsRequest.toAmino(message),
    };
  },
  fromProtoMsg(
    message: QueryIncentivizedPoolsRequestProtoMsg,
  ): QueryIncentivizedPoolsRequest {
    return QueryIncentivizedPoolsRequest.decode(message.value);
  },
  toProto(message: QueryIncentivizedPoolsRequest): Uint8Array {
    return QueryIncentivizedPoolsRequest.encode(message).finish();
  },
  toProtoMsg(
    message: QueryIncentivizedPoolsRequest,
  ): QueryIncentivizedPoolsRequestProtoMsg {
    return {
      typeUrl: '/osmosis.poolincentives.v1beta1.QueryIncentivizedPoolsRequest',
      value: QueryIncentivizedPoolsRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  QueryIncentivizedPoolsRequest.typeUrl,
  QueryIncentivizedPoolsRequest,
);
GlobalDecoderRegistry.registerAminoProtoMapping(
  QueryIncentivizedPoolsRequest.aminoType,
  QueryIncentivizedPoolsRequest.typeUrl,
);
function createBaseIncentivizedPool(): IncentivizedPool {
  return {
    poolId: BigInt(0),
    lockableDuration: Duration.fromPartial({}),
    gaugeId: BigInt(0),
  };
}
export const IncentivizedPool = {
  typeUrl: '/osmosis.poolincentives.v1beta1.IncentivizedPool',
  aminoType: 'osmosis/poolincentives/incentivized-pool',
  is(o: any): o is IncentivizedPool {
    return (
      o &&
      (o.$typeUrl === IncentivizedPool.typeUrl ||
        (typeof o.poolId === 'bigint' &&
          Duration.is(o.lockableDuration) &&
          typeof o.gaugeId === 'bigint'))
    );
  },
  isSDK(o: any): o is IncentivizedPoolSDKType {
    return (
      o &&
      (o.$typeUrl === IncentivizedPool.typeUrl ||
        (typeof o.pool_id === 'bigint' &&
          Duration.isSDK(o.lockable_duration) &&
          typeof o.gauge_id === 'bigint'))
    );
  },
  isAmino(o: any): o is IncentivizedPoolAmino {
    return (
      o &&
      (o.$typeUrl === IncentivizedPool.typeUrl ||
        (typeof o.pool_id === 'bigint' &&
          Duration.isAmino(o.lockable_duration) &&
          typeof o.gauge_id === 'bigint'))
    );
  },
  encode(
    message: IncentivizedPool,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.lockableDuration !== undefined) {
      Duration.encode(
        message.lockableDuration,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.gaugeId !== BigInt(0)) {
      writer.uint32(24).uint64(message.gaugeId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): IncentivizedPool {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIncentivizedPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.lockableDuration = Duration.decode(reader, reader.uint32());
          break;
        case 3:
          message.gaugeId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<IncentivizedPool>): IncentivizedPool {
    const message = createBaseIncentivizedPool();
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? BigInt(object.poolId.toString())
        : BigInt(0);
    message.lockableDuration =
      object.lockableDuration !== undefined && object.lockableDuration !== null
        ? Duration.fromPartial(object.lockableDuration)
        : undefined;
    message.gaugeId =
      object.gaugeId !== undefined && object.gaugeId !== null
        ? BigInt(object.gaugeId.toString())
        : BigInt(0);
    return message;
  },
  fromAmino(object: IncentivizedPoolAmino): IncentivizedPool {
    const message = createBaseIncentivizedPool();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (
      object.lockable_duration !== undefined &&
      object.lockable_duration !== null
    ) {
      message.lockableDuration = Duration.fromAmino(object.lockable_duration);
    }
    if (object.gauge_id !== undefined && object.gauge_id !== null) {
      message.gaugeId = BigInt(object.gauge_id);
    }
    return message;
  },
  toAmino(message: IncentivizedPool): IncentivizedPoolAmino {
    const obj: any = {};
    obj.pool_id =
      message.poolId !== BigInt(0) ? message.poolId.toString() : undefined;
    obj.lockable_duration = message.lockableDuration
      ? Duration.toAmino(message.lockableDuration)
      : undefined;
    obj.gauge_id =
      message.gaugeId !== BigInt(0) ? message.gaugeId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: IncentivizedPoolAminoMsg): IncentivizedPool {
    return IncentivizedPool.fromAmino(object.value);
  },
  toAminoMsg(message: IncentivizedPool): IncentivizedPoolAminoMsg {
    return {
      type: 'osmosis/poolincentives/incentivized-pool',
      value: IncentivizedPool.toAmino(message),
    };
  },
  fromProtoMsg(message: IncentivizedPoolProtoMsg): IncentivizedPool {
    return IncentivizedPool.decode(message.value);
  },
  toProto(message: IncentivizedPool): Uint8Array {
    return IncentivizedPool.encode(message).finish();
  },
  toProtoMsg(message: IncentivizedPool): IncentivizedPoolProtoMsg {
    return {
      typeUrl: '/osmosis.poolincentives.v1beta1.IncentivizedPool',
      value: IncentivizedPool.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(IncentivizedPool.typeUrl, IncentivizedPool);
GlobalDecoderRegistry.registerAminoProtoMapping(
  IncentivizedPool.aminoType,
  IncentivizedPool.typeUrl,
);
function createBaseQueryIncentivizedPoolsResponse(): QueryIncentivizedPoolsResponse {
  return {
    incentivizedPools: [],
  };
}
export const QueryIncentivizedPoolsResponse = {
  typeUrl: '/osmosis.poolincentives.v1beta1.QueryIncentivizedPoolsResponse',
  aminoType: 'osmosis/poolincentives/query-incentivized-pools-response',
  is(o: any): o is QueryIncentivizedPoolsResponse {
    return (
      o &&
      (o.$typeUrl === QueryIncentivizedPoolsResponse.typeUrl ||
        (Array.isArray(o.incentivizedPools) &&
          (!o.incentivizedPools.length ||
            IncentivizedPool.is(o.incentivizedPools[0]))))
    );
  },
  isSDK(o: any): o is QueryIncentivizedPoolsResponseSDKType {
    return (
      o &&
      (o.$typeUrl === QueryIncentivizedPoolsResponse.typeUrl ||
        (Array.isArray(o.incentivized_pools) &&
          (!o.incentivized_pools.length ||
            IncentivizedPool.isSDK(o.incentivized_pools[0]))))
    );
  },
  isAmino(o: any): o is QueryIncentivizedPoolsResponseAmino {
    return (
      o &&
      (o.$typeUrl === QueryIncentivizedPoolsResponse.typeUrl ||
        (Array.isArray(o.incentivized_pools) &&
          (!o.incentivized_pools.length ||
            IncentivizedPool.isAmino(o.incentivized_pools[0]))))
    );
  },
  encode(
    message: QueryIncentivizedPoolsResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.incentivizedPools) {
      IncentivizedPool.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): QueryIncentivizedPoolsResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIncentivizedPoolsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.incentivizedPools.push(
            IncentivizedPool.decode(reader, reader.uint32()),
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
    object: Partial<QueryIncentivizedPoolsResponse>,
  ): QueryIncentivizedPoolsResponse {
    const message = createBaseQueryIncentivizedPoolsResponse();
    message.incentivizedPools =
      object.incentivizedPools?.map(e => IncentivizedPool.fromPartial(e)) || [];
    return message;
  },
  fromAmino(
    object: QueryIncentivizedPoolsResponseAmino,
  ): QueryIncentivizedPoolsResponse {
    const message = createBaseQueryIncentivizedPoolsResponse();
    message.incentivizedPools =
      object.incentivized_pools?.map(e => IncentivizedPool.fromAmino(e)) || [];
    return message;
  },
  toAmino(
    message: QueryIncentivizedPoolsResponse,
  ): QueryIncentivizedPoolsResponseAmino {
    const obj: any = {};
    if (message.incentivizedPools) {
      obj.incentivized_pools = message.incentivizedPools.map(e =>
        e ? IncentivizedPool.toAmino(e) : undefined,
      );
    } else {
      obj.incentivized_pools = message.incentivizedPools;
    }
    return obj;
  },
  fromAminoMsg(
    object: QueryIncentivizedPoolsResponseAminoMsg,
  ): QueryIncentivizedPoolsResponse {
    return QueryIncentivizedPoolsResponse.fromAmino(object.value);
  },
  toAminoMsg(
    message: QueryIncentivizedPoolsResponse,
  ): QueryIncentivizedPoolsResponseAminoMsg {
    return {
      type: 'osmosis/poolincentives/query-incentivized-pools-response',
      value: QueryIncentivizedPoolsResponse.toAmino(message),
    };
  },
  fromProtoMsg(
    message: QueryIncentivizedPoolsResponseProtoMsg,
  ): QueryIncentivizedPoolsResponse {
    return QueryIncentivizedPoolsResponse.decode(message.value);
  },
  toProto(message: QueryIncentivizedPoolsResponse): Uint8Array {
    return QueryIncentivizedPoolsResponse.encode(message).finish();
  },
  toProtoMsg(
    message: QueryIncentivizedPoolsResponse,
  ): QueryIncentivizedPoolsResponseProtoMsg {
    return {
      typeUrl: '/osmosis.poolincentives.v1beta1.QueryIncentivizedPoolsResponse',
      value: QueryIncentivizedPoolsResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  QueryIncentivizedPoolsResponse.typeUrl,
  QueryIncentivizedPoolsResponse,
);
GlobalDecoderRegistry.registerAminoProtoMapping(
  QueryIncentivizedPoolsResponse.aminoType,
  QueryIncentivizedPoolsResponse.typeUrl,
);
function createBaseQueryExternalIncentiveGaugesRequest(): QueryExternalIncentiveGaugesRequest {
  return {};
}
export const QueryExternalIncentiveGaugesRequest = {
  typeUrl:
    '/osmosis.poolincentives.v1beta1.QueryExternalIncentiveGaugesRequest',
  aminoType: 'osmosis/poolincentives/query-external-incentive-gauges-request',
  is(o: any): o is QueryExternalIncentiveGaugesRequest {
    return o && o.$typeUrl === QueryExternalIncentiveGaugesRequest.typeUrl;
  },
  isSDK(o: any): o is QueryExternalIncentiveGaugesRequestSDKType {
    return o && o.$typeUrl === QueryExternalIncentiveGaugesRequest.typeUrl;
  },
  isAmino(o: any): o is QueryExternalIncentiveGaugesRequestAmino {
    return o && o.$typeUrl === QueryExternalIncentiveGaugesRequest.typeUrl;
  },
  encode(
    _: QueryExternalIncentiveGaugesRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): QueryExternalIncentiveGaugesRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExternalIncentiveGaugesRequest();
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
    _: Partial<QueryExternalIncentiveGaugesRequest>,
  ): QueryExternalIncentiveGaugesRequest {
    const message = createBaseQueryExternalIncentiveGaugesRequest();
    return message;
  },
  fromAmino(
    _: QueryExternalIncentiveGaugesRequestAmino,
  ): QueryExternalIncentiveGaugesRequest {
    const message = createBaseQueryExternalIncentiveGaugesRequest();
    return message;
  },
  toAmino(
    _: QueryExternalIncentiveGaugesRequest,
  ): QueryExternalIncentiveGaugesRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(
    object: QueryExternalIncentiveGaugesRequestAminoMsg,
  ): QueryExternalIncentiveGaugesRequest {
    return QueryExternalIncentiveGaugesRequest.fromAmino(object.value);
  },
  toAminoMsg(
    message: QueryExternalIncentiveGaugesRequest,
  ): QueryExternalIncentiveGaugesRequestAminoMsg {
    return {
      type: 'osmosis/poolincentives/query-external-incentive-gauges-request',
      value: QueryExternalIncentiveGaugesRequest.toAmino(message),
    };
  },
  fromProtoMsg(
    message: QueryExternalIncentiveGaugesRequestProtoMsg,
  ): QueryExternalIncentiveGaugesRequest {
    return QueryExternalIncentiveGaugesRequest.decode(message.value);
  },
  toProto(message: QueryExternalIncentiveGaugesRequest): Uint8Array {
    return QueryExternalIncentiveGaugesRequest.encode(message).finish();
  },
  toProtoMsg(
    message: QueryExternalIncentiveGaugesRequest,
  ): QueryExternalIncentiveGaugesRequestProtoMsg {
    return {
      typeUrl:
        '/osmosis.poolincentives.v1beta1.QueryExternalIncentiveGaugesRequest',
      value: QueryExternalIncentiveGaugesRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  QueryExternalIncentiveGaugesRequest.typeUrl,
  QueryExternalIncentiveGaugesRequest,
);
GlobalDecoderRegistry.registerAminoProtoMapping(
  QueryExternalIncentiveGaugesRequest.aminoType,
  QueryExternalIncentiveGaugesRequest.typeUrl,
);
function createBaseQueryExternalIncentiveGaugesResponse(): QueryExternalIncentiveGaugesResponse {
  return {
    data: [],
  };
}
export const QueryExternalIncentiveGaugesResponse = {
  typeUrl:
    '/osmosis.poolincentives.v1beta1.QueryExternalIncentiveGaugesResponse',
  aminoType: 'osmosis/poolincentives/query-external-incentive-gauges-response',
  is(o: any): o is QueryExternalIncentiveGaugesResponse {
    return (
      o &&
      (o.$typeUrl === QueryExternalIncentiveGaugesResponse.typeUrl ||
        (Array.isArray(o.data) && (!o.data.length || Gauge.is(o.data[0]))))
    );
  },
  isSDK(o: any): o is QueryExternalIncentiveGaugesResponseSDKType {
    return (
      o &&
      (o.$typeUrl === QueryExternalIncentiveGaugesResponse.typeUrl ||
        (Array.isArray(o.data) && (!o.data.length || Gauge.isSDK(o.data[0]))))
    );
  },
  isAmino(o: any): o is QueryExternalIncentiveGaugesResponseAmino {
    return (
      o &&
      (o.$typeUrl === QueryExternalIncentiveGaugesResponse.typeUrl ||
        (Array.isArray(o.data) && (!o.data.length || Gauge.isAmino(o.data[0]))))
    );
  },
  encode(
    message: QueryExternalIncentiveGaugesResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.data) {
      Gauge.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): QueryExternalIncentiveGaugesResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExternalIncentiveGaugesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data.push(Gauge.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(
    object: Partial<QueryExternalIncentiveGaugesResponse>,
  ): QueryExternalIncentiveGaugesResponse {
    const message = createBaseQueryExternalIncentiveGaugesResponse();
    message.data = object.data?.map(e => Gauge.fromPartial(e)) || [];
    return message;
  },
  fromAmino(
    object: QueryExternalIncentiveGaugesResponseAmino,
  ): QueryExternalIncentiveGaugesResponse {
    const message = createBaseQueryExternalIncentiveGaugesResponse();
    message.data = object.data?.map(e => Gauge.fromAmino(e)) || [];
    return message;
  },
  toAmino(
    message: QueryExternalIncentiveGaugesResponse,
  ): QueryExternalIncentiveGaugesResponseAmino {
    const obj: any = {};
    if (message.data) {
      obj.data = message.data.map(e => (e ? Gauge.toAmino(e) : undefined));
    } else {
      obj.data = message.data;
    }
    return obj;
  },
  fromAminoMsg(
    object: QueryExternalIncentiveGaugesResponseAminoMsg,
  ): QueryExternalIncentiveGaugesResponse {
    return QueryExternalIncentiveGaugesResponse.fromAmino(object.value);
  },
  toAminoMsg(
    message: QueryExternalIncentiveGaugesResponse,
  ): QueryExternalIncentiveGaugesResponseAminoMsg {
    return {
      type: 'osmosis/poolincentives/query-external-incentive-gauges-response',
      value: QueryExternalIncentiveGaugesResponse.toAmino(message),
    };
  },
  fromProtoMsg(
    message: QueryExternalIncentiveGaugesResponseProtoMsg,
  ): QueryExternalIncentiveGaugesResponse {
    return QueryExternalIncentiveGaugesResponse.decode(message.value);
  },
  toProto(message: QueryExternalIncentiveGaugesResponse): Uint8Array {
    return QueryExternalIncentiveGaugesResponse.encode(message).finish();
  },
  toProtoMsg(
    message: QueryExternalIncentiveGaugesResponse,
  ): QueryExternalIncentiveGaugesResponseProtoMsg {
    return {
      typeUrl:
        '/osmosis.poolincentives.v1beta1.QueryExternalIncentiveGaugesResponse',
      value: QueryExternalIncentiveGaugesResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  QueryExternalIncentiveGaugesResponse.typeUrl,
  QueryExternalIncentiveGaugesResponse,
);
GlobalDecoderRegistry.registerAminoProtoMapping(
  QueryExternalIncentiveGaugesResponse.aminoType,
  QueryExternalIncentiveGaugesResponse.typeUrl,
);
