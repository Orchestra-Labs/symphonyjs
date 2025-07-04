//@ts-nocheck
import { LCDClient } from '@cosmology/lcd';
import {
  QueryParamsRequest,
  QueryParamsResponseSDKType,
  QueryUserStakeRequest,
  QueryUserStakeResponseSDKType,
  QueryUserTotalStakeRequest,
  QueryUserTotalStakeResponseSDKType,
  QueryPoolRequest,
  QueryPoolResponseSDKType,
  QueryPoolsRequest,
  QueryPoolsResponseSDKType,
  QueryUserUnbondingRequest,
  QueryUserUnbondingResponseSDKType,
  QueryUserTotalUnbondingRequest,
  QueryUserTotalUnbondingResponseSDKType,
} from './query';
export class LCDQueryClient {
  req: LCDClient;
  constructor({ requestClient }: { requestClient: LCDClient }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.userStake = this.userStake.bind(this);
    this.userTotalStake = this.userTotalStake.bind(this);
    this.stablePool = this.stablePool.bind(this);
    this.stablePools = this.stablePools.bind(this);
    this.userUnbonding = this.userUnbonding.bind(this);
    this.userTotalUnbonding = this.userTotalUnbonding.bind(this);
  }
  /* Params */
  async params(
    _params: QueryParamsRequest = {},
  ): Promise<QueryParamsResponseSDKType> {
    const endpoint = `symphony/stablestaking/v1beta1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* UserStake */
  async userStake(
    params: QueryUserStakeRequest,
  ): Promise<QueryUserStakeResponseSDKType> {
    const options: any = {
      params: {},
    };
    if (typeof params?.address !== 'undefined') {
      options.params.address = params.address;
    }
    if (typeof params?.denom !== 'undefined') {
      options.params.denom = params.denom;
    }
    const endpoint = `symphony/stablestaking/v1beta1/user_stake`;
    return await this.req.get<QueryUserStakeResponseSDKType>(endpoint, options);
  }
  /* UserTotalStake */
  async userTotalStake(
    params: QueryUserTotalStakeRequest,
  ): Promise<QueryUserTotalStakeResponseSDKType> {
    const options: any = {
      params: {},
    };
    if (typeof params?.address !== 'undefined') {
      options.params.address = params.address;
    }
    const endpoint = `symphony/stablestaking/v1beta1/user_total_stake`;
    return await this.req.get<QueryUserTotalStakeResponseSDKType>(
      endpoint,
      options,
    );
  }
  /* StablePool */
  async stablePool(
    params: QueryPoolRequest,
  ): Promise<QueryPoolResponseSDKType> {
    const options: any = {
      params: {},
    };
    if (typeof params?.denom !== 'undefined') {
      options.params.denom = params.denom;
    }
    const endpoint = `symphony/stablestaking/v1beta1/stable_pool`;
    return await this.req.get<QueryPoolResponseSDKType>(endpoint, options);
  }
  /* StablePools */
  async stablePools(
    _params: QueryPoolsRequest = {},
  ): Promise<QueryPoolsResponseSDKType> {
    const endpoint = `symphony/stablestaking/v1beta1/stable_pools`;
    return await this.req.get<QueryPoolsResponseSDKType>(endpoint);
  }
  /* UserUnbonding */
  async userUnbonding(
    params: QueryUserUnbondingRequest,
  ): Promise<QueryUserUnbondingResponseSDKType> {
    const options: any = {
      params: {},
    };
    if (typeof params?.address !== 'undefined') {
      options.params.address = params.address;
    }
    if (typeof params?.denom !== 'undefined') {
      options.params.denom = params.denom;
    }
    const endpoint = `symphony/stablestaking/v1beta1/user_unbonding`;
    return await this.req.get<QueryUserUnbondingResponseSDKType>(
      endpoint,
      options,
    );
  }
  /* UserTotalUnbonding */
  async userTotalUnbonding(
    params: QueryUserTotalUnbondingRequest,
  ): Promise<QueryUserTotalUnbondingResponseSDKType> {
    const options: any = {
      params: {},
    };
    if (typeof params?.address !== 'undefined') {
      options.params.address = params.address;
    }
    const endpoint = `symphony/stablestaking/v1beta1/user_total_unbonding`;
    return await this.req.get<QueryUserTotalUnbondingResponseSDKType>(
      endpoint,
      options,
    );
  }
}
