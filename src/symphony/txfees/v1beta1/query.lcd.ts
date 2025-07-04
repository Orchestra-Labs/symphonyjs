//@ts-nocheck
import { LCDClient } from '@cosmology/lcd';
import {
  QueryFeeTokensRequest,
  QueryFeeTokensResponseSDKType,
  QueryDenomSpotPriceRequest,
  QueryDenomSpotPriceResponseSDKType,
  QueryEipBaseFeeRequest,
  QueryEipBaseFeeResponseSDKType,
} from './query';
export class LCDQueryClient {
  req: LCDClient;
  constructor({ requestClient }: { requestClient: LCDClient }) {
    this.req = requestClient;
    this.feeTokens = this.feeTokens.bind(this);
    this.denomSpotPrice = this.denomSpotPrice.bind(this);
    this.getEipBaseFee = this.getEipBaseFee.bind(this);
  }
  /* FeeTokens returns a list of all the whitelisted fee tokens and their
   corresponding pools. It does not include the BaseDenom, which has its own
   query endpoint */
  async feeTokens(
    _params: QueryFeeTokensRequest = {},
  ): Promise<QueryFeeTokensResponseSDKType> {
    const endpoint = `symphony/txfees/v1beta1/fee_tokens`;
    return await this.req.get<QueryFeeTokensResponseSDKType>(endpoint);
  }
  /* DenomSpotPrice returns all spot prices by each registered token denom. */
  async denomSpotPrice(
    params: QueryDenomSpotPriceRequest,
  ): Promise<QueryDenomSpotPriceResponseSDKType> {
    const options: any = {
      params: {},
    };
    if (typeof params?.denom !== 'undefined') {
      options.params.denom = params.denom;
    }
    const endpoint = `symphony/txfees/v1beta1/spot_price_by_denom`;
    return await this.req.get<QueryDenomSpotPriceResponseSDKType>(
      endpoint,
      options,
    );
  }
  /* GetEipBaseFee */
  async getEipBaseFee(
    _params: QueryEipBaseFeeRequest = {},
  ): Promise<QueryEipBaseFeeResponseSDKType> {
    const endpoint = `symphony/txfees/v1beta1/cur_eip_base_fee`;
    return await this.req.get<QueryEipBaseFeeResponseSDKType>(endpoint);
  }
}
