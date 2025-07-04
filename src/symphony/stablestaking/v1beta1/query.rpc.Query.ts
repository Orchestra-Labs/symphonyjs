//@ts-nocheck
import { Rpc } from '../../../helpers';
import { BinaryReader } from '../../../binary';
import { QueryClient, createProtobufRpcClient } from '@cosmjs/stargate';
import {
  QueryParamsRequest,
  QueryParamsResponse,
  QueryUserStakeRequest,
  QueryUserStakeResponse,
  QueryUserTotalStakeRequest,
  QueryUserTotalStakeResponse,
  QueryPoolRequest,
  QueryPoolResponse,
  QueryPoolsRequest,
  QueryPoolsResponse,
  QueryUserUnbondingRequest,
  QueryUserUnbondingResponse,
  QueryUserTotalUnbondingRequest,
  QueryUserTotalUnbondingResponse,
} from './query';
export interface Query {
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  userStake(request: QueryUserStakeRequest): Promise<QueryUserStakeResponse>;
  userTotalStake(
    request: QueryUserTotalStakeRequest,
  ): Promise<QueryUserTotalStakeResponse>;
  stablePool(request: QueryPoolRequest): Promise<QueryPoolResponse>;
  stablePools(request?: QueryPoolsRequest): Promise<QueryPoolsResponse>;
  userUnbonding(
    request: QueryUserUnbondingRequest,
  ): Promise<QueryUserUnbondingResponse>;
  userTotalUnbonding(
    request: QueryUserTotalUnbondingRequest,
  ): Promise<QueryUserTotalUnbondingResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.userStake = this.userStake.bind(this);
    this.userTotalStake = this.userTotalStake.bind(this);
    this.stablePool = this.stablePool.bind(this);
    this.stablePools = this.stablePools.bind(this);
    this.userUnbonding = this.userUnbonding.bind(this);
    this.userTotalUnbonding = this.userTotalUnbonding.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      'symphony.stablestaking.v1beta1.Query',
      'Params',
      data,
    );
    return promise.then(data =>
      QueryParamsResponse.decode(new BinaryReader(data)),
    );
  }
  userStake(request: QueryUserStakeRequest): Promise<QueryUserStakeResponse> {
    const data = QueryUserStakeRequest.encode(request).finish();
    const promise = this.rpc.request(
      'symphony.stablestaking.v1beta1.Query',
      'UserStake',
      data,
    );
    return promise.then(data =>
      QueryUserStakeResponse.decode(new BinaryReader(data)),
    );
  }
  userTotalStake(
    request: QueryUserTotalStakeRequest,
  ): Promise<QueryUserTotalStakeResponse> {
    const data = QueryUserTotalStakeRequest.encode(request).finish();
    const promise = this.rpc.request(
      'symphony.stablestaking.v1beta1.Query',
      'UserTotalStake',
      data,
    );
    return promise.then(data =>
      QueryUserTotalStakeResponse.decode(new BinaryReader(data)),
    );
  }
  stablePool(request: QueryPoolRequest): Promise<QueryPoolResponse> {
    const data = QueryPoolRequest.encode(request).finish();
    const promise = this.rpc.request(
      'symphony.stablestaking.v1beta1.Query',
      'StablePool',
      data,
    );
    return promise.then(data =>
      QueryPoolResponse.decode(new BinaryReader(data)),
    );
  }
  stablePools(request: QueryPoolsRequest = {}): Promise<QueryPoolsResponse> {
    const data = QueryPoolsRequest.encode(request).finish();
    const promise = this.rpc.request(
      'symphony.stablestaking.v1beta1.Query',
      'StablePools',
      data,
    );
    return promise.then(data =>
      QueryPoolsResponse.decode(new BinaryReader(data)),
    );
  }
  userUnbonding(
    request: QueryUserUnbondingRequest,
  ): Promise<QueryUserUnbondingResponse> {
    const data = QueryUserUnbondingRequest.encode(request).finish();
    const promise = this.rpc.request(
      'symphony.stablestaking.v1beta1.Query',
      'UserUnbonding',
      data,
    );
    return promise.then(data =>
      QueryUserUnbondingResponse.decode(new BinaryReader(data)),
    );
  }
  userTotalUnbonding(
    request: QueryUserTotalUnbondingRequest,
  ): Promise<QueryUserTotalUnbondingResponse> {
    const data = QueryUserTotalUnbondingRequest.encode(request).finish();
    const promise = this.rpc.request(
      'symphony.stablestaking.v1beta1.Query',
      'UserTotalUnbonding',
      data,
    );
    return promise.then(data =>
      QueryUserTotalUnbondingResponse.decode(new BinaryReader(data)),
    );
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    userStake(request: QueryUserStakeRequest): Promise<QueryUserStakeResponse> {
      return queryService.userStake(request);
    },
    userTotalStake(
      request: QueryUserTotalStakeRequest,
    ): Promise<QueryUserTotalStakeResponse> {
      return queryService.userTotalStake(request);
    },
    stablePool(request: QueryPoolRequest): Promise<QueryPoolResponse> {
      return queryService.stablePool(request);
    },
    stablePools(request?: QueryPoolsRequest): Promise<QueryPoolsResponse> {
      return queryService.stablePools(request);
    },
    userUnbonding(
      request: QueryUserUnbondingRequest,
    ): Promise<QueryUserUnbondingResponse> {
      return queryService.userUnbonding(request);
    },
    userTotalUnbonding(
      request: QueryUserTotalUnbondingRequest,
    ): Promise<QueryUserTotalUnbondingResponse> {
      return queryService.userTotalUnbonding(request);
    },
  };
};
