//@ts-nocheck
import { Rpc } from '../../../helpers';
import { BinaryReader } from '../../../binary';
import { QueryClient, createProtobufRpcClient } from '@cosmjs/stargate';
import {
  QueryFeeTokensRequest,
  QueryFeeTokensResponse,
  QueryDenomSpotPriceRequest,
  QueryDenomSpotPriceResponse,
  QueryEipBaseFeeRequest,
  QueryEipBaseFeeResponse,
} from './query';
export interface Query {
  /**
   * FeeTokens returns a list of all the whitelisted fee tokens and their
   * corresponding pools. It does not include the BaseDenom, which has its own
   * query endpoint
   */
  feeTokens(request?: QueryFeeTokensRequest): Promise<QueryFeeTokensResponse>;
  /** DenomSpotPrice returns all spot prices by each registered token denom. */
  denomSpotPrice(
    request: QueryDenomSpotPriceRequest,
  ): Promise<QueryDenomSpotPriceResponse>;
  getEipBaseFee(
    request?: QueryEipBaseFeeRequest,
  ): Promise<QueryEipBaseFeeResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.feeTokens = this.feeTokens.bind(this);
    this.denomSpotPrice = this.denomSpotPrice.bind(this);
    this.getEipBaseFee = this.getEipBaseFee.bind(this);
  }
  feeTokens(
    request: QueryFeeTokensRequest = {},
  ): Promise<QueryFeeTokensResponse> {
    const data = QueryFeeTokensRequest.encode(request).finish();
    const promise = this.rpc.request(
      'symphony.txfees.v1beta1.Query',
      'FeeTokens',
      data,
    );
    return promise.then(data =>
      QueryFeeTokensResponse.decode(new BinaryReader(data)),
    );
  }
  denomSpotPrice(
    request: QueryDenomSpotPriceRequest,
  ): Promise<QueryDenomSpotPriceResponse> {
    const data = QueryDenomSpotPriceRequest.encode(request).finish();
    const promise = this.rpc.request(
      'symphony.txfees.v1beta1.Query',
      'DenomSpotPrice',
      data,
    );
    return promise.then(data =>
      QueryDenomSpotPriceResponse.decode(new BinaryReader(data)),
    );
  }
  getEipBaseFee(
    request: QueryEipBaseFeeRequest = {},
  ): Promise<QueryEipBaseFeeResponse> {
    const data = QueryEipBaseFeeRequest.encode(request).finish();
    const promise = this.rpc.request(
      'symphony.txfees.v1beta1.Query',
      'GetEipBaseFee',
      data,
    );
    return promise.then(data =>
      QueryEipBaseFeeResponse.decode(new BinaryReader(data)),
    );
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    feeTokens(
      request?: QueryFeeTokensRequest,
    ): Promise<QueryFeeTokensResponse> {
      return queryService.feeTokens(request);
    },
    denomSpotPrice(
      request: QueryDenomSpotPriceRequest,
    ): Promise<QueryDenomSpotPriceResponse> {
      return queryService.denomSpotPrice(request);
    },
    getEipBaseFee(
      request?: QueryEipBaseFeeRequest,
    ): Promise<QueryEipBaseFeeResponse> {
      return queryService.getEipBaseFee(request);
    },
  };
};
