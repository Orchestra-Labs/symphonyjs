//@ts-nocheck
import { GeneratedType, Registry, OfflineSigner } from '@cosmjs/proto-signing';
import {
  defaultRegistryTypes,
  AminoTypes,
  SigningStargateClient,
} from '@cosmjs/stargate';
import { HttpEndpoint } from '@cosmjs/tendermint-rpc';
import * as symphonyBridgeV1beta1TxRegistry from './bridge/v1beta1/tx.registry';
import * as symphonyConcentratedliquidityPoolmodelConcentratedV1beta1TxRegistry from './concentratedliquidity/poolmodel/concentrated/v1beta1/tx.registry';
import * as symphonyConcentratedliquidityV1beta1TxRegistry from './concentratedliquidity/v1beta1/tx.registry';
import * as symphonyGammPoolmodelsBalancerV1beta1TxRegistry from './gamm/poolmodels/balancer/v1beta1/tx.registry';
import * as symphonyGammPoolmodelsStableswapV1beta1TxRegistry from './gamm/poolmodels/stableswap/v1beta1/tx.registry';
import * as symphonyGammV1beta1TxRegistry from './gamm/v1beta1/tx.registry';
import * as symphonyIbchooksTxRegistry from './ibchooks/tx.registry';
import * as symphonyIncentivesTxRegistry from './incentives/tx.registry';
import * as symphonyLockupTxRegistry from './lockup/tx.registry';
import * as symphonyMarketV1beta1TxRegistry from './market/v1beta1/tx.registry';
import * as symphonyPoolmanagerV1beta1TxRegistry from './poolmanager/v1beta1/tx.registry';
import * as symphonyProtorevV1beta1TxRegistry from './protorev/v1beta1/tx.registry';
import * as symphonySmartaccountV1beta1TxRegistry from './smartaccount/v1beta1/tx.registry';
import * as symphonySuperfluidTxRegistry from './superfluid/tx.registry';
import * as symphonyTokenfactoryV1beta1TxRegistry from './tokenfactory/v1beta1/tx.registry';
import * as symphonyTxfeesV1beta1TxRegistry from './txfees/v1beta1/tx.registry';
import * as symphonyValsetprefV1beta1TxRegistry from './valsetpref/v1beta1/tx.registry';
import * as symphonyBridgeV1beta1TxAmino from './bridge/v1beta1/tx.amino';
import * as symphonyConcentratedliquidityPoolmodelConcentratedV1beta1TxAmino from './concentratedliquidity/poolmodel/concentrated/v1beta1/tx.amino';
import * as symphonyConcentratedliquidityV1beta1TxAmino from './concentratedliquidity/v1beta1/tx.amino';
import * as symphonyGammPoolmodelsBalancerV1beta1TxAmino from './gamm/poolmodels/balancer/v1beta1/tx.amino';
import * as symphonyGammPoolmodelsStableswapV1beta1TxAmino from './gamm/poolmodels/stableswap/v1beta1/tx.amino';
import * as symphonyGammV1beta1TxAmino from './gamm/v1beta1/tx.amino';
import * as symphonyIbchooksTxAmino from './ibchooks/tx.amino';
import * as symphonyIncentivesTxAmino from './incentives/tx.amino';
import * as symphonyLockupTxAmino from './lockup/tx.amino';
import * as symphonyMarketV1beta1TxAmino from './market/v1beta1/tx.amino';
import * as symphonyPoolmanagerV1beta1TxAmino from './poolmanager/v1beta1/tx.amino';
import * as symphonyProtorevV1beta1TxAmino from './protorev/v1beta1/tx.amino';
import * as symphonySmartaccountV1beta1TxAmino from './smartaccount/v1beta1/tx.amino';
import * as symphonySuperfluidTxAmino from './superfluid/tx.amino';
import * as symphonyTokenfactoryV1beta1TxAmino from './tokenfactory/v1beta1/tx.amino';
import * as symphonyTxfeesV1beta1TxAmino from './txfees/v1beta1/tx.amino';
import * as symphonyValsetprefV1beta1TxAmino from './valsetpref/v1beta1/tx.amino';
export const symphonyAminoConverters = {
  ...symphonyBridgeV1beta1TxAmino.AminoConverter,
  ...symphonyConcentratedliquidityPoolmodelConcentratedV1beta1TxAmino.AminoConverter,
  ...symphonyConcentratedliquidityV1beta1TxAmino.AminoConverter,
  ...symphonyGammPoolmodelsBalancerV1beta1TxAmino.AminoConverter,
  ...symphonyGammPoolmodelsStableswapV1beta1TxAmino.AminoConverter,
  ...symphonyGammV1beta1TxAmino.AminoConverter,
  ...symphonyIbchooksTxAmino.AminoConverter,
  ...symphonyIncentivesTxAmino.AminoConverter,
  ...symphonyLockupTxAmino.AminoConverter,
  ...symphonyMarketV1beta1TxAmino.AminoConverter,
  ...symphonyPoolmanagerV1beta1TxAmino.AminoConverter,
  ...symphonyProtorevV1beta1TxAmino.AminoConverter,
  ...symphonySmartaccountV1beta1TxAmino.AminoConverter,
  ...symphonySuperfluidTxAmino.AminoConverter,
  ...symphonyTokenfactoryV1beta1TxAmino.AminoConverter,
  ...symphonyTxfeesV1beta1TxAmino.AminoConverter,
  ...symphonyValsetprefV1beta1TxAmino.AminoConverter,
};
export const symphonyProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [
  ...symphonyBridgeV1beta1TxRegistry.registry,
  ...symphonyConcentratedliquidityPoolmodelConcentratedV1beta1TxRegistry.registry,
  ...symphonyConcentratedliquidityV1beta1TxRegistry.registry,
  ...symphonyGammPoolmodelsBalancerV1beta1TxRegistry.registry,
  ...symphonyGammPoolmodelsStableswapV1beta1TxRegistry.registry,
  ...symphonyGammV1beta1TxRegistry.registry,
  ...symphonyIbchooksTxRegistry.registry,
  ...symphonyIncentivesTxRegistry.registry,
  ...symphonyLockupTxRegistry.registry,
  ...symphonyMarketV1beta1TxRegistry.registry,
  ...symphonyPoolmanagerV1beta1TxRegistry.registry,
  ...symphonyProtorevV1beta1TxRegistry.registry,
  ...symphonySmartaccountV1beta1TxRegistry.registry,
  ...symphonySuperfluidTxRegistry.registry,
  ...symphonyTokenfactoryV1beta1TxRegistry.registry,
  ...symphonyTxfeesV1beta1TxRegistry.registry,
  ...symphonyValsetprefV1beta1TxRegistry.registry,
];
export const getSigningSymphonyClientOptions = ({
  defaultTypes = defaultRegistryTypes,
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...symphonyProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...symphonyAminoConverters,
  });
  return {
    registry,
    aminoTypes,
  };
};
export const getSigningSymphonyClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes,
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const { registry, aminoTypes } = getSigningSymphonyClientOptions({
    defaultTypes,
  });
  const client = await SigningStargateClient.connectWithSigner(
    rpcEndpoint,
    signer,
    {
      registry: registry as any,
      aminoTypes,
    },
  );
  return client;
};
