//@ts-nocheck
import {
  DecCoin,
  DecCoinAmino,
  DecCoinSDKType,
} from '../../../cosmos/base/v1beta1/coin';
import {
  Denom,
  DenomAmino,
  DenomSDKType,
  AggregateExchangeRatePrevote,
  AggregateExchangeRatePrevoteAmino,
  AggregateExchangeRatePrevoteSDKType,
  AggregateExchangeRateVote,
  AggregateExchangeRateVoteAmino,
  AggregateExchangeRateVoteSDKType,
  Params,
  ParamsAmino,
  ParamsSDKType,
} from './oracle';
import { BinaryReader, BinaryWriter } from '../../../binary';
import { GlobalDecoderRegistry } from '../../../registry';
import { Decimal } from '@cosmjs/math';
/**
 * QueryExchangeRateRequest is the request type for the Query/ExchangeRate RPC
 * method.
 * @name QueryExchangeRateRequest
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryExchangeRateRequest
 */
export interface QueryExchangeRateRequest {
  /**
   * denom defines the denomination to query for.
   */
  denom: string;
}
export interface QueryExchangeRateRequestProtoMsg {
  typeUrl: '/symphony.oracle.v1beta1.QueryExchangeRateRequest';
  value: Uint8Array;
}
/**
 * QueryExchangeRateRequest is the request type for the Query/ExchangeRate RPC
 * method.
 * @name QueryExchangeRateRequestAmino
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryExchangeRateRequest
 */
export interface QueryExchangeRateRequestAmino {
  /**
   * denom defines the denomination to query for.
   */
  denom?: string;
}
export interface QueryExchangeRateRequestAminoMsg {
  type: '/symphony.oracle.v1beta1.QueryExchangeRateRequest';
  value: QueryExchangeRateRequestAmino;
}
/**
 * QueryExchangeRateRequest is the request type for the Query/ExchangeRate RPC
 * method.
 * @name QueryExchangeRateRequestSDKType
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryExchangeRateRequest
 */
export interface QueryExchangeRateRequestSDKType {
  denom: string;
}
/**
 * QueryExchangeRateResponse is response type for the
 * Query/ExchangeRate RPC method.
 * @name QueryExchangeRateResponse
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryExchangeRateResponse
 */
export interface QueryExchangeRateResponse {
  /**
   * exchange_rate defines the exchange rate of Luna denominated in various
   * Terra
   */
  exchangeRate: string;
}
export interface QueryExchangeRateResponseProtoMsg {
  typeUrl: '/symphony.oracle.v1beta1.QueryExchangeRateResponse';
  value: Uint8Array;
}
/**
 * QueryExchangeRateResponse is response type for the
 * Query/ExchangeRate RPC method.
 * @name QueryExchangeRateResponseAmino
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryExchangeRateResponse
 */
export interface QueryExchangeRateResponseAmino {
  /**
   * exchange_rate defines the exchange rate of Luna denominated in various
   * Terra
   */
  exchange_rate?: string;
}
export interface QueryExchangeRateResponseAminoMsg {
  type: '/symphony.oracle.v1beta1.QueryExchangeRateResponse';
  value: QueryExchangeRateResponseAmino;
}
/**
 * QueryExchangeRateResponse is response type for the
 * Query/ExchangeRate RPC method.
 * @name QueryExchangeRateResponseSDKType
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryExchangeRateResponse
 */
export interface QueryExchangeRateResponseSDKType {
  exchange_rate: string;
}
/**
 * QueryExchangeRatesRequest is the request type for the Query/ExchangeRates RPC
 * method.
 * @name QueryExchangeRatesRequest
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryExchangeRatesRequest
 */
export interface QueryExchangeRatesRequest {}
export interface QueryExchangeRatesRequestProtoMsg {
  typeUrl: '/symphony.oracle.v1beta1.QueryExchangeRatesRequest';
  value: Uint8Array;
}
/**
 * QueryExchangeRatesRequest is the request type for the Query/ExchangeRates RPC
 * method.
 * @name QueryExchangeRatesRequestAmino
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryExchangeRatesRequest
 */
export interface QueryExchangeRatesRequestAmino {}
export interface QueryExchangeRatesRequestAminoMsg {
  type: '/symphony.oracle.v1beta1.QueryExchangeRatesRequest';
  value: QueryExchangeRatesRequestAmino;
}
/**
 * QueryExchangeRatesRequest is the request type for the Query/ExchangeRates RPC
 * method.
 * @name QueryExchangeRatesRequestSDKType
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryExchangeRatesRequest
 */
export interface QueryExchangeRatesRequestSDKType {}
/**
 * QueryExchangeRatesResponse is response type for the
 * Query/ExchangeRates RPC method.
 * @name QueryExchangeRatesResponse
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryExchangeRatesResponse
 */
export interface QueryExchangeRatesResponse {
  /**
   * exchange_rates defines a list of the exchange rate for all whitelisted
   * denoms.
   */
  exchangeRates: DecCoin[];
}
export interface QueryExchangeRatesResponseProtoMsg {
  typeUrl: '/symphony.oracle.v1beta1.QueryExchangeRatesResponse';
  value: Uint8Array;
}
/**
 * QueryExchangeRatesResponse is response type for the
 * Query/ExchangeRates RPC method.
 * @name QueryExchangeRatesResponseAmino
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryExchangeRatesResponse
 */
export interface QueryExchangeRatesResponseAmino {
  /**
   * exchange_rates defines a list of the exchange rate for all whitelisted
   * denoms.
   */
  exchange_rates?: DecCoinAmino[];
}
export interface QueryExchangeRatesResponseAminoMsg {
  type: '/symphony.oracle.v1beta1.QueryExchangeRatesResponse';
  value: QueryExchangeRatesResponseAmino;
}
/**
 * QueryExchangeRatesResponse is response type for the
 * Query/ExchangeRates RPC method.
 * @name QueryExchangeRatesResponseSDKType
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryExchangeRatesResponse
 */
export interface QueryExchangeRatesResponseSDKType {
  exchange_rates: DecCoinSDKType[];
}
/**
 * QueryTobinTaxRequest is the request type for the Query/TobinTax RPC method.
 * @name QueryTobinTaxRequest
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryTobinTaxRequest
 */
export interface QueryTobinTaxRequest {
  /**
   * denom defines the denomination to query for.
   */
  denom: string;
}
export interface QueryTobinTaxRequestProtoMsg {
  typeUrl: '/symphony.oracle.v1beta1.QueryTobinTaxRequest';
  value: Uint8Array;
}
/**
 * QueryTobinTaxRequest is the request type for the Query/TobinTax RPC method.
 * @name QueryTobinTaxRequestAmino
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryTobinTaxRequest
 */
export interface QueryTobinTaxRequestAmino {
  /**
   * denom defines the denomination to query for.
   */
  denom?: string;
}
export interface QueryTobinTaxRequestAminoMsg {
  type: '/symphony.oracle.v1beta1.QueryTobinTaxRequest';
  value: QueryTobinTaxRequestAmino;
}
/**
 * QueryTobinTaxRequest is the request type for the Query/TobinTax RPC method.
 * @name QueryTobinTaxRequestSDKType
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryTobinTaxRequest
 */
export interface QueryTobinTaxRequestSDKType {
  denom: string;
}
/**
 * QueryTobinTaxResponse is response type for the
 * Query/TobinTax RPC method.
 * @name QueryTobinTaxResponse
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryTobinTaxResponse
 */
export interface QueryTobinTaxResponse {
  /**
   * tobin_taxe defines the tobin tax of a denom
   */
  tobinTax: string;
}
export interface QueryTobinTaxResponseProtoMsg {
  typeUrl: '/symphony.oracle.v1beta1.QueryTobinTaxResponse';
  value: Uint8Array;
}
/**
 * QueryTobinTaxResponse is response type for the
 * Query/TobinTax RPC method.
 * @name QueryTobinTaxResponseAmino
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryTobinTaxResponse
 */
export interface QueryTobinTaxResponseAmino {
  /**
   * tobin_taxe defines the tobin tax of a denom
   */
  tobin_tax?: string;
}
export interface QueryTobinTaxResponseAminoMsg {
  type: '/symphony.oracle.v1beta1.QueryTobinTaxResponse';
  value: QueryTobinTaxResponseAmino;
}
/**
 * QueryTobinTaxResponse is response type for the
 * Query/TobinTax RPC method.
 * @name QueryTobinTaxResponseSDKType
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryTobinTaxResponse
 */
export interface QueryTobinTaxResponseSDKType {
  tobin_tax: string;
}
/**
 * QueryTobinTaxesRequest is the request type for the Query/TobinTaxes RPC
 * method.
 * @name QueryTobinTaxesRequest
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryTobinTaxesRequest
 */
export interface QueryTobinTaxesRequest {}
export interface QueryTobinTaxesRequestProtoMsg {
  typeUrl: '/symphony.oracle.v1beta1.QueryTobinTaxesRequest';
  value: Uint8Array;
}
/**
 * QueryTobinTaxesRequest is the request type for the Query/TobinTaxes RPC
 * method.
 * @name QueryTobinTaxesRequestAmino
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryTobinTaxesRequest
 */
export interface QueryTobinTaxesRequestAmino {}
export interface QueryTobinTaxesRequestAminoMsg {
  type: '/symphony.oracle.v1beta1.QueryTobinTaxesRequest';
  value: QueryTobinTaxesRequestAmino;
}
/**
 * QueryTobinTaxesRequest is the request type for the Query/TobinTaxes RPC
 * method.
 * @name QueryTobinTaxesRequestSDKType
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryTobinTaxesRequest
 */
export interface QueryTobinTaxesRequestSDKType {}
/**
 * QueryTobinTaxesResponse is response type for the
 * Query/TobinTaxes RPC method.
 * @name QueryTobinTaxesResponse
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryTobinTaxesResponse
 */
export interface QueryTobinTaxesResponse {
  /**
   * tobin_taxes defines a list of the tobin tax of all whitelisted denoms
   */
  tobinTaxes: Denom[];
}
export interface QueryTobinTaxesResponseProtoMsg {
  typeUrl: '/symphony.oracle.v1beta1.QueryTobinTaxesResponse';
  value: Uint8Array;
}
/**
 * QueryTobinTaxesResponse is response type for the
 * Query/TobinTaxes RPC method.
 * @name QueryTobinTaxesResponseAmino
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryTobinTaxesResponse
 */
export interface QueryTobinTaxesResponseAmino {
  /**
   * tobin_taxes defines a list of the tobin tax of all whitelisted denoms
   */
  tobin_taxes?: DenomAmino[];
}
export interface QueryTobinTaxesResponseAminoMsg {
  type: '/symphony.oracle.v1beta1.QueryTobinTaxesResponse';
  value: QueryTobinTaxesResponseAmino;
}
/**
 * QueryTobinTaxesResponse is response type for the
 * Query/TobinTaxes RPC method.
 * @name QueryTobinTaxesResponseSDKType
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryTobinTaxesResponse
 */
export interface QueryTobinTaxesResponseSDKType {
  tobin_taxes: DenomSDKType[];
}
/**
 * QueryActivesRequest is the request type for the Query/Actives RPC method.
 * @name QueryActivesRequest
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryActivesRequest
 */
export interface QueryActivesRequest {}
export interface QueryActivesRequestProtoMsg {
  typeUrl: '/symphony.oracle.v1beta1.QueryActivesRequest';
  value: Uint8Array;
}
/**
 * QueryActivesRequest is the request type for the Query/Actives RPC method.
 * @name QueryActivesRequestAmino
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryActivesRequest
 */
export interface QueryActivesRequestAmino {}
export interface QueryActivesRequestAminoMsg {
  type: '/symphony.oracle.v1beta1.QueryActivesRequest';
  value: QueryActivesRequestAmino;
}
/**
 * QueryActivesRequest is the request type for the Query/Actives RPC method.
 * @name QueryActivesRequestSDKType
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryActivesRequest
 */
export interface QueryActivesRequestSDKType {}
/**
 * QueryActivesResponse is response type for the
 * Query/Actives RPC method.
 * @name QueryActivesResponse
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryActivesResponse
 */
export interface QueryActivesResponse {
  /**
   * actives defines a list of the denomination which oracle prices agreed
   * upon.
   */
  actives: string[];
}
export interface QueryActivesResponseProtoMsg {
  typeUrl: '/symphony.oracle.v1beta1.QueryActivesResponse';
  value: Uint8Array;
}
/**
 * QueryActivesResponse is response type for the
 * Query/Actives RPC method.
 * @name QueryActivesResponseAmino
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryActivesResponse
 */
export interface QueryActivesResponseAmino {
  /**
   * actives defines a list of the denomination which oracle prices agreed
   * upon.
   */
  actives?: string[];
}
export interface QueryActivesResponseAminoMsg {
  type: '/symphony.oracle.v1beta1.QueryActivesResponse';
  value: QueryActivesResponseAmino;
}
/**
 * QueryActivesResponse is response type for the
 * Query/Actives RPC method.
 * @name QueryActivesResponseSDKType
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryActivesResponse
 */
export interface QueryActivesResponseSDKType {
  actives: string[];
}
/**
 * QueryVoteTargetsRequest is the request type for the Query/VoteTargets RPC
 * method.
 * @name QueryVoteTargetsRequest
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryVoteTargetsRequest
 */
export interface QueryVoteTargetsRequest {}
export interface QueryVoteTargetsRequestProtoMsg {
  typeUrl: '/symphony.oracle.v1beta1.QueryVoteTargetsRequest';
  value: Uint8Array;
}
/**
 * QueryVoteTargetsRequest is the request type for the Query/VoteTargets RPC
 * method.
 * @name QueryVoteTargetsRequestAmino
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryVoteTargetsRequest
 */
export interface QueryVoteTargetsRequestAmino {}
export interface QueryVoteTargetsRequestAminoMsg {
  type: '/symphony.oracle.v1beta1.QueryVoteTargetsRequest';
  value: QueryVoteTargetsRequestAmino;
}
/**
 * QueryVoteTargetsRequest is the request type for the Query/VoteTargets RPC
 * method.
 * @name QueryVoteTargetsRequestSDKType
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryVoteTargetsRequest
 */
export interface QueryVoteTargetsRequestSDKType {}
/**
 * QueryVoteTargetsResponse is response type for the
 * Query/VoteTargets RPC method.
 * @name QueryVoteTargetsResponse
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryVoteTargetsResponse
 */
export interface QueryVoteTargetsResponse {
  /**
   * vote_targets defines a list of the denomination in which everyone
   * should vote in the current vote period.
   */
  voteTargets: string[];
}
export interface QueryVoteTargetsResponseProtoMsg {
  typeUrl: '/symphony.oracle.v1beta1.QueryVoteTargetsResponse';
  value: Uint8Array;
}
/**
 * QueryVoteTargetsResponse is response type for the
 * Query/VoteTargets RPC method.
 * @name QueryVoteTargetsResponseAmino
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryVoteTargetsResponse
 */
export interface QueryVoteTargetsResponseAmino {
  /**
   * vote_targets defines a list of the denomination in which everyone
   * should vote in the current vote period.
   */
  vote_targets?: string[];
}
export interface QueryVoteTargetsResponseAminoMsg {
  type: '/symphony.oracle.v1beta1.QueryVoteTargetsResponse';
  value: QueryVoteTargetsResponseAmino;
}
/**
 * QueryVoteTargetsResponse is response type for the
 * Query/VoteTargets RPC method.
 * @name QueryVoteTargetsResponseSDKType
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryVoteTargetsResponse
 */
export interface QueryVoteTargetsResponseSDKType {
  vote_targets: string[];
}
/**
 * QueryFeederDelegationRequest is the request type for the
 * Query/FeederDelegation RPC method.
 * @name QueryFeederDelegationRequest
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryFeederDelegationRequest
 */
export interface QueryFeederDelegationRequest {
  /**
   * validator defines the validator address to query for.
   */
  validatorAddr: string;
}
export interface QueryFeederDelegationRequestProtoMsg {
  typeUrl: '/symphony.oracle.v1beta1.QueryFeederDelegationRequest';
  value: Uint8Array;
}
/**
 * QueryFeederDelegationRequest is the request type for the
 * Query/FeederDelegation RPC method.
 * @name QueryFeederDelegationRequestAmino
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryFeederDelegationRequest
 */
export interface QueryFeederDelegationRequestAmino {
  /**
   * validator defines the validator address to query for.
   */
  validator_addr?: string;
}
export interface QueryFeederDelegationRequestAminoMsg {
  type: '/symphony.oracle.v1beta1.QueryFeederDelegationRequest';
  value: QueryFeederDelegationRequestAmino;
}
/**
 * QueryFeederDelegationRequest is the request type for the
 * Query/FeederDelegation RPC method.
 * @name QueryFeederDelegationRequestSDKType
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryFeederDelegationRequest
 */
export interface QueryFeederDelegationRequestSDKType {
  validator_addr: string;
}
/**
 * QueryFeederDelegationResponse is response type for the
 * Query/FeederDelegation RPC method.
 * @name QueryFeederDelegationResponse
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryFeederDelegationResponse
 */
export interface QueryFeederDelegationResponse {
  /**
   * feeder_addr defines the feeder delegation of a validator
   */
  feederAddr: string;
}
export interface QueryFeederDelegationResponseProtoMsg {
  typeUrl: '/symphony.oracle.v1beta1.QueryFeederDelegationResponse';
  value: Uint8Array;
}
/**
 * QueryFeederDelegationResponse is response type for the
 * Query/FeederDelegation RPC method.
 * @name QueryFeederDelegationResponseAmino
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryFeederDelegationResponse
 */
export interface QueryFeederDelegationResponseAmino {
  /**
   * feeder_addr defines the feeder delegation of a validator
   */
  feeder_addr?: string;
}
export interface QueryFeederDelegationResponseAminoMsg {
  type: '/symphony.oracle.v1beta1.QueryFeederDelegationResponse';
  value: QueryFeederDelegationResponseAmino;
}
/**
 * QueryFeederDelegationResponse is response type for the
 * Query/FeederDelegation RPC method.
 * @name QueryFeederDelegationResponseSDKType
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryFeederDelegationResponse
 */
export interface QueryFeederDelegationResponseSDKType {
  feeder_addr: string;
}
/**
 * QueryMissCounterRequest is the request type for the Query/MissCounter RPC
 * method.
 * @name QueryMissCounterRequest
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryMissCounterRequest
 */
export interface QueryMissCounterRequest {
  /**
   * validator defines the validator address to query for.
   */
  validatorAddr: string;
}
export interface QueryMissCounterRequestProtoMsg {
  typeUrl: '/symphony.oracle.v1beta1.QueryMissCounterRequest';
  value: Uint8Array;
}
/**
 * QueryMissCounterRequest is the request type for the Query/MissCounter RPC
 * method.
 * @name QueryMissCounterRequestAmino
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryMissCounterRequest
 */
export interface QueryMissCounterRequestAmino {
  /**
   * validator defines the validator address to query for.
   */
  validator_addr?: string;
}
export interface QueryMissCounterRequestAminoMsg {
  type: '/symphony.oracle.v1beta1.QueryMissCounterRequest';
  value: QueryMissCounterRequestAmino;
}
/**
 * QueryMissCounterRequest is the request type for the Query/MissCounter RPC
 * method.
 * @name QueryMissCounterRequestSDKType
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryMissCounterRequest
 */
export interface QueryMissCounterRequestSDKType {
  validator_addr: string;
}
/**
 * QueryMissCounterResponse is response type for the
 * Query/MissCounter RPC method.
 * @name QueryMissCounterResponse
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryMissCounterResponse
 */
export interface QueryMissCounterResponse {
  /**
   * miss_counter defines the oracle miss counter of a validator
   */
  missCounter: bigint;
}
export interface QueryMissCounterResponseProtoMsg {
  typeUrl: '/symphony.oracle.v1beta1.QueryMissCounterResponse';
  value: Uint8Array;
}
/**
 * QueryMissCounterResponse is response type for the
 * Query/MissCounter RPC method.
 * @name QueryMissCounterResponseAmino
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryMissCounterResponse
 */
export interface QueryMissCounterResponseAmino {
  /**
   * miss_counter defines the oracle miss counter of a validator
   */
  miss_counter?: string;
}
export interface QueryMissCounterResponseAminoMsg {
  type: '/symphony.oracle.v1beta1.QueryMissCounterResponse';
  value: QueryMissCounterResponseAmino;
}
/**
 * QueryMissCounterResponse is response type for the
 * Query/MissCounter RPC method.
 * @name QueryMissCounterResponseSDKType
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryMissCounterResponse
 */
export interface QueryMissCounterResponseSDKType {
  miss_counter: bigint;
}
/**
 * QueryAggregatePrevoteRequest is the request type for the
 * Query/AggregatePrevote RPC method.
 * @name QueryAggregatePrevoteRequest
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryAggregatePrevoteRequest
 */
export interface QueryAggregatePrevoteRequest {
  /**
   * validator defines the validator address to query for.
   */
  validatorAddr: string;
}
export interface QueryAggregatePrevoteRequestProtoMsg {
  typeUrl: '/symphony.oracle.v1beta1.QueryAggregatePrevoteRequest';
  value: Uint8Array;
}
/**
 * QueryAggregatePrevoteRequest is the request type for the
 * Query/AggregatePrevote RPC method.
 * @name QueryAggregatePrevoteRequestAmino
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryAggregatePrevoteRequest
 */
export interface QueryAggregatePrevoteRequestAmino {
  /**
   * validator defines the validator address to query for.
   */
  validator_addr?: string;
}
export interface QueryAggregatePrevoteRequestAminoMsg {
  type: '/symphony.oracle.v1beta1.QueryAggregatePrevoteRequest';
  value: QueryAggregatePrevoteRequestAmino;
}
/**
 * QueryAggregatePrevoteRequest is the request type for the
 * Query/AggregatePrevote RPC method.
 * @name QueryAggregatePrevoteRequestSDKType
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryAggregatePrevoteRequest
 */
export interface QueryAggregatePrevoteRequestSDKType {
  validator_addr: string;
}
/**
 * QueryAggregatePrevoteResponse is response type for the
 * Query/AggregatePrevote RPC method.
 * @name QueryAggregatePrevoteResponse
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryAggregatePrevoteResponse
 */
export interface QueryAggregatePrevoteResponse {
  /**
   * aggregate_prevote defines oracle aggregate prevote submitted by a validator
   * in the current vote period
   */
  aggregatePrevote: AggregateExchangeRatePrevote;
}
export interface QueryAggregatePrevoteResponseProtoMsg {
  typeUrl: '/symphony.oracle.v1beta1.QueryAggregatePrevoteResponse';
  value: Uint8Array;
}
/**
 * QueryAggregatePrevoteResponse is response type for the
 * Query/AggregatePrevote RPC method.
 * @name QueryAggregatePrevoteResponseAmino
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryAggregatePrevoteResponse
 */
export interface QueryAggregatePrevoteResponseAmino {
  /**
   * aggregate_prevote defines oracle aggregate prevote submitted by a validator
   * in the current vote period
   */
  aggregate_prevote?: AggregateExchangeRatePrevoteAmino;
}
export interface QueryAggregatePrevoteResponseAminoMsg {
  type: '/symphony.oracle.v1beta1.QueryAggregatePrevoteResponse';
  value: QueryAggregatePrevoteResponseAmino;
}
/**
 * QueryAggregatePrevoteResponse is response type for the
 * Query/AggregatePrevote RPC method.
 * @name QueryAggregatePrevoteResponseSDKType
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryAggregatePrevoteResponse
 */
export interface QueryAggregatePrevoteResponseSDKType {
  aggregate_prevote: AggregateExchangeRatePrevoteSDKType;
}
/**
 * QueryAggregatePrevotesRequest is the request type for the
 * Query/AggregatePrevotes RPC method.
 * @name QueryAggregatePrevotesRequest
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryAggregatePrevotesRequest
 */
export interface QueryAggregatePrevotesRequest {}
export interface QueryAggregatePrevotesRequestProtoMsg {
  typeUrl: '/symphony.oracle.v1beta1.QueryAggregatePrevotesRequest';
  value: Uint8Array;
}
/**
 * QueryAggregatePrevotesRequest is the request type for the
 * Query/AggregatePrevotes RPC method.
 * @name QueryAggregatePrevotesRequestAmino
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryAggregatePrevotesRequest
 */
export interface QueryAggregatePrevotesRequestAmino {}
export interface QueryAggregatePrevotesRequestAminoMsg {
  type: '/symphony.oracle.v1beta1.QueryAggregatePrevotesRequest';
  value: QueryAggregatePrevotesRequestAmino;
}
/**
 * QueryAggregatePrevotesRequest is the request type for the
 * Query/AggregatePrevotes RPC method.
 * @name QueryAggregatePrevotesRequestSDKType
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryAggregatePrevotesRequest
 */
export interface QueryAggregatePrevotesRequestSDKType {}
/**
 * QueryAggregatePrevotesResponse is response type for the
 * Query/AggregatePrevotes RPC method.
 * @name QueryAggregatePrevotesResponse
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryAggregatePrevotesResponse
 */
export interface QueryAggregatePrevotesResponse {
  /**
   * aggregate_prevotes defines all oracle aggregate prevotes submitted in the
   * current vote period
   */
  aggregatePrevotes: AggregateExchangeRatePrevote[];
}
export interface QueryAggregatePrevotesResponseProtoMsg {
  typeUrl: '/symphony.oracle.v1beta1.QueryAggregatePrevotesResponse';
  value: Uint8Array;
}
/**
 * QueryAggregatePrevotesResponse is response type for the
 * Query/AggregatePrevotes RPC method.
 * @name QueryAggregatePrevotesResponseAmino
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryAggregatePrevotesResponse
 */
export interface QueryAggregatePrevotesResponseAmino {
  /**
   * aggregate_prevotes defines all oracle aggregate prevotes submitted in the
   * current vote period
   */
  aggregate_prevotes?: AggregateExchangeRatePrevoteAmino[];
}
export interface QueryAggregatePrevotesResponseAminoMsg {
  type: '/symphony.oracle.v1beta1.QueryAggregatePrevotesResponse';
  value: QueryAggregatePrevotesResponseAmino;
}
/**
 * QueryAggregatePrevotesResponse is response type for the
 * Query/AggregatePrevotes RPC method.
 * @name QueryAggregatePrevotesResponseSDKType
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryAggregatePrevotesResponse
 */
export interface QueryAggregatePrevotesResponseSDKType {
  aggregate_prevotes: AggregateExchangeRatePrevoteSDKType[];
}
/**
 * QueryAggregateVoteRequest is the request type for the Query/AggregateVote RPC
 * method.
 * @name QueryAggregateVoteRequest
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryAggregateVoteRequest
 */
export interface QueryAggregateVoteRequest {
  /**
   * validator defines the validator address to query for.
   */
  validatorAddr: string;
}
export interface QueryAggregateVoteRequestProtoMsg {
  typeUrl: '/symphony.oracle.v1beta1.QueryAggregateVoteRequest';
  value: Uint8Array;
}
/**
 * QueryAggregateVoteRequest is the request type for the Query/AggregateVote RPC
 * method.
 * @name QueryAggregateVoteRequestAmino
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryAggregateVoteRequest
 */
export interface QueryAggregateVoteRequestAmino {
  /**
   * validator defines the validator address to query for.
   */
  validator_addr?: string;
}
export interface QueryAggregateVoteRequestAminoMsg {
  type: '/symphony.oracle.v1beta1.QueryAggregateVoteRequest';
  value: QueryAggregateVoteRequestAmino;
}
/**
 * QueryAggregateVoteRequest is the request type for the Query/AggregateVote RPC
 * method.
 * @name QueryAggregateVoteRequestSDKType
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryAggregateVoteRequest
 */
export interface QueryAggregateVoteRequestSDKType {
  validator_addr: string;
}
/**
 * QueryAggregateVoteResponse is response type for the
 * Query/AggregateVote RPC method.
 * @name QueryAggregateVoteResponse
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryAggregateVoteResponse
 */
export interface QueryAggregateVoteResponse {
  /**
   * aggregate_vote defines oracle aggregate vote submitted by a validator in
   * the current vote period
   */
  aggregateVote: AggregateExchangeRateVote;
}
export interface QueryAggregateVoteResponseProtoMsg {
  typeUrl: '/symphony.oracle.v1beta1.QueryAggregateVoteResponse';
  value: Uint8Array;
}
/**
 * QueryAggregateVoteResponse is response type for the
 * Query/AggregateVote RPC method.
 * @name QueryAggregateVoteResponseAmino
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryAggregateVoteResponse
 */
export interface QueryAggregateVoteResponseAmino {
  /**
   * aggregate_vote defines oracle aggregate vote submitted by a validator in
   * the current vote period
   */
  aggregate_vote?: AggregateExchangeRateVoteAmino;
}
export interface QueryAggregateVoteResponseAminoMsg {
  type: '/symphony.oracle.v1beta1.QueryAggregateVoteResponse';
  value: QueryAggregateVoteResponseAmino;
}
/**
 * QueryAggregateVoteResponse is response type for the
 * Query/AggregateVote RPC method.
 * @name QueryAggregateVoteResponseSDKType
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryAggregateVoteResponse
 */
export interface QueryAggregateVoteResponseSDKType {
  aggregate_vote: AggregateExchangeRateVoteSDKType;
}
/**
 * QueryAggregateVotesRequest is the request type for the Query/AggregateVotes
 * RPC method.
 * @name QueryAggregateVotesRequest
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryAggregateVotesRequest
 */
export interface QueryAggregateVotesRequest {}
export interface QueryAggregateVotesRequestProtoMsg {
  typeUrl: '/symphony.oracle.v1beta1.QueryAggregateVotesRequest';
  value: Uint8Array;
}
/**
 * QueryAggregateVotesRequest is the request type for the Query/AggregateVotes
 * RPC method.
 * @name QueryAggregateVotesRequestAmino
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryAggregateVotesRequest
 */
export interface QueryAggregateVotesRequestAmino {}
export interface QueryAggregateVotesRequestAminoMsg {
  type: '/symphony.oracle.v1beta1.QueryAggregateVotesRequest';
  value: QueryAggregateVotesRequestAmino;
}
/**
 * QueryAggregateVotesRequest is the request type for the Query/AggregateVotes
 * RPC method.
 * @name QueryAggregateVotesRequestSDKType
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryAggregateVotesRequest
 */
export interface QueryAggregateVotesRequestSDKType {}
/**
 * QueryAggregateVotesResponse is response type for the
 * Query/AggregateVotes RPC method.
 * @name QueryAggregateVotesResponse
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryAggregateVotesResponse
 */
export interface QueryAggregateVotesResponse {
  /**
   * aggregate_votes defines all oracle aggregate votes submitted in the current
   * vote period
   */
  aggregateVotes: AggregateExchangeRateVote[];
}
export interface QueryAggregateVotesResponseProtoMsg {
  typeUrl: '/symphony.oracle.v1beta1.QueryAggregateVotesResponse';
  value: Uint8Array;
}
/**
 * QueryAggregateVotesResponse is response type for the
 * Query/AggregateVotes RPC method.
 * @name QueryAggregateVotesResponseAmino
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryAggregateVotesResponse
 */
export interface QueryAggregateVotesResponseAmino {
  /**
   * aggregate_votes defines all oracle aggregate votes submitted in the current
   * vote period
   */
  aggregate_votes?: AggregateExchangeRateVoteAmino[];
}
export interface QueryAggregateVotesResponseAminoMsg {
  type: '/symphony.oracle.v1beta1.QueryAggregateVotesResponse';
  value: QueryAggregateVotesResponseAmino;
}
/**
 * QueryAggregateVotesResponse is response type for the
 * Query/AggregateVotes RPC method.
 * @name QueryAggregateVotesResponseSDKType
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryAggregateVotesResponse
 */
export interface QueryAggregateVotesResponseSDKType {
  aggregate_votes: AggregateExchangeRateVoteSDKType[];
}
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryParamsRequest
 */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: '/symphony.oracle.v1beta1.QueryParamsRequest';
  value: Uint8Array;
}
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 * @name QueryParamsRequestAmino
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryParamsRequest
 */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: '/symphony.oracle.v1beta1.QueryParamsRequest';
  value: QueryParamsRequestAmino;
}
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 * @name QueryParamsRequestSDKType
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryParamsRequest
 */
export interface QueryParamsRequestSDKType {}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 * @name QueryParamsResponse
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryParamsResponse
 */
export interface QueryParamsResponse {
  /**
   * params defines the parameters of the module.
   */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: '/symphony.oracle.v1beta1.QueryParamsResponse';
  value: Uint8Array;
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 * @name QueryParamsResponseAmino
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryParamsResponse
 */
export interface QueryParamsResponseAmino {
  /**
   * params defines the parameters of the module.
   */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: '/symphony.oracle.v1beta1.QueryParamsResponse';
  value: QueryParamsResponseAmino;
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 * @name QueryParamsResponseSDKType
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryParamsResponse
 */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
function createBaseQueryExchangeRateRequest(): QueryExchangeRateRequest {
  return {
    denom: '',
  };
}
/**
 * QueryExchangeRateRequest is the request type for the Query/ExchangeRate RPC
 * method.
 * @name QueryExchangeRateRequest
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryExchangeRateRequest
 */
export const QueryExchangeRateRequest = {
  typeUrl: '/symphony.oracle.v1beta1.QueryExchangeRateRequest',
  is(o: any): o is QueryExchangeRateRequest {
    return (
      o &&
      (o.$typeUrl === QueryExchangeRateRequest.typeUrl ||
        typeof o.denom === 'string')
    );
  },
  isSDK(o: any): o is QueryExchangeRateRequestSDKType {
    return (
      o &&
      (o.$typeUrl === QueryExchangeRateRequest.typeUrl ||
        typeof o.denom === 'string')
    );
  },
  isAmino(o: any): o is QueryExchangeRateRequestAmino {
    return (
      o &&
      (o.$typeUrl === QueryExchangeRateRequest.typeUrl ||
        typeof o.denom === 'string')
    );
  },
  encode(
    message: QueryExchangeRateRequest,
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
  ): QueryExchangeRateRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExchangeRateRequest();
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
    object: Partial<QueryExchangeRateRequest>,
  ): QueryExchangeRateRequest {
    const message = createBaseQueryExchangeRateRequest();
    message.denom = object.denom ?? '';
    return message;
  },
  fromAmino(object: QueryExchangeRateRequestAmino): QueryExchangeRateRequest {
    const message = createBaseQueryExchangeRateRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryExchangeRateRequest): QueryExchangeRateRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === '' ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(
    object: QueryExchangeRateRequestAminoMsg,
  ): QueryExchangeRateRequest {
    return QueryExchangeRateRequest.fromAmino(object.value);
  },
  fromProtoMsg(
    message: QueryExchangeRateRequestProtoMsg,
  ): QueryExchangeRateRequest {
    return QueryExchangeRateRequest.decode(message.value);
  },
  toProto(message: QueryExchangeRateRequest): Uint8Array {
    return QueryExchangeRateRequest.encode(message).finish();
  },
  toProtoMsg(
    message: QueryExchangeRateRequest,
  ): QueryExchangeRateRequestProtoMsg {
    return {
      typeUrl: '/symphony.oracle.v1beta1.QueryExchangeRateRequest',
      value: QueryExchangeRateRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  QueryExchangeRateRequest.typeUrl,
  QueryExchangeRateRequest,
);
function createBaseQueryExchangeRateResponse(): QueryExchangeRateResponse {
  return {
    exchangeRate: '',
  };
}
/**
 * QueryExchangeRateResponse is response type for the
 * Query/ExchangeRate RPC method.
 * @name QueryExchangeRateResponse
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryExchangeRateResponse
 */
export const QueryExchangeRateResponse = {
  typeUrl: '/symphony.oracle.v1beta1.QueryExchangeRateResponse',
  is(o: any): o is QueryExchangeRateResponse {
    return (
      o &&
      (o.$typeUrl === QueryExchangeRateResponse.typeUrl ||
        typeof o.exchangeRate === 'string')
    );
  },
  isSDK(o: any): o is QueryExchangeRateResponseSDKType {
    return (
      o &&
      (o.$typeUrl === QueryExchangeRateResponse.typeUrl ||
        typeof o.exchange_rate === 'string')
    );
  },
  isAmino(o: any): o is QueryExchangeRateResponseAmino {
    return (
      o &&
      (o.$typeUrl === QueryExchangeRateResponse.typeUrl ||
        typeof o.exchange_rate === 'string')
    );
  },
  encode(
    message: QueryExchangeRateResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.exchangeRate !== '') {
      writer
        .uint32(10)
        .string(Decimal.fromUserInput(message.exchangeRate, 18).atomics);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): QueryExchangeRateResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExchangeRateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exchangeRate = Decimal.fromAtomics(
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
    object: Partial<QueryExchangeRateResponse>,
  ): QueryExchangeRateResponse {
    const message = createBaseQueryExchangeRateResponse();
    message.exchangeRate = object.exchangeRate ?? '';
    return message;
  },
  fromAmino(object: QueryExchangeRateResponseAmino): QueryExchangeRateResponse {
    const message = createBaseQueryExchangeRateResponse();
    if (object.exchange_rate !== undefined && object.exchange_rate !== null) {
      message.exchangeRate = object.exchange_rate;
    }
    return message;
  },
  toAmino(message: QueryExchangeRateResponse): QueryExchangeRateResponseAmino {
    const obj: any = {};
    obj.exchange_rate =
      message.exchangeRate === '' ? undefined : message.exchangeRate;
    return obj;
  },
  fromAminoMsg(
    object: QueryExchangeRateResponseAminoMsg,
  ): QueryExchangeRateResponse {
    return QueryExchangeRateResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: QueryExchangeRateResponseProtoMsg,
  ): QueryExchangeRateResponse {
    return QueryExchangeRateResponse.decode(message.value);
  },
  toProto(message: QueryExchangeRateResponse): Uint8Array {
    return QueryExchangeRateResponse.encode(message).finish();
  },
  toProtoMsg(
    message: QueryExchangeRateResponse,
  ): QueryExchangeRateResponseProtoMsg {
    return {
      typeUrl: '/symphony.oracle.v1beta1.QueryExchangeRateResponse',
      value: QueryExchangeRateResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  QueryExchangeRateResponse.typeUrl,
  QueryExchangeRateResponse,
);
function createBaseQueryExchangeRatesRequest(): QueryExchangeRatesRequest {
  return {};
}
/**
 * QueryExchangeRatesRequest is the request type for the Query/ExchangeRates RPC
 * method.
 * @name QueryExchangeRatesRequest
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryExchangeRatesRequest
 */
export const QueryExchangeRatesRequest = {
  typeUrl: '/symphony.oracle.v1beta1.QueryExchangeRatesRequest',
  is(o: any): o is QueryExchangeRatesRequest {
    return o && o.$typeUrl === QueryExchangeRatesRequest.typeUrl;
  },
  isSDK(o: any): o is QueryExchangeRatesRequestSDKType {
    return o && o.$typeUrl === QueryExchangeRatesRequest.typeUrl;
  },
  isAmino(o: any): o is QueryExchangeRatesRequestAmino {
    return o && o.$typeUrl === QueryExchangeRatesRequest.typeUrl;
  },
  encode(
    _: QueryExchangeRatesRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): QueryExchangeRatesRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExchangeRatesRequest();
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
    _: Partial<QueryExchangeRatesRequest>,
  ): QueryExchangeRatesRequest {
    const message = createBaseQueryExchangeRatesRequest();
    return message;
  },
  fromAmino(_: QueryExchangeRatesRequestAmino): QueryExchangeRatesRequest {
    const message = createBaseQueryExchangeRatesRequest();
    return message;
  },
  toAmino(_: QueryExchangeRatesRequest): QueryExchangeRatesRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(
    object: QueryExchangeRatesRequestAminoMsg,
  ): QueryExchangeRatesRequest {
    return QueryExchangeRatesRequest.fromAmino(object.value);
  },
  fromProtoMsg(
    message: QueryExchangeRatesRequestProtoMsg,
  ): QueryExchangeRatesRequest {
    return QueryExchangeRatesRequest.decode(message.value);
  },
  toProto(message: QueryExchangeRatesRequest): Uint8Array {
    return QueryExchangeRatesRequest.encode(message).finish();
  },
  toProtoMsg(
    message: QueryExchangeRatesRequest,
  ): QueryExchangeRatesRequestProtoMsg {
    return {
      typeUrl: '/symphony.oracle.v1beta1.QueryExchangeRatesRequest',
      value: QueryExchangeRatesRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  QueryExchangeRatesRequest.typeUrl,
  QueryExchangeRatesRequest,
);
function createBaseQueryExchangeRatesResponse(): QueryExchangeRatesResponse {
  return {
    exchangeRates: [],
  };
}
/**
 * QueryExchangeRatesResponse is response type for the
 * Query/ExchangeRates RPC method.
 * @name QueryExchangeRatesResponse
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryExchangeRatesResponse
 */
export const QueryExchangeRatesResponse = {
  typeUrl: '/symphony.oracle.v1beta1.QueryExchangeRatesResponse',
  is(o: any): o is QueryExchangeRatesResponse {
    return (
      o &&
      (o.$typeUrl === QueryExchangeRatesResponse.typeUrl ||
        (Array.isArray(o.exchangeRates) &&
          (!o.exchangeRates.length || DecCoin.is(o.exchangeRates[0]))))
    );
  },
  isSDK(o: any): o is QueryExchangeRatesResponseSDKType {
    return (
      o &&
      (o.$typeUrl === QueryExchangeRatesResponse.typeUrl ||
        (Array.isArray(o.exchange_rates) &&
          (!o.exchange_rates.length || DecCoin.isSDK(o.exchange_rates[0]))))
    );
  },
  isAmino(o: any): o is QueryExchangeRatesResponseAmino {
    return (
      o &&
      (o.$typeUrl === QueryExchangeRatesResponse.typeUrl ||
        (Array.isArray(o.exchange_rates) &&
          (!o.exchange_rates.length || DecCoin.isAmino(o.exchange_rates[0]))))
    );
  },
  encode(
    message: QueryExchangeRatesResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.exchangeRates) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): QueryExchangeRatesResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExchangeRatesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exchangeRates.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(
    object: Partial<QueryExchangeRatesResponse>,
  ): QueryExchangeRatesResponse {
    const message = createBaseQueryExchangeRatesResponse();
    message.exchangeRates =
      object.exchangeRates?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(
    object: QueryExchangeRatesResponseAmino,
  ): QueryExchangeRatesResponse {
    const message = createBaseQueryExchangeRatesResponse();
    message.exchangeRates =
      object.exchange_rates?.map(e => DecCoin.fromAmino(e)) || [];
    return message;
  },
  toAmino(
    message: QueryExchangeRatesResponse,
  ): QueryExchangeRatesResponseAmino {
    const obj: any = {};
    if (message.exchangeRates) {
      obj.exchange_rates = message.exchangeRates.map(e =>
        e ? DecCoin.toAmino(e) : undefined,
      );
    } else {
      obj.exchange_rates = message.exchangeRates;
    }
    return obj;
  },
  fromAminoMsg(
    object: QueryExchangeRatesResponseAminoMsg,
  ): QueryExchangeRatesResponse {
    return QueryExchangeRatesResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: QueryExchangeRatesResponseProtoMsg,
  ): QueryExchangeRatesResponse {
    return QueryExchangeRatesResponse.decode(message.value);
  },
  toProto(message: QueryExchangeRatesResponse): Uint8Array {
    return QueryExchangeRatesResponse.encode(message).finish();
  },
  toProtoMsg(
    message: QueryExchangeRatesResponse,
  ): QueryExchangeRatesResponseProtoMsg {
    return {
      typeUrl: '/symphony.oracle.v1beta1.QueryExchangeRatesResponse',
      value: QueryExchangeRatesResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  QueryExchangeRatesResponse.typeUrl,
  QueryExchangeRatesResponse,
);
function createBaseQueryTobinTaxRequest(): QueryTobinTaxRequest {
  return {
    denom: '',
  };
}
/**
 * QueryTobinTaxRequest is the request type for the Query/TobinTax RPC method.
 * @name QueryTobinTaxRequest
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryTobinTaxRequest
 */
export const QueryTobinTaxRequest = {
  typeUrl: '/symphony.oracle.v1beta1.QueryTobinTaxRequest',
  is(o: any): o is QueryTobinTaxRequest {
    return (
      o &&
      (o.$typeUrl === QueryTobinTaxRequest.typeUrl ||
        typeof o.denom === 'string')
    );
  },
  isSDK(o: any): o is QueryTobinTaxRequestSDKType {
    return (
      o &&
      (o.$typeUrl === QueryTobinTaxRequest.typeUrl ||
        typeof o.denom === 'string')
    );
  },
  isAmino(o: any): o is QueryTobinTaxRequestAmino {
    return (
      o &&
      (o.$typeUrl === QueryTobinTaxRequest.typeUrl ||
        typeof o.denom === 'string')
    );
  },
  encode(
    message: QueryTobinTaxRequest,
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
  ): QueryTobinTaxRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTobinTaxRequest();
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
  fromPartial(object: Partial<QueryTobinTaxRequest>): QueryTobinTaxRequest {
    const message = createBaseQueryTobinTaxRequest();
    message.denom = object.denom ?? '';
    return message;
  },
  fromAmino(object: QueryTobinTaxRequestAmino): QueryTobinTaxRequest {
    const message = createBaseQueryTobinTaxRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryTobinTaxRequest): QueryTobinTaxRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === '' ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryTobinTaxRequestAminoMsg): QueryTobinTaxRequest {
    return QueryTobinTaxRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTobinTaxRequestProtoMsg): QueryTobinTaxRequest {
    return QueryTobinTaxRequest.decode(message.value);
  },
  toProto(message: QueryTobinTaxRequest): Uint8Array {
    return QueryTobinTaxRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTobinTaxRequest): QueryTobinTaxRequestProtoMsg {
    return {
      typeUrl: '/symphony.oracle.v1beta1.QueryTobinTaxRequest',
      value: QueryTobinTaxRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  QueryTobinTaxRequest.typeUrl,
  QueryTobinTaxRequest,
);
function createBaseQueryTobinTaxResponse(): QueryTobinTaxResponse {
  return {
    tobinTax: '',
  };
}
/**
 * QueryTobinTaxResponse is response type for the
 * Query/TobinTax RPC method.
 * @name QueryTobinTaxResponse
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryTobinTaxResponse
 */
export const QueryTobinTaxResponse = {
  typeUrl: '/symphony.oracle.v1beta1.QueryTobinTaxResponse',
  is(o: any): o is QueryTobinTaxResponse {
    return (
      o &&
      (o.$typeUrl === QueryTobinTaxResponse.typeUrl ||
        typeof o.tobinTax === 'string')
    );
  },
  isSDK(o: any): o is QueryTobinTaxResponseSDKType {
    return (
      o &&
      (o.$typeUrl === QueryTobinTaxResponse.typeUrl ||
        typeof o.tobin_tax === 'string')
    );
  },
  isAmino(o: any): o is QueryTobinTaxResponseAmino {
    return (
      o &&
      (o.$typeUrl === QueryTobinTaxResponse.typeUrl ||
        typeof o.tobin_tax === 'string')
    );
  },
  encode(
    message: QueryTobinTaxResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.tobinTax !== '') {
      writer
        .uint32(10)
        .string(Decimal.fromUserInput(message.tobinTax, 18).atomics);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): QueryTobinTaxResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTobinTaxResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tobinTax = Decimal.fromAtomics(
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
  fromPartial(object: Partial<QueryTobinTaxResponse>): QueryTobinTaxResponse {
    const message = createBaseQueryTobinTaxResponse();
    message.tobinTax = object.tobinTax ?? '';
    return message;
  },
  fromAmino(object: QueryTobinTaxResponseAmino): QueryTobinTaxResponse {
    const message = createBaseQueryTobinTaxResponse();
    if (object.tobin_tax !== undefined && object.tobin_tax !== null) {
      message.tobinTax = object.tobin_tax;
    }
    return message;
  },
  toAmino(message: QueryTobinTaxResponse): QueryTobinTaxResponseAmino {
    const obj: any = {};
    obj.tobin_tax = message.tobinTax === '' ? undefined : message.tobinTax;
    return obj;
  },
  fromAminoMsg(object: QueryTobinTaxResponseAminoMsg): QueryTobinTaxResponse {
    return QueryTobinTaxResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTobinTaxResponseProtoMsg): QueryTobinTaxResponse {
    return QueryTobinTaxResponse.decode(message.value);
  },
  toProto(message: QueryTobinTaxResponse): Uint8Array {
    return QueryTobinTaxResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTobinTaxResponse): QueryTobinTaxResponseProtoMsg {
    return {
      typeUrl: '/symphony.oracle.v1beta1.QueryTobinTaxResponse',
      value: QueryTobinTaxResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  QueryTobinTaxResponse.typeUrl,
  QueryTobinTaxResponse,
);
function createBaseQueryTobinTaxesRequest(): QueryTobinTaxesRequest {
  return {};
}
/**
 * QueryTobinTaxesRequest is the request type for the Query/TobinTaxes RPC
 * method.
 * @name QueryTobinTaxesRequest
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryTobinTaxesRequest
 */
export const QueryTobinTaxesRequest = {
  typeUrl: '/symphony.oracle.v1beta1.QueryTobinTaxesRequest',
  is(o: any): o is QueryTobinTaxesRequest {
    return o && o.$typeUrl === QueryTobinTaxesRequest.typeUrl;
  },
  isSDK(o: any): o is QueryTobinTaxesRequestSDKType {
    return o && o.$typeUrl === QueryTobinTaxesRequest.typeUrl;
  },
  isAmino(o: any): o is QueryTobinTaxesRequestAmino {
    return o && o.$typeUrl === QueryTobinTaxesRequest.typeUrl;
  },
  encode(
    _: QueryTobinTaxesRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): QueryTobinTaxesRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTobinTaxesRequest();
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
  fromPartial(_: Partial<QueryTobinTaxesRequest>): QueryTobinTaxesRequest {
    const message = createBaseQueryTobinTaxesRequest();
    return message;
  },
  fromAmino(_: QueryTobinTaxesRequestAmino): QueryTobinTaxesRequest {
    const message = createBaseQueryTobinTaxesRequest();
    return message;
  },
  toAmino(_: QueryTobinTaxesRequest): QueryTobinTaxesRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryTobinTaxesRequestAminoMsg): QueryTobinTaxesRequest {
    return QueryTobinTaxesRequest.fromAmino(object.value);
  },
  fromProtoMsg(
    message: QueryTobinTaxesRequestProtoMsg,
  ): QueryTobinTaxesRequest {
    return QueryTobinTaxesRequest.decode(message.value);
  },
  toProto(message: QueryTobinTaxesRequest): Uint8Array {
    return QueryTobinTaxesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTobinTaxesRequest): QueryTobinTaxesRequestProtoMsg {
    return {
      typeUrl: '/symphony.oracle.v1beta1.QueryTobinTaxesRequest',
      value: QueryTobinTaxesRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  QueryTobinTaxesRequest.typeUrl,
  QueryTobinTaxesRequest,
);
function createBaseQueryTobinTaxesResponse(): QueryTobinTaxesResponse {
  return {
    tobinTaxes: [],
  };
}
/**
 * QueryTobinTaxesResponse is response type for the
 * Query/TobinTaxes RPC method.
 * @name QueryTobinTaxesResponse
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryTobinTaxesResponse
 */
export const QueryTobinTaxesResponse = {
  typeUrl: '/symphony.oracle.v1beta1.QueryTobinTaxesResponse',
  is(o: any): o is QueryTobinTaxesResponse {
    return (
      o &&
      (o.$typeUrl === QueryTobinTaxesResponse.typeUrl ||
        (Array.isArray(o.tobinTaxes) &&
          (!o.tobinTaxes.length || Denom.is(o.tobinTaxes[0]))))
    );
  },
  isSDK(o: any): o is QueryTobinTaxesResponseSDKType {
    return (
      o &&
      (o.$typeUrl === QueryTobinTaxesResponse.typeUrl ||
        (Array.isArray(o.tobin_taxes) &&
          (!o.tobin_taxes.length || Denom.isSDK(o.tobin_taxes[0]))))
    );
  },
  isAmino(o: any): o is QueryTobinTaxesResponseAmino {
    return (
      o &&
      (o.$typeUrl === QueryTobinTaxesResponse.typeUrl ||
        (Array.isArray(o.tobin_taxes) &&
          (!o.tobin_taxes.length || Denom.isAmino(o.tobin_taxes[0]))))
    );
  },
  encode(
    message: QueryTobinTaxesResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.tobinTaxes) {
      Denom.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): QueryTobinTaxesResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTobinTaxesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tobinTaxes.push(Denom.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(
    object: Partial<QueryTobinTaxesResponse>,
  ): QueryTobinTaxesResponse {
    const message = createBaseQueryTobinTaxesResponse();
    message.tobinTaxes =
      object.tobinTaxes?.map(e => Denom.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryTobinTaxesResponseAmino): QueryTobinTaxesResponse {
    const message = createBaseQueryTobinTaxesResponse();
    message.tobinTaxes = object.tobin_taxes?.map(e => Denom.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryTobinTaxesResponse): QueryTobinTaxesResponseAmino {
    const obj: any = {};
    if (message.tobinTaxes) {
      obj.tobin_taxes = message.tobinTaxes.map(e =>
        e ? Denom.toAmino(e) : undefined,
      );
    } else {
      obj.tobin_taxes = message.tobinTaxes;
    }
    return obj;
  },
  fromAminoMsg(
    object: QueryTobinTaxesResponseAminoMsg,
  ): QueryTobinTaxesResponse {
    return QueryTobinTaxesResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: QueryTobinTaxesResponseProtoMsg,
  ): QueryTobinTaxesResponse {
    return QueryTobinTaxesResponse.decode(message.value);
  },
  toProto(message: QueryTobinTaxesResponse): Uint8Array {
    return QueryTobinTaxesResponse.encode(message).finish();
  },
  toProtoMsg(
    message: QueryTobinTaxesResponse,
  ): QueryTobinTaxesResponseProtoMsg {
    return {
      typeUrl: '/symphony.oracle.v1beta1.QueryTobinTaxesResponse',
      value: QueryTobinTaxesResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  QueryTobinTaxesResponse.typeUrl,
  QueryTobinTaxesResponse,
);
function createBaseQueryActivesRequest(): QueryActivesRequest {
  return {};
}
/**
 * QueryActivesRequest is the request type for the Query/Actives RPC method.
 * @name QueryActivesRequest
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryActivesRequest
 */
export const QueryActivesRequest = {
  typeUrl: '/symphony.oracle.v1beta1.QueryActivesRequest',
  is(o: any): o is QueryActivesRequest {
    return o && o.$typeUrl === QueryActivesRequest.typeUrl;
  },
  isSDK(o: any): o is QueryActivesRequestSDKType {
    return o && o.$typeUrl === QueryActivesRequest.typeUrl;
  },
  isAmino(o: any): o is QueryActivesRequestAmino {
    return o && o.$typeUrl === QueryActivesRequest.typeUrl;
  },
  encode(
    _: QueryActivesRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): QueryActivesRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryActivesRequest();
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
  fromPartial(_: Partial<QueryActivesRequest>): QueryActivesRequest {
    const message = createBaseQueryActivesRequest();
    return message;
  },
  fromAmino(_: QueryActivesRequestAmino): QueryActivesRequest {
    const message = createBaseQueryActivesRequest();
    return message;
  },
  toAmino(_: QueryActivesRequest): QueryActivesRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryActivesRequestAminoMsg): QueryActivesRequest {
    return QueryActivesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryActivesRequestProtoMsg): QueryActivesRequest {
    return QueryActivesRequest.decode(message.value);
  },
  toProto(message: QueryActivesRequest): Uint8Array {
    return QueryActivesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryActivesRequest): QueryActivesRequestProtoMsg {
    return {
      typeUrl: '/symphony.oracle.v1beta1.QueryActivesRequest',
      value: QueryActivesRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  QueryActivesRequest.typeUrl,
  QueryActivesRequest,
);
function createBaseQueryActivesResponse(): QueryActivesResponse {
  return {
    actives: [],
  };
}
/**
 * QueryActivesResponse is response type for the
 * Query/Actives RPC method.
 * @name QueryActivesResponse
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryActivesResponse
 */
export const QueryActivesResponse = {
  typeUrl: '/symphony.oracle.v1beta1.QueryActivesResponse',
  is(o: any): o is QueryActivesResponse {
    return (
      o &&
      (o.$typeUrl === QueryActivesResponse.typeUrl ||
        (Array.isArray(o.actives) &&
          (!o.actives.length || typeof o.actives[0] === 'string')))
    );
  },
  isSDK(o: any): o is QueryActivesResponseSDKType {
    return (
      o &&
      (o.$typeUrl === QueryActivesResponse.typeUrl ||
        (Array.isArray(o.actives) &&
          (!o.actives.length || typeof o.actives[0] === 'string')))
    );
  },
  isAmino(o: any): o is QueryActivesResponseAmino {
    return (
      o &&
      (o.$typeUrl === QueryActivesResponse.typeUrl ||
        (Array.isArray(o.actives) &&
          (!o.actives.length || typeof o.actives[0] === 'string')))
    );
  },
  encode(
    message: QueryActivesResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.actives) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): QueryActivesResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryActivesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actives.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryActivesResponse>): QueryActivesResponse {
    const message = createBaseQueryActivesResponse();
    message.actives = object.actives?.map(e => e) || [];
    return message;
  },
  fromAmino(object: QueryActivesResponseAmino): QueryActivesResponse {
    const message = createBaseQueryActivesResponse();
    message.actives = object.actives?.map(e => e) || [];
    return message;
  },
  toAmino(message: QueryActivesResponse): QueryActivesResponseAmino {
    const obj: any = {};
    if (message.actives) {
      obj.actives = message.actives.map(e => e);
    } else {
      obj.actives = message.actives;
    }
    return obj;
  },
  fromAminoMsg(object: QueryActivesResponseAminoMsg): QueryActivesResponse {
    return QueryActivesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryActivesResponseProtoMsg): QueryActivesResponse {
    return QueryActivesResponse.decode(message.value);
  },
  toProto(message: QueryActivesResponse): Uint8Array {
    return QueryActivesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryActivesResponse): QueryActivesResponseProtoMsg {
    return {
      typeUrl: '/symphony.oracle.v1beta1.QueryActivesResponse',
      value: QueryActivesResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  QueryActivesResponse.typeUrl,
  QueryActivesResponse,
);
function createBaseQueryVoteTargetsRequest(): QueryVoteTargetsRequest {
  return {};
}
/**
 * QueryVoteTargetsRequest is the request type for the Query/VoteTargets RPC
 * method.
 * @name QueryVoteTargetsRequest
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryVoteTargetsRequest
 */
export const QueryVoteTargetsRequest = {
  typeUrl: '/symphony.oracle.v1beta1.QueryVoteTargetsRequest',
  is(o: any): o is QueryVoteTargetsRequest {
    return o && o.$typeUrl === QueryVoteTargetsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryVoteTargetsRequestSDKType {
    return o && o.$typeUrl === QueryVoteTargetsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryVoteTargetsRequestAmino {
    return o && o.$typeUrl === QueryVoteTargetsRequest.typeUrl;
  },
  encode(
    _: QueryVoteTargetsRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): QueryVoteTargetsRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVoteTargetsRequest();
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
  fromPartial(_: Partial<QueryVoteTargetsRequest>): QueryVoteTargetsRequest {
    const message = createBaseQueryVoteTargetsRequest();
    return message;
  },
  fromAmino(_: QueryVoteTargetsRequestAmino): QueryVoteTargetsRequest {
    const message = createBaseQueryVoteTargetsRequest();
    return message;
  },
  toAmino(_: QueryVoteTargetsRequest): QueryVoteTargetsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(
    object: QueryVoteTargetsRequestAminoMsg,
  ): QueryVoteTargetsRequest {
    return QueryVoteTargetsRequest.fromAmino(object.value);
  },
  fromProtoMsg(
    message: QueryVoteTargetsRequestProtoMsg,
  ): QueryVoteTargetsRequest {
    return QueryVoteTargetsRequest.decode(message.value);
  },
  toProto(message: QueryVoteTargetsRequest): Uint8Array {
    return QueryVoteTargetsRequest.encode(message).finish();
  },
  toProtoMsg(
    message: QueryVoteTargetsRequest,
  ): QueryVoteTargetsRequestProtoMsg {
    return {
      typeUrl: '/symphony.oracle.v1beta1.QueryVoteTargetsRequest',
      value: QueryVoteTargetsRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  QueryVoteTargetsRequest.typeUrl,
  QueryVoteTargetsRequest,
);
function createBaseQueryVoteTargetsResponse(): QueryVoteTargetsResponse {
  return {
    voteTargets: [],
  };
}
/**
 * QueryVoteTargetsResponse is response type for the
 * Query/VoteTargets RPC method.
 * @name QueryVoteTargetsResponse
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryVoteTargetsResponse
 */
export const QueryVoteTargetsResponse = {
  typeUrl: '/symphony.oracle.v1beta1.QueryVoteTargetsResponse',
  is(o: any): o is QueryVoteTargetsResponse {
    return (
      o &&
      (o.$typeUrl === QueryVoteTargetsResponse.typeUrl ||
        (Array.isArray(o.voteTargets) &&
          (!o.voteTargets.length || typeof o.voteTargets[0] === 'string')))
    );
  },
  isSDK(o: any): o is QueryVoteTargetsResponseSDKType {
    return (
      o &&
      (o.$typeUrl === QueryVoteTargetsResponse.typeUrl ||
        (Array.isArray(o.vote_targets) &&
          (!o.vote_targets.length || typeof o.vote_targets[0] === 'string')))
    );
  },
  isAmino(o: any): o is QueryVoteTargetsResponseAmino {
    return (
      o &&
      (o.$typeUrl === QueryVoteTargetsResponse.typeUrl ||
        (Array.isArray(o.vote_targets) &&
          (!o.vote_targets.length || typeof o.vote_targets[0] === 'string')))
    );
  },
  encode(
    message: QueryVoteTargetsResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.voteTargets) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): QueryVoteTargetsResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVoteTargetsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voteTargets.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(
    object: Partial<QueryVoteTargetsResponse>,
  ): QueryVoteTargetsResponse {
    const message = createBaseQueryVoteTargetsResponse();
    message.voteTargets = object.voteTargets?.map(e => e) || [];
    return message;
  },
  fromAmino(object: QueryVoteTargetsResponseAmino): QueryVoteTargetsResponse {
    const message = createBaseQueryVoteTargetsResponse();
    message.voteTargets = object.vote_targets?.map(e => e) || [];
    return message;
  },
  toAmino(message: QueryVoteTargetsResponse): QueryVoteTargetsResponseAmino {
    const obj: any = {};
    if (message.voteTargets) {
      obj.vote_targets = message.voteTargets.map(e => e);
    } else {
      obj.vote_targets = message.voteTargets;
    }
    return obj;
  },
  fromAminoMsg(
    object: QueryVoteTargetsResponseAminoMsg,
  ): QueryVoteTargetsResponse {
    return QueryVoteTargetsResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: QueryVoteTargetsResponseProtoMsg,
  ): QueryVoteTargetsResponse {
    return QueryVoteTargetsResponse.decode(message.value);
  },
  toProto(message: QueryVoteTargetsResponse): Uint8Array {
    return QueryVoteTargetsResponse.encode(message).finish();
  },
  toProtoMsg(
    message: QueryVoteTargetsResponse,
  ): QueryVoteTargetsResponseProtoMsg {
    return {
      typeUrl: '/symphony.oracle.v1beta1.QueryVoteTargetsResponse',
      value: QueryVoteTargetsResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  QueryVoteTargetsResponse.typeUrl,
  QueryVoteTargetsResponse,
);
function createBaseQueryFeederDelegationRequest(): QueryFeederDelegationRequest {
  return {
    validatorAddr: '',
  };
}
/**
 * QueryFeederDelegationRequest is the request type for the
 * Query/FeederDelegation RPC method.
 * @name QueryFeederDelegationRequest
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryFeederDelegationRequest
 */
export const QueryFeederDelegationRequest = {
  typeUrl: '/symphony.oracle.v1beta1.QueryFeederDelegationRequest',
  is(o: any): o is QueryFeederDelegationRequest {
    return (
      o &&
      (o.$typeUrl === QueryFeederDelegationRequest.typeUrl ||
        typeof o.validatorAddr === 'string')
    );
  },
  isSDK(o: any): o is QueryFeederDelegationRequestSDKType {
    return (
      o &&
      (o.$typeUrl === QueryFeederDelegationRequest.typeUrl ||
        typeof o.validator_addr === 'string')
    );
  },
  isAmino(o: any): o is QueryFeederDelegationRequestAmino {
    return (
      o &&
      (o.$typeUrl === QueryFeederDelegationRequest.typeUrl ||
        typeof o.validator_addr === 'string')
    );
  },
  encode(
    message: QueryFeederDelegationRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.validatorAddr !== '') {
      writer.uint32(10).string(message.validatorAddr);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): QueryFeederDelegationRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeederDelegationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(
    object: Partial<QueryFeederDelegationRequest>,
  ): QueryFeederDelegationRequest {
    const message = createBaseQueryFeederDelegationRequest();
    message.validatorAddr = object.validatorAddr ?? '';
    return message;
  },
  fromAmino(
    object: QueryFeederDelegationRequestAmino,
  ): QueryFeederDelegationRequest {
    const message = createBaseQueryFeederDelegationRequest();
    if (object.validator_addr !== undefined && object.validator_addr !== null) {
      message.validatorAddr = object.validator_addr;
    }
    return message;
  },
  toAmino(
    message: QueryFeederDelegationRequest,
  ): QueryFeederDelegationRequestAmino {
    const obj: any = {};
    obj.validator_addr =
      message.validatorAddr === '' ? undefined : message.validatorAddr;
    return obj;
  },
  fromAminoMsg(
    object: QueryFeederDelegationRequestAminoMsg,
  ): QueryFeederDelegationRequest {
    return QueryFeederDelegationRequest.fromAmino(object.value);
  },
  fromProtoMsg(
    message: QueryFeederDelegationRequestProtoMsg,
  ): QueryFeederDelegationRequest {
    return QueryFeederDelegationRequest.decode(message.value);
  },
  toProto(message: QueryFeederDelegationRequest): Uint8Array {
    return QueryFeederDelegationRequest.encode(message).finish();
  },
  toProtoMsg(
    message: QueryFeederDelegationRequest,
  ): QueryFeederDelegationRequestProtoMsg {
    return {
      typeUrl: '/symphony.oracle.v1beta1.QueryFeederDelegationRequest',
      value: QueryFeederDelegationRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  QueryFeederDelegationRequest.typeUrl,
  QueryFeederDelegationRequest,
);
function createBaseQueryFeederDelegationResponse(): QueryFeederDelegationResponse {
  return {
    feederAddr: '',
  };
}
/**
 * QueryFeederDelegationResponse is response type for the
 * Query/FeederDelegation RPC method.
 * @name QueryFeederDelegationResponse
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryFeederDelegationResponse
 */
export const QueryFeederDelegationResponse = {
  typeUrl: '/symphony.oracle.v1beta1.QueryFeederDelegationResponse',
  is(o: any): o is QueryFeederDelegationResponse {
    return (
      o &&
      (o.$typeUrl === QueryFeederDelegationResponse.typeUrl ||
        typeof o.feederAddr === 'string')
    );
  },
  isSDK(o: any): o is QueryFeederDelegationResponseSDKType {
    return (
      o &&
      (o.$typeUrl === QueryFeederDelegationResponse.typeUrl ||
        typeof o.feeder_addr === 'string')
    );
  },
  isAmino(o: any): o is QueryFeederDelegationResponseAmino {
    return (
      o &&
      (o.$typeUrl === QueryFeederDelegationResponse.typeUrl ||
        typeof o.feeder_addr === 'string')
    );
  },
  encode(
    message: QueryFeederDelegationResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.feederAddr !== '') {
      writer.uint32(10).string(message.feederAddr);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): QueryFeederDelegationResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeederDelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feederAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(
    object: Partial<QueryFeederDelegationResponse>,
  ): QueryFeederDelegationResponse {
    const message = createBaseQueryFeederDelegationResponse();
    message.feederAddr = object.feederAddr ?? '';
    return message;
  },
  fromAmino(
    object: QueryFeederDelegationResponseAmino,
  ): QueryFeederDelegationResponse {
    const message = createBaseQueryFeederDelegationResponse();
    if (object.feeder_addr !== undefined && object.feeder_addr !== null) {
      message.feederAddr = object.feeder_addr;
    }
    return message;
  },
  toAmino(
    message: QueryFeederDelegationResponse,
  ): QueryFeederDelegationResponseAmino {
    const obj: any = {};
    obj.feeder_addr =
      message.feederAddr === '' ? undefined : message.feederAddr;
    return obj;
  },
  fromAminoMsg(
    object: QueryFeederDelegationResponseAminoMsg,
  ): QueryFeederDelegationResponse {
    return QueryFeederDelegationResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: QueryFeederDelegationResponseProtoMsg,
  ): QueryFeederDelegationResponse {
    return QueryFeederDelegationResponse.decode(message.value);
  },
  toProto(message: QueryFeederDelegationResponse): Uint8Array {
    return QueryFeederDelegationResponse.encode(message).finish();
  },
  toProtoMsg(
    message: QueryFeederDelegationResponse,
  ): QueryFeederDelegationResponseProtoMsg {
    return {
      typeUrl: '/symphony.oracle.v1beta1.QueryFeederDelegationResponse',
      value: QueryFeederDelegationResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  QueryFeederDelegationResponse.typeUrl,
  QueryFeederDelegationResponse,
);
function createBaseQueryMissCounterRequest(): QueryMissCounterRequest {
  return {
    validatorAddr: '',
  };
}
/**
 * QueryMissCounterRequest is the request type for the Query/MissCounter RPC
 * method.
 * @name QueryMissCounterRequest
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryMissCounterRequest
 */
export const QueryMissCounterRequest = {
  typeUrl: '/symphony.oracle.v1beta1.QueryMissCounterRequest',
  is(o: any): o is QueryMissCounterRequest {
    return (
      o &&
      (o.$typeUrl === QueryMissCounterRequest.typeUrl ||
        typeof o.validatorAddr === 'string')
    );
  },
  isSDK(o: any): o is QueryMissCounterRequestSDKType {
    return (
      o &&
      (o.$typeUrl === QueryMissCounterRequest.typeUrl ||
        typeof o.validator_addr === 'string')
    );
  },
  isAmino(o: any): o is QueryMissCounterRequestAmino {
    return (
      o &&
      (o.$typeUrl === QueryMissCounterRequest.typeUrl ||
        typeof o.validator_addr === 'string')
    );
  },
  encode(
    message: QueryMissCounterRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.validatorAddr !== '') {
      writer.uint32(10).string(message.validatorAddr);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): QueryMissCounterRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMissCounterRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(
    object: Partial<QueryMissCounterRequest>,
  ): QueryMissCounterRequest {
    const message = createBaseQueryMissCounterRequest();
    message.validatorAddr = object.validatorAddr ?? '';
    return message;
  },
  fromAmino(object: QueryMissCounterRequestAmino): QueryMissCounterRequest {
    const message = createBaseQueryMissCounterRequest();
    if (object.validator_addr !== undefined && object.validator_addr !== null) {
      message.validatorAddr = object.validator_addr;
    }
    return message;
  },
  toAmino(message: QueryMissCounterRequest): QueryMissCounterRequestAmino {
    const obj: any = {};
    obj.validator_addr =
      message.validatorAddr === '' ? undefined : message.validatorAddr;
    return obj;
  },
  fromAminoMsg(
    object: QueryMissCounterRequestAminoMsg,
  ): QueryMissCounterRequest {
    return QueryMissCounterRequest.fromAmino(object.value);
  },
  fromProtoMsg(
    message: QueryMissCounterRequestProtoMsg,
  ): QueryMissCounterRequest {
    return QueryMissCounterRequest.decode(message.value);
  },
  toProto(message: QueryMissCounterRequest): Uint8Array {
    return QueryMissCounterRequest.encode(message).finish();
  },
  toProtoMsg(
    message: QueryMissCounterRequest,
  ): QueryMissCounterRequestProtoMsg {
    return {
      typeUrl: '/symphony.oracle.v1beta1.QueryMissCounterRequest',
      value: QueryMissCounterRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  QueryMissCounterRequest.typeUrl,
  QueryMissCounterRequest,
);
function createBaseQueryMissCounterResponse(): QueryMissCounterResponse {
  return {
    missCounter: BigInt(0),
  };
}
/**
 * QueryMissCounterResponse is response type for the
 * Query/MissCounter RPC method.
 * @name QueryMissCounterResponse
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryMissCounterResponse
 */
export const QueryMissCounterResponse = {
  typeUrl: '/symphony.oracle.v1beta1.QueryMissCounterResponse',
  is(o: any): o is QueryMissCounterResponse {
    return (
      o &&
      (o.$typeUrl === QueryMissCounterResponse.typeUrl ||
        typeof o.missCounter === 'bigint')
    );
  },
  isSDK(o: any): o is QueryMissCounterResponseSDKType {
    return (
      o &&
      (o.$typeUrl === QueryMissCounterResponse.typeUrl ||
        typeof o.miss_counter === 'bigint')
    );
  },
  isAmino(o: any): o is QueryMissCounterResponseAmino {
    return (
      o &&
      (o.$typeUrl === QueryMissCounterResponse.typeUrl ||
        typeof o.miss_counter === 'bigint')
    );
  },
  encode(
    message: QueryMissCounterResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.missCounter !== BigInt(0)) {
      writer.uint32(8).uint64(message.missCounter);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): QueryMissCounterResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMissCounterResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.missCounter = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(
    object: Partial<QueryMissCounterResponse>,
  ): QueryMissCounterResponse {
    const message = createBaseQueryMissCounterResponse();
    message.missCounter =
      object.missCounter !== undefined && object.missCounter !== null
        ? BigInt(object.missCounter.toString())
        : BigInt(0);
    return message;
  },
  fromAmino(object: QueryMissCounterResponseAmino): QueryMissCounterResponse {
    const message = createBaseQueryMissCounterResponse();
    if (object.miss_counter !== undefined && object.miss_counter !== null) {
      message.missCounter = BigInt(object.miss_counter);
    }
    return message;
  },
  toAmino(message: QueryMissCounterResponse): QueryMissCounterResponseAmino {
    const obj: any = {};
    obj.miss_counter =
      message.missCounter !== BigInt(0)
        ? message.missCounter?.toString()
        : undefined;
    return obj;
  },
  fromAminoMsg(
    object: QueryMissCounterResponseAminoMsg,
  ): QueryMissCounterResponse {
    return QueryMissCounterResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: QueryMissCounterResponseProtoMsg,
  ): QueryMissCounterResponse {
    return QueryMissCounterResponse.decode(message.value);
  },
  toProto(message: QueryMissCounterResponse): Uint8Array {
    return QueryMissCounterResponse.encode(message).finish();
  },
  toProtoMsg(
    message: QueryMissCounterResponse,
  ): QueryMissCounterResponseProtoMsg {
    return {
      typeUrl: '/symphony.oracle.v1beta1.QueryMissCounterResponse',
      value: QueryMissCounterResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  QueryMissCounterResponse.typeUrl,
  QueryMissCounterResponse,
);
function createBaseQueryAggregatePrevoteRequest(): QueryAggregatePrevoteRequest {
  return {
    validatorAddr: '',
  };
}
/**
 * QueryAggregatePrevoteRequest is the request type for the
 * Query/AggregatePrevote RPC method.
 * @name QueryAggregatePrevoteRequest
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryAggregatePrevoteRequest
 */
export const QueryAggregatePrevoteRequest = {
  typeUrl: '/symphony.oracle.v1beta1.QueryAggregatePrevoteRequest',
  is(o: any): o is QueryAggregatePrevoteRequest {
    return (
      o &&
      (o.$typeUrl === QueryAggregatePrevoteRequest.typeUrl ||
        typeof o.validatorAddr === 'string')
    );
  },
  isSDK(o: any): o is QueryAggregatePrevoteRequestSDKType {
    return (
      o &&
      (o.$typeUrl === QueryAggregatePrevoteRequest.typeUrl ||
        typeof o.validator_addr === 'string')
    );
  },
  isAmino(o: any): o is QueryAggregatePrevoteRequestAmino {
    return (
      o &&
      (o.$typeUrl === QueryAggregatePrevoteRequest.typeUrl ||
        typeof o.validator_addr === 'string')
    );
  },
  encode(
    message: QueryAggregatePrevoteRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.validatorAddr !== '') {
      writer.uint32(10).string(message.validatorAddr);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): QueryAggregatePrevoteRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAggregatePrevoteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(
    object: Partial<QueryAggregatePrevoteRequest>,
  ): QueryAggregatePrevoteRequest {
    const message = createBaseQueryAggregatePrevoteRequest();
    message.validatorAddr = object.validatorAddr ?? '';
    return message;
  },
  fromAmino(
    object: QueryAggregatePrevoteRequestAmino,
  ): QueryAggregatePrevoteRequest {
    const message = createBaseQueryAggregatePrevoteRequest();
    if (object.validator_addr !== undefined && object.validator_addr !== null) {
      message.validatorAddr = object.validator_addr;
    }
    return message;
  },
  toAmino(
    message: QueryAggregatePrevoteRequest,
  ): QueryAggregatePrevoteRequestAmino {
    const obj: any = {};
    obj.validator_addr =
      message.validatorAddr === '' ? undefined : message.validatorAddr;
    return obj;
  },
  fromAminoMsg(
    object: QueryAggregatePrevoteRequestAminoMsg,
  ): QueryAggregatePrevoteRequest {
    return QueryAggregatePrevoteRequest.fromAmino(object.value);
  },
  fromProtoMsg(
    message: QueryAggregatePrevoteRequestProtoMsg,
  ): QueryAggregatePrevoteRequest {
    return QueryAggregatePrevoteRequest.decode(message.value);
  },
  toProto(message: QueryAggregatePrevoteRequest): Uint8Array {
    return QueryAggregatePrevoteRequest.encode(message).finish();
  },
  toProtoMsg(
    message: QueryAggregatePrevoteRequest,
  ): QueryAggregatePrevoteRequestProtoMsg {
    return {
      typeUrl: '/symphony.oracle.v1beta1.QueryAggregatePrevoteRequest',
      value: QueryAggregatePrevoteRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  QueryAggregatePrevoteRequest.typeUrl,
  QueryAggregatePrevoteRequest,
);
function createBaseQueryAggregatePrevoteResponse(): QueryAggregatePrevoteResponse {
  return {
    aggregatePrevote: AggregateExchangeRatePrevote.fromPartial({}),
  };
}
/**
 * QueryAggregatePrevoteResponse is response type for the
 * Query/AggregatePrevote RPC method.
 * @name QueryAggregatePrevoteResponse
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryAggregatePrevoteResponse
 */
export const QueryAggregatePrevoteResponse = {
  typeUrl: '/symphony.oracle.v1beta1.QueryAggregatePrevoteResponse',
  is(o: any): o is QueryAggregatePrevoteResponse {
    return (
      o &&
      (o.$typeUrl === QueryAggregatePrevoteResponse.typeUrl ||
        AggregateExchangeRatePrevote.is(o.aggregatePrevote))
    );
  },
  isSDK(o: any): o is QueryAggregatePrevoteResponseSDKType {
    return (
      o &&
      (o.$typeUrl === QueryAggregatePrevoteResponse.typeUrl ||
        AggregateExchangeRatePrevote.isSDK(o.aggregate_prevote))
    );
  },
  isAmino(o: any): o is QueryAggregatePrevoteResponseAmino {
    return (
      o &&
      (o.$typeUrl === QueryAggregatePrevoteResponse.typeUrl ||
        AggregateExchangeRatePrevote.isAmino(o.aggregate_prevote))
    );
  },
  encode(
    message: QueryAggregatePrevoteResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.aggregatePrevote !== undefined) {
      AggregateExchangeRatePrevote.encode(
        message.aggregatePrevote,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): QueryAggregatePrevoteResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAggregatePrevoteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.aggregatePrevote = AggregateExchangeRatePrevote.decode(
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
    object: Partial<QueryAggregatePrevoteResponse>,
  ): QueryAggregatePrevoteResponse {
    const message = createBaseQueryAggregatePrevoteResponse();
    message.aggregatePrevote =
      object.aggregatePrevote !== undefined && object.aggregatePrevote !== null
        ? AggregateExchangeRatePrevote.fromPartial(object.aggregatePrevote)
        : undefined;
    return message;
  },
  fromAmino(
    object: QueryAggregatePrevoteResponseAmino,
  ): QueryAggregatePrevoteResponse {
    const message = createBaseQueryAggregatePrevoteResponse();
    if (
      object.aggregate_prevote !== undefined &&
      object.aggregate_prevote !== null
    ) {
      message.aggregatePrevote = AggregateExchangeRatePrevote.fromAmino(
        object.aggregate_prevote,
      );
    }
    return message;
  },
  toAmino(
    message: QueryAggregatePrevoteResponse,
  ): QueryAggregatePrevoteResponseAmino {
    const obj: any = {};
    obj.aggregate_prevote = message.aggregatePrevote
      ? AggregateExchangeRatePrevote.toAmino(message.aggregatePrevote)
      : undefined;
    return obj;
  },
  fromAminoMsg(
    object: QueryAggregatePrevoteResponseAminoMsg,
  ): QueryAggregatePrevoteResponse {
    return QueryAggregatePrevoteResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: QueryAggregatePrevoteResponseProtoMsg,
  ): QueryAggregatePrevoteResponse {
    return QueryAggregatePrevoteResponse.decode(message.value);
  },
  toProto(message: QueryAggregatePrevoteResponse): Uint8Array {
    return QueryAggregatePrevoteResponse.encode(message).finish();
  },
  toProtoMsg(
    message: QueryAggregatePrevoteResponse,
  ): QueryAggregatePrevoteResponseProtoMsg {
    return {
      typeUrl: '/symphony.oracle.v1beta1.QueryAggregatePrevoteResponse',
      value: QueryAggregatePrevoteResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  QueryAggregatePrevoteResponse.typeUrl,
  QueryAggregatePrevoteResponse,
);
function createBaseQueryAggregatePrevotesRequest(): QueryAggregatePrevotesRequest {
  return {};
}
/**
 * QueryAggregatePrevotesRequest is the request type for the
 * Query/AggregatePrevotes RPC method.
 * @name QueryAggregatePrevotesRequest
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryAggregatePrevotesRequest
 */
export const QueryAggregatePrevotesRequest = {
  typeUrl: '/symphony.oracle.v1beta1.QueryAggregatePrevotesRequest',
  is(o: any): o is QueryAggregatePrevotesRequest {
    return o && o.$typeUrl === QueryAggregatePrevotesRequest.typeUrl;
  },
  isSDK(o: any): o is QueryAggregatePrevotesRequestSDKType {
    return o && o.$typeUrl === QueryAggregatePrevotesRequest.typeUrl;
  },
  isAmino(o: any): o is QueryAggregatePrevotesRequestAmino {
    return o && o.$typeUrl === QueryAggregatePrevotesRequest.typeUrl;
  },
  encode(
    _: QueryAggregatePrevotesRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): QueryAggregatePrevotesRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAggregatePrevotesRequest();
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
    _: Partial<QueryAggregatePrevotesRequest>,
  ): QueryAggregatePrevotesRequest {
    const message = createBaseQueryAggregatePrevotesRequest();
    return message;
  },
  fromAmino(
    _: QueryAggregatePrevotesRequestAmino,
  ): QueryAggregatePrevotesRequest {
    const message = createBaseQueryAggregatePrevotesRequest();
    return message;
  },
  toAmino(
    _: QueryAggregatePrevotesRequest,
  ): QueryAggregatePrevotesRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(
    object: QueryAggregatePrevotesRequestAminoMsg,
  ): QueryAggregatePrevotesRequest {
    return QueryAggregatePrevotesRequest.fromAmino(object.value);
  },
  fromProtoMsg(
    message: QueryAggregatePrevotesRequestProtoMsg,
  ): QueryAggregatePrevotesRequest {
    return QueryAggregatePrevotesRequest.decode(message.value);
  },
  toProto(message: QueryAggregatePrevotesRequest): Uint8Array {
    return QueryAggregatePrevotesRequest.encode(message).finish();
  },
  toProtoMsg(
    message: QueryAggregatePrevotesRequest,
  ): QueryAggregatePrevotesRequestProtoMsg {
    return {
      typeUrl: '/symphony.oracle.v1beta1.QueryAggregatePrevotesRequest',
      value: QueryAggregatePrevotesRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  QueryAggregatePrevotesRequest.typeUrl,
  QueryAggregatePrevotesRequest,
);
function createBaseQueryAggregatePrevotesResponse(): QueryAggregatePrevotesResponse {
  return {
    aggregatePrevotes: [],
  };
}
/**
 * QueryAggregatePrevotesResponse is response type for the
 * Query/AggregatePrevotes RPC method.
 * @name QueryAggregatePrevotesResponse
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryAggregatePrevotesResponse
 */
export const QueryAggregatePrevotesResponse = {
  typeUrl: '/symphony.oracle.v1beta1.QueryAggregatePrevotesResponse',
  is(o: any): o is QueryAggregatePrevotesResponse {
    return (
      o &&
      (o.$typeUrl === QueryAggregatePrevotesResponse.typeUrl ||
        (Array.isArray(o.aggregatePrevotes) &&
          (!o.aggregatePrevotes.length ||
            AggregateExchangeRatePrevote.is(o.aggregatePrevotes[0]))))
    );
  },
  isSDK(o: any): o is QueryAggregatePrevotesResponseSDKType {
    return (
      o &&
      (o.$typeUrl === QueryAggregatePrevotesResponse.typeUrl ||
        (Array.isArray(o.aggregate_prevotes) &&
          (!o.aggregate_prevotes.length ||
            AggregateExchangeRatePrevote.isSDK(o.aggregate_prevotes[0]))))
    );
  },
  isAmino(o: any): o is QueryAggregatePrevotesResponseAmino {
    return (
      o &&
      (o.$typeUrl === QueryAggregatePrevotesResponse.typeUrl ||
        (Array.isArray(o.aggregate_prevotes) &&
          (!o.aggregate_prevotes.length ||
            AggregateExchangeRatePrevote.isAmino(o.aggregate_prevotes[0]))))
    );
  },
  encode(
    message: QueryAggregatePrevotesResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.aggregatePrevotes) {
      AggregateExchangeRatePrevote.encode(
        v!,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): QueryAggregatePrevotesResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAggregatePrevotesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.aggregatePrevotes.push(
            AggregateExchangeRatePrevote.decode(reader, reader.uint32()),
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
    object: Partial<QueryAggregatePrevotesResponse>,
  ): QueryAggregatePrevotesResponse {
    const message = createBaseQueryAggregatePrevotesResponse();
    message.aggregatePrevotes =
      object.aggregatePrevotes?.map(e =>
        AggregateExchangeRatePrevote.fromPartial(e),
      ) || [];
    return message;
  },
  fromAmino(
    object: QueryAggregatePrevotesResponseAmino,
  ): QueryAggregatePrevotesResponse {
    const message = createBaseQueryAggregatePrevotesResponse();
    message.aggregatePrevotes =
      object.aggregate_prevotes?.map(e =>
        AggregateExchangeRatePrevote.fromAmino(e),
      ) || [];
    return message;
  },
  toAmino(
    message: QueryAggregatePrevotesResponse,
  ): QueryAggregatePrevotesResponseAmino {
    const obj: any = {};
    if (message.aggregatePrevotes) {
      obj.aggregate_prevotes = message.aggregatePrevotes.map(e =>
        e ? AggregateExchangeRatePrevote.toAmino(e) : undefined,
      );
    } else {
      obj.aggregate_prevotes = message.aggregatePrevotes;
    }
    return obj;
  },
  fromAminoMsg(
    object: QueryAggregatePrevotesResponseAminoMsg,
  ): QueryAggregatePrevotesResponse {
    return QueryAggregatePrevotesResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: QueryAggregatePrevotesResponseProtoMsg,
  ): QueryAggregatePrevotesResponse {
    return QueryAggregatePrevotesResponse.decode(message.value);
  },
  toProto(message: QueryAggregatePrevotesResponse): Uint8Array {
    return QueryAggregatePrevotesResponse.encode(message).finish();
  },
  toProtoMsg(
    message: QueryAggregatePrevotesResponse,
  ): QueryAggregatePrevotesResponseProtoMsg {
    return {
      typeUrl: '/symphony.oracle.v1beta1.QueryAggregatePrevotesResponse',
      value: QueryAggregatePrevotesResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  QueryAggregatePrevotesResponse.typeUrl,
  QueryAggregatePrevotesResponse,
);
function createBaseQueryAggregateVoteRequest(): QueryAggregateVoteRequest {
  return {
    validatorAddr: '',
  };
}
/**
 * QueryAggregateVoteRequest is the request type for the Query/AggregateVote RPC
 * method.
 * @name QueryAggregateVoteRequest
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryAggregateVoteRequest
 */
export const QueryAggregateVoteRequest = {
  typeUrl: '/symphony.oracle.v1beta1.QueryAggregateVoteRequest',
  is(o: any): o is QueryAggregateVoteRequest {
    return (
      o &&
      (o.$typeUrl === QueryAggregateVoteRequest.typeUrl ||
        typeof o.validatorAddr === 'string')
    );
  },
  isSDK(o: any): o is QueryAggregateVoteRequestSDKType {
    return (
      o &&
      (o.$typeUrl === QueryAggregateVoteRequest.typeUrl ||
        typeof o.validator_addr === 'string')
    );
  },
  isAmino(o: any): o is QueryAggregateVoteRequestAmino {
    return (
      o &&
      (o.$typeUrl === QueryAggregateVoteRequest.typeUrl ||
        typeof o.validator_addr === 'string')
    );
  },
  encode(
    message: QueryAggregateVoteRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.validatorAddr !== '') {
      writer.uint32(10).string(message.validatorAddr);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): QueryAggregateVoteRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAggregateVoteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(
    object: Partial<QueryAggregateVoteRequest>,
  ): QueryAggregateVoteRequest {
    const message = createBaseQueryAggregateVoteRequest();
    message.validatorAddr = object.validatorAddr ?? '';
    return message;
  },
  fromAmino(object: QueryAggregateVoteRequestAmino): QueryAggregateVoteRequest {
    const message = createBaseQueryAggregateVoteRequest();
    if (object.validator_addr !== undefined && object.validator_addr !== null) {
      message.validatorAddr = object.validator_addr;
    }
    return message;
  },
  toAmino(message: QueryAggregateVoteRequest): QueryAggregateVoteRequestAmino {
    const obj: any = {};
    obj.validator_addr =
      message.validatorAddr === '' ? undefined : message.validatorAddr;
    return obj;
  },
  fromAminoMsg(
    object: QueryAggregateVoteRequestAminoMsg,
  ): QueryAggregateVoteRequest {
    return QueryAggregateVoteRequest.fromAmino(object.value);
  },
  fromProtoMsg(
    message: QueryAggregateVoteRequestProtoMsg,
  ): QueryAggregateVoteRequest {
    return QueryAggregateVoteRequest.decode(message.value);
  },
  toProto(message: QueryAggregateVoteRequest): Uint8Array {
    return QueryAggregateVoteRequest.encode(message).finish();
  },
  toProtoMsg(
    message: QueryAggregateVoteRequest,
  ): QueryAggregateVoteRequestProtoMsg {
    return {
      typeUrl: '/symphony.oracle.v1beta1.QueryAggregateVoteRequest',
      value: QueryAggregateVoteRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  QueryAggregateVoteRequest.typeUrl,
  QueryAggregateVoteRequest,
);
function createBaseQueryAggregateVoteResponse(): QueryAggregateVoteResponse {
  return {
    aggregateVote: AggregateExchangeRateVote.fromPartial({}),
  };
}
/**
 * QueryAggregateVoteResponse is response type for the
 * Query/AggregateVote RPC method.
 * @name QueryAggregateVoteResponse
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryAggregateVoteResponse
 */
export const QueryAggregateVoteResponse = {
  typeUrl: '/symphony.oracle.v1beta1.QueryAggregateVoteResponse',
  is(o: any): o is QueryAggregateVoteResponse {
    return (
      o &&
      (o.$typeUrl === QueryAggregateVoteResponse.typeUrl ||
        AggregateExchangeRateVote.is(o.aggregateVote))
    );
  },
  isSDK(o: any): o is QueryAggregateVoteResponseSDKType {
    return (
      o &&
      (o.$typeUrl === QueryAggregateVoteResponse.typeUrl ||
        AggregateExchangeRateVote.isSDK(o.aggregate_vote))
    );
  },
  isAmino(o: any): o is QueryAggregateVoteResponseAmino {
    return (
      o &&
      (o.$typeUrl === QueryAggregateVoteResponse.typeUrl ||
        AggregateExchangeRateVote.isAmino(o.aggregate_vote))
    );
  },
  encode(
    message: QueryAggregateVoteResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.aggregateVote !== undefined) {
      AggregateExchangeRateVote.encode(
        message.aggregateVote,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): QueryAggregateVoteResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAggregateVoteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.aggregateVote = AggregateExchangeRateVote.decode(
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
    object: Partial<QueryAggregateVoteResponse>,
  ): QueryAggregateVoteResponse {
    const message = createBaseQueryAggregateVoteResponse();
    message.aggregateVote =
      object.aggregateVote !== undefined && object.aggregateVote !== null
        ? AggregateExchangeRateVote.fromPartial(object.aggregateVote)
        : undefined;
    return message;
  },
  fromAmino(
    object: QueryAggregateVoteResponseAmino,
  ): QueryAggregateVoteResponse {
    const message = createBaseQueryAggregateVoteResponse();
    if (object.aggregate_vote !== undefined && object.aggregate_vote !== null) {
      message.aggregateVote = AggregateExchangeRateVote.fromAmino(
        object.aggregate_vote,
      );
    }
    return message;
  },
  toAmino(
    message: QueryAggregateVoteResponse,
  ): QueryAggregateVoteResponseAmino {
    const obj: any = {};
    obj.aggregate_vote = message.aggregateVote
      ? AggregateExchangeRateVote.toAmino(message.aggregateVote)
      : undefined;
    return obj;
  },
  fromAminoMsg(
    object: QueryAggregateVoteResponseAminoMsg,
  ): QueryAggregateVoteResponse {
    return QueryAggregateVoteResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: QueryAggregateVoteResponseProtoMsg,
  ): QueryAggregateVoteResponse {
    return QueryAggregateVoteResponse.decode(message.value);
  },
  toProto(message: QueryAggregateVoteResponse): Uint8Array {
    return QueryAggregateVoteResponse.encode(message).finish();
  },
  toProtoMsg(
    message: QueryAggregateVoteResponse,
  ): QueryAggregateVoteResponseProtoMsg {
    return {
      typeUrl: '/symphony.oracle.v1beta1.QueryAggregateVoteResponse',
      value: QueryAggregateVoteResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  QueryAggregateVoteResponse.typeUrl,
  QueryAggregateVoteResponse,
);
function createBaseQueryAggregateVotesRequest(): QueryAggregateVotesRequest {
  return {};
}
/**
 * QueryAggregateVotesRequest is the request type for the Query/AggregateVotes
 * RPC method.
 * @name QueryAggregateVotesRequest
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryAggregateVotesRequest
 */
export const QueryAggregateVotesRequest = {
  typeUrl: '/symphony.oracle.v1beta1.QueryAggregateVotesRequest',
  is(o: any): o is QueryAggregateVotesRequest {
    return o && o.$typeUrl === QueryAggregateVotesRequest.typeUrl;
  },
  isSDK(o: any): o is QueryAggregateVotesRequestSDKType {
    return o && o.$typeUrl === QueryAggregateVotesRequest.typeUrl;
  },
  isAmino(o: any): o is QueryAggregateVotesRequestAmino {
    return o && o.$typeUrl === QueryAggregateVotesRequest.typeUrl;
  },
  encode(
    _: QueryAggregateVotesRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): QueryAggregateVotesRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAggregateVotesRequest();
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
    _: Partial<QueryAggregateVotesRequest>,
  ): QueryAggregateVotesRequest {
    const message = createBaseQueryAggregateVotesRequest();
    return message;
  },
  fromAmino(_: QueryAggregateVotesRequestAmino): QueryAggregateVotesRequest {
    const message = createBaseQueryAggregateVotesRequest();
    return message;
  },
  toAmino(_: QueryAggregateVotesRequest): QueryAggregateVotesRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(
    object: QueryAggregateVotesRequestAminoMsg,
  ): QueryAggregateVotesRequest {
    return QueryAggregateVotesRequest.fromAmino(object.value);
  },
  fromProtoMsg(
    message: QueryAggregateVotesRequestProtoMsg,
  ): QueryAggregateVotesRequest {
    return QueryAggregateVotesRequest.decode(message.value);
  },
  toProto(message: QueryAggregateVotesRequest): Uint8Array {
    return QueryAggregateVotesRequest.encode(message).finish();
  },
  toProtoMsg(
    message: QueryAggregateVotesRequest,
  ): QueryAggregateVotesRequestProtoMsg {
    return {
      typeUrl: '/symphony.oracle.v1beta1.QueryAggregateVotesRequest',
      value: QueryAggregateVotesRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  QueryAggregateVotesRequest.typeUrl,
  QueryAggregateVotesRequest,
);
function createBaseQueryAggregateVotesResponse(): QueryAggregateVotesResponse {
  return {
    aggregateVotes: [],
  };
}
/**
 * QueryAggregateVotesResponse is response type for the
 * Query/AggregateVotes RPC method.
 * @name QueryAggregateVotesResponse
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryAggregateVotesResponse
 */
export const QueryAggregateVotesResponse = {
  typeUrl: '/symphony.oracle.v1beta1.QueryAggregateVotesResponse',
  is(o: any): o is QueryAggregateVotesResponse {
    return (
      o &&
      (o.$typeUrl === QueryAggregateVotesResponse.typeUrl ||
        (Array.isArray(o.aggregateVotes) &&
          (!o.aggregateVotes.length ||
            AggregateExchangeRateVote.is(o.aggregateVotes[0]))))
    );
  },
  isSDK(o: any): o is QueryAggregateVotesResponseSDKType {
    return (
      o &&
      (o.$typeUrl === QueryAggregateVotesResponse.typeUrl ||
        (Array.isArray(o.aggregate_votes) &&
          (!o.aggregate_votes.length ||
            AggregateExchangeRateVote.isSDK(o.aggregate_votes[0]))))
    );
  },
  isAmino(o: any): o is QueryAggregateVotesResponseAmino {
    return (
      o &&
      (o.$typeUrl === QueryAggregateVotesResponse.typeUrl ||
        (Array.isArray(o.aggregate_votes) &&
          (!o.aggregate_votes.length ||
            AggregateExchangeRateVote.isAmino(o.aggregate_votes[0]))))
    );
  },
  encode(
    message: QueryAggregateVotesResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.aggregateVotes) {
      AggregateExchangeRateVote.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): QueryAggregateVotesResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAggregateVotesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.aggregateVotes.push(
            AggregateExchangeRateVote.decode(reader, reader.uint32()),
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
    object: Partial<QueryAggregateVotesResponse>,
  ): QueryAggregateVotesResponse {
    const message = createBaseQueryAggregateVotesResponse();
    message.aggregateVotes =
      object.aggregateVotes?.map(e =>
        AggregateExchangeRateVote.fromPartial(e),
      ) || [];
    return message;
  },
  fromAmino(
    object: QueryAggregateVotesResponseAmino,
  ): QueryAggregateVotesResponse {
    const message = createBaseQueryAggregateVotesResponse();
    message.aggregateVotes =
      object.aggregate_votes?.map(e =>
        AggregateExchangeRateVote.fromAmino(e),
      ) || [];
    return message;
  },
  toAmino(
    message: QueryAggregateVotesResponse,
  ): QueryAggregateVotesResponseAmino {
    const obj: any = {};
    if (message.aggregateVotes) {
      obj.aggregate_votes = message.aggregateVotes.map(e =>
        e ? AggregateExchangeRateVote.toAmino(e) : undefined,
      );
    } else {
      obj.aggregate_votes = message.aggregateVotes;
    }
    return obj;
  },
  fromAminoMsg(
    object: QueryAggregateVotesResponseAminoMsg,
  ): QueryAggregateVotesResponse {
    return QueryAggregateVotesResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: QueryAggregateVotesResponseProtoMsg,
  ): QueryAggregateVotesResponse {
    return QueryAggregateVotesResponse.decode(message.value);
  },
  toProto(message: QueryAggregateVotesResponse): Uint8Array {
    return QueryAggregateVotesResponse.encode(message).finish();
  },
  toProtoMsg(
    message: QueryAggregateVotesResponse,
  ): QueryAggregateVotesResponseProtoMsg {
    return {
      typeUrl: '/symphony.oracle.v1beta1.QueryAggregateVotesResponse',
      value: QueryAggregateVotesResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  QueryAggregateVotesResponse.typeUrl,
  QueryAggregateVotesResponse,
);
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryParamsRequest
 */
export const QueryParamsRequest = {
  typeUrl: '/symphony.oracle.v1beta1.QueryParamsRequest',
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
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: '/symphony.oracle.v1beta1.QueryParamsRequest',
      value: QueryParamsRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(QueryParamsRequest.typeUrl, QueryParamsRequest);
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({}),
  };
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 * @name QueryParamsResponse
 * @package symphony.oracle.v1beta1
 * @see proto type: symphony.oracle.v1beta1.QueryParamsResponse
 */
export const QueryParamsResponse = {
  typeUrl: '/symphony.oracle.v1beta1.QueryParamsResponse',
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
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: '/symphony.oracle.v1beta1.QueryParamsResponse',
      value: QueryParamsResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  QueryParamsResponse.typeUrl,
  QueryParamsResponse,
);
