//@ts-nocheck
import { LCDClient } from '@cosmology/lcd';
import {
  QueryParamsRequest,
  QueryParamsResponseSDKType,
  GetAuthenticatorRequest,
  GetAuthenticatorResponseSDKType,
  GetAuthenticatorsRequest,
  GetAuthenticatorsResponseSDKType,
} from './query';
export class LCDQueryClient {
  req: LCDClient;
  constructor({ requestClient }: { requestClient: LCDClient }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.getAuthenticator = this.getAuthenticator.bind(this);
    this.getAuthenticators = this.getAuthenticators.bind(this);
  }
  /* Parameters queries the parameters of the module. */
  async params(
    _params: QueryParamsRequest = {},
  ): Promise<QueryParamsResponseSDKType> {
    const endpoint = `symphony/smartaccount/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* GetAuthenticator */
  async getAuthenticator(
    params: GetAuthenticatorRequest,
  ): Promise<GetAuthenticatorResponseSDKType> {
    const endpoint = `symphony/smartaccount/authenticator/${params.account}/${params.authenticatorId}`;
    return await this.req.get<GetAuthenticatorResponseSDKType>(endpoint);
  }
  /* GetAuthenticators */
  async getAuthenticators(
    params: GetAuthenticatorsRequest,
  ): Promise<GetAuthenticatorsResponseSDKType> {
    const endpoint = `symphony/smartaccount/authenticators/${params.account}`;
    return await this.req.get<GetAuthenticatorsResponseSDKType>(endpoint);
  }
}
